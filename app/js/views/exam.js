// Centrum egzaminacyjne: symulacja 50 pytań / 40 min, wynik w podziale na obszary PR/EN/IM/PC, analiza błędów.
import * as C from '../content.js';
import { esc, inline } from '../md.js';
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
  const used = new Set(pool.filter((q) => store.questionSeen(q.id)).map((q) => q.id));
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
  const content = await C.bundle();
  const practiceSets = content.testy.zestawy;
  const learningTopics = await topicParts();
  // §15 – finał: pytania z plików final-* (pliki, www, mistrz); odblokowanie po pierwszym podejściu do SP1.
  const finalPool = [...questions.values()].filter((q) => q.trudnosc >= 2 && (q.typ === 'egzamin' || q.typ === 'studium') && q.opcje?.length === 4);
  // Bez arkusza (wersja do udostępnienia) finał odblokowuje się od razu.
  const sp1Done = () => !sample || store.get().exams.some((e) => e.name === 'Sample Paper 1');
  let sessionCleanup = null;

  function lobby() {
    const exams = store.get().exams;
    main.innerHTML = `
      <div class="page">
        <h1>Centrum egzaminacyjne</h1>
        <p class="page-lead">${questions.size} sprawdzonych pytań autorskich. Nauka bez zegara, testy tematyczne i arkusze Foundation — wszystko rozwiążesz tutaj, z wyjaśnieniem każdej odpowiedzi, przykładem i powrotem do lekcji.</p>
        <h2>Testy z pełną nauką i omówieniem</h2>
        <p>W trybie nauki najpierw odpowiadasz, potem poznajesz uzasadnienie wszystkich opcji oraz zasadę COBIT 5. Na końcu możesz ponownie przećwiczyć błędy. Te same pytania są używane w lekcjach i arkuszach; nie tworzą osobnych kopii banku.</p>
        <div class="grid grid-2">${practiceSets.map((set) => `<div class="card">
          <h3 style="margin-top:0">${esc(set.tytul)}</h3><p class="small muted">${esc(set.opis)}</p>
          <p>${set.pytania.length} pytań · ${Math.ceil(set.pytania.length * 0.8)} min w sprawdzianie</p>
          <div class="btn-row"><button class="btn btn-primary" data-learn="${esc(set.id)}">Nauka z wyjaśnieniami</button><button class="btn" data-test="${esc(set.id)}">Rozwiąż test</button></div>
        </div>`).join('')}</div>
        <p class="small muted">Zestawy opracowano na podstawie publicznych źródeł COBIT 5. To pytania autorskie, a nie oficjalne arkusze ani kopie zewnętrznych banków. Materiały źródłowe służą weryfikacji; do nauki nie musisz opuszczać aplikacji.</p>
        <h2>Próba egzaminacyjna</h2>
        <p>Symulacja: 50 pytań jednokrotnego wyboru, 40 minut, historyczny próg Foundation 25/50. Cel treningowy kursu: 35/50. Omówienie wszystkich pytań otrzymasz po zakończeniu.</p>
        <p class="small muted" style="margin:-16px 0 24px">Historyczny sylabus przewiduje dodatkowy czas w określonych przypadkach; warunki i udogodnienia należy potwierdzić u operatora swojego egzaminu. Ta próba używa podstawowych 40 minut (sylabus PeopleCert v01.2, pkt 3.3). Sylabus v01.2 zawiera niespójny nawias „20 or more marks”; 50% z 50 to 25 punktów, zgodnie z instrukcją APMG do arkusza Foundation.</p>
        <label class="card" style="display:flex;gap:12px;align-items:flex-start;margin-bottom:16px;cursor:pointer">
          <input type="checkbox" id="fullFlow" style="margin-top:4px">
          <span><strong>Opcjonalny scenariusz organizacyjny egzaminu online</strong><br><span class="small muted">Przykładowe przygotowanie i formalności. Faktyczny przebieg zależy od operatora. Domyślnie przechodzisz bezpośrednio do pytań.</span></span>
        </label>
        <div class="grid grid-2">
          ${sample ? `<div class="card">
            <h3 style="margin-top:0">Sample Paper 1 (PL)</h3>
            <p class="muted small">${sample ? `${sample.length} pytań z oficjalnego arkusza próbnego, z uzasadnieniami. Tylko do użytku lokalnego.` : 'Arkusza Sample Paper 1 nie ma jeszcze na tym komputerze.'}</p>
            ${sp1Locked && sample ? `<p class="small" style="color:var(--trap)">🔒 Zablokowany do dnia ${sp1Day} (dziś: dzień ${dayNow}). To jedyny niezależny pomiar na nieznanych pytaniach.</p>` : ''}
            <button class="btn ${sp1Locked ? '' : 'btn-primary'}" data-start="sample" ${sample ? '' : 'disabled'}>${sp1Locked ? 'Otwórz mimo blokady…' : 'Rozpocznij'}</button>
          </div>` : `<div class="card">
            <h3 style="margin-top:0">Oficjalny arkusz próbny</h3>
            <p class="muted small">Oficjalny arkusz nie jest częścią publicznej puli. Powyższe testy autorskie są w całości dostępne w aplikacji, z omówieniem każdej opcji. Jeśli masz lokalny arkusz, aplikacja zachowuje jego osobną obsługę.</p>
          </div>`}
          <div class="card">
            <h3 style="margin-top:0">Próbny egzamin z pytań kursu</h3>
            <p class="muted small">${authored.length} pytań w puli. Losowanie według przykładowego rozkładu SP1: ${Object.entries(w).map(([a, v]) => `${a} ${v}`).join(' · ')} (na 50). Pytania znane z ćwiczeń i podręcznika są wybierane w dalszej kolejności; przy wyczerpaniu puli wracają powtórki.</p>
            <div class="btn-row">
              <button class="btn btn-primary" data-start="authored" ${authored.length >= 10 ? '' : 'disabled'}>Pełna (${Math.min(50, authored.length)} pytań)</button>
              <button class="btn" data-start="mini" ${authored.length >= 10 ? '' : 'disabled'}>Krótka (10 pytań / 8 min)</button>
            </div>
            ${authored.length < 10 ? '<p class="small muted">Pula zapełni się wraz z kolejnymi partiami treści.</p>' : ''}
          </div>
        </div>
        <h2 class="section-title">Dodatkowe utrwalenie</h2>
        <div class="grid grid-2">
          ${sample ? `<div class="card">
            <h3 style="margin-top:0">Sample Paper 1 – drugi raz, z omówieniem</h3>
            <p class="muted small">To powtórka znanych pytań. Teraz przechodzisz arkusz spokojnie, pytanie po pytaniu, z uzasadnieniem każdej odpowiedzi.</p>
            ${store.get().exams.some((e) => e.name === 'Sample Paper 1') ? `<button class="btn btn-lg" data-start="sp1learn">Przejdź z omówieniem</button>` : '<p class="small">🔒 Odblokuje się po pierwszym podejściu do Sample Paper 1.</p>'}
          </div>` : ''}
          <div class="card">
            <h3 style="margin-top:0">Egzamin mistrzowski</h3>
            <p class="muted small">Losowanie do 50 trudniejszych pytań z tej samej recenzowanej puli, 40 minut. Cel kursu: co najmniej 40/50 dwa razy z rzędu i każdy obszar ≥ 70%. To umowne kryterium treningowe, a nie wymaganie certyfikacyjne.</p>
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
    const setQuestions = (id) => practiceSets.find((set) => set.id === id).pytania.map((qid) => questions.get(qid));
    main.querySelectorAll('[data-learn]').forEach((button) => button.addEventListener('click', () => {
      const set = practiceSets.find((x) => x.id === button.dataset.learn);
      learn(setQuestions(set.id), set.tytul);
    }));
    main.querySelectorAll('[data-test]').forEach((button) => button.addEventListener('click', () => {
      const set = practiceSets.find((x) => x.id === button.dataset.test);
      run(setQuestions(set.id), Math.ceil(set.pytania.length * 0.8), set.tytul);
    }));
    main.querySelectorAll('[data-start]').forEach((b) => b.addEventListener('click', () => {
      const mode = b.dataset.start;
      if (mode === 'sample') {
        if (sp1Locked) {
          if (!confirm(`To jedyny niezależny pomiar – po obejrzeniu pytań wynik będzie zawyżony.\n\nSample Paper 1 jest przewidziany na dzień ${sp1Day}. Otworzyć go mimo to?`)) return;
          store.setSp1Early();
        }
        run(sample, 40, 'Sample Paper 1');
      }
      else if (mode === 'sp1learn') learn(sample, 'Sample Paper 1');
      else if (mode === 'master') run(drawAuthored(finalPool, Math.min(50, finalPool.length)), 40, 'Egzamin mistrzowski');
      else if (mode === 'mini') run(drawAuthored(authored, 10), 8, 'Krótki próbny egzamin');
      else run(drawAuthored(authored, 50), 40, 'Próbny egzamin z pytań kursu');
    }));
  }

  // Cały zestaw wewnątrz aplikacji: odpowiedź → wszystkie uzasadnienia → mini lekcja → powtórka błędów.
  function learn(qs, name) {
    let k = 0;
    const answers = new Map();
    const cards = new Map();
    const backLink = (q) => {
      const href = (learningTopics.byTopic[C.firstCode(q)] || [])[0];
      return href ? `<a class="btn" href="podrecznik/${esc(href)}">Przeczytaj powiązaną lekcję</a>` : '';
    };
    function finish() {
      const wrong = qs.filter((q) => answers.get(q.id) === false);
      main.innerHTML = `<div class="page page-narrow"><h1>Koniec nauki: ${esc(name)}</h1>
        <p>Poprawnie: ${qs.length - wrong.length}/${qs.length}. To wynik ćwiczenia ze znanymi wyjaśnieniami.</p>
        <div class="btn-row">${wrong.length ? `<button class="btn btn-primary" id="retryLearning">Przećwicz błędy (${wrong.length})</button>` : ''}<button class="btn" id="learningExit">Wybierz kolejny zestaw</button></div></div>`;
      main.querySelector('#retryLearning')?.addEventListener('click', () => learn(wrong, name + ' — powtórka błędów'));
      main.querySelector('#learningExit').addEventListener('click', lobby);
      window.scrollTo(0, 0);
    }
    function step() {
      if (k >= qs.length) { finish(); return; }
      const q = qs[k];
      main.innerHTML = `<div class="page page-narrow"><p class="eyebrow">${esc(name)} · ${k + 1} z ${qs.length}</p>
        <h1 style="font-size:1.6rem">Nauka z wyjaśnieniami</h1><p class="small muted">Wybierz odpowiedź. Potem przeczytaj omówienie wszystkich czterech opcji i zasadę COBIT 5 poniżej.</p>
        <div id="learningCard"></div><div class="btn-row" style="margin-top:20px">
        <button class="btn" id="trainBack" ${k === 0 ? 'disabled' : ''}>← Wstecz</button>
        <button class="btn btn-primary" id="trainNext" ${answers.has(q.id) ? '' : 'disabled'}>${k === qs.length - 1 ? 'Zakończ zestaw' : 'Dalej →'}</button>
        <button class="btn" id="trainExit">Wróć do zestawów</button></div></div>`;
      if (!cards.has(q.id)) {
        const card = document.createElement('div');
        const question = document.createElement('div');
        const lesson = document.createElement('div');
        lesson.hidden = true;
        const guide = content.nauka[C.firstCode(q)];
        lesson.innerHTML = `${guide ? `<div class="card" style="margin-top:20px"><h2 style="font-size:1.2rem">Zasada COBIT 5</h2><p>${inline(guide.zasada)}</p><h3>Przykład</h3><p>${inline(guide.przyklad)}</p><h3>Na co uważać</h3><p>${inline(guide.uwazaj)}</p></div>` : ''}<p>${backLink(q)}</p>`;
        card.append(question, lesson);
        renderQuestion(question, q, { record: true, onAnswered: (ok) => {
          answers.set(q.id, ok);
          lesson.hidden = false;
          main.querySelector('#trainNext').disabled = false;
        } });
        cards.set(q.id, card);
      }
      main.querySelector('#learningCard').append(cards.get(q.id));
      main.querySelector('#trainNext').addEventListener('click', () => { k++; step(); });
      main.querySelector('#trainBack').addEventListener('click', () => { k--; step(); });
      main.querySelector('#trainExit').addEventListener('click', lobby);
      window.scrollTo(0, 0);
    }
    step();
  }

  // Pełna symulacja przebiegu egzaminu (krok po kroku) albo od razu ekran startu.
  function run(qsIn, minutes, name) {
    const attempt = Date.now();
    const qs = qsIn.map((q) => C.shuffleOptions(q, attempt));
    // Rezerwacja całego arkusza: przerwane podejście nie wraca do puli nowych pytań.
    const fresh = new Set(qs.filter((q) => store.markQuestionSeen(q.id)).map((q) => q.id));
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
          if (ans[i] !== null) store.recordFirstAttempt(q, ok, fresh.has(q.id), { mode: 'egzamin' });
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
          <p class="small muted" style="margin:10px 0 0">To raport treningowy. Wynik znanych pytań nie jest niezależną prognozą wyniku certyfikacji.</p>
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
        <h2 style="font-size:1.2rem;margin-top:28px">Omówienie wszystkich pytań (${qs.length})</h2>
        <p>Poprawna odpowiedź i wyjaśnienie każdej opcji są dostępne także dla pytań rozwiązanych dobrze.</p>
        <div class="grid" id="wrongList">${qs.map((q, i) => `<details class="card" ${answers[i] !== correctIndex(q) ? 'open' : ''}><summary>Pytanie ${i + 1} · ${answers[i] === correctIndex(q) ? 'poprawnie' : answers[i] == null ? 'bez odpowiedzi' : 'błąd'}</summary><div data-w="${i}" style="margin-top:16px"></div></details>`).join('')}</div>
        <div class="btn-row" style="margin-top:20px">${wrong.length ? `<button class="btn btn-primary" id="retryWrong">Nauka na błędach (${wrong.length})</button>` : ''}<button class="btn" id="learnAll">Cały test z mini lekcjami</button><button class="btn" id="back">Centrum egzaminacyjne</button><a class="btn" href="#/powtorki">Powtórki</a></div>
      </div>`;
    qs.forEach((q, i) => renderExamQuestion(main.querySelector(`[data-w="${i}"]`), q, { selected: answers[i], reveal: true, backLink: back(q) }));
    main.querySelector('#retryWrong')?.addEventListener('click', () => learn(wrong.map(({ q }) => q), name + ' — błędy'));
    main.querySelector('#learnAll').addEventListener('click', () => learn(qs, name));
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
