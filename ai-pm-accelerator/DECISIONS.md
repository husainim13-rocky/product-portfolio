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
