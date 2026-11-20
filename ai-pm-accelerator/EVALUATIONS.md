# V3 evaluation methodology & evidence log

**Started:** 2026-11-18
**Status:** Early baseline audit (three prompts). No V3 model implemented or evaluated.
**Goal:** Assess whether the V2B rules parser faithfully preserves explicit shopper constraints, preferences and uncertainty before evaluating alternative AI approaches.

## Measurement principles
1. **Intent fidelity:** evaluate structured interpretation (hard, soft, negation, conditional preference, priorities, missing details) separately from recommendation ranking.
2. **Shopping task success:** whether a valid shortlist, clarification or no-match response is appropriate, considering product evidence.
3. **Eligibility/groundedness:** never silently relax a firm requirement or claim unsupported attributes.
4. **Cost/latency:** when model-based alternatives exist, measure per-response economics and latency along with quality.
5. **Comparability:** freeze requests and expected labels before evaluating alternatives. Later use development and held-out sets. Do not infer merchant conversion lift from synthetic product data.

## Day 1 — Real V2B parser baseline

### Test setup
Source: `archive/v2b/engine.js` on branch `ai-pm-v3-foundation`.
Method: executed the recovered engine's exported `parse(query)` and `discover(query)` on three queries (one original, two narrowly controlled variants) inside a JS runtime. A runnable local reproduction is included in `evals/day1-intent-baseline.cjs`: `node ai-pm-accelerator/evals/day1-intent-baseline.cjs`.

The customer scenario is synthetic and test labels are coach-authored, not independent shopper judgments. Historical 15-test pass results are **not** represented as a current rerun.

### Inputs and observed results

| ID | Scenario | Target budget class | Actual V2B `budgetType` | Other interpretation | Observed top 3 | Outcome |
|---|---|---|---|---|---|---|
| D1-01 | 'Ideally ... under $200, but I could spend more for a really good microphone' | Flexible | **Hard** | wireless/calls/comfort/noisy = true; `priority = null`; `minMic = null` | MeetMax $199; ClearCall One $129; OfficeLink Max $179 | **Budget misclassified** |
| D1-02 | 'Around $200, but I could spend more for a really good microphone' | Flexible | Flexible | Same booleans; `priority = null` | Same three | Budget classification matches |
| D1-03 | 'Must stay under $200 ... really good microphone' | Hard | Hard | wireless/calls/comfort/noisy = true; `priority = null` | Same three | Budget classification matches |

### First diagnosed bug
The `parse` function matches `under $200` unconditionally as a hard cap even if the sentence uses 'ideally' and explicitly allows exceeding it. Consequently, alternative eligible products above $200 may be silently excluded. This is a **confirmed parser misclassification**, but no downstream ranking loss was measured in these initial cases because all three runs produced the same top three products.

### Second diagnosed gap
The engine captures `calls = true` and `comfort = true` but does not separately represent a conditional preference of **spending more specifically for microphone quality**, and sets `priority = null` and `minMic = null` for the original scenario. This highlights a schema/extraction limitation; it does not by itself prove any specific recommendation is wrong.

### Product decisions still pending
- If explicit upper spend is unknown, when should UX show a within-budget shortlist, disclose premium alternatives, or ask the user to specify a cap?
- Which discomfort/fit language should be represented as high-priority but uncertain subjective evidence rather than a guaranteed hard filter?
- Is a rule revision sufficient for this recurring behavior, or does an LLM structured extractor improve enough high-severity cases to justify model cost and added failure modes?
- Build frozen, representative test cases and compare not just intent field extraction but actual shopping-task outcomes.

## Next evaluation steps
- Annotate 20–30 initial scenarios, including synonymous budgets, category ambiguity, negation, conditional constraints, and missing evidence.
- Preserve a held-out set for later V3 comparison and label all synthetic data provenance clearly.
- Test a minimal rules-only fix against a structured LLM extraction path without changing the ranking/eligibility system.
- Report counts and denominators; no percentage improvements until the benchmark has actually run.

## Day 1 continuation — Recommendation/clarification UX-policy comparison (Nov 19, 2026)

**Question:** The shopper prefers $200 or less but explicitly may exceed it for a better microphone. Should the merchant recommend immediately, clarify maximum budget first, or only show under-budget products?

**Reproduction:** `node ai-pm-accelerator/evals/day1-ux-policy-probe.cjs`. Executed the archived engine with corrected flexible budget and specified mic priority, then compared deliberately simple selection policies. This is a *simulation*, not a deployed UX, model A/B test, or shopper study.

| Case | Budget-first C | Unconditional stretch A | Conditional stretch A' | Clarify-first B |
| --- | --- | --- | --- | --- |
| Actual 42-product synthetic catalog | MeetMax $199, ClearCall One $129, OfficeLink Max $179 | MeetMax $199, ClearCall One $129, **Focus 300 $299** despite no mic/comfort/ANC rating improvement over MeetMax | MeetMax $199, ClearCall One $129; **no premium offer** | Not behaviorally tested; shopper receives a budget question instead of immediate options |
| Constructed four-product test catalog | Daily Work $190 (mic 4), Basic Meeting $170 (mic 3) | Both plus Clear Voice Plus $229 (mic 5) | Both plus Clear Voice Plus $229 (mic 5, no lower comfort rating) | Not behaviorally tested |

Actual catalog: 31 eligible products, 28 within $200, 3 above. In the first scenario, MeetMax $199 has builder-selected mic 5, comfort 5, ANC 5, identical on these ratings to Focus 300 $299. The naive A approach can thus upsell without relevant evidence. The constructed catalog illustrates when a modest premium could improve the specifically stated microphone priority.

**Assertions:** Four scenario assertions passed on the simulation code. This establishes descriptive policy behavior only, not actual user task success, trust, conversion or latency effects.

**Open PM trade-off:** The shopper has not stated an acceptable maximum stretch. A provisional policy would show in-budget options first, add premium only when there is an evidence-backed improvement in a stated priority, clearly label price difference, and retain hard caps. A large premium, missing or subjective evidence, and conflicting trade-offs need an opt-in/clarification policy. Thresholds are not established by these synthetic experiments.

**Future comparison:** With real shopper participants, measure valid shortlist rate, time to useful answer, unnecessary premium exposure, clarification burden, trust and abandonment. Do not overclaim from synthetic ratings. Compare A' against C and B, with high- and low-budget uncertainty cases.
