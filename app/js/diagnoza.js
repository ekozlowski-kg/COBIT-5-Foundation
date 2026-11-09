// Diagnoza poziomu: szacuje wynik egzaminu z odpowiedzi w ćwiczeniach, podręczniku i próbnych egzaminach,
// wskazuje słabe tematy sylabusa i część podręcznika, do której trzeba wrócić.
import * as C from './content.js';
import { store } from './store.js';

const PODR_KEY = 'c5.podrecznik';
let mapP = null;

// Temat sylabusa → części podręcznika (przez lekcje kursu i podrecznik/lekcje.json).
export async function topicParts() {
  if (mapP) return mapP;
  mapP = (async () => {
    const [units, lekcje, spis] = await Promise.all([
      C.units(),
      fetch('podrecznik/lekcje.json').then((r) => (r.ok ? r.json() : {})).catch(() => ({})),
      fetch('podrecznik/spis.js').then((r) => (r.ok ? r.text() : '')).then((t) => { try { return JSON.parse(t.slice(t.indexOf('['), t.lastIndexOf(']') + 1)); } catch (e) { return []; } }).catch(() => []),
    ]);
    const title = {};
    for (const ch of spis) for (const p of ch.parts || []) title[p.href] = { t: p.t, chap: ch.chap };
    const byTopic = {};
    const topicsOfPart = {};
    for (const u of units) {
      const href = lekcje[u.id];
      if (!href) continue;
      for (const code of u.sylabus) {
        const l = (byTopic[code] ||= []);
        if (!l.includes(href)) l.push(href);
        const t = (topicsOfPart[href.replace(/\.html$/, '')] ||= []);
        if (!t.includes(code)) t.push(code);
      }
    }
    return { byTopic, topicsOfPart, title };
  })();
  return mapP;
}

function podrecznikState() { try { return JSON.parse(localStorage.getItem(PODR_KEY) || '{}'); } catch (e) { return {}; } }

const LEVELS = [
  [45, 'Mistrz', 'Wynik 90–100%. Utrzymuj formę egzaminem mistrzowskim raz na kilka dni.', 'ok'],
  [40, 'Cel osiągnięty (80%+)', 'Jesteś na poziomie 80–89%. Domknij ostatnie słabe tematy, żeby mieć zapas.', 'ok'],
  [35, 'Zdasz z zapasem', 'Szacunkowo 70–79%. Do celu 80% brakuje kilku tematów: przerób listę poniżej.', 'mid'],
  [25, 'Na granicy zdania', 'Szacunkowo 50–69%. Próg jest w zasięgu, ale bez zapasu. Wróć do najsłabszych działów.', 'mid'],
  [0, 'Poniżej progu', 'Szacunkowo poniżej 50%. Przejdź podręcznik dział po dziale i wracaj tu po każdym rozdziale.', 'bad'],
];

// Wygładzenie: przy małej liczbie odpowiedzi wynik ciągnie do 50% (nie wiemy jeszcze, jak jest).
const smooth = (ok, n, prior = 0.5, k = 3) => (ok + prior * k) / (n + k);

export async function diagnose() {
  const [questions, syl, wagi, tp] = await Promise.all([C.questions(), C.syllabus(), C.wagi(), topicParts()]);
  const st = store.get();
  const topics = syl.tematy || [];
  const per = {};
  for (const t of topics) per[t.kod] = { t, ok: 0, n: 0, seen: 0, lastWrong: 0, sources: new Set() };
  // 1) ćwiczenia i egzaminy z aplikacji: pierwsza odpowiedź = rzetelny pomiar, ostatnia = czy już naprawione
  for (const [qid, a] of Object.entries(st.answers || {})) {
    const q = questions.get(qid);
    if (!q) continue;
    for (const code of Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : []) {
      const p = per[code];
      if (!p) continue;
      p.seen++;
      // pierwsza próba waży 1, ostatnia (jeśli była powtórka) też 1 – pokazuje postęp, ale nie zawyża
      const first = a.firstCorrect ? 1 : 0;
      const last = (a.lastMastered ?? a.lastCorrect) ? 1 : 0;
      if (a.tries > 1) { p.ok += (first + last) / 2; } else p.ok += first;
      p.n += 1;
      if (!a.lastCorrect) p.lastWrong++;
      p.sources.add('ćwiczenia');
    }
  }
  // 2) pytania w podręczniku – wynik części rozkładany na jej tematy
  const pst = podrecznikState();
  const partScores = [];
  for (const [id, e] of Object.entries(pst)) {
    const qs = Object.values((e && e.q) || {});
    if (!qs.length) continue;
    const ok = qs.filter(Boolean).length;
    partScores.push({ id, ok, n: qs.length, href: id + '.html', title: (tp.title[id + '.html'] || {}).t || id });
    for (const code of tp.topicsOfPart[id] || []) {
      const p = per[code];
      if (!p) continue;
      const share = 1 / (tp.topicsOfPart[id].length || 1);
      p.ok += ok * share; p.n += qs.length * share; p.sources.add('podręcznik');
    }
  }
  // 3) obszary: tematy + próbne egzaminy (najmocniejszy sygnał – nieznane wcześniej pytania na czas)
  const AREAS = ['PR', 'EN', 'IM', 'PC'];
  const area = {};
  for (const a of AREAS) area[a] = { ok: 0, n: 0, exOk: 0, exN: 0 };
  for (const p of Object.values(per)) {
    // M0 to wprowadzenie spoza sylabusa – nie liczy się do prognozy wyniku.
    if (area[p.t.obszar]) { area[p.t.obszar].ok += p.ok; area[p.t.obszar].n += p.n; }
  }
  const exams = (st.exams || []).slice(0, 3);
  for (const e of exams) for (const [a, r] of Object.entries(e.byArea || {})) if (area[a]) { area[a].exOk += r.ok; area[a].exN += r.total; }
  const wSum = Object.values(wagi).reduce((x, y) => x + y, 0) || 50;
  let predicted = 0;
  for (const a of AREAS) {
    const r = area[a];
    const pr = smooth(r.ok, r.n);
    const ex = r.exN ? smooth(r.exOk, r.exN) : null;
    r.p = ex === null ? pr : (r.n >= 5 ? 0.6 * ex + 0.4 * pr : ex);
    r.w = wagi[a] || 0;
    predicted += (r.w / wSum) * r.p * 50;
  }
  const evidence = Object.values(area).reduce((x, r) => x + r.n + r.exN, 0);
  const score = Math.round(predicted);
  const level = evidence < 10
    ? [0, 'Brak danych', 'Nie wiem jeszcze, na jakim jesteś poziomie. Zrób test diagnostyczny albo przejdź kilka części podręcznika z pytaniami.', 'mid']
    : LEVELS.find(([min]) => score >= min);
  // Tematy: słabe (dane są i wynik < 70%) oraz nieprzećwiczone; ranking wg wagi obszaru × luki.
  const list = Object.values(per).map((p) => {
    const a = p.t.obszar;
    const pct = p.n ? p.ok / p.n : null;
    const w = (wagi[a] || 3) / wSum;
    return { ...p, area: a, pct, parts: tp.byTopic[p.t.kod] || [], prio: p.n ? w * (1 - smooth(p.ok, p.n)) * Math.min(1, p.n / 2) : w * 0.35 };
  });
  const weak = list.filter((x) => x.n >= 1 && x.pct < 0.7).sort((a, b) => b.prio - a.prio);
  const unseen = list.filter((x) => x.n === 0).sort((a, b) => b.prio - a.prio);
  const strong = list.filter((x) => x.n >= 2 && x.pct >= 0.85);
  const weakParts = partScores.filter((p) => p.n >= 2 && p.ok / p.n < 0.7).sort((a, b) => a.ok / a.n - b.ok / b.n);
  return { score, level, area, evidence, weak, unseen, strong, list, weakParts, partScores, exams, title: tp.title };
}

// Pytania do treningu: najsłabsze tematy, najpierw pytania jeszcze niezaliczone; proporcje egzaminu przy diagnozie.
export async function trainingSet(d, n = 15, { codes = null } = {}) {
  const questions = await C.questions();
  const st = store.get();
  const pool = [...questions.values()].filter((q) => ['egzamin', 'studium', 'rozpoznanie', 'mapa'].includes(q.typ) && q.opcje?.length >= 3 && !q.pretest && q.opcje.some((o) => o.poprawna));
  const target = codes || [...d.weak.slice(0, 6), ...d.unseen.slice(0, 4)].map((x) => x.t.kod);
  const byCode = (code) => pool.filter((q) => (Array.isArray(q.sylabus) ? q.sylabus : [q.sylabus]).includes(code));
  const fresh = (q) => { const a = st.answers[q.id]; return !a ? 0 : a.lastCorrect ? 2 : 1; }; // 0 nowe, 1 źle, 2 dobrze
  const out = [];
  let round = 0;
  while (out.length < n && round < 6) {
    for (const code of target) {
      const c = byCode(code).filter((q) => !out.includes(q)).sort((a, b) => (fresh(a) === 1 ? -1 : fresh(a)) - (fresh(b) === 1 ? -1 : fresh(b)) || Math.random() - 0.5);
      if (c[0]) out.push(c[0]);
      if (out.length >= n) break;
    }
    round++;
  }
  if (out.length < n) {
    const rest = pool.filter((q) => !out.includes(q)).sort(() => Math.random() - 0.5);
    out.push(...rest.slice(0, n - out.length));
  }
  return out.sort(() => Math.random() - 0.5);
}

// Test diagnostyczny: po jednym pytaniu z możliwie wielu tematów, w proporcjach obszarów egzaminu.
export async function diagnosticSet(n = 20) {
  const [questions, syl, wagi] = await Promise.all([C.questions(), C.syllabus(), C.wagi()]);
  const st = store.get();
  const pool = [...questions.values()].filter((q) => (q.typ === 'egzamin' || q.typ === 'studium') && q.opcje?.length === 4 && !q.pretest && !q.skrajnosc);
  const wSum = Object.values(wagi).reduce((x, y) => x + y, 0) || 50;
  const out = [];
  for (const [a, w] of Object.entries(wagi)) {
    const k = Math.round((w / wSum) * n);
    const codes = (syl.tematy || []).filter((t) => t.obszar === a || (a === 'PR' && t.obszar === 'M0')).map((t) => t.kod).sort(() => Math.random() - 0.5);
    const pick = [];
    for (const code of codes) {
      const c = pool.filter((q) => C.firstCode(q) === code && !st.answers[q.id]);
      const any = c.length ? c : pool.filter((q) => C.firstCode(q) === code);
      if (any.length) pick.push(any[Math.floor(Math.random() * any.length)]);
      if (pick.length >= k) break;
    }
    out.push(...pick);
  }
  return out.slice(0, n).sort(() => Math.random() - 0.5);
}
