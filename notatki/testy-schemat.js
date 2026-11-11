/* Sprawdziany, ciąg wszystkich pytań i postęp wbudowane w schemat-cobit5.html. Bank: 400 pytań, bez generowania dodatkowych wariantów. */
window.SCHEMAT_EXAM = (function () {
  'use strict';
  const KEY='cobit-schemat-egzaminy75', SEEN='cobit-schemat-widziane', LEARN='cobit-schemat-nauka75';
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||'null')||fallback;}catch(_){return fallback;}};
  const RUN='cobit-schemat-ciag400';
  let state=read(KEY,{exams:[],active:null}), seen=read(SEEN,{}), learning=read(LEARN,{}), run=read(RUN,null), runOn=false, api, panel, timer;
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
  const shuffle=items=>{const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state));localStorage.setItem(SEEN,JSON.stringify(seen));localStorage.setItem(LEARN,JSON.stringify(learning));localStorage.setItem(RUN,JSON.stringify(run));}catch(_){if(panel)panel.querySelector('[data-save-error]')?.removeAttribute('hidden');}};
  const all=()=>[...Object.values((window.PYTANIA||{}).Q||{}).map(q=>({...q,u:q.id})),...Object.values((window.PYTANIA_SP1||{}).Q||{}).map(q=>({...q,u:'sp1:'+q.id}))];
  const lessons=()=>((window.NAUKA_SYLABUS||{}).lekcje||[]);
  const codes=q=>String(q.s||'').split(',').filter(Boolean);
  function status(){
    const qs=all(), results=api.getResults(), byCode=Object.fromEntries(lessons().map(l=>[l.kod,new Set()]));
    qs.forEach(q=>{if(results[q.u]&&results[q.u].ok)codes(q).forEach(c=>byCode[c]?.add(q.u));});
    const mastered=lessons().filter(l=>byCode[l.kod].size>=2).length, learned=lessons().filter(l=>learning[l.kod]).length;
    const ex=state.exams.filter(e=>e.fresh&&e.ids?.length===50).slice(0,2);
    const independent=ex.length===2&&!ex[0].ids.some(id=>ex[1].ids.includes(id));
    const passed=independent&&ex.every(e=>e.score>=38);
    const area={PR:[0,0],EN:[0,0],IM:[0,0],PC:[0,0]};ex.forEach(e=>Object.entries(e.area||{}).forEach(([a,r])=>{if(area[a]){area[a][0]+=r[0];area[a][1]+=r[1];}}));
    const balanced=Object.values(area).every(r=>r[1]>0&&r[0]/r[1]>=.7);
    return {mastered,learned,ex,independent,passed,area,balanced,ready:learned===64&&mastered===64&&passed&&balanced};
  }
  function ensurePanel(){
    if(panel)return;
    const style=document.createElement('style');style.textContent=`
    #schemat-exam75[hidden]{display:none}#schemat-exam75{position:fixed;inset:0;z-index:1000;background:color-mix(in srgb,var(--bg) 94%,transparent);overflow:auto;padding:32px max(16px,calc((100vw - 1040px)/2));color:var(--text,var(--ink,#292a27));font-size:16px;line-height:1.6}#schemat-exam75 .exam-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;margin:16px 0}#schemat-exam75 h2{font-size:28px;line-height:1.25}#schemat-exam75 h3{font-size:20px}#schemat-exam75 button{font:inherit;border:1px solid var(--border);background:var(--surface);color:inherit;border-radius:9px;padding:9px 14px;cursor:pointer}#schemat-exam75 button:focus-visible{outline:3px solid var(--acc-s);outline-offset:3px}#schemat-exam75 .exam-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}#schemat-exam75 .exam-option{display:block;text-align:left;width:100%;padding:14px 18px;margin:10px 0}#schemat-exam75 .exam-option.selected{border:2px solid var(--acc-s)}#schemat-exam75 .exam-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}#schemat-exam75 .exam-nav{display:flex;gap:6px;flex-wrap:wrap;margin:20px 0}#schemat-exam75 .exam-nav button{padding:5px;min-width:35px}#schemat-exam75 .exam-nav .answered{background:var(--teal-soft,#dceee8);color:#164a3a}#schemat-exam75 .exam-nav .current{border:2px solid var(--acc-s)}#schemat-exam75 .exam-nav .flag{box-shadow:inset 0 -3px #a36510}#schemat-exam75 .exam-clock{font-size:26px;font-variant-numeric:tabular-nums;font-weight:700;margin-left:auto}#schemat-exam75 .exam-good{color:var(--exam-good,#17643f)}#schemat-exam75 .exam-bad{color:var(--exam-bad,#a63731)}#schemat-exam75 summary{cursor:pointer}#schemat-exam75 .exam-why{border-left:3px solid var(--border);padding-left:14px;margin:14px 0}#schemat-exam75 .exam-why p{margin:6px 0}.nauka-cel{margin:12px 0;border:1px solid var(--border);padding:12px;border-radius:10px}.nauka-cel summary{cursor:pointer;font-weight:600}.nauka-cel h4{margin:16px 0 6px}.qwniosek,.qerrata{display:none}.qb.done .qwniosek,.qb.done .qerrata{display:block}.qerrata{padding:10px;border-left:3px solid #ba7517}.qwniosek{padding:10px;border-left:3px solid #41756a}@media(max-width:650px){#schemat-exam75 .exam-grid{grid-template-columns:1fr}#schemat-exam75{padding:14px}#schemat-exam75 .exam-card{padding:16px}}`;
    document.head.appendChild(style);panel=document.createElement('section');panel.id='schemat-exam75';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Cel 75 procent — nauka i sprawdziany');document.body.appendChild(panel);
    document.addEventListener('keydown',e=>{if(panel.hidden)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopImmediatePropagation();if(state.active){state.active.index=Math.max(0,Math.min(49,state.active.index+(e.key==='ArrowRight'?1:-1)));save();question();panel.querySelector('button')?.focus();}else if(runOn){runGo(e.key==='ArrowRight'?1:-1);}return;}if(runOn&&!state.active&&/^[1-4a-dA-D]$/.test(e.key)){const b=panel.querySelectorAll('[data-run-answer]')[(/[1-4]/.test(e.key)?+e.key:e.key.toLowerCase().charCodeAt(0)-96)-1];if(b&&!b.disabled){e.preventDefault();b.click();}return;}if(e.key==='Enter'&&runOn&&panel.querySelector('[data-run-next]')&&document.activeElement?.tagName!=='BUTTON'){e.preventDefault();panel.querySelector('[data-run-next]').click();return;}if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();if(runOn){runOn=false;lobby();}else if(!state.active)close();else askFinish();}if(e.key==='Tab'){const focus=[...panel.querySelectorAll('button,input,a,summary')].filter(el=>!el.disabled&&el.getClientRects().length);if(!focus.length)return;const i=focus.indexOf(document.activeElement);if(e.shiftKey&&(i===0||i<0)){e.preventDefault();focus[focus.length-1].focus();}else if(!e.shiftKey&&(i===focus.length-1||i<0)){e.preventDefault();focus[0].focus();}}},true);
  }
  function lock(on){const wrap=document.getElementById('wrap'),bar=document.querySelector('.bar');if(wrap)wrap.inert=on;if(bar)bar.inert=on;}
  function open(){ensurePanel();panel.hidden=false;lock(true);if(state.active)question();else lobby();panel.querySelector('button')?.focus();}
  function close(){if(state.active)return askFinish();clearInterval(timer);panel.hidden=true;lock(false);api.refresh?.();document.getElementById('exam75')?.focus();}
  const errorHTML='<p data-save-error hidden>Nie udało się zapisać postępu w przeglądarce. Zapisz kopię wyników przed zamknięciem pliku.</p>';
  function lobby(){
    clearInterval(timer);runOn=false;const r=status(),qs=all();
    panel.innerHTML='<div class="exam-row"><h2>Cel: minimum 38/50 (76%)</h2><button data-close style="margin-left:auto">Wróć do schematu</button></div><p>Bank schematu: <b>'+qs.length+' pytań</b>. 300 służy do nauki z wyjaśnieniami, a 100 odłożono do dwóch rozłącznych pomiarów A i B. Minimalny wynik 75% wymaga 38 poprawnych odpowiedzi; 37/50 to 74%.</p>'+errorHTML+runCard()+
      '<div class="exam-card"><h3>'+ (r.ready?'Warunki gotowości spełnione':'Plan przygotowania')+'</h3><ol><li>Przeczytaj objaśnienia przy kafelkach i wyjaśnij je własnymi słowami: <b>'+r.learned+'/64 celów</b>.</li><li>Rozwiąż poprawnie co najmniej dwa różne pytania w każdym celu: <b>'+r.mastered+'/64</b>.</li><li>Dwa niezależne pomiary, każdy co najmniej 38/50: <b>'+(r.passed?'spełnione':r.ex.map(e=>e.label+': '+e.score+'/50').join(' · ')||'jeszcze bez pomiaru')+'</b>.</li><li>Łącznie co najmniej 70% w każdym obszarze obu pomiarów: '+Object.entries(r.area).map(([a,x])=>a+' '+x[0]+'/'+x[1]).join(' · ')+'.</li></ol><p class="note2">To kryteria treningowe, nie gwarancja wyniku. Ustawienia PR 15 / EN 21 / IM 7 / PC 7 odpowiadają dostarczonym przykładom, ale nie gwarantują rozkładu kolejnego egzaminu.</p></div>'+
      '<div class="exam-grid">'+['A','B'].map(name=>{const ids=window.PYTANIA.plan.sprawdziany[name];const old=ids.some(id=>seen[id]||api.getResults()[id]);return '<div class="exam-card"><h3>Sprawdzian '+name+' · 50 pytań / 40 minut</h3><p>'+(old?'Ten zestaw był już otwierany. Powtórka jest treningiem; nie stanowi nowego pomiaru.':'Zestaw nieoglądany wcześniej w tym schemacie. Otwarcie rozpoczyna pomiar i zegar.')+'</p><button data-start="'+name+'">'+(old?'Powtórz treningowo':'Rozpocznij pomiar')+' '+name+'</button></div>';}).join('')+'</div>'+
      '<p>Podczas pomiaru nie korzystaj z materiałów. Odpowiedz na wszystkie pytania, a trudne oznacz do powrotu. Wyjaśnienia zobaczysz po zakończeniu. Zegar działa również po odświeżeniu pliku.</p><h3>Wyniki</h3>'+state.exams.map((e,i)=>'<p><button data-result="'+i+'">'+esc(e.label)+' · '+e.score+'/50 · '+(e.fresh?'pierwszy pomiar':'trening')+' · '+new Date(e.finished).toLocaleString('pl-PL')+'</button></p>').join('')+'<button data-backup>Zapisz kopię wyników</button>';
    panel.querySelector('[data-close]').onclick=close;
    panel.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>start(b.dataset.start));
    panel.querySelectorAll('[data-result]').forEach(b=>b.onclick=()=>report(state.exams[+b.dataset.result]));
    panel.querySelector('[data-backup]').onclick=backup;bindRunCard();
  }
  function start(label){
    const ids=window.PYTANIA.plan.sprawdziany[label];if(!ids||ids.length!==50||state.active)return;
    const now=Date.now();state.active={label,ids:shuffle(ids),orders:Object.fromEntries(ids.map(id=>[id,shuffle([0,1,2,3])])),answers:{},flags:{},index:0,started:now,deadline:now+2400000,fresh:ids.every(id=>!seen[id]&&!api.getResults()[id])};
    ids.forEach(id=>seen[id]=now);save();question();
  }
  function question(){
    clearInterval(timer);const e=state.active;if(!e)return lobby();if(Date.now()>=e.deadline)return finish();
    const q=window.PYTANIA.Q[e.ids[e.index]],selected=e.answers[q.id];
    panel.innerHTML='<div class="exam-row"><h2>Sprawdzian '+e.label+' · '+(e.index+1)+'/50</h2><span class="exam-clock"></span></div><p>Odpowiedziano: '+Object.keys(e.answers).length+'/50 · '+(e.fresh?'pierwszy pomiar':'powtórka treningowa')+'</p>'+errorHTML+'<div class="exam-card"><h3>'+text(q.t)+'</h3>'+(q.scen?'<p>'+text(q.scen)+'</p>':'')+e.orders[q.id].map((j,i)=>'<button class="exam-option'+(selected===j?' selected':'')+'" data-answer="'+j+'" aria-pressed="'+(selected===j)+'">'+String.fromCharCode(65+i)+'. '+text(q.o[j].t)+'</button>').join('')+'</div><div class="exam-row"><button data-prev '+(e.index===0?'disabled':'')+'>← Poprzednie</button><button data-flag>'+(e.flags[q.id]?'★ Oznaczone':'☆ Oznacz do powrotu')+'</button><button data-next '+(e.index===49?'disabled':'')+'>Następne →</button></div><div class="exam-nav">'+e.ids.map((id,i)=>'<button data-num="'+i+'" aria-label="Pytanie '+(i+1)+(e.answers[id]!==undefined?', odpowiedziano':'')+(e.flags[id]?', oznaczone':'')+'" class="'+(i===e.index?'current ':'')+(e.answers[id]!==undefined?'answered ':'')+(e.flags[id]?'flag':'')+'">'+(i+1)+'</button>').join('')+'</div><button data-finish>Zakończ i zobacz wynik</button><div data-confirm></div>';
    panel.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(Date.now()>=e.deadline)return finish();e.answers[q.id]=+b.dataset.answer;save();question();});
    panel.querySelector('[data-prev]').onclick=()=>{e.index--;save();question();};panel.querySelector('[data-next]').onclick=()=>{e.index++;save();question();};panel.querySelector('[data-flag]').onclick=()=>{e.flags[q.id]=!e.flags[q.id];save();question();};panel.querySelectorAll('[data-num]').forEach(b=>b.onclick=()=>{e.index=+b.dataset.num;save();question();});panel.querySelector('[data-finish]').onclick=askFinish;
    const tick=()=>{const sec=Math.max(0,Math.ceil((e.deadline-Date.now())/1000));panel.querySelector('.exam-clock').textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0');if(sec===0)finish();};tick();if(state.active)timer=setInterval(tick,1000);
  }
  function askFinish(){const e=state.active;if(!e)return close();const target=panel.querySelector('[data-confirm]');if(!target)return;target.innerHTML='<div class="exam-card"><p>Pozostało '+(50-Object.keys(e.answers).length)+' pytań bez odpowiedzi. Zakończyć pomiar i pokazać wyjaśnienia?</p><button data-yes>Tak, zakończ</button><button data-no>Kontynuuj</button></div>';target.querySelector('[data-yes]').onclick=finish;target.querySelector('[data-no]').onclick=()=>target.innerHTML='';target.scrollIntoView({block:'nearest'});target.querySelector('button').focus();}
  function finish(){
    clearInterval(timer);const e=state.active;if(!e)return;let score=0;const area={PR:[0,0],EN:[0,0],IM:[0,0],PC:[0,0]};
    e.ids.forEach(id=>{const q=window.PYTANIA.Q[id],a=codes(q)[0].slice(0,2),i=e.answers[id],ok=!!q.o[i]?.ok;area[a][1]++;if(ok){score++;area[a][0]++;}api.record(id,i,ok);});
    const result={...e,score,area,finished:Date.now()};state.exams.unshift(result);state.active=null;save();report(result);
  }
  function report(e){
    clearInterval(timer);panel.innerHTML='<div class="exam-row"><h2>'+esc(e.label)+': '+e.score+'/50 — '+(e.score*2)+'%</h2><button data-close style="margin-left:auto">Wróć do schematu</button></div><p>'+(e.score>=38?'Cel co najmniej 75% osiągnięty w tej próbie.':'Do celu co najmniej 75% potrzeba minimum 38/50.')+' '+(e.fresh?'Pierwszy pomiar na niewidzianym wcześniej zestawie.':'Wynik treningowy — powtórka znanego zestawu.')+'</p><p>'+Object.entries(e.area).map(([a,r])=>a+' '+r[0]+'/'+r[1]).join(' · ')+'</p><h3>Pełne omówienie wszystkich 50 pytań</h3>'+e.ids.map((id,i)=>{const q=window.PYTANIA.Q[id],correct=!!q.o[e.answers[id]]?.ok;return '<details class="exam-card"><summary class="'+(correct?'exam-good':'exam-bad')+'">'+(i+1)+'. '+(correct?'✓ ':'○ ')+text(q.t)+'</summary>'+(q.scen?'<p>'+text(q.scen)+'</p>':'')+e.orders[id].map((j,n)=>'<div class="exam-why"><b>'+String.fromCharCode(65+n)+'. '+text(q.o[j].t)+'</b><p>'+(q.o[j].ok?'✓ Poprawna. ':'')+(e.answers[id]===j?'Twoja odpowiedź. ':'')+text(q.o[j].w)+'</p></div>').join('')+(q.zap?'<p><b>Zapamiętaj:</b> '+text(q.zap)+'</p>':'')+'<p class="note2">Źródło: '+esc(q.z.join(' · '))+'</p><button data-learn="'+codes(q)[0]+'">Wróć do objaśnienia '+codes(q)[0]+'</button></details>';}).join('')+'<div class="exam-row"><button data-lobby>Plan i gotowość</button><button data-backup>Zapisz kopię wyników</button></div>';
    panel.querySelector('[data-close]').onclick=close;panel.querySelector('[data-lobby]').onclick=lobby;panel.querySelector('[data-backup]').onclick=backup;panel.querySelectorAll('[data-learn]').forEach(b=>b.onclick=()=>{close();api.jump(b.dataset.learn);});panel.scrollTop=0;
  }

  /* ---------- Ciągiem: wszystkie pytania banku jedno po drugim, z wyjaśnieniem od razu ---------- */
  const origin=q=>/^altkom/.test(q.id)?'Altkom':/^sp1/.test(q.id)?'Sample Paper 1':'autorskie (FW-PL)';
  const byU=()=>Object.fromEntries(all().map(q=>[q.u,q]));
  const codeKey=q=>codes(q)[0]||'ZZ';
  function runNew(kind){
    const qs=all(),res=api.getResults();let list;
    if(kind==='bledne')list=qs.filter(q=>res[q.u]&&!res[q.u].ok);
    else if(kind==='nowe')list=qs.filter(q=>!res[q.u]);
    else list=qs.slice();
    if(kind==='losowo')list=shuffle(list);else list.sort((a,b)=>codeKey(a).localeCompare(codeKey(b),'pl',{numeric:true})||a.u.localeCompare(b.u,'pl',{numeric:true}));
    if(!list.length)return;
    run={kind,ids:list.map(q=>q.u),orders:Object.fromEntries(list.map(q=>[q.u,shuffle(q.o.map((_,i)=>i))])),answers:{},index:0,started:Date.now()};save();runOn=true;runQuestion();
  }
  const runScore=()=>{if(!run)return [0,0];const m=byU();let g=0,n=0;Object.entries(run.answers).forEach(([u,j])=>{const q=m[u];if(!q)return;n++;if(q.o[j]?.ok)g++;});return [g,n];};
  const KIND={kolejno:'po kolei według sylabusa',losowo:'w losowej kolejności',bledne:'tylko błędne',nowe:'tylko jeszcze nierozwiązane'};
  function runCard(){
    const qs=all(),res=api.getResults(),wrong=qs.filter(q=>res[q.u]&&!res[q.u].ok).length,fresh=qs.filter(q=>!res[q.u]).length,cnt={};qs.forEach(q=>{const o=origin(q);cnt[o]=(cnt[o]||0)+1;});
    const [g,n]=runScore(),cont=run&&run.ids?.length&&Object.keys(run.answers).length<run.ids.length;
    return '<div class="exam-card"><h3>Wszystkie '+qs.length+' pytań ciągiem</h3><p>Jedno pytanie po drugim, bez zegara. Po kliknięciu odpowiedzi od razu widzisz, która jest poprawna, i objaśnienie każdej opcji. Postęp zapisuje się w przeglądarce.</p><p class="note2">Skład banku: '+Object.entries(cnt).map(([k,v])=>k+' '+v).join(' · ')+'. Ciąg obejmuje też 100 pytań sprawdzianów A i B. Po ich rozwiązaniu tutaj sprawdzian będzie już powtórką, a nie nowym pomiarem.</p>'+
      (cont?'<p><b>Przerwany ciąg</b> ('+KIND[run.kind]+'): odpowiedziano '+n+'/'+run.ids.length+', dobrze '+g+'.</p><div class="exam-row"><button data-run-cont>▶ Kontynuuj od pytania '+(nextOpen()+1)+'</button></div>':'')+
      '<div class="exam-row" style="margin-top:10px"><button data-run="kolejno">Od początku, po kolei ('+qs.length+')</button><button data-run="losowo">Losowa kolejność ('+qs.length+')</button><button data-run="nowe"'+(fresh?'':' disabled')+'>Tylko nierozwiązane ('+fresh+')</button><button data-run="bledne"'+(wrong?'':' disabled')+'>Tylko błędne ('+wrong+')</button></div></div>';
  }
  function bindRunCard(){
    panel.querySelectorAll('[data-run]').forEach(b=>b.onclick=()=>{const cont=run&&Object.keys(run.answers).length&&Object.keys(run.answers).length<run.ids.length;if(cont&&!b.dataset.sure){b.dataset.sure='1';b.textContent='Na pewno? Przerwany ciąg zostanie zastąpiony – kliknij ponownie';return;}runNew(b.dataset.run);});
    const c=panel.querySelector('[data-run-cont]');if(c)c.onclick=()=>{run.index=nextOpen();save();runOn=true;runQuestion();};
  }
  function nextOpen(){if(!run)return 0;const N=run.ids.length;for(let k=0;k<N;k++){const i=(run.index+k)%N;if(run.answers[run.ids[i]]===undefined)return i;}return run.index;}
  function runGo(d){if(!run)return;run.index=Math.max(0,Math.min(run.ids.length-1,run.index+d));save();runQuestion();}
  function runQuestion(){
    clearInterval(timer);if(!run)return lobby();runOn=true;const m=byU(),N=run.ids.length;
    while(run.index<N&&!m[run.ids[run.index]])run.index++;
    if(run.index>=N)return runEnd();
    const u=run.ids[run.index],q=m[u],sel=run.answers[u],done=sel!==undefined,ord=run.orders[u]||q.o.map((_,i)=>i),[g,n]=runScore();
    seen[u] ||= Date.now();
    const pct=Math.round(100*Object.keys(run.answers).length/N);
    panel.innerHTML='<div class="exam-row"><h2>Pytanie '+(run.index+1)+' / '+N+'</h2><span style="margin-left:auto">Dobrze: <b>'+g+'/'+n+'</b>'+(n?' ('+Math.round(100*g/n)+'%)':'')+'</span><button data-run-lobby>Przerwij (postęp zostaje)</button></div>'+
      '<div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden" aria-hidden="true"><div style="height:100%;width:'+pct+'%;background:var(--acc-s,#41756a)"></div></div>'+
      '<p class="note2">'+esc(codes(q).join(', '))+' · pochodzenie: '+esc(origin(q))+' · '+KIND[run.kind]+'</p>'+errorHTML+
      '<div class="exam-card"><h3>'+text(q.t)+'</h3>'+(q.scen?'<p>'+text(q.scen)+'</p>':'')+
      ord.map((j,i)=>{const o=q.o[j],cls=done?(o.ok?' exam-good':(sel===j?' exam-bad':'')):'';return '<button class="exam-option'+(sel===j?' selected':'')+cls+'" data-run-answer="'+j+'"'+(done?' disabled':'')+'>'+String.fromCharCode(65+i)+'. '+text(o.t)+(done&&o.ok?' ✓':'')+(done&&sel===j&&!o.ok?' ✗':'')+'</button>'+(done?'<div class="exam-why"><p>'+(o.ok?'<b>Poprawna.</b> ':'')+(sel===j?'<i>Twoja odpowiedź.</i> ':'')+text(o.w)+'</p></div>':'');}).join('')+
      (done?((q.o[sel]?.ok?'<p class="exam-good"><b>Dobrze.</b></p>':'<p class="exam-bad"><b>Źle.</b> Poprawna odpowiedź jest oznaczona ✓.</p>')+(q.zap?'<p><b>Zapamiętaj:</b> '+text(q.zap)+'</p>':'')+(q.err?'<p class="note2"><b>Korekta:</b> '+text(q.err)+'</p>':'')+'<p class="note2">Źródło: '+esc((q.z||[]).join(' · '))+'</p>'):'<p class="note2">Kliknij odpowiedź albo naciśnij 1–4 lub A–D.</p>')+'</div>'+
      '<div class="exam-row"><button data-run-prev'+(run.index===0?' disabled':'')+'>← Poprzednie</button>'+(done?'<button data-run-next>'+(run.index===N-1?'Podsumowanie →':'Następne →')+'</button>':'<button data-run-skip>Pomiń →</button>')+(codes(q)[0]?'<button data-run-learn="'+codes(q)[0]+'" style="margin-left:auto">Objaśnienie '+codes(q)[0]+' na schemacie</button>':'')+'</div>';
    panel.querySelectorAll('[data-run-answer]').forEach(b=>b.onclick=()=>{const j=+b.dataset.runAnswer;run.answers[u]=j;api.record(u,j,!!q.o[j]?.ok);save();runQuestion();panel.querySelector('[data-run-next]')?.focus();});
    panel.querySelector('[data-run-prev]').onclick=()=>runGo(-1);
    const nx=panel.querySelector('[data-run-next]');if(nx)nx.onclick=()=>{if(run.index===N-1)return runEnd();runGo(1);};
    const sk=panel.querySelector('[data-run-skip]');if(sk)sk.onclick=()=>{if(run.index===N-1)return runEnd();runGo(1);};
    panel.querySelector('[data-run-lobby]').onclick=()=>{runOn=false;lobby();};
    const ln=panel.querySelector('[data-run-learn]');if(ln)ln.onclick=()=>{runOn=false;close();api.jump(ln.dataset.runLearn);};
    panel.scrollTop=0;
  }
  function runEnd(){
    runOn=false;const m=byU(),[g,n]=runScore(),N=run.ids.length,miss=run.ids.filter(u=>run.answers[u]===undefined).length,bad=run.ids.filter(u=>run.answers[u]!==undefined&&!m[u]?.o[run.answers[u]]?.ok);
    const area={};run.ids.forEach(u=>{const q=m[u];if(!q||run.answers[u]===undefined)return;const a=codeKey(q).slice(0,2);area[a]=area[a]||[0,0];area[a][1]++;if(q.o[run.answers[u]]?.ok)area[a][0]++;});
    panel.innerHTML='<div class="exam-row"><h2>Koniec ciągu: '+g+'/'+n+(n?' — '+Math.round(100*g/n)+'%':'')+'</h2><button data-close style="margin-left:auto">Wróć do schematu</button></div><p>'+N+' pytań w ciągu'+(miss?', pominięte: '+miss:'')+'. Obszary: '+Object.entries(area).map(([a,r])=>a+' '+r[0]+'/'+r[1]).join(' · ')+'.</p>'+
      (bad.length?'<h3>Błędne ('+bad.length+')</h3>'+bad.map(u=>{const q=m[u],ok=q.o.find(o=>o.ok);return '<details class="exam-card"><summary class="exam-bad">'+text(q.t)+'</summary><p><b>Poprawna:</b> '+text(ok?ok.t:'')+'</p><p>'+text(ok?ok.w:'')+'</p>'+(q.zap?'<p><b>Zapamiętaj:</b> '+text(q.zap)+'</p>':'')+'<p class="note2">Źródło: '+esc((q.z||[]).join(' · '))+'</p></details>';}).join(''):'<p class="exam-good">Bez błędów.</p>')+
      '<div class="exam-row"><button data-run="bledne"'+(bad.length?'':' disabled')+'>Powtórz błędne</button><button data-lobby>Plan i gotowość</button></div>';
    panel.querySelector('[data-close]').onclick=close;panel.querySelector('[data-lobby]').onclick=lobby;
    const rb=panel.querySelector('[data-run="bledne"]');if(rb)rb.onclick=()=>runNew('bledne');panel.scrollTop=0;
  }
  function backup(){const payload={wersja:1,wynikiPytan:api.getResults(),nauka:learning,widziane:seen,sprawdziany:state,ciag:run};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='cobit-schemat-postep-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  return {init(value){api=value;ensurePanel();document.getElementById('exam75').onclick=open;if(state.active)open();},open,expose(u){seen[u] ||= Date.now();save();},learn(code,value){if(lessons().some(l=>l.kod===code)){learning[code]=!!value;save();}},learned:code=>!!learning[code]};
})();
