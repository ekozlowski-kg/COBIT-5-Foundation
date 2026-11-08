import { prefs, store, tryb } from './store.js';
import * as C from './content.js';
import { currentDay, nextStep } from './progress.js';
import { showHowTo } from './ui.js';
import { esc } from './md.js';
import { toast } from './ui.js';
import { renderHome } from './views/home.js';
import { renderLesson } from './views/lesson.js';
import { renderGlossary } from './views/glossary.js';
import { renderDrill } from './views/drill.js';
import { renderReview } from './views/review.js';
import { renderNotes } from './views/notes.js';
import { renderExam } from './views/exam.js';
import { renderDay } from './views/day.js';
import { renderMap } from './views/map.js';
import { renderMentor, renderMentorExam } from './views/mentor.js';
import { renderTeacherCard, renderPrint } from './views/print.js';
import { renderQuick } from './views/quick.js';
import { renderModules, renderModule } from './views/module.js';

const main = document.getElementById('main');
let cleanup = null;

// ---------- Motyw i rozmiar tekstu ----------
const THEMES = ['system', 'light', 'dark'];
const THEME_LABEL = { system: 'Motyw: systemowy', light: 'Motyw: jasny', dark: 'Motyw: ciemny' };
function applyTheme(t) {
  if (!THEMES.includes(t)) t = 'system';
  if (t === 'system') { delete document.documentElement.dataset.theme; prefs.remove('theme'); }
  else { document.documentElement.dataset.theme = t; prefs.set('theme', t); }
  document.querySelectorAll('[data-theme-set]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeSet === t)));
}
let theme = prefs.get('theme', 'system');
applyTheme(theme);
document.querySelectorAll('[data-theme-set]').forEach((b) => b.addEventListener('click', () => {
  theme = b.dataset.themeSet;
  applyTheme(theme);
  toast(THEME_LABEL[theme]);
}));

let scale = parseFloat(prefs.get('fontScale', '1')) || 1;
function setScale(v) {
  scale = Math.min(1.34, Math.max(0.89, Math.round(v * 1000) / 1000)); // 16–24 px przy bazie 18 px
  document.documentElement.style.setProperty('--font-scale', scale);
  prefs.set('fontScale', String(scale));
  document.getElementById('fontReset').textContent = `${Math.round(18 * scale)} px`;
}
setScale(scale);
document.getElementById('fontUp').addEventListener('click', () => setScale(scale + 1 / 9));
document.getElementById('fontDown').addEventListener('click', () => setScale(scale - 1 / 9));
document.getElementById('fontReset').addEventListener('click', () => setScale(1));

// Tryb nauki (§10.2): „laik” domyślnie, „pelny” na życzenie.
function applyTryb(v) {
  if (v === 'pelny') prefs.set('tryb', 'pelny'); else prefs.set('tryb', 'laik');
  document.body.dataset.tryb = tryb();
  document.querySelectorAll('[data-tryb-set]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.trybSet === tryb())));
}
applyTryb(tryb());
document.querySelectorAll('[data-tryb-set]').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.trybSet === tryb()) return;
  applyTryb(b.dataset.trybSet);
  toast(tryb() === 'laik' ? 'Tryb dla początkujących: najpierw po ludzku' : 'Tryb pełny: wszystkie szczegóły');
  route();
}));

// Od dnia 2 – jednorazowa propozycja trybu pełnego (nic nie zmienia samo).
async function offerFullMode() {
  if (tryb() !== 'laik' || prefs.get('trybOferta', '') || document.body.classList.contains('presenting')) return;
  try {
    const units = await C.units();
    const dl = await C.days();
    if (!store.get().startedAt || !C.dayConf(dl, currentDay(units)).propozycjaTrybu) return;
  } catch (e) { return; }
  if (document.getElementById('modeOffer')) return;
  const el = document.createElement('div');
  el.id = 'modeOffer';
  el.className = 'offer';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', 'Propozycja trybu pełnego');
  el.innerHTML = `<p><strong>Dobrze Ci idzie – pokazać więcej szczegółów?</strong><br>
    <span class="small muted">Tryb pełny od razu pokazuje nazwy z podręcznika i EN, poziom „Ekspercko” i źródła. Zawsze możesz wrócić w menu „Aa”.</span></p>
    <div class="btn-row"><button class="btn btn-primary" data-ans="tak">Tak, pokaż więcej</button><button class="btn btn-ghost" data-ans="nie">Zostań przy prostym</button></div>`;
  document.body.appendChild(el);
  el.querySelectorAll('[data-ans]').forEach((b) => b.addEventListener('click', () => {
    prefs.set('trybOferta', b.dataset.ans);
    el.remove();
    if (b.dataset.ans === 'tak') { applyTryb('pelny'); route(); }
  }));
}

// „Co mam teraz zrobić?” (§14.4) – jedno zdanie dopasowane do miejsca w kursie.
let currentNav = 'home';
const HELP = {
  lekcja: 'Przeczytaj slajd i kliknij „Dalej →” na dole. Słowo podkreślone z „?” możesz kliknąć – pojawi się wyjaśnienie. Gdy coś jest niejasne, kliknij „Nie rozumiem”.',
  dzien: 'To plan całego dnia – rób rzeczy od góry do dołu. Najprościej: wróć na Start i kliknij duży czarny przycisk.',
  powtorki: 'Tu wracają pojęcia, w których były pomyłki. Kliknij pojęcie i przeczytaj je jeszcze raz – prościej i na innym przykładzie.',
  slownik: 'Wpisz słowo w okienko wyszukiwania albo kliknij pojęcie na liście. Wyjaśnienie pojawi się obok.',
  dryl: 'Ćwiczysz nazwy, które padają na egzaminie. Kliknij odpowiedź – od razu zobaczysz, czy dobrze.',
  notatki: 'Tu są Twoje zapiski i oznaczone slajdy. Kliknij tytuł, żeby wrócić do tego miejsca.',
  egzamin: 'Próbny egzamin wygląda jak prawdziwy: 50 pytań i 40 minut. Najlepiej zrób go, gdy Start Ci go zaproponuje.',
  mapa: 'Mapa pokazuje, gdzie leży każde pojęcie. Kliknij „przypis” przy pojęciu, żeby przeczytać wyjaśnienie.',
  mentor: 'Tu uczysz się tłumaczyć COBIT innym. Otwórz kartę lekcji i opowiedz ją komuś albo na głos.',
};
async function fillHelp() {
  const box = document.getElementById('helpPop');
  let text = HELP[currentNav];
  if (currentNav === 'home' || !text) {
    try { const [u, p, d, q] = await Promise.all([C.units(), C.progi(), C.days(), C.questions()]); const st = nextStep(u, p, d, q); text = `Kliknij duży czarny przycisk na Starcie: „${st.label}”. ${st.why}`; }
    catch (e) { text = 'Wróć na Start i kliknij duży czarny przycisk – to zawsze Twój następny krok.'; }
  }
  box.innerHTML = `<p class="help-text">${esc(text)}</p>
    <div class="btn-row"><a class="btn btn-primary" href="#/">Mój następny krok →</a><button class="btn" id="helpHow">Jak korzystać (4 kroki)</button></div>
    <p class="small muted" style="margin:10px 0 0">Wszystko zapisuje się samo. Niczego nie zepsujesz klikaniem.</p>`;
  document.getElementById('helpHow').addEventListener('click', () => { closeMenus(); showHowTo(); });
}
document.getElementById('helpMenu').addEventListener('toggle', (e) => { if (e.target.open) fillHelp(); });

// Menu „Więcej” i „Wygląd”: zamykanie kliknięciem obok, Esc i po zmianie widoku.
const menus = [...document.querySelectorAll('details.more, details.settings')];
const closeMenus = (except) => menus.forEach((d) => { if (d !== except) d.open = false; });
menus.forEach((d) => d.addEventListener('toggle', () => { if (d.open) closeMenus(d); }));
document.addEventListener('click', (e) => { if (!e.target.closest('details.more, details.settings')) closeMenus(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenus(); });
document.querySelectorAll('.more .pop a').forEach((a) => a.addEventListener('click', () => closeMenus()));

// ---------- Nawigacja mobilna ----------
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const open = !document.body.classList.contains('nav-open');
  document.body.classList.toggle('nav-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

// ---------- Router ----------
const routes = [
  [/^#?\/?$/, () => renderHome(main), 'home'],
  [/^#\/lekcja\/([\w-]+)(?:\/(\d+))?$/, (m) => renderLesson(main, m[1], { slide: m[2] ? +m[2] - 1 : null }), 'home'],
  [/^#\/prezentacja\/([\w-]+)(?:\/(\d+))?$/, (m) => renderLesson(main, m[1], { slide: m[2] ? +m[2] - 1 : null, present: true }), 'home'],
  [/^#\/slownik(?:\/([\w-]+))?$/, (m) => renderGlossary(main, m[1]), 'slownik'],
  [/^#\/dryl$/, () => renderDrill(main), 'dryl'],
  [/^#\/powtorki$/, () => renderReview(main), 'powtorki'],
  [/^#\/notatki$/, () => renderNotes(main), 'notatki'],
  [/^#\/egzamin$/, () => renderExam(main), 'egzamin'],
  // Dni 0–11 – numer może mieć dwie cyfry (inaczej „#/dzien/10” otwierał dzień 0 z akcją „10”).
  [/^#\/dzien(?:\/(\d{1,2}))?(?:\/([\w-]+))?$/, (m) => renderDay(main, m[1], m[2] || null), 'dzien'],
  [/^#\/mapa$/, () => renderMap(main), 'mapa'],
  [/^#\/mentor$/, () => renderMentor(main), 'mentor'],
  [/^#\/moduly$/, () => renderModules(main), 'home'],
  [/^#\/modul\/([\w-]+)$/, (m) => renderModule(main, m[1]), 'home'],
  [/^#\/szybka\/(rano|przerwa)$/, (m) => renderQuick(main, m[1]), 'home'],
  [/^#\/sprawdzian-mentora$/, () => renderMentorExam(main), 'mentor'],
  [/^#\/karta\/([\w-]+)$/, (m) => renderTeacherCard(main, m[1]), 'mentor'],
  [/^#\/druk\/(cobit|dzien)(?:\/(\d{1,2}))?$/, (m) => renderPrint(main, m[1], m[2]), 'home'],
];

// Przerwa w nauce (§16.5): ile minut minęło od ostatniej aktywności – Start może zaproponować mikropowtórkę.
const touch = () => prefs.set('aktywny', String(Date.now()));
{
  const prev = +prefs.get('aktywny', '0');
  document.body.dataset.gap = prev ? String(Math.floor((Date.now() - prev) / 60000)) : '0';
  touch();
  let t = 0;
  document.addEventListener('click', () => { if (Date.now() - t > 30000) { t = Date.now(); touch(); } }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const p2 = +prefs.get('aktywny', '0');
      document.body.dataset.gap = p2 ? String(Math.floor((Date.now() - p2) / 60000)) : '0';
      touch();
    }
  });
}

async function route() {
  if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
  closeNav();
  const hash = location.hash || '#/';
  for (const [re, fn, nav] of routes) {
    const m = hash.match(re);
    if (!m) continue;
    document.querySelectorAll('[data-nav]').forEach((a) => {
      if (a.dataset.nav === nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    currentNav = /^#\/(lekcja|prezentacja)/.test(hash) ? 'lekcja' : nav;
    document.getElementById('moreMenu').classList.toggle('current', ['mapa', 'dryl', 'notatki', 'mentor'].includes(nav));
    closeMenus();
    document.body.classList.remove('lnav-open');
    try {
      main.innerHTML = '<div class="page"><p class="muted">Wczytywanie…</p></div>';
      cleanup = (await fn(m)) || null;
      offerFullMode();
    } catch (e) {
      console.error(e);
      main.innerHTML = `<div class="page page-narrow"><h1>Nie udało się otworzyć tego miejsca</h1>
        <p class="page-lead">Twój postęp jest zapisany – nic się nie stało. Wróć na Start i kliknij duży przycisk.</p>
        <a class="btn btn-primary btn-xl" href="#/">← Wróć na Start</a>
        <p class="small muted" style="margin-top:24px">Szczegóły dla osoby, która pomaga w obsłudze: ${esc(e.message)}</p></div>`;
    }
    return;
  }
  location.hash = '#/';
}

window.addEventListener('hashchange', route);
route();
