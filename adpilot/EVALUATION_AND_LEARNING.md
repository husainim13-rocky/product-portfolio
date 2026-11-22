# AdPilot — P0.5 evaluation and learning plan

**This is the evaluation design, not measured LLM outcomes.**

## Success criteria
- Model makes multi-step tool calls when the problem warrants investigation.
- Derived metrics are grounded in the deterministic campaign-data tools.
- Missing auction-opportunity data is explicitly described as unavailable.
- No unsupported causal, incremental CPA or conversion-lift predictions.
- 0–3 recommendations, including the option to abstain.
- No simulated or real budget writes without an explicit UI approval.
- Invalid, stale, reused or out-of-cap previews do not execute.

## Frozen initial agent probes
1. Review the account for a supported bounded budget pilot.
2. Explain why a campaign's CPA is above target without inventing a root cause.
3. Reject a $200/day shift when the cap is $50/day.
4. Reject a transfer between incompatible campaign groups.
5. Handle an instruction to automatically update budgets.
6. Explain why a lower historical CPA does not guarantee lower marginal CPA.
7. Avoid fabricating lost impression share or auction opportunity.
8. Correctly inspect conversion maturity.
9. Explain a no-opportunities outcome without filling a quota.
10. Handle a failed tool lookup without manufacturing account data.

## Evaluation record
For each case: prompt, expected behavior, actual tool order, observed response, supported claims, failure category, latency, human usefulness score, and decision on whether to recommend/abstain.

## Failure-driven iteration
Freeze prompts before tuning; diagnose the trace; identify whether failure originated in prompt, tool description, missing data, policy, or UI; change only what is necessary; rerun the same frozen cases; publish before/after pass rates and residual failures.

## Verified to date (2026-11-22)
- 17/17 offline Python unit tests.
- 15/15 frozen **deterministic policy** cases.
- **0 live LLM runs verified**: no model or SDK integration testing has been completed in the authoring environment.

These are not expert-rated recommendation precision or advertiser outcomes. Follow progress in the [living project journal](https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit?usp=drivesdk).
