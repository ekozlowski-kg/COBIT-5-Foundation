// §16.5 – „Co pamiętasz z wczoraj?” (rano, 3 pytania) i mikropowtórka po przerwie ≥ 10 min (3 pytania, ok. 2 min).
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';
import { renderQuestion } from '../quiz.js';
import { questionsForUnits, currentDay, shuffle } from '../progress.js';

const SINGLE = new Set(['rozpoznanie', 'egzamin', 'studium', 'mapa']);
const today = () => new Date().toISOString().slice(0, 10);

export async function quickPool(kind) {
  const [units, questions] = await Promise.all([C.units(), C.questions()]);
  const st = store.get();
  const day = currentDay(units);
  let list;
  if (kind === 'rano') list = units.filter((u) => u.dzien === day - 1 && u.modul.kod !== 'MT');
  else list = units.filter((u) => store.unit(u.id).done && u.modul.kod !== 'MT').slice(-4);
  const pool = questionsForUnits(list, questions).filter((q) => SINGLE.has(q.typ) && !q.skrajnosc);
  // Najpierw pytania z pomyłką, potem nierozwiązane, potem reszta.
  const rank = (q) => { const a = st.answers[q.id]; return a ? (a.lastCorrect ? 2 : 0) : 1; };
  return shuffle(pool).sort((a, b) => rank(a) - rank(b)).slice(0, 3);
}

export function quickDue(kind, gapMinutes = 0) {
  if (store.flag(`${kind}:${today()}`).samoocena) return false;
  if (kind === 'przerwa') return gapMinutes >= 10;
  return true;
}

export async function renderQuick(main, kind) {
  const qs = await quickPool(kind);
  const title = kind === 'rano' ? 'Co pamiętasz z wczoraj?' : 'Witaj z powrotem – szybka powtórka';
  const lead = kind === 'rano'
    ? 'Trzy krótkie pytania z wczorajszych lekcji. Sen utrwala pamięć – sprawdźmy, co zostało. Około 2 minut.'
    : 'Po przerwie trzy szybkie pytania z ostatnich lekcji. Około 2 minut – potem idziesz dalej.';
  const done = (msg) => {
    store.setFlag(`${kind}:${today()}`, 'samoocena', 'zrobione');
    main.querySelector('#qArea').innerHTML = `<div class="feedback ok">${msg}</div>
      <div class="btn-row" style="margin-top:16px"><a class="btn btn-primary btn-xl" href="#/">Mój następny krok →</a></div>`;
  };
  main.innerHTML = `<div class="page page-narrow">
    <p class="eyebrow">${kind === 'rano' ? 'Rano, przed nową treścią' : 'Mikropowtórka'}</p>
    <h1>${esc(title)}</h1><p class="page-lead">${esc(lead)}</p>
    <div id="qArea"></div>
    <div class="btn-row" style="margin-top:20px"><button class="btn" id="qSkip">Pomiń na dziś</button></div></div>`;
  document.getElementById('qSkip').addEventListener('click', () => { store.setFlag(`${kind}:${today()}`, 'samoocena', 'pominiete'); location.hash = '#/'; });
  if (!qs.length) { done('Na razie nie ma czego powtarzać – idziemy dalej.'); return; }
  let k = 0, ok = 0;
  const step = () => {
    if (k >= qs.length) { document.getElementById('qSkip').hidden = true; done(`Pamiętasz ${ok} z ${qs.length}. ${ok === qs.length ? 'Świetnie!' : 'To, co umknęło, wróci w powtórkach.'}`); return; }
    main.querySelector('#qArea').innerHTML = `<div class="slide-kind" style="margin-bottom:8px">Pytanie ${k + 1} z ${qs.length}</div><div id="qq"></div>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary btn-lg" id="qNext" hidden>${k === qs.length - 1 ? 'Wynik →' : 'Dalej →'}</button></div>`;
    renderQuestion(document.getElementById('qq'), qs[k], { onAnswered: (good) => { if (good) ok++; const n = document.getElementById('qNext'); n.hidden = false; n.focus(); } });
    document.getElementById('qNext').addEventListener('click', () => { k++; step(); });
  };
  step();
}
