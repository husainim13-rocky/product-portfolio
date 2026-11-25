// Day 1: provisional field-level intent calibration (not a validated benchmark).
// Run from repository root:
// node ai-pm-accelerator/evals/run-intent-calibration.cjs
const fs=require('node:fs');
const path=require('node:path');
const engine=require('../../archive/v2b/engine.js');
const fixture=JSON.parse(fs.readFileSync(path.join(__dirname,'intent-cases-v0.json'),'utf8'));
const cases=fixture.cases.filter(x=>x.phase==='calibration');
const fieldEq=(a,b)=>a===b;
let fieldCount=0,fieldMatched=0,allCasesCorrect=0;
const results=cases.map(x=>{
  const actual=engine.parse(x.query);
  const compared=Object.entries(x.expect).map(([key,expected])=>{
    const observed=actual[key];const match=fieldEq(observed,expected);
    fieldCount++;if(match)fieldMatched++;
    return {field:key,expected,observed,match};
  });
  const misses=compared.filter(c=>!c.match);
  if(!misses.length)allCasesCorrect++;
  const result=engine.discover(x.query);
  return {id:x.id,theme:x.theme,all_annotated_fields_match:misses.length===0,
    misses,ranked:(result.ranked||[]).map(v=>({name:v.product.n,price:v.product.p}))};
});
console.log(JSON.stringify({provenance:fixture.provenance,
  provisional_cases:cases.length,
  cases_all_annotated_fields_correct:allCasesCorrect,
  matched_fields:fieldMatched,total_compared_fields:fieldCount,
  note:'Counts cover only C01-C10 and manually provisionally annotated fields. Not an independently labeled held-out assessment.',
  results},null,2));
