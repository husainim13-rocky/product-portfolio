# Day 1 — Product framing, V2B audit, and catalog expansion decision

**Date:** 2026-11-18
**Status:** Planned — no Day 1 learning or catalog expansion completed yet
**Duration:** 180 minutes
**Program:** AI PM Accelerator (4 weeks, 3 hours/day)
**Product:** Intent-Aware AI Commerce Discovery Agent V3

## Outcome
Decide what real shopper failure is worth improving with AI, understand what V2B already handles, specify how a larger catalog helps the decision, and agree on an evaluation plan *before* scaling the dataset.

## Timeboxed agenda

| Minutes | Module | Lead question | Observable deliverable |
| --- | --- | --- | --- |
| 0–30 | Product opportunity | Which shopper, shopping job, and outcome matter most? | Target user, JTBD, value proposition, north-star / guardrail hypotheses |
| 30–65 | V2B baseline audit | Which failures are interpretation vs retrieval vs eligibility vs ranking vs explanation? | At least 6 recorded requests, expected behavior, observed response and failure layer |
| 65–100 | Catalog data strategy | Which catalog gaps make relevance hard, and how much variety do we actually need? | Two-category attribute schema, data-quality/evidence policy, catalog-growth justification |
| 100–135 | Experiment design | How would we establish whether V3 improves the experience beyond V2B? | First 20–30 evaluation queries and labeling rules; split development vs held-out |
| 135–165 | Architecture and prioritization | Which failures justify LLM, semantic search, hybrid ranking or rules? What is the simplest test? | Architecture alternatives, priority hypothesis, explicit falsification criteria |
| 165–180 | Teach-back | Could you defend the choices to a senior AI PM interviewer? | Written decision record and next-day priorities |

## Catalog decision (proposal, not implemented)
- Preserve the original 42-product synthetic headphone catalog as a frozen historical control.
- Build a **separate versioned V3 evaluation catalog** of approximately 150 headphone and 150 laptop products.
- Expand in stages *after* schema and evaluation protocol are defined, starting with headphones and adding laptops during Week 2.
- Create deliberate hard cases: near-substitutes, multi-attribute trade-offs, weak/absent evidence, strict budget, negation, incompatible needs, missing freshness, new products and unsupported attributes.
- Carry provenance of each synthetic attribute; do not represent fictitious specifications as externally validated.
- Evaluate query understanding, eligibility, candidate recall@K, top-three relevance, grounded explanations and clarification behavior separately.
- Do not presume we need a vector database or multi-agent architecture at 300 products. Test simpler approaches first.
- Use a much larger synthetic stress-test corpus only when answering a concrete retrieval-scale or latency hypothesis.

## Suggested audit cases (adapt collaboratively, not yet scored)
1. 'Under $250: very good calls on flights, multipoint, with ANC.'
2. 'Under $60, excellent ANC and excellent mic. Must have both.'
3. 'I want wired headphones; no Bluetooth.'
4. 'Comfort matters more than bass; I wear them all day.'
5. 'I need something for Mac/Windows video meetings and occasional international travel.'
6. 'No over-ear headphones, but long-haul noise cancellation is important.'
7. 'A laptop for video editing under $1,000, light enough for daily travel.' (new-category gap)
8. 'Best for work calls and travel' (intent without explicit category).

## Day 1 acceptance criteria
- PM can articulate who the user is and what objective/guardrails matter.
- V2B strengths and limitations are recorded with evidence instead of assumptions.
- Catalog schema and generated-vs-verified data distinctions are explicit.
- At least three testable hypotheses compare alternatives, with go/no-go conditions.
- A small evaluation suite is designed *before* any model-driven implementation.
- PM can independently explain why not all constraints, ranking and tool choices belong inside an LLM.

## Coaching protocol
PM reasoning comes first. Ask for a decision and rationale before showing a proposed implementation. Challenge trade-offs; use technology only to test product value. Record what was proposed, what failed, what changed, and what remains uncertain.

## Repository status
Prior V2B source recovered at `archive/v2b/engine.js` in the `ai-pm-v3-foundation` branch. Original V2B test suite was not recovered in full in this session; historical pass counts are not a fresh rerun. This plan is not evidence of any completed course, engineering experiment, or published website change.
