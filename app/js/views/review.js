// Powtórki adaptacyjne: pojęcia, które mylisz, wracają z INNYM przykładem i INNYM pytaniem.
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';
import { renderQuestion } from '../quiz.js';
import { termDetail, bindTermDetail, toast } from '../ui.js';
import { termQueue } from '../progress.js';
import { runSequence } from '../quiz.js';

export async function renderReview(main) {
  const [terms, questions, units] = await Promise.all([C.terms(), C.questions(), C.units()]);
  const st = store.get();
  const confused = Object.entries(st.mistakes).filter(([id]) => terms.has(id)).sort((a, b) => b[1] - a[1]);
  const wrongQs = [...questions.values()].filter((q) => st.answers[q.id] && !st.answers[q.id].lastCorrect);
  const termQ = termQueue(units, questions, 10);
  const flagged = Object.entries(st.flags).filter(([k, f]) => k.startsWith('slide:') && (f.powtorka || f.nieRozumiem));
  const unitTitle = (id) => units.find((u) => u.id === id)?.tytul || id;

  main.innerHTML = `
    <div class="page">
      <h1>Powtórki</h1>
      <p class="page-lead">Aplikacja pamięta, co mylisz. Pojęcie wraca z przykładem z innego kontekstu i z innym pytaniem, a nie z tym samym.</p>

      <h2 style="font-size:1.2rem">Pojęcia, które mylisz</h2>
      ${confused.length ? `<div class="grid grid-2">${confused.map(([id, n]) => `
        <div class="card"><div class="btn-row" style="justify-content:space-between">
          <strong>${esc(terms.get(id).plEgzamin)}</strong><span class="pill" style="color:var(--bad)">${n}× błąd</span></div>
          <p class="small muted" style="margin:6px 0 12px">${esc(terms.get(id).en || '')}</p>
          <button class="btn btn-primary" data-work="${esc(id)}">Przepracuj</button></div>`).join('')}</div>`
        : '<p class="muted">Na razie brak. Pojęcia pojawią się tutaj po błędnych odpowiedziach w ćwiczeniach.</p>'}
      <div id="workArea" style="margin-top:20px"></div>

      ${termQ.length ? `<h2 style="font-size:1.2rem;margin-top:36px">Nazwy po angielsku do utrwalenia (${termQ.length})</h2>
        <p class="small muted">Wracają spiralnie: najpierw pomyłki, potem nowe, potem te sprzed kilku dni.</p>
        <div class="btn-row"><button class="btn btn-primary" id="termBtn">Ćwicz nazwy EN</button></div><div id="termArea" style="margin-top:16px"></div>` : ''}

      <h2 style="font-size:1.2rem;margin-top:36px">Pytania do ponownego rozwiązania (${wrongQs.length})</h2>
      ${wrongQs.length ? `<div class="btn-row"><button class="btn" id="retryBtn">Rozwiąż ponownie</button></div><div id="retryArea" style="margin-top:16px"></div>` : '<p class="muted">Brak.</p>'}

      <h2 style="font-size:1.2rem;margin-top:36px">Oznaczone slajdy</h2>
      ${flagged.length ? `<ul class="unit-list card">${flagged.map(([k, f]) => {
        const [, uid, idx] = k.split(':');
        return `<li><a href="#/lekcja/${esc(uid)}/${+idx + 1}">${f.nieRozumiem ? '<span class="pill" style="color:var(--bad)">Nie rozumiem</span>' : '<span class="pill">Do powtórki</span>'}
          <span>${esc(unitTitle(uid))} · slajd ${+idx + 1}</span></a></li>`;
      }).join('')}</ul>` : '<p class="muted">Brak oznaczonych slajdów.</p>'}
    </div>`;

  // Przepracowanie pojęcia: inny kontekst przykładu + pytanie, które dotyczy tego pojęcia.
  main.querySelectorAll('[data-work]').forEach((b) => b.addEventListener('click', () => work(b.dataset.work)));
  document.getElementById('termBtn')?.addEventListener('click', (e) => { e.currentTarget.hidden = true; runSequence(document.getElementById('termArea'), termQ, { title: 'Nazwy po angielsku' }); });
  function work(id) {
    const t = terms.get(id);
    const n = store.get().mistakes[id] || 0;
    const related = [...questions.values()].filter((q) => C.termsOfQuestion(q).includes(id));
    const fresh = related.filter((q) => !store.answer(q.id) || !store.answer(q.id).lastCorrect);
    const pool = fresh.length ? fresh : related;
    const q = pool.length ? pool[(n + Math.floor(Math.random() * pool.length)) % pool.length] : null;
    const area = document.getElementById('workArea');
    area.innerHTML = `<div class="grid" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px" id="workGrid">
        <div class="card" id="workTerm"></div>
        <div class="card" id="workQ">${q ? '' : '<p class="muted">Brak pytań powiązanych z tym pojęciem. Przeczytaj przypis i oznacz jako opanowane.</p><button class="btn" id="masterBtn">Opanowane</button>'}</div>
      </div><style>@media (max-width:860px){#workGrid{grid-template-columns:1fr !important}}</style>`;
    const wt = document.getElementById('workTerm');
    wt.innerHTML = `<p class="small muted" style="margin-top:0">Tym razem przykład z innego kontekstu:</p>` + termDetail(t, { terms, ctxStart: n });
    bindTermDetail(wt, t, { onTerm: (x) => { if (terms.has(x)) work(x); } });
    if (q) {
      renderQuestion(document.getElementById('workQ'), q, {
        onAnswered: (ok) => {
          if (ok) { store.decMistake(id); toast('Dobrze – licznik błędów zmniejszony'); }
        },
      });
    } else {
      document.getElementById('masterBtn').addEventListener('click', () => { store.clearMistake(id); renderReview(main); });
    }
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const rb = document.getElementById('retryBtn');
  if (rb) rb.addEventListener('click', () => {
    let i = 0;
    const area = document.getElementById('retryArea');
    const step = () => {
      if (i >= wrongQs.length) { area.innerHTML = '<p class="muted">Koniec listy.</p>'; return; }
      area.innerHTML = `<div class="card"><div id="rq"></div><div class="btn-row" style="margin-top:12px"><button class="btn" id="rqNext">Następne →</button></div></div>`;
      renderQuestion(document.getElementById('rq'), wrongQs[i], {});
      document.getElementById('rqNext').addEventListener('click', () => { i++; step(); });
    };
    step();
  });
}
