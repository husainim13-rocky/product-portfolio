# AdPilot — Agentic Campaign Optimization Copilot

**Independent portfolio build · P0 in progress · Synthetic data only · Not affiliated with Reddit**

[Read the product and decision journal](https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit?usp=drivesdk) · [Portfolio site](https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/)

## Customer problem
Performance marketers spend substantial time investigating campaign performance issues, evaluating optimization options and applying updates. We are exploring whether a tool-calling AI agent can shorten **time-to-appropriate-action**, without overwhelming an advertiser with low-quality recommendations.

## Product approach
- Proactively investigate, but show **at most three** well-supported opportunities (zero is valid).
- LLM determines which investigation tools to call and explains uncertainty.
- Deterministic code computes CPA, checks conversion maturity, validates campaign compatibility and bounded transfer size.
- Only an application-owned **explicit approval button** may execute a synthetic budget update. The model has no write tool.
- Treat budget-limited flags as evidence to investigate, **not** proof of profitable marginal conversions.
- Publish failures and before/after evaluations instead of anecdotal successful demos.

## P0 progress (2026-11-22)
The local Python starter adds OpenAI Agents SDK tools, a Streamlit app, preview/approval and simulated budget execution. Offline verification: **17/17 unit tests** and **15/15 frozen deterministic synthetic cases**. **Live LLM invocation and hosting are not yet verified**, and no actual advertiser outcomes are claimed. Do not share as a production-ready app.

## Architecture
`Agent + Runner` → Python `@function_tool` investigation tools → deterministic campaign metrics/policy → non-executing budget preview → separate human approval → synthetic in-session update and audit.

The complete runnable starter package has been generated locally and will be synchronized into this GitHub project after the first live model-run validation. The files in this directory are **currently documentation, not yet the full runnable codebase**. The public website is hosted separately from this GitHub repository; a new AdPilot project card has **not yet been deployed** to that site.

## Next milestones
1. Run the agent with a valid API key, capture actual tool traces and fix orchestration errors.
2. Evaluate frozen scenario prompts, score unsupported claims and useful abstention, and record failure-driven improvements.
3. Test Streamlit interaction and sandbox approval end-to-end.
4. Deploy a shareable experience and record a short evidence-backed case study.

**Known limitations:** frozen synthetic November 2026 metrics, simplified conversion lag, unknown auction opportunity, unproven marginal CPA, no live platform API integration, no measured advertiser time savings or CPA lift.
