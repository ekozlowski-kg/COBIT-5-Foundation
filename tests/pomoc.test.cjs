const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};vm.createContext(ctx);
for(const name of ['pomoc-schemat.js','nauka-sylabus.js','sp1.local.js'])vm.runInContext(fs.readFileSync('notatki/'+name,'utf8'),ctx);
const html=fs.readFileSync('notatki/schemat-cobit5.html','utf8');
vm.runInContext(html.match(/<!--PYTANIA-START--><script>([\s\S]*?)<\/script><!--PYTANIA-END-->/)[1],ctx);
const H=ctx.window.COBIT_HELP,qs=Object.values(ctx.window.PYTANIA.Q).concat(Object.values(ctx.window.PYTANIA_SP1.Q));
assert.equal(qs.length,544,'bank obejmuje także lokalne pytania');
for(const q of qs){
 const card=H.card(q);
 assert(card.includes('Poprawna odpowiedź:'),q.id);
 assert(card.includes('Dlaczego pozostałe odpowiedzi nie pasują?'),q.id);
 assert(card.includes('Sprawdź w źródłach:'),q.id);
 assert(card.includes('PRZYKŁAD'),q.id);
 for(const o of q.o)assert(card.includes(H.explain(o.w)),q.id+': wszystkie cztery uzasadnienia');
}
for(const key of ['RACI','CEO','CIO','CFO','COO','CRO','CISO','PMO','VMO','PRM','PAM','PBRM','EDM','APO','BAI','DSS','MEA']){
 const result=H.explain(key);
 assert(result.includes(H.terms[key][0]),key+': EN');assert(result.includes(H.terms[key][1]),key+': PL');
 assert(H.glossary(key).includes(H.terms[key][2]),key+': znaczenie');
}
assert(H.explain('SMART').includes('Actionable'));
assert(H.explain('MEA01').includes('Monitoruj, Oszacuj i Oceń'));
assert(!H.explain('DOKĄD').includes('<abbr'),'nie rozwijamy fragmentów polskich słów');
assert(H.references('FW-PL, s. 42–43').includes('data-p="42"'));
assert(H.references('FW-PL, s. 42–43').includes('data-p="43"'));
for(const ref of ['SP1, s. 3','Enabling Processes s. 25','FW-EN s. 37','Altkom 2022, s. 75','s. 13'])assert(!H.references(ref).includes('data-p='),ref+': nie jest stroną FW-PL');
const mixed=H.references('FW-PL s. 42; SP1 s. 3; Enabling Processes s. 25','FW-PL');
assert.equal((mixed.match(/data-p=/g)||[]).length,1,'nie otwieramy innej książki pod numerem strony FW-PL');
assert(!H.references('FW-PL s. 149').includes('data-p='),'nie obcinamy numeru 149 do14');
console.log('OK: 544 omówienia z przykładami, pełne nazwy skrótów oraz rozdzielenie dokumentów i zakresów stron.');
