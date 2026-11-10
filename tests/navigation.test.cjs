const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('notatki/schemat-cobit5.html', 'utf8');
const storage = new Map();
let selected = null, stateIndex = 0, effects = [], saved = null, fitted = 0, focused = 0, closed = 0;
const listeners = [], timers = [];
const ctx = { Number, JSON, localStorage: {getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
 document:{getElementById:()=>({clientWidth:641})}, RF:null,
 nodes:[], edges:[], nodeTypes:{}, NEIGH:{}, window:{addEventListener:(...x)=>listeners.push(x)},
 ReactFlow:{}, Background:{}, Controls:{}, KEY:'theme', root:{},
 getTheme:()=> 'system', showInfo(){}, focusOn:()=>focused++, clearInfo:()=>closed++, fitAll:()=>fitted++,
 setTimeout:fn=>timers.push(fn),
 h:(type,props,...children)=>({type,props,children}),
 React:{useState:v=>[stateIndex++===1?selected:typeof v==='function'?v():v,()=>{}],useEffect:(fn,deps)=>effects.push({fn,deps}),useMemo:fn=>fn()}
};
vm.createContext(ctx);
const helpers = html.slice(html.indexOf("const VIEW_KEY="), html.indexOf('function focusOn(id)'));
vm.runInContext(helpers,ctx);
const app = html.slice(html.indexOf('function App(){'),html.indexOf("createRoot(document.getElementById('app'))"));
vm.runInContext(app,ctx);
function render(sel){selected=sel;stateIndex=0;effects=[];return ctx.App().props;}
let props=render(null);
assert.equal(props.defaultViewport.zoom,0.9,'pierwsze wejście ma czytelne przybliżenie');
assert(!props.fitView,'React Flow nie dopasowuje całej mapy przy starcie');
props.onInit({});
timers.forEach(fn=>fn());
assert.equal(fitted,0,'start i opóźnione zdarzenia nie oddalają mapy');
assert.equal(listeners.length,0,'inicjalizacja nie dodaje automatycznego dopasowania na resize');
const point={x:-1250,y:78,zoom:1.2};
props.onMoveEnd(null,point);
props=render(null);
assert.deepEqual(JSON.parse(JSON.stringify(props.defaultViewport)),point,'odświeżenie odtwarza przesunięcie i zoom');
props=render('kont');effects.find(e=>e.deps?.length===1&&e.deps[0]==='kont').fn();
assert.equal(focused,1,'wybranie tematu przybliża wybrany kafelek');
props=render(null);effects.find(e=>e.deps?.length===1&&e.deps[0]===null).fn();
assert.equal(closed,1,'zamknięcie tematu zamyka panel');assert.equal(fitted,0,'zamknięcie tematu nie zmienia przybliżenia');
const key='cobit-schemat-widok-v1';
for(const invalid of ['broken','null','{"x":0,"y":0,"zoom":99}','{"x":"0","y":0,"zoom":1}']){
 storage.set(key,invalid);assert.equal(ctx.readViewport(),null,'niepoprawny zapis jest ignorowany');
}
console.log('OK: start, zapis i odtworzenie zoomu, otwarcie/zamknięcie tematu, brak automatycznego fit, błędny zapis.');
