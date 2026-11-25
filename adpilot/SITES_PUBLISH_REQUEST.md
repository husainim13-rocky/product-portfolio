# Publish AdPilot on the existing ChatGPT Site

**Target live Site:** https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/

**Goal:** Add AdPilot as the **second Personal project** alongside Intent-Aware Product Discovery. Keep the entire existing V2B project, evaluation, professional case studies, site style and navigation intact.

## Ready to copy into ChatGPT Sites (edit the existing Site, do NOT create a replacement)

> Update my **existing published product portfolio website** at https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/ (preserve its URL and existing content).
>
> Add **AdPilot — Agentic Campaign Optimization Copilot** as a second prominent card under **Personal projects**, beside the current Intent-Aware Product Discovery V2B project. Maintain the existing typography, color system, navigation, and mobile responsiveness.
>
> The new card needs to be readable in under 30 seconds without visitors opening GitHub: (1) problem — reduce time spent investigating campaigns and implementing safe optimization actions, without overwhelming advertisers; (2) **P0 — working locally** — Gemini 3.5 Flash-Lite integrated through the OpenAI Agents SDK, real multi-tool campaign investigation, synthetic Streamlit app, human-approved $50/day budget update preserving an $800/day combined budget; (3) **P0.5 — evaluation in progress** — identified incomplete six-campaign screening, uneven donor/receiver maturity checks, and uncertainty around marginal CPA; improvements and quantified before/after outcomes **not yet measured**; (4) limitations — synthetic data, no live advertiser integration, no publicly hosted demo or proven CPA lift.
>
> Add a **Read AdPilot case study** link to a new `/adpilot/` page, a **Technical GitHub** link to https://github.com/husainim13-rocky/product-portfolio/tree/main/adpilot, and a **Learning journal** link to https://docs.google.com/document/d/1W4_U8zwMQPhsUIROn6oBYJicdHSvHUGGERdra-d9Jg8/edit.
>
> Use the already-prepared case-study page as a content reference: https://github.com/husainim13-rocky/product-portfolio/blob/main/dist/adpilot/index.html. Adapt it into this Site's design; do **not** replace existing portfolio sections with the older GitHub static homepage.
>
> For future project updates, try reading the **public-safe status feed** `https://raw.githubusercontent.com/husainim13-rocky/product-portfolio/main/adpilot/status.json` at runtime from the frontend, using `fetch`, assigning values via `textContent`, and preserving the current verified card text as a fallback if fetching fails. Do not fetch secrets or use private APIs. If the Sites environment restricts cross-origin fetch, keep the static summary and flag that the sync is not automatic; don't claim successful auto-sync without testing it.
>
> Label all campaign data synthetic, preserve the site owner and URL, add sensible metadata/title for the AdPilot case study, verify mobile layout and navigation, **save a new version, then publish the update to the existing public Site**. Confirm the published homepage displays both personal projects and that `/adpilot/` is accessible by opening the actual live URLs.

## What has already been done on GitHub

- `dist/index.html`: second AdPilot card, default summary with live-status data hook
- `dist/adpilot/index.html`: standalone case-study HTML
- `adpilot/status.json`: GitHub-authored public status feed; intentionally excludes keys and any live advertiser data
- `adpilot/README.md`: technical one-pager (full runnable app not yet synchronized)
- `adpilot/EVALUATION_AND_LEARNING.md`: findings, evaluation plan, and limitations

## Important publishing distinction

Changes to the GitHub repository **do not publish the existing ChatGPT Site** automatically. The first update to the live Site must happen via its Site editor. If the public status-feed fetch works in the deployed Site, subsequent concise progress fields can be updated by editing `adpilot/status.json` on GitHub without republishing that text every time. Full layout or case-study changes still require a Site edit/publish.

## November 24, 2026 — Next existing-Site content refresh (not yet published)

The GitHub [case study](../dist/adpilot/index.html), [AdPilot README](README.md), [evaluation record](EVALUATION_AND_LEARNING.md) and public [status feed](status.json) now explain why the project intentionally began with a six-campaign P0, when P0.5 exposed model/tool orchestration cost and completeness constraints, and how these informed a **proposed** P1 design: paginated account retrieval → deterministic eligibility screening → bounded evidence shortlist → Gemini reasoning and optional deeper lookup. Communicate the product trade-off: filter out noise and reduce inference overhead without accidentally screening out valuable opportunities. Keep P0 verified sandbox behavior separate from P0.5 process-check evidence and the not-yet-built P1 roadmap. No proof of model-call savings, expert-rated improvement or CPA lift yet.

**Work-mode publication task:** update the existing ChatGPT Sites AdPilot case-study page and homepage card (preserve live URL and all other project sections) using these current GitHub references. Verify the published page and whether the dynamic public status feed syncs. **Editing GitHub content alone does not establish that the live ChatGPT Site has changed.**

## Existing ChatGPT Site refresh — reviewed November 24, 2026

**Destination pages already exist and must be edited in place, not replaced:**
- Existing published case study: https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/adpilot/
- Existing dedicated evaluation page, linked from the live case study: https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/adpilot/evaluation/
- Existing portfolio homepage: https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/

**Current live inspection:** Browser read confirmed the /adpilot/ page still starts with “Independent AI product build · November 22, 2026” and has P0 working locally, P0.5 baseline/targeted rerun, plus an evaluation link, but no P1 scale-design section. Its “Evidence from the first runs” section discusses the original four-case baseline. The actual /adpilot/evaluation/ subpage contents were not independently fetched in this chat; Work should open and preserve them before editing.

### Copy-ready instruction for ChatGPT Work / Sites editor

Update my **existing** published ChatGPT Site at https://husain-motiwala-product-portfolio.husain-im13.chatgpt.site/ in place. Preserve the current URL, styling, existing homepage sections, the Intent-Aware Product Discovery case study, the AdPilot page at /adpilot/, and its existing evaluation page at /adpilot/evaluation/. Do **not** create a replacement Site.

First inspect all three existing live pages, then use the up-to-date public GitHub source files:
- https://github.com/husainim13-rocky/product-portfolio/blob/main/dist/adpilot/index.html
- https://github.com/husainim13-rocky/product-portfolio/blob/main/dist/index.html
- https://github.com/husainim13-rocky/product-portfolio/blob/main/adpilot/EVALUATION_AND_LEARNING.md
- https://github.com/husainim13-rocky/product-portfolio/blob/main/adpilot/README.md
- https://raw.githubusercontent.com/husainim13-rocky/product-portfolio/main/adpilot/status.json

**On /adpilot/:** Add a clear P0 → P0.5 → P1 architecture/decision narrative matching the GitHub case study. P0 deliberately used six synthetic campaigns and per-campaign tools to validate true Gemini/OpenAI Agents SDK investigation, a bounded preview and a human-approved sandbox change—not scaling. P0.5 identified missing candidate/evidence completeness plus the overhead of many agent/model/tool rounds (17 recorded tool calls in one full investigation, a later 15-turn limit, and an API 429 at 15 requests/minute). Explain that model API requests and tool calls are not one-to-one. A workflow safeguard was installed and tests passed locally; a subsequent live trace checked both campaigns' reporting maturity. A saved trace regraded at 10/10 **automated process** checks under the revised rubric, but the actual side-by-side US/EU justification remained insufficient/unverified. A six-campaign account-snapshot optimization was prepared and passed offline tests, but actual model-call/latency savings and better reasoning are not yet measured.

**P1 should be explicitly labeled “proposed, not built”:** backend bulk/paginated retrieval; deterministic eligibility checks and evidence screening; compact shortlist for Gemini with option to request deeper/alternative data; independent safety rules and human approval. Explain the trade-off that more aggressive filtering can miss valuable opportunities; proposed evaluation will track candidate recall, supported top-three decisions, abstention, critical safety, calls/tokens, latency and cost across varied account sizes and held-out cases.

**On /adpilot/evaluation/:** Preserve existing cases, metrics, links and distinctions; add a concise section titled “P0.5 evidence and P1 evaluation gates” linking to the detailed GitHub evaluation record. Explain original 9/10 process-check donor-read gap, remediation and later trace showing both reporting-status reads, versioned v2 regrade at 10/10 process checks of a saved trace (not a new LLM quality gain), insufficient comparative reasoning, 15-turn and 429 constraints, and P1 screen-recall / cost-evaluation plan. Avoid converting rubric scores into expert-rated recommendation precision or actual advertiser impact.

**On homepage:** Update only the AdPilot personal-project card/short summary to mention P0 proved a local synthetic workflow, P0.5 measured evidence and orchestration limitations, and P1 proposes screened shortlist architecture. Keep all other sections, current photographs/links and content unchanged.

Update timestamps appropriately (November 24, 2026 source snapshot); keep external GitHub and journal links. Preserve the fact that the local Streamlit prototype is not a public live demo. Do not claim real ad-platform integration, proven incremental conversions/CPA lift, P1 implementation, or verified live snapshot performance. Save and **publish to the existing URL**. Open and verify all three published URLs and report exactly what changed, any blockers, and whether any status.json live sync actually works.
