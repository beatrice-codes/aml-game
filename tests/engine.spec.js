const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, '..', 'compliance-grid', 'content.js'), 'utf8');
const CONTENT = JSON.parse(raw.replace('window.__COMPLIANCE_GRID_CONTENT__ = ', '').replace(/;\s*$/, ''));
const CHAPTER_ORDER = ['foundations', 'reading_risk', 'the_gate', 'enhanced_measures', 'the_flag'];
const GATE_PATTERN = {
  simplified: [true, false, false, false],
  standard: [true, true, true, false],
  enhanced: [true, true, true, true],
};

function chapter(key) {
  return CONTENT.chapters.find((c) => c.chapter_key === key);
}

// The app shuffles each question's option order (and match/chain order) in the browser, in
// place, every time it's shown — so the static CONTENT parsed above (a separate, unshuffled
// copy) can't tell us which DOM position is correct. window.__COMPLIANCE_GRID_CONTENT__ in the
// page IS the same object the app mutates, so we read live data immediately before interacting.
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

async function setGateStepsTo(page, tierLower) {
  const pattern = GATE_PATTERN[tierLower] || GATE_PATTERN.standard;
  // step 0 (identity) is always on and locked; only toggle steps 1-3 as needed.
  for (let i = 1; i < pattern.length; i++) {
    const chip = page.locator('.step-chip[data-step="' + i + '"]');
    const isActive = (await chip.getAttribute('class')).includes('active');
    if (isActive !== pattern[i]) await chip.click();
  }
}

// Drags a chain-item from its current slot to a target slot using real pointer gestures
// (the app uses Pointer Events + setPointerCapture, see index.html) rather than reaching into
// state directly, so this test exercises the actual drag implementation.
async function dragChainItemToSlot(page, fromSlot, toSlot) {
  if (fromSlot === toSlot) return;
  const item = page.locator('.chain-item[data-slot="' + fromSlot + '"]');
  const box = await item.boundingBox();
  const rowBox = await page.locator('.chain-row').first().boundingBox();
  const rowHeight = rowBox.height + 8;
  const startX = box.x + box.width / 2;
  const startY = box.y + box.height / 2;
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(startX, startY + (toSlot - fromSlot) * rowHeight, { steps: 8 });
  await page.mouse.up();
}

async function sortChainIntoOrder(page, chainItems) {
  // Bubble the items into correct order (chain_items[i].order gives the 1-based target slot),
  // re-reading live DOM state between each drag since a drag can shift other rows.
  for (let pass = 0; pass < chainItems.length; pass++) {
    const slots = await page.locator('.chain-item').evaluateAll((els) =>
      els.map((el) => ({ origIdx: parseInt(el.getAttribute('data-orig-idx'), 10), slot: parseInt(el.getAttribute('data-slot'), 10) }))
    );
    slots.sort((a, b) => a.slot - b.slot);
    let moved = false;
    for (const entry of slots) {
      const targetSlot = chainItems[entry.origIdx].order - 1;
      if (entry.slot !== targetSlot) {
        await dragChainItemToSlot(page, entry.slot, targetSlot);
        moved = true;
        break;
      }
    }
    if (!moved) break;
  }
}

async function answerCorrectly(page, chapterKey, question, isFollowup) {
  if (question.mechanic === 'quickcall' && !isFollowup) {
    for (let i = 0; i < question.items.length; i++) {
      const opts = await liveOptions(page, chapterKey, question.id, false, i);
      await page.locator('.quickcall-options .option-btn').nth(opts.findIndex((o) => o.correct)).click();
      await page.locator('[data-action="quickcall-next"]').click();
    }
    return;
  }
  if (question.mechanic === 'build_gate' && !isFollowup) {
    const opts = await liveOptions(page, chapterKey, question.id, false);
    const correctOpt = opts.find((o) => o.correct);
    await setGateStepsTo(page, (correctOpt.tier || correctOpt.label).toLowerCase());
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'order_chain' && !isFollowup) {
    await sortChainIntoOrder(page, question.chain_items);
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'flip_card' && !isFollowup) {
    await page.locator('[data-action="select-flip"][data-value="' + question.answer + '"]').click();
    return;
  }
  if (question.mechanic === 'match_term' && !isFollowup) {
    for (let i = 0; i < question.pairs.length; i++) {
      await page.locator('.match-tile[data-role="term"][data-pair="' + i + '"]').click();
      await page.locator('.match-tile[data-role="def"][data-pair="' + i + '"]').click();
    }
    return;
  }
  const opts = await liveOptions(page, chapterKey, question.id, isFollowup);
  if (question.mechanic === 'stamp' && question.select_count && !isFollowup) {
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].correct) await page.locator('.option-btn').nth(i).click();
    }
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'stamp' && !question.select_count && !isFollowup) {
    // single-tap stamp (numeric threshold) auto-resolves on tap, no Confirm needed.
    await page.locator('.option-btn').nth(opts.findIndex((o) => o.correct)).click();
    return;
  }
  await page.locator('.option-btn').nth(opts.findIndex((o) => o.correct)).click();
  await page.locator('[data-action="confirm-answer"]').click();
}

async function answerIncorrectly(page, chapterKey, question, isFollowup) {
  const opts = await liveOptions(page, chapterKey, question.id, isFollowup);
  if (question.mechanic === 'build_gate' && !isFollowup) {
    const correctOpt = opts.find((o) => o.correct);
    const correctTier = (correctOpt.tier || correctOpt.label).toLowerCase();
    await setGateStepsTo(page, correctTier === 'enhanced' ? 'simplified' : 'enhanced');
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'order_chain' && !isFollowup) {
    // any arrangement that isn't the correct one — reverse the current (shuffled) order.
    const n = question.chain_items.length;
    for (let slot = 0; slot < n - 1; slot++) {
      await dragChainItemToSlot(page, 0, n - 1);
    }
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'flip_card' && !isFollowup) {
    await page.locator('[data-action="select-flip"][data-value="' + !question.answer + '"]').click();
    return;
  }
  if (question.mechanic === 'stamp' && question.select_count && !isFollowup) {
    const wrongIdx = opts.map((o, i) => (!o.correct ? i : -1)).filter((i) => i !== -1);
    const correctIdx = opts.map((o, i) => (o.correct ? i : -1)).filter((i) => i !== -1);
    const pick = wrongIdx.length >= question.select_count
      ? wrongIdx.slice(0, question.select_count)
      : wrongIdx.concat(correctIdx).slice(0, question.select_count);
    for (const idx of pick) {
      await page.locator('.option-btn').nth(idx).click();
    }
    await page.locator('[data-action="confirm-answer"]').click();
    return;
  }
  if (question.mechanic === 'stamp' && !question.select_count && !isFollowup) {
    await page.locator('.option-btn').nth(opts.findIndex((o) => !o.correct)).click();
    return;
  }
  await page.locator('.option-btn').nth(opts.findIndex((o) => !o.correct)).click();
  await page.locator('[data-action="confirm-answer"]').click();
}

async function openMap(page) {
  await page.goto('/');
  await page.locator('[data-action="enter-app"]').click();
}

// Some emulated mobile viewports in this environment report a `window.innerHeight` that
// doesn't match the actual visible viewport (confirmed reproducible even on a blank page with
// no app CSS at all — a chrome-headless-shell/mobile-emulation artifact, not a real device or
// app behavior), which can make a genuinely visible, enabled `position: fixed` bottom button
// spuriously fail Playwright's "not obscured" actionability check. Try a real click first (so
// a truly broken/disabled button still fails the test); only fall back to a forced click, with
// a short timeout so a real hang doesn't stall the whole suite.
async function clickContinue(page) {
  try {
    await page.locator('[data-action="continue"]').click({ timeout: 8000 });
  } catch (e) {
    await page.locator('[data-action="continue"]').click({ force: true });
  }
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
  // find the first question in ch.1 that still has a followup_question (not every mechanic has one).
  const q1Index = ch.questions.findIndex((q) => !!q.followup_question);
  const q1 = ch.questions[q1Index];

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();
  for (let i = 0; i < q1Index; i++) {
    await answerCorrectly(page, ch.chapter_key, ch.questions[i]);
    await clickContinue(page);
  }

  await answerIncorrectly(page, ch.chapter_key, q1);
  await expect(page.locator('.feedback-label')).toHaveText('✗ Not quite');
  // an incorrect, non-followup answer with a followup_question available offers a choice
  // (try the followup vs. skip it) instead of a plain continue button.
  await page.locator('[data-action="continue-followup"]').click();

  await expect(page.locator('.q-meta')).toContainText('FOLLOW-UP');
  await answerCorrectly(page, ch.chapter_key, q1, true);
  await clickContinue(page);

  await expect(page.locator('.q-meta')).toContainText('QUESTION ' + (q1Index + 2) + ' / ' + ch.questions.length);
});

test('completing chapter 1 with all correct answers hits 100%', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const ch = chapter('foundations');

  await page.locator('.chapter-card').first().click();
  await page.locator('[data-action="start-chapter"]').click();

  for (const q of ch.questions) {
    await answerCorrectly(page, ch.chapter_key, q);
    await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
    await clickContinue(page);
  }

  await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
  await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');

  await page.getByRole('button', { name: 'Back to map' }).click();
  const cards = page.locator('.chapter-card');
  await expect(cards.nth(0).locator('.meta-row')).toContainText('100%');
  await expect(cards.nth(1)).not.toHaveClass(/locked/);
});

test('a build_gate question opens the gate on the correct checklist combination', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const readingRisk = chapter('reading_risk');
  const gateQ = readingRisk.questions.find((q) => q.mechanic === 'build_gate');
  test.skip(!gateQ, 'no build_gate question in reading_risk to exercise');

  await page.locator('.chapter-card').nth(1).click();
  await page.locator('[data-action="start-chapter"]').click();

  let q = readingRisk.questions[0];
  let i = 0;
  while (q.mechanic !== 'build_gate') {
    await answerCorrectly(page, readingRisk.chapter_key, q);
    await clickContinue(page);
    i += 1;
    q = readingRisk.questions[i];
  }

  await answerCorrectly(page, readingRisk.chapter_key, q);
  await expect(page.locator('.gate-visual')).toHaveClass(/gate-open/);
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('order_chain: dragging the reporting-chain items into the correct order grades correctly', async ({ page }) => {
  test.setTimeout(120000);
  await openMap(page);
  const theFlag = chapter('the_flag');
  const chainQ = theFlag.questions.find((q) => q.mechanic === 'order_chain');
  test.skip(!chainQ, 'no order_chain question in the_flag to exercise');

  await page.locator('.chapter-card').nth(4).click();
  await page.locator('[data-action="start-chapter"]').click();

  let q = theFlag.questions[0];
  let i = 0;
  while (q.mechanic !== 'order_chain') {
    await answerCorrectly(page, theFlag.chapter_key, q);
    await clickContinue(page);
    i += 1;
    q = theFlag.questions[i];
  }

  await expect(page.locator('.chain-item')).toHaveCount(chainQ.chain_items.length);
  await sortChainIntoOrder(page, chainQ.chain_items);
  await page.locator('[data-action="confirm-answer"]').click();
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('match_term: matching every pair auto-resolves the question as correct, with no Confirm button', async ({ page }) => {
  await openMap(page);
  const ch = CONTENT.chapters.map((c) => c).find((c) => c.questions.some((q) => q.mechanic === 'match_term'));
  const idx = CHAPTER_ORDER.indexOf(ch.chapter_key);

  await page.locator('.chapter-card').nth(idx).click();
  await page.locator('[data-action="start-chapter"]').click();

  let q = ch.questions[0];
  let i = 0;
  while (q.mechanic !== 'match_term') {
    await answerCorrectly(page, ch.chapter_key, q);
    await clickContinue(page);
    i += 1;
    q = ch.questions[i];
  }

  await expect(page.locator('[data-action="confirm-answer"]')).toHaveCount(0);
  await answerCorrectly(page, ch.chapter_key, q);
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('flip_card: tapping True/False resolves immediately and flips the card to reveal why', async ({ page }) => {
  await openMap(page);
  const ch = CONTENT.chapters.find((c) => c.questions.some((q) => q.mechanic === 'flip_card'));
  const idx = CHAPTER_ORDER.indexOf(ch.chapter_key);

  await page.locator('.chapter-card').nth(idx).click();
  await page.locator('[data-action="start-chapter"]').click();

  let q = ch.questions[0];
  let i = 0;
  while (q.mechanic !== 'flip_card') {
    await answerCorrectly(page, ch.chapter_key, q);
    await clickContinue(page);
    i += 1;
    q = ch.questions[i];
  }

  await page.locator('[data-action="select-flip"][data-value="' + q.answer + '"]').click();
  await expect(page.locator('.flipcard-face')).toHaveClass(/flipped/);
  await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
});

test('no countdown timer anywhere in quick calls — plain progress dots only', async ({ page }) => {
  await openMap(page);
  const ch = CONTENT.chapters.find((c) => c.questions.some((q) => q.mechanic === 'quickcall'));
  const idx = CHAPTER_ORDER.indexOf(ch.chapter_key);

  await page.locator('.chapter-card').nth(idx).click();
  await page.locator('[data-action="start-chapter"]').click();

  let q = ch.questions[0];
  let i = 0;
  while (q.mechanic !== 'quickcall') {
    await answerCorrectly(page, ch.chapter_key, q);
    await clickContinue(page);
    i += 1;
    q = ch.questions[i];
  }

  await expect(page.locator('.quickcall-dots')).toBeVisible();
  await expect(page.locator('.quickcall-timer, .quickcall-timer-fill')).toHaveCount(0);
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
  await clickContinue(page);
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

  // home screen should now surface a "continue where you left off" card for this chapter.
  await page.locator('[data-action="back-to-map"]').click();
  await page.goto('/');
  await expect(page.locator('.continue-card')).toBeVisible();
  await expect(page.locator('.continue-card')).toContainText(ch.briefing.title);
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

  for (let i = 0; i < ch.questions.length; i++) {
    const glossEl = page.locator('.gloss', { hasText: usedTerm.term });
    if (await glossEl.count()) {
      await glossEl.first().click();
      break;
    }
    await answerCorrectly(page, ch.chapter_key, ch.questions[i]);
    await clickContinue(page);
  }

  await expect(page.locator('.glossary-term')).toHaveText(usedTerm.term);
  await expect(page.locator('.glossary-def')).toHaveText(usedTerm.definition);
  await page.locator('[data-action="close-glossary"]').click();
  await expect(page.locator('.glossary-popover')).toHaveCount(0);
});

test('no duplicate glossary entries (PEP, EDD, UBO and other abbreviations each appear once)', async () => {
  const seen = {};
  for (const g of CONTENT.glossary) {
    const key = g.term.replace(/\s*\(.*/, '').trim().toLowerCase();
    seen[key] = (seen[key] || 0) + 1;
  }
  const dupes = Object.entries(seen).filter(([, count]) => count > 1);
  expect(dupes).toEqual([]);
});

test('each chapter has at most 10 questions, and the_flag is in easy->medium->hard order', async () => {
  for (const key of CHAPTER_ORDER) {
    expect(chapter(key).questions.length).toBeLessThanOrEqual(10);
  }
  const rank = { easy: 0, medium: 1, hard: 2 };
  const diffs = chapter('the_flag').questions.map((q) => rank[q.difficulty]);
  const sorted = diffs.slice().sort((a, b) => a - b);
  expect(diffs).toEqual(sorted);
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
      await expect(page.locator('.card')).toBeVisible();
      await answerCorrectly(page, ch.chapter_key, q);
      await expect(page.locator('.feedback-label')).toHaveText('✓ Correct');
      await clickContinue(page);
    }

    await expect(page.locator('.briefing-title')).toHaveText('Chapter complete');
    await expect(page.locator('.summary-stat .n').first()).toHaveText('100%');
    await page.getByRole('button', { name: 'Back to map' }).click();
  }

  expect(errors).toEqual([]);
});
