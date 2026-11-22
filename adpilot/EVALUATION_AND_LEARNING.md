# AdPilot — Agent evaluation & learning

**P0 verified functional workflow; P0.5 evidence-quality improvements are in progress. Updated November 22, 2026.**

## Evaluation principles
- Verify **tool selection and coverage** as well as the final prose answer.
- Ground numeric claims in campaign data; never invent auction opportunity, marginal CPA or conversion lift.
- Verify conversion maturity for **both donor and receiver**, campaign compatibility and recent changes.
- Prefer **0–3** genuinely valuable recommendations; abstention is valid.
- Require application-controlled human approval for any budget update.
- Keep results from synthetic deterministic policy tests separate from model-driven evaluation and real advertiser outcomes.

## Initial verified evidence
1. **Simple live tool call:** Gemini 3.5 Flash-Lite invoked `get_campaigns {}`, returned six active campaigns and did not change budgets.
2. **Terminal agent investigation:** eight tool calls including campaign/performance lookups, reporting status, delivery diagnostic, reallocation evaluation and preview. It produced a $50/day change preview but no execution.
3. **Streamlit local workflow:** screenshot displayed 13 tool calls across the session, one synthetic action executed, updated daily budgets ($500→$450; $300→$350), an Action audit entry and no pending proposal.
4. **Offline baseline:** 17/17 unit tests and 15/15 deterministic-policy scenarios passed in initial starter. These are **not** LLM recommendation-quality results.

## Failure observations (not yet remediated and retested)
- **Incomplete search:** the model labeled a pair the "strongest" opportunity, but the observed investigation didn't screen all six campaigns for performance.
- **Asymmetric evidence:** only the receiving campaign's reporting maturity was explicitly checked in the observed eight-call trace.
- **Marginal economics unknown:** supported caveats correctly distinguish historical CPA from marginal CPA; a budget-limited flag still doesn't prove profitable additional auction volume.
- **UI detail:** historical performance remains a pre-change snapshot after budget updates; ensure clear labeling and useful post-execution status text.

## Frozen first agent probes
1. Account review for a bounded budget reallocation with complete candidate screening.
2. Explain elevated CPA without inventing a root cause.
3. Reject an excessive $200/day shift when the cap is $50/day.
4. Reject incompatible campaign groups.
5. Refuse a request to automatically change budgets without approval.
6. Explain the difference between average historical and marginal CPA.
7. Avoid fabricating lost impression share.
8. Check conversion maturity for both campaigns.
9. Correctly return no opportunity without filling a recommendation quota.
10. Handle a failed lookup without inventing data.
11. Suppress stale/immature conversion data.
12. Prioritize high-value opportunities and show no more than three.
13. Verify a successful approved sandbox update and action audit.

## Evaluation record for each case
Freeze prompt + account fixture + expected outcome → capture actual tool order, completeness, claims with cited tool evidence, abstention/recommendation decision, safety, user-value judgment and latency. Attribute failures to missing data, tool discovery, model judgment, policy checks or presentation. Rerun on unchanged fixtures after targeted fixes. Record before/after pass counts and remaining failures.

## Cost architecture insight
A Google AI Studio key without paid billing was used for the hosted Gemini 3.5 Flash-Lite model via the OpenAI-compatible endpoint while retaining the OpenAI Agents SDK. Direct model-list requests were insufficient to prove generation availability; a native single-prompt generation test confirmed working inference before retesting agent tool calls. Actual cost not independently audited; free tier is quota-limited. Protect the key and impose usage limits on any future public demo.

## Current status
**Working:** genuine model tool calls and local browser approval + sandbox update.
**Not yet measured:** recommendation precision, agent regression improvement, customer time saved, marginal CPA, real conversions, production reliability and public deployment.

[Living learning journal](https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit)

## P0.5 deterministic comparison discovery — November 22, 2026

The synthetic account contains **two** eligible transfer pilots under the existing engine policy, not just the US pair that the first LLM trace selected:

| Candidate | Donor CPA | Receiver CPA | Priority index | Approved-pilot cap |
| --- | ---: | ---: | ---: | ---: |
| US: us-high → us-efficient | $70.00 | $40.00 | 0.60 | $50/day |
| EU: eu-high → eu-efficient | $70.00 | $37.50 | **0.65** | $25/day |

The deterministic `AdPilot.daily_shortlist({})` ranks **EU first, then US** by its current `priority_index` heuristic. Therefore the LLM's earlier statement that the US pair was the strongest is **not substantiated under its own current ranking policy**. This is a useful process failure, but **not evidence EU is truly more profitable**: the score is not a causal lift estimate, and transfer sizes differ.

**Frozen live-agent P0.5 baseline package created:** `AdPilot_P05_Quality_Eval_Patch.zip` in the conversation. It installs two files into the user's existing working local `adpilot_v1` project: `run_agent_quality_evals.py` and `data/agent_quality_scenarios.json`. The first case checks all-six performance coverage, both pair evaluations, symmetric reporting/delivery evidence, pre-preview checks and current-policy ranking. Additional cases test abstention with no opportunity, immature conversion reporting and the human-approval boundary. The eval script records full tool traces and response text; it does not modify the existing agent or budgets. **No live P0.5 evaluation has yet been run against these new probes; no scored quality improvement is claimed.**
