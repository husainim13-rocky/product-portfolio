# Intent-Aware Product Discovery — V2B

A buildless browser prototype inside Husain Motiwala's existing portfolio. Open `dist/demo/index.html` through a static server. The existing Site's hosting directory remains `dist`.

## Changes from V2A

- Retrieve the entire 42-item synthetic headphones catalog, apply firm constraints, then rank eligible items. Retrieval coverage is exhaustive at this scale.
- Weight only requested attributes. Microphone and noise-reduction priorities receive higher weights; comfort, portability, switching, budget proximity, and price are separate signals. The normalized score is attribute fit, not probability of purchase.
- Apply the same firm constraints to the keyword baseline. Break score ties by lower price, then product name.
- Handle wired/wireless negation, zero-dollar budgets, contradictory requirements, either-or quality requests, and unsupported attribute requests explicitly.
- Preserve constraints in no-match states. Visitors must explicitly remove a budget or quality/switching requirement; the interface shows updated choices and offers a reset.
- Explain score contributions, candidate counts, and local interpretation/filtering/scoring time. New products have no behavioral-history penalty.
- Reject missing evidence for hard requirements and out-of-stock items when that field is supplied. The current catalog has no validated inventory or freshness feed; the prototype says so.
- Preserve the V2A demo at `/demo/v2a.html`. Historical aggregate evaluation figures remain identified as V2A, with missing original query-level records disclosed. No V2B relevance-lift or customer-impact claim is made.

## Validation

Run `node --test tests/ranking.test.cjs`. Fifteen automated tests cover constraints in both ranking modes, no-match paths, negation, conflicts, unsupported inputs, flexible budgets, explicit relaxation, missing evidence, supplied stock status, rank sensitivity, new-product parity, and deterministic score bounds.

These are behavior checks, not independently labeled relevance evaluation. Browser visual verification is not available in this execution environment.

## Product decisions and limits

Catalog attributes are prepared offline; interpretation and ranking run locally per request. There is no trained conversion predictor, history-based personalization, auction, or paid placement. Parser coverage is finite. Scores use builder-selected weights and synthetic attribute ratings; comfort ratings do not establish actual wearer comfort. No user data is sent to a server.

Before making production or relevance claims, add independent labeled queries, a real validated catalog with availability and price timestamps, robust semantic interpretation, and customer outcome instrumentation. Those are future extensions rather than implemented features.

## Recovery note (2026-11-17)

Recovered text of `engine.js` and original README from previously preserved project records. The historic 15-test suite was indexed in the user's archive but its raw contents could not be accessed in this session. Do not claim it was rerun during this recovery. This archive is isolated from the existing `dist/demo/` snapshot and does **not** automatically update the live ChatGPT-hosted portfolio.
