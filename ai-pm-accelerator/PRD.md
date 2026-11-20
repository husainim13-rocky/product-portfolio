# Product Requirements Document (Working Draft) — Intent-Aware Commerce Discovery V3

**Date:** 2026-11-18
**Status:** Problem framing in progress. **Not approved for build**, baseline not yet fully audited.
**Audience:** Independent specialty electronics retailers (working target, not market-validated)
**End user:** Electronics shoppers with contextual needs and multi-attribute trade-offs.
**Primary shopping categories:** Headphones, laptops (initial scope).
**Delivery:** On-site merchant-integrated product discovery. External agent-facing catalog access, MCP, autonomous transactions are out of scope for MVP.

## Job to be done
When I am shopping for a product whose technical specifications I do not fully understand, I want to describe my actual use cases, non-negotiable needs, and trade-offs in everyday language, so that I can find a trustworthy shortlist without translating everything into filters or repeatedly starting my search over.

## Problem hypothesis
Some shoppers with complex shopping needs struggle to translate contextual, long-form requests into conventional catalog filters, compare technically similar products, and recognize which requirements are unsupported by available evidence. This can cause irrelevant results, more manual comparison, and loss of trust. The size/frequency of this problem and merchant willingness to integrate are **not yet validated**.

## First priority: structured intent understanding
Investigate whether V3 can interpret long-form requests into a faithful structured representation:
- **Explicit hard constraints:** Must be satisfied unless shopper knowingly relaxes them.
- **Soft preferences:** Desired but can be traded off; preserve their stated priority.
- **Use cases:** Explain the user's goals; do not blindly transform use cases into hard specs.
- **Negations/avoidances:** Must not become positive search signals.
- **Ambiguities and missing evidence:** Track uncertainty, ask only useful clarifications or explicitly disclose unsupported product facts.
- **Provenance:** Distinguish directly stated requirements from inferred assumptions, and present important inferences for confirmation when needed.

## User experience hypothesis
A shopper enters a natural-language request, sees an appropriate shortlist when evidence permits, receives grounded explanations and trade-offs, and is asked clarifying questions only when uncertainty materially changes the recommendation. Full multi-turn support is a planned later milestone, not a Day 1 implementation claim.

## Why this is the first investment (provisional)
Intent understanding precedes later retrieval and recommendation decisions; however, it may not be the highest-value bottleneck. Compare V2B rules, improved rules, and LLM structured interpretation against the same labeled shopper requests before committing. Reject unnecessary complexity.

## Baselines, metrics and guardrails (to finalize after Day 1 audit)
- Primary offline proxy: correctly resolved shopping task on held-out labeled scenarios (valid shortlist OR justified no-match/clarification).
- Diagnostic measures: explicit-hard-constraint extraction, hard-constraint violation rate, preference and priority accuracy, unsupported-claim rate, proper clarification/abstention, top-3 relevance.
- Practical guardrails: no silently relaxed must-haves; no fabricated product attributes; measure token/model cost, p50/p95 request latency; ensure safe behavior when catalog evidence is missing.
- Online merchant outcomes such as conversion, engagement and incremental revenue are **future validation questions** requiring real customers/traffic.
- No metric improvement is claimed until evaluated.

## Data strategy
Preserve 42-item synthetic V2B headphone catalog as frozen baseline. Propose a separate versioned evaluation catalog ~150 headphones + ~150 laptops, expanded after defining schema and evaluation hard cases. Distinguish synthetic fields from validated data, and design cases involving hard trade-offs, missing evidence, negation, conflicting requirements, and near-substitutes.

## What we're not building yet
An agent marketplace, automated purchasing, MCP/UCP protocol interoperability, production merchant billing, proprietary models or premature vector infrastructure.

## Unanswered product questions
1. Which precise customer segment and shopping task has the most severe unmet need?
2. Is structured-intent misunderstanding a bigger problem than product evidence completeness or comparison UX?
3. Does a conversational interface outperform enhanced search/filter controls on task success and trust?
4. What minimum merchant data contract and integration UX can succeed across stores?
5. How many and which clarifications are worth the shopper's time?
6. What level of accuracy and cost would justify merchant pilot adoption?

## Current evidence and decision trail
- Historical V2B behavior and code: `archive/v2b/` (42-item synthetic headphone catalog, rules interpreter, deterministic eligibility and rank).
- Decision log: `ai-pm-accelerator/DECISIONS.md` ADR-001 and ADR-002.
- The rules parser appears to interpret phrases like "ideally under $200" as hard budgets; **source-level observation only**, not a measured experiment yet.
- V2A published evaluation metrics should not be described as V2B or V3 relevance gains.

## Day 1 remaining gates
- Shopper scenario annotations and source-level/audited V2B failures.
- Confirmation of primary success metric and qualification thresholds.
- Comparative architecture hypotheses and PM teach-back.

## Baseline audit update (November 19, 2026)

The V2B source engine was executed against 10 provisional, synthetic, field-annotated shopper prompts: 6/10 examples had all checked fields correct and 20/25 checked intent fields matched. This is a **small diagnostic baseline**, not a robust accuracy estimate or a measured V3 gain. Four code-level failures include: ignoring 'must not exceed $150'; treating 'ideally under $200' as hard; incorrectly enforcing a preferred in-ear form factor; and interpreting 'wired, no Bluetooth' as conflicting wired+wireless requirements. A full customer-impact diagnosis and learner review remain outstanding. See `EVALUATIONS.md` and `evals/intent-cases-v0.json`.
