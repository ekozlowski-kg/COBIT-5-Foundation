// Dryl „pułapki terminologiczne”: EN / podręcznik PL -> nazwa z egzaminu PL. Powtórki metodą Leitnera.
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';
import { toast } from '../ui.js';
import { runSequence } from '../quiz.js';
import { termQueue, termPool } from '../progress.js';

const SESSION = 10;

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

export async function renderDrill(main) {
  const [termMap, trapList, unitsAll, questionsAll] = await Promise.all([C.terms(), C.traps(), C.units(), C.questions()]);
  // Karty z terminology-traps.json (pułapki) + hasła słownika z EN (pozostałe pojęcia).
  const fromTraps = trapList.map((t) => ({
    id: t.termId || 'trap-' + (t.en || t.egzamin).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    en: t.en, plEgzamin: t.egzamin, plPodrecznik: t.podrecznik,
    plInne: (t.inne || []).map((x) => String(x).replace(/\s*\(.*\)$/, '')),
    egzamin: (t.termId && termMap.get(t.termId)?.egzamin) || '', pulapka: true, termId: t.termId,
    niepotwierdzone: t.status === 'niepotwierdzone',
  }));
  const trapIds = new Set(fromTraps.map((t) => t.id));
  const fromTerms = [...termMap.values()].filter((t) => t.en && !trapIds.has(t.id))
    .map((t) => ({ ...t, plInne: (t.plInne || []).map((x) => (typeof x === 'string' ? x : x.nazwa)) }));
  const terms = [...fromTraps, ...fromTerms];
  const traps = fromTraps;
  let onlyTraps = traps.length >= 4;
  let dir = 'pl'; // §17.10 – kierunek: 'pl' (EN/podręcznik → egzamin PL) albo 'en' (egzamin PL → EN)
  let queue = [];
  let pos = 0;
  let score = 0;

  function buildQueue() {
    const round = store.get().drillRound;
    const pool = (onlyTraps ? traps : terms).filter((t) => dir !== 'en' || t.en);
    const due = pool.filter((t) => store.leitner(t.id).due <= round)
      .sort((a, b) => store.leitner(a.id).box - store.leitner(b.id).box || Math.random() - 0.5);
    const rest = shuffle(pool.filter((t) => !due.includes(t)));
    queue = [...due, ...rest].slice(0, Math.min(SESSION, pool.length));
    pos = 0; score = 0;
  }

  function card(t) {
    if (dir === 'en' && t.en) {
      const d = new Set();
      for (const o of shuffle(terms)) { if (d.size >= 3) break; if (o.en && o.en !== t.en) d.add(o.en); }
      const options = shuffle([t.en, ...d]);
      return { prompt: { label: 'Na egzaminie PL jest:', value: t.plEgzamin }, ask: 'Jak to brzmi po angielsku (oryginał ISACA)?', options, correct: options.indexOf(t.en) };
    }
    // Kierunek pytania: z podręcznika (jeśli różny) albo z EN.
    const fromHandbook = t.plPodrecznik && t.plPodrecznik !== t.plEgzamin && Math.random() < 0.5;
    const prompt = fromHandbook
      ? { label: 'W polskim podręczniku jest:', value: t.plPodrecznik }
      : { label: 'W oryginale (EN) jest:', value: t.en || t.plPodrecznik };
    const distract = new Set();
    if (t.plPodrecznik && t.plPodrecznik !== t.plEgzamin && !fromHandbook) distract.add(t.plPodrecznik);
    (t.plInne || []).forEach((x) => x !== t.plEgzamin && distract.add(x));
    for (const o of shuffle(terms)) {
      if (distract.size >= 3) break;
      if (o.id !== t.id && o.plEgzamin !== t.plEgzamin) distract.add(o.plEgzamin);
    }
    const options = shuffle([t.plEgzamin, ...[...distract].slice(0, 3)]);
    return { prompt, ask: 'Jak to brzmi na egzaminie PL?', options, correct: options.indexOf(t.plEgzamin) };
  }

  function draw() {
    if (!queue.length) {
      main.innerHTML = `<div class="page"><h1>Pułapki terminologiczne</h1><p class="page-lead">Brak nazw do ćwiczenia – słownik jest jeszcze pusty.</p></div>`;
      return;
    }
    if (pos >= queue.length) {
      store.nextDrillRound();
      store.saveDrillSeries({ score, total: queue.length, onlyTraps });
      main.innerHTML = `<div class="page"><div class="card flash">
        <div class="prompt">Koniec serii</div>
        <div class="big">${score} / ${queue.length}</div>
        <p class="muted">Terminy, które pomyliłeś, wrócą w następnej serii. Te, które znasz, wrócą rzadziej.</p>
        <div class="btn-row" style="justify-content:center"><button class="btn btn-primary" id="again">Następna seria</button><a class="btn" href="#/slownik">Słownik</a></div>
      </div></div>`;
      document.getElementById('again').addEventListener('click', () => { buildQueue(); draw(); });
      return;
    }
    const t = queue[pos];
    const c = card(t);
    const box = store.leitner(t.id).box;
    main.innerHTML = `
      <div class="page">
        <h1>Ćwiczenie nazw z egzaminu</h1>
        <p class="page-lead">Na egzaminie liczą się nazwy z polskiego arkusza, a w pracy – oryginalne nazwy angielskie. Ćwicz w obie strony.</p>
        <div class="set-seg set-seg-2" role="group" aria-label="Kierunek" style="max-width:420px;margin-bottom:12px">
          <button data-dir="pl" aria-pressed="${dir === 'pl'}">EN → egzamin PL</button><button data-dir="en" aria-pressed="${dir === 'en'}">egzamin PL → EN</button></div>
        ${termPool(unitsAll, questionsAll).length ? `<div class="btn-row" style="margin-bottom:12px"><button class="btn" id="writeEn">✍️ Wpisz nazwy po angielsku (${termPool(unitsAll, questionsAll).length} ćwiczeń z poznanych pojęć)</button></div>` : ''}
        <div class="btn-row" style="margin-bottom:16px">
          <button class="flag-btn" id="trapOnly" aria-pressed="${onlyTraps}">⚠ Tylko pułapki (${traps.length})</button>
          <span class="muted small">Karta ${pos + 1} z ${queue.length} · pudełko ${box}/5</span>
        </div>
        <div class="card flash">
          <div class="prompt">${esc(c.prompt.label)}</div>
          <div class="big">${esc(c.prompt.value)}</div>
          <div class="prompt">${esc(c.ask)}</div>
          <ul class="options" role="list">
            ${c.options.map((o, i) => `<li><button class="option" data-i="${i}"><span class="key">${'ABCD'[i]}</span><span>${esc(o)}</span></button></li>`).join('')}
          </ul>
          <div id="fb" aria-live="polite"></div>
          <div class="boxes" aria-label="Pudełka Leitnera">${[1, 2, 3, 4, 5].map((b) => `<span class="box" ${b === box ? 'style="background:var(--accent);color:var(--accent-text)"' : ''}>${b}</span>`).join('')}</div>
        </div>
      </div>`;
    main.querySelectorAll('[data-dir]').forEach((b) => b.addEventListener('click', () => { dir = b.dataset.dir; buildQueue(); draw(); }));
    document.getElementById('writeEn')?.addEventListener('click', () => {
      const qs = termQueue(unitsAll, questionsAll, 10);
      main.innerHTML = '<div class="page page-narrow"><h1>Nazwy po angielsku</h1><p class="page-lead">Wpisz oryginalną nazwę ISACA albo popraw zły termin. Pomyłki wrócą w powtórkach.</p><div id="seqArea"></div><div class="btn-row" style="margin-top:16px"><button class="btn btn-lg" id="seqBack">← Wróć do ćwiczenia nazw</button></div></div>';
      document.getElementById('seqBack').addEventListener('click', () => { buildQueue(); draw(); });
      if (!qs.length) { document.getElementById('seqArea').innerHTML = '<p class="muted">Na dziś wszystko utrwalone – wróć za dwa dni.</p>'; return; }
      runSequence(document.getElementById('seqArea'), qs, { title: 'Nazwy po angielsku' });
    });
    document.getElementById('trapOnly').addEventListener('click', () => {
      if (!traps.length) return toast('Brak terminów oznaczonych jako pułapka');
      onlyTraps = !onlyTraps; buildQueue(); draw();
    });
    main.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      const pick = +b.dataset.i;
      const ok = pick === c.correct;
      if (ok) score++;
      store.leitnerAnswer(t.id, ok);
      main.querySelectorAll('.option').forEach((x) => {
        x.disabled = true;
        if (+x.dataset.i === c.correct) x.classList.add('correct');
        else if (+x.dataset.i === pick) x.classList.add('wrong');
      });
      document.getElementById('fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}" style="text-align:left">
        <strong>${esc(t.plEgzamin)}</strong> = ${esc(t.en || '')}${t.plPodrecznik ? ` = „${esc(t.plPodrecznik)}” (podręcznik)` : ''}.
        ${t.niepotwierdzone ? '<div class="small" style="margin-top:6px"><span class="pill pill-draft">do potwierdzenia</span> Tej nazwy nie widzieliśmy w oficjalnym arkuszu.</div>' : ''}
        ${t.egzamin ? `<div class="small" style="margin-top:6px">${esc(t.egzamin.replace(/\*\*/g, ''))}</div>` : ''}
        <div class="btn-row" style="margin-top:10px"><button class="btn btn-primary" id="nextCard">Dalej →</button>
        ${t.termId || termMap.has(t.id) ? `<a class="btn btn-ghost" href="#/slownik/${esc(t.termId || t.id)}">Pełny przypis</a>` : ''}</div></div>`;
      const nb = document.getElementById('nextCard');
      nb.focus();
      nb.addEventListener('click', () => { pos++; draw(); });
    }));
  }

  buildQueue();
  draw();
}
