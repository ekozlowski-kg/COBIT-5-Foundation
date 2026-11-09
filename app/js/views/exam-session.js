// Symulacja przebiegu egzaminu online z proktorem, krok po kroku.
// Kolejność kroków wg instrukcji „Czynności przed egzaminem w PeopleCert” (Conlea Help Center).
// Interfejs jest symulowany: prawdziwa aplikacja egzaminacyjna może wyglądać inaczej. Kamera i mikrofon NIE są używane.
import { esc, inline } from '../md.js';
import { correctIndex } from '../quiz.js';
import { toast } from '../ui.js';

const KEYS = ['A', 'B', 'C', 'D'];

export const STEPS = [
  { id: 'prep', etap: 'Do 1 godziny przed', tytul: 'Przygotowanie' },
  { id: 'check', etap: 'Do 1 godziny przed', tytul: 'Test systemu' },
  { id: 'login', etap: '10 minut przed', tytul: 'Logowanie' },
  { id: 'nda', etap: '10 minut przed', tytul: 'Umowa NDA' },
  { id: 'instr', etap: '10 minut przed', tytul: 'Instrukcja' },
  { id: 'tutorial', etap: '10 minut przed', tytul: 'Samouczek' },
  { id: 'rules', etap: '10 minut przed', tytul: 'Zasady' },
  { id: 'id', etap: '10 minut przed', tytul: 'Dokument tożsamości' },
  { id: 'proctor', etap: 'Z proktorem', tytul: 'Proktor' },
  { id: 'start', etap: 'Z proktorem', tytul: 'Start' },
  { id: 'exam', etap: 'Egzamin', tytul: 'Pytania' },
  { id: 'survey', etap: 'Po egzaminie', tytul: 'Ankieta' },
  { id: 'results', etap: 'Po egzaminie', tytul: 'Wyniki' },
];

const DEMO = [
  { id: 'demo-ui-1', tresc: 'Samouczek obsługi: zaznacz opcję B.', opcje: [{ tekst: 'Opcja A' }, { tekst: 'Opcja B', poprawna: true }, { tekst: 'Opcja C' }, { tekst: 'Opcja D' }] },
  { id: 'demo-ui-2', tresc: 'Samouczek obsługi: zaznacz opcję C.', opcje: [{ tekst: 'Opcja A' }, { tekst: 'Opcja B' }, { tekst: 'Opcja C', poprawna: true }, { tekst: 'Opcja D' }] },
];

/**
 * opts: { qs, minutes, name, full (pełna procedura), onFinish({answers, flagged, minutesUsed, survey}), onExit() }
 * Zwraca funkcję sprzątającą (timer, klawisze).
 */
export function runExamSession(main, opts) {
  const { qs, minutes, name } = opts;
  if (!opts.full) {
    return examScreen(main, qs, { minutes, title: name, practice: true,
      onEnd: (result) => opts.onFinish({ ...result, survey: {} }) });
  }
  let step = opts.full ? 0 : STEPS.findIndex((s) => s.id === 'start');
  let examCleanup = null;
  const survey = {};
  let answers = null, flagged = null, minutesUsed = 0;

  const stepper = () => `
    <ol class="xs-steps" aria-label="Etapy egzaminu">
      ${STEPS.map((s, i) => `<li class="${i < step ? 'done' : i === step ? 'now' : ''}" ${i === step ? 'aria-current="step"' : ''}><span>${i + 1}</span>${esc(s.tytul)}</li>`).join('')}
    </ol>`;

  function frame(inner, { next = 'Dalej (Next)', nextDisabled = false, back = false, endExam = false } = {}) {
    const s = STEPS[step];
    main.innerHTML = `
      <div class="xs">
        <div class="xs-top"><strong>${esc(name)}</strong><span class="muted small">Próbny egzamin – cały przebieg krok po kroku, jak online z nadzorem</span>
          <button class="btn btn-ghost small" id="xsExit">Przerwij próbny egzamin</button></div>
        ${stepper()}
        <section class="xs-card">
          <div class="xs-etap">${esc(s.etap)} · krok ${step + 1} z ${STEPS.length}</div>
          ${inner}
          <div class="xs-actions">
            ${endExam ? '<button class="btn btn-ghost" id="xsEnd">Zakończ egzamin (End Exam)</button>' : ''}
            ${back ? '<button class="btn" id="xsBack">Wstecz</button>' : ''}
            <span style="flex:1"></span>
            ${next ? `<button class="btn btn-primary" id="xsNext" ${nextDisabled ? 'disabled' : ''}>${next}</button>` : ''}
          </div>
        </section>
        <p class="xs-note small muted">Kolejność kroków na podstawie instrukcji Conlea „Czynności przed egzaminem w PeopleCert”. Wygląd prawdziwej aplikacji egzaminacyjnej może się różnić. Kamera i mikrofon nie są tu używane – kroki z nimi potwierdzasz sam.</p>
      </div>`;
    document.getElementById('xsExit').addEventListener('click', () => {
      if (confirm('Przerwać próbny egzamin? Wynik nie zostanie zapisany.')) { cleanup(); opts.onExit(); }
    });
    const nb = document.getElementById('xsNext');
    if (nb) nb.addEventListener('click', go);
    const bb = document.getElementById('xsBack');
    if (bb) bb.addEventListener('click', () => { step--; render(); });
    window.scrollTo(0, 0);
  }

  const go = () => { step++; render(); };

  // Lista z polami do odhaczenia; „Dalej” aktywne dopiero po zaznaczeniu wszystkiego.
  function checklist(items) {
    return `<ul class="xs-check">${items.map((t, i) => `<li><label><input type="checkbox" data-ck="${i}"> <span>${t}</span></label></li>`).join('')}</ul>`;
  }
  function bindChecklist() {
    const boxes = [...main.querySelectorAll('[data-ck]')];
    const nb = document.getElementById('xsNext');
    const upd = () => { nb.disabled = !boxes.every((b) => b.checked); };
    boxes.forEach((b) => b.addEventListener('change', upd));
    upd();
  }

  function render() {
    const s = STEPS[step];
    switch (s.id) {
      case 'prep':
        frame(`<h2>Przygotowanie do egzaminu</h2>
          <p>Zanim usiądziesz do egzaminu online, sprawdź sprzęt, dokument i pokój. Zaznacz wszystko, co masz gotowe.</p>
          <h3>Sprzęt</h3>
          ${checklist([
            'Komputer z Windows 10/11 albo macOS, stałe łącze internetowe (co najmniej 4 Mb/s), ekran co najmniej 1024×768.',
            'Głośniki i mikrofon (słuchawki tylko podczas dołączania), klawiatura i mysz.',
            'Jedna kamera internetowa, którą możesz obrócić (wbudowana lub zewnętrzna, nie telefon).',
            'Wyłączone oprogramowanie do wirtualizacji i zamknięte przeglądarki, czaty, poczta, udostępnianie pulpitu.',
            'Jeśli to komputer służbowy bez uprawnień administratora albo w sieci firmowej/VPN – uzgodnione wcześniej z działem IT.',
          ])}
          <h3>Dokument tożsamości</h3>
          ${checklist([
            'Ważny oryginał dokumentu ze zdjęciem i datą urodzenia (nie kserokopia, nie dokument elektroniczny).',
            'Imię i nazwisko zgodne z danymi, na które zarejestrowano egzamin.',
            'Drugi dokument ze zdjęciem na wypadek dodatkowej weryfikacji.',
            'Numer telefonu z kodem kraju wpisany w profilu kandydata.',
          ].map((x) => x))}
          <h3>Pokój</h3>
          ${checklist([
            'Prywatny pokój z jednym wejściem, bez hałasu, przez cały egzamin jesteś sam/sama.',
            'Puste biurko i ściany: bez notatek, plakatów, karteczek, książek. COBIT 5 Foundation to egzamin <strong>bez materiałów</strong> (closed book), słownik nie jest dozwolony.',
            'Telefon wyciszony i poza zasięgiem ręki (trzeba wstać, żeby po niego sięgnąć).',
            'Żadnych dodatkowych monitorów i urządzeń; dobre światło, nie skierowane w kamerę; Ty i drzwi widoczni w kamerze.',
          ])}`, { nextDisabled: true });
        bindChecklist();
        break;

      case 'check': {
        const parts = [
          ['Integralność systemu', 'Zgodność systemu operacyjnego z aplikacją egzaminacyjną.', null],
          ['Dźwięk', 'Aplikacja nagrywa 10 sekund z mikrofonu i odtwarza nagranie. Czy słyszysz swój głos?', 'Tak, słyszę'],
          ['Kamera', 'Czy widzisz siebie w okienku podglądu? (W razie potrzeby zmieniasz kamerę z listy.)', 'Tak, widzę siebie'],
          ['Połączenie internetowe', 'Aplikacja nagrywa 10-sekundowy film i wysyła go, żeby sprawdzić łącze.', null],
        ];
        const state = parts.map(() => 'czeka');
        frame(`<h2>Test systemu (CHECK SYSTEM)</h2>
          <p>Zrób go co najmniej godzinę przed egzaminem. Test ma 4 części. Wynik każdej: <em>Passed</em> (zaliczony), <em>Warning</em> (ostrzeżenie – nie blokuje egzaminu) albo <em>Failed</em> (błąd – trzeba poprawić i kliknąć <em>CHECK AGAIN</em>).</p>
          <div class="xs-tests">${parts.map((p, i) => `<div class="xs-test" data-t="${i}">
            <div><strong>${p[0]}</strong><div class="small muted">${p[1]}</div></div>
            <div class="xs-test-act"></div></div>`).join('')}</div>
          <button class="btn" id="runCheck">Sprawdź system</button>`, { nextDisabled: true });
        const upd = () => {
          main.querySelectorAll('.xs-test').forEach((row) => {
            const i = +row.dataset.t;
            const act = row.querySelector('.xs-test-act');
            const st = state[i];
            if (st === 'pytanie') act.innerHTML = `<button class="btn btn-primary small" data-yes="${i}">${parts[i][2]}</button>`;
            else act.innerHTML = `<span class="xs-badge ${st === 'ok' ? 'ok' : st === 'trwa' ? 'run' : ''}">${{ czeka: 'Oczekuje', trwa: 'Sprawdzanie…', ok: 'Passed' }[st] || st}</span>`;
          });
          main.querySelectorAll('[data-yes]').forEach((b) => b.addEventListener('click', () => { state[+b.dataset.yes] = 'ok'; upd(); runNext(); }));
          document.getElementById('xsNext').disabled = !state.every((x) => x === 'ok');
        };
        const runNext = () => {
          const i = state.findIndex((x) => x !== 'ok');
          if (i < 0) return;
          state[i] = 'trwa'; upd();
          setTimeout(() => { state[i] = parts[i][2] ? 'pytanie' : 'ok'; upd(); if (!parts[i][2]) runNext(); }, 900);
        };
        document.getElementById('runCheck').addEventListener('click', (e) => { e.currentTarget.disabled = true; runNext(); });
        upd();
        break;
      }

      case 'login':
        frame(`<h2>Logowanie do aplikacji egzaminacyjnej</h2>
          <p>Około 10 minut przed egzaminem logujesz się do aplikacji egzaminacyjnej danymi profilu kandydata (albo przez konto Google, Facebook lub LinkedIn, jeśli tak założono profil). Pod danymi egzaminu widać licznik czasu do startu; są też przyciski kontaktu z obsługą (telefon, czat).</p>
          <p>Aplikacja sprawdza, czy działają programy, które trzeba zamknąć.</p>
          <div class="xs-alert">Wykryto uruchomione aplikacje: przeglądarka internetowa, komunikator. Zamknij je, aby kontynuować.</div>
          ${checklist(['Zamknąłem/zamknęłam wskazane aplikacje.'])}
          <p class="small muted">W próbnym egzaminie nie podajesz żadnych danych logowania.</p>`, { nextDisabled: true, back: true });
        bindChecklist();
        break;

      case 'nda':
        frame(`<h2>Umowa o zachowaniu poufności (NDA)</h2>
          <div class="xs-doc">
            <p>Akceptując, zobowiązujesz się nie ujawniać treści pytań egzaminacyjnych, nie kopiować ich ani nie przekazywać w żadnej formie, oraz przestrzegać warunków użytkowania.</p>
            <p class="small muted">Streszczenie na potrzeby próby – w prawdziwym egzaminie czytasz pełny tekst.</p>
          </div>
          <p>Bez akceptacji nie można przejść dalej. <em>End Exam</em> na tym etapie oznacza rezygnację z egzaminu.</p>`,
        { next: 'Akceptuję i przechodzę dalej (Next)', endExam: true, back: true });
        document.getElementById('xsEnd').addEventListener('click', () => {
          if (confirm('Bez akceptacji NDA egzamin się kończy. Przerwać próbny egzamin?')) { cleanup(); opts.onExit(); }
        });
        break;

      case 'instr':
        frame(`<h2>Instrukcja egzaminacyjna</h2>
          <p>Przeczytaj uważnie, zanim przejdziesz dalej.</p>
          <table class="xs-table">
            <tr><th>Egzamin</th><td>COBIT 5 Foundation, wersja polska</td></tr>
            <tr><th>Liczba pytań</th><td>${qs.length} – wielokrotnego wyboru, 4 odpowiedzi, dokładnie jedna poprawna</td></tr>
            <tr><th>Czas</th><td>${minutes} minut (bez dodatkowego czasu – egzamin w języku ojczystym)</td></tr>
            <tr><th>Próg zaliczenia</th><td>${Math.ceil(qs.length / 2)} poprawnych odpowiedzi (50%)</td></tr>
            <tr><th>Materiały</th><td>Żadnych – egzamin bez materiałów (closed book)</td></tr>
            <tr><th>Brak odpowiedzi</th><td>Liczy się jak odpowiedź błędna – zawsze zaznacz którąś opcję</td></tr>
          </table>`, { back: true });
        break;

      case 'tutorial': {
        const tasks = [
          ['nav', 'Przejdź do pytania 3, klikając jego numer w menu po lewej.'],
          ['answer', 'Zaznacz odpowiedź, klikając kwadrat przy opcji. Potem zmień ją na inną.'],
          ['flag', 'Oznacz pytanie flagą do powrotu (pole przy numerze w menu).'],
          ['zoom', 'Powiększ albo pomniejsz widok.'],
          ['chat', 'Otwórz czat z proktorem.'],
        ];
        const done = new Set();
        frame(`<h2>Samouczek egzaminacyjny</h2>
          <p>Poznaj ekran egzaminu na 3 pytaniach próbnych (nie są oceniane). Wykonaj zadania z listy.</p>
          <ul class="xs-tasks">${tasks.map(([k, t]) => `<li data-task="${k}"><span class="check" aria-hidden="true"></span>${t}</li>`).join('')}</ul>
          <p class="small muted">W prawdziwym samouczku dowiesz się też, jak zakończyć egzamin i co zrobić po zerwaniu połączenia: odświeżyć i zalogować się ponownie, a potem kontynuować z pozostałym czasem.</p>
          <div id="tutUI"></div>`, { back: true, nextDisabled: true });
        let changed = 0;
        examCleanup = examScreen(document.getElementById('tutUI'), DEMO, {
          demo: true, minutes: 2, title: 'Samouczek',
          onEvent: (ev) => {
            if (ev === 'answer') { changed++; if (changed >= 2) done.add('answer'); } else done.add(ev);
            main.querySelectorAll('[data-task]').forEach((li) => {
              const ok = done.has(li.dataset.task);
              li.classList.toggle('ok', ok);
              li.querySelector('.check').classList.toggle('done', ok);
              li.querySelector('.check').textContent = ok ? '✓' : '';
            });
            document.getElementById('xsNext').disabled = done.size < tasks.length;
          },
        });
        break;
      }

      case 'rules':
        frame(`<h2>Zasady egzaminu</h2>
          <ul>
            <li>Sesja jest nagrywana (ekran, kamera, naciśnięcia klawiszy). Proktor jest obecny przez cały czas.</li>
            <li>Mikrofon jest włączony przez całą sesję; słuchawek nie wolno używać.</li>
            <li>Nie opuszczasz miejsca i nie zmieniasz pozycji – musisz być cały czas widoczny w kamerze.</li>
            <li>Proktor może w każdej chwili powtórzyć kontrolę bezpieczeństwa – trzeba się do niej zastosować.</li>
            <li>Drobne uchybienie: proktor prosi o natychmiastową poprawę. Poważne albo zignorowane: egzamin zostaje zawieszony. Wynik może trafić do weryfikacji, a nawet zostać anulowany.</li>
            <li>Po zerwaniu połączenia proktor wstrzymuje egzamin; po powrocie kontynuujesz z pozostałym czasem.</li>
          </ul>
          ${checklist(['Przeczytałem/przeczytałam i akceptuję zasady egzaminu.'])}`, { back: true, nextDisabled: true });
        bindChecklist();
        break;

      case 'id':
        frame(`<h2>Skan dokumentu tożsamości</h2>
          <p>Prześlij zdjęcie dokumentu (<em>BROWSE</em>) albo zrób je kamerą (<em>CAPTURE</em>). Zdjęcie musi być wyraźne i czytelne; po zrobieniu możesz je zaakceptować, powtórzyć albo anulować.</p>
          <div class="xs-id" id="idBox"><span>Podgląd dokumentu</span></div>
          <div class="btn-row"><button class="btn" id="capture">Zrób zdjęcie (CAPTURE) – tylko próba</button></div>`, { back: true, nextDisabled: true });
        document.getElementById('capture').addEventListener('click', () => {
          document.getElementById('idBox').innerHTML = '<span>✓ Zdjęcie dokumentu zapisane (to tylko próba – nic nie zostało nagrane)</span>';
          document.getElementById('idBox').classList.add('ok');
          document.getElementById('xsNext').disabled = false;
        });
        break;

      case 'proctor': {
        const checks = [
          'Sprawdzenie dźwięku i obrazu.',
          'Pokaż dokument tożsamości do kamery.',
          'Obróć kamerę o 360°: cały pokój, powierzchnia biurka, miejsce pod biurkiem.',
          'Pokaż ekran komputera w lustrze albo telefonem, potem odłóż telefon poza zasięg.',
          'Kontrola: rękawy, okulary, uszy, włosy.',
          'Udostępnij ekran proktorowi.',
          'Potwierdź swoje dane osobowe (jeśli coś się nie zgadza, powiedz proktorowi).',
        ];
        let k = -1;
        frame(`<h2>Połączenie z proktorem</h2>
          <p>Kliknięcie <em>LET'S GO</em> łączy Cię z proktorem i oznacza zgodę na nagrywanie ekranu, kamery i klawiatury. Po prawej stronie pojawia się panel sesji.</p>
          <div class="xs-chat" id="chat" aria-live="polite"></div>
          <div class="btn-row" id="chatAct"><button class="btn btn-primary" id="letsgo">LET'S GO</button></div>`, { back: false, nextDisabled: true });
        const chat = document.getElementById('chat');
        const say = (who, t) => { chat.insertAdjacentHTML('beforeend', `<div class="xs-msg ${who}"><strong>${who === 'p' ? 'Proktor' : 'Ty'}:</strong> ${t}</div>`); chat.scrollTop = chat.scrollHeight; };
        const nextCheck = () => {
          k++;
          if (k < checks.length) {
            say('p', checks[k]);
            document.getElementById('chatAct').innerHTML = '<button class="btn" id="okc">Zrobione</button>';
            document.getElementById('okc').addEventListener('click', () => { say('ty', 'Zrobione.'); nextCheck(); });
          } else {
            say('p', 'Wszystko w porządku. Możesz kliknąć „Dalej (Next)”, gdy będziesz gotowy.');
            document.getElementById('chatAct').innerHTML = '';
            document.getElementById('xsNext').disabled = false;
          }
        };
        document.getElementById('letsgo').addEventListener('click', () => { say('p', 'Dzień dobry, jestem Twoim proktorem. Przeprowadzę kontrolę przed egzaminem.'); nextCheck(); });
        break;
      }

      case 'start':
        frame(`<h2>Rozpocznij egzamin</h2>
          <p>Przeczytaj uważnie, zanim zaczniesz:</p>
          <ul>
            <li>Menu po lewej pokazuje numery wszystkich ${qs.length} pytań; bieżące jest podświetlone. Klikasz numer, żeby przejść do pytania.</li>
            <li>Pole przy numerze oznacza pytanie flagą do powrotu; kliknij ponownie, żeby flagę zdjąć. Możesz oznaczyć wiele pytań.</li>
            <li>Odpowiedź zaznaczasz kwadratem przy opcji; możesz ją zmienić w każdej chwili.</li>
            <li>15 minut przed końcem pojawi się przypomnienie.</li>
            <li><em>Zakończ egzamin (End Exam)</em> w prawym dolnym rogu wysyła odpowiedzi – potem nie można nic zmienić.</li>
          </ul>
          <p><strong>Zegar ruszy po kliknięciu „Rozpocznij egzamin”.</strong></p>`, { next: 'Rozpocznij egzamin (Start Exam)', back: opts.full });
        break;

      case 'exam':
        main.innerHTML = '<div class="xs xs-wide" id="examWrap"></div>';
        examCleanup = examScreen(document.getElementById('examWrap'), qs, {
          minutes, title: name,
          onEnd: (res) => {
            answers = res.answers; flagged = res.flagged; minutesUsed = res.minutesUsed;
            examCleanup = null;
            step++; render();
          },
        });
        break;

      case 'survey':
        frame(`<h2>Krótka ankieta</h2>
          <p>Możesz ocenić przebieg egzaminu albo pominąć ten krok i przejść do wyników.</p>
          <div class="xs-survey">
            ${[['org', 'Organizacja i obsługa egzaminu'], ['diff', 'Trudność pytań'], ['time', 'Wystarczający czas']].map(([k, l]) => `
              <fieldset><legend>${l}</legend>${[1, 2, 3, 4, 5].map((n) => `<label><input type="radio" name="${k}" value="${n}"> ${n}</label>`).join('')}</fieldset>`).join('')}
            <label class="small">Uwagi (np. które tematy Cię zaskoczyły)<textarea id="svNote" class="note-area"></textarea></label>
          </div>`, { next: 'Wyślij i pokaż wyniki' });
        main.querySelector('.xs-actions').insertAdjacentHTML('afterbegin', '<button class="btn btn-ghost" id="svSkip">Pomiń</button>');
        document.getElementById('svSkip').addEventListener('click', finish);
        document.getElementById('xsNext').removeEventListener('click', go);
        document.getElementById('xsNext').addEventListener('click', () => {
          for (const k of ['org', 'diff', 'time']) { const v = main.querySelector(`input[name="${k}"]:checked`); if (v) survey[k] = +v.value; }
          survey.uwagi = document.getElementById('svNote').value.trim();
          finish();
        });
        break;

      default:
    }
  }

  function finish() {
    cleanup();
    opts.onFinish({ answers, flagged, minutesUsed, survey });
  }

  function cleanup() { if (examCleanup) { examCleanup(); examCleanup = null; } }

  render();
  return cleanup;
}

/**
 * Ekran egzaminu: menu numerów z flagami po lewej, pytanie, kwadraty odpowiedzi, zoom, czat z proktorem,
 * ostrzeżenie 15 min przed końcem, „Zakończ egzamin” z oknem o pytaniach bez odpowiedzi i potwierdzeniem.
 * opts: { minutes, title, demo, onEvent(name), onEnd({answers, flagged, minutesUsed}) }
 */
export function examScreen(root, qs, opts) {
  const answers = new Array(qs.length).fill(null);
  const conf = new Array(qs.length).fill(null); // §11.4 – tylko test dnia (opts.confidence), nigdy symulacje
  const flagged = new Set();
  let cur = 0;
  let zoom = 1;
  const started = Date.now();
  const end = started + opts.minutes * 60000;
  const warnAt = Math.min(15, opts.minutes * 0.375) * 60000;
  let warned = false;
  let timerId = null;
  let chatOpen = false;
  const ev = (n) => opts.onEvent && opts.onEvent(n);

  root.innerHTML = `
    <div class="xe${opts.demo ? ' xe-demo' : ''}" style="--xe-zoom:1">
      <header class="xe-bar">
        <strong class="xe-title">${esc(opts.title)}</strong>
        <span class="xe-time">Pozostały czas: <b id="xeTimer">--:--</b></span>
        <span class="xe-tools">
          <button class="xe-btn" id="xeZoomOut" aria-label="Pomniejsz">−</button>
          <button class="xe-btn" id="xeZoomIn" aria-label="Powiększ">+</button>
          <button class="xe-btn" id="xeChat" ${opts.practice ? 'hidden' : ''}>Czat z proktorem (scenariusz)</button>
        </span>
      </header>
      <div class="xe-body">
        <nav class="xe-menu" aria-label="Numery pytań" id="xeMenu"></nav>
        <main class="xe-main">
          <div class="xe-qhead" id="xeHead"></div>
          <div class="xe-q" id="xeQ"></div>
        </main>
        <aside class="xe-chatpanel" id="xeChatPanel" hidden>
          <div class="xe-chatlog" id="xeChatLog"><div><strong>Proktor:</strong> Jestem dostępny przez cały egzamin. Nie mogę pomagać w treści pytań.</div></div>
          <div class="xe-chatin"><label class="sr-only" for="xeChatTxt">Wiadomość</label><input id="xeChatTxt" placeholder="Napisz do proktora"><button class="xe-btn" id="xeChatSend">Wyślij</button></div>
        </aside>
      </div>
      <footer class="xe-foot">
        <button class="xe-btn" id="xePrev">← Poprzednie</button>
        <button class="xe-btn" id="xeNext">Następne →</button>
        <span style="flex:1"></span>
        <button class="xe-btn xe-end" id="xeEnd">Zakończ egzamin (End Exam)</button>
      </footer>
      <div class="xe-modal" id="xeModal" hidden><div class="xe-dialog" role="dialog" aria-modal="true" aria-labelledby="xeModalT"><h3 id="xeModalT"></h3><div id="xeModalB"></div><div class="xe-dialog-act" id="xeModalA"></div></div></div>
    </div>`;
  const $ = (id) => root.querySelector('#' + id);
  const box = root.querySelector('.xe');

  function menu() {
    $('xeMenu').innerHTML = qs.map((_, i) => `
      <div class="xe-item${i === cur ? ' cur' : ''}${answers[i] !== null ? ' ans' : ''}">
        <label class="xe-flag" title="Oznacz do powrotu"><input type="checkbox" data-flag="${i}" ${flagged.has(i) ? 'checked' : ''} aria-label="Oznacz pytanie ${i + 1} flagą"><span aria-hidden="true">⚑</span></label>
        <button data-go="${i}" ${i === cur ? 'aria-current="true"' : ''}>${i + 1}</button>
      </div>`).join('');
    $('xeMenu').querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => { cur = +b.dataset.go; show(); if (cur === 2) ev('nav'); }));
    $('xeMenu').querySelectorAll('[data-flag]').forEach((c) => c.addEventListener('change', () => {
      const i = +c.dataset.flag;
      if (c.checked) flagged.add(i); else flagged.delete(i);
      ev('flag'); menu();
    }));
    const curEl = $('xeMenu').querySelector('.cur');
    if (curEl && curEl.scrollIntoView) curEl.scrollIntoView({ block: 'nearest' });
  }

  function show() {
    const q = qs[cur];
    $('xeHead').textContent = `Pytanie ${cur + 1} z ${qs.length}`;
    $('xeQ').innerHTML = `
      ${q.scenariusz ? `<div class="xe-scen">${inline(q.scenariusz)}</div>` : ''}
      <p class="xe-stem">${inline(q.tresc)}</p>
      <div class="xe-opts" role="radiogroup" aria-label="Odpowiedzi">
        ${q.opcje.map((o, i) => `<label class="xe-opt${answers[cur] === i ? ' sel' : ''}">
          <input type="radio" name="xeAns" value="${i}" ${answers[cur] === i ? 'checked' : ''}>
          <span class="xe-box" aria-hidden="true">${answers[cur] === i ? '✓' : ''}</span>
          <span class="xe-key">${KEYS[i]}</span><span>${inline(o.tekst)}</span></label>`).join('')}
      </div>
      ${opts.confidence && answers[cur] !== null ? `<div class="xe-conf" role="group" aria-label="Pewność odpowiedzi"><span class="small muted">Pewność:</span>
        ${[['pewny', 'Pewny'], ['raczej', 'Raczej'], ['strzelam', 'Strzelam']].map(([k, l]) => `<button class="xe-btn" data-conf="${k}" aria-pressed="${conf[cur] === k}">${l}</button>`).join('')}</div>` : ''}`;
    $('xeQ').querySelectorAll('[data-conf]').forEach((b) => b.addEventListener('click', () => { conf[cur] = b.dataset.conf; show(); }));
    $('xeQ').querySelectorAll('input[name="xeAns"]').forEach((r) => r.addEventListener('change', () => { answers[cur] = +r.value; ev('answer'); show(); }));
    $('xePrev').disabled = cur === 0;
    $('xeNext').disabled = cur === qs.length - 1;
    menu();
  }

  function tick() {
    const left = Math.max(0, end - Date.now());
    const t = $('xeTimer');
    if (!t) return;
    t.textContent = opts.demo ? `${opts.minutes}:00` : `${String(Math.floor(left / 60000)).padStart(2, '0')}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`;
    t.parentElement.classList.toggle('low', !opts.demo && left <= warnAt);
    if (opts.demo) return;
    if (!warned && left <= warnAt) { warned = true; modal('Przypomnienie', `<p>Do końca egzaminu zostało ${Math.round(warnAt / 60000)} minut.</p>`, [['OK', closeModal]]); }
    if (left <= 0) { closeModal(); submit(true); }
  }

  function modal(title, body, actions) {
    $('xeModalT').textContent = title;
    $('xeModalB').innerHTML = body;
    $('xeModalA').innerHTML = '';
    actions.forEach(([label, fn, primary]) => {
      const b = document.createElement('button');
      b.className = 'xe-btn' + (primary ? ' xe-primary' : '');
      b.textContent = label;
      b.addEventListener('click', fn);
      $('xeModalA').appendChild(b);
    });
    $('xeModal').hidden = false;
    $('xeModalA').querySelector('button').focus();
  }
  function closeModal() { $('xeModal').hidden = true; }

  function endFlow() {
    if (opts.demo) {
      modal('Zakończ egzamin', '<p>W samouczku tym przyciskiem kończysz egzamin. Najpierw pojawi się okno z liczbą pytań bez odpowiedzi, potem prośba o potwierdzenie.</p>', [['Rozumiem', closeModal, true]]);
      return;
    }
    const open = answers.filter((a) => a === null).length;
    const confirmStep = () => modal('Potwierdź zakończenie',
      '<p>Czy na pewno chcesz zakończyć egzamin? Odpowiedzi zostaną wysłane i nie będzie można ich zmienić.</p>',
      [['Wróć do egzaminu', closeModal], ['Tak, zakończ egzamin', () => { closeModal(); submit(false); }, true]]);
    if (open) {
      modal('Pytania bez odpowiedzi',
        `<p>Nie odpowiedziałeś/aś na <strong>${open}</strong> ${open === 1 ? 'pytanie' : 'pytań'}. Pytania bez odpowiedzi zostaną uznane za błędne.</p>
         <p class="small">Numery: ${answers.map((a, i) => (a === null ? i + 1 : null)).filter(Boolean).join(', ')}</p>`,
        [['Wróć do egzaminu', closeModal], ['Kontynuuj zakończenie', confirmStep, true]]);
    } else confirmStep();
  }

  function submit(timeUp) {
    clearInterval(timerId); timerId = null;
    document.removeEventListener('keydown', onKey);
    if (timeUp) toast('Czas minął – odpowiedzi zostały wysłane');
    opts.onEnd && opts.onEnd({ answers, conf, flagged: [...flagged], minutesUsed: Math.round((Date.now() - started) / 60000) });
  }

  function onKey(e) {
    if (!$('xeModal').hidden || ['INPUT', 'TEXTAREA'].includes(e.target.tagName) && e.target.type !== 'radio') return;
    if (e.key === 'ArrowRight' && cur < qs.length - 1) { cur++; show(); }
    if (e.key === 'ArrowLeft' && cur > 0) { cur--; show(); }
  }

  $('xePrev').addEventListener('click', () => { if (cur > 0) { cur--; show(); } });
  $('xeNext').addEventListener('click', () => { if (cur < qs.length - 1) { cur++; show(); if (cur === 2) ev('nav'); } });
  $('xeEnd').addEventListener('click', endFlow);
  $('xeZoomIn').addEventListener('click', () => { zoom = Math.min(1.5, zoom + 0.1); box.style.setProperty('--xe-zoom', zoom); ev('zoom'); });
  $('xeZoomOut').addEventListener('click', () => { zoom = Math.max(0.8, zoom - 0.1); box.style.setProperty('--xe-zoom', zoom); ev('zoom'); });
  $('xeChat').addEventListener('click', () => { chatOpen = !chatOpen; $('xeChatPanel').hidden = !chatOpen; ev('chat'); if (chatOpen) $('xeChatTxt').focus(); });
  const send = () => {
    const t = $('xeChatTxt').value.trim();
    if (!t) return;
    $('xeChatLog').insertAdjacentHTML('beforeend', `<div><strong>Ty:</strong> ${esc(t)}</div><div><strong>Proktor:</strong> Przyjąłem. W sprawach technicznych pomogę; w treści pytań – nie.</div>`);
    $('xeChatTxt').value = '';
  };
  $('xeChatSend').addEventListener('click', send);
  $('xeChatTxt').addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
  document.addEventListener('keydown', onKey);

  show();
  tick();
  timerId = setInterval(tick, 1000);
  return () => { clearInterval(timerId); document.removeEventListener('keydown', onKey); };
}

export { correctIndex };
