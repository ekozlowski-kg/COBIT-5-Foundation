// Widok „Mapa” (METODYKA §3): cała taksonomia COBIT 5; węzły odblokowują się po ukończeniu lekcji.
import * as C from '../content.js';
import { esc, TERM_RE } from '../md.js';
import { store } from '../store.js';
import { mapFull } from '../maptree.js';
import { termDetail, bindTermDetail } from '../ui.js';

export async function renderMap(main) {
  const [m, terms, units] = await Promise.all([C.mapa(), C.terms(), C.units()]);
  if (!m.ok) {
    main.innerHTML = '<div class="page"><h1>Mapa COBIT 5</h1><p class="page-lead">Mapa COBIT 5 jest jeszcze w przygotowaniu.</p></div>';
    return;
  }
  const termByNode = new Map();
  for (const t of terms.values()) if (t.mapa && !termByNode.has(t.mapa)) termByNode.set(t.mapa, t);

  // Odblokowanie: węzły haseł z przypisów ukończonych lekcji + bloki :::mapa, wraz z przodkami.
  const done = units.filter((u) => store.unit(u.id).done);
  const unlocked = new Set();
  const addWithAncestors = (id) => { if (!m.nodes.has(id)) return; unlocked.add(id); m.ancestors(id).forEach((a) => unlocked.add(a.id)); };
  for (const u of done) {
    try {
      const l = await C.lesson(u.id);
      for (const s of l.slides) {
        for (const x of s.md.matchAll(TERM_RE)) { const t = terms.get(x[1]); if (t && t.mapa) addWithAncestors(t.mapa); }
        for (const x of s.md.matchAll(/^:::mapa\s+(\S+)/gm)) addWithAncestors(x[1]);
      }
    } catch (e) { /* lekcja niedostępna – pomijamy */ }
  }
  let showAll = false;

  function draw() {
    const total = m.list.length;
    main.innerHTML = `
      <div class="page" style="max-width:1100px">
        <h1>Mapa COBIT 5</h1>
        <p class="page-lead">Gdzie leży każde pojęcie? Egzamin często podsuwa zdanie prawdziwe, ale z innej kategorii – ta mapa pomaga je odróżnić. Węzły odblokowują się po ukończeniu lekcji (${unlocked.size}/${total}).</p>
        <div class="btn-row" style="margin-bottom:14px">
          <button class="flag-btn" id="showAll" aria-pressed="${showAll}">Pokaż całą mapę (także zablokowane)</button>
          <span class="small muted">Obszary: PR – zasady · EN – aktywatory · IM – wdrożenie · PC – zdolność procesu</span>
        </div>
        <div class="map-layout">
          <div class="card map-tree-card">${mapFull(m, { unlocked: showAll ? null : unlocked, termByNode })}</div>
          <div class="card map-detail" id="mapDetail"><p class="sb-empty">Kliknij węzeł z przypisem, aby zobaczyć hasło.</p></div>
        </div>
      </div>`;
    document.getElementById('showAll').addEventListener('click', () => { showAll = !showAll; draw(); });
    main.querySelectorAll('[data-term]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); open(b.dataset.term); }));
  }
  function open(id) {
    const el = document.getElementById('mapDetail');
    const t = terms.get(id);
    el.innerHTML = `<p class="small muted" style="margin-top:0">${t && t.mapa ? esc(m.path(t.mapa)) : ''}</p>` + termDetail(t, { terms });
    bindTermDetail(el, t, { onTerm: open });
    if (window.matchMedia('(max-width: 860px)').matches) el.scrollIntoView({ behavior: 'smooth' });
  }
  draw();
}
