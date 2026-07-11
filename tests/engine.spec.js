const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '..', 'compliance-grid', 'content.js'), 'utf8');
const CONTENT = JSON.parse(raw.replace('window.__COMPLIANCE_GRID_CONTENT__ = ', '').replace(/;\s*$/, ''));
const CHAPTER_ORDER = ['foundations', 'reading_risk', 'the_gate', 'enhanced_measures', 'the_flag'];

function chapter(key) {
  return CONTENT.chapters.find((c) => c.chapter_key === key);
}

// The app shuffles each question's option order in the browser, in place, every time it's
// shown (see shuffleQuestionOptions in index.html) — so the static CONTENT parsed above (a
// separate, unshuffled copy) can't tell us which DOM position is correct. window.__COMPLIANCE_GRID_CONTENT__
// in the page IS the same object the app mutates, so we read the live options (including their
// tier, for tiergate) immediately before interacting — that always matches what's on screen.
async function liveOptions(page, chapterKey, questionId, isFollowup, itemIndex) {
  return page.evaluate(
    ({ chapterKey, questionId, isFollowup, itemIndex }) => {
      const CONTENT = window.__COMPLIANCE_GRID_CONTENT__;
      const ch = CONTENT.chapters.find((c) => c.chapter_key === chapterKey);
      const q = ch.questions.find((q) => q.id === questionId);
      const target = isFollowup ? q.followup_question : (itemIndex !== undefined ? q.items[itemIndex] : q);
      return target.options;
    },
    { chapterKey, questionId, isFollowup: !!isFollowup, itemIndex }
  );
}

// Every tiergate question renders as a build/assemble interaction (step-chips + a gate
// visual) instead of plain option buttons — detect the live UI rather than assuming it.
// Step 0 (identity) is always on; toggling step 1 alone reaches Standard, all three Enhanced,
// none (default) Simplified — see TIER_STEPS/tierForActiveCount in index.html.
async function setTierGateTo(page, tierLower) {
  if (tierLower === 'enhanced') {
    await page.locator('.step-chip[data-step="1"]').click();
    await page.locator('.step-chip[data-step="2"]').click();
    await page.locator('.step-chip[data-step="3"]').click();
  } else if (tierLower === 'standard') {
    await page.locator('.step-chip[data-step="1"]').click();
  }
  await expect(page.locator('.gate-tier-label')).toHaveText(tierLower);
}

// Node/option labels can contain glossary terms, which the app annotates with an
// inline superscript "?" marker (see annotateGlossary) — that changes the rendered
// text, so we select by DOM position (matched live against the shuffled option order,
// see liveOptions above) rather than by full-text matching.
async function answerCorrectly(page, chapterKey, question, isFollowup) {
  if (question.mechanic === 'quickcall' && !isFollowup) {
    for (let i = 0; i < question.items.length; i++) {
      const opts = await liveOptions(page, chapterKey, question.id, false, i);
      await page.locator('.quickcall-options .option-btn').nth(opts.findIndex((o) => o.correct)).click();
      await page.locator('[data-action="quickcall-next"]').click();
    }
    return;
  }
  const opts = await liveOptions(page, chapterKey, question.id, isFollowup);
  if (question.mechanic === 'tiergate' && !isFollowup && (await page.locator('.step-chip').count()) > 0) {
    const correctOpt = opts.find((o) => o.correct);
    await setTierGateTo(page, (correctOpt.tier || correctOpt.label).toLowerCase());
  } else if (question.mechanic === 'multiselect' && !isFollowup) {
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].correct) await page.locator('.option-btn').nth(i).click();
    }
  } else {
    await page.locator('.option-btn').nth(opts.findIndex((o) => o.correct)).click();
  }
  await page.locator('[data-action="confirm-answer"]').click();
}

async function answerIncorrectly(page, chapterKey, question, isFollowup) {
  const opts = await liveOptions(page, chapterKey, question.id, isFollowup);
  if (question.mechanic === 'tiergate' && !isFollowup && (await page.locator('.step-chip').count()) > 0) {
    const correctOpt = opts.find((o) => o.correct);
    const correctTier = (correctOpt.tier || correctOpt.label).toLowerCase();
    await setTierGateTo(page, correctTier === 'enhanced' ? 'simplified' : 'enhanced');
  } else if (question.mechanic === 'multiselect' && !isFollowup) {
    const wrongIdx = opts.map((o, i) => (!o.correct ? i : -1)).filter((i) => i !== -1);
    const correctIdx = opts.map((o, i) => (o.correct ? i : -1)).filter((i) => i !== -1);
    const pick = wrongIdx.length >= question.select_count
      ? wrongIdx.slice(0, question.select_count)
      : wrongIdx.concat(correctIdx).slice(0, question.select_count);
    for (const idx of pick) {
      await page.locator('.option-btn').nth(idx).click();
    }
  } else {
    await page.locator('.option-btn').nth(opts.findIndex((o) => !o.correct)).click();
  }
  await page.locator('[data-action="confirm-answer"]').click();
}

async function openMap(page) {
  await page.goto('/');
  await page.locator('[data-action="enter-app"]').click();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
});

test('home screen shows branding and a Start button that leads to the chapter map', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.home-title')).toHaveText('Compliance Grid');
  await expect(page.locator('[data-action="enter-app"]')).toHaveText('Start ▶');
  await page.locator('[data-action="enter-app"]').click();
  await expect(page.locator('.chapter-card')).toHaveCount(5);
});

test('chapter map renders all 5 chapters, none locked (every chapter is open anytime)', async ({ page }) => {
  await openMap(page);
  await expect(page.locator('.game-logo .word')).toHaveText('Compliance Grid');
  const cards = page.locator('.chapter-card');
  await expect(cards).toHaveCount(5);
  for (let i = 0; i < 5; i++) {
    await expect(cards.nth(i)).not.toHaveClass(/locked/);
  }
});

test('opening the first chapter shows its real briefing', async ({ page }) => {
  await openMap(page);
  await page.locator('.chapter-card').first().click();
  const b = chapter('foundations').briefing;
  await expect(page.locator('.briefing-title')).toHaveText(b.title);
  await expect(page.locator('.objectives li')).toHaveCount(3);
  await expect(page.locator('.article-range')).toHaveText(b.article_range);
});

test('an incorrect answer shows the mistake, then a simpler followup, before advancing', async ({ page }) => {
  await openMap(page);
  const ch = chapter('foundations');
  const q1 = ch.questions[0];

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  await answerIncorrectly(page, ch.chapter_key, q1);
  await expect(page.locator('.feedback-label')).toHaveText('✗ Not quite');
  await expect(page.locator('.feedback-text')).toContainText(q1.incorrect_feedback.slice(0, 20));
  // an incorrect, non-followup answer with a followup_question available offers a choice
  // (try the followup vs. skip it) instead of a plain continue button.
  await page.locator('[data-action="continue-followup"]').click();

  await expect(page.locator('.q-meta')).toContainText('FOLLOW-UP');
  await expect(page.locator('.task-prompt')).toContainText(q1.followup_question.task_prompt.slice(0, 15));
  await answerCorrectly(page, ch.chapter_key, q1, true);
  await page.locator('[data-action="continue"]').click();

  await expect(page.locator('.q-meta')).toContainText('QUESTION 2 / ' + ch.questions.length);
});

test('completing chapter 1 with all correct answers hits 100% and unlocks chapter 2', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  for (const q of ch.questions) {
    await answerCorrectly(page, ch.chapter_key, q);
    await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
    await page.locator('[data-action="continue"]').click();
  }

  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
  await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');

  await page.getByRole('button', { name: 'Back to map' }).click();
  const cards = page.locator('.chapter-card');
  await expect(cards.nth(0).locator('.meta-row')).toContainText('100%');
  await expect(cards.nth(1)).not.toHaveClass(/locked/);
});

test('a tiergate question (in a later chapter) renders options and grades correctly', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const foundations = chapter('foundations');
  const readingRisk = chapter('reading_risk');
  const tiergateQ = readingRisk.questions.find((q) => q.mechanic === 'tiergate');
  test.skip(!tiergateQ, 'no tiergate question in reading_risk to exercise');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  for (const q of foundations.questions) {
    await answerCorrectly(page, foundations.chapter_key, q);
    await page.locator('[data-action="continue"]').click();
  }
  await page.getByRole('button', { name: 'Back to map' }).click();

  await page.locator('.chapter-card').nth(1).click();
  await page.locator('[data-action="start-chapter"]').click();

  // fast-forward (all correct) until we reach the tiergate question
  let q = readingRisk.questions[0];
  let i = 0;
  while (q.mechanic !== 'tiergate') {
    await answerCorrectly(page, readingRisk.chapter_key, q);
    await page.locator('[data-action="continue"]').click();
    i += 1;
    q = readingRisk.questions[i];
  }

  await answerCorrectly(page, readingRisk.chapter_key, q);
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('pause freezes session and resume restores it exactly', async ({ page }) => {
  await openMap(page);
  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  const promptBefore = await page.locator('.task-prompt').textContent();

  await page.locator('[data-action="pause"]').click();
  await expect(page.locator('.overlay-card h2')).toHaveText('Paused');
  await page.locator('[data-action="resume"]').click();
  await expect(page.locator('.overlay-card')).toHaveCount(0);
  await expect(page.locator('.task-prompt')).toHaveText(promptBefore);
});

test('progress persists across reload and resumes at the exact question', async ({ page }) => {
  await openMap(page);
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  await answerCorrectly(page, ch.chapter_key, ch.questions[0]);
  await page.locator('[data-action="continue"]').click();
  await page.locator('[data-action="pause"]').click();
  await page.locator('.overlay-card [data-action="back-to-map"]').click();

  await page.reload();
  await page.locator('[data-action="enter-app"]').click();
  const expectedPct = Math.round((1 / ch.questions.length) * 100);
  const cards = page.locator('.chapter-card');
  await expect(cards.first().locator('.meta-row')).toContainText(expectedPct + '%');
  await cards.first().click();
  await expect(page.locator('[data-action="start-chapter"]')).toHaveText('Resume ▶');
  await page.locator('[data-action="start-chapter"]').click();
  await expect(page.locator('.q-meta')).toContainText('QUESTION 2 / ' + ch.questions.length);
});

test('a glossary term is tappable and shows its real definition', async ({ page }) => {
  await openMap(page);
  const ch = chapter('foundations');
  const usedTerm = CONTENT.glossary.find((g) => {
    const re = new RegExp('\\b' + g.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    return ch.questions.some((q) => re.test(q.task_prompt) || re.test(q.scenario || ''));
  });
  test.skip(!usedTerm, 'no glossary term used in chapter 1 questions');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  // step through until a question renders that uses the term
  for (let i = 0; i < ch.questions.length; i++) {
    const glossEl = page.locator('.gloss', { hasText: usedTerm.term });
    if (await glossEl.count()) {
      await glossEl.first().click();
      break;
    }
    await answerCorrectly(page, ch.chapter_key, ch.questions[i]);
    await page.locator('[data-action="continue"]').click();
  }

  await expect(page.locator('.glossary-term')).toHaveText(usedTerm.term);
  await expect(page.locator('.glossary-def')).toHaveText(usedTerm.definition);
  await page.locator('[data-action="close-glossary"]').click();
  await expect(page.locator('.glossary-popover')).toHaveCount(0);
});

test('every question in every chapter renders and grades without runtime errors', async ({ page }) => {
  test.setTimeout(10 * 60 * 1000);
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await openMap(page);

  for (const key of CHAPTER_ORDER) {
    const ch = chapter(key);
    const cardIndex = CHAPTER_ORDER.indexOf(key);
    await page.locator('.chapter-card').nth(cardIndex).click();
    await expect(page.locator('.briefing-title')).toHaveText(ch.briefing.title);
    await page.locator('[data-action="start-chapter"]').click();

    for (const q of ch.questions) {
      await expect(page.locator('.task-prompt')).toBeVisible();
      await answerCorrectly(page, ch.chapter_key, q);
      await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
      await page.locator('[data-action="continue"]').click();
    }

    await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
    await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');
    await page.getByRole('button', { name: 'Back to map' }).click();
  }

  expect(errors).toEqual([]);
});
