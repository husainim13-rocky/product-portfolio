// Day 1 reproducible baseline probe. Run from repository root:
// node ai-pm-accelerator/evals/day1-intent-baseline.cjs
// This reports observed parser behavior. It is NOT a passing V3 evaluation.
const engine = require('../../archive/v2b/engine.js');
const base = "I spend five hours a day on video calls and work in a noisy office. I want comfortable wireless headphones. ";
const end = " I sometimes get headaches from tight headphones.";
const scenarios = [
  {
    id: 'D1-01', label: 'Flexible budget with conditional willingness',
    query: base + "Ideally I'd stay under $200, but I could spend more for a really good microphone." + end,
    targetBudgetType: 'flexible'
  },
  {
    id: 'D1-02', label: 'Explicit approximate budget',
    query: base + "Around $200, but I could spend more for a really good microphone." + end,
    targetBudgetType: 'flexible'
  },
  {
    id: 'D1-03', label: 'Explicit hard cap',
    query: "I spend five hours a day on video calls in a noisy office. I need comfortable wireless headphones, must stay under $200, and have a really good microphone.",
    targetBudgetType: 'hard'
  }
];
for(const s of scenarios){
  const parsed=engine.parse(s.query), result=engine.discover(s.query);
  const verdict=parsed.budgetType===s.targetBudgetType?'MATCH':'MISMATCH';
  console.log(JSON.stringify({
    id:s.id,label:s.label,expected_budget_type:s.targetBudgetType,
    actual_budget_type:parsed.budgetType,budget:parsed.budget,
    wireless:parsed.wireless,calls:parsed.calls,comfort:parsed.comfort,
    noisy:parsed.noisy,min_mic:parsed.minMic,explicit_priority:parsed.priority,
    top_3:(result.ranked||[]).map(r=>({name:r.product.n,price:r.product.p})),
    verdict
  },null,2));
}
