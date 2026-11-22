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
