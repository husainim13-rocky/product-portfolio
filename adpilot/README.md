# AdPilot — Agentic Campaign Optimization Copilot

**Independent portfolio project · P0 working locally · P0.5 in progress · Synthetic data only**

[Portfolio-ready AdPilot page](../dist/adpilot/index.html) · [Decision and learning journal](https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit) · [Evaluation plan](EVALUATION_AND_LEARNING.md)

## Customer problem
Performance marketers spend substantial time identifying campaign problems, investigating uncertain opportunities and implementing actions. AdPilot explores whether a real tool-calling agent can shorten time to an *appropriate* campaign change without flooding advertisers with recommendations.

## Product decisions
- Proactively investigate, but show **0–3** well-supported opportunities; zero is valid.
- Use an actual hosted LLM to choose investigation tools and explain facts versus hypotheses.
- Keep arithmetic, budget constraints and final execution in deterministic application code.
- Require an explicit human approval to make any synthetic account update.
- Treat historical average CPA and budget-limited status as insufficient evidence of marginal CPA improvement.

## P0 verified — November 22, 2026
- A live Gemini 3.5 Flash-Lite run through the **OpenAI Agents SDK** called `get_campaigns` successfully, then completed a separate **eight-tool** investigation and generated a non-executing budget preview.
- The local Streamlit app showed **13 tool calls across the browser session**, a human-approved sandbox action, changed budgets ($500→$450 and $300→$350) and an Action audit entry.
- The combined daily budget remained **$800**. No live ad platform was connected.
- The initial offline starter passed **17/17 unit tests** and **15/15 frozen deterministic policy scenarios**. These are not LLM recommendation-quality scores.

## Why P0 → P0.5 → P1 (product and architecture decision)

**P0 — deliberately small, November 22.** Start with **six synthetic campaigns** and individual investigation tools to test the central product hypothesis: can a real hosted LLM investigate an advertiser account, recommend a defensible *bounded* experiment, and maintain an explicit approval boundary? That was a conscious **proof-of-workflow scope decision**, not an assertion that per-campaign tool calls would scale. We validated local model/tool integration and human-approved sandbox behavior; **we did not validate incremental CPA or customer value**.

**P0.5 — evaluation exposed the next constraint, November 22–24.** We discovered it was possible to make a plausible recommendation without examining every eligible candidate or explicitly checking both campaigns' conversion reporting. A complete six-campaign investigation involved **17 recorded tool calls** in one frozen live run; after introducing mandatory US-vs-EU comparison instructions, a later run exhausted the **15-turn orchestration limit**. The next attempt encountered **HTTP 429 at Gemini's 15-requests-per-minute quota** (15/15 RPM; daily and token limits were not exhausted in the supplied dashboard). Tool calls and Gemini API requests are **not one-to-one**, but repeated model/tool round trips amplified latency and quota pressure. This is when we recognized a **tool/data-access architecture constraint**, distinct from recommendation accuracy.

**P0.5 progress and remaining gap:**
- Initial account-prioritization live probe: **9/10 automated process checks**; donor reporting-status investigation missing. No unauthorized updates.
- A **workflow gate** was installed and locally tested (**22/22 unit tests**). The next live trace explicitly checked maturity for both sides. The original policy-ranking check then failed because Gemini selected US instead of heuristic-first EU; **heuristic order is not ground-truth incremental value**.
- A revised **v2 process rubric regraded the saved trace at 10/10**, but the **required human review of evidence-backed US-versus-EU reasoning remained pending**. The original answer lacked a meaningful comparison. Regrading is **not** an improvement in model behavior.
- Making comparative instructions explicit led to a **15-turn exhaustion**, then a separate **RPM 429**. A six-campaign **account-snapshot tool patch was prepared and passed offline checks (25/25 unit tests; 15/15 policy scenarios)**, but its real Gemini investigation cost and comparative output are **not yet verified**.

**P1 — proposed production-scale architecture, not built.** For an advertiser with hundreds or thousands of campaigns:
1. Retrieve account data through bulk/paginated backend APIs, with normalization, freshness, and change-history controls.
2. Apply **deterministic code-based eligibility screening** across the full account (conversion maturity, sufficient sample, comparability, spend constraints, recent edits). Capture rejection reasons and avoid passing every campaign's raw metrics to the model.
3. Send Gemini a **bounded shortlist with source evidence**, not 1,000 full campaign records. Let it fetch deeper metrics or alternative candidates when uncertainty remains.
4. Validate evidence, bounded-transfer policy and approval **outside the model** before any preview or execution.

**P1 quality gate:** compare end-to-end **eligible-opportunity recall** (including valuable candidates lost during filtering), top-3 recommendation relevance/justification, unsupported-recommendation and abstention rates, authorization safety, latency, tokens and provider requests per review, and estimated per-account cost. Use representative and risk-weighted synthetic cases plus **held-out and shadow-mode real-account review** before any controlled advertiser pilot. The shortlist must not silently hide high-value opportunities.

**Decision:** Finish measurable P0.5 quality/cost experiments on six campaigns first; do not build a 1,000-campaign data platform until the product's core recommendation behavior is demonstrated. This is the deliberate roadmap from a narrow proof of concept to a production-ready design, not a claim that P1 is implemented.

## Architecture
`Gemini hosted model + OpenAI Agents SDK Runner` → Python `@function_tool` investigation functions → deterministic metrics/policy → non-executing proposal → application-owned approval → synthetic account write/readback and audit.

**Cost lesson:** Gemini was used with a new Google AI Studio key without purchasing OpenAI API credits or enabling paid billing. This is a limited hosted free allowance, not a claim of unlimited free inference or audited $0 costs. Do not commit API keys; monitor quotas before public hosting.

## Repository vs live site
The [AdPilot case study is now published on the existing live portfolio](https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/adpilot/) as of November 22, 2026, following a Work-mode update. The [static source](../dist/adpilot/index.html) and [public status feed](status.json) are also stored in GitHub; do not assume live Site auto-sync without verification. The full runnable local AdPilot app source has also **not yet been synchronized** into this GitHub directory; any current checked-in runtime example should not be mistaken for a deployed or current full local build.

Next: securely synchronize the complete runnable local code (without API keys or .venv), establish reproducible agent evaluation, improve evidence coverage, and deploy a bounded public demo.

**Portfolio release checklist:** Whenever we complete meaningful new verified functionality, a measured P0.5 evaluation improvement or a public-demo milestone, remind the user to switch to **Work mode** and update/republish the existing ChatGPT Site. Routine internal commits need no Site update.

**Limitations:** synthetic campaigns, frozen November 2026 metrics, simplified reporting maturity, unknown auction opportunity, unvalidated marginal CPA, no external user study, no demonstrated time savings, and no real CPA lift.
