# AI PM Accelerator — Intent-Aware Commerce Discovery V3

**Plan:** 4 weeks, 3 hours/day, beginning November 18, 2026.
**Status:** Planned; learning sessions not yet completed.

## Purpose
Build Principal/Director-level AI Product Management judgment through a deeply understood, measured product evolution from V2B to V3. The build is a means to learn and defend product decisions, not a checklist of AI features.

## Product scope
Conversational intent-aware product discovery for headphones and laptops, starting from the archived 42-item synthetic headphones baseline. Expand categories only when justified by a measurable user problem. Do not represent synthetic evidence as production validation.

## Weekly milestones
| Week | Dates | Focus | Deliverable | Status |
| --- | --- | --- | --- | --- |
| 1 | Nov 18–24 | Problem framing, LLM foundations and intent extraction | PRD, baseline, initial LLM vs rule-based evaluation | Not started |
| 2 | Nov 25–Dec 1 | Retrieval, embeddings, hybrid search, ranking | Two-category retrieval and ranking experiments | Not started |
| 3 | Dec 2–8 | Conversational UX, tools and bounded agent | Multi-turn tool-enabled shopping flow | Not started |
| 4 | Dec 9–15 | Evaluations, reliability, economics and portfolio | Tested demo, case study, decision defense | Not started |

## Coaching priorities
Prioritize customer problem framing, product strategy, alternative solutions, architecture trade-offs, prioritization, experiments, cost, latency, launch decisions and learning from failure. Teach-back and independent justification are required before treating any skill as mastered.

## Learning references (planned, not completed)
- Week 1: selected **Generative AI for Everyone** lessons (Andrew Ng, DeepLearning.AI).
- Weeks 2–3: selected **Agentic AI** lessons (Andrew Ng, DeepLearning.AI).
- Weeks 3–4: selected **Evaluating AI Agents** lessons (DeepLearning.AI).

Only mark a lesson/course completed after actually taking it.

## Evidence rules
- Maintain daily decisions, explicit alternatives, expected outcomes, actual evaluations and failures.
- Preserve V2B as a reference implementation, not an assertion of production relevance.
- Historical V2A aggregate results and previous V2B behavioral-test assertions must remain labeled with their correct provenance.
- Update the portfolio **AI Learning** section with only courses/modules actually completed and specific concepts learned; link those learnings to the product when useful.
- Update the portfolio **Personal Projects** section for verified Intent-Aware Commerce Discovery V3 milestones, demos, architecture improvements, evaluations, and technical/DevOps work actually implemented.
- No website publication is implied by GitHub commits.

## Day 1 (Nov 18)
1. Define customer/job-to-be-done and success measure.
2. Audit the V2B behavior and limitations.
3. Make three testable AI-vs-rules hypotheses.
4. Establish an evaluation protocol.
5. Defend the proposed architecture and record feedback.

## Documentation and portfolio publishing conventions
- **ChatGPT AI PM Prep:** active coaching conversations, prompts, teach-back, and progress discussions.
- **Private Google Docs learning journal:** day-by-day progress, course tracker, individual coaching feedback, and learning reflections. This should not be copied into the public repo or website.
- **GitHub:** a concise top-level Markdown plan (this file), project PRD, durable architecture/product decision records, and reproducible evaluation methodology/results. Add these artifacts when work actually occurs, not one file for every coaching session. Keep supporting code/tests/data alongside them.
- **Portfolio AI Learning:** completed DeepLearning.AI/Andrew Ng modules and other courses, with dates and practical takeaways (not merely planned enrollments).
- **Portfolio Personal Projects:** V3 status and completed milestones, architecture, technology/DevOps choices, measurable results, working demo, and linked public case study. Distinguish hypotheses and future scope from shipped features.
- **Publishing protocol:** after each meaningful project milestone, review public-ready evidence and update the Personal Projects entry; after each completed course/module, update AI Learning. Validate live publication separately from GitHub changes. Do not publish personal coaching feedback or unverified claims.

### Planned GitHub documentation (create as work is completed)
- `PRD.md` — target users, jobs-to-be-done, scope, outcomes, risks and success metrics.
- `DECISIONS.md` — dated decisions with alternatives, assumptions, evidence, trade-offs and reconsideration triggers.
- `EVALUATIONS.md` — evaluation datasets, ground-truth provenance, methodology, baseline and experiments, failure analysis and reproducibility instructions.
- `README.md` — how to run V3, architecture, demo and links once working.
