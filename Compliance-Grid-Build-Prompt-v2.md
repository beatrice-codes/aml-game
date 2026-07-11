# Build Prompt: "Compliance Grid" — AML/CFT Learning Game (iOS-first web app)

Build this from scratch as a single-file HTML/CSS/JS app (or React, if that's the target stack) using the interaction patterns and visual language from the first prototype — dark minimalist palette, rounded geometric cards, Pass/Flag decision buttons, node-tap risk grid, tier-matching gate — but replace the content layer and progression system entirely per the spec below. Content is the priority; do not let UI polish outrun real, accurate question content.

## 1. Audience and purpose

Players are fintech employees (underwriting, risk, compliance analysts) whose company must comply with AML/CFT law. The sole purpose is genuine learning, delivered through short interactive puzzles rather than reading or flashcards. Assume the player may know nothing about AML going in, but design hard-tier content that still challenges an experienced compliance professional. Every screen — task prompt, icon, abbreviation — must be immediately understandable to a complete newcomer; nothing should require outside knowledge to parse.

## 2. Source material and translation rules

Base all content on the attached directive: **Central Bank of Cyprus AML/CFT Directive of 2025 (K.Δ.Π. 120/2025)**, issued under Article 59(4) of the Prevention and Suppression of Money Laundering Activities Laws 2007–2024. The source document is in Greek; all in-game text is in English.

- Translate **thoughtfully, not literally** — but every legally material fact (euro thresholds, percentages, article numbers, who reports to whom, which measures are mandatory vs. discretionary) must be 100% accurate to the source. This is law; the facts cannot be softened, rounded, or paraphrased into ambiguity.
- Preserve the force of words precisely: "must"/"shall" (υποχρεούται, οφείλει) vs. "may" (δύναται) are not interchangeable in the app's phrasing.
- Every question and every feedback explanation carries its article citation (e.g. "Άρθρο 46" / "Part 6, §18–23") so a player can trace it back to the real directive.
- Recommended (not blocking for v1, but flag it): have the company's AMLCO do one accuracy pass on the finished question bank before wide rollout, since this becomes real compliance training material, not just a game.

## 3. Content architecture

### 3.1 Glossary layer
Every abbreviation or defined term gets a plain-English definition, surfaced automatically the first time it appears in a chapter, and available on tap thereafter (a small "?" affordance next to the term, not a separate hidden menu). Do not assume familiarity with anything beyond the most universally known terms. Seed glossary (expand as content is built):

| Term | Plain definition | Source |
|---|---|---|
| CDD | Customer Due Diligence — the baseline identity, ownership, and purpose checks done on every customer | Part 7, Art. 24–26 |
| SDD | Simplified Due Diligence — lighter checks allowed for verified low-risk customers | Art. 41 |
| EDD | Enhanced Due Diligence — extra checks required for higher-risk customers | Art. 42 |
| UBO | Ultimate Beneficial Owner — a person who owns or controls 25% or more of a company's capital or voting rights, or otherwise exercises significant influence over it | Art. 2 |
| PEP | Politically Exposed Person — someone who holds, or has held, a prominent public function | Art. 46 |
| Source of Funds | Where the money for a specific transaction or relationship came from | Art. 26 |
| Source of Wealth | The origin of a person's total wealth, not just one transaction — required for PEPs and high-risk relationships | Art. 42, 46 |
| AMLCO | Anti-Money Laundering Compliance Officer — the person a regulated entity appoints to run AML compliance | Part 5, Art. 69 of the Law |
| MOKAS | Cyprus's Financial Intelligence Unit — where suspicious-activity reports are sent | Part 12 |
| Shell company | A legal entity with no real physical presence beyond a mailing address, and no genuine business activity | Art. 37(2) |
| High-risk third country | A country on the European Commission's list of jurisdictions with strategic AML/CFT weaknesses | Art. 2, 50 |
| Client account | A pooled account held in a regulated firm's own name on behalf of its clients (e.g. lawyers, trustees) | Art. 45 |
| Correspondent relationship | A relationship where one institution provides banking services to another institution (often across borders) | Art. 48 |

### 3.2 Chapters, mapped to the directive's own structure
Replace the three disconnected "cases" with five chapters that mirror the directive's parts, so progress corresponds to real regulatory topics:

1. **Foundations** — what AML is for, proportionality, key terminology (Parts 1–2)
2. **Reading Risk** — the risk-based approach: why not every customer gets the same scrutiny (Part 6)
3. **The Gate** — customer due diligence tiers: simplified / standard / enhanced (Part 7, Art. 24–41)
4. **Enhanced Measures** — PEPs, shell companies, high-risk countries, correspondent banking, crypto-asset providers (Art. 42–51)
5. **The Flag** — red flags in transactions, cash thresholds, and the reporting chain to MOKAS (Part 8, Part 12)

Each chapter unlocks after the previous one reaches a minimum accuracy (suggest 60%), but allow replay of completed chapters anytime.

### 3.3 Chapter briefing (shown before every chapter, and re-viewable)
Before gameplay starts, show: 1–2 sentence description of the topic, 3 bullet learning objectives, and the article range covered. Example for Chapter 3:

> **The Gate — Customer Due Diligence**
> Every customer must clear a "gate" of checks before onboarding — but not the same checks for everyone. This chapter teaches which checks apply to which customer, and why.
> - Learn the difference between simplified, standard, and enhanced due diligence
> - Recognize when a customer's risk profile changes the required checks
> - Understand what triggers mandatory enhanced measures
> *Covers Articles 24–52*

### 3.4 Difficulty tiers and real example content
Every chapter contains Easy → Medium → Hard questions, using the existing Flag/Pass, risk-node, and tier-matching mechanics as delivery formats — but each question must test one specific, real fact from the directive. Do not ship vague or generic prompts. Examples to build from (expand per chapter to reach ~15–20 items each):

**Easy (recall / definitions)**
- "What does UBO stand for, and what's the ownership threshold that triggers it?" → a person owning/controlling 25% or more (Art. 2)
- "A PEP is someone who —?" → holds or has held a prominent public function (Art. 46)
- "Who does the Compliance Officer send a suspicious-activity report to?" → MOKAS (Part 12)
- "What's missing from a shell company?" → real physical presence and/or genuine business activity (Art. 37)

**Medium (application)**
- Node-grid: sort customers by risk and allocate limited "attention" — e.g. a domestic salaried employee vs. a company receiving funds from a high-risk third country
- "A customer wants to deposit €120,000 in foreign-currency cash. What's required before it can be accepted?" → written approval from the Compliance Officer, since it's over the €100,000 threshold (Art. 55)
- "When must you collect Source of Wealth, not just Source of Funds?" → for PEPs and high-risk-country relationships under enhanced due diligence (Art. 42, 46)
- "A law firm's pooled client account receives a single €18,000 transaction for one client. What's triggered?" → identification of that client's beneficial owner, since it crosses the €15,000 threshold (Art. 45)

**Hard (synthesis, for AML professionals)**
- Gate mechanic: a multi-entity ownership structure with a UBO based in a high-risk third country and no clear economic rationale — player must select the full correct EDD stack and explain (via a short multiple-choice "why") which Article triggers mandatory enhanced measures (Art. 64(1), 42(8))
- "Distinguish: a customer is high-risk *by law* (Art. 64(1)) vs. high-risk *by your own risk assessment* (Art. 43) — which one always forces enhanced due diligence regardless of your internal rating?" → the legal categories under Art. 64(1)
- "What must a correspondent institution verify before opening an account for a third-country institution?" → that it isn't a shell bank, its AML controls, its ownership/licensing, and get senior approval (Art. 48)

## 4. Interaction and task clarity

- **State the task in plain language on every screen**, before the mechanic loads — never assume the player infers what's being asked from a bare card and two buttons. E.g. the Flag mechanic must open with something like: *"Based on the details below, would you flag this transaction as suspicious, or let it pass?"*
- Keep the Pass/Flag decision buttons, node-tap risk allocation, and tier-matching gate mechanics from the prototype — the interaction feel is good — but every instance must be wrapped in a clear task statement and use real, specific content per §3.4.
- **Icons:** use simple, universal icons for navigation — ▶ start, ⏸ pause, ✓ confirm, ← back, ⟳ retry/replay — consistent placement across every screen. Do not invent bespoke iconography for standard actions.

## 5. Feedback on answers

- **No auto-dismissing feedback.** Every result — correct or incorrect — requires a deliberate tap to continue. Remove any timer-based auto-advance entirely; the player must be able to read at their own pace.
- **On a correct answer:** brief positive confirmation plus the one-line "why," in a calm, factual tone — not exclamation-heavy praise.
- **On an incorrect answer**, show, in this order:
  1. What the mistake was, stated plainly and specifically (not just "wrong")
  2. The correct answer and the reasoning behind it, with article citation
  3. A **simpler follow-up question on the same concept** (not a new topic) immediately after, so the player gets a real second chance to demonstrate they've learned it rather than just being told they were wrong
- Tone throughout: friendly but professional — appropriate for people who work in compliance. Positive without being saccharine ("Correct — here's why" rather than "Great job!!"; "Not quite — here's the distinction" rather than "Oops, try again!").

## 6. Progress, persistence, and pause

- **Persist progress across sessions** — use the artifact `window.storage` key-value API (personal, non-shared) rather than anything that resets on reload. Store: per-chapter completion %, best accuracy, best streak, and exact resume position (chapter + question index + running score) so a player who exits mid-chapter returns to precisely where they left off, not the chapter start.
- **Pause/resume**: an explicit pause control that freezes the session; resuming restores state exactly.
- **Progress screen**: a chapter map (the five chapters from §3.2) showing, per chapter, a lock/unlock state, completion percentage, and best accuracy — replacing a flat list of disconnected levels. This should give an at-a-glance sense of where the player stands across the whole directive, not just the current chapter.

## 7. Visual design

Keep the direction from the prototype: dark background (near-black with a subtle radial gradient), rounded 16–24px card geometry, a small duotone-ish palette (teal/low-risk, amber/medium-risk, red/high-risk, violet/accent), monospace for numbers and metadata labels, generous negative space, no skeuomorphic banking iconography. Maintain haptic feedback on taps and answer confirmation. Keep sessions short — each question should resolve in well under a minute; a full chapter should feel like 5–10 minutes, not a study session.

## 8. Technical notes

- Single-file HTML/CSS/JS (matching the existing prototype's architecture) unless the team has a stronger reason to move to React/SwiftUI — flag this as an open decision if raised, but don't block on it.
- Use `window.storage.get/set` (shared: false) for all persistence; wrap every call in try/catch with a visible but unobtrusive fallback if storage fails.
- Keep the existing haptic feedback (`navigator.vibrate`) on correct/incorrect answers and node selection.

## 9. Deliverable ask

Produce, in order: (1) the finished, accuracy-checked question bank for all five chapters at all three difficulty tiers (aim ~15–20 items per chapter), each tagged with its article citation; (2) the glossary content, expanded to cover every term used anywhere in the question bank; (3) the rebuilt app implementing all of the above — chapter briefings, task-clear mechanics, tap-to-dismiss feedback with simplified-retry-on-miss, persistent chapter-map progress, pause/resume; (4) a short note flagging anything in the source directive that was ambiguous or required judgment calls in translation, so it can get a compliance sign-off pass before wider use.
