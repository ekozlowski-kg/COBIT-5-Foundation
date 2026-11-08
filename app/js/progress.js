// Wspólne wyliczenia postępu: bieżący dzień, pule pytań dnia, lekcje z największą liczbą błędów, gotowość do egzaminu.
import * as C from './content.js';
import { store, prefs } from './store.js';

const SINGLE = new Set(['rozpoznanie', 'egzamin', 'studium', 'mapa']);
export const isTimedOk = (q) => q && SINGLE.has(q.typ) && Array.isArray(q.opcje) && q.opcje.length >= 3;

export function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

// Dzień planu wg postępu: pierwszy dzień z nieukończonymi lekcjami.
export const firstDay = (units) => (units.some((u) => u.dzien === 0) ? 0 : 1);
export const lastDay = (units) => Math.max(5, ...units.map((u) => (typeof u.dzien === 'number' ? u.dzien : 0)));
export function progressDay(units) {
  const L = lastDay(units);
  for (let d = firstDay(units); d <= L; d++) {
    const list = units.filter((u) => u.dzien === d);
    if (list.length && list.some((u) => !store.unit(u.id).done && u.modul.kod !== 'MT' && u.modul.kod !== 'FN')) return d;
  }
  return L;
}

// Dzień kalendarzowy od pierwszego uruchomienia kursu.
export function calendarDay() {
  const st = store.get().startedAt;
  if (!st) return 1;
  return Math.floor((Date.now() - st) / 86400000) + 1; // przycinane w currentDay
}

// Dzień 0 (IT0) ma pierwszeństwo, dopóki nie jest skończony – podstawy przed COBIT (§17.3).
export const currentDay = (units) => (progressDay(units) === 0 ? 0 : Math.min(lastDay(units), Math.max(progressDay(units), calendarDay())));

// Pytania przypisane do zestawu lekcji: z ich `cwiczenia` oraz z pola `lekcja` pytań.
export function questionsForUnits(unitList, questions) {
  const ids = new Set(unitList.map((u) => u.id));
  const out = new Map();
  for (const u of unitList) for (const qid of u.cwiczenia) { const q = questions.get(qid); if (q) out.set(q.id, q); }
  for (const q of questions.values()) if (q.lekcja && ids.has(q.lekcja)) out.set(q.id, q);
  // Pytania bez lekcji (wygenerowane „gdzie to leży?” i zestaw „symulacja”) – przez kody sylabusa tych lekcji.
  const codes = new Set(unitList.flatMap((u) => u.sylabus));
  for (const q of questions.values()) if ((q.wygenerowane || q.zestaw === 'symulacja') && (q.sylabus || []).some((c) => codes.has(c))) out.set(q.id, q);
  // Pretesty służą tylko krokowi „Zgadnij”.
  return [...out.values()].filter((q) => !q.pretest);
}

// Lekcje z największą liczbą błędów (jednostki naprawcze) spośród podanych.
export function weakestUnits(unitList, questions, n = 2) {
  const st = store.get();
  const byUnit = unitList.map((u) => {
    const qs = questionsForUnits([u], questions).filter((q) => !q.wygenerowane);
    const errors = qs.filter((q) => st.answers[q.id] && !st.answers[q.id].lastCorrect).length;
    return { u, errors };
  }).filter((x) => x.errors > 0);
  return byUnit.sort((a, b) => b.errors - a.errors).slice(0, n);
}

// Lista kontrolna „Gotowość do egzaminu” (METODYKA §7).
export async function readiness() {
  const [units, prog, w, syl] = await Promise.all([C.units(), C.progi(), C.wagi(), C.syllabus()]);
  const st = store.get();
  const days = [1, 2, 3, 4, 5].filter((d) => units.some((u) => u.dzien === d));
  const dayRes = days.map((d) => ({ d, t: store.lastDayTest(d) }));
  // §18: gotowość = 2 próbne egzaminy z pytań kursu ≥ 35 (dni 8–9) + SP1 ≥ 35 (dzień 9); egzamin mistrzowski osobno („Skrajnie biegły”).
  const fullSims = st.exams.filter((e) => e.total === 50 && e.name !== 'Egzamin mistrzowski');
  const tries = st.exams.filter((e) => e.total === 50 && e.name === 'Próbny egzamin z pytań kursu');
  const goodSims = tries.filter((e) => e.score >= prog.symulacja);
  const sp1 = st.exams.filter((e) => e.name === 'Sample Paper 1');
  const area = {};
  for (const e of fullSims.slice(0, Math.max(prog.liczbaSymulacji, 1))) {
    for (const [a, r] of Object.entries(e.byArea || {})) { const x = (area[a] ||= { ok: 0, total: 0 }); x.ok += r.ok; x.total += r.total; }
  }
  const lastFullDrill = st.drillSeries.find((s) => s.onlyTraps) || st.drillSeries[0];
  // Opanowanie obszarów z ćwiczeń (tematy sylabusa), ważone udziałem obszaru w egzaminie.
  const mastery = {};
  for (const [code, r] of Object.entries(st.syllabus)) {
    const a = C.areaOf(code);
    if (!w[a]) continue;
    const x = (mastery[a] ||= { ok: 0, total: 0 });
    x.ok += r.ok; x.total += r.total;
  }
  const wSum = Object.values(w).reduce((a, b) => a + b, 0) || 50;
  const weighted = Object.entries(w).reduce((acc, [a, wt]) => acc + (mastery[a] && mastery[a].total ? (mastery[a].ok / mastery[a].total) * wt : 0), 0) / wSum;
  const qAll = [...(await C.questions()).values()].filter((q) => q.sprawdzian);
  const modExam = [...new Set(qAll.map((q) => q.sprawdzian))].map((kod) => ({ kod, pass: !!((st.moduleExams || {})[kod] || {}).pass, tried: !!(st.moduleExams || {})[kod] }));
  const rdzen = (syl && syl.rdzen) || [];
  const minuteOk = rdzen.filter((id) => (st.flags[`minuta:${id}`] || {}).samoocena === 'mam').length;
  const projDone = [0, 1, 2, 3, 4, 5, 6, 7].filter((i) => ((st.flags[`projekt:${i}`] || {}).notatka || '').trim()).length;
  const c = (st.calib || {}).pewny;
  const calib = c && c.total ? { pct: Math.round((c.ok / c.total) * 100), total: c.total } : null;
  return {
    prog, w, mastery, weighted,
    items: [
      { id: 'testDnia', label: `Test dnia ≥ ${prog.testDnia}% w każdym dniu nauki`, ok: dayRes.length > 0 && dayRes.every((x) => x.t && x.t.pct >= prog.testDnia),
        detail: dayRes.map((x) => `D${x.d}: ${x.t ? Math.round(x.t.pct) + '%' : '—'}`).join(' · ') },
      { id: 'sp1', label: `Sample Paper 1 z wynikiem ≥ ${prog.symulacja}/50 (niezależny pomiar)`, ok: sp1.some((e) => e.score >= prog.symulacja), detail: sp1.length ? sp1.map((e) => `${e.score}/${e.total}`).join(' · ') : 'jeszcze nie było' },
      { id: 'symulacja', label: `${prog.liczbaSymulacji} próbne egzaminy z pytań kursu (50 pytań) z wynikiem ≥ ${prog.symulacja}/50`, ok: goodSims.length >= prog.liczbaSymulacji,
        detail: tries.length ? tries.slice(0, 4).map((e) => `${e.score}/50`).join(' · ') : 'jeszcze nie było' },
      { id: 'obszar', label: `Każdy obszar ≥ ${prog.obszar}% w ostatnich próbnych egzaminach`, ok: ['PR', 'EN', 'IM', 'PC'].every((a) => area[a] && area[a].total && (area[a].ok / area[a].total) * 100 >= prog.obszar),
        detail: ['PR', 'EN', 'IM', 'PC'].map((a) => `${a} ${area[a] && area[a].total ? Math.round((area[a].ok / area[a].total) * 100) + '%' : '—'}`).join(' · ') },
      { id: 'drill', label: `Ostatnia seria ćwiczenia nazw z egzaminu ≥ ${prog.drill}%`, ok: !!lastFullDrill && (lastFullDrill.score / lastFullDrill.total) * 100 >= prog.drill,
        detail: lastFullDrill ? `${lastFullDrill.score}/${lastFullDrill.total}` : 'jeszcze nie było' },
      ...(rdzen.length ? [{ id: 'wyjasnia', label: `Wyjaśniasz pojęcia rdzenia w minutę, bez żargonu`, ok: minuteOk >= Math.min(5, rdzen.length),
        detail: `${minuteOk} pojęć z samooceną „Mam to” (cel: co najmniej 5 z ${rdzen.length})` }] : []),
      { id: 'projekt', label: 'Projekt końcowy: Twoja organizacja opisana językiem COBIT 5', ok: projDone === 8, detail: `${projDone}/8 pól (ostatni dzień)` },
      ...(modExam.length ? [{ id: 'moduly', label: 'Sprawdziany modułów zaliczone (≥ 70% w każdej części)', ok: modExam.every((m) => m.pass), detail: modExam.map((m) => `${m.kod} ${m.pass ? '✓' : m.tried ? '✗' : '—'}`).join(' · ') }] : []),
    ],
    calib,
  };
}

// „Następny krok” (prowadzenie za rączkę): jedna rzecz do zrobienia teraz, w kolejności planu dnia.
// lekcja → mini-test po bloku → … → test dnia → (naprawa, gdy poniżej progu) → pusta kartka → następny dzień → egzamin.
export function nextStep(allUnits, prog = { testDnia: 70 }, days = [], questions = null) {
  // Ścieżka mentora (MT) jest poza obowiązkowym planem (§12.4).
  const sp1Done = store.get().exams.some((e) => e.name === 'Sample Paper 1');
  const units = allUnits.filter((u) => u.modul.kod !== 'MT' && (u.modul.kod !== 'FN' || sp1Done));
  const exCount = (name) => store.get().exams.filter((e) => e.name === name).length;
  const st = store.get();
  const day = currentDay(units);
  for (let d = firstDay(units); d <= day; d++) {
    const AREA = { EN: 0, PR: 1, M0: 2, EX: 3, IM: 4, PC: 5 };
    let du = units.filter((u) => u.dzien === d);
    if (prefs.get('minimum', '') === '1') du = du.filter((u) => u.priorytet !== 3).sort((a, b) => ((a.priorytet || 2) - (b.priorytet || 2)) || ((AREA[a.modul.kod] ?? 9) - (AREA[b.modul.kod] ?? 9)));
    const size = Math.ceil(du.length / 3) || 1;
    const blocks = ['A', 'B', 'C'].map((b, i) => ({ b, us: du.slice(i * size, (i + 1) * size) }));
    for (const { b, us } of blocks) {
      if (!us.length) continue;
      const u = us.find((x) => !store.unit(x.id).done);
      if (u) return { kind: 'lekcja', day: d, unit: u, href: `#/lekcja/${u.id}`, label: u.tytul,
        why: store.unit(u.id).seen.length ? 'Kończysz zaczętą lekcję.' : `Lekcja${u.nr ? ` ${u.nr}` : ''} · ${u.minuty ? `${u.minuty} min` : 'kilka minut'}.` };
      if (!store.miniTest(d, b)) return { kind: 'mini', day: d, block: b, href: `#/dzien/${d}/mini-${b}`, label: `Mini-test po bloku ${b}`,
        why: 'Kilka pytań z tego, co właśnie przerobiłeś – żeby sprawdzić, czy zostało w głowie.' };
    }
    // §18.3 – egzaminy przypisane do dnia (próbne, SP1, mistrzowski) przed testem dnia.
    if (days && days.length) {
      const conf = C.dayConf(days, d);
      const need = { proba: 0, sp1: 0, mistrz: 0 };
      for (let dd = 0; dd <= d; dd++) for (const x of C.dayConf(days, dd).egzaminy) {
        if (/^proba/.test(x)) need.proba++; else if (x === 'sp1') need.sp1++; else if (x === 'mistrzowski') need.mistrz++;
      }
      if (conf.egzaminy.includes('sp1') && exCount('Sample Paper 1') < need.sp1) return { kind: 'egzamin', day: d, href: '#/egzamin', label: 'Sample Paper 1 – niezależny pomiar', why: 'Oficjalny arkusz próbny: 50 pytań, 40 minut, jak na prawdziwym egzaminie. To jedyny pomiar na pytaniach, których nie znasz.' };
      if (conf.egzaminy.some((x) => /^proba/.test(x)) && exCount('Próbny egzamin z pytań kursu') < need.proba) return { kind: 'egzamin', day: d, href: '#/egzamin', label: `Próbny egzamin ${need.proba}`, why: '50 pytań, 40 minut, jedno pytanie na ekranie – dokładnie jak na prawdziwym egzaminie. Wynik i omówienie na końcu.' };
      if (conf.egzaminy.includes('mistrzowski') && exCount('Egzamin mistrzowski') < need.mistrz) return { kind: 'egzamin', day: d, href: '#/egzamin', label: 'Egzamin mistrzowski', why: '50 trudniejszych pytań, 40 minut. Próg „skrajnie biegły”: 40/50 dwa razy z rzędu.' };
    }
    if (!du.length) continue;
    const test = store.lastDayTest(d);
    if (!test) return { kind: 'test', day: d, href: `#/dzien/${d}/test`, label: `Test dnia ${d}`,
      why: '20 pytań na czas, jak na egzaminie. Pokaże, co trzeba jeszcze powtórzyć.' };
    // Poniżej progu: cofamy się do prostszych wyjaśnień i powtarzamy test (jeden taki cykl; potem jednostki naprawcze w planie kolejnego dnia).
    const tries = (st.dayTests[d] || []).length;
    if (test.pct < prog.testDnia && tries < 2) {
      const flag = `naprawa:${d}:${test.at}`;
      if (!st.flags[flag]) return { kind: 'naprawa', day: d, href: '#/powtorki', label: 'Powtórz to, co sprawiło kłopot', flag, retest: `#/dzien/${d}/test`,
        why: `Test dnia: ${Math.round(test.pct)}% (próg ${prog.testDnia}%). Wracamy do prostszych wyjaśnień pojęć, w których były błędy – potem test jeszcze raz.` };
      return { kind: 'test', day: d, href: `#/dzien/${d}/test`, label: `Test dnia ${d} – jeszcze raz`, why: 'Po powtórce sprawdźmy, czy teraz jest lepiej.' };
    }
    if (questions) {
      const codes = new Set(du.flatMap((u) => u.sylabus));
      const pool = extremeForDay(questions, null, codes);
      if (pool.length >= 3 && !store.extremeTest(d)) return { kind: 'skrajnosci', day: d, href: `#/dzien/${d}/skrajnosci`, label: 'Test skrajności',
        why: 'Przypadki graniczne z dzisiejszych pojęć – sprawdzają, czy wiesz, gdzie kończy się jedno pojęcie, a zaczyna drugie.' };
    }
    const dd = days.find((x) => x.nr === d);
    if (dd && dd.pustaKartka && !(st.flags[`kartka:${d}`] || {}).samoocena) return { kind: 'kartka', day: d, href: `#/dzien/${d}/kartka`, label: `Pusta kartka: ${dd.pustaKartka.tytul || 'dzień ' + d}`,
      why: 'Na koniec dnia wypisz z pamięci najważniejsze rzeczy. 10 minut – utrwala najlepiej.' };
  }
  if (units.every((u) => store.unit(u.id).done)) return { kind: 'egzamin', day, href: '#/egzamin', label: 'Próbny egzamin', why: 'Wszystkie lekcje za Tobą. Teraz pełne próby egzaminu, aż wynik będzie stabilnie powyżej progu.' };
  return { kind: 'jutro', day, href: `#/dzien/${day}`, label: 'Na dziś wystarczy', why: `Plan dnia ${day} jest zrobiony. Kolejne lekcje odblokują się jutro – teraz krótkie powtórki albo ćwiczenie nazw z egzaminu.` };
}

// §12.3 – pytania skrajne dnia: atom z lekcji dnia albo wspólny kod sylabusa.
export function extremeForDay(questions, atoms, codes) {
  return [...questions.values()].filter((q) => q.skrajnosc && q.atom && !q.pretest
    && ((atoms && atoms.has(q.atom)) || (Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : []).some((c) => codes.has(c))));
}

// §12.1 – Atlas atomów: liście mapy z hasłem i szczeblem opanowania (§10.1 + 6 = Mentor).
// 0 – jeszcze nie; 1 Słyszę – pojęcie się pojawiło (lekcja wprowadzająca ukończona, pytanie, notatka);
// 2 Rozumiem – opanowana odpowiedź dowolnego typu albo „Wytłumacz w minutę” = „Mam to”;
// 3 Rozróżniam – opanowane rozpoznanie / klasyfikacja / mapa / dopasowanie / błędy;
// 4 Stosuję – opanowane studium albo pytanie egzaminacyjne; 5 Biegły – egzaminacyjne + skrajne (jeśli istnieje);
// 6 Mentor – zaliczony sprawdzian mentora z tym atomem.
export const RUNGS = ['—', 'Słyszę', 'Rozumiem', 'Rozróżniam', 'Stosuję', 'Biegły', 'Mentor'];
export function atomAtlas(m, terms, questions, units) {
  if (!m || !m.ok) return [];
  const st = store.get();
  const parents = new Set(m.list.map((n) => n.rodzic).filter(Boolean));
  const termByNode = new Map();
  for (const t of terms.values()) if (t.mapa && !termByNode.has(t.mapa)) termByNode.set(t.mapa, t);
  const heard = new Set(units.filter((u) => store.unit(u.id).done).flatMap((u) => u.wprowadza || []));
  const byTerm = new Map();
  for (const q of questions.values()) {
    const a = st.answers[q.id];
    const ids = new Set([...(C.termsOfQuestion(q) || []), ...(q.atom ? [q.atom] : [])]);
    for (const id of ids) {
      const x = (byTerm.get(id) || { seen: false, types: new Set(), extremeExists: false, extremeOk: false });
      if (q.skrajnosc && q.atom === id) { x.extremeExists = true; if (a && a.lastMastered) x.extremeOk = true; }
      if (a) { x.seen = true; if (a.lastMastered) x.types.add(q.typ); }
      byTerm.set(id, x);
    }
  }
  const mentor = st.mentorExam && st.mentorExam.pass ? new Set(st.mentorExam.atoms || []) : new Set();
  return m.list.filter((n) => !parents.has(n.id)).map((n) => {
    const t = termByNode.get(n.id);
    let lvl = 0;
    if (t) {
      const x = byTerm.get(t.id) || { seen: false, types: new Set(), extremeExists: false, extremeOk: false };
      const f = st.flags['term:' + t.id] || {};
      const minute = (st.flags['minuta:' + t.id] || {}).samoocena === 'mam';
      if (heard.has(t.id) || x.seen || Object.keys(f).length || st.mistakes[t.id]) lvl = 1;
      if (x.types.size || minute) lvl = 2;
      if (['rozpoznanie', 'klasyfikacja', 'mapa', 'dopasowanie', 'bledy', 'kolejnosc'].some((k) => x.types.has(k))) lvl = 3;
      if (x.types.has('studium') || x.types.has('egzamin')) lvl = Math.max(lvl, 4);
      if (x.types.has('egzamin') && (!x.extremeExists || x.extremeOk)) lvl = 5;
      if (mentor.has(t.id)) lvl = 6;
    }
    const anc = m.ancestors(n.id);
    const lesson = t ? units.find((u) => (u.wprowadza || []).includes(t.id)) || null : null;
    return { node: n, term: t || null, level: lvl, group: anc.length ? anc[anc.length - 1] : n, parent: anc[0] || null, lesson };
  });
}

// §13.1/§13.4 – „Gotowość mentora” (osobno, nie blokuje egzaminu).
export async function mentorReadiness() {
  const [units, questions, syl] = await Promise.all([C.units(), C.questions(), C.syllabus()]);
  const st = store.get();
  const mq = [...questions.values()].filter((q) => q.typ === 'mentor');
  const mAns = mq.filter((q) => st.answers[q.id]);
  const mOk = mAns.filter((q) => st.answers[q.id].lastCorrect).length;
  const rdzen = (syl && syl.rdzen) || [];
  const minute = rdzen.filter((id) => (st.flags['minuta:' + id] || {}).samoocena === 'mam').length;
  const done = units.filter((u) => store.unit(u.id).done && u.modul.kod !== 'MT');
  const taught = units.filter((u) => (st.flags['karta:' + u.id] || {}).samoocena === 'tak').length;
  const pct = mAns.length ? Math.round((mOk / mAns.length) * 100) : null;
  return {
    done, taught,
    items: [
      { label: '„Kursant pyta” – co najmniej 80% trafnych odpowiedzi mentora', ok: pct !== null && pct >= 80 && mAns.length >= Math.min(10, mq.length || 10),
        detail: mq.length ? `${pct === null ? '—' : pct + '%'} z ${mAns.length} odpowiedzianych (w kursie: ${mq.length})` : 'pytania w przygotowaniu' },
      { label: 'Wszystkie pojęcia rdzenia wytłumaczone w minutę („Mam to”)', ok: rdzen.length > 0 && minute === rdzen.length, detail: rdzen.length ? `${minute}/${rdzen.length}` : 'lista rdzenia w przygotowaniu' },
      { label: 'Poprowadzone wyjaśnienia z karty prowadzącego (co najmniej 3)', ok: taught >= 3, detail: `${taught} poprowadzonych` },
      { label: 'Zaliczony sprawdzian mentora', ok: !!(st.mentorExam && st.mentorExam.pass), detail: st.mentorExam ? (st.mentorExam.pass ? 'zaliczony' : 'jeszcze nie') : 'jeszcze nie było' },
    ],
  };
}

// §15.3 – „Skrajnie biegły”: egzamin mistrzowski ≥ 40/50 dwa razy z rzędu i każdy obszar ≥ 70%.
export function masterStatus() {
  const ex = store.get().exams.filter((e) => e.name === 'Egzamin mistrzowski');
  const good = (e) => e.total && e.score / e.total >= 0.8 && Object.values(e.byArea || {}).every((r) => !r.total || r.ok / r.total >= 0.7);
  const last2 = ex.slice(0, 2);
  return { ok: last2.length === 2 && last2.every(good), detail: ex.length ? ex.slice(0, 3).map((e) => `${e.score}/${e.total}`).join(' · ') : 'jeszcze nie było', tries: ex.length };
}

// Ćwiczenia terminologiczne EN (questions/terminologia-en.json, §17.10): poza lekcjami.
// Dostępne, gdy KTÓREKOLWIEK hasło z `terminy` zostało wprowadzone (`wprowadza`) w ukończonej lekcji.
export const isTermDrill = (q) => (q.typ === 'nazwa-en' || q.typ === 'popraw-termin') && !q.lekcja && !q.sprawdzian;
export function termPool(units, questions) {
  const known = new Set(units.filter((u) => store.unit(u.id).done).flatMap((u) => u.wprowadza || []));
  return [...questions.values()].filter((q) => isTermDrill(q) && [...(q.terminy || []), ...(q.termin ? [q.termin] : [])].some((id) => known.has(id)));
}
// Kolejka spiralna: najpierw pomyłki, potem nierozwiązane, potem dawno rozwiązane (≥ 2 dni).
export function termQueue(units, questions, n = 10) {
  const st = store.get();
  const now = Date.now();
  const rank = (q) => { const a = st.answers[q.id]; if (!a) return 1; if (!a.lastCorrect) return 0; return now - a.at > 2 * 86400000 ? 2 : 9; };
  return shuffle(termPool(units, questions)).map((q) => ({ q, r: rank(q) })).filter((x) => x.r < 9).sort((a, b) => a.r - b.r).slice(0, n).map((x) => x.q);
}
