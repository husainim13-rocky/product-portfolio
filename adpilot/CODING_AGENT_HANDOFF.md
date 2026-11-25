# AdPilot coding-agent handoff — one-time migration and automated engineering workflow

**Source of truth for the latest runnable app:** user's local Mac folder `~/Downloads/adpilot_v1`. The public `product-portfolio/adpilot` folder is **documentation / illustrative code only**, not necessarily the latest runnable project. Never overwrite the local project with the public portfolio version.

## Goal

Make AdPilot engineering changes and offline test runs agent-owned, while the PM owns evaluation quality, product decisions, and release criteria. Migrate the **current, working** local application into a **separate private GitHub repository** (recommended name `husainim13-rocky/adpilot-agent`) and configure secure, reproducible CI. Do not replace or privatize the user's existing public portfolio repository. Do not expose API credentials.

## Known baseline — Nov 24/25, 2026

- Existing local AdPilot synthetic app uses Gemini 3.5 Flash-Lite through OpenAI Agents SDK, six synthetic campaigns, deterministic donor/receiver eligibility checks and a sandbox-only advertiser approval boundary.
- The user **already installed** `AdPilot_P05_Account_Snapshot_Optimization.zip` into `~/Downloads/adpilot_v1`. Installer reported “Account snapshot installed; prior files backed up.”
- The user's latest local output: `python -m unittest discover -s tests -q` → **25 tests passed**. This validates offline tests, **not** live Gemini request savings or improved recommendation quality.
- Earlier live account prioritization evaluation was interrupted by `RateLimitError: Error code: 429` after Gemini reached its 15 RPM quota. **4/7 incomplete-run process checks are not model decision-quality evidence**. An earlier run hit the 15-turn ceiling. The user changed `max_turns=15` to `max_turns=25`.
- A new **live Gemini run after installing the account snapshot has NOT yet been observed or verified**.
- Core PM requirement: compare US vs EU candidate pairs with evidence (CPA, mature conversion counts, budget constraints, incremental uncertainty), not blindly choose heuristic EU or US. No preview without required validation. Do not execute real ad-platform operations.

## Implementation instructions for a coding agent with access to the user's Mac

1. Inspect the local project **read-only first**, including `git status`, project structure, dependency spec, existing agent runtime, gateway, quality evaluation scripts, tests, `.gitignore`, and any `.env` / secret files. Inventory source needed for reproducibility. Do not print, transmit, or add raw credentials to outputs. Do not use `git add -A` until sensitive-file exclusions and staging review have been completed.
2. Before any publishing, create a local backup or work on a new branch; preserve all existing local scripts, fixture versions, saved evaluation traces, and `*.py.pre_account_snapshot` backups. Unless user requests it, do not delete or rewrite previous evaluations. Keep snapshots with any secrets outside version control.
3. Create/reuse a **private** GitHub repository under the user's account. Confirm its visibility is **private before pushing**. If GitHub authentication or permissions require human action, request only that one-time authorization. Do not use the existing public portfolio repository for unreviewed runnable source. If the private repo already exists, inspect it and avoid force pushes, overwrites, or history rewriting.
4. Initialize or reconcile version control safely. Add a comprehensive `.gitignore`: `.env`, `.env.*` except a safe `.env.example`, `.venv/`, `__pycache__/`, `.pytest_cache/`, `*.pyc`, OS/editor artifacts, credentials, local caches, secrets, and potentially sensitive live trace dumps. Perform a staged-diff secret/path review **before every first push**. Commit all reproducible source, synthetic fixtures, necessary tests, README, and dependency lock/spec; avoid including raw keys. A placeholder `.env.example` must show **names only**, never real values.
5. Add Python CI (e.g. `.github/workflows/ci.yml`) that runs on branch pushes and PRs, on a supported Python version consistent with local dependencies. Install dependencies, run `python -m unittest discover -s tests -q`, run the actual deterministic policy suite if present (discover the correct script/arguments rather than inventing one), and smoke-test the frozen evaluator listing without invoking the paid/limited hosted model. Cache dependencies sensibly. Ensure CI is deterministic and uses **no API key**.
6. Add a separate **manual-only**, explicit approval-gated hosted Gemini evaluation path if valuable. Only use `workflow_dispatch` or an equivalently controlled agent run, with `GEMINI_API_KEY` from a GitHub Actions encrypted secret, strict request-rate handling, max-turn and retry caps, and short per-run limits. Never put credentials in logs or upload artifacts containing them. Do not automatically run this workflow on every push or PR, nor perform the first billed/quota-constrained live test without user's approval.
7. Verify `get_account_optimization_snapshot` is registered as a **single model-facing tool** that internally gathers the six-campaign evidence and both candidate evaluations, while retaining independent engine safeguards. Offline tests passing alone are not enough to establish lower live Gemini request count. Report before/after model API requests, turns, token count if available, wall-clock time and process safety when the live test is authorized. Back end tool_log entries may remain many; distinguish them from provider requests.
8. Open a PR for future changes instead of silently changing the baseline. Keep a short change summary, test evidence, and PM decision questions. Only label P0.5 improved if matched live quality evaluation and decision-review criteria pass. Portfolio docs are maintained separately in `husainim13-rocky/product-portfolio`.

## Definition of done for the **one-time setup**

- Agent has access to the **current local working code**, and private GitHub repository exists with correct visibility.
- No secrets, virtual environment, or local credentials were committed.
- Offline CI runs and passes the same 25 unit tests and applicable deterministic policy tests on a reproducible checkout.
- Agent shares the private repo link, commit/PR reference, CI URL/results, and a clear list of any unresolved permission or dependency blockers.
- Agent leaves **live Gemini evaluation unrun** unless separately authorized. Next PM-facing evaluation: fixed US/EU six-campaign prioritization case, with process quality and human comparative judgment separately scored.

## Product boundary and publication

AdPilot's initial six-campaign P0 exists to validate agent decision workflow and human-approved synthetic budget changes. P0.5 is fixing evidence quality and tool-call overhead. Future P1 at scale is **only a plan**: bulk retrieval → deterministic eligibility screening → bounded evidence shortlist → Gemini comparative reasoning / on-demand deep dive → independent validation and approval. Screening recall, supported recommendations, safety, latency, provider calls and cost must be evaluated before claiming scale readiness. Preserve all explicit synthetic/demo limitations.

Related public product record:
- https://github.com/husainim13-rocky/product-portfolio/blob/main/adpilot/README.md
- https://github.com/husainim13-rocky/product-portfolio/blob/main/adpilot/EVALUATION_AND_LEARNING.md
