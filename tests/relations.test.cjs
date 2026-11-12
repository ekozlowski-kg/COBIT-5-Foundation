const fs=require('node:fs'),assert=require('node:assert/strict');
let passed=0;
function check(name,fn){fn();passed++;console.log('OK '+name);}
for(const mode of ['full','exam']){
  const m=JSON.parse(fs.readFileSync('tests/.generated/model-'+mode+'.local.json','utf8'));
  const ids=new Set(m.nodes.map(n=>n.id));
  check(mode+': każda część należy do jednej połączonej mapy',()=>{
    const adj=Object.fromEntries([...ids].map(id=>[id,[]]));
    for(const e of m.edges){assert(ids.has(e.source)&&ids.has(e.target),e.id);adj[e.source].push(e.target);adj[e.target].push(e.source);}
    const visited=new Set(),pending=['potrz'];
    while(pending.length){const id=pending.pop();if(visited.has(id))continue;visited.add(id);pending.push(...adj[id]);}
    assert.equal(visited.size,ids.size,'Niepołączone: '+[...ids].filter(id=>!visited.has(id)).join(','));
  });
  check(mode+': kaskada ma cztery kroki, wartość jest osobną gałęzią',()=>{
    for(const [a,b] of [['drv','potrz'],['potrz','corg'],['corg','cit'],['cit','cakt'],['potrz','wart']])assert(m.edges.some(e=>e.source===a&&e.target===b),a+' → '+b);
    assert(!m.edges.some(e=>e.source==='wart'&&e.target==='corg'));
    assert(m.edges.some(e=>e.source==='cakt'&&e.target==='akt'));
  });
  check(mode+': skala i poziomy nie udają obowiązkowego przebiegu',()=>{
    assert(!m.edges.some(e=>/^s[NCWP]$/.test(e.source)&&/^s[NCWP]$/.test(e.target)));
    assert(!m.edges.some(e=>/^lv[0-5]$/.test(e.source)&&(/^lv[0-5]$/.test(e.target)||e.target==='obecny')));
    for(const id of ['ws1','ws2'])assert(m.edges.some(e=>e.source===id&&e.target==='ocena'));
    assert(m.edges.some(e=>e.source==='ocena'&&e.target==='obecny'));
    assert(m.INFO.ocena.trap.includes('wszystkich niższych poziomów P'));
    assert(m.INFO.ws2.from.includes('poziomami 1–5'),'Rysunek 19 ma również połączenie z poziomu 1');
  });
  check(mode+': fazy nie zawierają aktywatorów ani obszarów Ładu i Zarządzania',()=>{
    for(const f of m.nodes.filter(n=>/^f[1-7]$/.test(n.id)))for(const id of ['akt','a1','a2','a3','a4','a5','a6','a7','lad','zarz','ocena']){
      const n=m.nodes.find(n=>n.id===id);assert(!(n.position.x>=f.position.x&&n.position.x<f.position.x+f.style.width&&n.position.y>=f.position.y&&n.position.y<f.position.y+f.style.height),id+' w '+f.id);
    }
    for(let i=1;i<=7;i++)assert(m.edges.some(e=>e.source==='f'+i&&e.target==='f'+(i===7?1:i+1)));
  });
  check(mode+': każda sekcja ma kotwicę merytoryczną, każdy szczegół powrót',()=>{
    for(const [group,children] of Object.entries(m.REL_MAP.members)){
      assert(ids.has(m.REL_MAP.anchors[group]),group);
      assert(m.edges.some(e=>e.source===m.REL_MAP.anchors[group]&&e.target===group),group);
      for(const id of children){assert.equal(m.REL_MAP.owner[id],group);assert(m.REL_MAP.neighbours[id].includes(group));}
    }
    for(const e of m.edges){assert(e.data?.refs,e.id);assert(e.data?.kind,e.id);if(e.data.kind==='reference'||e.data.kind==='classification')assert(!e.markerEnd,e.id);}
  });
}
const html=fs.readFileSync('notatki/schemat-cobit5.html','utf8');
check('nowy moduł relacji jest ładowany przed modułem aplikacji',()=>{
  assert(/<script src="schemat-relacje\.js[^\"]*"><\/script>/.test(html));
  assert(html.indexOf('src="schemat-relacje.js')<html.indexOf('<script type="module">'));
});
console.log('PASS '+passed);
