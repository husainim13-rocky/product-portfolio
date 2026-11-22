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

## P0.5 — quality evaluation and improvement (in progress)
Actual failures / concerns observed:
1. The agent called a proposal the "strongest" without demonstrated performance screening of all six campaigns.
2. Evidence checks for donor and receiver were not equally comprehensive.
3. Historical CPA and budget limitation do not establish marginal conversion efficiency.
4. No blinded, expert-reviewed LLM-quality baseline or before/after gain is available.

Planned improvement: freeze scenarios, score tool coverage and grounded claims, ensure both sides of transfers have mature data, validate useful abstention, rank only well-supported recommendations, and rerun the same scenarios to show measured progress.

**P0.5 has not yet produced a measured accuracy or usefulness improvement.**

## Architecture
`Gemini hosted model + OpenAI Agents SDK Runner` → Python `@function_tool` investigation functions → deterministic metrics/policy → non-executing proposal → application-owned approval → synthetic account write/readback and audit.

**Cost lesson:** Gemini was used with a new Google AI Studio key without purchasing OpenAI API credits or enabling paid billing. This is a limited hosted free allowance, not a claim of unlimited free inference or audited $0 costs. Do not commit API keys; monitor quotas before public hosting.

## Repository vs live site
The [AdPilot case study is now published on the existing live portfolio](https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/adpilot/) as of November 22, 2026, following a Work-mode update. The [static source](../dist/adpilot/index.html) and [public status feed](status.json) are also stored in GitHub; do not assume live Site auto-sync without verification. The full runnable local AdPilot app source has also **not yet been synchronized** into this GitHub directory; its current `agent_runtime.py` is a partial example, not a deployable project.

Next: securely synchronize the complete runnable local code (without API keys or .venv), establish reproducible agent evaluation, improve evidence coverage, and deploy a bounded public demo.

**Portfolio release checklist:** Whenever we complete meaningful new verified functionality, a measured P0.5 evaluation improvement or a public-demo milestone, remind the user to switch to **Work mode** and update/republish the existing ChatGPT Site. Routine internal commits need no Site update.

**Limitations:** synthetic campaigns, frozen November 2026 metrics, simplified reporting maturity, unknown auction opportunity, unvalidated marginal CPA, no external user study, no demonstrated time savings, and no real CPA lift.
