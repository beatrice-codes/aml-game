const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '..', 'compliance-grid', 'content.js'), 'utf8');
const CONTENT = JSON.parse(raw.replace('window.__COMPLIANCE_GRID_CONTENT__ = ', '').replace(/;\s*$/, ''));
const CHAPTER_ORDER = ['foundations', 'sow', 'the_gate', 'enhanced_measures', 'the_flag'];

function chapter(key) {
  return CONTENT.chapters.find((c) => c.chapter_key === key);
}

// Options are rendered in a runtime-shuffled order but always keep a data-index
// attribute equal to their original position in the content array, so tests select
// by that attribute rather than DOM position (which now varies run to run).
async function clickOptionByIndex(page, idx) {
  await page.locator('.option-btn[data-index="' + idx + '"]').click();
}

async function answerCorrectly(page, question) {
  if (question.mechanic === 'nodegrid') {
    const cards = page.locator('.node-card');
    for (let i = 0; i < question.nodes.length; i++) {
      await cards.nth(i).locator('.tier-btn.tier-' + question.nodes[i].correctTier).click();
    }
  } else if (question.mechanic === 'checklist') {
    for (let i = 0; i < question.options.length; i++) {
      if (question.options[i].correct) await clickOptionByIndex(page, i);
    }
  } else {
    const idx = question.options.findIndex((o) => o.correct);
    await clickOptionByIndex(page, idx);
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
  } else {
    // Selecting exactly one wrong option is guaranteed incorrect for mcq/passflag
    // (wrong answer) and for checklist (a single wrong pick can never equal the
    // full correct set, since every checklist question has >=1 correct option).
    const idx = question.options.findIndex((o) => !o.correct);
    await clickOptionByIndex(page, idx);
  }
  await page.locator('[data-action="confirm-answer"]').click();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
});

test('chapter map renders all 5 chapters, none locked', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.app-title')).toHaveText('Compliance Grid');
  await expect(page.locator('.app-tagline')).toContainText('stop money laundering');
  const cards = page.locator('.chapter-card');
  await expect(cards).toHaveCount(5);
  for (let i = 0; i < 5; i++) {
    await expect(cards.nth(i)).not.toHaveClass(/locked/);
    await expect(cards.nth(i)).toHaveAttribute('data-action', 'open-chapter');
  }
});

test('opening the first chapter shows its real briefing', async ({ page }) => {
  await page.goto('/');
  await page.locator('.chapter-card').first().click();
  const b = chapter('foundations').briefing;
  await expect(page.locator('.briefing-title')).toHaveText(b.title);
  await expect(page.locator('.objectives li')).toHaveCount(3);
  await expect(page.locator('.article-range')).toHaveText(b.article_range);
});

test('cannot confirm without a selection, and options lock once answered', async ({ page }) => {
  await page.goto('/');
  const q = chapter('foundations').questions[0];

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  await expect(page.locator('[data-action="confirm-answer"]')).toBeDisabled();
  const idx = q.options.findIndex((o) => o.correct);
  await clickOptionByIndex(page, idx);
  await expect(page.locator('[data-action="confirm-answer"]')).toBeEnabled();

  await page.locator('[data-action="confirm-answer"]').click();
  await expect(page.locator('.option-btn').first()).toBeDisabled();
  await expect(page.locator('[data-action="confirm-answer"]')).toBeDisabled();
});

test('an incorrect answer offers a retry; accepting moves into the simpler followup', async ({ page }) => {
  await page.goto('/');
  const ch = chapter('foundations');
  const q1 = ch.questions[0];

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  await answerIncorrectly(page, q1);
  await expect(page.locator('.feedback-label')).toHaveText('✗ Not quite');
  // Slicing from the start of the raw text is unsafe here: q1's own text opens with
  // "AML/CFT", a glossary term the app wraps in an inline "?" marker, which breaks a
  // literal substring match. Assert against a later, glossary-term-free chunk instead.
  await expect(page.locator('.feedback-text')).toContainText('designed to stop illegal money');
  await page.locator('[data-action="continue"]').click();

  // no options are shown on the retry-offer screen — just an accept/decline choice
  await expect(page.locator('[data-action="accept-retry"]')).toBeVisible();
  await expect(page.locator('[data-action="decline-retry"]')).toBeVisible();
  await expect(page.locator('.option-btn')).toHaveCount(0);

  await page.locator('[data-action="accept-retry"]').click();
  await expect(page.locator('.q-meta')).toContainText('FOLLOW-UP');
  await expect(page.locator('.task-prompt')).toContainText(q1.followup_question.task_prompt.slice(0, 15));

  const fuCorrectIdx = q1.followup_question.options.findIndex((o) => o.correct);
  await clickOptionByIndex(page, fuCorrectIdx);
  await page.locator('[data-action="confirm-answer"]').click();
  await page.locator('[data-action="continue"]').click();

  await expect(page.locator('.q-meta')).toContainText('QUESTION 2 / ' + ch.questions.length);
});

test('declining a retry skips straight to the next question', async ({ page }) => {
  await page.goto('/');
  const ch = chapter('foundations');
  const q1 = ch.questions[0];

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  await answerIncorrectly(page, q1);
  await page.locator('[data-action="continue"]').click();
  await page.locator('[data-action="decline-retry"]').click();

  await expect(page.locator('.q-meta')).toContainText('QUESTION 2 / ' + ch.questions.length);
});

test('completing a chapter with all correct answers hits 100% with no mistakes to review', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('/');
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
  await expect(page.locator('[data-action="review-mistakes"]')).toHaveCount(0);

  await page.locator('[data-action="back-to-map"]').click();
  const cards = page.locator('.chapter-card');
  await expect(cards.nth(0).locator('.meta-row')).toContainText('100%');
  await expect(cards.nth(0).locator('.chip')).toHaveText('✓');
  // still fully playable, never locked
  await expect(cards.nth(1)).toHaveAttribute('data-action', 'open-chapter');
});

test('a run with a mistake produces a reviewable mistakes list', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  await answerIncorrectly(page, ch.questions[0]);
  await page.locator('[data-action="continue"]').click();
  await page.locator('[data-action="decline-retry"]').click();

  for (let i = 1; i < ch.questions.length; i++) {
    await answerCorrectly(page, ch.questions[i]);
    await page.locator('[data-action="continue"]').click();
  }

  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
  await expect(page.locator('[data-action="review-mistakes"]')).toContainText('1');

  await page.locator('[data-action="review-mistakes"]').click();
  // Same glossary-marker caveat as above — q1's task_prompt opens with "AML/CFT",
  // so assert against a later chunk of the text instead of a raw prefix slice.
  await expect(page.locator('.task-prompt').first()).toContainText('core purpose when onboarding a merchant');

  await page.locator('[data-action="back-to-summary"]').click();
  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
});

test('reopening a completed chapter shows the results screen, not the start briefing', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/');
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  for (const q of ch.questions) {
    await answerCorrectly(page, q);
    await page.locator('[data-action="continue"]').click();
  }
  await page.locator('[data-action="back-to-map"]').click();

  await page.locator('.chapter-card').first().click();
  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
  await expect(page.locator('[data-action="start-chapter"]')).toHaveCount(0);

  await page.locator('[data-action="view-briefing"]').click();
  await expect(page.locator('.briefing-title')).toHaveText(ch.briefing.title);
});

test('the checklist mechanic (Enhanced Measures) grades an exact-set match', async ({ page }) => {
  await page.goto('/');
  const ch = chapter('enhanced_measures');
  const q = ch.questions[0];
  expect(q.mechanic).toBe('checklist');

  await page.locator('.chapter-card').nth(CHAPTER_ORDER.indexOf('enhanced_measures')).click();
  await page.locator('[data-action="start-chapter"]').click();

  await expect(page.locator('.checklist-hint')).toBeVisible();
  await answerCorrectly(page, q);
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('pause freezes session and resume restores it exactly', async ({ page }) => {
  await page.goto('/');
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
  await page.goto('/');
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  await answerCorrectly(page, ch.questions[0]);
  await page.locator('[data-action="continue"]').click();
  await page.locator('[data-action="pause"]').click();
  await page.locator('.overlay-card [data-action="back-to-map"]').click();

  await page.reload();
  const expectedPct = Math.round((1 / ch.questions.length) * 100);
  const cards = page.locator('.chapter-card');
  await expect(cards.first().locator('.meta-row')).toContainText(expectedPct + '%');
  await cards.first().click();
  await expect(page.locator('[data-action="start-chapter"]')).toHaveText('Resume ▶');
  await page.locator('[data-action="start-chapter"]').click();
  await expect(page.locator('.q-meta')).toContainText('QUESTION 2 / ' + ch.questions.length);
});

test('a glossary term is tappable and shows its real definition', async ({ page }) => {
  await page.goto('/');
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

  await page.goto('/');

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
    await page.locator('[data-action="back-to-map"]').click();
  }

  expect(errors).toEqual([]);
});
