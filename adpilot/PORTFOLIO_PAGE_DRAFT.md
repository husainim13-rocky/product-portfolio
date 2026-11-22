# AdPilot — Agentic Campaign Optimization Copilot

**Independent AI product build · P0 verified locally, P0.5 improving quality · November 22, 2026**

> **A marketer should receive a few supported optimization opportunities, not a barrage of alerts.** AdPilot uses a real tool-calling LLM to investigate campaign data, prepare a bounded budget-change proposal and require advertiser approval before any action.

### Customer problem
Investigating CPA fluctuations and executing appropriate campaign changes across multiple dashboards consumes advertiser time. Generic alerts lack context; automatic actions can damage trust.

### Product choice
Start with time-to-appropriate-action, not a promise of autonomous ROAS improvement. Let an LLM select investigative tools and explain uncertainty while deterministic functions validate arithmetic, eligibility and safety. Permit **zero recommendations** if none meet the evidence bar.

### What P0 achieved (observed live)
- A hosted **Gemini 3.5 Flash-Lite** model orchestrated by the **OpenAI Agents SDK**, not a local Ollama model.
- One simple `get_campaigns` call and a separate **eight-tool** campaign investigation that prepared a $50/day budget-transfer preview.
- A working **Streamlit** experience with human approval, a synthetic budget change and action audit. In the observed browser session, **13 tool calls** and **one executed synthetic action** were shown.
- Two budgets moved from **$500 to $450** and **$300 to $350**, preserving the $800 combined daily budget.

### What P0.5 has found — and is still working on
- **Incomplete account screening:** the agent described an opportunity as the strongest without evidence of inspecting every candidate campaign.
- **Uneven maturity checks:** donor and receiver data quality should both be investigated.
- **Uncertain incremental value:** a lower historical CPA and budget-limited status do not prove attractive marginal CPA.
- **Need for measurable improvement:** build frozen agent scenarios, inspect traces, verify abstention and compare before/after supported recommendation quality.

**Not yet achieved:** expert-reviewed quality improvement, demonstrated advertiser time savings, any measured CPA lift, or public deployment.

### Technical and learning choice
We connected a no-paid-billing Google AI Studio Gemini API key to the OpenAI Agents SDK through Google's OpenAI-compatible endpoint, preserving Python tools while avoiding a purchase of OpenAI API credits. Usage remains subject to free-tier eligibility, quotas and future deployment cost. The model was allowed to investigate, not to execute unapproved writes.

### Evidence and limitations
The initial offline engine passed **17/17 unit tests** and **15/15 deterministic synthetic cases**. These do **not** establish LLM agent precision. The local demo uses simulated accounts and a simplified conversion window. An observed budget update is not evidence of causal performance lift.

### Continue exploring
- [Static website-ready case study](../dist/adpilot/index.html) — created in the GitHub portfolio repository; not yet published to the separately hosted live portfolio.
- [Technical GitHub home](README.md) — full runnable app source synchronization still pending.
- [Learning journal](https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit)
- [Evaluation and next changes](EVALUATION_AND_LEARNING.md)

**Demo status:** Local Streamlit working; no public URL yet.
