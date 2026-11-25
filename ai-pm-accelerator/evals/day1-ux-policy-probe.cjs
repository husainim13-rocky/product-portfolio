// Day 1 UX-policy probe — intentionally simple simulation, not an implemented V3 policy.
// Run: node ai-pm-accelerator/evals/day1-ux-policy-probe.cjs
const assert = require('node:assert/strict');
const engine = require('../../archive/v2b/engine.js');
const query = "I spend five hours a day on video calls and work in a noisy office. I want comfortable wireless headphones. Ideally I'd stay under $200, but I could spend more for a really good microphone. I sometimes get headaches from tight headphones.";

function compare(catalog, label) {
  const r = { ...engine.parse(query), budgetType: 'flexible', priority: 'mic' };
  const eligible = catalog.filter(p => engine.violations(p, r).length === 0);
  const score = p => engine.components(p, r).reduce((s, part) => s + part.points, 0);
  const ranked = eligible.map(product => ({ product, score: score(product) }))
    .sort((a,b)=>b.score-a.score || a.product.p-b.product.p);
  const inBudget = ranked.filter(x => x.product.p <= r.budget);
  const over = ranked.filter(x => x.product.p > r.budget);
  const conventional = inBudget.slice(0,3);                 // Approach C: preferred-budget only
  const alwaysStretch = [...inBudget.slice(0,2), ...over.slice(0,1)]; // Unconditional approach A: 2+1
  // Conditional approach A': show a candidate premium only with meaningful *catalog-supported*
  // improvement in explicitly prioritized mic, without worse catalog comfort than in-budget leader.
  // These are EXPLORATORY heuristics; subjective comfort is not a guarantee.
  const leader=inBudget[0]?.product;
  const premium=over.find(x => leader && x.product.mic > leader.mic &&
    Number.isFinite(x.product.comfort) && x.product.comfort >= leader.comfort);
  const conditional=[...inBudget.slice(0,2),...(premium?[premium]:[])];
  const compact = arr => arr.map(x=>({name:x.product.n,price:x.product.p,mic:x.product.mic,comfort:x.product.comfort}));
  const output={scenario:label,counts:{eligible:eligible.length,within:inBudget.length,over:over.length},policy_C:compact(conventional),policy_A_unconditional:compact(alwaysStretch),policy_A_conditional:compact(conditional),would_clarify_first_B:true};
  console.log(JSON.stringify(output,null,2));
  return output;
}
const actual=compare(engine.products, 'Actual archived V2B catalog');
assert.equal(actual.counts.eligible,31);
assert.equal(actual.counts.over,3);
assert.equal(actual.policy_A_conditional.some(x=>x.price>200),false);
assert.equal(actual.policy_A_unconditional.some(x=>x.price>200),true);

// A deliberately constructed test catalog with a real comparison decision.
// All products and quality scores here are synthetic, not verified electronics data.
const base={wireless:true,multi:true,form:'over-ear',battery:30,weight:240,portable:3};
const counterfactual=[
 { ...base,n:'Basic Meeting 170',p:170,mic:3,comfort:5,anc:4},
 { ...base,n:'Daily Work 190',p:190,mic:4,comfort:5,anc:4},
 { ...base,n:'Clear Voice Plus 229',p:229,mic:5,comfort:5,anc:4},
 { ...base,n:'High Cost Similar 275',p:275,mic:4,comfort:5,anc:4}
];
const engineered=compare(counterfactual,'Constructed differentiated catalog');
assert.equal(engineered.policy_A_conditional.some(x=>x.name==='Clear Voice Plus 229'),true);
assert.equal(engineered.policy_A_conditional.some(x=>x.name==='High Cost Similar 275'),false);
console.log('PASS: descriptive comparison probes, not customer-outcome validation');
