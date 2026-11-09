// Centrum egzaminacyjne: symulacja 50 pytań / 40 min, wynik w podziale na obszary PR/EN/IM/PC, analiza błędów.
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';
import { renderExamQuestion, renderQuestion, correctIndex, trapStats, trapTable } from '../quiz.js';
import { currentDay } from '../progress.js';
import { toast } from '../ui.js';
import { runExamSession } from './exam-session.js';
import { topicParts } from '../diagnoza.js';

// Proporcje obszarów: syllabus.json → egzamin.wagi (rozkład Sample Paper 1: EN 21 · PR 15 · IM 7 · PC 7).
let AREA_WEIGHT = { PR: 0.3, EN: 0.42, IM: 0.14, PC: 0.14 };

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

function drawAuthored(poolAll, n) {
  // §12.3 – symulacja odwzorowuje egzamin: pytań skrajnych najwyżej 10%.
  const maxExtreme = Math.floor(n * 0.1);
  const extreme = shuffle(poolAll.filter((q) => q.skrajnosc)).slice(0, maxExtreme);
  const pool = [...poolAll.filter((q) => !q.skrajnosc), ...extreme];
  // Druga symulacja w miarę możliwości bez pytań z poprzednich (pula wystarcza na 2 rozłączne arkusze).
  const used = new Set(store.get().examUsed || []);
  const byArea = {};
  const ordered = [...shuffle(pool.filter((q) => !used.has(q.id))), ...shuffle(pool.filter((q) => used.has(q.id)))];
  // Jak w Sample Paper 1: zwykle jedno pytanie na temat sylabusa. Limit na temat, żeby np. nazwy procesów
  // (najliczniejsza część banku pytań) nie zdominowały arkusza.
  const cap = Math.max(1, Math.ceil(n / 25));
  const perTopic = {};
  for (const q of ordered) {
    const code = C.firstCode(q);
    if ((perTopic[code] = (perTopic[code] || 0) + 1) > cap) continue;
    (byArea[C.areaOf(code)] ||= []).push(q);
  }
  const out = [];
  // Największe reszty: dokładnie n miejsc rozdzielonych wg wag.
  const quota = Object.entries(AREA_WEIGHT).map(([a, w]) => ({ a, exact: n * w, k: Math.floor(n * w) }));
  let left = n - quota.reduce((x, q) => x + q.k, 0);
  quota.sort((x, y) => (y.exact - y.k) - (x.exact - x.k)).forEach((q) => { if (left > 0) { q.k++; left--; } });
  for (const q of quota) out.push(...(byArea[q.a] || []).slice(0, q.k));
  const rest = shuffle(pool.filter((q) => !out.includes(q)));
  while (out.length < n && rest.length) out.push(rest.pop());
  return shuffle(out).slice(0, n);
}

export async function renderExam(main) {
  const [questions, sample, w, units, dayList] = await Promise.all([C.questions(), C.samplePaper(), C.wagi(), C.units(), C.days()]);
  const sp1Day = C.firstSp1Day(dayList); // §18.3 – SP1 odblokowany w dniu z sp1: true
  const wSum = Object.values(w).reduce((a, b) => a + b, 0) || 50;
  AREA_WEIGHT = Object.fromEntries(Object.entries(w).map(([a, v]) => [a, v / wSum]));
  store.ensureStarted();
  const dayNow = currentDay(units);
  // Plan dni zastąpił podręcznik krok po kroku – arkusz nie jest już blokowany dniem kursu.
  const sp1Locked = false;
  const authored = [...questions.values()].filter((q) => (q.typ === 'egzamin' || q.typ === 'studium') && !q.pretest && !q.final && q.opcje?.length === 4);
  // §15 – finał: pytania z plików final-* (pliki, www, mistrz); odblokowanie po pierwszym podejściu do SP1.
  const finalPool = [...questions.values()].filter((q) => q.final && (q.typ === 'egzamin' || q.typ === 'studium') && q.opcje?.length === 4);
  // Bez arkusza (wersja do udostępnienia) finał odblokowuje się od razu.
  const sp1Done = () => !sample || store.get().exams.some((e) => e.name === 'Sample Paper 1');
  let sessionCleanup = null;

  function lobby() {
    const exams = store.get().exams;
    main.innerHTML = `
      <div class="page">
        <h1>Centrum egzaminacyjne</h1>
        <p class="page-lead">Jak egzamin komputerowy PeopleCert po polsku: 50 pytań, 4 odpowiedzi, jedna poprawna, jedno pytanie na ekranie, możliwość oznaczenia pytania do powrotu, 40 minut. Próg zaliczenia: 25/50; cel w próbnych egzaminach: co najmniej 35/50. Omówienie dopiero po zakończeniu.</p>
        <p class="small muted" style="margin:-16px 0 24px">Dodatkowe 10 minut przysługuje przy egzaminie w języku innym niż ojczysty albo osobom z niepełnosprawnością, więc tu ich nie ma (sylabus PeopleCert v01.2, pkt 3.3). Sylabus podaje próg „50% (20 or more marks)” – bezpieczniej celować w co najmniej 25 z 50.</p>
        <label class="card" style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;cursor:pointer">
          <input type="checkbox" id="fullFlow" checked style="margin-top:4px">
          <span><strong>Pełna procedura krok po kroku</strong><br><span class="small muted">Test systemu, logowanie, NDA, instrukcja, samouczek, zasady, dokument tożsamości, kontrola z proktorem, egzamin, ankieta i raport – w kolejności jak w dniu egzaminu online. Odznacz, żeby od razu przejść do pytań.</span></span>
        </label>
        <div class="grid grid-2">
          ${sample ? `<div class="card">
            <h3 style="margin-top:0">Sample Paper 1 (PL)</h3>
            <p class="muted small">${sample ? `${sample.length} pytań z oficjalnego arkusza próbnego, z uzasadnieniami. Tylko do użytku lokalnego.` : 'Arkusza Sample Paper 1 nie ma jeszcze na tym komputerze.'}</p>
            ${sp1Locked && sample ? `<p class="small" style="color:var(--trap)">🔒 Zablokowany do dnia ${sp1Day} (dziś: dzień ${dayNow}). To jedyny niezależny pomiar na nieznanych pytaniach.</p>` : ''}
            <button class="btn ${sp1Locked ? '' : 'btn-primary'}" data-start="sample" ${sample ? '' : 'disabled'}>${sp1Locked ? 'Otwórz mimo blokady…' : 'Rozpocznij'}</button>
          </div>` : `<div class="card">
            <h3 style="margin-top:0">Oficjalny arkusz próbny</h3>
            <p class="muted small">Arkusz próbny PeopleCert (Sample Paper) jest chroniony prawem autorskim, więc nie ma go w tej wersji aplikacji. Poproś o niego organizatora szkolenia albo ośrodek egzaminacyjny i rozwiąż go na papierze w 40 minut – to najlepszy niezależny pomiar.</p>
          </div>`}
          <div class="card">
            <h3 style="margin-top:0">Próbny egzamin z pytań kursu</h3>
            <p class="muted small">${authored.length} pytań w puli. Losowanie w proporcjach egzaminu: ${Object.entries(w).map(([a, v]) => `${a} ${v}`).join(' · ')} (na 50).</p>
            <div class="btn-row">
              <button class="btn btn-primary" data-start="authored" ${authored.length >= 10 ? '' : 'disabled'}>Pełna (${Math.min(50, authored.length)} pytań)</button>
              <button class="btn" data-start="mini" ${authored.length >= 10 ? '' : 'disabled'}>Krótka (10 pytań / 8 min)</button>
            </div>
            ${authored.length < 10 ? '<p class="small muted">Pula zapełni się wraz z kolejnymi partiami treści.</p>' : ''}
          </div>
        </div>
        <h2 class="section-title">Finał – „skrajnie biegły”</h2>
        <div class="grid grid-2">
          ${sample ? `<div class="card">
            <h3 style="margin-top:0">Sample Paper 1 – drugi raz, z omówieniem</h3>
            <p class="muted small">Po pierwszym pomiarze nic już nie zawyża wyniku. Teraz przechodzisz arkusz spokojnie, pytanie po pytaniu, z uzasadnieniem każdej odpowiedzi.</p>
            ${store.get().exams.some((e) => e.name === 'Sample Paper 1') ? `<button class="btn btn-lg" data-start="sp1learn">Przejdź z omówieniem</button>` : '<p class="small">🔒 Odblokuje się po pierwszym podejściu do Sample Paper 1.</p>'}
          </div>` : ''}
          <div class="card">
            <h3 style="margin-top:0">Egzamin mistrzowski</h3>
            <p class="muted small">50 trudniejszych pytań (z plików kursu, inspirowane źródłami z internetu i mistrzowskie), 40 minut, bez podpowiedzi. Próg: co najmniej 40/50 dwa razy z rzędu i każdy obszar ≥ 70%.</p>
            ${sp1Done() ? `<button class="btn btn-primary btn-lg" data-start="master" ${finalPool.length >= 10 ? '' : 'disabled'}>Rozpocznij (${Math.min(50, finalPool.length)} pytań)</button>${finalPool.length < 10 ? '<p class="small muted">Pytania finałowe są w przygotowaniu.</p>' : ''}` : '<p class="small">🔒 Odblokuje się po pierwszym podejściu do Sample Paper 1.</p>'}
          </div>
        </div>
        <h2 style="font-size:1.2rem;margin-top:36px">Historia</h2>
        ${exams.length ? `<div class="grid">${exams.map((e) => `<div class="card" style="padding:12px 16px;display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <strong style="font-size:1.2rem">${e.score}/${e.total}</strong>
          <span class="pill ${e.score / e.total >= 0.5 ? 'prov-przyklad' : ''}" style="${e.score / e.total >= 0.5 ? '' : 'color:var(--bad)'}">${Math.round((e.score / e.total) * 100)}%</span>
          <span class="muted small">${esc(e.name)} · ${new Date(e.at).toLocaleString('pl-PL')} · ${e.minutes} min</span>
          <span class="muted small">${Object.entries(e.byArea).map(([a, r]) => `${a} ${r.ok}/${r.total}`).join(' · ')}</span></div>`).join('')}</div>` : '<p class="muted">Jeszcze nie było próbnego egzaminu.</p>'}
      </div>`;
    main.querySelectorAll('[data-start]').forEach((b) => b.addEventListener('click', () => {
      const mode = b.dataset.start;
      if (mode === 'sample') {
        if (sp1Locked) {
          if (!confirm(`To jedyny niezależny pomiar – po obejrzeniu pytań wynik będzie zawyżony.\n\nSample Paper 1 jest przewidziany na dzień ${sp1Day}. Otworzyć go mimo to?`)) return;
          store.setSp1Early();
        }
        run(sample, 40, 'Sample Paper 1');
      }
      else if (mode === 'sp1learn') sp1Learn();
      else if (mode === 'master') run(drawAuthored(finalPool, Math.min(50, finalPool.length)), 40, 'Egzamin mistrzowski');
      else if (mode === 'mini') run(drawAuthored(authored, 10), 8, 'Krótki próbny egzamin');
      else run(drawAuthored(authored, 50), 40, 'Próbny egzamin z pytań kursu');
    }));
  }

  // §15.1 F1(a) – SP1 drugi raz: pytanie po pytaniu, w oryginalnej kolejności, z uzasadnieniem każdej odpowiedzi.
  function sp1Learn() {
    let k = 0;
    const step = () => {
      if (k >= sample.length) { lobby(); return; }
      main.innerHTML = `<div class="page page-narrow"><p class="eyebrow">Sample Paper 1 z omówieniem · ${k + 1} z ${sample.length}</p><div id="sq"></div>
        <div class="btn-row" style="margin-top:16px"><button class="btn btn-lg" id="sqBack">← Wstecz</button><button class="btn btn-primary btn-lg" id="sqNext">${k === sample.length - 1 ? 'Koniec →' : 'Dalej →'}</button></div>
        <p style="margin-top:16px"><button class="btn" id="sqExit">Wróć do centrum egzaminacyjnego</button></p></div>`;
      renderQuestion(document.getElementById('sq'), sample[k], { shuffle: false, record: false });
      document.getElementById('sqNext').addEventListener('click', () => { k++; step(); });
      document.getElementById('sqBack').addEventListener('click', () => { k = Math.max(0, k - 1); step(); });
      document.getElementById('sqExit').addEventListener('click', lobby);
    };
    step();
  }

  // Pełna symulacja przebiegu egzaminu (krok po kroku) albo od razu ekran startu.
  function run(qsIn, minutes, name) {
    const attempt = Date.now();
    const qs = qsIn.map((q) => C.shuffleOptions(q, attempt));
    const full = !!document.getElementById('fullFlow')?.checked;
    sessionCleanup = runExamSession(main, {
      qs, minutes, name, full,
      onExit: () => { sessionCleanup = null; lobby(); },
      onFinish: ({ answers, minutesUsed, survey }) => {
        sessionCleanup = null;
        const byArea = {};
        let score = 0;
        const ans = answers.map((a) => (a === undefined ? null : a));
        qs.forEach((q, i) => {
          const a = C.areaOf(C.firstCode(q)) || '—';
          const r = (byArea[a] ||= { ok: 0, total: 0 });
          r.total++;
          const ok = ans[i] === correctIndex(q);
          if (ok) { r.ok++; score++; }
          store.recordAnswer(q, ok, { terms: C.termsOfQuestion(q) });
        });
        store.saveExam({ at: Date.now(), name, score, total: qs.length, byArea, minutes: minutesUsed, ankieta: survey });
        if (name === 'Próbny egzamin z pytań kursu') store.markExamUsed(qs.map((q) => q.id));
        results(qs, ans, score, byArea, minutesUsed, name);
      },
    });
  }

  async function results(qs, answers, score, byArea, minutes, name = 'Egzamin') {
    const tp = await topicParts();
    const syl = await C.syllabus();
    const topicTitle = Object.fromEntries((syl.tematy || []).map((t) => [t.kod, t.tytul]));
    const pct = score / qs.length;
    const pass = Math.ceil(qs.length * 0.5);
    const target = Math.ceil(qs.length * 0.7);
    const passed = score >= pass;
    const wrong = qs.map((q, i) => ({ q, i })).filter(({ q, i }) => answers[i] !== correctIndex(q));
    const wt = new Map();
    for (const { q } of wrong) { const c = C.firstCode(q); if (c) wt.set(c, (wt.get(c) || 0) + 1); }
    const wrongTopics = [...wt.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
    const back = (q) => { const h = (tp.byTopic[C.firstCode(q)] || [])[0]; return h ? `Temat w podręczniku: <a href="podrecznik/${esc(h)}">${esc((tp.title[h] || {}).t || h)}</a>` : ''; };
    main.innerHTML = `
      <div class="page" style="max-width:880px">
        <div class="card" style="text-align:center" id="report">
          <div class="muted small">Raport wyniku · ${esc(name)} · ${new Date().toLocaleString('pl-PL')}</div>
          <div class="score">${score}/${qs.length}</div>
          <div style="color:${passed ? 'var(--ok)' : 'var(--bad)'};font-weight:700;font-size:1.2rem">${passed ? 'ZDANY' : 'NIEZDANY'}</div>
          <div class="muted">${Math.round(pct * 100)}% · próg ${pass}/${qs.length} · cel treningowy ${target}/${qs.length}${score >= target ? ' – osiągnięty' : ''}</div>
          <div class="muted small">Czas: ${minutes} min</div>
          <p class="small muted" style="margin:10px 0 0">Na prawdziwym egzaminie wynik pokazany od razu jest tymczasowy i podlega weryfikacji. Po potwierdzeniu przez proktora niszczysz notatki i zamykasz aplikację egzaminacyjną.</p>
          <div class="btn-row" style="justify-content:center;margin-top:12px"><button class="btn" id="printRep">Drukuj (Print)</button><button class="btn" id="exportRep">Zapisz w pliku HTML (Export)</button></div>
        </div>
        <h2 style="font-size:1.2rem;margin-top:28px">Wynik w obszarach</h2>
        <div class="area-bars card">${Object.entries(byArea).map(([a, r]) => `<div class="area-bar">
          <strong title="${esc(C.AREAS[a] || '')}">${esc(a)}</strong>
          <div class="progress"><span style="width:${(r.ok / r.total) * 100}%;background:${r.ok / r.total >= 0.5 ? 'var(--ok)' : 'var(--bad)'}"></span></div>
          <span class="small">${r.ok}/${r.total}</span></div>`).join('')}</div>
        ${wrongTopics.length ? `<h2 style="font-size:1.2rem;margin-top:28px">Wróć do tych działów</h2>
        <div class="card"><p class="small muted" style="margin-top:0">Tematy, w których były błędy, od największej liczby błędów. Po powtórce działu zrób trening słabych tematów.</p>
        <ul class="unit-list">${wrongTopics.map(([c, n]) => { const h = (tp.byTopic[c] || [])[0]; return `<li><a href="${h ? `podrecznik/${esc(h)}` : '#/poziom'}"><span class="pill" style="color:var(--bad)">${n}× błąd</span><span>${esc(topicTitle[c] || c)}${h ? ` <span class="muted small">→ ${esc((tp.title[h] || {}).t || h)}</span>` : ''}</span></a></li>`; }).join('')}</ul>
        <div class="btn-row"><a class="btn btn-primary" href="#/poziom/trening">Trening słabych tematów</a><a class="btn" href="#/poziom">Mój poziom</a></div></div>` : ''}
        <h2 style="font-size:1.2rem;margin-top:28px">Które pułapki kosztowały punkty</h2>
        ${trapTable(trapStats(qs, answers), C.PULAPKI)}
        <h2 style="font-size:1.2rem;margin-top:28px">Omówienie błędów (${wrong.length})</h2>
        <div class="grid" id="wrongList">${wrong.map(({ i }) => `<div class="card"><div class="slide-kind" style="margin-bottom:6px">Pytanie ${i + 1}</div><div data-w="${i}"></div></div>`).join('') || '<p class="muted">Bez błędów!</p>'}</div>
        <div class="btn-row" style="margin-top:20px"><button class="btn btn-primary" id="back">Centrum egzaminacyjne</button><a class="btn" href="#/powtorki">Powtórki</a></div>
      </div>`;
    wrong.forEach(({ q, i }) => renderExamQuestion(main.querySelector(`[data-w="${i}"]`), q, { selected: answers[i], reveal: true, backLink: back(q) }));
    document.getElementById('back').addEventListener('click', lobby);
    document.getElementById('printRep').addEventListener('click', () => window.print());
    document.getElementById('exportRep').addEventListener('click', () => {
      const rows = Object.entries(byArea).map(([a, r]) => `<tr><td>${esc(a)} – ${esc(C.AREAS[a] || '')}</td><td>${r.ok}/${r.total}</td></tr>`).join('');
      const html = `<!doctype html><html lang="pl"><meta charset="utf-8"><title>Raport – ${esc(name)}</title>
        <body style="font-family:system-ui,sans-serif;max-width:640px;margin:40px auto;color:#1c1c1a">
        <h1>Raport wyniku: ${esc(name)}</h1><p>${new Date().toLocaleString('pl-PL')}</p>
        <p style="font-size:28px"><b>${score}/${qs.length}</b> – ${passed ? 'ZDANY' : 'NIEZDANY'} (próg ${pass}/${qs.length})</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse"><tr><th>Obszar</th><th>Wynik</th></tr>${rows}</table>
        <p>Błędne odpowiedzi w pytaniach: ${wrong.map(({ i }) => i + 1).join(', ') || 'brak'}</p>
        <p style="color:#666;font-size:12px">Próbny egzamin z aplikacji do nauki COBIT 5 Foundation.</p></body></html>`;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
      a.download = `raport-egzaminu-${new Date().toISOString().slice(0, 10)}.html`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    window.scrollTo(0, 0);
  }

  lobby();
  return () => { if (sessionCleanup) sessionCleanup(); };
}
