# Product decision log — Intent-Aware Commerce Discovery V3

## ADR-001 — Prioritize on-site merchant product discovery before external-agent integrations

**Date:** 2026-11-18
**Status:** Accepted for MVP scope; supporting market assumptions remain hypotheses
**Owner:** Product learning exercise, AI PM Accelerator Day 1
**Decision:** Build an on-site, merchant-integrated discovery experience for complex product-shopping requests. Design sensible modular interfaces, but do not implement MCP/UCP agent-facing shopping protocols or autonomous purchases in the MVP.

### Context
The product thesis is that merchants with limited AI engineering resources may benefit from contextual, catalog-grounded product recommendations. The two user paths under consideration are (A) shopping journeys on merchant websites and (B) discovery and transactions initiated by external AI agents.

### PM rationale
- First test an observable shopper journey with existing V2B functionality and a controlled extension to laptops.
- On-site experiences provide more direct control over product UX, integration boundaries, experiments, failure observation and trust.
- Agent-to-agent commerce adds uncertain near-term adoption, protocol dependencies, transaction authorization and distribution requirements. Avoid making these dependencies critical to the MVP.
- Preserve the option to expose catalog tools/interfaces in the future, once demand and product quality justify it.

### Alternatives considered
1. **External agent-ready merchant catalog first:** attractive future interoperability, but introduces adoption and integration uncertainty before demonstrating core recommendation quality.
2. **Build both paths simultaneously:** increases scope, confounds evaluation and raises engineering and safety complexity.
3. **Improve search only, no conversational experience:** remains an important baseline/competitor for testing; not ruled out as the ultimately superior UX.

### Open questions and evidence needed
- Which exact merchant ICP has enough discovery friction and ability/willingness to pay?
- What is a credible baseline, including existing semantic or faceted commerce search?
- Do target shoppers actually prefer conversational or progressive clarification for high-consideration items?
- Can V3 improve shopping task success, hard-constraint reliability and groundedness at acceptable latency/cost?
- How do merchants supply accurate, current, and sufficiently complete product evidence?
- Are the original assumptions on the prevalence of on-site vs agent shopping empirically true for our target segment?

### Revisit when
- Merchant/discovery research does not support the value proposition.
- On-site UX underperforms a simpler search or filter augmentation.
- Evidence of agent-facing merchant demand becomes sufficiently strong to change priorities.
- The core on-site experience is reliable and economically justified.

### Integrity
This records the learner's strategic choice and coach's review, **not a validated product-market fit result**. No external agent integration has been implemented. No user studies or conversion-lift results have been claimed.


## ADR-002 — Start V3 with an evaluated intent-understanding improvement

**Date:** 2026-11-18
**Status:** Chosen initial investigation; implementation and customer-value impact unproven
**Decision:** Prioritize diagnosing whether natural-language shopper requests are translated correctly into structured intent, **before** investing heavily in semantic retrieval, ranking-model complexity or agents. Preserve hard eligibility enforcement and other deterministic guarantees.

### PM rationale from learner
- Downstream filtering, retrieval and ranking depend on an accurate model of shopper requirements.
- Need to distinguish must-haves, soft preferences, priority ordering, negations and unresolved ambiguity.
- The representation should support future clarifications and multi-turn updates, without assuming those features must be built immediately.

### Coaching challenge
"Upstream prerequisite" does not automatically imply "highest customer-value bottleneck." If the V2B rules interpreter already performs acceptably but product attributes are incomplete, data-quality or retrieval work could be the better investment. Validate frequency and severity of relevant failures rather than precommitting to an LLM.

### Specific baseline risk discovered in source inspection
The V2B `parse(query)` uses `under $N` as an unconditional hard-budget pattern. For example, wording like "ideally under $200" can be interpreted as a **hard cap** despite explicitly signaling a flexible preference. This is an identified code-level risk, not a newly measured user-study result.

### Alternatives and comparison
1. Improve rules/regex plus clearer UX, no LLM.
2. Add structured LLM extraction with schema validation and deterministic downstream constraints.
3. Invest first in catalog evidence, retrieval and ranking without changing the parser.
Evaluate all against the **same** frozen shopper requests with error taxonomy.

### Initial evaluation approach
- Ground-truth annotation distinguishes explicit hard constraints, flexible preferences, priorities, negations, use cases, and genuinely unknown values.
- Score at least constraint extraction and budget-type errors separately; track when clarification vs abstention is appropriate.
- Retain original product outcomes, and test whether improved structured intent translates into acceptable shortlists, not merely prettier JSON.
- Record per-scenario baseline, failure severity, model cost/latency and expected merchant relevance.
- No V3 improvement has yet been observed or claimed.

### Revisit when
Baseline evaluation shows intent parsing is not the main failure source, or a non-LLM fix achieves comparable improvement at materially lower cost/latency.

