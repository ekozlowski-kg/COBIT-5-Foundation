// Moduły (METODYKA §17.12–§17.13): strona modułu, sprawdzian w 6 częściach z miękką bramką i bibliografia generowana z przypisów.
import * as C from '../content.js';
import { esc, render } from '../md.js';
import { store } from '../store.js';
import { renderQuestion } from '../quiz.js';
import { poLudzku } from '../ui.js';
import { isTermDrill } from '../progress.js';

export const CZESCI = [
  ['wiedza', 'Wiedza'], ['terminologia', 'Terminologia (EN i PL)'], ['rozroznianie', 'Rozróżnianie'],
  ['mechanizmy', 'Mechanizmy'], ['zastosowanie', 'Zastosowanie'], ['synteza', 'Synteza'],
];
const KAT = { 'publikacja-zrodlowa': 'Publikacje źródłowe', standard: 'Normy i standardy', dokumentacja: 'Dokumentacja', literatura: 'Literatura', 'material-dydaktyczny': 'Materiały dydaktyczne' };
const strip = (h) => h.replace(/^<p>|<\/p>$/g, '');

const examState = (kod) => ((store.get().moduleExams || {})[kod]) || null;
function saveExam(kod, r) {
  const st = store.get();
  st.moduleExams = st.moduleExams || {};
  st.moduleExams[kod] = { at: Date.now(), ...r };
  store.setFlag(`modul:${kod}`, 'samoocena', r.pass ? 'zaliczony' : 'niezaliczony'); // zapis + trwałość w eksporcie
}

/** Status sprawdzianów wszystkich modułów (do Gotowości). */
export async function moduleStatus() {
  const qs = [...(await C.questions()).values()].filter((q) => q.sprawdzian);
  const mods = [...new Set(qs.map((q) => q.sprawdzian))];
  return mods.map((kod) => ({ kod, pass: !!(examState(kod) || {}).pass, tried: !!examState(kod) }));
}

export async function renderModules(main) {
  const [mods, units, questions] = await Promise.all([C.moduly(), C.units(), C.questions()]);
  // Kolejność kursu (lekcje są posortowane jak w planie), a moduły bez lekcji na końcu.
  const codes = [...new Set([...units.map((u) => u.modul.kod), ...mods.map((m) => m.modul)])];
  const withExam = new Set([...questions.values()].filter((q) => q.sprawdzian).map((q) => q.sprawdzian));
  main.innerHTML = `<div class="page page-narrow"><p class="eyebrow">Kurs w modułach</p><h1>Moduły</h1>
    <p class="page-lead">Każdy moduł kończy się sprawdzianem w 6 częściach. Próg: 70% w każdej części. Można iść dalej bez zaliczenia, ale moduł zostaje „niezaliczony” w Gotowości.</p>
    <div class="places">${codes.map((kod) => {
      const meta = mods.find((m) => m.modul === kod);
      const us = units.filter((u) => u.modul.kod === kod);
      const ex = examState(kod);
      return `<a class="place" href="#/modul/${esc(kod)}"><strong>${esc((meta && meta.nazwa) || (us[0] && us[0].modul.tytul) || kod)}</strong>
        <span>${us.filter((u) => store.unit(u.id).done).length}/${us.length} lekcji${withExam.has(kod) ? ` · sprawdzian: ${ex ? (ex.pass ? '✓ zaliczony' : 'niezaliczony') : 'jeszcze nie'}` : ''}</span></a>`;
    }).join('')}</div></div>`;
}

export async function renderModule(main, kod) {
  const [mods, units, questions, terms, registry] = await Promise.all([C.moduly(), C.units(), C.questions(), C.terms(), C.zrodla()]);
  const meta = mods.find((m) => m.modul === kod) || { modul: kod };
  const us = units.filter((u) => u.modul.kod === kod);
  const exam = [...questions.values()].filter((q) => q.sprawdzian === kod);
  // Część „Terminologia” z < 2 pytaniami – dobieramy ćwiczenia EN dla haseł modułu (terminy modułu albo wprowadza jego lekcji).
  if (exam.length && exam.filter((q) => q.czesc === 'terminologia').length < 2) {
    const modTerms = new Set([...(meta.terminy || []), ...us.flatMap((u) => u.wprowadza || [])]);
    const extra = [...questions.values()].filter((q) => isTermDrill(q) && [...(q.terminy || []), ...(q.termin ? [q.termin] : [])].some((id) => modTerms.has(id)))
      .slice(0, 3 - exam.filter((q) => q.czesc === 'terminologia').length).map((q) => ({ ...q, czesc: 'terminologia' }));
    exam.push(...extra);
  }
  const ex = examState(kod);
  // Bibliografia: przypisy lekcji modułu + źródła haseł z „terminy” + ręczne dopiski, wg kategorii rejestru.
  const docs = new Set();
  for (const u of us) {
    try { const l = await C.lesson(u.id); for (const s of l.slides) for (const x of s.sources) docs.add(x.split(/\s+/)[0]); } catch (e) { /* lekcja niedostępna */ }
  }
  for (const id of meta.terminy || []) for (const z of (terms.get(id)?.zrodla || [])) docs.add(z.doc);
  for (const list of Object.values(meta.bibliografia || {})) for (const d of [].concat(list || [])) docs.add(d);
  const byKat = {};
  for (const d of docs) { const r = registry[d] || {}; (byKat[r.kategoria || 'material-dydaktyczny'] ||= []).push([d, r]); }
  const list = (title, arr) => (arr && arr.length ? `<h2 class="section-title">${title}</h2><ul class="cheat">${arr.map((x) => `<li>${strip(render(String(x)))}</li>`).join('')}</ul>` : '');
  main.innerHTML = `<div class="page page-narrow">
    <p class="eyebrow">Moduł ${esc(kod)}</p><h1>${esc(meta.nazwa || (us[0] && us[0].modul.tytul) || kod)}</h1>
    ${meta.tresc ? `<div class="page-lead">${render(meta.tresc.replace(/<!--[\s\S]*?-->/g, ''))}</div>` : ''}
    ${(meta.wymagania || []).length ? `<p class="small muted">Wymagania: ${meta.wymagania.map((w) => `<a href="#/modul/${esc(w)}">${esc(w)}</a>`).join(', ')}</p>` : ''}
    ${list('Co będziesz wiedzieć', meta.wiedza)}
    ${list('Co będziesz umieć zrobić', meta.umiejetnosci)}
    ${(meta.terminy || []).length ? `<h2 class="section-title">Terminy do aktywnego używania</h2><ul class="unit-list">${meta.terminy.map((id) => {
      const t = terms.get(id);
      return t ? `<li><a href="#/slownik/${esc(id)}"><span><strong>${esc(t.en || t.plEgzamin)}</strong> – ${esc(t.plEgzamin)}</span><span class="small muted" style="margin-left:auto">${esc(t.wymowa ? `wym. „${t.wymowa}”` : '')}</span></a></li>` : '';
    }).join('')}</ul>` : ''}
    ${list('Zadania praktyczne', meta.zadania)}
    ${us.length ? `<h2 class="section-title">Lekcje</h2><ul class="unit-list">${us.map((u) => `<li><a href="#/lekcja/${esc(u.id)}"><span class="check ${store.unit(u.id).done ? 'done' : ''}" aria-hidden="true">${store.unit(u.id).done ? '✓' : ''}</span><span>${esc(u.tytul)}</span></a></li>`).join('')}</ul>` : ''}
    <h2 class="section-title">Sprawdzian modułu</h2>
    ${exam.length ? `<p class="small muted">6 części: ${CZESCI.map(([, l]) => l).join(' · ')}. Próg: ${(meta.kryteria && meta.kryteria.wiedza) || 70}% w każdej części.</p>
      ${ex ? `<ul class="ready">${CZESCI.map(([k, l]) => { const r = (ex.parts || {})[k]; const p = r && r.total ? Math.round((r.ok / r.total) * 100) : null; const okp = p !== null && p >= ((meta.kryteria || {})[k] || 70);
        return `<li><span class="check ${okp ? 'done' : ''}" aria-hidden="true">${okp ? '✓' : ''}</span><span>${l}</span><span class="detail">${p === null ? '—' : p + '%'}</span></li>`; }).join('')}</ul>` : ''}
      <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary btn-lg" id="examGo">${ex ? 'Podejdź jeszcze raz' : 'Rozpocznij sprawdzian'}</button>
        ${ex && !ex.pass ? '<button class="btn btn-lg" id="examFailed">Tylko niezaliczone części</button>' : ''}</div>`
      : '<p class="muted small">Sprawdzian tego modułu jest w przygotowaniu.</p>'}
    <div id="examArea"></div>
    ${docs.size ? `<h2 class="section-title">Bibliografia modułu</h2>${Object.entries(byKat).map(([k, arr]) => `<p class="small"><strong>${esc(KAT[k] || k)}</strong></p><ul class="cheat">${arr.map(([d, r]) => `<li>${esc(r.autor ? r.autor + ', ' : '')}<em>${esc(r.tytul || d)}</em>${r.rok ? `, ${esc(String(r.rok))}` : ''}${r.url ? ` – <a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url)}</a>` : ''}</li>`).join('')}</ul>`).join('')}` : ''}
  </div>`;

  const run = (onlyFailed) => {
    const failed = new Set(onlyFailed && ex ? CZESCI.map(([k]) => k).filter((k) => { const r = (ex.parts || {})[k]; return !r || !r.total || (r.ok / r.total) * 100 < ((meta.kryteria || {})[k] || 70); }) : CZESCI.map(([k]) => k));
    const qs = CZESCI.flatMap(([k]) => exam.filter((q) => q.czesc === k && failed.has(k)));
    const parts = onlyFailed && ex ? JSON.parse(JSON.stringify(ex.parts || {})) : {};
    for (const k of failed) parts[k] = { ok: 0, total: 0 };
    const area = document.getElementById('examArea');
    let k = 0;
    const step = () => {
      if (k >= qs.length) {
        const pass = CZESCI.every(([c]) => { const r = parts[c]; return !exam.some((q) => q.czesc === c) || (r && r.total && (r.ok / r.total) * 100 >= ((meta.kryteria || {})[c] || 70)); });
        saveExam(kod, { parts, pass });
        const weak = CZESCI.filter(([c]) => { const r = parts[c]; return r && r.total && (r.ok / r.total) * 100 < ((meta.kryteria || {})[c] || 70); });
        area.innerHTML = `<div class="feedback ${pass ? 'ok' : 'bad'}" style="margin-top:16px">${pass ? '<strong>Moduł zaliczony.</strong>' : `<strong>Jeszcze nie.</strong> Do powtórki: ${weak.map(([, l]) => l).join(', ')}.`}</div>
          ${weak.length ? `<div class="hint-box"><div class="box-label">Dodatkowe wyjaśnienie</div>${(meta.terminy || []).slice(0, 8).map((id) => terms.get(id)).filter(Boolean).map((t) => `<p><strong>${esc(t.en || t.plEgzamin)}</strong> (${esc(t.plEgzamin)}) – ${esc(poLudzku(t) || t.poziom1 || '')}</p>`).join('')}
            <p class="small muted">Przejrzyj te terminy i lekcje modułu, potem podejdź jeszcze raz tylko do niezaliczonych części.</p></div>` : ''}
          <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary btn-lg" id="examBack">Wróć do modułu</button></div>`;
        document.getElementById('examBack').addEventListener('click', () => renderModule(main, kod));
        return;
      }
      const q = qs[k];
      area.innerHTML = `<div class="card" style="margin-top:12px"><div class="slide-kind">${esc(CZESCI.find(([c]) => c === q.czesc)?.[1] || '')} · pytanie ${k + 1} z ${qs.length}</div><div id="mq"></div>
        <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary btn-lg" id="mqNext" hidden>${k === qs.length - 1 ? 'Wynik →' : 'Dalej →'}</button></div></div>`;
      renderQuestion(document.getElementById('mq'), q, { confidence: true, onAnswered: (ok) => {
        const r = parts[q.czesc] || (parts[q.czesc] = { ok: 0, total: 0 });
        r.total++; if (ok) r.ok++;
        const n = document.getElementById('mqNext'); n.hidden = false; n.focus();
      } });
      document.getElementById('mqNext').addEventListener('click', () => { k++; step(); });
      area.scrollIntoView({ block: 'start' });
    };
    step();
  };
  document.getElementById('examGo')?.addEventListener('click', () => run(false));
  document.getElementById('examFailed')?.addEventListener('click', () => run(true));
}
