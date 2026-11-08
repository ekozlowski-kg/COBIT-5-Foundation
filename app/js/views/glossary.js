// Słownik pojęć: lista + pełny przypis. Tabela pułapek terminologicznych (EN / podręcznik PL / egzamin PL).
import * as C from '../content.js';
import { esc } from '../md.js';
import { termDetail, bindTermDetail, trapPill } from '../ui.js';
import { store } from '../store.js';
import { atomAtlas, RUNGS } from '../progress.js';

const CATS = { '': 'Wszystkie', podstawowe: 'Pojęcia podstawowe', standard: 'Standardy i frameworki', skrot: 'Skróty', egzaminacyjne: 'Pojęcia egzaminacyjne' };

export async function renderGlossary(main, selected) {
  const [terms, traps, units, questions, mapa] = await Promise.all([C.terms(), C.traps(), C.units(), C.questions(), C.mapa()]);
  // §17.10 – słownik narastający: hasła z ukończonych lekcji (wprowadza + przypisy) i ich stopień.
  const learned = new Set();
  for (const u of units.filter((x) => store.unit(x.id).done)) {
    (u.wprowadza || []).forEach((id) => learned.add(id));
    try { (await C.lesson(u.id)).slides.forEach((sl) => [...sl.md.matchAll(/\[\[([a-z0-9-]+)/g)].forEach((m) => learned.add(m[1]))); } catch (e) { /* pomijamy */ }
  }
  const rung = new Map(atomAtlas(mapa, terms, questions, units).filter((a) => a.term).map((a) => [a.term.id, a.level]));
  let onlyLearned = learned.size > 0;
  let q = '';
  let cat = '';
  let onlyTrap = false;
  let active = selected && terms.has(selected) ? selected : null;

  main.innerHTML = `
    <div class="page" style="max-width:1200px">
      <h1>Słownik pojęć</h1>
      <p class="page-lead">Każde hasło: termin angielski z wymową, nazwa z egzaminu PL i z podręcznika, definicja, po ludzku, przykłady od życia do IT i źródło. Słownik rośnie razem z Twoimi lekcjami.</p>
      <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:20px" class="gl-grid">
        <div>
          <label class="sr-only" for="glSearch">Szukaj</label>
          <input class="search" id="glSearch" type="search" placeholder="Szukaj: Ład, Governance, Nadzór…">
          <div class="btn-row" style="margin-bottom:12px">
            <label class="sr-only" for="glCat">Kategoria</label>
            <select id="glCat" class="search" style="width:auto;margin:0">${Object.entries(CATS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select>
            <button class="flag-btn" id="glTrap" aria-pressed="false">⚠ Tylko pułapki</button>
            <button class="flag-btn" id="glLearned" aria-pressed="${learned.size > 0}">Tylko poznane (${learned.size})</button>
          </div>
          <ul class="fn-list card" style="padding:8px" id="glList"></ul>
        </div>
        <div class="card" id="glDetail" style="align-self:start;position:sticky;top:calc(var(--topbar-h) + 16px);max-height:calc(100vh - var(--topbar-h) - 32px);overflow-y:auto"></div>
      </div>
      <h2 style="margin:40px 0 10px;font-size:1.3rem">Zestawienie rozbieżności w tłumaczeniu</h2>
      <p class="muted small" style="margin:0 0 12px">Na egzaminie liczy się kolumna „Egzamin PL”. Źródła: Altkom Akademia v1.1 (2024) i Sample Paper 1 PL; „do potwierdzenia” = nie widzieliśmy tej nazwy w oficjalnym arkuszu.</p>
      <div class="card" style="overflow-x:auto;padding:0">
        <table class="trap-table" style="width:100%;border-collapse:collapse;font-size:.92rem">
          <thead><tr>${['EN (podręczniki)', 'Podręcznik PL', 'Egzamin PL'].map((h) => `<th scope="col" style="text-align:left;padding:10px 14px;border-bottom:1px solid var(--border);color:var(--text-2)">${h}</th>`).join('')}</tr></thead>
          <tbody>${traps.map((t) => `<tr>
            <td style="padding:10px 14px;border-bottom:1px solid var(--border)">${esc(t.en || '')}</td>
            <td style="padding:10px 14px;border-bottom:1px solid var(--border);color:var(--text-2)">${esc(t.podrecznik || '')}</td>
            <td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:700">${t.termId && terms.has(t.termId) ? `<a href="#/slownik/${esc(t.termId)}" style="color:inherit">${esc(t.egzamin)}</a>` : esc(t.egzamin)}${t.status === 'niepotwierdzone' ? ' <span class="pill pill-draft">do potwierdzenia</span>' : ''}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
    <style>@media (max-width: 860px){ .gl-grid{grid-template-columns:1fr !important} #glDetail{position:static !important;max-height:none !important} }</style>`;

  const list = () => {
    const s = q.toLowerCase();
    const res = [...terms.values()]
      .filter((t) => (!cat || t.kategoria === cat) && (!onlyTrap || t.pulapka) && (!onlyLearned || learned.has(t.id)))
      .filter((t) => !s || [t.plEgzamin, t.plPodrecznik, t.en, ...(t.plInne || [])].some((x) => x && x.toLowerCase().includes(s)))
      .sort((a, b) => a.plEgzamin.localeCompare(b.plEgzamin, 'pl'));
    const mistakes = store.get().mistakes;
    document.getElementById('glList').innerHTML = res.map((t) => `<li><button data-open="${esc(t.id)}" ${t.id === active ? 'style="background:var(--accent-soft)"' : ''}>
      <span>${mistakes[t.id] ? `<span title="Błędy" style="color:var(--bad)">●</span>` : ''}</span>
      <strong>${esc(t.en || t.plEgzamin)}${t.en ? ` <span class="muted" style="font-weight:500">· ${esc(t.plEgzamin)}</span>` : ''}</strong>${t.pulapka ? trapPill() : '<span></span>'}
      <span class="l1">${rung.get(t.id) ? `stopień: ${esc(RUNGS[rung.get(t.id)])} · ` : ''}${t.wymowa ? `wym. „${esc(t.wymowa)}”` : ''}${t.plPodrecznik && t.plPodrecznik !== t.plEgzamin ? ` · podręcznik: ${esc(t.plPodrecznik)}` : ''}</span></button></li>`).join('')
      || '<li class="sb-empty">Brak wyników.</li>';
    document.querySelectorAll('#glList [data-open]').forEach((b) => b.addEventListener('click', () => open(b.dataset.open)));
  };
  const open = (id) => {
    active = id;
    history.replaceState(null, '', `#/slownik/${id}`);
    const el = document.getElementById('glDetail');
    const t = terms.get(id);
    el.innerHTML = termDetail(t, { terms, ctxStart: store.get().mistakes[id] || 0 });
    bindTermDetail(el, t, { onTerm: open });
    list();
    if (window.matchMedia('(max-width: 860px)').matches) el.scrollIntoView({ behavior: 'smooth' });
  };

  document.getElementById('glSearch').addEventListener('input', (e) => { q = e.target.value.trim(); list(); });
  document.getElementById('glCat').addEventListener('change', (e) => { cat = e.target.value; list(); });
  document.getElementById('glLearned').addEventListener('click', (e) => { onlyLearned = !onlyLearned; e.currentTarget.setAttribute('aria-pressed', String(onlyLearned)); list(); });
  document.getElementById('glTrap').addEventListener('click', (e) => { onlyTrap = !onlyTrap; e.currentTarget.setAttribute('aria-pressed', String(onlyTrap)); list(); });

  list();
  if (active) open(active);
  else document.getElementById('glDetail').innerHTML = '<p class="sb-empty">Wybierz pojęcie z listy.</p>';
}
