# Build Prompt: Compliance Grid — Content Fit, Branding & Game-Feel Sprint (v4, final)

> **How to run this:** in Terminal, `cd` into the project folder containing `index.html`, `content.js`, and `engine_spec.js`, then run `claude`. Ask it to read this file and implement it, and to show a diff of every change before committing anything — don't let it apply edits blind.

Solo-build note: you're running this yourself with Claude's help, not handing it to a team — so this version spells out exact content (ready to paste into `content.js`) and exact code touch-points, rather than leaving drafting to whoever implements it.

## Priority for this sprint, in order

1. **Game-feel prototype first.** Build the new `tiergate` and `passflag` interactions (§4) against a small representative set of questions and get this in front of yourself to evaluate. If the new feel doesn't land, better to find out now than after the full content pass.
2. **Content accuracy**, once the game-feel direction is confirmed — apply the drafted cuts/reworks/backfills below (§1–§3) across the whole bank.
3. **Branding and visual polish** (§5, §7, §8) — still worth doing, lowest priority, can trail behind or run in parallel whenever you have spare time.

## 0. `engine_spec.js` housekeeping (quick, do first regardless)

In plain terms: `engine_spec.js` is your automated test file — it's supposed to click through the app and confirm things work. Right now two of its checks are testing for things that don't exist anymore: a mechanic called `nodegrid` (the real one is named `tiergate`) and "locked" chapters (chapters aren't locked anymore — that was removed in an earlier sprint). So those two tests will fail even though the app itself is fine.

Fix (don't delete) both: point the `nodegrid` branch in `answerCorrectly`/`answerIncorrectly` at the real `tiergate` selectors (`.option-btn.tier-low/medium/high`), and remove the two assertions checking for a `locked` class on chapters 2–5. Keeping the tests (fixed) rather than deleting them preserves coverage for future changes.

## 1. Content to cut entirely (with each `followup_question`)

`gate-q1`, `gate-q12`, `flag-01`, `flag-03`, `flag-04`, `flag-05`, `flag-10`, `flag-09` — no honest merchant-onboarding equivalent exists for any of these (currency-bureau thresholds, refugee ID documents, physical branch cash handling). See v3 for the full reasoning per item if you want it again — it's unchanged.

## 2. Drafted backfill content (ready to paste, replacing the 8 cut slots above)

All of the following are grounded directly in the CBC AML/CFT Directive text already used elsewhere in this game — Article 36/37 (legal persons, sole traders/partnerships) for The Gate, and **Annex III's own "merchant acquiring" section** (Annex III, Part A(4)) for The Flag — which is the single best-fitting source in the whole directive for a payments-processor audience, since it's literally titled around accepting payment transactions from merchants.

### The Gate — 2 backfills

```json
{
  "id": "gate-q1",
  "difficulty": "easy",
  "mechanic": "mcq",
  "scenario": "",
  "task_prompt": "Which of these is a defining feature of a 'shell company' under Article 37?",
  "options": [
    { "label": "No genuine economic activity, and no physical presence beyond a mailing address", "correct": true },
    { "label": "It was incorporated more than 10 years ago", "correct": false },
    { "label": "It has fewer than 5 employees", "correct": false },
    { "label": "It operates in more than one country", "correct": false }
  ],
  "article_citation": "Art. 37",
  "correct_feedback": "Correct — a shell company under Article 37 has no genuine economic activity and no real physical presence, beyond perhaps a mailing address.",
  "incorrect_feedback": "Not quite — Article 37 defines a shell company by the absence of genuine economic activity and any real physical presence beyond a mailing address, not by age, headcount, or geography.",
  "followup_question": {
    "task_prompt": "True or false: a company can be a 'shell company' even if it has a mailing address?",
    "options": [
      { "label": "True", "correct": true },
      { "label": "False", "correct": false }
    ],
    "article_citation": "Art. 37"
  }
}
```

```json
{
  "id": "gate-q12",
  "difficulty": "medium",
  "mechanic": "mcq",
  "scenario": "A merchant applies for onboarding as a sole trader; the business has two partners who both have authority over the account.",
  "task_prompt": "Whose identity must be verified, under Article 36?",
  "options": [
    { "label": "Both partners, verified the same way as any natural person", "correct": true },
    { "label": "Only the partner who signs the application form", "correct": false },
    { "label": "Neither — sole traders and partnerships are exempt from identity checks", "correct": false },
    { "label": "Only whichever partner holds the larger ownership share", "correct": false }
  ],
  "article_citation": "Art. 36",
  "correct_feedback": "Correct — Article 36 requires verifying the identity of every partner or individual with authority over the account, the same way as for any natural person.",
  "incorrect_feedback": "Not quite — Article 36 requires identifying every partner or authorized individual, not just one signatory or the largest shareholder.",
  "followup_question": {
    "task_prompt": "Does a sole trader/partnership get lighter identity checks than an individual?",
    "options": [
      { "label": "No — same standard applies", "correct": true },
      { "label": "Yes — checks are simplified", "correct": false }
    ],
    "article_citation": "Art. 36"
  }
}
```

### The Flag — 6 backfills (from Annex III's merchant-acquiring red flags)

```json
{
  "id": "flag-01",
  "difficulty": "easy",
  "mechanic": "mcq",
  "scenario": "",
  "task_prompt": "Which of these is a genuine red flag for a merchant-acquiring relationship, per Annex III?",
  "options": [
    { "label": "A merchant's refund/reversal rate doesn't match its own history or similar merchants' typical rates", "correct": true },
    { "label": "A merchant processes transactions only during normal business hours", "correct": false },
    { "label": "A merchant's sales volume stays flat month to month", "correct": false },
    { "label": "A merchant renews its trade license on time", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct — an unusual refund/reversal pattern versus the merchant's own history, or versus similar merchants, is a listed red flag.",
  "incorrect_feedback": "Not quite — the red flag is an unusual refund/reversal pattern; the other options describe entirely normal merchant behavior.",
  "followup_question": {
    "task_prompt": "Is an unusually high refund rate (versus similar merchants) worth a closer look?",
    "options": [
      { "label": "Yes", "correct": true },
      { "label": "No", "correct": false }
    ],
    "article_citation": "Annex III (merchant acquiring)"
  }
}
```

```json
{
  "id": "flag-03",
  "difficulty": "easy",
  "mechanic": "passflag",
  "scenario": "A merchant's registered business address turns out to be just a mailing address, with no real connection to how the business actually operates.",
  "task_prompt": "Flag this, or let it pass?",
  "options": [
    { "label": "Flag", "correct": true },
    { "label": "Pass", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct to flag — a declared address that's only a mailing address, disconnected from the actual business, is a listed red flag.",
  "incorrect_feedback": "This should have been flagged — a mailing-address-only registration disconnected from the real business is a listed merchant-acquiring red flag."
}
```

```json
{
  "id": "flag-04",
  "difficulty": "medium",
  "mechanic": "mcq",
  "scenario": "",
  "task_prompt": "What should raise concern about a merchant's transaction activity, per Annex III?",
  "options": [
    { "label": "A sudden, unexplained change in transaction volume or average transaction size since onboarding", "correct": true },
    { "label": "A gradual, seasonal increase disclosed at onboarding", "correct": false },
    { "label": "Transactions spread evenly across the week", "correct": false },
    { "label": "A steady, small number of daily transactions", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct — sudden, unexplained shifts in volume or average ticket size versus what was declared at onboarding is the listed red flag.",
  "incorrect_feedback": "Not quite — the red flag is a sudden, unexplained change versus the merchant's declared profile, not ordinary or disclosed patterns.",
  "followup_question": {
    "task_prompt": "Does a disclosed, expected seasonal spike count as this red flag?",
    "options": [
      { "label": "No", "correct": true },
      { "label": "Yes", "correct": false }
    ],
    "article_citation": "Annex III (merchant acquiring)"
  }
}
```

```json
{
  "id": "flag-05",
  "difficulty": "medium",
  "mechanic": "passflag",
  "scenario": "A merchant account that's been dormant for months suddenly shows a burst of activity, with no clear business explanation.",
  "task_prompt": "Flag this, or let it pass?",
  "options": [
    { "label": "Flag", "correct": true },
    { "label": "Pass", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct to flag — a sudden burst of activity on a previously dormant merchant account, without explanation, is a listed red flag.",
  "incorrect_feedback": "This should have been flagged — unexplained activity on a dormant merchant account is a listed merchant-acquiring red flag."
}
```

```json
{
  "id": "flag-10",
  "difficulty": "medium",
  "mechanic": "passflag",
  "scenario": "Shortly after onboarding, a merchant changes its registered address, and its actual activity doesn't match what it declared at sign-up.",
  "task_prompt": "Flag this, or let it pass?",
  "options": [
    { "label": "Flag", "correct": true },
    { "label": "Pass", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct to flag — an address change soon after onboarding combined with activity that doesn't match the declared profile is a listed red flag.",
  "incorrect_feedback": "This should have been flagged — a post-onboarding address change plus mismatched activity is a listed merchant-acquiring red flag."
}
```

```json
{
  "id": "flag-09",
  "difficulty": "hard",
  "mechanic": "multiselect",
  "select_count": 3,
  "scenario": "",
  "task_prompt": "Which of these are genuine merchant-acquiring red flags, per Annex III? Select all that apply.",
  "options": [
    { "label": "Declared address is just a mailing address, unconnected to the business", "correct": true },
    { "label": "Refund/chargeback pattern doesn't match the merchant's own history or peers", "correct": true },
    { "label": "Sudden, unexplained change in transaction volume or size", "correct": true },
    { "label": "Consistently low chargeback rate", "correct": false },
    { "label": "On-time renewal of the merchant's trade license", "correct": false }
  ],
  "article_citation": "Annex III (merchant acquiring)",
  "correct_feedback": "Correct — these three are the listed red flags; a low chargeback rate and an on-time license renewal are both healthy signs, not concerns.",
  "incorrect_feedback": "Not quite — the three genuine red flags are the address mismatch, the refund/chargeback anomaly, and the unexplained volume change."
}
```

### `the_flag-quickcall` — full item rebuild

Replace all four current items with:
```json
{
  "items": [
    { "label": "Refund rate matches similar merchants — nothing unusual.", "options": [ { "label": "Routine", "correct": true }, { "label": "Escalate", "correct": false } ] },
    { "label": "Registered address is only a mailing address, unconnected to the business.", "options": [ { "label": "Routine", "correct": false }, { "label": "Escalate", "correct": true } ] },
    { "label": "Modest volume increase, matching a seasonal pattern disclosed at onboarding.", "options": [ { "label": "Routine", "correct": true }, { "label": "Escalate", "correct": false } ] },
    { "label": "Sudden refund spike right after a burst of new sales, no clear explanation.", "options": [ { "label": "Routine", "correct": false }, { "label": "Escalate", "correct": true } ] }
  ]
}
```

## 3. Reworks (reword only — same slot, same citation, same underlying fact)

- **`gate-q3`**: "An 18-month-dormant *merchant* account resumes processing volume, and the merchant also requests a new payment product." → same question/logic as before, "customer" → "merchant."
- **`gate-q9`**: use your own low-risk-merchant definition directly — scenario: *"A merchant is a well-established LTD selling low-risk goods, with no subscription products, clean financials, healthy revenue, an active public presence, and a low chargeback rate."* → confirmed low risk, no ML/TF suspicion. Same "confirmed low risk" teaching point as the original gift-card version, just reframed around this profile instead.
- **`gate-q10`**: "New *merchant* account, no risk flags, but no formal low-risk finding made" — straightforward reword.
- **`gate-q15`**: "A merchant account has multiple directors/signatories; only one has had identity verified." — same underlying CDD-completeness point.
- **`gate-q16`**: "A representative/agent acts for a merchant, but no authorization document is on file" — maps onto Part 10 (Relationship with Representatives), genuinely core to payments work.
- **`the_gate-quickcall`**: replace "individual receiving a fixed monthly state benefit" with a small, stable sole-trader merchant (modest steady turnover, no red flags); replace the gift-card item with your low-risk-merchant profile from `gate-q9` above (LTD, low-risk goods, no subscriptions, clean financials, healthy revenue, active public presence, low chargebacks); reword "new retail customer" → "new merchant."
- **`eq_04`**: "A merchant's settlement account shows a sudden pattern of transactions structured to stay just under the reporting threshold" — same structuring logic, merchant actor instead of retail depositor.

## 4. Game-feel prototype (build and evaluate first, per priority order above)

- **`tiergate`**: rework into a build/assemble interaction — the player adds or removes required due-diligence steps one at a time, and a visual "gate" opens or stays shut in response, instead of picking one of three static labeled buttons.
- **`passflag`** (13 of 50 questions — your single largest mechanic): give it a distinct gesture-based treatment (e.g. swipe or stamp-style confirm) so it feels different from `mcq` at a glance, not just a two-button version of the same thing.
- Build these against 2–3 representative questions first (not the whole bank) so you can evaluate whether the new feel is worth carrying through everything else. If it works, extend it across all `tiergate`/`passflag` questions in step 2 of the priority order; if it doesn't land, you've only spent time on a prototype, not the whole content pass.
- Leave grading, streaks, feedback text, and all storage/progress logic untouched — interaction layer only.

## 5. Home screen and chapter-map branding

Replace the emoji shield (🛡, used as both `.home-badge` and `.game-logo .mark`) with one inline-SVG mark, reused at both sizes. Direction: an abstract geometric form from the existing palette (`--violet`, `--teal`, `--amber`, `--red`) — a shield/gate hybrid, a node/network motif, or a grid-based mark. No emoji, no clip-art.

## 6. Compliance sign-off on backfilled content

Given this is an internal tool you're iterating on solo, don't block this sprint on formal sign-off — the backfilled content above is drawn directly from the same verified directive text (Articles 36/37, Annex III) already used elsewhere in the game, not invented. But before the app goes out to colleagues more broadly, do one pass logging these 8 new/reworked items in `TRANSLATION-NOTES.md` the same way the rest of the bank was verified, so the record stays complete.

## 7. Chapter-card display cleanup

Remove the "BEST" stat from `renderMap()`'s `meta-row` line entirely. Keep streak as its own small element (styled like `.streak-strip`), shown only when `cp.bestStreak` ≥ 2. Replace the thin `.progress-fill` bar with a segmented/dotted indicator matching each chapter's 10-question count.

## 8. Monochrome chapter icons

Replace `CHAPTER_ICON`'s emoji (📘🧭🚪🚨🏁) with inline-SVG line icons in one restrained tone (`var(--text)` or `var(--text-dim)`), same stroke weight, literal shapes: open book (The Basics), compass (Reading Risk), door/gate (The Gate), bell/alert triangle in neutral tone — not red (High Alert), flag/pennant (The Flag).

## Deliverable ask

Ship in this order: (1) `engine_spec.js` fixed, (2) a working `tiergate`/`passflag` prototype on 2–3 questions for you to evaluate, (3) once approved — the full `content.js` update with the 8 cuts+backfills above pasted in, the 7 reworks applied, and the `the_flag-quickcall` items replaced, (4) the new SVG brand mark and monochrome icons, (5) the chapter-card cleanup. Log the 8 new/reworked items in `TRANSLATION-NOTES.md` before wider rollout to colleagues.
