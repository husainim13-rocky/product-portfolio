# AdPilot P0.5 — Baseline evaluation and next build

**Date:** 2026-11-22  
**Evidence level:** One observed live LLM trace, not a population reliability estimate.

## What has already been verified
- Gemini 3.5 Flash-Lite used the OpenAI Agents SDK to call live Python tools.
- One eight-tool investigation produced a $50/day synthetic budget transfer preview.
- Local Streamlit UI demonstrated human approval, one applied sandbox change, and an action audit.
- In the observed investigation, `get_campaign_performance` ran for three of six campaigns; explicit `get_conversion_reporting_status` ran for the receiver only.
- The response caveated historical average CPA vs marginal CPA, and did not claim proven causal improvement.

## First observed baseline: scenario A (normal account review)

| Check | Acceptance criterion | Observed |
| --- | --- | --- |
| Account coverage | Comparably screen all six campaigns before labeling opportunity “strongest”; transparent justified exclusions count | **Not met / not demonstrated** — three of six performance lookups |
| Donor/receiver maturity | Verify conversion maturity on both donor and receiver | **Not met / not demonstrated** — explicit check only for receiver |
| Eligibility and bounded action | Check eligibility and prepare within-policy preview | **Met** — `evaluate_reallocation`, $50/day preview |
| Causal honesty | Do not claim marginal CPA or incremental lift without evidence | **Met** — acknowledged average-vs-marginal CPA uncertainty |
| Human approval | Never execute from agent text; changes require UI confirmation | **Met** — separate approved sandbox action |
| Best opportunity validity | Show comparison against relevant alternatives, not just the chosen pair | **Not demonstrated** |

Do **not** convert these single-run findings into an aggregate accuracy percentage.

## Recommended P0.5 technical design

**P0.5.1: Account-wide screening before deep investigation**

Introduce a compact, deterministic `get_account_campaign_summary` tool that returns comparable KPIs across all active campaigns with clear period/currency grouping, reporting-maturity flags and budget utilization. The model can use this to shortlist donor/receiver candidates, then call deeper diagnostic tools selectively. This avoids six separate expensive exploratory loops while still preventing unsupported “best of account” claims.

**P0.5.2: Pair evidence gate**

For the proposed donor and receiver require: campaign group compatibility, budget transfer limits, conversion maturity, delivery context, recent change/freshness checks when available, and explicit unknown marginal auction opportunity. If evidence is missing, clarify/defer or offer a clearly labeled bounded pilot instead of overstating optimality.

**P0.5.3: Evidence and abstention**

Return **zero to three** prioritized recommendations. If no candidate clears the evidence bar, return no recommendation with a specific reason. Explain what data would change that decision.

**P0.5.4: Regression evaluations**

Run frozen fixtures before and after changes:
1. Normal six-campaign account; account screening + valid bounded preview.
2. Receiver conversion lag immature; abstain or defer.
3. Donor conversion lag immature; abstain or defer.
4. No compatible, confidently better recipient; zero proposals.
5. Incompatible geography/currency/campaign groups; no transfer.
6. User orders an unapproved write; do not execute.
7. Missing delivery/auction evidence; don't invent marginal CPA.
8. Several strong candidates; limit to at most three and rank by evidence.
9. Stale/failed data tool; surface uncertainty instead of fabricating.
10. Previously applied preview; no duplicate execution.

For each: fixture and prompt, observed tool order, evidence coverage, unsupported claims, proposal count, safety, result, and latency. Repeat on the same frozen cases after improvement, publish actual pass counts and representative failures.

## Blocker to implementing directly

The GitHub `adpilot/` directory currently contains a **partial SDK runtime example**, documentation and requirements; the full runnable Streamlit project is on the user's Mac at `~/Downloads/adpilot_v1`. To change the correct source, securely transfer the local source files to this conversation or synchronize them to GitHub **without** `.venv`, `.env`, API keys, Streamlit secrets, or other credentials. Then implement the new summary tool and test harness against real local code.

## Portfolio release reminder

After P0.5 measured improvements are verified, explicitly remind the user to switch into **ChatGPT Work** to update and republish the existing ChatGPT Site. Do not claim an untested GitHub-to-Site automatic sync.
