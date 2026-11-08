// Plan dnia (METODYKA §2): rozgrzewka → bloki A/B/C z mini-testami → test dnia (20 pyt., 48 s/pyt.) → pusta kartka.
import * as C from '../content.js';
import { esc, render, termIdsInOrder } from '../md.js';
import { store } from '../store.js';
import { renderQuestion, renderExamQuestion, correctIndex, trapStats, trapTable } from '../quiz.js';
import { toast, poLudzku } from '../ui.js';
import { prefs } from '../store.js';
import { examScreen } from './exam-session.js';
import { questionsForUnits, weakestUnits, isTimedOk, shuffle, currentDay, extremeForDay } from '../progress.js';

const BLOCKS = ['A', 'B', 'C'];
const MINI_N = { A: 5, B: 6, C: 7 };
const TEST_N = 20;
const SEC_PER_Q = 48;

export async function renderDay(main, nrParam, action = null) {
  const [units, questions, days, prog, syl, terms] = await Promise.all([C.units(), C.questions(), C.days(), C.progi(), C.syllabus(), C.terms()]);
  const LAST = C.lastDayOf(days);
  store.ensureStarted();
  const d0 = units.some((u) => u.dzien === 0) ? 0 : 1;
  const nr = Math.min(LAST, Math.max(d0, nrParam !== undefined && nrParam !== null && nrParam !== '' ? +nrParam : currentDay(units)));
  const day = days.find((d) => d.nr === nr) || days[0];
  const conf = C.dayConf(days, nr); // §18.3
  // §11.9 – tryb „minimum do zdania”: priorytet 1 najpierw (EN i PR przed IM i PC), priorytet 3 poza planem.
  const minimum = prefs.get('minimum', '') === '1';
  const AREA_ORDER = { EN: 0, PR: 1, M0: 2, EX: 3, IM: 4, PC: 5 };
  const allDayAll = units.filter((u) => u.dzien === nr);
  const mentorUnits = allDayAll.filter((u) => u.modul.kod === 'MT');
  const finalUnits = allDayAll.filter((u) => u.modul.kod === 'FN');
  const sp1Done = store.get().exams.some((e) => e.name === 'Sample Paper 1');
  const allDay = allDayAll.filter((u) => u.modul.kod !== 'MT' && u.modul.kod !== 'FN');
  const dayUnits = minimum
    ? allDay.filter((u) => u.priorytet !== 3).sort((a, b) => ((a.priorytet || 2) - (b.priorytet || 2)) || ((AREA_ORDER[a.modul.kod] ?? 9) - (AREA_ORDER[b.modul.kod] ?? 9)))
    : allDay;
  const deepUnits = minimum ? allDay.filter((u) => u.priorytet === 3) : [];
  // §12.3 – atomy dnia (do „Testu skrajności”).
  const dayLessons = await Promise.all(allDay.map((u) => C.lesson(u.id).catch(() => null)));
  // Tylko pojęcia wprowadzone tego dnia (wprowadza + wprowadzaListe) – nie zapowiedzi z przypisów (zasada zera, §10).
  const dayAtoms = new Set(dayLessons.filter(Boolean).flatMap((l) => l.unit.wprowadza || []));
  const dayCodes = new Set(allDay.flatMap((u) => u.sylabus));
  // Pytanie skrajne tylko o pojęciu wprowadzonym najpóźniej tego dnia – kody sylabusa nie mogą wciągnąć tematu z dalszych dni.
  const introducedSoFar = new Set(units.filter((u) => typeof u.dzien === 'number' && u.dzien <= nr).flatMap((u) => u.wprowadza || []));
  const extremePool = extremeForDay(questions, dayAtoms, dayCodes).filter((q) => introducedSoFar.has(q.atom));
  const earlierUnits = units.filter((u) => u.dzien && u.dzien < nr);
  const size = Math.ceil(dayUnits.length / 3);
  const blocks = BLOCKS.map((b, i) => ({ b, units: dayUnits.slice(i * size, (i + 1) * size) }));
  let cleanup = null;
  const timers = {};

  // Jednostki naprawcze: test poprzedniego dnia poniżej progu → lekcje z największą liczbą błędów.
  const prevTest = nr > 1 ? store.lastDayTest(nr - 1) : null;
  const repair = prevTest && prevTest.pct < prog.testDnia ? weakestUnits(earlierUnits, questions, 2) : [];
  const dueTerms = Object.keys(store.get().mistakes).length;

  function unitRow(u) {
    const s = store.unit(u.id);
    return `<li><a href="#/lekcja/${esc(u.id)}"><span class="check ${s.done ? 'done' : s.seen.length ? 'partial' : ''}" aria-hidden="true">${s.done ? '✓' : ''}</span>
      <span>${u.nr ? `<span class="muted">${esc(u.nr)}</span> ` : ''}${esc(u.tytul)}</span><span class="small muted" style="margin-left:auto">${u.minuty ? esc(u.minuty) + ' min' : ''}</span></a></li>`;
  }

  function page() {
    if (cleanup) { cleanup(); cleanup = null; }
    const lastTest = store.lastDayTest(nr);
    const kartkaKey = `kartka:${nr}`;
    const kf = store.flag(kartkaKey);
    main.innerHTML = `
      <div class="page">
        <div class="btn-row" style="margin-bottom:10px">${days.map((x) => x.nr).map((d) => `<a class="flag-btn" href="#/dzien/${d}" aria-pressed="${d === nr}">Dzień ${d}</a>`).join('')}</div>
        <h1>Dzień ${nr}: ${esc(day.tytul)}</h1>
        <div class="btn-row" style="margin:-4px 0 12px"><a class="btn" href="#/druk/dzien/${nr}">🖨️ Ściąga dnia do wydruku</a></div>
        <p class="page-lead">${esc(day.opis || '')} Około 4 godzin: rozgrzewka, trzy bloki po 50 minut z przerwami, test dnia i wieczorem pusta kartka.</p>
        ${minimum ? `<div class="notice">Tryb <strong>minimum do zdania</strong>: najpierw naprawa i rdzeń egzaminu (aktywatory i zasady to 36 z 50 pytań). Pogłębienie jest na dole, poza planem. <button class="btn btn-ghost small" id="minOff">Wróć do pełnego planu</button></div>`
          : offerMinimum() ? `<div class="notice">Wczoraj poszło ciężko. Chcesz <strong>tryb minimum do zdania</strong>? Najpierw to, co najczęściej pada na egzaminie, pogłębienie później. <button class="btn btn-ghost small" id="minOn">Tak, włącz</button></div>` : ''}

        <section class="dblock">
          <header><h2>Rozgrzewka</h2><span class="muted small">20 min</span></header>
          <ul class="unit-list">
            <li><a href="#/powtorki"><span class="check ${dueTerms ? 'partial' : 'done'}" aria-hidden="true">${dueTerms ? '' : '✓'}</span><span>Zaległe powtórki</span><span class="small muted" style="margin-left:auto">${dueTerms} pojęć</span></a></li>
            <li><a href="#/dryl"><span class="check" aria-hidden="true"></span><span>Ćwiczenie nazw z egzaminu</span><span class="small muted" style="margin-left:auto">5 min</span></a></li>
          </ul>
        </section>

        ${blocks.map(({ b, units: us }, i) => {
          const mt = store.miniTest(nr, b);
          const pool = mtPool(i);
          return `
          ${i > 0 ? `<div class="dbreak"><span>Przerwa · 10 min</span><button class="btn btn-ghost small" data-timer="przerwa-${i}" data-min="10">Odlicz przerwę</button><span class="tmr" id="tmr-przerwa-${i}"></span></div>` : ''}
          <section class="dblock">
            <header><h2>Blok ${b}</h2><span class="muted small">50 min</span>
              <button class="btn btn-ghost small" data-timer="blok-${b}" data-min="50">Odlicz blok</button><span class="tmr" id="tmr-blok-${b}"></span></header>
            ${b === 'A' && repair.length ? `<div class="repair"><strong>Najpierw jednostki naprawcze</strong> – test dnia ${nr - 1} poniżej ${prog.testDnia}% (${Math.round(prevTest.pct)}%). Lekcje z największą liczbą błędów:
              <ul class="unit-list">${repair.map(({ u, errors }) => unitRow(u).replace('</a></li>', ` <span class="pill" style="color:var(--bad)">${errors} błędów</span></a></li>`)).join('')}</ul></div>` : ''}
            ${us.length ? `<ul class="unit-list">${us.map(unitRow).join('')}</ul>` : '<p class="small muted">Brak lekcji w tym bloku (treść w przygotowaniu).</p>'}
            <div class="btn-row" style="margin-top:10px">
              <button class="btn" data-mini="${b}" ${pool.length ? '' : 'disabled'}>Mini-test ${b}: ${Math.min(MINI_N[b], pool.length)} pytań${i ? ` (bloki ${BLOCKS.slice(0, i + 1).join(', ')})` : ''}</button>
              ${mt ? `<span class="small muted">ostatnio: ${mt.score}/${mt.total}</span>` : ''}
            </div>
            <div id="mini-${b}"></div>
          </section>`;
        }).join('')}

        ${conf.egzaminy.length ? `<section class="dblock"><header><h2>Egzaminy dnia</h2><span class="muted small">jak prawdziwy: 50 pytań, 40 minut</span></header>
          <ul class="unit-list">${conf.egzaminy.map((x) => `<li><a href="#/egzamin"><span class="check" aria-hidden="true"></span><span>${{ 'proba-1': 'Próbny egzamin 1 (z pytań kursu)', 'proba-2': 'Próbny egzamin 2 (z pytań kursu)', sp1: 'Sample Paper 1 – niezależny pomiar', mistrzowski: 'Egzamin mistrzowski' }[x] || esc(x)}</span><span class="small muted" style="margin-left:auto">→</span></a></li>`).join('')}</ul></section>` : ''}
        <section class="dblock">
          <header><h2>Test dnia</h2><span class="muted small">30 min</span></header>
          <p class="small">${TEST_N} pytań na czas – ${SEC_PER_Q} s na pytanie (${(TEST_N * SEC_PER_Q) / 60} min), jak na egzaminie. 75% z dzisiejszych lekcji, 25% z poprzednich dni. Potem analiza błędów według rodzaju pułapki.
            Próg: ${prog.testDnia}% – poniżej następny dzień zaczyna się od jednostek naprawczych.</p>
          <div class="btn-row"><button class="btn btn-primary" id="dayTest">Rozpocznij test dnia</button>
            ${lastTest ? `<span class="small" style="color:${lastTest.pct >= prog.testDnia ? 'var(--ok)' : 'var(--bad)'}">ostatnio: ${lastTest.score}/${lastTest.total} (${Math.round(lastTest.pct)}%)</span>` : ''}</div>
          <span class="small muted" id="dayTestMsg" aria-live="polite"></span>
        </section>

        ${extremePool.length >= 3 ? `<section class="dblock">
          <header><h2>Test skrajności</h2><span class="muted small">${Math.min(10, extremePool.length)} pytań · próg 70%</span></header>
          <p class="small">Przypadki graniczne z dzisiejszych pojęć – trudniejsze niż egzamin. Sprawdzają, czy rozumiesz, gdzie kończy się jedno pojęcie, a zaczyna drugie. Bez podpowiedzi.</p>
          <div class="btn-row"><button class="btn" id="extremeGo">Rozpocznij test skrajności</button>
            ${store.extremeTest(nr) ? `<span class="small muted">ostatnio: ${store.extremeTest(nr).score}/${store.extremeTest(nr).total}</span>` : ''}</div>
          <div id="extremeArea"></div>
        </section>` : ''}
        <section class="dblock">
          <header><h2>Pusta kartka</h2><span class="muted small">10 min, wieczorem</span></header>
          ${day.pustaKartka ? `
            <p><strong>${esc(day.pustaKartka.tytul || '')}</strong></p>
            <div>${render(day.pustaKartka.polecenie || '')}</div>
            <p class="small muted">Najpierw odtwórz z pamięci (na kartce albo tutaj), dopiero potem odkryj wzorzec.</p>
            <label class="sr-only" for="kartkaTxt">Twoja kartka</label>
            <textarea id="kartkaTxt" class="own-text" rows="6" placeholder="Wypisz z pamięci…">${esc(kf.notatka || '')}</textarea>
            <div class="btn-row"><button class="btn" id="kartkaShow">Pokaż wzorzec</button><span class="small muted" id="kartkaHint" aria-live="polite"></span></div>
            <div class="own-model" id="kartkaModel" ${kf.samoocena ? '' : 'hidden'}><div class="box-label">Wzorzec</div>${render(day.pustaKartka.wzorzec || '')}</div>
            <div class="own-self" id="kartkaSelf" ${kf.samoocena ? '' : 'hidden'}>
              <div class="seg" role="group" aria-label="Samoocena">${[['mam', 'Mam to'], ['czesciowo', 'Częściowo'], ['nie', 'Nie mam']].map(([k, l]) => `<button data-kself="${k}" aria-pressed="${kf.samoocena === k}">${l}</button>`).join('')}</div>
            </div>` : '<p class="small muted">Ćwiczenie „pusta kartka” dla tego dnia jest w przygotowaniu.</p>'}
        </section>
        ${potrafieHTML()}
        ${minuteHTML()}
        ${projectHTML()}
        ${deepUnits.length ? `<section class="dblock"><header><h2>Pogłębienie</h2><span class="muted small">poza planem minimum</span></header>
          <ul class="unit-list">${deepUnits.map(unitRow).join('')}</ul></section>` : ''}
        ${finalUnits.length ? `<section class="dblock"><header><h2>Finał – „skrajnie biegły”</h2><span class="muted small">po Sample Paper 1</span></header>
          ${sp1Done ? `<ul class="unit-list">${finalUnits.map(unitRow).join('')}</ul><div class="btn-row" style="margin-top:10px"><a class="btn" href="#/egzamin">Egzamin mistrzowski →</a></div>`
            : `<p class="small">🔒 Finał odblokuje się po pierwszym podejściu do Sample Paper 1 (dzień ${C.firstSp1Day(days)}).</p>`}</section>` : ''}
        ${mentorUnits.length || nr === LAST ? `<section class="dblock"><header><h2>Ścieżka mentora</h2><span class="muted small">po egzaminie · nieobowiązkowa</span></header>
          <p class="small muted">Poziom ponad egzaminem: jak tłumaczyć COBIT innym. Kurs przygotowuje, ale nie certyfikuje.</p>
          ${mentorUnits.length ? `<ul class="unit-list">${mentorUnits.map(unitRow).join('')}</ul>` : ''}
          <div class="btn-row" style="margin-top:10px"><a class="btn" href="#/sprawdzian-mentora">Sprawdzian mentora</a>${store.get().mentorExam ? `<span class="small muted">ostatnio: ${store.get().mentorExam.pass ? 'zaliczony' : 'jeszcze nie'}</span>` : ''}</div></section>` : ''}
        <div id="testArea"></div>
      </div>`;

    // Liczniki bloków/przerw (pomocnicze)
    main.querySelectorAll('[data-timer]').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.timer;
      if (timers[id]) { clearInterval(timers[id]); delete timers[id]; document.getElementById('tmr-' + id).textContent = ''; b.textContent = b.dataset.min === '10' ? 'Odlicz przerwę' : 'Odlicz blok'; return; }
      const end = Date.now() + +b.dataset.min * 60000;
      b.textContent = 'Zatrzymaj';
      const tick = () => {
        const left = Math.max(0, end - Date.now());
        const el = document.getElementById('tmr-' + id);
        if (!el) { clearInterval(timers[id]); return; }
        el.textContent = `${String(Math.floor(left / 60000)).padStart(2, '0')}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`;
        if (!left) { clearInterval(timers[id]); delete timers[id]; toast(id.startsWith('przerwa') ? 'Koniec przerwy' : 'Koniec bloku – czas na mini-test'); }
      };
      tick();
      timers[id] = setInterval(tick, 1000);
    }));

    main.querySelectorAll('[data-mini]').forEach((b) => b.addEventListener('click', () => miniTest(b.dataset.mini)));
    document.getElementById('dayTest').addEventListener('click', dayTest);

    if (day.pustaKartka) {
      const ta = document.getElementById('kartkaTxt');
      let t;
      ta.addEventListener('input', () => { document.getElementById('kartkaHint').textContent = ''; clearTimeout(t); t = setTimeout(() => store.setNote(kartkaKey, ta.value), 400); });
      document.getElementById('kartkaShow').addEventListener('click', () => {
        if (!ta.value.trim()) { document.getElementById('kartkaHint').textContent = 'Najpierw spróbuj odtworzyć cokolwiek z pamięci.'; ta.focus(); return; }
        store.setNote(kartkaKey, ta.value);
        document.getElementById('kartkaModel').hidden = false;
        document.getElementById('kartkaSelf').hidden = false;
      });
      main.querySelectorAll('[data-kself]').forEach((b) => b.addEventListener('click', () => {
        store.setNote(kartkaKey, ta.value);
        store.setFlag(kartkaKey, 'samoocena', b.dataset.kself);
        if (b.dataset.kself !== 'mam') store.setFlag(kartkaKey, 'powtorka', true);
        main.querySelectorAll('[data-kself]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        toast(b.dataset.kself === 'mam' ? 'Zapisano' : 'Zapisano – wróć do tej kartki jutro w rozgrzewce');
      }));
    }
    document.getElementById('extremeGo')?.addEventListener('click', extremeTest);
    document.getElementById('minOn')?.addEventListener('click', () => { prefs.set('minimum', '1'); renderDay(main, nr); });
    document.getElementById('minOff')?.addEventListener('click', () => { prefs.remove('minimum'); renderDay(main, nr); });
    // „Potrafię…” – samoocena wieczorem (§11.7).
    main.querySelectorAll('[data-can]').forEach((b) => b.addEventListener('click', () => {
      const key = `potrafie:${nr}:${b.dataset.i}`;
      store.setFlag(key, 'samoocena', b.dataset.can);
      if (b.dataset.can === 'nie') store.setFlag(key, 'powtorka', true);
      b.parentElement.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    }));
    // „Wytłumacz w minutę” (§11.8): 60 s na pojęcie, potem wzorzec i samoocena.
    main.querySelectorAll('[data-minute]').forEach((card) => {
      const id = card.dataset.minute;
      const key = `minuta:${id}`;
      const ta = card.querySelector('textarea');
      const go = card.querySelector('.min-go');
      const clock = card.querySelector('.tmr');
      let t = null;
      ta.addEventListener('input', () => store.setNote(key, ta.value));
      go.addEventListener('click', () => {
        if (t) return;
        let left = 60;
        ta.focus();
        go.textContent = 'Mów albo pisz…';
        t = setInterval(() => {
          left--; clock.textContent = `0:${String(left).padStart(2, '0')}`;
          if (left <= 0) { clearInterval(t); t = null; go.hidden = true; card.querySelector('.own-model').hidden = false; card.querySelector('.own-self').hidden = false; store.setNote(key, ta.value); }
        }, 1000);
        timers['min-' + id] = t;
      });
      card.querySelector('.min-show').addEventListener('click', () => { if (t) { clearInterval(t); t = null; } go.hidden = true; card.querySelector('.own-model').hidden = false; card.querySelector('.own-self').hidden = false; store.setNote(key, ta.value); });
      card.querySelectorAll('[data-mself]').forEach((b) => b.addEventListener('click', () => {
        store.setFlag(key, 'samoocena', b.dataset.mself);
        if (b.dataset.mself !== 'mam') store.addMistake(id);
        card.querySelectorAll('[data-mself]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      }));
    });
    // Projekt końcowy (§11.8): 8 pól, zapis w Notatkach.
    main.querySelectorAll('[data-proj]').forEach((ta) => {
      let tt;
      ta.addEventListener('input', () => { clearTimeout(tt); tt = setTimeout(() => store.setNote(`projekt:${ta.dataset.proj}`, ta.value), 400); });
    });
    document.getElementById('projShow')?.addEventListener('click', () => {
      main.querySelectorAll('[data-proj]').forEach((ta) => store.setNote(`projekt:${ta.dataset.proj}`, ta.value));
      main.querySelectorAll('.proj-model').forEach((x) => { x.hidden = false; });
    });
  }

  function offerMinimum() {
    if (nr < 2) return false;
    const t = store.lastDayTest(nr - 1);
    const prevUnits = units.filter((u) => u.dzien === nr - 1);
    return (t && t.pct < 50) || (prevUnits.length && prevUnits.some((u) => !store.unit(u.id).done) && store.get().startedAt);
  }

  function potrafieHTML() {
    if (!day.potrafie || !day.potrafie.length) return '';
    return `<section class="dblock"><header><h2>Potrafię…</h2><span class="muted small">wieczorem, 3 min</span></header>
      <p class="small muted">Zaznacz uczciwie. Każde „Nie” wróci jutro na początku dnia.</p>
      <ul class="can-list">${day.potrafie.map((txt, i) => {
        const f = store.flag(`potrafie:${nr}:${i}`);
        return `<li><span>${esc(txt)}</span><span class="seg" role="group" aria-label="${esc(txt)}">${[['tak', 'Tak'], ['nie-wiem', 'Nie wiem'], ['nie', 'Nie']].map(([k, l]) => `<button data-can="${k}" data-i="${i}" aria-pressed="${f.samoocena === k}">${l}</button>`).join('')}</span></li>`;
      }).join('')}</ul></section>`;
  }

  function minuteHTML() {
    const rdzen = ((syl && syl.rdzen) || []).filter((id) => terms.has(id));
    if (!conf.wytlumacz || !rdzen.length) return '';
    const howMany = conf.wytlumacz === 'pelny' ? 5 : 1; // §13.2/§18.3: krótka forma – 1 pojęcie, pełna – 5
    // 5 pojęć na dzień – stały wybór dla danego dnia (deterministyczny).
    const pick = rdzen.map((id, i) => ({ id, k: (i * 7 + nr * 13) % 97 })).sort((a, b) => a.k - b.k).slice(0, howMany).map((x) => terms.get(x.id));
    return `<section class="dblock"><header><h2>Wytłumacz w minutę</h2><span class="muted small">wieczorem · ${howMany === 1 ? '1 pojęcie' : `${howMany} pojęć`}</span></header>
      <p class="small muted">Wyobraź sobie kogoś, kto nie zna COBIT. Wytłumacz mu pojęcie w minutę, bez żargonu – na głos albo pisząc. Potem porównaj ze wzorcem.</p>
      ${pick.map((t) => {
        const f = store.flag(`minuta:${t.id}`);
        const scene = t.przyklady && (t.przyklady.psp || t.przyklady.zycie);
        return `<div class="minute" data-minute="${esc(t.id)}">
          <div class="minute-head"><strong>${esc(t.plEgzamin)}</strong><span class="tmr">1:00</span></div>
          <textarea class="own-text" rows="3" placeholder="Twoje wyjaśnienie…">${esc(f.notatka || '')}</textarea>
          <div class="btn-row"><button class="btn btn-primary min-go">Start – 60 sekund</button><button class="btn btn-ghost min-show">Pokaż wzorzec</button></div>
          <div class="own-model" ${f.samoocena ? '' : 'hidden'}><div class="box-label">Wzorzec</div>
            ${poLudzku(t) ? `<p><strong>Po ludzku:</strong> ${esc(poLudzku(t))}</p>` : ''}<p>${render(t.poziom1 || '').replace(/^<p>|<\/p>$/g, '')}</p>${scene ? `<p class="small"><span class="muted">Scena:</span> ${render(scene).replace(/^<p>|<\/p>$/g, '')}</p>` : ''}</div>
          <div class="own-self" ${f.samoocena ? '' : 'hidden'}><div class="seg" role="group" aria-label="Samoocena">${[['mam', 'Mam to'], ['czesciowo', 'Częściowo'], ['nie', 'Nie mam']].map(([k, l]) => `<button data-mself="${k}" aria-pressed="${f.samoocena === k}">${l}</button>`).join('')}</div></div>
        </div>`;
      }).join('')}</section>`;
  }

  function projectHTML() {
    if (!conf.projekt) return '';
    const FIELDS = ['3 interesariuszy Twojej organizacji i czego każdy potrzebuje', 'Cel organizacji → cel związany z informatyką → cel aktywatora', 'Aktywator, który u Ciebie najbardziej kuleje – i po czym to widać', '2 procesy COBIT 5, które by pomogły (nazwa egzaminacyjna i domena)', 'Punkt zapalny – co dziś boli', 'Zdarzenie wyzwalające – co mogłoby uruchomić zmianę', 'Faza cyklu życia wdrożenia, w której jesteś', 'Poziom zdolności jednego procesu (0–5) z uzasadnieniem w skali N/C/W/P'];
    const wz = (syl && syl.projekt && Array.isArray(syl.projekt.wzorzec)) ? syl.projekt.wzorzec : [];
    return `<section class="dblock"><header><h2>Projekt końcowy: moja organizacja w COBIT 5</h2><span class="muted small">30 min, po próbnych egzaminach</span></header>
      <p class="small muted">Opisz własną komendę (albo firmę) językiem COBIT 5. Zapisuje się w Notatkach i w eksporcie.</p>
      <ol class="proj">${FIELDS.map((f, i) => `<li><label for="proj-${i}">${f}</label>
        <textarea id="proj-${i}" class="own-text" rows="2" data-proj="${i}">${esc(store.flag(`projekt:${i}`).notatka || '')}</textarea>
        ${wz[i] ? `<div class="own-model proj-model" hidden><div class="box-label">Wzorzec (komenda z historii)</div>${render(wz[i])}</div>` : ''}</li>`).join('')}</ol>
      ${wz.length ? '<div class="btn-row"><button class="btn" id="projShow">Pokaż wzorzec</button></div>' : '<p class="small muted">Wzorzec projektu jest w przygotowaniu.</p>'}
    </section>`;
  }

  // Pula mini-testu: pytania z bloków 0..i
  function mtPool(i) {
    return questionsForUnits(blocks.slice(0, i + 1).flatMap((x) => x.units), questions);
  }

  function extremeTest() {
    const qs = shuffle(extremePool).slice(0, 10);
    const area = document.getElementById('extremeArea');
    document.getElementById('extremeGo').hidden = true;
    let k = 0, score = 0;
    const step = () => {
      if (k >= qs.length) {
        const pct = (score / qs.length) * 100;
        store.saveExtremeTest(nr, { score, total: qs.length, pct });
        area.innerHTML = `<div class="feedback ${pct >= 70 ? 'ok' : 'bad'}">Test skrajności: ${score}/${qs.length} (${Math.round(pct)}%, próg 70%). ${pct >= 70 ? 'Rozumiesz granice pojęć.' : 'Pojęcia z pomyłkami wrócą w powtórkach z odsłoniętym przykładem skrajnym i listą częstych pomyłek.'}</div>`;
        return;
      }
      area.innerHTML = `<div class="card" style="margin-top:12px"><div class="slide-kind">Test skrajności · ${k + 1} z ${qs.length}</div><div id="xq"></div>
        <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary" id="xqNext" hidden>${k === qs.length - 1 ? 'Wynik' : 'Następne →'}</button></div></div>`;
      renderQuestion(document.getElementById('xq'), qs[k], {
        confidence: true, prog: prog.powtorzonaPomylka,
        onAnswered: (ok) => { if (ok) score++; const n = document.getElementById('xqNext'); n.hidden = false; n.focus(); },
      });
      document.getElementById('xqNext').addEventListener('click', () => { k++; step(); });
    };
    step();
  }

  function miniTest(b) {
    const i = BLOCKS.indexOf(b);
    const qs = shuffle(mtPool(i)).slice(0, MINI_N[b]);
    const area = document.getElementById(`mini-${b}`);
    let k = 0, score = 0;
    const step = () => {
      if (k >= qs.length) {
        store.saveMiniTest(nr, b, { score, total: qs.length });
        // §11.9 – zmęczenie: 2 kolejne mini-testy < 60% → przerwa albo powtórka zamiast nowej treści.
        const last2 = Object.values(store.get().miniTests).sort((x, y) => y.at - x.at).slice(0, 2);
        const tired = last2.length === 2 && last2.every((x) => x.total && x.score / x.total < 0.6);
        area.innerHTML = `<div class="feedback ${score / qs.length >= 0.7 ? 'ok' : 'bad'}">Mini-test ${b}: ${score}/${qs.length}. ${score / qs.length >= 0.7 ? 'Możesz iść dalej.' : 'Zanim pójdziesz dalej, przejrzyj błędne odpowiedzi i przypisy.'}</div>
          ${tired ? `<div class="notice" style="margin-top:10px">Dwa słabsze mini-testy z rzędu – to zwykle zmęczenie, nie brak zdolności. Zrób <strong>15 minut przerwy</strong> albo zamiast nowej lekcji <a href="#/powtorki">powtórki</a>. <button class="btn btn-ghost small" data-timer="zmeczenie" data-min="15">Odlicz 15 min</button><span class="tmr" id="tmr-zmeczenie"></span></div>` : ''}`;
        area.querySelector('[data-timer]')?.addEventListener('click', (e) => {
          const end = Date.now() + 15 * 60000;
          const el = document.getElementById('tmr-zmeczenie');
          clearInterval(timers.zm);
          timers.zm = setInterval(() => { const left = Math.max(0, end - Date.now()); el.textContent = `${String(Math.floor(left / 60000)).padStart(2, '0')}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`; if (!left) { clearInterval(timers.zm); toast('Koniec przerwy'); } }, 1000);
          e.currentTarget.hidden = true;
        });
        return;
      }
      area.innerHTML = `<div class="card" style="margin-top:12px"><div class="slide-kind">Mini-test ${b} · ${k + 1} z ${qs.length}</div><div id="mq"></div>
        <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary" id="mqNext" hidden>${k === qs.length - 1 ? 'Wynik' : 'Następne →'}</button></div></div>`;
      renderQuestion(document.getElementById('mq'), qs[k], {
        confidence: true, hints: { where: null, onSolved: null, hidden: conf.podpowiedzi === 'ukryte' },
        prog: prog.powtorzonaPomylka,
        onAnswered: (ok) => { if (ok) score++; const n = document.getElementById('mqNext'); n.hidden = false; n.focus(); },
      });
      document.getElementById('mqNext').addEventListener('click', () => { k++; step(); });
    };
    step();
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function dayTest() {
    const cur = questionsForUnits(dayUnits, questions).filter(isTimedOk);
    const prev = questionsForUnits(earlierUnits, questions).filter(isTimedOk);
    const nPrev = prev.length ? Math.min(prev.length, Math.round(TEST_N * 0.25)) : 0;
    let pick = [...shuffle(cur).slice(0, TEST_N - nPrev), ...shuffle(prev).slice(0, nPrev)];
    if (pick.length < TEST_N) pick = [...pick, ...shuffle([...cur, ...prev].filter((q) => !pick.includes(q))).slice(0, TEST_N - pick.length)];
    if (pick.length < 5) { document.getElementById('dayTestMsg').textContent = 'Za mało pytań na test dnia – treść tego dnia jest jeszcze w przygotowaniu.'; return; }
    const attempt = Date.now();
    const qs = shuffle(pick).map((q) => C.shuffleOptions(q, attempt));
    main.innerHTML = '<div class="xs xs-wide"><p class="small muted">Test dnia · bez podpowiedzi · omówienie po zakończeniu</p><div id="dayExam"></div></div>';
    cleanup = examScreen(document.getElementById('dayExam'), qs, {
      minutes: (qs.length * SEC_PER_Q) / 60,
      title: `Test dnia ${nr} · ${qs.length} pytań`,
      confidence: true,
      onEnd: ({ answers, conf }) => {
        cleanup = null;
        let score = 0;
        qs.forEach((q, i) => {
          const ok = answers[i] === correctIndex(q);
          if (ok) score++;
          store.recordAnswer(q, ok, { terms: C.termsOfQuestion(q), conf: conf[i] });
        });
        const stats = trapStats(qs, answers);
        const pct = (score / qs.length) * 100;
        store.saveDayTest(nr, { score, total: qs.length, pct, traps: stats.counts });
        const wrong = qs.map((q, i) => ({ q, i })).filter(({ q, i }) => answers[i] !== correctIndex(q));
        main.innerHTML = `
          <div class="page" style="max-width:880px">
            <div class="card" style="text-align:center">
              <div class="muted small">Test dnia ${nr}</div>
              <div class="score">${score}/${qs.length}</div>
              <div style="color:${pct >= prog.testDnia ? 'var(--ok)' : 'var(--bad)'};font-weight:700">${Math.round(pct)}% · próg ${prog.testDnia}%</div>
              <p class="small muted">${pct >= prog.testDnia ? 'Jutro zaczynasz normalnie od bloku A.' : 'Jutro blok A zacznie się od jednostek naprawczych – lekcji z największą liczbą błędów.'}</p>
            </div>
            <h2 style="font-size:1.2rem;margin-top:28px">Które pułapki kosztowały punkty</h2>
            ${trapTable(stats, C.PULAPKI)}
            <h2 style="font-size:1.2rem;margin-top:28px">Omówienie błędów (${wrong.length})</h2>
            <div class="grid">${wrong.map(({ i }) => `<div class="card"><div class="slide-kind" style="margin-bottom:6px">Pytanie ${i + 1}</div><div data-w="${i}"></div></div>`).join('') || '<p class="muted">Bez błędów!</p>'}</div>
            <div class="btn-row" style="margin-top:20px"><button class="btn btn-primary" id="backDay">Wróć do planu dnia</button><a class="btn" href="#/powtorki">Powtórki</a></div>
          </div>`;
        wrong.forEach(({ q, i }) => renderExamQuestion(main.querySelector(`[data-w="${i}"]`), q, { selected: answers[i], reveal: true }));
        document.getElementById('backDay').addEventListener('click', page);
        window.scrollTo(0, 0);
      },
    });
  }

  page();
  // Wejście z „Następnego kroku” na Starcie: od razu uruchamiamy właściwy element dnia.
  if (action) {
    const mini = action.match(/^mini-([ABC])$/);
    if (mini) main.querySelector(`[data-mini="${mini[1]}"]`)?.click();
    else if (action === 'test') document.getElementById('dayTest')?.click();
    else if (action === 'skrajnosci') { document.getElementById('extremeGo')?.click(); document.getElementById('extremeArea')?.scrollIntoView({ block: 'center' }); }
    else if (action === 'kartka') document.getElementById('kartkaTxt')?.closest('section')?.scrollIntoView({ block: 'start' });
    if (mini) document.getElementById(`mini-${mini[1]}`)?.scrollIntoView({ block: 'center' });
  }
  return () => { if (cleanup) cleanup(); Object.values(timers).forEach(clearInterval); };
}
