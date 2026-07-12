# Build Prompt: Compliance Grid — Mechanics Overhaul (Master Spec)

> **Important caveat before doing anything else:** the person giving you this spec has not shown the current state of the codebase in this conversation, and at least one prior sprint (and possibly more) has already been run against it since it was last reviewed. **Do not assume `content.js`, `index.html`, or `engine_spec.js` still look the way any prior spec described them.** Before writing any code:
> 1. Read the actual current `index.html`, `content.js`, and `engine_spec.js` in full.
> 2. Identify what's already been implemented from any earlier sprint docs in this repo (check for a `TRANSLATION-NOTES.md` or similar for a paper trail).
> 3. Reconcile this spec against what you find — treat every "replace X with Y" instruction below as intent, not a literal diff, since exact class names, IDs, or line numbers may have already changed.
> 4. If something below conflicts with a decision already implemented, prefer what's actually in the repo and flag the conflict rather than silently overwriting.

## 0. What this sprint is

A full redesign of the game's interaction layer, replacing most of the old flat "read prompt → pick option → confirm" pattern with ten distinct, mostly-interactive mechanics. Content facts, article citations, and thresholds are not to be invented or changed — only *how the player interacts* with each fact changes. Where this spec proposes new example content (e.g. specific merchant scenarios), treat it as illustrative and verify against the real, already-verified question bank before shipping.

## 1. Global design language (applies across all ten mechanics)

- **Palette**: dark background family (`~#0a0a0d`/`#15151c` card), violet `#8b7cf6` as the primary brand/selection/interactive accent, muted sage `#6b8f86` for "calm/low-risk," muted dusty terracotta `#a56b5c` for "alert/high-risk/wrong," soft green (`#7fc98f`/`#8ecf9b`) specifically reserved as the **correct-answer** signal color across mechanics that use color at all (stamp checkmarks, gate ripple tick, any splash/pop effects) — don't reuse green for anything else.
- **Wrong-answer motion**: a consistent quick horizontal shake (~0.5s, amplitude ±4-5px, a few oscillations) is the shared "no" cue — already used on the gate, the ice-freeze state, and the drag-reorder stack. Reuse this exact shake wherever a mechanic needs a "that's wrong" cue rather than inventing a new one per mechanic.
- **No countdown timers, anywhere.** Any mechanic that previously had time pressure (the old `quickcall`) is untimed now — plain progress indicators only (e.g. dots showing "call 2 of 4"), never a shrinking bar.
- **No emoji, no colorful literal icons.** Chapter icons and the logo are thin-line monochrome/duotone SVG, not emoji.
- **Randomize option order** in every mechanic that presents multiple choices — never let the correct answer default to the same position.
- **Never ask the player to recall an article number.** Citations exist only as background metadata for feedback/audit trails, never as a quiz target.
- **Motion is triggered by action, not idly looping everywhere.** Reserve constant idle animation for the logo and floating/drifting elements that are part of a mechanic's core feel; everything else animates in response to what the player does.

## 2. Branding

- **Logo**: a thin-line purple ("drop + gate") mark — an abstract teardrop/drop silhouette with two short horizontal line segments partway down suggesting a gate, rendered in `#8b7cf6` stroke, no fill. Animated: the two gate-line segments slide apart and back together in a slow loop (open/close), rest of the shape static. Use this mark at both a larger size on the home screen and a smaller size in the chapter-map header — same SVG, different scale.
- **Chapter icons**: monochrome thin-line SVG (not emoji), one consistent stroke weight and tone (`var(--text)` or `var(--text-dim)` equivalent), no per-chapter color coding (including the "High Alert" chapter's icon, which should not be rendered in red now that the set is monochrome).
- **Chapter cards** (on the chapter-map screen): remove any "best accuracy" stat entirely. Keep a streak indicator, but as its own small element (shown only when there's a genuine streak worth surfacing, e.g. ≥2), not folded into a stat row as a raw percentage. Replace any thin flat progress bar with a clearer, more legible indicator (e.g. segmented dots matching the chapter's actual question count).
- **Home screen**: keep the existing tagline about learning by playing the system (reuse the exact prior wording if still present in the repo — don't rewrite it). Home screen should include more than just the logo/button — a "continue where you left off" card if the player has progress, plus a way to browse all chapters directly. Chapters are never locked; every chapter is playable at any time regardless of progress elsewhere. Chapter labels read as plain "Chapter 1," "Chapter 2," etc. — no "1 of 5" framing.

## 3. The ten mechanics

For each: what it replaces (if anything), the interaction, and the correct/wrong feedback. Status is marked explicitly — some of these are fully settled from extensive iteration this session; two are flagged as genuinely unresolved and need real design attention before being treated as done.

### 3.1 Match the term — ✅ settled
**Use for**: definitional facts (PEP, UBO, Source of Wealth, EDD, MOKAS, and similar terms that currently only exist as glossary tooltips with no dedicated question).
**Interaction**: two columns of tiles — terms on one side, definitions on the other, deliberately *not* aligned row-for-row so the correct pairing is diagonal, not a straight line. Tap one tile, then its match; a thin off-white/cream thread (not violet, not dashed — a single smooth continuous line, thin stroke ~0.8px) draws itself slowly and elegantly between them (draw duration ~3.5-4s if animated on a loop for preview purposes; in the real app it should draw once, on selection, and hold).
**Correct**: thread completes the connection, both tiles settle into a filled/lit state (soft violet fill), thread very slightly warms in tone once complete and holds — no restless looping once solved.
**Wrong**: thread begins drawing between the two tapped tiles but stops partway and fades back out; both tiles get a brief (~0.5s) soft dusty-terracotta outline flash, then return to normal so the player can try again. No shake needed here — the thread failing to complete is itself the "no" signal.

### 3.2 Build the gate — ✅ settled
**Use for**: CDD/due-diligence checklist assembly (which checks apply to which customer type).
**Interaction**: a task/scenario is shown at the top (e.g. "New sole-trader merchant, two partners with account authority — which checks apply?"). Below, a two-leaf swinging door (hung from a static top bar, thin violet vertical lines as leaves, `transform-origin: top center`, rotating open/closed) sits above a list of due-diligence-step chips the player toggles on/off. Correct combination of active steps = gate visually opens.
**Correct**: gate leaves swing open (CSS rotate, ~30° each side), and a green expanding ring ("ripple," tying back to the drop logo) appears at the gate's center with a small tick/checkmark drawn inside it.
**Wrong**: the whole gate assembly does the shared shake (§1) and stays shut — no ripple, no tick.

### 3.3 Order the chain — ✅ settled (rebuilt from scratch this session — this is the final version, not the earlier flat numbered-list version)
**Use for**: sequences (the reporting chain: staff → Compliance Officer → MOKAS; or any other ordered-steps fact).
**Interaction**: a real drag-and-drop reorderable list, not tap-to-swap. Three (or more) frosted/translucent "glassy" boxes (see exact CSS below) sit in a vertical stack next to fixed "1st / 2nd / 3rd" slot labels. The player presses and drags a box up or down with their finger; the other boxes slide out of the way live to make room, exactly like reordering a list. Releasing snaps the dragged box into whichever slot it's nearest to. A **Confirm** button below locks in the current arrangement only when pressed — the player can rearrange as many times as they like before confirming.
**Implementation detail (critical, don't skip):** use the **Pointer Events API** (`pointerdown`/`pointermove`/`pointerup`), not HTML5 drag-and-drop, and call `setPointerCapture` on `pointerdown` so the drag keeps tracking even if the finger moves outside the element's bounds. Every draggable box must have `touch-action: none` in CSS, or mobile browsers will hijack the gesture as a page-scroll instead of letting the drag work.
**Visual style ("glassy")**: `background: rgba(255,255,255,0.055); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.16); border-radius: 16px;`. While actively being dragged, shift to a violet-tinted glass (`background: rgba(139,124,246,0.16); border-color: rgba(139,124,246,0.55);`) plus a slight scale-up (~1.04) so it visibly lifts off the stack. Fall back gracefully where `backdrop-filter` isn't supported (it degrades to a plain translucent panel, which is fine).
**Correct** (on Confirm): show a clear "Correct order" confirmation (text/color, e.g. violet).
**Wrong** (on Confirm): the whole stack does the shared shake (§1), then **returns to exactly the arrangement the player had** — never reset or scramble their attempt. Let them keep adjusting and re-confirm.

### 3.4 Calm or alert — ✅ settled
**Use for**: binary risk/red-flag judgment calls (replaces a Tinder-style swipe-with-colored-zones concept that was explicitly rejected as too derivative).
**Interaction**: a scenario card in the center; two small flat shape icons below/beside it — a soft rounded arc for "calm" (low risk) and a jagged angular shard for "alert" (high risk), muted sage and dusty terracotta respectively, connected by a faint dotted path rather than directional arrows. The meaning lives in the *shape*, not a color-block zone or card tilt (both of those were explicitly cut for reading as too close to existing apps).
**Correct/wrong**: standard settled/shake treatment consistent with the rest of the game.

### 3.5 Quick calls (no timer) — ✅ settled
**Use for**: rapid-fire binary judgment sets (5 questions currently use this format).
**Interaction**: **no countdown bar, ever** — replace any timer entirely with plain progress dots ("call 2 of 4"). Calm scenario card, two plain-outline buttons (e.g. "Routine" / "Escalate"), a quiet "take your time" caption underneath. No urgent red coloring, no pressure framing of any kind.

### 3.6 Stamp — ✅ settled (replaces an earlier "catch floating water bubbles" concept for this content type, which was abandoned after many rounds of visual/physics issues — see §5)
**Use for**: multiselect facts ("which of these are obliged entities," "select all that apply").
**Interaction**: a grid of plain option tiles. Tapping a tile triggers a rubber-stamp pop-in directly on that tile — a circular stamp mark scales/rotates into place quickly (~0.35s, a slight overshoot bounce reads well: e.g. `cubic-bezier(.2,.8,.3,1.4)`).
**Correct**: green circular stamp outline with a checkmark.
**Wrong**: muted dusty-red/terracotta stamp outline with an X.
No particle effects, no physics — this was a deliberate pivot toward something simple and reliable after the water-bubble mechanic proved hard to get right, and it fits a compliance app's "approval/stamp" metaphor better anyway.

### 3.7 Flip card (true/false) — ✅ settled
**Use for**: simple two-option recall facts.
**Interaction**: the claim is shown on a card; **both** "True" and "False" are shown as real, equally-weighted buttons below it at all times (an earlier version only revealed one option after an auto-flip — that was wrong; both choices must be visible and tappable from the start). Tapping either locks in a choice.
**Correct**: chosen button highlights violet, and the card flips (3D `rotateY`, `backface-visibility: hidden`) to reveal a one-line "why" on the back.
**Wrong**: the tapped (wrong) button gets a brief dusty-terracotta border flash, then the correct button auto-highlights and the card still flips to reveal the explanation — so a wrong guess always ends with the player seeing the right answer and the reasoning, not just "no."

### 3.8 Pop the threshold — ⚠️ UNRESOLVED, needs a decision before shipping
**Intended use**: numeric-threshold facts (e.g. "what ownership share makes someone a beneficial owner?" — bubbles labeled 10%/20%/25%/50%).
**Status honestly**: this went through many rounds of a floating-water-bubble concept (organic blob shape, splash-on-correct, freeze-to-ice-on-wrong) and never fully landed — the splash effect in particular kept reading as buggy or unconvincing despite repeated tuning, which is what led to abandoning the water-bubble approach entirely for the multiselect case (§3.6, the Stamp mechanic). **The same concern applies here and was never resolved.** Recommend one of:
  - (a) Retire the water-bubble concept for this too, and reuse the Stamp mechanic's interaction (tap a numeric option, get a stamp) for threshold-guess questions as well — simplest, most consistent, most reliable.
  - (b) If a bubble/pop feel is still wanted here specifically, budget real design time for it rather than treating the version in this repo as finished — it isn't.
Do not ship the water-bubble version as-is without a fresh look.

### 3.9 Spot the outlier — ⚠️ UNRESOLVED, needs real design feedback
**Intended use**: pattern/anomaly recognition (e.g. spotting the one red flag among several normal-looking transaction patterns).
**Status honestly**: shown once as a rough concept (a short list of chips, one of which is the anomaly, tap the odd one out) and never revisited or given real feedback. Treat this as a draft, not a settled design — worth a dedicated pass before building it out across content.

### 3.10 Set the dial — superseded
The original drag-to-a-number dial concept was replaced by the bubble-threshold idea (§3.8), which is itself unresolved. If neither the bubble nor the dial approach is landing, consider defaulting to the Stamp mechanic (§3.6) for numeric-threshold questions too, per the recommendation in §3.8(a).

## 4. Mechanic-to-content mapping (rough target, from the current ~50-question bank)

| Mechanic | Content type | Approx. count |
|---|---|---|
| Match the term | Definitions (PEP, UBO, SoW, EDD, MOKAS, etc.) | 6-8 |
| Build the gate | CDD checklist assembly | 4 |
| Order the chain | Sequences, reporting chain | 3-4 |
| Calm or alert | Binary risk/red-flag judgment | 13 |
| Quick calls | Rapid-fire binary set | 5 |
| Stamp | "Select all that apply" facts | 4 |
| Flip card | True/false, simple 2-option recall | 8-10 |
| Pop the threshold *(or Stamp, if retired)* | Numeric threshold facts | 4-6 |
| Spot the outlier | Pattern/anomaly recognition | 6-8 |

## 5. Content rules (carried over from prior sprints — re-verify these are actually in place)

- No individual/retail-banking or physical-branch-cash scenarios anywhere (currency-exchange thresholds, personal joint accounts, refugee ID documents, over-the-counter cash deposits) — these don't apply to a merchant/payments-onboarding audience. Replace with merchant-entity equivalents (dormant *merchant* accounts, multiple company directors/signatories, representative/agent relationships under Part 10, etc.).
- Example content across mechanics should draw from genuinely merchant-relevant facts: the 25% UBO ownership threshold, Annex III's "merchant acquiring" red-flag section (declared-address mismatches, refund/chargeback anomalies, unexplained volume changes), shell-company criteria (Art. 37), sole-trader/partnership identity checks (Art. 36).
- PEP / UBO / Source of Wealth / EDD / MOKAS need real dedicated content now (via Match the term, §3.1) — confirm this isn't still relying only on glossary tooltips with no actual question testing them.
- Check for duplicate glossary entries (PEP, EDD, and UBO each previously had two near-identical entries) and consolidate.
- Confirm question order within each chapter is still easy → medium → hard after any content changes — check specifically for any threshold/cash-related questions still sitting out of difficulty order (a known past issue, tied to content that should already be removed).
- Cap of 10 core questions per chapter stands.

## 6. Suggested sequencing

1. Audit current repo state (per the caveat at the top) before writing anything.
2. Decide §3.8 and §3.9 (the two unresolved mechanics) — don't build them out across content until they have a real design, even a simple one.
3. Implement the seven settled mechanics (§3.1-3.7) against the existing content bank, remapping questions per §4.
4. Re-verify §5's content rules are actually satisfied in the current bank.
5. Branding pass (§2) — can happen in parallel with the above.
6. Update or fix `engine_spec.js` (or whatever the current test suite looks like) to match whatever actually ships — don't leave tests asserting mechanics or behavior (e.g. old mechanic names, chapter-locking) that no longer exist.
