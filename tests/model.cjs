const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const repo=process.cwd(), out=path.join(repo,'tests/.generated');
fs.mkdirSync(out,{recursive:true});
const html=fs.readFileSync(path.join(repo,'notatki/schemat-cobit5.html'),'utf8');
const mod=html.match(/<script type="module">([\s\S]*?)<\/script>/)[1].replace(/^import .*$/mg,'');
for (const full of [false,true]) {
 const doc={innerHTML:'',hidden:true,addEventListener(){},setAttribute(){},querySelectorAll(){return[]},querySelector(){return null}};
 const ctx={window:{},document:{...doc,documentElement:doc,getElementById(){return doc},cookie:''},React:{createElement(){}},Position:{},MarkerType:{ArrowClosed:'arrow'},localStorage:{getItem(k){return k==='cobit-schemat-szczegoly'?(full?'full':'compact'):null}}};vm.createContext(ctx);
 for (const file of ['fw-pl.local.js','sp1.local.js','ilustracje-kafelki.local.js','braki-kafelki.local.js','schemat-opisy.js'])vm.runInContext(fs.readFileSync(path.join(repo,'notatki',file),'utf8'),ctx);
 vm.runInContext(html.match(/<!--PYTANIA-START--><script>([\s\S]*?)<\/script><!--PYTANIA-END-->/)[1],ctx);
 vm.runInContext(fs.readFileSync(path.join(repo,'app/podrecznik/ilustracje/ilu.js'),'utf8'),ctx);
 let code=mod.slice(0,mod.indexOf('function showInfo(id)'));
 code+=mod.slice(mod.indexOf('const pv=document.getElementById'),mod.indexOf('let RF=null'));
 code+='\nwindow.RESULT={nodes,edges,INFO,GOALS_E,GOALS_I,EDMP,DOM,SKALA,LV,FAZY3,RINGS,EX,EX_ORDER,FOCUS_ORDER,FIGS,TLO,TLOM,ILRAW,BKRAW,FOLDX,FOLDT,FIG2INFO,ILINFO,BKINFO,hidden:EX_HIDDEN,pages:Object.fromEntries(Object.keys(INFO).map(id=>[id,pagesOf(id)]))};';
 vm.runInContext(code,ctx);const r=ctx.window.RESULT;fs.writeFileSync(path.join(out,full?'model-full.local.json':'model-exam.local.json'),JSON.stringify(r));
 console.log(full?'FULL':'EXAM', 'nodes',r.nodes.length,'info',Object.keys(r.INFO).length,'hidden',r.hidden,'withoutInfo',r.nodes.filter(n=>n.type==='card'&&!r.INFO[n.id]).map(n=>n.id));
}
