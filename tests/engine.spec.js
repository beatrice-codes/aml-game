const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '..', 'compliance-grid', 'content.js'), 'utf8');
const CONTENT = JSON.parse(raw.replace('window.__COMPLIANCE_GRID_CONTENT__ = ', '').replace(/;\s*$/, ''));
const CHAPTER_ORDER = ['foundations', 'reading_risk', 'the_gate', 'enhanced_measures', 'the_flag'];

function chapter(key) {
  return CONTENT.chapters.find((c) => c.chapter_key === key);
}

// Node/option labels can contain glossary terms, which the app annotates with an
// inline superscript "?" marker (see annotateGlossary) — that changes the rendered
// text, so we select by DOM position (which mirrors content array order) rather
// than by full-text matching, which would break whenever a label contains a term.
async function answerCorrectly(page, question) {
  if (question.mechanic === 'nodegrid') {
    const cards = page.locator('.node-card');
    for (let i = 0; i < question.nodes.length; i++) {
      await cards.nth(i).locator('.tier-btn.tier-' + question.nodes[i].correctTier).click();
    }
  } else if (question.mechanic === 'multiselect') {
    const correctIdx = question.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i !== -1);
    for (const idx of correctIdx) {
      await page.locator('.option-btn').nth(idx).click();
    }
  } else {
    const idx = question.options.findIndex((o) => o.correct);
    await page.locator('.option-btn').nth(idx).click();
  }
  await page.locator('[data-action="confirm-answer"]').click();
}

async function answerIncorrectly(page, question) {
  if (question.mechanic === 'nodegrid') {
    const cards = page.locator('.node-card');
    for (let i = 0; i < question.nodes.length; i++) {
      const wrongTier = ['low', 'medium', 'high'].find((t) => t !== question.nodes[i].correctTier);
      await cards.nth(i).locator('.tier-btn.tier-' + wrongTier).click();
    }
  } else if (question.mechanic === 'multiselect') {
    // pick select_count wrong-or-partial options so the set doesn't exactly match the correct set
    const wrongIdx = question.options.map((o, i) => (!o.correct ? i : -1)).filter((i) => i !== -1);
    const correctIdx = question.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i !== -1);
    const pick = wrongIdx.length >= question.select_count
      ? wrongIdx.slice(0, question.select_count)
      : wrongIdx.concat(correctIdx).slice(0, question.select_count);
    for (const idx of pick) {
      await page.locator('.option-btn').nth(idx).click();
    }
  } else {
    const idx = question.options.findIndex((o) => !o.correct);
    await page.locator('.option-btn').nth(idx).click();
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

test('chapter map renders all 5 chapters, only the first unlocked', async ({ page }) => {
  await openMap(page);
  await expect(page.locator('.app-title')).toHaveText('Compliance Grid');
  const cards = page.locator('.chapter-card');
  await expect(cards).toHaveCount(5);
  await expect(cards.nth(0)).not.toHaveClass(/locked/);
  for (let i = 1; i < 5; i++) {
    await expect(cards.nth(i)).toHaveClass(/locked/);
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

  await answerIncorrectly(page, q1);
  await expect(page.locator('.feedback-label')).toHaveText('✗ Not quite');
  await expect(page.locator('.feedback-text')).toContainText(q1.incorrect_feedback.slice(0, 20));
  await page.locator('[data-action="continue"]').click();

  await expect(page.locator('.q-meta')).toContainText('FOLLOW-UP');
  await expect(page.locator('.task-prompt')).toContainText(q1.followup_question.task_prompt.slice(0, 15));
  const fuCorrectIdx = q1.followup_question.options.findIndex((o) => o.correct);
  await page.locator('.option-btn').nth(fuCorrectIdx).click();
  await page.locator('[data-action="confirm-answer"]').click();
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
    await answerCorrectly(page, q);
    await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
    await page.locator('[data-action="continue"]').click();
  }

  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
  await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');

  await page.locator('.btn-primary[data-action="back-to-map"]').click();
  const cards = page.locator('.chapter-card');
  await expect(cards.nth(0).locator('.meta-row')).toContainText('100%');
  await expect(cards.nth(1)).not.toHaveClass(/locked/);
});

test('a tiergate question (in an unlocked later chapter) renders options and grades correctly', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const foundations = chapter('foundations');
  const readingRisk = chapter('reading_risk');
  const tiergateQ = readingRisk.questions.find((q) => q.mechanic === 'tiergate');
  test.skip(!tiergateQ, 'no tiergate question in reading_risk to exercise');

  // unlock chapter 2 by completing chapter 1 correctly
  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  for (const q of foundations.questions) {
    await answerCorrectly(page, q);
    await page.locator('[data-action="continue"]').click();
  }
  await page.locator('.btn-primary[data-action="back-to-map"]').click();

  await page.locator('.chapter-card').nth(1).click();
  await page.locator('[data-action="start-chapter"]').click();

  // fast-forward (all correct) until we reach the tiergate question
  let q = readingRisk.questions[0];
  let i = 0;
  while (q.mechanic !== 'tiergate') {
    await answerCorrectly(page, q);
    await page.locator('[data-action="continue"]').click();
    i += 1;
    q = readingRisk.questions[i];
  }

  const correctIdx = q.options.findIndex((o) => o.correct);
  await page.locator('.option-btn').nth(correctIdx).click();
  await page.locator('[data-action="confirm-answer"]').click();
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
  await answerCorrectly(page, ch.questions[0]);
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
    await answerCorrectly(page, ch.questions[i]);
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
      await answerCorrectly(page, q);
      await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
      await page.locator('[data-action="continue"]').click();
    }

    await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
    await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');
    await page.locator('.btn-primary[data-action="back-to-map"]').click();
  }

  expect(errors).toEqual([]);
});
