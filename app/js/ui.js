// Wspólne elementy interfejsu: toast, karta terminu (przypis), etykiety.
import { esc, inline, sourceLabel } from './md.js';
import { store, isLaik } from './store.js';
import { STATUS_LABEL } from './content.js';

let toastTimer;
export function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

export const statusPill = (s) => s && STATUS_LABEL[s]
  ? `<span class="pill prov-${esc(s)}" title="${esc(STATUS_LABEL[s])}">${esc(STATUS_LABEL[s])}</span>` : '';

export const trapPill = () => '<span class="pill pill-trap" title="Egzamin PL używa innej nazwy niż podręcznik">⚠ Pułapka</span>';

export function sourceText(z) {
  if (!z) return '';
  const list = Array.isArray(z) ? z : [z];
  return list.map((x) => sourceLabel(x.doc, x.strona, x.ilustracja, x.sekcja) + (x.url ? ` (${x.url})` : '')).join('; ');
}

const inneName = (x) => (typeof x === 'string' ? x : `${x.nazwa}${x.zrodlo ? ` (${x.zrodlo})` : ''}`);

// Tekst przypisu może zawierać [[id]] – wtedy staje się odnośnikiem do innego terminu.
const rich = (text) => inline(text || '', (id, label) => `<button class="link-term" data-term="${esc(id)}" style="all:unset;cursor:pointer;color:var(--accent);text-decoration:underline">${label || id}</button>`);

// Kolejność kontekstów: życie → biuro → firma → urząd → IT/COBIT. Każde pojęcie ma przykład z firmy i z urzędu.
// (PSP wyłączone 2026-11-08: przykłady ogólne jak w COBIT 5 Foundation – FORMAT-KROTKI.md §2.)
const CONTEXTS = [
  ['zycie', 'Życie codzienne'],
  ['biuro', 'Biuro'],
  ['organizacja', 'Firma'],
  ['admin', 'Urząd'],
  ['it', 'IT/COBIT'],
];
export const ctxText = (t, k) => {
  const p = (t && t.przyklady) || {};
  return k === 'organizacja' ? (p.organizacja || p.firma || '') : (p[k] || '');
};

/** Zdanie „po ludzku” hasła (§10.4); gdy go jeszcze nie ma – wersja „prościej”. */
export const poLudzku = (t) => (t && (t.poLudzku || (t.warianty && t.warianty.prosto))) || '';

/**
 * Pełny przypis terminu. Kolejność (§10.2): po ludzku → nazwa egzaminacyjna → poziom1 → reszta.
 * W trybie „laik” szczegóły są zwinięte pod „Więcej (inne nazwy, szczegóły)”, a „Ekspercko” ukryte.
 * Zwraca HTML; po wstawieniu wywołaj bindTermDetail(root, t, {...}).
 */
export function termDetail(t, { num = null, terms = null, ctxStart = 0, allowExtreme = null } = {}) {
  if (!t) return '<p class="sb-empty">Nie znaleziono tego pojęcia w słowniku.</p>';
  const laik = isLaik();
  const key = 'term:' + t.id;
  const fl = store.flag(key);
  const mistakes = store.get().mistakes[t.id] || 0;
  const ctxAvail = CONTEXTS.filter(([k]) => ctxText(t, k));
  const ctxIdx = ctxAvail.length ? ctxStart % ctxAvail.length : 0;
  const wy = t.warianty || null;
  const human = t.poLudzku || '';

  const names = `
    <dl class="names">
      <dt>Egzamin PL</dt><dd class="exam">${esc(t.plEgzamin)}</dd>
      ${t.plPodrecznik ? `<dt>Podręcznik PL</dt><dd>${esc(t.plPodrecznik)}</dd>` : ''}
      ${t.en ? `<dt>Oryginał EN</dt><dd>${esc(t.en)}</dd>` : ''}
      ${t.plInne && t.plInne.length ? `<dt>Spotkasz też</dt><dd>${t.plInne.map((x) => esc(inneName(x))).join(', ')}</dd>` : ''}
    </dl>`;

  const trapText = t.pulapka ? `<strong>⚠ Pułapka terminologiczna.</strong>
    ${t.pulapkaOpis ? rich(t.pulapkaOpis) : `Na egzaminie zobaczysz <strong>„${esc(t.plEgzamin)}”</strong>${t.plPodrecznik ? `, a w polskim podręczniku „${esc(t.plPodrecznik)}”` : ''}${t.en ? ` (EN: ${esc(t.en)})` : ''}. To jest to samo pojęcie.`}` : '';
  // Odznaka pułapki jest zawsze widoczna; w trybie laika opis rozwija się po kliknięciu.
  const trapBadge = t.pulapka ? (laik
    ? `<button class="pill pill-trap trap-toggle" aria-expanded="false" aria-controls="trap-${esc(t.id)}" title="Pokaż, na czym polega pułapka">⚠ Pułapka</button>`
    : trapPill()) : '';
  const trap = t.pulapka ? `<div class="trap-box" id="trap-${esc(t.id)}"${laik ? ' hidden' : ''}>${trapText}</div>` : '';

  const lv = wy ? ['prosto', 'dokladniej', ...(laik ? [] : ['ekspercko'])].filter((k) => wy[k]) : [];
  const levels = lv.length ? `
    <div class="levels" role="group" aria-label="Poziom wyjaśnienia" style="grid-template-columns:repeat(${lv.length},1fr)">
      ${lv.map((k, i) => `<button class="level-btn" data-level="${k}" aria-pressed="${i === 0}">${{ prosto: 'Prościej', dokladniej: 'Dokładniej', ekspercko: 'Ekspercko' }[k]}</button>`).join('')}
    </div>
    <p class="level-text">${rich(wy[lv[0]])}</p>` : '';

  // Przykład: w trybie laika jeden naraz + „Pokaż inny przykład”; w pełnym – zakładki kontekstów.
  const examples = ctxAvail.length ? (laik ? `
    <section class="fn-example" aria-label="Przykład">
      <div class="box-label"><span class="ctx-name">${esc(ctxAvail[ctxIdx][1])}</span></div>
      <p class="ctx-text">${rich(ctxText(t, ctxAvail[ctxIdx][0]))}</p>
      ${ctxAvail.length > 1 ? `<button class="btn btn-ghost small ctx-next" data-i="${ctxIdx}">Pokaż inny przykład →</button>` : ''}
    </section>` : `
    <section class="fn-example" aria-label="Przykład">
      <div class="ctx-tabs" role="tablist" aria-label="Kontekst przykładu">
        ${ctxAvail.map(([k, label], i) => `<button class="ctx-tab" role="tab" data-ctx="${k}" aria-selected="${i === ctxIdx}">${label}</button>`).join('')}
      </div>
      <p class="ctx-text">${rich(ctxText(t, ctxAvail[ctxIdx][0]))}</p>
    </section>`) : '';

  const notThis = t.nieMylicZ && t.nieMylicZ.length ? `
    <details class="fn-sec"${laik ? '' : ' open'}><summary>Nie mylić z</summary><div class="sec-body">
      ${t.nieMylicZ.map((n0) => {
        const n = typeof n0 === 'string' ? { termin: n0, roznica: (terms && terms.get(n0) && poLudzku(terms.get(n0))) || '' } : n0;
        const other = terms && terms.get(n.termin);
        const name = other ? `<button data-term="${esc(n.termin)}" class="inline-term">${esc(other.plEgzamin)}</button>` : rich(n.termin);
        return `<p><strong>${name}</strong> – ${rich(n.roznica)}</p>`;
      }).join('')}
    </div></details>` : '';

  const exam = t.egzamin ? `
    <details class="fn-sec"${laik ? '' : ' open'}><summary>Na egzamin</summary><div class="sec-body"><p>${rich(t.egzamin)}</p></div></details>` : '';

  // §12.2 – drabina głębokości: Prosty → Zaawansowany → Skrajny (odsłaniane po kolei).
  const extremeFlag = !!fl.skrajny; // pomyłka w pytaniu skrajnym – szczebel „skrajny” od razu odsłonięty
  const extremeOk = extremeFlag || allowExtreme === true || (allowExtreme === null && !laik);
  const depth = t.glebokosc ? depthLadder(t, { extremeOk, openAll: extremeFlag }) : '';
  const confusions = Array.isArray(t.zagmatwania) && t.zagmatwania.length ? `
    <details class="fn-sec"${extremeFlag ? ' open' : ''}><summary>Częste pomyłki</summary><div class="sec-body">
      ${t.zagmatwania.map((z) => `<div class="myth"><p class="myth-m"><span class="muted">Ludzie myślą:</span> <span class="myth-x">${rich(z.mit)}</span></p><p class="myth-p"><span class="muted">Naprawdę:</span> ${rich(z.prawda)}</p></div>`).join('')}
    </div></details>` : '';
  const mentorSec = t.mentor ? `
    <details class="fn-sec"><summary>Dla mentora</summary><div class="sec-body">
      <p><strong>Najczęstszy błąd uczniów:</strong> ${rich(t.mentor.czestyBlad)}</p>
      <p><strong>Jak tłumaczyć:</strong> ${rich(t.mentor.jakTlumaczyc)}</p>
      <p><strong>Pytanie kontrolne:</strong> ${rich(t.mentor.pytanieKontrolne)}</p>
      <details class="mentor-ans"><summary class="small">Oczekiwana odpowiedź</summary><p>${rich(t.mentor.odpowiedzKontrolna)}</p></details>
    </div></details>` : '';
  const zr = t.zrodla || (t.zrodlo ? [t.zrodlo] : []);
  const skad = t.skadNazwa ? `<p><strong>Skąd ta nazwa?</strong> ${rich(t.skadNazwa)}</p>` : '';
  const detailsBody = `
      ${t.plInne && t.plInne.length ? `<p><strong>Spotkasz też:</strong> ${t.plInne.map((x) => esc(inneName(x))).join(', ')}</p>` : ''}
      ${skad}
      ${t.poziom2 ? `<p>${rich(t.poziom2)}</p>` : ''}
      ${t.poziom3 ? `<p>${rich(t.poziom3)}</p>` : ''}
      ${zr.map((z) => `<p class="src">${esc(sourceText(z))}${z.cytat ? `<br>„${esc(z.cytat)}”` : ''}</p>`).join('')}
      ${t.sylabus && t.sylabus.length ? `<p class="small muted">Sylabus: ${t.sylabus.map(esc).join(', ')}</p>` : ''}`;
  const more = `
    <details class="fn-sec fn-more"><summary>${laik ? 'Więcej (inne nazwy, szczegóły)' : 'Definicja, pochodzenie nazwy i źródło'}</summary><div class="sec-body">${detailsBody}</div></details>`;

  const related = t.powiazane && t.powiazane.length ? `
    <details class="fn-sec"${laik ? '' : ' open'}><summary>Powiązane</summary><div class="sec-body related">
      ${t.powiazane.map((id) => {
        const r = terms && terms.get(id);
        return `<button data-term="${esc(id)}">${esc(r ? r.plEgzamin : id)}</button>`;
      }).join('')}
    </div></details>` : '';

  const notes = `
    <details class="fn-sec"${fl.notatka ? ' open' : ''}><summary>Moja notatka</summary><div class="sec-body">
      <div class="btn-row" style="margin-bottom:8px">
        ${flagBtn('powtorka', 'Do powtórki', fl)}${flagBtn('nieRozumiem', 'Nie rozumiem', fl)}${flagBtn('wazne', 'Ważne na egzamin', fl)}
      </div>
      <label class="sr-only" for="note-${esc(t.id)}">Notatka do pojęcia</label>
      <textarea class="note-area" id="note-${esc(t.id)}" data-note="${esc(key)}" placeholder="Własna notatka…">${esc(fl.notatka || '')}</textarea>
    </div></details>`;

  // §17.4 – kolejność karty: EN + wymowa → formy PL ze statusem → definicja (FAKT) → po ludzku → wyobraź sobie → po co / jak działa
  // → przykłady → nie mylić → przykład wypowiedzi → powiązane → źródło. EN widoczny zawsze, także w trybie laika (§17.1).
  const ST = { A: 'A – jednoznaczne', B: 'B – zależy od kontekstu', C: 'C – sporne', D: 'D – zostaw oryginał' };
  const zt = t.zrodloTlumaczenia || {};
  const forms = `<dl class="names forms">
      <dt>Egzamin PL</dt><dd class="exam">${esc(zt.wydawcaEgzaminu || t.plEgzamin)}</dd>
      ${(zt.podrecznik || t.plPodrecznik) ? `<dt>Podręcznik PL</dt><dd>${esc(zt.podrecznik || t.plPodrecznik)}</dd>` : ''}
      ${zt.kurs ? `<dt>W kursie</dt><dd>${esc(zt.kurs)}</dd>` : ''}
      ${t.statusTlumaczenia ? `<dt>Tłumaczenie</dt><dd><span class="pill tl-${esc(t.statusTlumaczenia)}">${esc(ST[t.statusTlumaczenia] || t.statusTlumaczenia)}</span></dd>` : ''}
    </dl>`;
  const src1 = (t.zrodla || [])[0];
  const why = (t.poCo || t.jakDziala) ? `<section class="fn-block">${t.poCo ? `<p><span class="box-label">Po co to jest</span>${rich(t.poCo)}</p>` : ''}${t.jakDziala ? `<p><span class="box-label">Jak to działa</span>${rich(t.jakDziala)}</p>` : ''}${t.dlaczegoWazne ? `<p><span class="box-label">Dlaczego to ważne</span>${rich(t.dlaczegoWazne)}</p>` : ''}</section>` : '';
  return `
    <article class="fn${laik ? ' fn-laik' : ''}" data-term-id="${esc(t.id)}">
      <header class="fn-head">
        ${t.en ? `<div class="fn-en-big">${esc(t.en)}${t.wymowa ? ` <span class="fn-say">wym. „${esc(t.wymowa)}”</span>` : ''}</div>` : ''}
        <div class="fn-term">${esc(t.plEgzamin)}</div>
        <div class="btn-row">${trapBadge}${mistakes ? `<span class="pill" style="color:var(--bad)">Pomyłki: ${mistakes}</span>` : ''}</div>
      </header>
      ${forms}
      ${trap}
      ${t.poziom1 ? `<section class="fn-def"><div class="box-label">Definicja ${statusPill(t.status)}</div><p class="fn-l1">${rich(t.poziom1)}</p>${src1 ? `<p class="src">${esc(sourceText(src1))}</p>` : ''}</section>` : ''}
      ${human ? `<p class="fn-human"><span class="box-label">Po ludzku</span>${rich(human)}</p>` : ''}
      ${t.wyobrazSobie ? `<p class="fn-imagine"><span class="box-label">Wyobraź sobie</span>${rich(t.wyobrazSobie)}</p>` : ''}
      ${why}
      ${levels}
      ${examples}
      ${depth}
      ${notThis}
      ${confusions}
      ${t.przykladWypowiedzi ? `<section class="fn-say-it"><div class="box-label">Powiedz to na głos</div><p>„${rich(t.przykladWypowiedzi)}”</p></section>` : ''}
      ${exam}
      ${related}
      ${more}
      ${mentorSec}
      ${notes}
    </article>`;
}

const DEPTH = [['prosty', 'Prosty'], ['zaawansowany', 'Zaawansowany'], ['skrajny', 'Skrajny']];
/** Drabina głębokości (§12.2). Używana w przypisie i w bloku :::glebiej. */
export function depthLadder(t, { extremeOk = true, openAll = false } = {}) {
  const g = t.glebokosc || {};
  const steps = DEPTH.filter(([k]) => g[k]);
  if (!steps.length) return '';
  const shown = openAll ? steps.length : 1;
  return `<section class="ladder" data-ladder="${esc(t.id)}" data-extreme="${extremeOk ? 1 : 0}" aria-label="Przykłady od prostego do skrajnego">
    ${steps.map(([k, l], i) => `<div class="rung rung-${k}" data-rung="${i}"${i < shown ? '' : ' hidden'}><div class="box-label">${i + 1}. ${l}</div>${rich(g[k])}</div>`).join('')}
    ${shown < steps.length ? `<button class="btn btn-ghost small rung-next">Trudniejszy przykład: ${steps[shown][1].toLowerCase()} →</button>` : ''}
  </section>`;
}
export function bindLadder(root, onTerm) {
  root.querySelectorAll('.ladder').forEach((lad) => {
    const btn = lad.querySelector('.rung-next');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = lad.querySelector('.rung[hidden]');
      if (!next) return;
      if (next.classList.contains('rung-skrajny') && lad.dataset.extreme !== '1') {
        btn.outerHTML = '<p class="small muted rung-lock">Przykład skrajny odblokuje się, gdy opanujesz lekcję z tym pojęciem (2 z 3 w „Sprawdź”).</p>';
        return;
      }
      next.hidden = false;
      next.classList.add('enter');
      next.querySelectorAll('[data-term]').forEach((x) => x.addEventListener('click', () => onTerm && onTerm(x.dataset.term)));
      const after = lad.querySelector('.rung[hidden]');
      if (after) btn.textContent = `Trudniejszy przykład: ${after.querySelector('.box-label').textContent.replace(/^\d+\.\s*/, '').toLowerCase()} →`;
      else btn.remove();
    });
  });
}

const flagBtn = (name, label, fl) =>
  `<button class="flag-btn" data-flag="${name}" aria-pressed="${!!fl[name]}">${label}</button>`;

export function bindTermDetail(root, t, { onTerm } = {}) {
  if (!t) return;
  root.querySelectorAll('[data-term]').forEach((b) => b.addEventListener('click', () => onTerm && onTerm(b.dataset.term)));
  root.querySelectorAll('.level-btn').forEach((b) => b.addEventListener('click', () => {
    root.querySelectorAll('.level-btn').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    root.querySelector('.level-text').innerHTML = rich((t.warianty || t.wyjasnienia || {})[b.dataset.level]);
    root.querySelectorAll('.level-text [data-term]').forEach((x) => x.addEventListener('click', () => onTerm && onTerm(x.dataset.term)));
  }));
  bindLadder(root, onTerm);
  root.querySelectorAll('.trap-toggle').forEach((b) => b.addEventListener('click', () => {
    const box = root.querySelector('#' + b.getAttribute('aria-controls'));
    if (!box) return;
    box.hidden = !box.hidden;
    b.setAttribute('aria-expanded', String(!box.hidden));
  }));
  root.querySelectorAll('.ctx-next').forEach((b) => b.addEventListener('click', () => {
    const avail = CONTEXTS.filter(([k]) => ctxText(t, k));
    const i = (+b.dataset.i + 1) % avail.length;
    b.dataset.i = i;
    root.querySelector('.ctx-name').textContent = avail[i][1];
    root.querySelector('.ctx-text').innerHTML = rich(ctxText(t, avail[i][0]));
    root.querySelectorAll('.ctx-text [data-term]').forEach((x) => x.addEventListener('click', () => onTerm && onTerm(x.dataset.term)));
  }));
  root.querySelectorAll('.ctx-tab').forEach((b) => b.addEventListener('click', () => {
    root.querySelectorAll('.ctx-tab').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
    root.querySelector('.ctx-text').innerHTML = rich(ctxText(t, b.dataset.ctx));
  }));
  bindFlags(root, 'term:' + t.id);
  const ta = root.querySelector('textarea[data-note]');
  if (ta) {
    let timer;
    ta.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => store.setNote(ta.dataset.note, ta.value), 400);
    });
  }
}

export function bindFlags(root, key) {
  root.querySelectorAll('.flag-btn[data-flag]').forEach((b) => b.addEventListener('click', () => {
    const on = store.toggleFlag(key, b.dataset.flag);
    b.setAttribute('aria-pressed', String(on));
    toast(on ? `Oznaczono: ${b.textContent}` : `Usunięto: ${b.textContent}`);
  }));
}

// Duże okno z „Zamknij” u góry i u dołu (§14.2). Zwraca element treści.
export function openModal(title, html) {
  document.getElementById('c5modal')?.remove();
  const wrap = document.createElement('div');
  wrap.id = 'c5modal';
  wrap.className = 'modal';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'true');
  wrap.setAttribute('aria-label', title);
  wrap.innerHTML = `<div class="modal-box">
    <div class="modal-head"><h2>${esc(title)}</h2><button class="btn modal-close">Zamknij</button></div>
    <div class="modal-body">${html}</div>
    <div class="modal-foot"><button class="btn btn-primary modal-close">Zamknij</button></div></div>`;
  const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  wrap.addEventListener('click', (e) => { if (e.target === wrap || e.target.classList.contains('modal-close')) close(); });
  document.addEventListener('keydown', onKey);
  document.body.appendChild(wrap);
  wrap.querySelector('.modal-close').focus();
  return wrap.querySelector('.modal-body');
}

// „Jak korzystać” – 4 kroki z obrazkami (§14.5).
export const HOWTO_STEPS = [
  ['Klikasz duże przyciski.', '<span class="demo-btn">Dalej →</span>'],
  ['Słowa podkreślone z „?” możesz kliknąć – zobaczysz wyjaśnienie.', '<span class="demo-term">interesariusz<i>?</i></span>'],
  ['„← Wstecz” zawsze cofa.', '<span class="demo-btn demo-ghost">← Wstecz</span>'],
  ['Przerwę robisz, kiedy chcesz – wszystko zapisuje się samo.', '<span class="demo-save">✓ Zapisano</span>'],
];
export const howToHTML = () => `<ol class="howto-steps">${HOWTO_STEPS.map(([t, pic], i) => `<li><span class="howto-pic" aria-hidden="true">${pic}</span><span><strong>${i + 1}.</strong> ${t}</span></li>`).join('')}</ol>
  <p class="small muted">Niczego nie zepsujesz klikaniem. Jeśli nie wiesz, co dalej – kliknij „? Co mam teraz zrobić” u góry.</p>`;
export function showHowTo() { openModal('Jak korzystać z kursu', howToHTML()); }

// §16.4 – „Wyjaśnij szczegółowo” w 5 częściach, wyłącznie z istniejących pól hasła.
export function explainDetailed(t, terms = null) {
  if (!t) return '';
  const g = t.glebokosc || {};
  const p = t.przyklady || {};
  const human = t.poLudzku || (t.warianty && t.warianty.prosto) || t.poziom1 || '';
  const life = p.zycie || g.prosty || '';
  const unit = p.it || p.organizacja || p.firma || g.zaawansowany || '';
  const exam = `Na egzaminie zobaczysz nazwę <strong>„${esc(t.plEgzamin)}”</strong>${t.plPodrecznik && t.plPodrecznik !== t.plEgzamin ? ` (w podręczniku: „${esc(t.plPodrecznik)}”)` : ''}${t.en ? `, po angielsku ${esc(t.en)}` : ''}.${t.egzamin ? ` ${rich(t.egzamin)}` : ''}`;
  const mix = Array.isArray(t.zagmatwania) && t.zagmatwania.length
    ? t.zagmatwania.map((z) => `<p><span class="myth-x">${rich(z.mit)}</span> → ${rich(z.prawda)}</p>`).join('')
    : (t.nieMylicZ || []).map((n) => `<p><strong>${esc((terms && terms.get(n.termin)?.plEgzamin) || n.termin)}</strong> – ${rich(n.roznica)}</p>`).join('');
  const parts = [['Po ludzku', human], ['Przykład z życia', life], ['Przykład z organizacji', unit], ['Jak to brzmi na egzaminie', exam], ['Z czym się myli', mix]].filter(([, x]) => x);
  return `<ol class="detail-steps">${parts.map(([h, x]) => `<li><div class="box-label">${h}</div>${/^<p/.test(x) ? x : `<p>${/<strong>|<span/.test(x) ? x : rich(x)}</p>`}</li>`).join('')}</ol>`;
}

// Kompas wielkiego obrazu (§16.1). here: numer pola „Jesteś tu”; progress: Map nr -> {done,total}.
export function compassHTML(COMPASS, { here = null, progress = null, compact = false } = {}) {
  return `<div class="compass${compact ? ' compact' : ''}" role="list" aria-label="O co naprawdę chodzi w COBIT 5 – 7 pytań">
    ${COMPASS.map((c) => {
      const p = progress && progress.get(c.nr);
      return `<div class="cmp area-${c.area}${c.nr === here ? ' here' : ''}" role="listitem">
        <span class="cmp-n">${c.nr}</span><span class="cmp-q">${esc(c.q)}${c.nr === here ? ' <em>Jesteś tu</em>' : ''}</span>
        ${compact ? '' : `<span class="cmp-a">${esc(c.a)}</span>`}
        ${p && p.total ? `<span class="cmp-p"><span style="width:${Math.round((p.done / p.total) * 100)}%"></span></span>` : ''}
      </div>`;
    }).join('')}</div>`;
}

// §17.7 – sekcje „Wyjaśnij mi”: z bloków :::sb slajdu, a gdy brak – z pól haseł ze slajdu.
const SB_ORDER = [
  ['wyjasnij', 'Wyjaśnij mi'], ['przyklad', 'Przykład z życia'], ['wyobraz', 'Wyobraź sobie'], ['skrot', 'Co oznacza ten skrót?'],
  ['dlaczego', 'Dlaczego to ważne?'], ['nie-mylic', 'Czego nie mylić?'], ['kontekst', 'Kontekst'], ['powiazanie', 'Powiązanie'],
  ['kontrowersja', 'Kontrowersja'], ['uwaga', 'Uwaga wykładowcy'], ['ekspert', 'Uwaga ekspercka'], ['sprawdz', 'Sprawdź, czy rozumiesz'], ['zrodlo', 'Źródło'],
];
const LAIK_SB = new Set(['wyjasnij', 'przyklad', 'wyobraz', 'skrot', 'dlaczego', 'nie-mylic', 'kontrowersja', 'uwaga', 'sprawdz']);
export function explainSections(slide, termList, { laik = true, terms = null, render: rmd } = {}) {
  const sb = (slide && slide.sb) || {};
  const ts = termList.filter(Boolean);
  const fromTerms = {
    wyjasnij: ts.map((t) => (poLudzku(t) || t.jakDziala) ? `<p><strong>${esc(t.en || t.plEgzamin)}</strong> (${esc(t.plEgzamin)}) – ${rich(poLudzku(t))}${t.jakDziala ? ` ${rich(t.jakDziala)}` : ''}</p>` : '').join(''),
    przyklad: ts.map((t) => ctxText(t, 'zycie') ? `<p><strong>${esc(t.plEgzamin)}:</strong> ${rich(ctxText(t, 'zycie'))}</p>` : '').join(''),
    wyobraz: ts.map((t) => t.wyobrazSobie ? `<p><strong>${esc(t.plEgzamin)}:</strong> ${rich(t.wyobrazSobie)}</p>` : '').join(''),
    skrot: ts.filter((t) => /^[A-Z]{2,}\d*$/.test(t.plEgzamin) || /^[A-Z]{2,}\d*$/.test(t.id.toUpperCase()) && t.id.length <= 5).map((t) => `<p><strong>${esc(t.plEgzamin)}</strong> = ${esc(t.en || '')}${t.wymowa ? ` (wym. „${esc(t.wymowa)}”)` : ''}</p>`).join(''),
    dlaczego: ts.map((t) => t.dlaczegoWazne ? `<p><strong>${esc(t.plEgzamin)}:</strong> ${rich(t.dlaczegoWazne)}</p>` : '').join(''),
    'nie-mylic': ts.map((t) => {
      const z = (t.zagmatwania || [])[0];
      const n = (t.nieMylicZ || [])[0];
      const other = n && (typeof n === 'string' ? n : n.termin);
      const on = other && terms && terms.get(other) ? terms.get(other).plEgzamin : other;
      return z ? `<p><strong>${esc(t.plEgzamin)}:</strong> <span class="myth-x">${rich(z.mit)}</span> → ${rich(z.prawda)}</p>`
        : n ? `<p><strong>${esc(t.plEgzamin)}</strong> ≠ <strong>${esc(on || '')}</strong>${n.roznica ? ` – ${rich(n.roznica)}` : ''}</p>` : '';
    }).join(''),
    powiazanie: ts.map((t) => (t.powiazane || []).length ? `<p><strong>${esc(t.plEgzamin)}</strong> → ${t.powiazane.map((id) => `<button class="inline-term" data-term="${esc(id)}">${esc((terms && terms.get(id)?.plEgzamin) || id)}</button>`).join(', ')}</p>` : '').join(''),
    kontrowersja: ts.map((t) => (['C', 'D'].includes(t.statusTlumaczenia) && t.zrodloTlumaczenia && t.zrodloTlumaczenia.uwaga) ? `<p><strong>${esc(t.en || t.plEgzamin)}</strong> – status tłumaczenia ${esc(t.statusTlumaczenia)}: ${rich(t.zrodloTlumaczenia.uwaga)}</p>` : '').join(''),
    sprawdz: (() => { const m = slide && slide.md && slide.md.match(/^sprawdz:\s*[PF]\s*::\s*(.+?)\s*::/m); return m ? `<p>Prawda czy fałsz: <em>${rich(m[1])}</em> – odpowiedz pod przykładem na slajdzie.</p>` : ''; })(),
  };
  return SB_ORDER.filter(([k]) => !laik || LAIK_SB.has(k)).map(([k, label]) => {
    const html = sb[k] ? (rmd ? rmd(sb[k]) : rich(sb[k])) : (fromTerms[k] || '');
    return html ? `<section class="sb-sec sb-${k}"><div class="box-label">${label}</div>${html}</section>` : '';
  }).join('');
}
