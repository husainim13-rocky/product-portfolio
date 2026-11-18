
const products=[
 {n:'ClearCall One',p:129,wireless:true,multi:true,mic:5,anc:4,comfort:5,battery:32,weight:245,portable:3},
 {n:'StudioWire 100',p:69,wireless:false,multi:false,mic:4,anc:0,comfort:4,battery:0,weight:210,portable:2},
 {n:'Commute Pro',p:219,wireless:true,multi:true,mic:4,anc:5,comfort:4,battery:38,weight:260,portable:3},
 {n:'FeatherTalk',p:149,wireless:true,multi:true,mic:5,anc:3,comfort:4,battery:28,weight:165,portable:5},
 {n:'OfficeLink Max',p:179,wireless:true,multi:true,mic:5,anc:4,comfort:5,battery:36,weight:235,portable:3},
 {n:'CallDesk Wired',p:39,wireless:false,multi:false,mic:4,anc:0,comfort:3,battery:0,weight:135,portable:5},
 {n:'QuietWork SE',p:99,wireless:true,multi:false,mic:4,anc:4,comfort:4,battery:26,weight:270,portable:2},
 {n:'SwitchPair 120',p:119,wireless:true,multi:true,mic:4,anc:2,comfort:3,battery:24,weight:175,portable:5},
 {n:'BudgetQuiet 55',p:55,wireless:true,multi:false,mic:2,anc:2,comfort:3,battery:18,weight:290,portable:2},
 {n:'TravelLite Buds',p:139,wireless:true,multi:true,mic:3,anc:4,comfort:3,battery:27,weight:48,portable:5},
 {n:'Focus 300',p:299,wireless:true,multi:true,mic:5,anc:5,comfort:5,battery:42,weight:250,portable:3},
 {n:'MoveBass Mini',p:89,wireless:true,multi:false,mic:2,anc:2,comfort:3,battery:16,weight:42,portable:5},
 {n:'CloudComfort',p:159,wireless:true,multi:true,mic:4,anc:3,comfort:5,battery:30,weight:225,portable:3},
 {n:'Transit Wired ANC',p:119,wireless:false,multi:false,mic:3,anc:3,comfort:4,battery:0,weight:235,portable:3},
 {n:'PremiumCall 250',p:249,wireless:true,multi:true,mic:5,anc:4,comfort:5,battery:35,weight:230,portable:3},
 {n:'LongFlight 199',p:199,wireless:true,multi:true,mic:3,anc:5,comfort:4,battery:45,weight:275,portable:3},
 {n:'OpenOffice Clip',p:79,wireless:false,multi:false,mic:5,anc:0,comfort:3,battery:0,weight:120,portable:5},
 {n:'SmallCase ANC',p:169,wireless:true,multi:true,mic:3,anc:4,comfort:3,battery:24,weight:52,portable:5},
 {n:'ErgoOn Air',p:109,wireless:true,multi:true,mic:4,anc:2,comfort:4,battery:30,weight:150,portable:5},
 {n:'InCall Buds',p:85,wireless:true,multi:true,mic:4,anc:2,comfort:3,battery:20,weight:45,portable:5},
 {n:'QuietComms',p:145,wireless:true,multi:true,mic:5,anc:4,comfort:4,battery:31,weight:240,portable:3},
 {n:'DeskPro ANC Wired',p:129,wireless:false,multi:false,mic:5,anc:4,comfort:4,battery:0,weight:230,portable:2},
 {n:'FlexOffice Duo',p:139,wireless:true,multi:true,mic:5,anc:3,comfort:4,battery:27,weight:155,portable:5},
 {n:'LightTalk',p:59,wireless:false,multi:false,mic:3,anc:0,comfort:3,battery:0,weight:125,portable:5},
 {n:'ANC Call Buds',p:119,wireless:true,multi:true,mic:4,anc:4,comfort:3,battery:22,weight:47,portable:5},
 {n:'ComfortStation',p:159,wireless:true,multi:true,mic:5,anc:3,comfort:5,battery:34,weight:220,portable:3},
 {n:'OpenEar Work',p:99,wireless:true,multi:true,mic:4,anc:0,comfort:4,battery:25,weight:145,portable:5},
 {n:'LongCall',p:119,wireless:true,multi:true,mic:4,anc:3,comfort:5,battery:35,weight:230,portable:3},
 {n:'WiredClarity',p:89,wireless:false,multi:false,mic:5,anc:0,comfort:4,battery:0,weight:215,portable:2},
 {n:'QuietFlex',p:149,wireless:true,multi:true,mic:4,anc:4,comfort:4,battery:29,weight:170,portable:5},
 {n:'BudgetDesk',p:49,wireless:false,multi:false,mic:3,anc:0,comfort:3,battery:0,weight:250,portable:2},
 {n:'TravelCall Mini',p:129,wireless:true,multi:true,mic:4,anc:3,comfort:3,battery:25,weight:50,portable:5},
 {n:'MultiWork',p:169,wireless:true,multi:true,mic:5,anc:3,comfort:4,battery:37,weight:240,portable:3},
 {n:'SoftFit On',p:99,wireless:true,multi:false,mic:4,anc:2,comfort:5,battery:23,weight:160,portable:5},
 {n:'VoiceFirst',p:139,wireless:true,multi:true,mic:5,anc:2,comfort:4,battery:26,weight:155,portable:5},
 {n:'SilencePod',p:179,wireless:true,multi:true,mic:4,anc:5,comfort:3,battery:24,weight:49,portable:5},
 {n:'EntryCall',p:29,wireless:false,multi:false,mic:3,anc:0,comfort:2,battery:0,weight:130,portable:5},
 {n:'MeetMax',p:199,wireless:true,multi:true,mic:5,anc:5,comfort:5,battery:40,weight:245,portable:3},
 {n:'AirWork',p:149,wireless:true,multi:true,mic:4,anc:3,comfort:3,battery:28,weight:46,portable:5},
 {n:'OfficeBalance',p:109,wireless:true,multi:true,mic:4,anc:3,comfort:4,battery:30,weight:250,portable:3},
 {n:'DuoDesk Wire',p:79,wireless:false,multi:false,mic:4,anc:0,comfort:4,battery:0,weight:140,portable:5},
 {n:'FocusLite',p:69,wireless:false,multi:false,mic:3,anc:2,comfort:4,battery:21,weight:165,portable:5}
];
const forms={'ClearCall One':'over-ear','StudioWire 100':'over-ear','Commute Pro':'over-ear','FeatherTalk':'on-ear','OfficeLink Max':'over-ear','CallDesk Wired':'on-ear','QuietWork SE':'over-ear','SwitchPair 120':'on-ear','BudgetQuiet 55':'over-ear','TravelLite Buds':'in-ear','Focus 300':'over-ear','MoveBass Mini':'in-ear','CloudComfort':'over-ear','Transit Wired ANC':'over-ear','PremiumCall 250':'over-ear','LongFlight 199':'over-ear','OpenOffice Clip':'on-ear','SmallCase ANC':'in-ear','ErgoOn Air':'on-ear','InCall Buds':'in-ear','QuietComms':'over-ear','DeskPro ANC Wired':'over-ear','FlexOffice Duo':'on-ear','LightTalk':'on-ear','ANC Call Buds':'in-ear','ComfortStation':'over-ear','OpenEar Work':'on-ear','LongCall':'over-ear','WiredClarity':'over-ear','QuietFlex':'on-ear','BudgetDesk':'over-ear','TravelCall Mini':'in-ear','MultiWork':'over-ear','SoftFit On':'on-ear','VoiceFirst':'on-ear','SilencePod':'in-ear','EntryCall':'on-ear','MeetMax':'over-ear','AirWork':'in-ear','OfficeBalance':'over-ear','DuoDesk Wire':'on-ear','FocusLite':'on-ear'};products.forEach(x=>x.form=forms[x.n]);

function parse(query){
 const s=query.toLowerCase().replace(/’/g,"'");
 const hard=(s.match(/(?:under|below|less than|up to|at most|maximum|max|budget(?: of| is)?|no more than)\s*\$?\s*(\d+(?:\.\d+)?)/)||[])[1];
 const flex=(s.match(/(?:around|about)\s*\$?\s*(\d+(?:\.\d+)?)/)||[])[1];
 const negAnc=/(?:don't|dont|do not|no)\s+(?:really\s+)?(?:need|want).{0,25}(?:noise cancellation|noise reduction|anc)|(?:noise cancellation|noise reduction|anc).{0,25}(?:not important|doesn't matter|does not matter)/.test(s);
 const notWired=/(?:not|no|don't want|do not want|avoid)\s+(?:a\s+)?wired/.test(s);
 const notWireless=/(?:not|no|don't want|do not want|avoid)\s+(?:a\s+)?wireless/.test(s);
 const avoidOverEar=/(?:over[- ]?ear.{0,55}(?:uncomfortable|hurt|pressure|heavy|bulky)|(?:avoid|no|don't like|do not like|don't want|do not want).{0,15}over[- ]?ear)/.test(s);
 const either=/either.{0,45}(?:noise cancellation|noise reduction|anc).{0,30}or.{0,45}(?:call quality|microphone|mic|clear calls)/.test(s);
 const qualityAnc=!negAnc&&!either&&/(?:top[- ]tier|best|excellent).{0,25}(?:noise cancellation|anc)|(?:noise cancellation|anc).{0,25}(?:top[- ]tier|best|excellent)/.test(s);
 const qualityMic=!either&&/(?:great|excellent|top[- ]tier|strong).{0,20}(?:microphone|mic|call quality)|(?:microphone|mic|call quality).{0,20}(?:great|excellent|top[- ]tier|strong)/.test(s);
 const wired=notWireless||(!notWired&&/\bwired\b|don't want to charge|do not want to charge/.test(s));
 const wireless=notWired||(!notWireless&&/\bwireless\b|bluetooth/.test(s));
 const form=avoidOverEar?null:/\bin[- ]ear\b|earbuds/.test(s)?'in-ear':/\bon[- ]ear\b/.test(s)?'on-ear':/\bover[- ]ear\b/.test(s)?'over-ear':null;
 const r={budget:hard?+hard:flex?+flex:null,budgetType:hard?'hard':flex?'flexible':null,wired,wireless,form,avoidOverEar,
 calls:/\bcall|meeting|zoom|microphone|\bmic\b/.test(s),noisy:!negAnc&&/noisy|loud|shared office|noise cancellation|noise reduction|\banc\b/.test(s),
 comfort:/comfort|long meeting|all[- ]day|long call|back[- ]to[- ]back|hours|pressure|hurt/.test(s),
 travel:/travel|\bfly\b|flight|portable|compact|commut/.test(s),multi:/laptop.*phone|phone.*laptop|two devices|switch|multipoint/.test(s),
 noMulti:/(?:don't|do not|no)\s+(?:need|want).{0,20}(?:switch|multipoint|two devices)/.test(s),
 noAnc:negAnc,eitherOrQuality:either,minAnc:qualityAnc?5:null,minMic:qualityMic?4:null,
 priority:/(?:prioriti[sz]e|priority).{0,30}(?:microphone|mic|call quality)|clearest microphone/.test(s)?'mic':/(?:prioriti[sz]e|priority).{0,30}(?:noise cancellation|anc)/.test(s)?'anc':null,
 cheap:/cheap|affordable|lowest price/.test(s),unsupported:[]};
 if(r.noMulti)r.multi=false;
 for(const [pattern,label] of [[/bass|studio|audiophile|sound quality/,'sound quality'],[/waterproof|water resist/,'water resistance'],[/gaming|game latency/,'gaming latency']])if(pattern.test(s))r.unsupported.push(label);
 r.relevant=/headphones|headset|earbuds|\bcall|meeting|zoom|microphone|\bmic\b|noise|\banc\b|comfort|wired|wireless|bluetooth|travel|flight|commut/.test(s);
 return r;
}
function violations(x,r){const v=[];
 if(!Number.isFinite(x.p)||x.p<0)v.push('price unavailable');
 if(x.availability==='out_of_stock')v.push('out of stock');
 if(r.budgetType==='hard'&&x.p>r.budget)v.push('over budget');
 if(r.wired&&x.wireless!==false)v.push('wired required');
 if(r.wireless&&x.wireless!==true)v.push('wireless required');
 if(r.form&&x.form!==r.form)v.push('form factor');
 if(r.avoidOverEar&&x.form==='over-ear')v.push('avoid over-ear');
 if(r.multi&&x.multi!==true)v.push('device switching required');
 if(r.minAnc&&!(x.anc>=r.minAnc))v.push('noise reduction');
 if(r.minMic&&!(x.mic>=r.minMic))v.push('call quality');
 if(r.eitherOrQuality&&!(x.anc>=4||x.mic>=4))v.push('neither acceptable quality path');
 return v;
}
function components(x,r){const signals=[];
 function add(name,value,weight){signals.push({name,value:Number.isFinite(value)?Math.max(0,Math.min(1,value)):0,weight});}
 if(r.calls||r.priority==='mic')add('Call clarity',x.mic/5,r.priority==='mic'?6:4);
 if(r.noisy||r.priority==='anc')add('Noise reduction',x.anc/5,r.priority==='anc'?6:3);
 if(r.comfort)add('Long-session comfort',x.comfort/5,3);
 if(r.travel)add('Portability',x.portable/5,4);
 if(r.multi)add('Device switching',x.multi?1:0,2);
 if(r.eitherOrQuality)add('Either acceptable quality path',Math.max(x.anc/5,x.mic/5),5);
 if(r.budgetType==='flexible')add('Budget proximity',x.p<=r.budget?1:Math.max(0,1-(x.p-r.budget)/Math.max(1,r.budget)),2);
 if(r.cheap)add('Affordability',1-x.p/300,3);
 if(!signals.length)add('General work-call fit',x.mic/5,1);
 const total=signals.reduce((n,s)=>n+s.weight,0);
 return signals.map(s=>({...s,points:100*s.value*s.weight/total}));
}
function discover(query,{baseline=false,choices={},catalog=products}={}){
 const r={...parse(query),...choices};
 const started=typeof performance!=='undefined'?performance.now():Date.now();
 const trace={catalog:catalog.length,retrieved:catalog.length,eligible:0,elapsed:0};
 const finish=result=>{trace.elapsed=(typeof performance!=='undefined'?performance.now():Date.now())-started;return {...result,requirements:r,trace};};
 if(!query.trim()||!r.relevant)return finish({status:'unsupported',message:'Describe a headphones need, such as calls, travel, comfort, or a budget.',ranked:[]});
 if(r.wired&&r.wireless)return finish({status:'conflict',message:'Your request requires both wired-only and wireless-only products. Choose one connection type.',ranked:[]});
 if(r.unsupported.length)return finish({status:'unsupported',message:`This catalog has no evidence for ${r.unsupported.join(', ')}. Remove that requirement to explore the supported attributes.`,ranked:[]});
 const eligible=catalog.filter(x=>violations(x,r).length===0);trace.eligible=eligible.length;
 if(!eligible.length){const counts={};for(const x of catalog)for(const reason of violations(x,r))counts[reason]=(counts[reason]||0)+1;
 return finish({status:'no-match',message:'No product meets all your firm requirements. They have been kept intact.',ranked:[],exclusions:counts});}
 const ranked=eligible.map(x=>{const parts=components(x,r);let score=parts.reduce((n,s)=>n+s.points,0);
 if(baseline)score=(r.noisy&&x.anc>0?20:0)+(r.comfort&&x.comfort>3?20:0)+(r.multi&&x.multi?20:0)+(300-x.p)/30;
 return {product:x,score,parts};}).sort((a,b)=>b.score-a.score||a.product.p-b.product.p||a.product.n.localeCompare(b.product.n)).slice(0,3);
 return finish({status:'results',ranked});
}
const IntentDiscovery={products,parse,violations,components,discover};
if(typeof module!=='undefined')module.exports=IntentDiscovery;
else window.IntentDiscovery=IntentDiscovery;