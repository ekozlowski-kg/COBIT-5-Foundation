/* Autorska mapa relacji. Źródło merytoryczne: COBIT 5 Framework PL, 2012.
 * „Rozwinięcie” jest nawigacją po publikacji, nie dodatkową relacją normatywną.
 * Nie zmienia banku pytań ani treści oryginalnych ilustracji w plikach lokalnych. */
window.COBIT_RELATIONS = function (m) {
  const {nodes, edges, INFO, DETAIL, PARENT, FGROUPS, ILINFO, BKINFO, FIG2INFO, MarkerType} = m;
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const members = {}, owner = {}, anchors = {}, originalEdges = edges.slice();
  const coreIds = nodes.filter(n => !FGROUPS.includes(n) && !ILINFO[n.id] && !BKINFO[n.id] && !FIG2INFO[n.id] && !/^(ce|ci)\d+$|^p(apo|bai|dss|mea)/.test(n.id)).map(n => n.id);
  // Ustalenie przynależności przed przesunięciem ram. Prostokąty sekcji są rozłączne.
  for (const group of FGROUPS) {
    members[group.id] = nodes.filter(n => n.type === 'card' &&
      n.position.x >= group.position.x && n.position.y >= group.position.y &&
      n.position.x < group.position.x + group.style.width &&
      n.position.y < group.position.y + group.style.height).map(n => n.id);
    for (const id of members[group.id]) {
      if (owner[id]) throw new Error('Dwie sekcje szczegółów: ' + id);
      owner[id] = group.id;
    }
  }
  function edit(id, title, sub) {
    const n = byId[id]; if (!n) return;
    if (title) n.data.title = title;
    if (sub) n.data.sub = sub;
  }
  // Cykl wdrożenia to sposób wprowadzania zmian, nie podział całego frameworku.
  const phaseSubs = [
    'Uzgodnij potrzebę działania; punkty zapalne i zdarzenia wyzwalające pomagają ją rozpoznać.',
    'Ustal zakres z kaskady celów, ryzyka i diagnostyki. Oceń stan obecny.',
    'Ustal uzasadniony stan docelowy, luki i priorytety doskonalenia.',
    'Opracuj rozwiązania, projekty, uzasadnienia biznesowe i plan zmian.',
    'Wdróż zaplanowane usprawnienia potrzebnych aktywatorów; ustal pomiar i własność.',
    'Użytkuj ulepszone aktywatory i monitoruj osiąganie spodziewanych korzyści.',
    'Oceń skuteczność inicjatywy, dalsze wymagania i podtrzymuj doskonalenie.'
  ];
  for (let i = 1; i <= 7; i++) {
    const n = byId['f' + i]; n.position = {x: 348 + (i - 1) * 620, y: 2800};
    n.style = {...n.style, width: 590, height: 340}; n.zIndex = 0;
    n.data.sub = [[phaseSubs[i - 1]]];
    INFO[n.id].from = phaseSubs[i - 1] + ' Trzy komponenty (pierścienie) działają współbieżnie. Powiązanie z pojęciem na mapie wskazuje jego użycie w tej fazie, nie wyłączność tej fazy. FW-PL s. 37–39.';
  }
  byId.petla.position = {x: 348, y: 2510}; byId.petla.style.width = 620;
  edit('petla', null, '7 faz doskonalenia całego systemu · 3 współbieżne komponenty · poniżej');
  // Szczegóły nadal mają własną przestrzeń; nie zasłaniają cyklu wdrożenia.
  for (const g of FGROUPS) {
    const delta = g.position.x < 5000 ? 1700 : 0;
    g.position.y += delta;
    for (const id of members[g.id]) byId[id].position.y += delta;
  }
  // Ramy opisują stałe obszary wiedzy. Żaden aktywator nie należy do jednej fazy.
  const frames = [
    ['map_context', -22, 40, 714, 1540, 'Kontekst i potrzeba zmiany', 'Dlaczego organizacja działa i dlaczego chce coś poprawić?', 'gray', 'kont'],
    ['map_goals', 768, 40, 664, 1540, 'Potrzeby → cele', 'Kaskada celów działa w całym systemie Ładu i Zarządzania.', 'green', 'z1'],
    ['map_assess', 1460, 40, 1092, 2400, 'Ocena i wybór usprawnień', 'Dowody → oceny atrybutów → poziom procesu → luka. Nie jest to ocena wszystkich aktywatorów.', 'gray', 'ocena'],
    ['map_enablers', 2628, 40, 774, 2400, '7 współzależnych aktywatorów', 'Każdy ma 4 wymiary; wspólnie wspierają Ład i Zarządzanie.', 'blue', 'akt'],
    ['map_system', 3448, 40, 814, 1415, 'Ład i Zarządzanie', 'Odrębne zadania, współdziałanie i informacje zwrotne; 37 procesów w 5 domenach.', 'purple', 'z5'],
    ['map_results', 4308, 40, 324, 961, 'Wyniki i doskonalenie', 'Wyniki odnosimy do celów, potrzeb i spodziewanych korzyści.', 'amber', 'pomiar']
  ];
  for (const [id,x,y,width,height,title,sub,g,anchor] of frames) {
    const n={id,type:'figbox',position:{x,y},style:{width,height},zIndex:-2,draggable:false,selectable:false,data:{title,sub,g}};
    nodes.push(n); byId[id]=n; coreIds.push(id); anchors[id]=anchor;
  }
  nodes.splice(nodes.findIndex(n => n.id === 'spacer'), 1);
  byId.s0.data.n=''; byId.s0.data.text='Punkt wejścia do mapy';
  byId.kont.position.y=210; byId.decyz.position.y=490;
  byId.potrz.position.y=700; byId.wart.position.y=990;
  byId.corg.position.y=700; byId.cit.position.y=990; byId.cakt.position.y=1280;
  byId.kask.style.height=1190;
  for(let i=0;i<=5;i++) byId['lv'+i].position.y=340+i*300;
  byId.obecny.position.y=2200;
  ['sN','sC','sW','sP'].forEach((id,i)=>byId[id].position.y=750+i*225);
  byId.ws1.position.y=1700; byId.ws2.position.y=2050;
  for(let i=1;i<=7;i++) byId['a'+i].position.y=510+(i-1)*270;
  edit('cakt', null, 'cele dla wszystkich potrzebnych aktywatorów, nie tylko procesów');
  edit('akt', null, 'uwzględnij powiązania wszystkich 7; dobierz potrzebne usprawnienia');
  edit('a2', null, 'jeden z 7 aktywatorów · PRM: 5 procesów Ładu + 32 Zarządzania');
  edit('prm', null, 'model referencyjny: przeznaczenie i wyniki procesów · także podstawa oceny');
  edit('ocena', null, 'dowody i wskaźniki → oceny PA → reguła poziomu; kliknij po kryteria');
  edit('obecny', null, 'wynik reguły: wszystkie PA wybranego poziomu ≥ W, niższych = P');
  edit('ws2', 'Wskaźniki zdolności (poziomy 1–5)', 'typowe praktyki, zasoby i produkty pracy; poziom 1 ma też wskaźniki wydajności');
  edit('lad', 'Ład: Oszacuj · Kieruj · Monitoruj', 'EDM · ocenia potrzeby, wyznacza kierunek i monitoruje wyniki');
  edit('zarz', 'Zarządzanie: Planuj · Twórz · Wykonuj · Monitoruj', 'PBRM · APO, BAI, DSS, MEA · działa w kierunku wyznaczonym przez Ład');

  // Rozdzielenie zasad 2 i 3 przy zachowaniu starych identyfikatorów pytań.
  const z3={...byId.z23,id:'z3',position:{...byId.z23.position},style:{...byId.z23.style},data:{...byId.z23.data}};
  nodes.push(z3); byId.z3=z3; coreIds.push('z3');
  INFO.z3={...INFO.z23,title:'Zasada 3: Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej',qkey:'z23',from:'COBIT 5 integruje wytyczne i jest zgodny z innymi istotnymi standardami oraz strukturami ramowymi. Ułatwia ich spójne użycie; nie zastępuje szczegółowych praktyk każdej z nich.',refs:['FW-PL s. 25–26, Rysunki 10–11','FW-PL s. 57–61, Załącznik E']};
  INFO.z23={...INFO.z23,title:'Zasada 2: Pokrycie całej organizacji',from:'Ład i Zarządzanie informacjami i powiązaną technologią obejmują całą organizację, jej funkcje biznesowe i IT oraz istotne relacje zewnętrzne. Ład IT jest częścią ładu korporacyjnego. Zakres konkretnej inicjatywy może być węższy.',refs:['FW-PL s. 23–24, Rysunki 8–9']};
  const principles=['z1','z23','z3','z4','z5'];
  principles.forEach((id,i)=>{byId[id].position.x=390+i*840;byId[id].style.width=800;});
  edit('z23', INFO.z23.title, 'podr.: Uwzględnienie wszystkich aspektów działania przedsiębiorstwa');
  edit('z3', INFO.z3.title, 'podr.: Stosowanie jednej zintegrowanej metodyki');

  // Zależności główne. Strzałka = opisany kierunek; linia bez grotu = rozwinięcie.
  edges.length=0;
  const colors={flow:'#54874a',feedback:'#168c83',use:'#b18135',reference:'#847dac',classification:'#64748b'};
  function link(source,target,label,kind,refs,extra={}) {
    if (!byId[source] || !byId[target] || source===target) return;
    const directed=!['reference','classification'].includes(kind);
    const s=byId[source].position,t=byId[target].position,dx=t.x-s.x,dy=t.y-s.y;
    const handles=kind==='classification'&&Math.abs(dx)<30?['r','rt']:
      Math.abs(dx)>Math.abs(dy)?(dx>0?['r','l']:['ls','rt']):(dy>=0?['b','t']:['t2','b2']);
    const ed={id:'rel_'+edges.length,source,target,sourceHandle:handles[0],targetHandle:handles[1],type:'smoothstep',
      pathOptions:{offset:30,borderRadius:10},
      label,style:{stroke:colors[kind]||'#64748b',strokeWidth:directed?2:1.2,...(!directed?{strokeDasharray:'5 5'}:{})},
      ...(directed?{markerEnd:{type:MarkerType.ArrowClosed,width:16,height:16,color:colors[kind]}}:{}),
      labelStyle:{fontSize:12},labelBgPadding:[5,3],labelBgBorderRadius:4,
      data:{kind,refs,contextual:kind==='reference'||source==='fund',authorRelation:true},...extra};
    edges.push(ed);
  }
  const L=(s,t,l,k='flow',r='FW-PL s. 17–19, Rysunki 3–4')=>link(s,t,l,k,r);
  principles.forEach(id=>L('fund',id,'zasada nadrzędna','classification','FW-PL s. 13–15, Rysunek 2'));
  L('z1','kask','realizacja przez kaskadę','reference');
  L('z23','lad','zakres całej organizacji','reference','FW-PL s. 23–24');
  L('z4','akt','podejście holistyczne','reference','FW-PL s. 27–29');
  L('z5','lad','rozdziela zadania','reference','FW-PL s. 31–32');
  L('kont','drv','wpływa na wyznaczniki');
  L('drv','potrz','1 · wpływ na potrzeby');
  L('potrz','corg','2 · przekład na cele organizacji');
  L('potrz','wart','wyznacza tworzenie wartości');
  L('corg','cit','3 · przekład na cele związane z IT');
  L('cit','cakt','4 · przekład na cele aktywatorów');
  L('cakt','akt','określają, co mają osiągnąć','flow','FW-PL s. 18–19, 27');
  L('kask','potrz','mechanizm przekładu potrzeb','reference');
  L('wart','lad','cel Ładu','reference','FW-PL s. 17, 23, 31');
  for(let i=1;i<=7;i++) L('akt','a'+i,'kategoria aktywatora','classification','FW-PL s. 27, Rysunek 12');
  L('akt','lad','wspierają Ład','flow','FW-PL s. 23, 27–31');
  L('akt','zarz','wspierają Zarządzanie','flow','FW-PL s. 27–31');
  L('akt','wym0','wspólny model opisu','classification','FW-PL s. 28–29, Rysunek 13');
  for(let i=1;i<=4;i++) L('wym0','wym'+i,'wymiar aktywatora','classification','FW-PL s. 28–29');
  for(const id of ['wym1','wym2']) L(id,'mier1','pomiar realizacji celów','reference','FW-PL s. 28–29');
  for(const id of ['wym3','wym4']) L(id,'mier2','pomiar stosowania praktyk','reference','FW-PL s. 28–29');
  // Dwa przykłady współzależności z tekstu; nie jest to komplet interakcji.
  L('a5','a2','informacje wejściowe','flow','FW-PL s. 27–28');
  L('a2','a5','informacje wynikowe','feedback','FW-PL s. 28');
  L('a7','a3','umiejętności dla struktur','reference','FW-PL s. 28');
  L('a4','a2','zachowanie wpływa na skuteczność','reference','FW-PL s. 28');
  L('a2','prm','37 procesów w modelu','classification','FW-PL s. 32–33');
  L('prm','lad','5 procesów domeny EDM','classification','FW-PL s. 32–33');
  L('prm','zarz','32 procesy w 4 domenach','classification','FW-PL s. 32–33');
  L('lad','zarz','wyznacza kierunek','flow','FW-PL s. 31–32, Rysunki 14–15');
  link('zarz','lad','informacje zwrotne','feedback','FW-PL s. 32, Rysunek 15',{sourceHandle:'t2',targetHandle:'b2'});
  for(let i=1;i<=5;i++) L('lad','edm'+i,'proces Ładu','classification','FW-PL s. 33');
  for(const id of ['dapo','dbai','ddss','dmea']) L('zarz',id,'domena Zarządzania','classification','FW-PL s. 32–33');
  L('prm','ocena','przeznaczenie i wyniki wybranego procesu','flow','FW-PL s. 42–45');
  L('ws1','ocena','dowody dla PA 1.1','flow','FW-PL s. 42, 45');
  L('ws2','ocena','wskaźniki zdolności modelu','flow','FW-PL s. 42–45');
  for(const id of ['sN','sC','sW','sP']) L('ocena',id,'skala oceny atrybutu','classification','FW-PL s. 45');
  for(let i=0;i<=5;i++) L('ocena','lv'+i,'możliwy poziom procesu','classification','FW-PL s. 42–43');
  L('ocena','obecny','reguła: bieżące PA ≥ W; niższe PA = P','flow','FW-PL s. 42–45');
  L('obecny','wynik','stan obecny','flow','FW-PL s. 38, 45');
  L('docel','wynik','stan docelowy','flow','FW-PL s. 38, 43, 45');
  L('mier1','pomiar','wyniki względem celów','feedback','FW-PL s. 28–29, 38');
  L('mier2','pomiar','stosowanie dobrych praktyk','feedback','FW-PL s. 28–29, 38');
  L('pomiar','lad','informacje o osiąganych wynikach','feedback','FW-PL s. 31–32');
  L('pomiar','przeg','wyniki dla przeglądu','feedback','FW-PL s. 38');
  L('przeg','potrz','ponowna analiza potrzeb','feedback','FW-PL s. 38');
  L('kont','decyz','dostosuj warunki inicjatywy','use','FW-PL s. 35–36');
  L('pz','f1','przesłanki inicjatywy','use','FW-PL s. 36–38');
  L('zi','f1','przesłanki inicjatywy','use','FW-PL s. 36–38');
  L('decyz','petla','warunki skutecznego doskonalenia','use','FW-PL s. 35–39');
  L('petla','f1','7 faz · 3 współbieżne komponenty','use','FW-PL s. 37–38');
  for(let i=1;i<=7;i++) link('f'+i,'f'+(i===7?1:i+1),i===7?'kolejna iteracja':'kolejna faza','use','FW-PL s. 38, Rysunek 17',{sourceHandle:'r',targetHandle:'l'});
  for(const [s,t,l] of [['kask','f2','pomaga ustalić zakres'],['ocena','f2','ustala stan obecny'],['docel','f3','ustal stan docelowy'],['wynik','f3','analizuj luki'],['wynik','f4','zaplanuj rozwiązania'],['f4','akt','usprawnienia potrzebnych aktywatorów'],['f5','akt','wdrażaj zaplanowane usprawnienia'],['pomiar','f6','oceniaj spodziewane korzyści'],['przeg','f7','oceniaj skuteczność inicjatywy']]) L(s,t,l,'use','FW-PL s. 38');
  L('s0','kont','punkt wejścia','reference','Autorska nawigacja');
  for (const [id,a] of Object.entries(anchors)) L(a,id,'obszar mapy','reference','Autorskie grupowanie pojęć');

  const staticAnchors={gce:'corg',gci:'cit',gpapo:'dapo',gpbai:'dbai',gpdss:'ddss',gpmea:'dmea',r18:'ocena',r25:'z3',il1:'z3',il10:'z3',il8:'z23',il9:'lad',il7:'potrz',il28:'a1',il29:'a2',il32:'a3',il33:'a3',il34:'a4',il35:'a5',il36:'a5',il37:'a6',il38:'a7',il39:'a7',il26:'a5'};
  function bookAnchor(title) {
    const tests=[
      [/Streszczenie|Przegląd niniejszej|wyznaczniki rozwoju/,'fund'],
      [/Zasada 1|Kaskada celów|Wykorzystanie kaskady/,'potrz'],
      [/Pytania dotyczące nadzoru/,'potrz'],[/Zasada 2|Podejście do nadzoru/,'z23'],[/Zasada 3/,'z3'],
      [/Zasada 4|Systemowy nadzór|Przykład aktywatorów/,'akt'],[/Wymiary aktywatorów|Wprowadzenie: wymiary|sprawnością aktywatora/,'wym0'],
      [/Zasada 5/,'z5'],[/Model referencyjny/,'prm'],[/kontekstu przedsiębiorstwa/,'kont'],[/właściwego środowiska/,'decyz'],
      [/punktów zapalnych/,'f1'],[/Umożliwienie zmian|cyklu życia|Wytyczne dotyczące wdrożenia|uzasadnienia biznesowego/,'petla'],
      [/Rozdział 8/,'ocena'],[/Załącznik A|Załącznik E/,'z3'],[/Załącznik B/,'corg'],[/Załącznik C/,'cit'],[/Załącznik D/,'potrz'],[/Załącznik F/,'a5'],
      [/Aktywator: Zasady/,'a1'],[/Aktywator: Procesy/,'a2'],[/Aktywator: Struktury/,'a3'],[/Aktywator: Kultura/,'a4'],[/Aktywator: Informacja/,'a5'],[/Aktywator: Usługi/,'a6'],[/Aktywator: Ludzie/,'a7'],[/Załącznik H/,'fund']
    ];
    const match=tests.find(([re])=>re.test(title));
    if(!match) throw new Error('Brak uzasadnionego przypisania sekcji: '+title);
    return match[1];
  }
  // Każda sekcja ma połączenie z głównym modelem oraz połączenia do swoich treści.
  for(const g of FGROUPS) {
    const a=staticAnchors[g.id]||bookAnchor(g.data.title); anchors[g.id]=a;
    const historical=g.id==='r18'||/Różnice|COBIT 4.1/.test(g.data.title);
    L(a,g.id,historical?'porównanie historyczne, nie przelicznik':'rozwinięcie tematu','reference',g.data.title);
    DETAIL[a]=(DETAIL[a]||[]).filter(([,id])=>!members[g.id].includes(id));
    if(members[g.id][0]) (DETAIL[a]=DETAIL[a]||[]).push([g.data.title,members[g.id][0]]);
    for(const id of members[g.id]) {
      const b=BKINFO[id], il=ILINFO[id];
      const parent=b?'bk_'+b.it.rodzic:il&&il.it.w?g.id+'_'+il.it.w:null;
      const targetParent=parent&&members[g.id].includes(parent)&&parent!==id?parent:g.id;
      L(targetParent,id,'rozwinięcie w sekcji','reference',b?'FW-PL s. '+b.it.s:g.data.title);
      PARENT[id]=targetParent===g.id?a:targetParent;
    }
  }
  // Istotne styki między rozdziałami, których nie oddaje sama hierarchia książki.
  L('bk_raci','a3','role procesu osadzamy w strukturach','reference','FW-PL s. 31, 70, 75–77');
  L('bk_raci','a7','role wymagają umiejętności','reference','FW-PL s. 29–30, 70, 87–88');
  L('bk_uzas','f1','zarys uzasadnia uruchomienie','reference','FW-PL s. 36, 39');
  L('bk_uzas','f4','projekty mają uzasadnienia','reference','FW-PL s. 38–39');
  L('bk_uzas','f6','podstawa monitorowania korzyści','reference','FW-PL s. 38–39');
  L('pomiar','corg','ocena realizacji celów organizacji','reference','FW-PL s. 17–20, 38');
  L('pomiar','cit','ocena realizacji celów IT','reference','FW-PL s. 18–20, 38');
  L('pomiar','cakt','ocena realizacji celów aktywatorów','reference','FW-PL s. 28–29, 38');
  // Jeden jawnie opisany przykład odczytu P/S, nie komplet macierzy 22–23.
  for(const [id,rating] of [['ci4','P'],['ci10','P'],['ci14','P'],['ci1','S'],['ci7','S'],['ci8','S']])
    L('ce7',id,rating+' · '+(rating==='P'?'podstawowa':'wspierająca')+' relacja; przykład mapowania','reference','FW-PL s. 49, Przykład 7; s. 50, Rysunek 22');
  L('ci7','pdss02','P · podstawowa relacja; przykład mapowania','reference','FW-PL s. 53, Rysunek 23; nie jest to pełna lista procesów wspierających cel IT 07');
  // Zachowujemy relacje odczytane z ilustracji. Stary model dojrzałości jest listą,
  // a nie przebiegiem od poziomu 0 przez 5 do atrybutów: tam wystarcza hierarchia.
  for(const ed of originalEdges.filter(x=>x.id.startsWith('il')&&x.id.includes('_r'))) {
    if(!byId[ed.source]||!byId[ed.target]) continue;
    const tableRelation=ed.id.startsWith('il39_')||ed.id.startsWith('il7_');
    edges.push({...ed,...(tableRelation?{markerEnd:undefined,label:'przykładowe przyporządkowanie',style:{...ed.style,strokeDasharray:'5 5'}}:{}),data:{kind:tableRelation?'classification':'source',contextual:true,refs:ILINFO[ed.source]?'FW-PL, Rysunek '+ILINFO[ed.source].n:'Relacja z ilustracji',authorRelation:tableRelation}});
  }
  const neighbours={};
  for(const n of nodes) neighbours[n.id]=new Set([n.id]);
  for(const ed of edges) {neighbours[ed.source].add(ed.target);neighbours[ed.target].add(ed.source);}
  for(const [id,gid] of Object.entries(owner)) {neighbours[id].add(gid);neighbours[id].add(anchors[gid]);}
  return {members,owner,anchors,coreIds:coreIds.filter(id=>byId[id]&&id!=='spacer'),neighbours:Object.fromEntries(Object.entries(neighbours).map(([id,set])=>[id,[...set]]))};
};
