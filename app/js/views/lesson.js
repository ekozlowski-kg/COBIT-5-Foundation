// Widok lekcji: nawigacja | kanwa slajdu | sidebar przypisów. Ten sam widok obsługuje tryb prezentacji.
import * as C from '../content.js';
import { esc, render, termIdsInOrder } from '../md.js';
import { store, prefs, isLaik } from '../store.js';
import { renderQuestion } from '../quiz.js';
import { termDetail, bindTermDetail, statusPill, trapPill, bindFlags, toast, poLudzku, depthLadder, bindLadder, explainDetailed, compassHTML, explainSections, sourceText } from '../ui.js';
import { mapSnippet } from '../maptree.js';
import { questionsForUnits } from '../progress.js';

// Tryb skupienia (2026-11-08, „uwaga jest rozproszona”): w lekcji tylko treść i pytania „Sprawdź”.
const SKUPIENIE = true;

const CHOICE = new Set(['rozpoznanie', 'egzamin', 'studium', 'mapa', 'klasyfikacja', 'dopasowanie', 'bledy', 'kolejnosc']);

// 1–2 pytania z wcześniejszych lekcji: najpierw zaległe w powtórkach (hasła z błędami), potem najsłabsze, potem nierozwiązane.
export function pickEarlier(allUnits, idx, questions, exclude, n = 2) {
  const st = store.get();
  const earlier = allUnits.slice(0, idx).flatMap((u) => u.cwiczenia).map((id) => questions.get(id)).filter((q) => q && !q.pretest && CHOICE.has(q.typ) && !exclude.has(q.id));
  if (!earlier.length) return [];
  const score = (q) => {
    const a = st.answers[q.id];
    const due = C.termsOfQuestion(q).some((t) => st.mistakes[t] > 0) && !(a && a.lastCorrect);
    if (due) return 0;
    if (a && !a.lastCorrect) return 1;
    const codes = Array.isArray(q.sylabus) ? q.sylabus : [];
    const r = codes.map((c) => st.syllabus[c]).filter(Boolean);
    const weak = r.length ? r.reduce((x, y) => x + y.ok / y.total, 0) / r.length : 1;
    if (!a) return 2 + weak;
    return 3 + weak;
  };
  return earlier.map((q) => ({ q, s: score(q) + Math.random() * 0.01 })).sort((a, b) => a.s - b.s).slice(0, n).map((x) => x.q);
}

// Powtórka przed bramką: od pierwszego slajdu (lekcja jest krótka; „Sprawdź” jest na końcu).
const slidesStartOfCheck = () => 1;

const narrow = () => window.matchMedia('(max-width: 980px)').matches;

export async function renderLesson(main, unitId, { slide = null, present = false } = {}) {
  const [lesson, terms, questions, allUnits, m, prog, syl, registry, dayList] = await Promise.all([C.lesson(unitId), C.terms(), C.questions(), C.units(), C.mapa(), C.progi(), C.syllabus(), C.zrodla(), C.days()]);
  const sylTitle = new Map(((syl && syl.tematy) || []).map((t) => [t.kod, t.tytul]));
  const unit = lesson.unit;
  if (unit.modul.kod === 'FN' && !store.get().exams.some((e) => e.name === 'Sample Paper 1')) {
    main.innerHTML = `<div class="page page-narrow"><h1>${esc(unit.tytul)}</h1><p class="page-lead">🔒 Finał odblokuje się po pierwszym podejściu do Sample Paper 1. Najpierw próbny egzamin na nieznanych pytaniach – to jedyny niezależny pomiar.</p>
      <div class="btn-row"><a class="btn btn-lg" href="#/">← Wróć na Start</a><a class="btn btn-primary btn-lg" href="#/egzamin">Centrum egzaminacyjne →</a></div></div>`;
    return null;
  }
  // Kolejność NAUKI (dzień, potem dotychczasowy porządek) – od niej zależą „wcześniejsze lekcje”, powtórki i „Następna jednostka”.
  // Bez tego moduł IT0 (dzień 0) stał na końcu listy modułów, a jego lekcje dostawały pytania z całego kursu.
  const course = allUnits.map((u, i) => ({ u, i })).sort((a, b) => ((typeof a.u.dzien === 'number' ? a.u.dzien : 99) - (typeof b.u.dzien === 'number' ? b.u.dzien : 99)) || a.i - b.i).map((x) => x.u);
  const idx = course.findIndex((u) => u.id === unitId);
  const prevUnit = course[idx - 1];
  const nextUnit = course[idx + 1];

  // Cykl jednostki (METODYKA §1): Zgadnij → treść (po slajdzie `mapa` pytanie „gdzie to leży?”) → ćwiczenia → powtórka z wcześniejszych lekcji.
  const mapQFor = (nid) => {
    if (!nid || !m.ok) return null;
    const manual = [...questions.values()].find((q) => q.typ === 'mapa' && !q.wygenerowane && q.poprawny && m.nodes.get(nid)?.rodzic === q.poprawny);
    if (manual) return manual;
    const term = [...terms.values()].find((t) => t.mapa === nid);
    return (term && questions.get(`gen-mapa-${term.id}`)) || C.generateMapQuestion(m, nid, {});
  };
  const slides = [];
  unit.zgadnij.forEach((qid, k) => slides.push({ kind: 'pretest', q: questions.get(qid), qid, label: `Rozgrzewka: zgadnij · ${k + 1} z ${unit.zgadnij.length}` }));
  for (const s of lesson.slides) {
    slides.push({ ...s, kind: 'content' });
    if (s.typ === 'mapa') {
      const nid = (s.md.match(/^:::mapa\s+(\S+)/m) || [])[1];
      const mq = SKUPIENIE ? null : mapQFor(nid);
      if (mq) slides.push({ kind: 'quiz', q: mq, qid: mq.id, label: 'Gdzie to leży?' });
    }
  }
  const diff = (qid) => { const q = questions.get(qid); return q && typeof q.trudnosc === 'number' ? q.trudnosc : 2; };
  const checks = [...unit.cwiczenia].sort((a, b) => diff(a) - diff(b));
  checks.forEach((qid, k) => slides.push({ kind: 'quiz', q: questions.get(qid), qid, label: `Sprawdź · ${k + 1} z ${checks.length}`, check: true }));
  // §12.3 – rytm skrajności. (1) W „Sprawdź” jedno pytanie skrajne, jeśli lekcja wprowadza atom, który je ma.
  // Tylko pojęcia WPROWADZONE w lekcji (wprowadza + wprowadzaListe), nie każde wspomniane w przypisie –
  // inaczej lekcja dnia 0 z zapowiedzią [[…]] dostaje pytania skrajne o pojęciach, których laik jeszcze nie zna (zasada zera, §10).
  const lessonTerms = new Set(unit.wprowadza);
  const extremeAll = [...questions.values()].filter((q) => q.skrajnosc && q.atom && !q.pretest);
  {
    const inSlides = new Set(slides.map((x) => x.qid));
    const cand = extremeAll.filter((q) => lessonTerms.has(q.atom) && !inSlides.has(q.id));
    const pickE = cand.find((q) => !(store.answer(q.id) || {}).lastMastered) || cand[0];
    if (pickE && !SKUPIENIE && !slides.some((x) => x.q && x.q.skrajnosc)) {
      const at = slides.map((x) => x.check).lastIndexOf(true);
      slides.splice(at >= 0 ? at + 1 : slides.length, 0, { kind: 'quiz', q: pickE, qid: pickE.id, label: 'Sprawdź · przypadek skrajny', check: true });
    }
  }
  // (2) Co 3 lekcje „Kontrola zagmatwań”: 3 pytania skrajne z wcześniejszych lekcji, przemieszane, bez podpowiedzi.
  if (!SKUPIENIE && (idx + 1) % 3 === 0 && idx > 0) {
    const earlierLessons = await Promise.all(course.slice(0, idx).map((u) => C.lesson(u.id).catch(() => null)));
    const earlierTerms = new Set(earlierLessons.filter(Boolean).flatMap((l) => l.unit.wprowadza || []));
    const inSlides = new Set(slides.map((x) => x.qid));
    const pool = extremeAll.filter((q) => earlierTerms.has(q.atom) && !lessonTerms.has(q.atom) && !inSlides.has(q.id));
    const ranked = pool.map((q) => ({ q, r: ((store.answer(q.id) || {}).lastMastered ? 1 : 0) + Math.random() })).sort((a, b) => a.r - b.r).slice(0, 3).map((x) => x.q);
    ranked.forEach((q, k) => slides.push({ kind: 'quiz', q, qid: q.id, label: `Kontrola zagmatwań · ${k + 1} z ${ranked.length}`, noHints: true }));
  }
  const used = new Set(slides.map((x) => x.qid).filter(Boolean));
  (SKUPIENIE ? [] : pickEarlier(course, idx, questions, used)).forEach((q) => slides.push({ kind: 'quiz', q, qid: q.id, label: 'Powtórka z wcześniejszej lekcji', earlier: true }));
  // §11.5: na koniec samoocena celu „Potrafię…”.
  if (unit.cel && !SKUPIENIE) slides.push({ kind: 'cel', label: 'Co już umiesz' });
  const nContent = lesson.slides.length;
  const dayN = typeof unit.dzien === 'number' ? unit.dzien : 1;
  const conf = C.dayConf(dayList, dayN); // §18.3 – rusztowanie i podpowiedzi z syllabus.dni[]
  const solvedIdx = () => slides.findIndex((x) => x.kind === 'content' && x.typ === 'rozwiazany');
  // Opanowanie (§11.3): ≥ 2/3 poprawnych w „Sprawdź” bez podpowiedzi i bez „Strzelam”.
  const checkRes = new Map();
  let repairAdded = false;
  const fnIds = termIdsInOrder(lesson.slides);
  const fnNum = new Map(fnIds.map((id, i) => [id, i + 1]));

  let cur = slide ?? store.unit(unitId).last ?? 0;
  cur = Math.max(0, Math.min(slides.length - 1, cur));
  let sidebarOpen = false; // przypisy tylko na żądanie – slajd ma pełną uwagę (prezentacyjnie)
  let activeTerm = null;
  let tab = 'wyjasnij';
  let detailTerm = null;   // „Wyjaśnij szczegółowo” (§16.4)
  let curHints = null;     // węzeł podpowiedzi bieżącego pytania (§16.3)
  let lastWrong = null;    // pytanie z ostatnią pomyłką – „Jak to zapamiętać”

  document.body.classList.toggle('presenting', present);

  const termRef = (id, label) => {
    const t = terms.get(id);
    const n = fnNum.get(id) || '';
    if (!t) return `<span class="term" title="Brak w słowniku: ${esc(id)}">${label || esc(id)}</span>`;
    return `<button class="term${t.pulapka ? ' trap' : ''}" data-term="${esc(id)}" data-n="${n}" aria-label="${esc((label ? label.replace(/<[^>]+>/g, '') : t.plEgzamin))} – kliknij, żeby zobaczyć wyjaśnienie">${label || esc(t.plEgzamin)}<i class="q" aria-hidden="true">?</i></button>`;
  };

  // ---------- Szkielet: tryb nauki (minimalistyczny) ----------
  // Na kanwie jedna myśl slajdu; tabele, kolejne przykłady, źródła, wykładowca i pytania uczestników – w panelu „Szczegóły”.
  const shortMod = (unit.modul.tytul || '').replace(/\s*\([^)]*\)\s*$/, '');
  main.innerHTML = `
    <div class="lesson learn sidebar-closed" id="lessonRoot">
      <section class="stage" aria-label="Lekcja">
        <header class="learn-head">
          <a class="icon-btn learn-exit" href="#/" title="Wróć na Start (postęp jest zapisany)" aria-label="Zamknij lekcję i wróć na Start">✕</a>
          <div class="learn-title"><span class="learn-mod">${esc(shortMod)}${unit.nr ? ` · ${esc(unit.nr)}` : ''}</span><strong>${esc(unit.tytul)}</strong></div>
          <button class="icon-btn learn-det" id="sbToggle" aria-pressed="false">Szczegóły</button>
        </header>
        <div class="learn-prog" aria-hidden="true"><span id="pbar"></span></div>
        <div class="gate" id="gate" hidden></div>
        <div class="canvas" id="canvas" role="region" aria-roledescription="slajd" aria-label="Slajd">
          <div class="slide-meta" id="slideMeta"></div>
          <div class="slide-body" id="slideBody"></div>
          <div class="simpler" id="simpler" hidden aria-live="polite"></div>
        </div>
        <div class="slide-foot">
          <button class="btn btn-lg" id="prevBtn">← Wstecz</button>
          <div class="dots" id="dots"></div>
          <button class="btn btn-primary btn-lg" id="nextBtn">Dalej →</button>
        </div>
      </section>
      <aside class="sidebar" id="sidebar" aria-label="Szczegóły slajdu">
        <div class="sb-head">
          <div class="sb-title"><span>Szczegóły tego slajdu</span>
            <button class="btn" id="sbClose">Zamknij</button></div>
          <div class="sb-actions"><div class="flags" id="flags"></div>${'speechSynthesis' in window ? '<button class="flag-btn" id="readBtn">🔊 Przeczytaj mi</button>' : ''}</div>
          <div class="tabs" role="tablist">
            ${[['wyjasnij', 'Szczegóły'], ['wykladowca', 'Wykładowca'], ['terminy', 'Terminy'], ['zrodla', 'Źródła'], ['podpowiedz', 'Podpowiedź']]
              .map(([k, l]) => `<button class="tab" role="tab" data-tab="${k}" aria-selected="${k === tab}">${l}</button>`).join('')}
          </div>
        </div>
        <div class="sb-body" id="sbBody"></div>
        <div class="sb-foot"><button class="btn btn-primary" id="sbClose2">Zamknij</button></div>
      </aside>
    </div>`;
  document.body.classList.add('learning');

  const $ = (id) => document.getElementById(id);
  const root = $('lessonRoot');

  // ---------- Sidebar ----------
  function setSidebar(open) {
    sidebarOpen = open;
    root.classList.toggle('sidebar-closed', !open);
    $('sbToggle').setAttribute('aria-pressed', String(open));
  }

  function openTerm(id) {
    activeTerm = id;
    detailTerm = null;
    tab = 'terminy';
    if (!sidebarOpen) setSidebar(true);
    renderSidebar();
    document.querySelectorAll('.term').forEach((b) => b.classList.toggle('active', b.dataset.term === id));
    $('sidebar').scrollTop = 0;
  }

  function renderSidebar() {
    document.querySelectorAll('.tab').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === tab)));
    const body = $('sbBody');
    const sNow = slides[cur] || {};
    const isQ = sNow.kind !== 'content';
    document.querySelectorAll('.tab').forEach((b) => { b.hidden = b.dataset.tab === 'podpowiedz' ? !isQ : false; });
    if (tab === 'podpowiedz' && !isQ) tab = 'wyjasnij';
    document.querySelectorAll('.tab').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === tab)));
    if (tab === 'podpowiedz') { renderHint(body); return; }
    if (tab === 'wyjasnij') { renderExplain(body); return; }
    if (tab === 'wykladowca') { renderLecturer(body); return; }
    if (tab === 'zrodla') { renderSources(body); return; }
    if (tab === 'terminy') {
      if (!activeTerm) { renderTermList(body); return; }
      const t = terms.get(activeTerm);
      body.innerHTML = termDetail(t, { num: fnNum.get(activeTerm), terms, ctxStart: store.get().mistakes[activeTerm] || 0, allowExtreme: !isLaik() || store.unit(unitId).mastered === true })
        + (fnNum.has(activeTerm) ? '' : '<p class="small muted">To pojęcie nie występuje w tej lekcji – otwarto je z odnośnika.</p>');
      bindTermDetail(body, t, { onTerm: openTerm });
      body.insertAdjacentHTML('afterbegin', '<button class="btn btn-ghost small" id="backList">← Wszystkie terminy</button>');
      $('backList').addEventListener('click', () => { activeTerm = null; renderSidebar(); });
    } else if (tab === 'lekcja' || tab === 'pulapki') {
      const ids = tab === 'lekcja' ? fnIds : fnIds.filter((id) => terms.get(id)?.pulapka);
      body.innerHTML = ids.length ? `<ul class="fn-list">${ids.map((id) => {
        const t = terms.get(id);
        return `<li><button data-open="${esc(id)}"><span class="fn-num">[${fnNum.get(id)}]</span>
          <strong>${esc(t ? t.plEgzamin : id)}</strong>${t?.pulapka ? trapPill() : '<span></span>'}
          <span class="l1">${t ? esc(t.en || '') + (t.plPodrecznik && t.pulapka ? ` · podręcznik: ${esc(t.plPodrecznik)}` : '') : 'brak w słowniku'}</span></button></li>`;
      }).join('')}</ul>` : `<p class="sb-empty">${tab === 'pulapki' ? 'W tej lekcji nie ma pułapek terminologicznych.' : 'Brak przypisów.'}</p>`;
      body.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.open)));
    } else if (tab === 'slownik') {
      body.innerHTML = `<label class="sr-only" for="sbSearch">Szukaj pojęcia</label>
        <input class="search" id="sbSearch" type="search" placeholder="Szukaj: PL, EN, podręcznik…" autocomplete="off">
        <ul class="fn-list" id="sbResults"></ul>`;
      const inp = $('sbSearch');
      const list = () => {
        const q = inp.value.trim().toLowerCase();
        const res = [...terms.values()].filter((t) => !q || [t.plEgzamin, t.plPodrecznik, t.en, ...(t.plInne || [])].some((x) => x && x.toLowerCase().includes(q)))
          .sort((a, b) => a.plEgzamin.localeCompare(b.plEgzamin, 'pl')).slice(0, 80);
        $('sbResults').innerHTML = res.map((t) => `<li><button data-open="${esc(t.id)}"><span class="fn-num">${fnNum.has(t.id) ? `[${fnNum.get(t.id)}]` : ''}</span>
          <strong>${esc(t.plEgzamin)}</strong>${t.pulapka ? trapPill() : '<span></span>'}<span class="l1">${esc(t.en || '')}</span></button></li>`).join('')
          || '<li class="sb-empty">Brak wyników.</li>';
        $('sbResults').querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.open)));
      };
      inp.addEventListener('input', list);
      list();
      if (!narrow()) inp.focus();
    }
  }

  // §17.7 – „Wyjaśnij mi”: na co zwrócić uwagę, sekcje z :::sb albo z pól haseł, „Wyjaśnij szczegółowo”.
  function renderExplain(body) {
    const s = slides[cur];
    if (detailTerm) { renderHint(body); return; }
    if (!s || s.kind !== 'content') {
      const ids = s && s.q ? C.termsOfQuestion(s.q) : [];
      body.innerHTML = ids.length ? explainSections(null, ids.map((id) => terms.get(id)), { laik: isLaik(), terms }) : '<p class="hint-lead">Najpierw spróbuj sam. Gdy utkniesz – zakładka „Podpowiedź”.</p>';
      body.querySelectorAll('[data-term]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
      return;
    }
    const ids = termIdsInOrder([s]).filter((id) => terms.has(id));
    const moved = detailNodes;
    const secs = explainSections(s, ids.map((id) => terms.get(id)), { laik: isLaik(), terms, render: (x) => render(x, termRef) });
    body.innerHTML = `${s.hint ? `<div class="hint-box"><div class="box-label">Na co zwrócić uwagę</div><p>${inlineRich(s.hint)}</p></div>` : ''}
      ${secs || (s.hint || moved.length ? '' : `<p class="hint-lead">Ten slajd nie ma dodatkowych szczegółów.${s.lecturer ? ' Pełne wyjaśnienie jest w zakładce „Wykładowca”.' : ' Gdy skończysz – „Dalej →”.'}</p>`)}
      ${ids.length ? `<div class="box-label" style="margin-top:18px">Wyjaśnij szczegółowo</div><div class="btn-row">${ids.slice(0, 5).map((id) => `<button class="btn small" data-detail="${esc(id)}">${esc(terms.get(id).plEgzamin)}</button>`).join('')}</div>` : ''}`;
    body.querySelectorAll('[data-detail]').forEach((b) => b.addEventListener('click', () => { detailTerm = b.dataset.detail; renderHint(body); }));
    body.querySelectorAll('[data-term]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
    if (moved.length) {
      const box = document.createElement('div');
      box.className = 'det-moved';
      moved.forEach((n) => box.appendChild(n));
      body.prepend(box);
      if (secs || s.hint) box.insertAdjacentHTML('afterend', '<div class="box-label" style="margin-top:22px">Pojęcia z tego slajdu</div>');
    }
  }

  // §17.5 – warstwa 2: pełny tekst wykładowcy i pytania uczestników.
  function renderLecturer(body) {
    const s = slides[cur];
    const lect = s && s.lecturer;
    const asks = (s && s.asks) || [];
    body.innerHTML = `${lect ? `<div class="lect">${render(lect, termRef)}</div>
        ${$('readBtn') ? '<button class="btn" id="readLect">🔊 Posłuchaj wykładu do tego slajdu</button>' : ''}` : '<p class="hint-lead">Do tego slajdu nie ma jeszcze tekstu wykładowcy.</p>'}
      ${asks.length ? `<div class="box-label" style="margin-top:20px">Pytania uczestników</div>${asks.map((a) => `<div class="hint-box"><p><strong>🙋 ${inlineRich(a.q)}</strong></p><p>${inlineRich(a.a)}</p></div>`).join('')}` : ''}`;
    $('readLect')?.addEventListener('click', readSlide);
    body.querySelectorAll('.term').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
  }

  // §17.9 – przypis rozszerzony: pełny opis źródeł z rejestru (content/zrodla.json).
  function renderSources(body) {
    const s = slides[cur] || {};
    const docs = new Map();
    const add = (doc, where) => { if (!doc) return; const e = docs.get(doc) || new Set(); if (where) e.add(where); docs.set(doc, e); };
    for (const x of s.sources || []) { const [doc, ...rest] = x.split(/\s+/); add(doc, rest.join(' ')); }
    for (const m2 of (s.md || '').matchAll(/^zrodlo:\s*(.+)$/gm)) { const [doc, ...rest] = m2[1].trim().split(/\s+/); add(doc.replace(/,$/, ''), rest.join(' ')); }
    const ids = s.kind === 'content' ? termIdsInOrder([s]) : (s.q ? C.termsOfQuestion(s.q) : []);
    for (const id of ids) for (const z of (terms.get(id)?.zrodla || [])) add(z.doc, z.strona ? `s. ${z.strona}` : '');
    if (s.q && s.q.zrodlo) for (const z of [].concat(s.q.zrodlo)) add(z.doc, z.strona ? `s. ${z.strona}` : '');
    const KAT = { 'publikacja-zrodlowa': 'Publikacja źródłowa', standard: 'Norma', dokumentacja: 'Dokumentacja', literatura: 'Literatura', 'material-dydaktyczny': 'Materiał dydaktyczny' };
    body.innerHTML = docs.size ? [...docs].map(([doc, where]) => {
      const r = registry[doc] || {};
      return `<div class="src-card"><div class="box-label">${esc(KAT[r.kategoria] || 'Źródło')} · ${esc(doc)}</div>
        <p><strong>${esc(r.tytul || doc)}</strong>${r.autor ? ` – ${esc(r.autor)}` : ''}${r.rok ? `, ${esc(String(r.rok))}` : ''}${r.jezyk ? ` (${esc(r.jezyk)})` : ''}</p>
        ${[...where].filter(Boolean).length ? `<p class="small">Miejsce: ${esc([...where].filter(Boolean).join('; '))}</p>` : ''}
        ${r.url ? `<p class="small"><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url)}</a>${r.dostep ? ` (dostęp: ${esc(r.dostep)})` : ''}</p>` : ''}
        ${r.uwaga ? `<p class="small muted">${esc(r.uwaga)}</p>` : ''}</div>`;
    }).join('') : '<p class="hint-lead">Ten slajd nie cytuje źródła – to wyjaśnienie albo przykład kursu.</p>';
  }

  function renderTermList(body) {
    const s = slides[cur] || {};
    const here = (s.kind === 'content' ? termIdsInOrder([s]) : (s.q ? C.termsOfQuestion(s.q) : [])).filter((id) => terms.has(id));
    const row = (t) => `<li><button data-open="${esc(t.id)}"><span class="fn-num"></span><strong>${esc(t.en || t.plEgzamin)}</strong>${t.pulapka ? trapPill() : '<span></span>'}
      <span class="l1">${t.wymowa ? `wym. „${esc(t.wymowa)}” · ` : ''}egzamin PL: ${esc(t.plEgzamin)}</span></button></li>`;
    body.innerHTML = `${here.length ? `<div class="box-label">Na tym slajdzie</div><ul class="fn-list">${here.map((id) => row(terms.get(id))).join('')}</ul>` : ''}
      <div class="box-label" style="margin-top:16px">Wszystkie terminy z lekcji</div><ul class="fn-list">${fnIds.filter((id) => terms.has(id)).map((id) => row(terms.get(id))).join('')}</ul>
      <label class="sr-only" for="sbSearch">Szukaj terminu</label><input class="search" id="sbSearch" type="search" placeholder="Szukaj w słowniku: PL albo EN…" autocomplete="off" style="margin-top:16px">
      <ul class="fn-list" id="sbResults"></ul>`;
    const inp = $('sbSearch');
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase();
      $('sbResults').innerHTML = q ? [...terms.values()].filter((t) => [t.plEgzamin, t.plPodrecznik, t.en].some((x) => x && x.toLowerCase().includes(q))).slice(0, 40).map(row).join('') : '';
      $('sbResults').querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.open)));
    });
    body.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.open)));
  }

  // §16.3 – zakładka „Podpowiedź”: na slajdzie – na co zwrócić uwagę i pojęcia po ludzku; przy pytaniu – stopniowane podpowiedzi,
  // pułapka, której szukać, i słowo-klucz; po pomyłce – jak to zapamiętać.
  function renderHint(body) {
    const s = slides[cur];
    if (detailTerm) {
      const t = terms.get(detailTerm);
      body.innerHTML = `<button class="btn btn-ghost small" id="detailBack">← Wróć do podpowiedzi</button>
        <h3 class="hint-h">Wyjaśnienie krok po kroku: ${esc(t ? t.plEgzamin : detailTerm)}</h3>${explainDetailed(t, terms)}`;
      $('detailBack').addEventListener('click', () => { detailTerm = null; renderHint(body); });
      return;
    }
    const termBlock = (ids) => ids.filter((id) => terms.has(id)).slice(0, 4).map((id) => {
      const t = terms.get(id);
      return `<div class="hint-term"><p><strong>${esc(t.plEgzamin)}</strong> – ${esc(poLudzku(t) || t.poziom1 || '')}</p>
        <button class="btn small" data-detail="${esc(id)}">Wyjaśnij szczegółowo</button></div>`;
    }).join('');
    let html = '';
    if (!s) html = '';
    else if (s.kind === 'pretest') html = '<p class="hint-lead">To tylko rozgrzewka. Zgadnij śmiało – pomyłka teraz pomaga zapamiętać.</p>';
    else if (s.kind === 'content') {
      const tip = s.hint
        || ((s.md.match(/^:::zapamietaj\s*\n([\s\S]*?)^:::\s*$/m) || [])[1] || '').split('\n').find((x) => x.trim()) || '';
      const ids = termIdsInOrder([s]);
      html = `${tip ? `<div class="hint-box"><div class="box-label">Na co zwrócić uwagę</div><p>${inlineRich(tip.trim())}</p></div>` : '<p class="hint-lead">Przeczytaj slajd spokojnie, zdanie po zdaniu. Gdy skończysz – „Dalej →”.</p>'}
        ${ids.length ? `<div class="box-label" style="margin-top:18px">Pojęcia na tym slajdzie</div>${termBlock(ids)}` : ''}`;
    } else if (s.q) {
      const q = s.q;
      const kw = (q.tresc || '').match(/\b(NIE|NAJLEPIEJ|NAJLEPSZ\w*|NAJWAŻNIEJSZ\w*|NAJCZĘŚCIEJ|ZAWSZE|NIGDY|GŁÓWN\w*|NAJPIERW|PIERWSZ\w*|NAJMNIEJ\w*)\b/);
      const codes = Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : [];
      const cnt = {};
      for (const x of questions.values()) {
        const xc = Array.isArray(x.sylabus) ? x.sylabus : x.sylabus ? [x.sylabus] : [];
        if (!xc.some((c) => codes.includes(c))) continue;
        for (const o of x.opcje || []) if (!o.poprawna && o.pulapka) cnt[o.pulapka] = (cnt[o.pulapka] || 0) + 1;
      }
      const topTrap = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0];
      html = `${s.noHints ? '<p class="hint-lead">Ta kontrola jest bez podpowiedzi – sprawdzamy, co zostało w pamięci.</p>' : '<div class="box-label">Podpowiedzi krok po kroku</div><div id="hintSlot"></div>'}
        ${kw ? `<div class="hint-box"><div class="box-label">Słowo-klucz</div><p>W pytaniu jest <strong>„${esc(kw[1])}”</strong>. ${kw[1] === 'NIE' ? 'Szukasz zdania, które jest <strong>nieprawdziwe</strong> albo nie pasuje.' : 'Przeczytaj pytanie jeszcze raz z naciskiem na to słowo.'}</p></div>` : ''}
        ${topTrap && !s.noHints ? `<div class="hint-box"><div class="box-label">Pułapka, której szukaj</div><p>W tym temacie najczęściej kusi odpowiedź typu <strong>„${esc((C.PULAPKI && C.PULAPKI[topTrap[0]]) || topTrap[0])}”</strong>.</p></div>` : ''}
        ${lastWrong === q ? `<div class="hint-box hint-wrong"><div class="box-label">Jak to zapamiętać</div>${C.termsOfQuestion(q).filter((id) => terms.has(id)).slice(0, 2).map((id) => {
          const t = terms.get(id);
          const z = (t.zagmatwania || [])[0];
          const life = (t.przyklady && t.przyklady.zycie) || (t.glebokosc && t.glebokosc.prosty);
          return `<p><strong>${esc(t.plEgzamin)}:</strong> ${z ? `ludzie myślą „${esc(z.mit)}”, a naprawdę ${inlineRich(z.prawda)}` : esc(poLudzku(t) || '')}</p>${life ? `<p class="small"><span class="muted">W życiu:</span> ${inlineRich(life)}</p>` : ''}`;
        }).join('')}</div>` : ''}`;
    }
    body.innerHTML = html || '<p class="hint-lead">Tu pojawią się podpowiedzi do bieżącego slajdu.</p>';
    if (curHints && $('hintSlot')) $('hintSlot').appendChild(curHints);
    body.querySelectorAll('[data-detail]').forEach((b) => b.addEventListener('click', () => { detailTerm = b.dataset.detail; renderHint(body); }));
    body.querySelectorAll('.term').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
  }

  document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; detailTerm = null; renderSidebar(); }));
  const defaultTab = () => {
    const sNow = slides[cur] || {};
    if (sNow.kind !== 'content') return 'podpowiedz';
    // Panel otwiera się tam, gdzie coś jest: przeniesione elementy → „Szczegóły”; sam tekst wykładowcy → „Wykładowca”.
    return !detailNodes.length && !sNow.hint && sNow.lecturer ? 'wykladowca' : 'wyjasnij';
  };
  const openHint = () => { tab = defaultTab(); detailTerm = null; $('sbToggle').classList.remove('pulse'); renderSidebar(); setSidebar(true); };
  $('sbToggle').addEventListener('click', () => { if (sidebarOpen) setSidebar(false); else openHint(); });
  $('sbClose').addEventListener('click', () => setSidebar(false));
  $('sbClose2').addEventListener('click', () => setSidebar(false));

  // ---------- „Własnymi słowami” (METODYKA §1 krok 5) ----------
  function bindOwn(el, s) {
    const key = `own:${unitId}:${cur}`;
    const f = store.flag(key);
    const ta = el.querySelector('.own-text');
    const model = el.querySelector('.own-model');
    const self = el.querySelector('.own-self');
    const hint = el.querySelector('.own-hint');
    const result = el.querySelector('.own-result');
    // Hasła slajdu; gdy slajd nie ma przypisów – główne pojęcie lekcji (pierwszy przypis).
    const own = termIdsInOrder([s]);
    const slideTerms = own.length ? own : fnIds.slice(0, 1);
    ta.value = f.notatka || '';
    let t;
    ta.addEventListener('input', () => { hint.textContent = ''; clearTimeout(t); t = setTimeout(() => store.setNote(key, ta.value), 400); });
    const reveal = () => { model.hidden = false; self.hidden = false; };
    const mark = (v) => {
      self.querySelectorAll('[data-self]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.self === v)));
      result.textContent = v === 'mam' ? 'Świetnie – idziemy dalej.'
        : `Dodano do powtórek: ${slideTerms.map((id) => terms.get(id)?.plEgzamin || id).join(', ') || 'ten slajd'}. Odpowiedź jest w Notatkach.`;
    };
    if (f.samoocena) { reveal(); mark(f.samoocena); }
    el.querySelector('.own-show').addEventListener('click', () => {
      if (!ta.value.trim()) { hint.textContent = 'Najpierw spróbuj napisać coś z pamięci – choćby jedno zdanie.'; ta.focus(); return; }
      store.setNote(key, ta.value);
      reveal();
    });
    self.querySelectorAll('[data-self]').forEach((b) => b.addEventListener('click', () => {
      const v = b.dataset.self;
      const prev = store.flag(key).samoocena;
      store.setNote(key, ta.value);
      store.setFlag(key, 'samoocena', v);
      if (v !== 'mam' && (!prev || prev === 'mam')) {
        slideTerms.forEach((id) => store.addMistake(id));
        store.setFlag(key, 'powtorka', true);
      }
      mark(v);
    }));
  }

  // ---------- Rozwiązany przykład (§10.5): kroki odsłaniane po kolei ----------
  // §11.2 – rusztowanie się wycofuje: dzień 1 kroki po kolei; dzień 2 „Twoja kolej”; od dnia 3 zwinięty.
  function bindSolved(el) {
    const steps = [...el.querySelectorAll('.solved-step')];
    const btn = el.querySelector('.solved-next');
    const hint = el.querySelector('.solved-hint');
    let k = 0;
    if (conf.rusztowanie === 'zwiniety') {
      el.hidden = true;
      const open = document.createElement('button');
      open.className = 'btn solved-open';
      open.textContent = 'Potrzebujesz przykładu? Pokaż rozwiązane pytanie';
      open.addEventListener('click', () => { el.hidden = false; open.remove(); });
      el.before(open);
    }
    const yourTurn = conf.rusztowanie === 'twoja-kolej';
    let thinking = false;
    const upd = () => {
      if (k >= steps.length) { btn.hidden = true; hint.textContent = 'To cały tok rozumowania – tak samo rozwiązuj pytania w „Sprawdź”.'; return; }
      if (yourTurn && !thinking) { btn.textContent = k === steps.length - 1 ? 'Mam swoją odpowiedź – pokaż' : 'Mam swoją odpowiedź – pokaż krok'; hint.textContent = `Twoja kolej: jak myślisz, co tu zrobić${k === steps.length - 1 ? ' – która odpowiedź' : ` w kroku ${k + 1}`}?`; return; }
      btn.textContent = k === steps.length - 1 ? 'Pokaż odpowiedź →' : 'Następny krok →';
    };
    btn.addEventListener('click', () => {
      if (k < steps.length) { steps[k].hidden = false; steps[k].classList.add('enter'); k++; hint.textContent = ''; }
      upd();
    });
    if (!steps.length) { btn.hidden = true; hint.textContent = ''; }
    upd();
  }

  // ---------- Prowadzenie za rączkę (§10.2 / §10.4) ----------
  function enhanceSlide(body, s) {
    const ids = termIdsInOrder([s]);
    // §16.1 – „Jesteś tu” na kompasie wielkiego obrazu (pierwszy slajd treści).
    if (unit.wielkiObraz && s === slides.find((x) => x.kind === 'content')) {
      body.insertAdjacentHTML('beforeend', `<div class="compass-wrap"><div class="box-label">O co naprawdę chodzi w COBIT 5</div>${compassHTML(C.COMPASS, { here: unit.wielkiObraz, compact: true })}</div>`);
    }
    if (unit.cel && s === slides.find((x) => x.kind === 'content')) {
      body.insertAdjacentHTML('beforeend', `<p class="goal"><span class="box-label">Po tej lekcji</span>${inlineRich(unit.cel)}</p>`);
    }
    // Slajd „pojecie”: najpierw po ludzku, potem nazwa egzaminacyjna; „skąd ta nazwa” w części rozwijanej.
    if (s.typ === 'pojecie') {
      const t = terms.get(ids[0]);
      if (t && poLudzku(t) && !SKUPIENIE) { // w skupieniu slajd sam podaje definicję po ludzku
        body.insertAdjacentHTML('afterbegin', `<p class="po-ludzku"><span class="box-label">Po ludzku</span>${inlineRich(poLudzku(t))}</p>`);
      }
      if (t && t.skadNazwa) {
        body.insertAdjacentHTML('beforeend', `<details class="fn-sec skad"><summary>Skąd nazwa „${esc(t.plEgzamin)}”?</summary><div class="sec-body">${inlineRich(t.skadNazwa)}</div></details>`);
      }
    }
    // Konteksty: widać pierwszy; kolejne pod „Pokaż inny przykład”. Po powtarzających się pomyłkach – rozwinięte automatycznie.
    const ctx = [...body.querySelectorAll(':scope > .box-ctx')];
    if (ctx.length > 1) {
      const worst = Math.max(0, ...ids.map((id) => store.get().mistakes[id] || 0));
      let shown = Math.min(ctx.length, 1 + Math.floor(worst / prog.powtorzonaPomylka));
      ctx.forEach((c, i) => { c.hidden = i >= shown; });
      if (shown > 1) ctx[shown - 1].insertAdjacentHTML('afterbegin', '<p class="small muted auto-ctx">Ten przykład pokazujemy, bo to pojęcie sprawiało Ci kłopot.</p>');
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost small ctx-more';
      const label = () => { btn.textContent = `Pokaż inny przykład (${ctx.length - shown}) →`; btn.hidden = shown >= ctx.length; };
      label();
      btn.addEventListener('click', () => { ctx[shown].hidden = false; ctx[shown].classList.add('enter'); shown++; label(); });
      ctx[ctx.length - 1].after(btn);
    }
  }
  // Tryb nauki: elementy drugorzędne przenosimy z kanwy do panelu „Szczegóły” (węzły, więc zachowują obsługę kliknięć).
  // Jeśli po przeniesieniu na slajdzie nie zostałaby żadna treść, pierwszy element zostaje na kanwie.
  let detailNodes = [];
  const DETAIL_SEL = ':scope > .box-ctx, :scope > .progresja, :scope > .depth, :scope > details.pq, :scope > .box-simple, :scope > .box-exam, :scope > .compass-wrap, :scope > .goal, :scope > details.skad, :scope > .teza, :scope > .box:not(.box-remember):not(.box-trap):not(.box-ctx)';
  const MAIN_SEL = ':scope > p:not(.wniosek), :scope > ul, :scope > ol, :scope > blockquote, :scope > .atom, :scope > .solved, :scope > .own, :scope > .map-snippet, :scope > .box-remember, :scope > .box-trap, :scope > .po-ludzku';
  function collectDetails(body) {
    body.querySelectorAll(':scope > .ctx-more, :scope > .teza-next, :scope > .box-ctx[data-ctx="psp"]').forEach((x) => x.remove());
    // Źródła: jedna stopka pod slajdem (bez powtórzeń), żeby było widać, skąd jest treść.
    const srcs = [...body.querySelectorAll(':scope > p.src')];
    if (srcs.length) {
      const uniq = [...new Set(srcs.map((x) => x.textContent.replace(/^Źródło:\s*/, '').trim()))];
      srcs.forEach((x) => x.remove());
      body.insertAdjacentHTML('beforeend', `<p class="src-foot">Źródło: ${uniq.map(esc).join(' · ')}</p>`);
    }
    let cand = [...body.querySelectorAll(DETAIL_SEL)];
    const ctx = cand.filter((x) => x.classList.contains('box-ctx'));
    if (ctx.length) cand = cand.filter((x) => x !== ctx[0]); // pierwszy przykład zostaje na slajdzie
    const mainLeft = [...body.querySelectorAll(MAIN_SEL)].filter((x) => !cand.includes(x));
    if (!mainLeft.length && cand.length) cand = cand.slice(1);
    cand.forEach((x) => { x.remove(); x.hidden = false; });
    detailNodes = cand;
  }
  const inlineRich = (text) => render(text, termRef).replace(/^<p>|<\/p>$/g, '');

  // „Nie rozumiem” → cofamy się do prostszego wyjaśnienia pojęć ze slajdu.
  function simpler(s) {
    const box = $('simpler');
    const ids = (s.kind === 'content' ? termIdsInOrder([s]) : (s.q ? C.termsOfQuestion(s.q) : [])).filter((id) => terms.has(id));
    const list = ids.length ? ids : fnIds.slice(0, 1);
    if (!list.length) { box.innerHTML = '<p class="small muted">Oznaczone – wrócimy do tego slajdu w Powtórkach.</p>'; return; }
    box.innerHTML = `<div class="box-label">Spróbujmy prościej</div>` + list.slice(0, 3).map((id) => {
      const t = terms.get(id);
      const ex = t.przyklady && (t.przyklady.zycie || t.przyklady.firma || Object.values(t.przyklady)[0]);
      return `<div class="simpler-item"><p><strong>${esc(t.plEgzamin)}</strong> – ${inlineRich(poLudzku(t) || t.poziom1 || '')}</p>
        ${ex ? `<p class="small"><span class="muted">Na przykład:</span> ${inlineRich(ex)}</p>` : ''}
        <button class="btn btn-ghost small" data-open-term="${esc(id)}">Więcej o „${esc(t.plEgzamin)}” →</button></div>`;
    }).join('') + '<p class="small muted" style="margin:6px 0 0">Slajd trafił też do Powtórek. Jeśli dalej nie jest jasne – kliknij pojęcie w treści i przełącz na „Prościej”.</p>';
    box.hidden = false;
    box.querySelectorAll('[data-open-term]').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.openTerm)));
    box.querySelectorAll('.term').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
  }

  // „Gdzie to leży?” – temat sylabusa i ścieżka na mapie (§11.2, podpowiedź 1).
  function hintWhere(q) {
    const parts = [];
    const codes = Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : [];
    const tt = codes.map((c) => sylTitle.get(c)).filter(Boolean);
    if (tt.length) parts.push(`temat: ${esc(tt[0])}`);
    const t = C.termsOfQuestion(q).map((id) => terms.get(id)).find((x) => x && x.mapa && m.ok && m.nodes.has(x.mapa));
    if (t) parts.push(`na mapie: ${esc(m.path(t.mapa))}`);
    return parts.join(' · ') || null;
  }

  // Pętla naprawcza (§11.3): po „Sprawdź” poniżej 2/3 – kolejny kontekst i pytania zapasowe; potem dalej.
  function evaluateMastery() {
    const n = slides.filter((x) => x.check).length;
    if (!n || checkRes.size < n) return;
    const ok = [...checkRes.values()].filter(Boolean).length;
    const mastered = ok >= Math.ceil((2 * n) / 3);
    store.setUnitMastery(unitId, mastered);
    if (mastered || repairAdded) return;
    repairAdded = true;
    store.setFlag(`naprawa-lekcja:${unitId}`, 'powtorka', true);
    const used2 = new Set(slides.map((x) => x.qid).filter(Boolean));
    let spare = unit.zapas.map((id) => questions.get(id)).filter(Boolean);
    if (spare.length < 2) spare = [...spare, ...questionsForUnits([unit], questions).filter((q) => !used2.has(q.id) && !spare.includes(q))].slice(0, 2);
    const ids = (unit.wprowadza.length ? unit.wprowadza : fnIds).filter((id) => terms.has(id)).slice(0, 2);
    const html = `<h2>Spróbujmy jeszcze raz – inaczej</h2>
      <p class="muted">Poszło ${ok} z ${n}. To normalne. Zobacz to samo z innej strony, a potem ${spare.length ? `${spare.length} pytania` : 'idziemy dalej'}.</p>
      ${ids.map((id) => {
        const t = terms.get(id);
        const ctxKeys = Object.keys(t.przyklady || {});
        const ex = ctxKeys.length ? t.przyklady[ctxKeys[(store.get().mistakes[id] || 1) % ctxKeys.length]] : '';
        return `<div class="simpler-item"><p><strong>${esc(t.plEgzamin)}</strong> – ${inlineRich(poLudzku(t) || t.poziom1 || '')}</p>${ex ? `<p><span class="muted">Na przykład:</span> ${inlineRich(ex)}</p>` : ''}</div>`;
      }).join('')}
      <p class="small muted">Niezależnie od wyniku pójdziesz dalej, a ta lekcja wróci jutro na początku dnia.</p>`;
    const at = cur + 1;
    const add = [{ kind: 'repair', label: 'Pętla naprawcza', html }, ...spare.map((q, k) => ({ kind: 'quiz', q, qid: q.id, label: `Pętla naprawcza · pytanie ${k + 1} z ${spare.length}` }))];
    slides.splice(at, 0, ...add);
    renderDots();
  }

  // „Przeczytaj mi” (§11.5, §16.5) – syntezator mowy przeglądarki, głos polski.
  let reading = false;
  function stopReading() {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel(); reading = false;
    if ($('readBtn')) $('readBtn').textContent = '🔊 Przeczytaj mi';
  }
  function readSlide() {
    if (reading) { stopReading(); return; }
    const sNow = slides[cur] || {};
    let text;
    if (sNow.lecturer) text = sNow.lecturer.replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1').replace(/\[\[([^\]]+)\]\]/g, (x, id) => (terms.get(id) || {}).plEgzamin || id).replace(/[*_#>`]/g, '');
    else {
      const body = $('slideBody').cloneNode(true);
      body.querySelectorAll('[hidden], .src, .q, button.btn').forEach((x) => x.remove());
      text = body.innerText;
    }
    text = text.replace(/\s+/g, ' ').trim();
    if (!text) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'pl-PL';
    const v = speechSynthesis.getVoices().find((x) => /^pl/i.test(x.lang));
    if (v) u.voice = v;
    u.rate = 0.95;
    u.onend = () => stopReading();
    speechSynthesis.speak(u);
    reading = true;
    $('readBtn').textContent = '⏹ Zatrzymaj czytanie';
  }

  function renderDots() {
    // Bez małych kropek do klikania (§14): pasek postępu i licznik słowami.
    $('dots').innerHTML = `<span class="lcount">${cur + 1} / ${slides.length}</span>`;
    if ($('pbar')) $('pbar').style.width = `${((cur + 1) / slides.length) * 100}%`;
  }

  // ---------- Slajdy ----------
  let initialized = false;
  function show(i, { focus = false } = {}) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    curHints = null; lastWrong = null; detailTerm = null; detailNodes = [];
    if (cur > 0 && $('gate')) $('gate').hidden = true; // przypomnienie o poprzedniej lekcji tylko na początku
    $('sbToggle').classList.remove('pulse');
    stopReading();
    const s = slides[cur];
    const meta = $('slideMeta');
    const body = $('slideBody');
    if (s.kind === 'pretest') {
      meta.innerHTML = `<span class="slide-kind">Rozgrzewka · zgadnij śmiało, to się nie liczy</span>`;
      if (!s.q) body.innerHTML = `<p class="muted">Brak pytania <code>${esc(s.qid)}</code>.</p>`;
      else {
        body.innerHTML = `<div id="pq"></div>`;
        renderQuestion(body.querySelector('#pq'), s.q, { pretest: true, termRef, onTerm: openTerm });
      }
    } else if (s.kind === 'content') {
      const hasTrap = s.typ === 'pulapka' || /^:::pulapka/m.test(s.md);
      const hasSimple = /^:::uproszczenie/m.test(s.md);
      const hasOfficial = s.sources.some((x) => /^(FW-PL|SYL|SP1)\b/.test(x));
      meta.innerHTML = SKUPIENIE ? (hasTrap ? trapPill() : '') : `${C.SLIDE_KIND[s.typ] ? `<span class="slide-kind">${esc(C.SLIDE_KIND[s.typ])}</span>` : ''}
        ${hasOfficial ? statusPill('oficjalne') : ''}${hasSimple ? statusPill('uproszczenie') : ''}${hasTrap ? trapPill() : ''}
`;
      body.innerHTML = render(s.md, termRef);
      body.querySelectorAll('.map-snippet').forEach((el) => { el.innerHTML = m.ok ? mapSnippet(m, el.dataset.node) : '<p class="small muted">Mapa COBIT 5 jeszcze nie jest gotowa.</p>'; });
      body.querySelectorAll('[data-own]').forEach((el) => bindOwn(el, s));
      body.querySelectorAll('[data-solved]').forEach(bindSolved);
      body.querySelectorAll('[data-atom-check]').forEach((box, k) => {
        box.querySelectorAll('[data-pf]').forEach((b) => b.addEventListener('click', () => {
          const ok = b.dataset.pf === box.dataset.atomCheck;
          box.querySelectorAll('[data-pf]').forEach((x) => { x.disabled = true; x.classList.toggle('pf-ok', x.dataset.pf === box.dataset.atomCheck); x.classList.toggle('pf-bad', x === b && !ok); });
          const w = box.querySelector('.atom-why');
          w.hidden = false;
          w.insertAdjacentHTML('afterbegin', `<strong>${ok ? '✓ Dobrze.' : `Tym razem nie – to ${box.dataset.atomCheck === 'P' ? 'prawda' : 'fałsz'}.`}</strong> `);
          if (!ok) store.setFlag(`fiszka:${unitId}:${cur}:${k}`, 'powtorka', true);
        }));
      });
      body.querySelectorAll('[data-depth]').forEach((el) => {
        const t = terms.get(el.dataset.depth);
        const lad = el.querySelector('.depth-ladder');
        if (!t || !t.glebokosc) { lad.innerHTML = '<p class="small muted">Przykłady od prostego do skrajnego są w przygotowaniu.</p>'; return; }
        lad.innerHTML = depthLadder(t, { extremeOk: !isLaik() || store.unit(unitId).mastered === true, openAll: !!store.flag('term:' + t.id).skrajny });
        bindLadder(el, openTerm);
      });
      enhanceSlide(body, s);
      // **Wniosek:** – wyróżniona ostatnia linia (§17.5).
      body.querySelectorAll('p').forEach((p) => { if (/^<strong>Wniosek:<\/strong>/.test(p.innerHTML.trim())) p.classList.add('wniosek'); });
      // §17.8 – tezy po głównej treści, jedna naraz.
      const tezy = [...body.querySelectorAll('[data-teza]')];
      tezy.forEach((t, k) => {
        body.appendChild(t);
        if (k > 0) t.hidden = true;
        const st = t.querySelector('.teza-status');
        if (st) st.innerHTML = statusPill(t.dataset.status);
        t.querySelector('.teza-show').addEventListener('click', (e) => {
          t.querySelector('.teza-body').hidden = false;
          e.currentTarget.remove();
          if (tezy[k + 1]) {
            const nb = document.createElement('button');
            nb.className = 'btn teza-next';
            nb.textContent = 'Następna teza →';
            nb.addEventListener('click', () => { tezy[k + 1].hidden = false; tezy[k + 1].classList.add('enter'); nb.remove(); });
            t.after(nb);
          }
        });
      });
      collectDetails(body);
    } else if (s.kind === 'cel') {
      meta.innerHTML = `<span class="slide-kind">${esc(s.label)}</span>`;
      const key = `cel:${unitId}`;
      const f = store.flag(key);
      const nu = course[idx + 1];
      body.innerHTML = `<h2>Co już umiesz</h2><p class="goal-q">${inlineRich(unit.cel)}</p>
        <p class="muted">Czy to prawda o Tobie – teraz, bez zaglądania?</p>
        <div class="seg" role="group" aria-label="Samoocena celu">${[['tak', 'Tak'], ['nie-wiem', 'Nie wiem'], ['nie', 'Nie']].map(([k, l]) => `<button data-goal="${k}" aria-pressed="${f.samoocena === k}">${l}</button>`).join('')}</div>
        <p class="goal-res" aria-live="polite"></p>
        ${nu ? `<p class="small muted" style="margin-top:28px">Co dalej: <strong>${esc(nu.tytul)}</strong>.</p>` : ''}
        <p style="margin-top:20px"><a class="btn" href="#/karta/${esc(unitId)}">🎓 Karta prowadzącego – wytłumacz to komuś</a></p>`;
      body.querySelectorAll('[data-goal]').forEach((b) => b.addEventListener('click', () => {
        const v = b.dataset.goal;
        const prev = store.flag(key).samoocena;
        store.setFlag(key, 'samoocena', v);
        body.querySelectorAll('[data-goal]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        if (v !== 'tak' && prev !== v && (!prev || prev === 'tak')) { (unit.wprowadza.length ? unit.wprowadza : fnIds.slice(0, 2)).forEach((t) => store.addMistake(t)); store.setFlag(key, 'powtorka', true); }
        body.querySelector('.goal-res').textContent = v === 'tak' ? 'Świetnie – idziemy dalej.' : 'W porządku. Pojęcia z tej lekcji wrócą jutro w powtórkach, prościej i na innym przykładzie.';
      }));
    } else if (s.kind === 'repair') {
      meta.innerHTML = `<span class="slide-kind">${esc(s.label)}</span>`;
      body.innerHTML = s.html;
      body.querySelectorAll('.term').forEach((b) => b.addEventListener('click', () => openTerm(b.dataset.term)));
    } else {
      meta.innerHTML = `<span class="slide-kind">${esc(s.label)}</span>${s.earlier && s.q?.lekcja ? `<span class="pill pill-code">${esc(s.q.lekcja)}</span>` : ''}`;
      if (!s.q) body.innerHTML = `<p class="muted">Brak pytania <code>${esc(s.qid)}</code> w plikach pytań.</p>`;
      else {
        const si = solvedIdx();
        renderQuestion(body, s.q, {
          termRef, onTerm: openTerm, prog: prog.powtorzonaPomylka, confidence: true,
          hints: s.noHints ? null : { where: hintWhere(s.q), onSolved: si >= 0 ? () => show(si) : null, hidden: conf.podpowiedzi === 'ukryte', external: true,
            onHints: (n) => { curHints = n; if (sidebarOpen && tab === 'podpowiedz') renderSidebar(); } },
          onAnswered: (ok, info) => {
            if (!ok) { lastWrong = s.q; $('sbToggle').classList.add('pulse'); if (sidebarOpen && tab === 'podpowiedz') renderSidebar(); }
            toast(ok ? 'Dobrze!' : 'Przeczytaj omówienie – to najlepszy moment, żeby zapamiętać');
            if (s.check) { checkRes.set(s.qid, info.mastery); evaluateMastery(); }
          },
        });
      }
    }
    body.classList.remove('enter'); void body.offsetWidth; body.classList.add('enter');
    // Każdy slajd zaczyna się od góry (persona: nigdy pusty ekran z samym „Dalej”), fokus na tytule slajdu.
    const stage = main.querySelector('.stage');
    if (stage) stage.scrollTop = 0;
    window.scrollTo(0, 0);
    const title = body.querySelector('h1, h2, h3, .quiz-stem') || body;
    title.setAttribute('tabindex', '-1');
    if (initialized) title.focus({ preventScroll: true });
    // Niektóre przeglądarki przewijają mimo preventScroll – wyzeruj jeszcze raz po narysowaniu.
    requestAnimationFrame(() => { if (stage) stage.scrollTop = 0; window.scrollTo(0, 0); });
    body.querySelectorAll('.link-term, .inline-term[data-term]').forEach((b) => {
      if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => openTerm(b.dataset.term)); }
    });
    body.querySelectorAll('.term').forEach((b) => {
      b.classList.toggle('active', b.dataset.term === activeTerm);
      if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => openTerm(b.dataset.term)); }
    });

    renderDots();
    $('prevBtn').disabled = cur === 0 && !prevUnit;
    const last = cur === slides.length - 1;
    $('nextBtn').textContent = last ? (nextUnit ? 'Następna jednostka →' : 'Koniec ✓') : 'Dalej →';
    $('pbar').style.width = `${((cur + 1) / slides.length) * 100}%`;

    // Flagi slajdu
    const key = `slide:${unitId}:${cur}`;
    const f = store.flag(key);
    $('flags').innerHTML = [['nieRozumiem', 'Nie rozumiem'], ['powtorka', 'Do powtórki']]
      .map(([k, l]) => `<button class="flag-btn" data-flag="${k}" aria-pressed="${!!f[k]}">${l}</button>`).join('');
    bindFlags($('flags'), key);
    $('simpler').hidden = true;
    $('simpler').innerHTML = '';
    if (f.nieRozumiem) simpler(s);
    $('flags').querySelector('[data-flag="nieRozumiem"]').addEventListener('click', (e) => {
      if (e.currentTarget.getAttribute('aria-pressed') === 'true') simpler(s); else $('simpler').hidden = true;
    });

    const nDet = s.kind === 'content' ? detailNodes.length + (s.lecturer ? 1 : 0) : 0;
    $('sbToggle').innerHTML = s.kind === 'content' ? `Szczegóły${nDet ? ` <span class="det-n">${nDet}</span>` : ''}` : '💡 Podpowiedź';
    if (sidebarOpen) { if (!['wykladowca', 'terminy', 'zrodla'].includes(tab)) tab = defaultTab(); renderSidebar(); }
    if ($('readBtn')) $('readBtn').textContent = s.lecturer ? '🔊 Posłuchaj wykładu' : '🔊 Przeczytaj mi';
    store.markSlide(unitId, cur, slides.length);
    initialized = true;
    const base = present ? 'prezentacja' : 'lekcja';
    history.replaceState(null, '', `#/${base}/${unitId}/${cur + 1}`);
    if (focus) $('canvas').focus?.();
  }

  function next() {
    if (cur < slides.length - 1) show(cur + 1);
    else if (nextUnit) location.hash = `#/${present ? 'prezentacja' : 'lekcja'}/${nextUnit.id}/1`;
    else { toast('To była ostatnia jednostka.'); }
  }
  function prev() {
    if (cur > 0) show(cur - 1);
    else if (prevUnit) location.hash = `#/${present ? 'prezentacja' : 'lekcja'}/${prevUnit.id}`;
  }
  $('nextBtn').addEventListener('click', next);
  $('readBtn')?.addEventListener('click', readSlide);
  $('prevBtn').addEventListener('click', prev);

  // ---------- Klawiatura ----------
  function onKey(e) {
    const tag = (e.target.tagName || '').toLowerCase();
    if (['input', 'textarea', 'select'].includes(tag) || e.metaKey || e.ctrlKey || e.altKey) return;
    const onButton = tag === 'button' || tag === 'a';
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': next(); e.preventDefault(); break;
      case 'ArrowLeft': case 'PageUp': prev(); e.preventDefault(); break;
      case ' ': if (!onButton) { e.shiftKey ? prev() : next(); e.preventDefault(); } break;
      case 's': case 'S': setSidebar(!sidebarOpen); break;
      case 'p': case 'P': if (!present) location.hash = `#/prezentacja/${unitId}/${cur + 1}`; break;
      case 'f': case 'F': toggleFullscreen(); break;
      case 'Escape':
        if (present && sidebarOpen) setSidebar(false);
        else if (present) { if (document.fullscreenElement) document.exitFullscreen?.(); location.hash = `#/lekcja/${unitId}/${cur + 1}`; }
        else if (sidebarOpen) setSidebar(false);
        break;
      default:
    }
  }
  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => toast('Pełny ekran niedostępny w tym oknie'));
  }
  document.addEventListener('keydown', onKey);

  // Gest przesunięcia na telefonie
  let tx = null;
  const canvas = $('canvas');
  canvas.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 60 && !e.target.closest('.option,.seg,select,.term')) (dx < 0 ? next : prev)();
    tx = null;
  });

  // Miękka bramka (§11.3): lekcja opiera się na nieopanowanej – proponujemy 3 minuty powtórki, można pominąć.
  (() => {
    const need = unit.wymaga.map((id) => allUnits.find((u) => u.id === id)).filter((u) => u && !store.unit(u.id).done);
    let skipped = false;
    try { skipped = sessionStorage.getItem('c5.gate.' + unitId) === '1'; } catch (e) {}
    if (!need.length || skipped || present) return;
    const g = $('gate');
    g.innerHTML = `<span>${need[0].modul.kod === 'IT0' ? `Ta lekcja korzysta z podstaw cyfrowych: „${esc(need[0].tytul)}”. Jeśli to dla Ciebie nowe – zacznij od tej krótkiej lekcji.` : `Ta lekcja opiera się na „${esc(need[0].tytul)}”. 3 minuty powtórki?`}</span>
      <a class="btn btn-ghost small" href="#/lekcja/${esc(need[0].id)}/${Math.max(1, slidesStartOfCheck(need[0]))}">Powtórz</a>
      <button class="btn btn-ghost small" id="gateSkip">Pomiń</button>`;
    g.hidden = false;
    $('gateSkip').addEventListener('click', () => { g.hidden = true; try { sessionStorage.setItem('c5.gate.' + unitId, '1'); } catch (e) {} });
  })();

  renderSidebar();
  show(cur);
  if (present) toast('Pełny ekran: F – przełącz, Esc – wyjście.');

  return () => {
    document.removeEventListener('keydown', onKey);
    document.body.classList.remove('presenting', 'lnav-open', 'learning');
    stopReading();
  };
}
