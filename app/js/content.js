// Dane kursu. tools/serve.py składa content/ w jedną paczkę /bundle.json (przy każdym żądaniu) i ją waliduje.
// Kontrakt formatu: content/SCHEMA.md.
import { parseLesson, TERM_RE, setTermNames } from './md.js';

let bundleP = null;
const lessonCache = new Map();

export function bundle() {
  if (!bundleP) {
    bundleP = fetch('bundle.json', { cache: 'no-store' }).then((r) => {
      if (!r.ok) throw new Error(`Nie udało się wczytać treści (HTTP ${r.status}). Uruchom aplikację przez: python3 tools/serve.py`);
      return r.json();
    }).catch((e) => { bundleP = null; throw e; });
  }
  return bundleP;
}

export const MODULES = {
  M0: 'Moduł 0 – Fundamenty',
  PR: 'Zasady COBIT 5',
  EN: 'Aktywatory',
  IM: 'Wdrożenie',
  PC: 'Model zdolności procesu',
  EX: 'Egzamin',
  MT: 'Ścieżka mentora',
};

export const DAYS = [
  { nr: 1, tytul: 'Fundamenty i zasada 1', opis: 'Interesariusz, potrzeba, wartość, ryzyko, zasoby, proces vs projekt, ład vs zarządzanie. Zasada 1 i kaskada celów.' },
  { nr: 2, tytul: 'Zasady 2–5 i model procesów', opis: 'Pozostałe zasady, model aktywatora (4 wymiary, wskaźniki wiodące i opóźnione), 5 domen i 37 procesów.' },
  { nr: 3, tytul: 'Siedem aktywatorów', opis: 'Aktywatory 1–7, role i struktury organizacyjne, RACI.' },
  { nr: 4, tytul: 'Wdrożenie i zdolność procesu', opis: 'Cykl życia wdrożenia (7 faz, 3 pierścienie), zdarzenia wyzwalające. Poziomy 0–5, atrybuty, skala N/C/W/P.' },
  { nr: 5, tytul: 'Egzamin próbny i pułapki', opis: 'Próbne egzaminy, analiza błędów, Sample Paper 1, ćwiczenie nazw z egzaminu.' },
];

// Lekcje = jednostki. Moduł wg pola `modul`, kolejność wg modułu i numeru lekcji (sortuje serwer).
export async function units() {
  const b = await bundle();
  return b.lekcje.map((l) => ({
    id: l.id,
    plik: l.plik,
    tytul: l.temat,
    nr: l.lekcja,
    dzien: l.dzien,
    minuty: l.minuty,
    sylabus: l.sylabus || [],
    cwiczenia: l.cwiczenia || [],
    zgadnij: l.zgadnij || [],
    // §11.1 – elementy listy (wprowadzaListe) też są wprowadzone: odblokowują ćwiczenia i trafiają do słownika narastającego.
    wprowadza: [...(l.wprowadza || []), ...(l.wprowadzaListe || [])],
    wprowadzaListe: l.wprowadzaListe || [],
    wymaga: l.wymaga || [],
    zapas: l.zapas || [],
    cel: Array.isArray(l.cel) ? l.cel.join(' ') : (l.cel || ''),
    priorytet: l.priorytet || null,
    kontrolaAutora: l.kontrolaAutora || null,
    wielkiObraz: +l.wielkiObraz || null,
    twierdzenia: l.twierdzenia || [],
    typowePytania: Array.isArray(l.typowePytania) ? l.typowePytania : [],
    modul: { kod: l.modul, tytul: l.modulNazwa || MODULES[l.modul] || l.modul },
  }));
}

export async function terms() {
  const b = await bundle();
  if (!b._terms) b._terms = new Map(b.terminy.map((t) => [t.id, t]));
  termsCache = b._terms;
  setTermNames((id) => (b._terms.get(id) || {}).plEgzamin || null);
  return b._terms;
}

// Pytania z plików + pytania „mapa” wygenerowane z pola `mapa` haseł. Ręczne pytania `mapa` są zamieniane na jednokrotny wybór.
export async function questions() {
  const b = await bundle();
  if (!b._questions) {
    const m = await mapa();
    const map = new Map();
    for (const q of b.pytania) {
      if (q.typ === 'mapa') { const mq = materializeMapQ(q, m); if (mq) map.set(q.id, { ...mq, pochodzenie: 'autorskie' }); }
      else map.set(q.id, { ...q, pochodzenie: 'autorskie' });
    }
    for (const q of await mapQuestions()) if (!map.has(q.id)) map.set(q.id, { ...q, pochodzenie: 'wygenerowane' });
    b._questions = map;
  }
  return b._questions;
}

export async function samplePaper() {
  const b = await bundle();
  return b.samplePaper ? b.samplePaper.map((q) => ({ ...q, typ: q.typ || 'egzamin', pochodzenie: 'sample-paper' })) : null;
}

export async function syllabus() {
  const b = await bundle();
  return b.sylabus || { tematy: [], obszary: [], egzamin: null };
}

export async function traps() {
  const b = await bundle();
  return (b.pulapki && b.pulapki.pulapki) || [];
}

export async function problems() {
  return (await bundle()).problemy || [];
}

export async function lesson(unitId) {
  if (lessonCache.has(unitId)) return lessonCache.get(unitId);
  const all = await units();
  const u = all.find((x) => x.id === unitId);
  if (!u) throw new Error(`Nie ma lekcji „${unitId}”.`);
  const r = await fetch(u.plik, { cache: 'no-store' });
  if (!r.ok) throw new Error(`Nie udało się wczytać ${u.plik}`);
  const l = { ...parseLesson(await r.text(), u.plik), unit: u };
  lessonCache.set(unitId, l);
  return l;
}

// Pojęcia, których dotyczy pytanie (do licznika błędów): przypisy w treści, scenariuszu, opcjach i wyjaśnieniach.
export function termsOfQuestion(q) {
  const ids = new Set([...(q.terminy || []), ...(q.termin ? [q.termin] : [])]);
  for (const m of JSON.stringify(q).matchAll(TERM_RE)) ids.add(m[1]);
  // Bez przypisów: hasła, których nazwa egzaminacyjna (≥ 5 znaków) pada w treści lub scenariuszu pytania.
  if (!ids.size && termsCache) {
    const text = `${q.tresc || ''} ${q.scenariusz || ''} ${q.element || ''}`.toLowerCase();
    for (const t of termsCache.values()) {
      const name = (t.plEgzamin || '').toLowerCase().replace(/\s*\(.*\)$/, '');
      if (name.length >= 5 && text.includes(name)) ids.add(t.id);
    }
  }
  return [...ids];
}

export const firstCode = (q) => (Array.isArray(q.sylabus) ? q.sylabus[0] : q.sylabus) || '';
export const areaOf = (code) => (code || '').slice(0, 2).toUpperCase();

export const AREAS = {
  M0: 'Fundamenty',
  PR: 'Zasady COBIT 5',
  EN: 'Aktywatory',
  IM: 'Wdrożenie',
  PC: 'Model zdolności procesu',
};

export const QTYPES = {
  rozpoznanie: 'Rozpoznanie',
  dopasowanie: 'Dopasowanie',
  klasyfikacja: 'Klasyfikacja',
  studium: 'Analiza przypadku',
  bledy: 'Wykrywanie błędów',
  egzamin: 'Pytanie egzaminacyjne',
  mapa: 'Gdzie to leży?',
  kolejnosc: 'Kolejność',
  mentor: 'Kursant pyta',
  'nazwa-en': 'Nazwa po angielsku',
  wypowiedz: 'Wypowiedź z terminami EN',
  'popraw-termin': 'Popraw termin',
};

// §17.2 – cztery kategorie informacji, stałe etykiety.
export const STATUS_LABEL = {
  oficjalne: 'COBIT 5 (źródło)',
  uproszczenie: 'Wyjaśnienie kursu',
  przyklad: 'Przykład (scenariusz dydaktyczny)',
  opinia: 'Opinia autora kursu',
  niepotwierdzone: 'Do potwierdzenia',
};

export const SLIDE_KIND = {
  start: 'Punkt wyjścia',
  proces: 'Proces krok po kroku',
  'zrodlo-czytaj': 'Czytamy źródło',
  studium: 'Przypadek',
  rozwiazany: 'Rozwiązujemy razem',
  rozklad: 'Rozłóżmy to na części',
  pojecie: 'Pojęcie',
  przyklad: 'Zmieńmy sytuację',
  porownanie: 'Porównanie',
  'nie-jest': 'Czym to nie jest?',
  schemat: 'Schemat',
  wniosek: 'Najważniejszy wniosek',
  zapamietaj: 'Zapamiętaj',
  egzamin: 'Na egzamin',
  pulapka: 'Pułapka terminologiczna',
  mapa: 'Gdzie to leży w COBIT 5?',
  'wlasne-slowa': 'Własnymi słowami',
  tresc: '',
};

export const CONTEXTS = {
  zycie: 'Życie codzienne',
  biuro: 'Biuro',
  organizacja: 'Organizacja',
  firma: 'Organizacja',
  admin: 'Organizacja',
  psp: 'PSP (Modrzewiów)',
  it: 'IT/COBIT',
};

export const DOC_LABEL = {
  'FW-PL': 'COBIT 5 Framework (PL)',
  SYL: 'Sylabus PeopleCert v01.2',
  SP1: 'Sample Paper 1 (PL)',
  ALTKOM: 'Altkom: różnice tłumaczenia',
  WWW: 'Źródło internetowe',
  PROSTO: 'Opracowanie „Prosto, krok po kroku” (nieoficjalne)',
  PAKIET: 'Pakiet materiałów (nieoficjalne)',
};

// ======================================================================
// Metodyka (content/METODYKA.md): mapa COBIT 5, dni, progi, wagi, generator pytań „gdzie to leży?”.
// ======================================================================

export const PROGI_DOMYSLNE = { testDnia: 70, symulacja: 35, liczbaSymulacji: 2, obszar: 60, drill: 90, powtorzonaPomylka: 2 };
export const WAGI_DOMYSLNE = { PR: 15, EN: 21, IM: 7, PC: 7 };

export const PULAPKI = {
  'inna-kategoria': 'Prawdziwe, ale z innej kategorii',
  'zbyt-waskie': 'Tylko część poprawnej odpowiedzi',
  'forma-podrecznikowa': 'Nazwa z podręcznika zamiast egzaminacyjnej',
  'prawda-nie-na-temat': 'Prawdziwe, ale nie na temat pytania',
  falsz: 'Zwyczajnie nieprawdziwe',
  odwrocone: 'Odwrócone pojęcia',
};

let termsCache = null;
// Synchroniczny dostęp do haseł (po pierwszym wczytaniu paczki) – dla silnika ćwiczeń.
export const termsSync = () => termsCache;

export async function progi() {
  const s = await syllabus();
  return { ...PROGI_DOMYSLNE, ...((s.egzamin && s.egzamin.progi) || {}) };
}
export async function wagi() {
  const s = await syllabus();
  return { ...WAGI_DOMYSLNE, ...((s.egzamin && s.egzamin.wagi) || {}) };
}

// Dni planu: DAYS z UI + nadpisania i pusta kartka z syllabus.json → dni[] (klucz `dzien`).
export async function days() {
  // §18 – plan dni czytany z syllabus.dni[] (0–10); bez niego – stary plan 5 dni (+ Dzień 0, gdy są lekcje IT0).
  const s = await syllabus();
  const us = await units();
  const extra = new Map((s.dni || []).map((d) => [d.dzien ?? d.nr, d]));
  let base;
  if ((s.dni || []).length > 5) base = [...extra.keys()].sort((a, b) => a - b).map((nr) => ({ nr, tytul: `Dzień ${nr}`, opis: '' }));
  else base = us.some((u) => u.dzien === 0) ? [{ nr: 0, tytul: 'Podstawy cyfrowe', opis: 'Komputer, dane, sieć, serwer, konto, kopia zapasowa – to, czego COBIT używa bez wyjaśnienia.' }, ...DAYS] : DAYS;
  return base.map((d) => {
    const e = extra.get(d.nr) || {};
    return { ...e, ...d, tytul: e.tytul || d.tytul, opis: e.opis || d.opis, pustaKartka: e.pustaKartka || null, potrafie: e.potrafie || [] };
  });
}

/** §18.3 – ustawienia zależne od dnia: z syllabus.dni[], a gdy brak – wartości domyślne skalowane do długości kursu. */
export function dayConf(dayList, nr) {
  const last = lastDayOf(dayList);
  const long = last > 5;
  const d = dayList.find((x) => x.nr === nr) || {};
  const def = long
    ? { rusztowanie: nr <= 2 ? 'pelny' : nr <= 4 ? 'twoja-kolej' : 'zwiniety', podpowiedzi: nr <= 6 ? 'widoczne' : 'ukryte', propozycjaTrybu: nr >= 3,
      mentor: nr <= 2 ? 0 : nr <= 5 ? 1 : 2, wytlumacz: nr <= 2 ? null : nr <= 6 ? 'krotki' : 'pelny', sp1: nr >= 9, egzaminy: { 8: ['proba-1'], 9: ['sp1', 'proba-2'], 10: ['mistrzowski', 'mistrzowski'] }[nr] || [], projekt: nr === last }
    : { rusztowanie: nr <= 1 ? 'pelny' : nr === 2 ? 'twoja-kolej' : 'zwiniety', podpowiedzi: nr <= 3 ? 'widoczne' : 'ukryte', propozycjaTrybu: nr >= 2,
      mentor: nr <= 1 ? 0 : nr <= 3 ? 1 : 2, wytlumacz: nr <= 1 ? null : nr <= 3 ? 'krotki' : 'pelny', sp1: nr >= 5, egzaminy: nr === 5 ? ['sp1'] : [], projekt: nr === 5 };
  const pick = (k) => (d[k] !== undefined && d[k] !== null ? d[k] : def[k]);
  return { last, rusztowanie: pick('rusztowanie'), podpowiedzi: pick('podpowiedzi'), propozycjaTrybu: !!pick('propozycjaTrybu'), mentor: pick('mentor'),
    wytlumacz: pick('wytlumacz'), sp1: !!pick('sp1'), egzaminy: pick('egzaminy') || [], projekt: !!pick('projekt'), zrodla: pick('zrodla') };
}
// §18.2 – dzień z poEgzaminie (ścieżka mentora) nie liczy się do „Dzień N z …”.
export const lastDayOf = (dayList) => Math.max(5, ...dayList.filter((d) => !d.poEgzaminie).map((d) => d.nr));
export const firstSp1Day = (dayList) => { const l = lastDayOf(dayList); for (let n = 0; n <= l; n++) if (dayConf(dayList, n).sp1) return n; return l; };

let mapCache = null;
export async function mapa() {
  if (mapCache) return mapCache;
  const b = await bundle();
  const list = (b.mapa && b.mapa.wezly) || [];
  const nodes = new Map(list.map((n) => [n.id, n]));
  const children = new Map();
  for (const n of list) {
    const k = n.rodzic || null;
    if (!children.has(k)) children.set(k, []);
    children.get(k).push(n);
  }
  for (const arr of children.values()) arr.sort((a, b) => (a.kolejnosc ?? 999) - (b.kolejnosc ?? 999));
  const ancestors = (id) => {
    const out = [];
    let cur = nodes.get(id);
    while (cur && cur.rodzic) { cur = nodes.get(cur.rodzic); if (cur) out.unshift(cur); }
    return out;
  };
  const depth = (id) => ancestors(id).length;
  const descendants = (id) => {
    const out = [];
    const walk = (k) => (children.get(k) || []).forEach((c) => { out.push(c); walk(c.id); });
    walk(id);
    return out;
  };
  const path = (id) => [...ancestors(id), nodes.get(id)].filter(Boolean).map((n) => n.nazwa).join(' › ');
  mapCache = { list, nodes, children, roots: children.get(null) || [], ancestors, depth, descendants, path, ok: list.length > 0 };
  return mapCache;
}

function seededShuffle(arr, seed) {
  const r = arr.slice();
  let x = 0;
  for (const ch of seed) x = (x * 31 + ch.charCodeAt(0)) >>> 0;
  for (let i = r.length - 1; i > 0; i--) { x = (x * 1103515245 + 12345) >>> 0; const j = x % (i + 1); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

// Słowa znaczące (≥5 liter, bez polskich znaków) – do wykrywania dystraktorów „częściowo prawdziwych”.
const norm = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
const words = (t) => new Set(norm(t).split(/[^a-z0-9]+/).filter((w) => w.length >= 5));
const firstWord = (t) => norm(t).split(/[^a-z0-9]+/).find((w) => w.length >= 3) || '';

// Dystraktory: rodzeństwo poprawnego węzła, potem węzły z tej samej głębokości i obszaru, potem kategorie z innych obszarów.
// Pomija przodków i potomków poprawnego węzła (żeby dystraktor nie był „częściowo prawdziwy”).
function pickDistractors(m, answerId, exclude, seed, element = '') {
  const ans = m.nodes.get(answerId);
  const banned = new Set([answerId, ...m.ancestors(answerId).map((n) => n.id), ...m.descendants(answerId).map((n) => n.id), ...exclude]);
  // Dystraktor dzielący znaczące słowo z pojęciem byłby częściowo prawdziwy (np. EDM vs „Ład – Oszacuj, Kieruj, Monitoruj”).
  const ew = words(element);
  for (const n of m.list) if ([...words(n.nazwa)].some((w) => ew.has(w))) banned.add(n.id);
  const isCat = (n) => (m.children.get(n.id) || []).length > 0;
  const sib = (m.children.get(ans.rodzic || null) || []).filter((n) => !banned.has(n.id));
  const sameDepth = m.list.filter((n) => !banned.has(n.id) && n.obszar === ans.obszar && m.depth(n.id) === m.depth(answerId) && isCat(n));
  const sameArea = m.list.filter((n) => !banned.has(n.id) && n.obszar === ans.obszar && isCat(n));
  const others = m.list.filter((n) => !banned.has(n.id) && isCat(n));
  const out = [];
  for (const group of [sib, sameDepth, sameArea, others]) {
    for (const n of seededShuffle(group, seed + group.length)) {
      if (out.length >= 3) break;
      if (!out.includes(n)) out.push(n);
    }
  }
  return out.map((n) => n.id);
}

// Zamienia pytanie typu `mapa` (ręczne lub wygenerowane) w pytanie jednokrotnego wyboru.
export function materializeMapQ(q, m) {
  if (!m || !m.ok) return null;
  const ids = [q.poprawny, ...(q.dystraktory || [])];
  if (!ids.every((id) => m.nodes.has(id))) return null;
  const opts = seededShuffle(ids, q.id).map((id) => ({
    tekst: m.nodes.get(id).nazwa,
    poprawna: id === q.poprawny,
    wyjasnienie: id === q.poprawny
      ? (q.wyjasnienie || `Tak. Ścieżka: ${m.path(id)}.`)
      : `To inne miejsce w COBIT 5: ${m.path(id)}.`,
    pulapka: id === q.poprawny ? undefined : 'inna-kategoria',
  }));
  return { ...q, tresc: q.tresc || `Gdzie w COBIT 5 leży: **${q.element}**?`, opcje: opts };
}

// Generator: jedno pytanie na hasło z polem `mapa` (poprawna odpowiedź = węzeł nadrzędny pojęcia).
export function generateMapQuestion(m, nodeId, { element, termId, sylabus = [] } = {}) {
  const node = m.nodes.get(nodeId);
  if (!node || !node.rodzic || !m.nodes.has(node.rodzic)) return null;
  // Domeny procesów należą jednocześnie do PRM i do Ładu/Zarządzania – automat dałby pytanie niejednoznaczne.
  if (/^domena-/.test(nodeId)) return null;
  const parent = m.nodes.get(node.rodzic);
  const el = element || node.nazwa;
  // Odpowiedź zawierająca nazwę pojęcia to podpowiedź („Ład” → „Ład i Zarządzanie”).
  const fw = firstWord(el);
  if (fw && norm(parent.nazwa).split(/[^a-z0-9]+/).includes(fw)) return null;
  const dys = pickDistractors(m, parent.id, [], nodeId, el);
  if (dys.length < 3) return null;
  const raw = {
    id: `gen-mapa-${termId || nodeId}`,
    typ: 'mapa',
    wygenerowane: true,
    element: element || node.nazwa,
    poprawny: parent.id,
    dystraktory: dys,
    sylabus,
    terminy: termId ? [termId] : [],
    wyjasnienie: `„${element || node.nazwa}” należy do: ${m.path(parent.id)}.${node.opis ? ' ' + node.opis : ''}`,
    status: 'uproszczenie',
  };
  return materializeMapQ(raw, m);
}

export async function mapQuestions() {
  const [m, t] = await Promise.all([mapa(), terms()]);
  if (!m.ok) return [];
  const out = [];
  const b = await bundle();
  // Ręczne pytanie `mapa` o to samo pojęcie (pole `element`) zastępuje wygenerowane.
  const manual = new Set(b.pytania.filter((q) => q.typ === 'mapa').map((q) => norm(q.element)));
  for (const term of t.values()) {
    if (!term.mapa || manual.has(norm(term.plEgzamin))) continue;
    const q = generateMapQuestion(m, term.mapa, { element: term.plEgzamin, termId: term.id, sylabus: term.sylabus || [] });
    if (q) out.push(q);
  }
  return out;
}

// Tasowanie odpowiedzi (decyzja 2026-11-08): poprawna nie może stać zawsze na tej samej pozycji.
// Kolejność losowana na podejście (ziarno: id pytania + numer podejścia), stała w obrębie podejścia.
// Wyjątki: Sample Paper 1 (uzasadnienia odnoszą się do liter) i opcje z `stala: true`.
const SHUFFLE_TYPES = new Set(['egzamin', 'studium', 'rozpoznanie', 'mentor']);
function seeded(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
export function shuffleOptions(q, attempt = 0) {
  if (!q || !Array.isArray(q.opcje) || !SHUFFLE_TYPES.has(q.typ) || q.pochodzenie === 'sample-paper' || q.kodSP || q.final) return q;
  // Decyzja Metodyki (audyt Altkom): kolejność stała dla danego pytania – ziarno = id pytania.
  const rnd = seeded(`${q.id}`);
  const movable = q.opcje.map((o, i) => (o.stala ? null : i)).filter((i) => i !== null);
  const perm = movable.slice();
  for (let i = perm.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  const out = q.opcje.slice();
  movable.forEach((pos, k) => { out[pos] = q.opcje[perm[k]]; });
  return { ...q, opcje: out };
}

// §16.1 – „O co naprawdę chodzi”: cały COBIT 5 Foundation w 7 zdaniach (kompas).
export const COMPASS = [
  { nr: 1, q: 'Po co to wszystko?', a: 'Żeby informatyka dawała korzyść przy rozsądnym ryzyku i kosztach. Potrzeby ludzi zamienia się w konkretne cele.', area: 'PR' },
  { nr: 2, q: 'Czego to dotyczy?', a: 'Całej organizacji, nie tylko działu IT.', area: 'PR' },
  { nr: 3, q: 'Skąd ta wiedza?', a: 'Z jednej ramy, która łączy inne standardy (ITIL, ISO…).', area: 'PR' },
  { nr: 4, q: 'Czym się to robi?', a: 'Siedmioma „narzędziami” – aktywatorami.', area: 'EN' },
  { nr: 5, q: 'Kto co robi?', a: 'Szefowie oceniają, kierują i pilnują (Ład), kierownicy planują, tworzą, wykonują i mierzą (Zarządzanie).', area: 'PR' },
  { nr: 6, q: 'Jak to wprowadzić?', a: 'Krok po kroku, w 7 fazach, dbając o ludzi i ciągłe ulepszanie.', area: 'IM' },
  { nr: 7, q: 'Skąd wiem, że proces jest dobry?', a: 'Mierzę jego zdolność na skali 0–5.', area: 'PC' },
];

// §16.5 – kodowanie barwą i ikoną: te same symbole wszędzie (mapa, przypisy, atlas, kompas).
export const SYMBOLS = {
  lad: { icon: '🧭', label: 'Ład' }, zarzadzanie: { icon: '🛠️', label: 'Zarządzanie' },
  'akt-zasady-polityki': { icon: '📜', label: 'Zasady' }, 'akt-procesy': { icon: '🔄', label: 'Procesy' },
  'akt-struktury': { icon: '🏛️', label: 'Struktury' }, 'akt-kultura': { icon: '🤝', label: 'Kultura' },
  'akt-informacja': { icon: '📊', label: 'Informacja' }, 'akt-uslugi': { icon: '🖥️', label: 'Usługi i aplikacje' },
  'akt-ludzie': { icon: '👥', label: 'Ludzie' },
  'domena-edm': { icon: '🧭', label: 'EDM' }, 'domena-apo': { icon: '🗺️', label: 'APO' }, 'domena-bai': { icon: '🏗️', label: 'BAI' },
  'domena-dss': { icon: '⚙️', label: 'DSS' }, 'domena-mea': { icon: '📏', label: 'MEA' },
};

// §17.9 – rejestr źródeł; §17.13 – pliki modułów; §16.5 – ściągi dnia.
export async function zrodla() { const b = await bundle(); return b.zrodla || {}; }
export async function moduly() { const b = await bundle(); return b.moduly || []; }
export async function sciagi() { const b = await bundle(); return b.sciagi || {}; }
