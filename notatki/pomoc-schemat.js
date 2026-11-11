/* Wspólne omówienia, rozwinięcia skrótów i jednoznaczne odsyłacze do źródeł. */
window.COBIT_HELP = (() => {
  'use strict';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const terms = {
    RACI: ['Responsible, Accountable, Consulted, Informed', 'odpowiedzialny wykonawczo, odpowiedzialny decyzyjnie, konsultowany, informowany', 'W podręczniku: odpowiedzialny i rozliczany. Tabela przypisuje role do praktyk. Dla jednej praktyki i zakresu wskazuje się jedną rolę A; R, C i I mogą obejmować więcej ról.'],
    CEO: ['Chief Executive Officer', 'dyrektor generalny', 'Odpowiada za całościowe zarządzanie przedsiębiorstwem.'],
    CIO: ['Chief Information Officer', 'dyrektor ds. informatyki', 'Dopasowuje strategię IT do strategii biznesowej oraz zarządza zasobami, usługami i rozwiązaniami IT.'],
    CFO: ['Chief Financial Officer', 'dyrektor ds. finansowych', 'Odpowiada za zarządzanie finansami, ryzyko finansowe i wiarygodność rachunkowości.'],
    COO: ['Chief Operating Officer', 'dyrektor ds. operacyjnych', 'Odpowiada za operacyjne funkcjonowanie przedsiębiorstwa.'],
    CRO: ['Chief Risk Officer', 'dyrektor ds. ryzyka', 'Zajmuje się zarządzaniem ryzykiem całego przedsiębiorstwa, nie wyłącznie ryzykiem IT.'],
    CISO: ['Chief Information Security Officer', 'dyrektor ds. bezpieczeństwa informacji', 'Odpowiada za bezpieczeństwo informacji we wszystkich jej postaciach.'],
    PMO: ['Programme and Project Management Office', 'biuro zarządzania projektami i programami', 'Wspiera kierowników projektów i programów oraz gromadzi, ocenia i raportuje informacje o ich realizacji.'],
    VMO: ['Value Management Office', 'biuro zarządzania wartością', 'Wspiera ocenę inwestycji i uzasadnień biznesowych oraz utrzymywanie i tworzenie wartości z inwestycji i usług.'],
    ERM: ['Enterprise Risk Management', 'zarządzanie ryzykiem przedsiębiorstwa', 'Obejmuje ryzyko w skali całej organizacji.'],
    HR: ['Human Resources', 'zasoby ludzkie', 'W kontekście funkcji organizacyjnej: zarządzanie zasobami ludzkimi.'],
    IT: ['Information Technology', 'technologie informatyczne / informatyka', 'COBIT 5 obejmuje informacje i technologie w całym przedsiębiorstwie, również poza działem IT.'],
    BSC: ['Balanced Scorecard', 'Zrównoważona karta wyników', 'Porządkuje cele w perspektywach: finanse, klient, obszar wewnętrzny oraz szkolenie i rozwój.'],
    EDM: ['Evaluate, Direct and Monitor', 'Oszacuj, Kieruj i Monitoruj', 'Domena Ładu: 5 procesów. Evaluate w nazwie egzaminacyjnej to „Oszacuj”.'],
    APO: ['Align, Plan and Organise', 'Dostosuj, Planuj i Organizuj', 'Domena Zarządzania: 13 procesów.'],
    BAI: ['Build, Acquire and Implement', 'Twórz, Nabywaj i Wdrażaj', 'Domena Zarządzania: 10 procesów.'],
    DSS: ['Deliver, Service and Support', 'Dostarczaj, Obsługuj i Wspieraj', 'Domena Zarządzania: 6 procesów.'],
    MEA: ['Monitor, Evaluate and Assess', 'Monitoruj, Oszacuj i Oceń', 'Domena Zarządzania: 3 procesy. Nie myl monitorowania w Zarządzaniu z monitorowaniem w Ładzie.'],
    PBRM: ['Plan, Build, Run and Monitor', 'Planuj, Wytwarzaj, Wykonuj i Monitoruj', 'Run obejmuje bieżące działanie i eksploatację. Nie jest to sztywny harmonogram, w którym każda czynność występuje tylko raz.'],
    PRM: ['Process Reference Model', 'Referencyjny model procesu', 'Opisuje procesy, ich przeznaczenie i rezultaty; stanowi wymiar procesu w modelu oceny.'],
    PAM: ['Process Assessment Model', 'Model oceny procesu', 'Łączy wymiar procesu z wymiarem zdolności i wskaźnikami potrzebnymi do oceny.'],
    PA: ['Process Attribute', 'atrybut procesu', 'Mierzalna cecha zdolności procesu. PA 1.1 to Process performance — sprawność (wydajność) procesu. „Proces wykonywany” jest nazwą poziomu 1; cały klasyczny model ma 9 atrybutów.'],
    SMART: ['Specific, Measurable, Actionable, Relevant, Timely', 'specyficzne, mierzalne, przekładalne na działania, istotne, terminowe', 'W COBIT 5 litera A oznacza Actionable. Nie należy zastępować jej popularnym w innych odmianach SMART słowem Achievable.'],
    PRINCE2: ['Projects in Controlled Environments', 'projekty w sterowanym środowisku', 'Metodyka zarządzania projektami przywoływana obok COBIT 5.'],
    'P/S': ['Primary / Secondary', 'powiązanie podstawowe / wspierające', 'Oznaczenia mapowania kaskady celów. Nie myl litery P z oceną Pełny w polskiej skali atrybutów ani Partially w skali angielskiej.'],
    CO: ['Enterprise Goal', 'cel organizacji', 'Skrót oznaczający cel organizacji w przykładach; np. CO7. Nie jest nazwą roli.'],
    SFIA: ['Skills Framework for the Information Age', 'struktura ramowa umiejętności dla ery informacji', 'Przykład zewnętrznego źródła definiowania i oceny umiejętności.'],
    ITIL: ['Information Technology Infrastructure Library', 'biblioteka dobrych praktyk zarządzania usługami IT', 'Historyczne rozwinięcie nazwy. COBIT 5 może integrować wytyczne ITIL; ich nie zastępuje.'],
    TOGAF: ['The Open Group Architecture Framework', 'struktura ramowa architektury The Open Group', 'Przykład wytycznych dotyczących architektury przedsiębiorstwa.'],
    TGF: ['Taking Governance Forward', 'inicjatywa rozwoju podejścia do Ładu', 'Jej koncepcje włączono do COBIT 5, a samą inicjatywę wycofano.'],
    BMIS: ['Business Model for Information Security', 'biznesowy model bezpieczeństwa informacji', 'Jedno ze źródeł podejścia uwzględniającego współzależności organizacji, ludzi, procesów i technologii.'],
    ITAF: ['IT Assurance Framework', 'struktura ramowa zapewnienia i audytu IT', 'Wytyczne ISACA dla pracy audytowej i zapewniającej.'],
    COBIT: ['Control Objectives for Information and Related Technology', 'cele kontrolne dotyczące informacji i powiązanych technologii', 'Historyczne rozwinięcie nazwy. Zakres COBIT 5 jest szerszy: Ład i Zarządzanie IT całego przedsiębiorstwa.'],
    ISACA: ['Information Systems Audit and Control Association', 'stowarzyszenie audytu i kontroli systemów informacyjnych', 'Historyczne rozwinięcie nazwy organizacji wydającej COBIT.'],
    'ISO/IEC': ['International Organization for Standardization / International Electrotechnical Commission', 'Międzynarodowa Organizacja Normalizacyjna / Międzynarodowa Komisja Elektrotechniczna', 'Klasyczny model zdolności COBIT 5 Foundation opiera się na ISO/IEC 15504.'],
    ISO: ['International Organization for Standardization', 'Międzynarodowa Organizacja Normalizacyjna', 'Współtworzy normy przywoływane w COBIT 5.'],
    IEC: ['International Electrotechnical Commission', 'Międzynarodowa Komisja Elektrotechniczna', 'Wraz z ISO opracowuje normy, m.in. przywoływaną rodzinę ISO/IEC 15504.'],
    'N/C/W/P': ['Not / Partially / Largely / Fully achieved', 'Nieosiągnięty / Częściowy / Większościowy / Pełny', 'Oznaczenia polskiej skali osiągnięcia atrybutu; angielskie odpowiedniki to N/P/L/F. Litera P ma inne znaczenie w skali EN i PL.'],
    'N/P/L/F': ['Not / Partially / Largely / Fully achieved', 'Nieosiągnięty / Częściowy / Większościowy / Pełny', 'Angielska skala osiągnięcia atrybutu. Nie myl jej z polskimi oznaczeniami N/C/W/P.'],
    SWN: ['', 'Skuteczna, Wydajna, Nieinwazyjna', 'Autorski skrót pamięciowy cech dobrej polityki; nie nazwa modelu COBIT.'],
    DOWR: ['', 'Dokładność, Obiektywność, Wiarygodność, Reputacja', 'Autorski skrót pamięciowy jakości wewnętrznej informacji.'],
    PID: ['', 'Poufność, Integralność, Dostępność', 'Skrót pamięciowy trzech kryteriów informacji; nie pełna lista kryteriów COBIT 4.1 ani modelu jakości COBIT 5.'],
    SW: ['', 'Skuteczność, Wydajność', 'Autorski skrót pamięciowy używany przy porównaniu dawnych kryteriów informacji.'],
    ZW: ['', 'Zgodność, Wiarygodność', 'Autorski skrót pamięciowy używany przy porównaniu dawnych kryteriów informacji.'],
    KSC: ['', 'Krajowy System Cyberbezpieczeństwa', 'Skrót z przykładu zastosowania, nie element struktury COBIT 5.'],
    PSP: ['', 'Państwowa Straż Pożarna', 'Organizacja wykorzystana w przykładach autorskich.'],
    KG: ['', 'Komenda Główna', 'Skrót organizacyjny z przykładów autorskich.'],
    BHP: ['', 'bezpieczeństwo i higiena pracy', 'Skrót z analogii dydaktycznych.'],
    OC: ['', 'odpowiedzialność cywilna', 'W analogii z samochodem: ubezpieczenie odpowiedzialności cywilnej.'],
    GPS: ['Global Positioning System', 'globalny system pozycjonowania', 'Skrót z analogii dydaktycznych.'],
    SP1: ['Sample Paper 1', 'Arkusz próbny 1', 'Przykładowy arkusz PeopleCert; w kursie odróżniamy oryginał od jawnie oznaczonych korekt dydaktycznych.'],
    EP: ['Enabling Processes', 'Procesy umożliwiające', 'Publikacja COBIT 5 opisująca procesy, praktyki, role oraz dane wejściowe i wyjściowe.'],
    PDF: ['Portable Document Format', 'przenośny format dokumentu', 'Format materiałów źródłowych.']
  };
  const names = Object.keys(terms).sort((a,b) => b.length-a.length);
  const pattern = new RegExp('(?<![\\p{L}\\d_])(' + names.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|') + ')(?![\\p{L}_])','gu');
  function found(value) { const input=String(value||'');const out=[...new Set([...input.matchAll(pattern)].map(m=>m[1]))];if(/\b[PS]\b/.test(input)&&/kaskad|mapowani|powiązan|relacj/i.test(input)&&!out.includes('P/S'))out.push('P/S');return out; }
  function plain(value) { return esc(value).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>'); }
  function explain(value) {
    const input=String(value || ''), used=new Set(); let end=0, out='';
    for(const m of input.matchAll(pattern)) {
      const key=m[1], [en,pl]=terms[key];
      out+=esc(input.slice(end,m.index));
      const full=[en,pl].filter(Boolean).join(' — ');
      out+='<abbr title="'+esc(full)+'">'+esc(key)+'</abbr>';
      if(!used.has(key)&&!input.includes(en || '\u0000')&&!input.includes(pl)) out+=' <span class="abbr-expansion">('+esc(full)+')</span>';
      used.add(key);end=m.index+m[0].length;
    }
    return (out+esc(input.slice(end))).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
  }
  function glossary(value) {
    const words=found(typeof value==='string'?value:JSON.stringify({t:value.t,scen:value.scen,zap:value.zap,err:value.err,o:value.o,fz:value.fz,przyklad:value.przyklad}));
    if(!words.length)return '';
    return '<section class="cobit-glossary"><h4>Użyte skróty — pełne nazwy i znaczenie</h4><dl>'+words.map(k=>{
      const [en,pl,why]=terms[k];return '<dt>'+esc(k)+'</dt><dd>'+(en?'<span lang="en">'+esc(en)+'</span> — ':'')+'<b>'+esc(pl)+'</b>. '+esc(why)+'</dd>';
    }).join('')+'</dl></section>';
  }
  function references(value, defaultDocument=null) {
    const input=String(value || '');
    const regex=/(?:(FW-PL|FW-EN|SP1|Enabling Processes|ALTKOM|Altkom(?: 2022)?(?: \([^)]*\))?)\s*,?\s*)?(?<![\p{L}\d])s\.\s*(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?(?!\d)/gu;
    let out='', end=0, doc=defaultDocument;
    for(const m of input.matchAll(regex)) {
      const between=input.slice(end,m.index);
      if(/[;·\n]/.test(between))doc=defaultDocument;
      out+=plain(between);if(m[1])doc=m[1];
      const first=+m[2],last=m[3]?+m[3]:first;
      if(doc==='FW-PL'&&first>=1&&last<=94&&last>=first&&last-first<=12) {
        const label=m[0];
        if(first===last)out+='<button type="button" class="pref" data-p="'+first+'" title="Sprawdź w podręczniku COBIT 5 PL, strona '+first+'">'+esc(label)+'</button>';
        else out+='FW-PL '+Array.from({length:last-first+1},(_,i)=>'<button type="button" class="pref" data-p="'+(first+i)+'" title="Sprawdź stronę '+(first+i)+'">s. '+(first+i)+'</button>').join(' ');
      } else out+='<span class="cobit-source-label">'+esc(m[0])+'</span>';
      end=m.index+m[0].length;
    }
    return out+plain(input.slice(end));
  }
  function sources(q) { return '<p class="cobit-sources"><b>Sprawdź w źródłach:</b> '+(q.z||[]).map(z=>references(z)).join(' · ')+'</p>'; }
  function card(q) {
    if(!q)return '';
    const f=q.fz, correct=(q.o||[]).find(o=>o.ok);
    const lesson=(window.NAUKA_SYLABUS?.lekcje||[]).find(l=>(q.s||'').split(',').includes(l.kod));
    const example=q.przyklad||f?.ex||lesson?.przyklad;
    return '<article class="fz-card cobit-help"><p class="fz-n">Omówienie autorskie · COBIT 5'+(f?.pulapka?' · pułapka egzaminacyjna':'')+'</p>'+
      '<h4 class="fz-h">'+esc(f?.h||'Dlaczego ta odpowiedź?')+'</h4>'+
      (correct?'<p><b>Poprawna odpowiedź:</b> '+plain(correct.t)+'</p><p>'+explain(correct.w)+'</p>':'')+
      (f?.a?'<p class="fz-a">'+explain(f.a)+'</p>':'')+
      '<details class="cobit-alternatives"><summary>Dlaczego pozostałe odpowiedzi nie pasują?</summary>'+q.o.filter(o=>!o.ok).map(o=>'<p><b>'+plain(o.t)+'</b><br>'+explain(o.w)+'</p>').join('')+'</details>'+
      (q.zap?'<p><b>Zapamiętaj:</b> '+explain(q.zap)+'</p>':'')+
      (example?'<div class="fz-ex"><span>PRZYKŁAD — UPROSZCZENIE DYDAKTYCZNE</span>'+explain(example)+'</div>':'')+
      (f?.org&&f.org!==example?'<div class="fz-ex fz-org"><span>W ORGANIZACJI</span>'+explain(f.org)+'</div>':'')+
      (q.err?'<p class="qerrata"><b>Korekta dydaktyczna:</b> '+explain(q.err)+'</p>':'')+
      glossary(q)+sources(q)+'</article>';
  }
  return {terms,found,explain,glossary,references,sources,card};
})();
