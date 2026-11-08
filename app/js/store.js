// Jedyny moduł dotykający localStorage. Postęp, notatki, błędy, powtórki, wyniki egzaminów.
const KEY = 'c5.state.v1';

const empty = () => ({
  version: 1,
  units: {},      // unitId -> { seen: number[], last: number, done: bool }
  answers: {},    // qid -> { tries, lastCorrect, firstCorrect, at }
  flags: {},      // "slide:unit:idx" | "term:id" -> { powtorka, nieRozumiem, wazne, notatka }
  mistakes: {},   // termId -> liczba błędów
  syllabus: {},   // kod -> { ok, total }
  leitner: {},    // termId -> { box: 1..5, due: number }
  drillRound: 0,
  exams: [],      // { at, score, total, byArea, minutes, details }
  pretest: {},    // qid -> { ok, at }  (krok „Zgadnij” – nie liczy się do opanowania)
  dayTests: {},   // dzień -> [{ at, score, total, pct, traps }]
  miniTests: {},  // "dzień:blok" -> { at, score, total }
  drillSeries: [],// [{ at, score, total, onlyTraps }]
  startedAt: null,
  sp1Early: false,
  extremeTests: {}, // dzień -> { at, score, total, pct } (§12.3 „Test skrajności”)
  mentorExam: null, // { at, pass, atoms: [], pct, mam }
  moduleExams: {}, // §17.12 – moduł -> { at, parts: {czesc: {ok,total}}, pass }
  calib: {},      // pewność (§11.4): pewny|raczej|strzelam -> { ok, total }
});

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    return { ...empty(), ...JSON.parse(raw) };
  } catch (e) {
    return empty();
  }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* tryb prywatny itp. */ }
  listeners.forEach((fn) => fn(state));
}

export const store = {
  get: () => state,
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  // ---- Slajdy / jednostki ----
  markSlide(unitId, idx, total) {
    const u = (state.units[unitId] ||= { seen: [], last: 0, done: false });
    if (!u.seen.includes(idx)) u.seen.push(idx);
    u.last = idx;
    if (total && u.seen.length >= total) u.done = true;
    save();
  },
  unit(unitId) { return state.units[unitId] || { seen: [], last: 0, done: false }; },

  // ---- Odpowiedzi ----
  // mastery=false (po podpowiedzi albo „Strzelam”) – odpowiedź zapisana, ale nie liczy się do opanowania (§11.2, §11.4).
  recordAnswer(q, correct, { terms = [], conf = null, hinted = false, mastery = undefined } = {}) {
    const m = mastery === undefined ? (!!correct && !hinted && conf !== 'strzelam') : !!mastery;
    const a = (state.answers[q.id] ||= { tries: 0, lastCorrect: false, firstCorrect: null, at: 0 });
    a.tries += 1;
    a.lastCorrect = !!correct;
    a.lastMastered = m;
    a.hinted = !!hinted;
    if (conf) a.conf = conf;
    if (a.firstCorrect === null) a.firstCorrect = !!correct;
    a.at = Date.now();
    for (const code of Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : []) {
      const s = (state.syllabus[code] ||= { ok: 0, total: 0 });
      s.total += 1;
      if (m) s.ok += 1;
    }
    if (conf) { const c = ((state.calib ||= {})[conf] ||= { ok: 0, total: 0 }); c.total += 1; if (correct) c.ok += 1; }
    if (!correct) for (const t of terms) state.mistakes[t] = (state.mistakes[t] || 0) + 1;
    // Pomyłka przy „Pewny” – najcenniejszy sygnał: hasło na początek powtórek.
    if (!correct && conf === 'pewny') for (const t of terms) {
      state.mistakes[t] = (state.mistakes[t] || 0) + 1;
      (state.flags['term:' + t] ||= {}).powtorka = true;
    }
    save();
  },
  setUnitMastery(unitId, ok) { const u = (state.units[unitId] ||= { seen: [], last: 0, done: false }); u.mastered = !!ok; save(); },
  answer(qid) { return state.answers[qid]; },
  clearMistake(termId) { delete state.mistakes[termId]; save(); },
  decMistake(termId) {
    if (!state.mistakes[termId]) return;
    state.mistakes[termId] -= 1;
    if (state.mistakes[termId] <= 0) delete state.mistakes[termId];
    save();
  },

  // ---- Flagi i notatki ----
  flag(key) { return state.flags[key] || {}; },
  toggleFlag(key, name) {
    const f = (state.flags[key] ||= {});
    f[name] = !f[name];
    cleanup(key);
    save();
    return f[name];
  },
  setFlag(key, name, value) {
    const f = (state.flags[key] ||= {});
    f[name] = value;
    cleanup(key);
    save();
  },
  setNote(key, text) {
    const f = (state.flags[key] ||= {});
    f.notatka = text;
    cleanup(key);
    save();
  },

  // ---- Leitner (dryl terminologiczny) ----
  leitner(termId) { return state.leitner[termId] || { box: 1, due: 0 }; },
  leitnerAnswer(termId, correct) {
    const l = state.leitner[termId] || { box: 1, due: 0 };
    l.box = correct ? Math.min(5, l.box + 1) : 1;
    // Pudełko n wraca po 2^(n-1) rundach
    l.due = state.drillRound + (correct ? 2 ** (l.box - 1) : 1);
    state.leitner[termId] = l;
    save();
  },
  nextDrillRound() { state.drillRound += 1; save(); return state.drillRound; },

  // ---- Egzaminy ----
  saveExam(result) { state.exams.unshift(result); state.exams = state.exams.slice(0, 20); save(); },

  // ---- Metodyka ----
  recordPretest(qid, ok) { state.pretest[qid] = { ok: !!ok, at: Date.now() }; save(); },
  saveDayTest(day, r) { (state.dayTests[day] ||= []).unshift({ at: Date.now(), ...r }); save(); },
  saveExtremeTest(day, r) { (state.extremeTests ||= {})[day] = { at: Date.now(), ...r }; save(); },
  extremeTest(day) { return (state.extremeTests || {})[day] || null; },
  saveMentorExam(r) { state.mentorExam = { at: Date.now(), ...r }; save(); },
  lastDayTest(day) { return (state.dayTests[day] || [])[0] || null; },
  saveMiniTest(day, block, r) { state.miniTests[`${day}:${block}`] = { at: Date.now(), ...r }; save(); },
  miniTest(day, block) { return state.miniTests[`${day}:${block}`] || null; },
  saveDrillSeries(r) { state.drillSeries.unshift({ at: Date.now(), ...r }); state.drillSeries = state.drillSeries.slice(0, 30); save(); },
  addMistake(termId, n = 1) { state.mistakes[termId] = (state.mistakes[termId] || 0) + n; save(); },
  ensureStarted() { if (!state.startedAt) { state.startedAt = Date.now(); save(); } return state.startedAt; },
  setSp1Early() { state.sp1Early = true; save(); },
  markExamUsed(ids) { state.examUsed = [...new Set([...(state.examUsed || []), ...ids])]; save(); },

  // ---- Eksport / import / reset ----
  export() { return JSON.stringify(state, null, 2); },
  import(json) { state = { ...empty(), ...JSON.parse(json) }; save(); },
  reset() { state = empty(); save(); },
};

function cleanup(key) {
  const f = state.flags[key];
  if (f && !f.powtorka && !f.nieRozumiem && !f.wazne && !f.samoocena && !f.skrajny && !(f.notatka && f.notatka.trim())) delete state.flags[key];
}

// Ustawienia interfejsu (motyw, rozmiar tekstu) – osobne klucze, czytane też w <head>.
export const prefs = {
  get(name, def) { try { return localStorage.getItem('c5.' + name) ?? def; } catch (e) { return def; } },
  set(name, val) { try { localStorage.setItem('c5.' + name, val); } catch (e) {} },
  remove(name) { try { localStorage.removeItem('c5.' + name); } catch (e) {} },
};

// Tryb nauki (METODYKA §10.2): „laik” (domyślnie) – mniej szczegółów naraz; „pelny” – wszystko odsłonięte.
export const tryb = () => (prefs.get('tryb', 'laik') === 'pelny' ? 'pelny' : 'laik');
export const isLaik = () => tryb() === 'laik';
