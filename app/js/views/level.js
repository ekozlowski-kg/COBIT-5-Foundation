// „Mój poziom”: wskaźnik treningowy, słabe tematy z powrotem do działu podręcznika, trening adaptacyjny i pomoc AI.
import * as C from '../content.js';
import { esc } from '../md.js';
import { renderQuestion } from '../quiz.js';
import { diagnose, trainingSet, diagnosticSet, topicParts } from '../diagnoza.js';
import { aiButtonsHTML, bindAI, promptForTopic } from '../czytanie.js';

const pct = (x) => Math.round(x * 100);
const AREA_NAME = { PR: 'Zasady', EN: 'Aktywatory', IM: 'Wdrożenie', PC: 'Model zdolności', M0: 'Fundamenty' };

export async function partLink(code, label = 'Wróć do działu') {
  const tp = await topicParts();
  const href = (tp.byTopic[code] || [])[0];
  return href ? `<a class="btn btn-sm" href="podrecznik/${esc(href)}">${esc(label)}: ${esc((tp.title[href] || {}).t || href)}</a>` : '';
}

export async function renderLevel(main, sub = '') {
  const d = await diagnose();
  const syl = await C.syllabus();
  const topicByCode = Object.fromEntries((syl.tematy || []).map((t) => [t.kod, t]));
  const few = d.evidence < 30;
  const [, label, advice, tone] = d.level;
  const color = tone === 'ok' ? 'var(--ok)' : tone === 'bad' ? 'var(--bad)' : 'var(--trap, #b7791f)';

  const topicRow = (x) => `<div class="card lv-topic">
      <div class="lv-th"><span class="pill pill-code">${esc(x.area)}</span><strong>${esc(x.t.tytul)}</strong>
        <span class="lv-pct" style="color:${x.pct === null ? 'var(--text-2)' : x.pct < 0.5 ? 'var(--bad)' : 'var(--trap, #b7791f)'}">${x.pct === null ? 'nieprzećwiczony' : `${pct(x.pct)}% · ${Math.round(x.n)} odp.`}</span></div>
      ${x.t.en ? `<p class="small muted" style="margin:2px 0 8px">${esc(x.t.en)}${x.t.zakres?.length ? ` · ${esc(x.t.zakres.slice(0, 3).join(' · '))}` : ''}</p>` : ''}
      <div class="btn-row">
        ${x.parts[0] ? `<a class="btn btn-sm btn-primary" href="podrecznik/${esc(x.parts[0])}">Wróć do działu</a>` : ''}
        <button class="btn btn-sm" data-train="${esc(x.t.kod)}">Ćwicz 5 pytań</button>
      </div>
      <div data-ai-topic="${esc(x.t.kod)}">${aiButtonsHTML('Rozkmiń temat z AI')}</div>
    </div>`;

  main.innerHTML = `
    <div class="page">
      <h1>Mój poziom</h1>
      <p class="page-lead">Wskaźnik podsumowuje trening w podręczniku, ćwiczeniach i egzaminach próbnych. Nie jest prognozą wyniku oficjalnego egzaminu. Wskazuje też, do których działów wrócić. Cel to 40/50 (80%) albo więcej.</p>
      <div class="card lv-hero">
        <div><div class="muted small">Wskaźnik treningowy</div>
          <div class="score" style="color:${color}">${d.evidence < 10 ? '?' : d.score}/50</div>
          <div style="font-weight:700;color:${color}">${esc(label)}</div></div>
        <div class="lv-adv"><p style="margin:0 0 8px">${esc(advice)}</p>
          <p class="small muted" style="margin:0">${few ? `Na razie mało danych (${Math.round(d.evidence)} obserwacji treningowych), więc to wstępne podsumowanie treningu. Zrób test diagnostyczny: 20 pytań, około 15 minut.` : `Na podstawie ${Math.round(d.evidence)} obserwacji treningowych${d.exams.length ? ` i ${d.exams.length} egzaminów próbnych` : ''}. Próg zaliczenia to 25/50.`}</p></div>
      </div>
      <div class="btn-row" style="margin:16px 0 8px">
        <button class="btn ${few ? 'btn-primary' : ''} btn-lg" id="diag">Test diagnostyczny (20 pytań)</button>
        <button class="btn ${few ? '' : 'btn-primary'} btn-lg" id="train" ${d.weak.length + d.unseen.length ? '' : 'disabled'}>Trening słabych tematów (15 pytań)</button>
        <a class="btn btn-lg" href="#/egzamin">Egzamin próbny</a>
      </div>
      <div id="run"></div>

      <h2 class="section-title">Trening w obszarach sylabusa</h2>
      <div class="area-bars card">${['PR', 'EN', 'IM', 'PC'].map((a) => { const r = d.area[a]; return `<div class="area-bar">
        <strong title="${esc(C.AREAS[a] || '')}">${a}</strong>
        <div class="progress"><span style="width:${pct(r.p)}%;background:${r.p >= 0.8 ? 'var(--ok)' : r.p >= 0.5 ? 'var(--trap, #b7791f)' : 'var(--bad)'}"></span></div>
        <span class="small">${pct(r.p)}% · ${r.w} pyt.</span></div>`; }).join('')}
        <p class="small muted" style="margin:8px 0 0">${['PR', 'EN', 'IM', 'PC'].map((a) => `${a} = ${AREA_NAME[a]}`).join(' · ')}. Liczba po prawej to waga treningowa z pojedynczego arkusza SP1 (z 50), a nie gwarantowany rozkład każdego egzaminu. Bez danych wskaźnik wynosi 50% wskutek wygładzenia.</p></div>

      <h2 class="section-title">Pierwsze zarejestrowane odpowiedzi bez pomocy</h2>
      <div class="card"><p>${d.first.total ? `${d.first.ok}/${d.first.total} (${pct(d.first.ok / d.first.total)}%)` : 'Brak pierwszych odpowiedzi od czasu dodania tej funkcji.'}</p>
        <p class="small muted">${Object.entries(d.first.byArea).map(([a, r]) => `${a}: ${r.ok}/${r.total}`).join(' · ')}</p>
        <p class="small muted">Osobny wynik dla pytań z 4 opcjami, zarejestrowanych po raz pierwszy w ćwiczeniach, podręczniku lub egzaminie. Powtórki, testy wstępne i odpowiedzi po pomocy nie wchodzą do tego wyniku. Historia starych slajdów bez identyfikatorów oraz nauka poza aplikacją mogą być nieznane. To opis próby, bez przeliczania na wynik egzaminu.</p></div>

      <h2 class="section-title">Wróć do tych tematów${d.weak.length ? ` (${d.weak.length})` : ''}</h2>
      ${d.weak.length ? `<p class="small muted">Od najważniejszych: najwyżej są tematy z wyższą wagą treningową i największą luką.</p><div class="grid grid-2">${d.weak.slice(0, 10).map(topicRow).join('')}</div>`
        : '<p class="muted">Brak tematów poniżej 70%. Tematy pojawią się tu po błędnych odpowiedziach w podręczniku, ćwiczeniach lub egzaminie.</p>'}

      ${d.weakParts.length ? `<h2 class="section-title">Części podręcznika do powtórki</h2>
        <ul class="unit-list card">${d.weakParts.slice(0, 10).map((p) => `<li><a href="podrecznik/${esc(p.href)}"><span class="pill" style="color:var(--bad)">${p.ok}/${p.n}</span><span>${esc(p.title)}</span></a></li>`).join('')}</ul>` : ''}

      ${d.unseen.length ? `<h2 class="section-title">Jeszcze nieprzećwiczone (${d.unseen.length} z ${d.list.length})</h2>
        <details class="card"><summary>Pokaż listę</summary><ul class="lv-unseen">${d.unseen.map((x) => `<li><span class="pill pill-code">${esc(x.area)}</span> ${x.parts[0] ? `<a href="podrecznik/${esc(x.parts[0])}">${esc(x.t.tytul)}</a>` : esc(x.t.tytul)}</li>`).join('')}</ul></details>` : ''}

      <h2 class="section-title">Jak czytać pytania egzaminacyjne</h2>
      <div class="card lv-read">
        <ol>
          <li><strong>Ostatnie zdanie najpierw.</strong> W długim pytaniu właściwe pytanie stoi na końcu. Opis sytuacji to tło.</li>
          <li><strong>Słowa-sygnały.</strong> „NIE” oznacza, że szukasz jedynej fałszywej odpowiedzi. „Najlepiej” oznacza, że wybierasz najpełniejszą według COBIT 5. „Główny” oznacza, że chodzi o cel, a nie szczegół.</li>
          <li><strong>Zakryj odpowiedzi.</strong> Najpierw odpowiedz w myślach, dopiero potem szukaj pasującej opcji.</li>
          <li><strong>Prawda czy fałsz przy każdej opcji.</strong> Najpierw odrzuć fałszywe, dopiero potem wybieraj.</li>
          <li><strong>Słowa skrajne.</strong> „Zawsze”, „tylko”, „wszystkie”: COBIT 5 jest elastyczny, więc takie odpowiedzi zwykle są fałszywe.</li>
          <li><strong>Nazwy z egzaminu.</strong> Egzamin używa własnych nazw, np. „Aktywacja holistycznego podejścia”, a podręcznik innych, np. „Wdrożenie podejścia całościowego”. Nazwy z egzaminu ćwiczysz w zakładce Ćwiczenie nazw.</li>
        </ol>
        <p class="small muted" style="margin:0">Przy każdym pytaniu w ćwiczeniach jest przycisk „Nie rozumiem pytania”. Pokazuje on typ pytania, słowa-sygnały i znaczenie trudnych pojęć, ale nie zdradza odpowiedzi. Po odpowiedzi możesz otworzyć gotowe polecenie dla AI (Claude albo ChatGPT), które wytłumaczy pytanie krok po kroku.</p>
      </div>

      <details class="card" style="margin-top:24px"><summary>Jak liczony jest poziom</summary>
        <p class="small">Wynik opisuje ćwiczenia i powtórki. Przy powtórce średnia pierwszej i ostatniej odpowiedzi ma równe wagi. Odpowiedzi z podręcznika są rozdzielane między tematy części, więc jedna odpowiedź może zasilać kilka tematów. W obszarze wynik ćwiczeń łączę z 3 ostatnimi egzaminami: przy co najmniej 5 obserwacjach ćwiczeń egzaminom nadaję umowną wagę 60%; przy mniejszej liczbie używam samego wyniku egzaminów. To założenie aplikacji, bez walidacji prognostycznej; arkusze mogą zawierać znane pytania. Skala /50 i wagi PR 15, EN 21, IM 7, PC 7 pochodzą z jednego SP1. Przy małej liczbie odpowiedzi wskaźnik jest ciągnięty w stronę 50%. Temat uznaję za słaby poniżej 70%.</p></details>
    </div>`;

  main.querySelectorAll('[data-ai-topic]').forEach((el) => bindAI(el, () => promptForTopic(topicByCode[el.dataset.aiTopic])));
  const run = document.getElementById('run');
  const start = async (qs, title) => { run.scrollIntoView({ behavior: 'smooth', block: 'start' }); await sequence(run, qs, title, () => renderLevel(main)); };
  document.getElementById('diag').addEventListener('click', async () => start(await diagnosticSet(20), 'Test diagnostyczny'));
  document.getElementById('train').addEventListener('click', async () => start(await trainingSet(d, 15), 'Trening słabych tematów'));
  main.querySelectorAll('[data-train]').forEach((b) => b.addEventListener('click', async () => start(await trainingSet(d, 5, { codes: [b.dataset.train] }), topicByCode[b.dataset.train]?.tytul || 'Trening')));
  if (sub === 'trening' && (d.weak.length || d.unseen.length)) document.getElementById('train').click();
  if (sub === 'diagnoza') document.getElementById('diag').click();
}

// Seria pytań w trybie nauki: po każdej odpowiedzi omówienie, rozbiór pytania, AI i link do działu.
async function sequence(el, qs, title, onEnd) {
  const tp = await topicParts();
  let k = 0, score = 0;
  const wrongCodes = new Map();
  const step = () => {
    if (k >= qs.length) {
      const codes = [...wrongCodes.entries()].sort((a, b) => b[1] - a[1]);
      el.innerHTML = `<div class="card"><h3 style="margin-top:0">${esc(title)}: ${score}/${qs.length} (${pct(score / Math.max(1, qs.length))}%)</h3>
        ${codes.length ? `<p>Do powtórki:</p><ul>${codes.map(([c]) => { const h = (tp.byTopic[c] || [])[0]; return `<li>${h ? `<a href="podrecznik/${esc(h)}">${esc((tp.title[h] || {}).t || c)}</a>` : esc(c)}</li>`; }).join('')}</ul>` : '<p>Bez błędów, tak trzymaj.</p>'}
        <div class="btn-row"><button class="btn btn-primary" id="lvBack">Zobacz zaktualizowany poziom</button></div></div>`;
      document.getElementById('lvBack').addEventListener('click', onEnd);
      return;
    }
    const q = qs[k];
    const code = C.firstCode(q);
    const href = (tp.byTopic[code] || [])[0];
    el.innerHTML = `<div class="card"><div class="slide-kind">${esc(title)} · ${k + 1} z ${qs.length}</div><div class="seq-q"></div>
      <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary btn-lg seq-next" hidden>${k === qs.length - 1 ? 'Wynik →' : 'Dalej →'}</button><button class="btn btn-ghost" id="seqStop">Przerwij</button></div></div>`;
    renderQuestion(el.querySelector('.seq-q'), q, {
      backLink: href ? `Temat w podręczniku: <a href="podrecznik/${esc(href)}">${esc((tp.title[href] || {}).t || href)}</a>` : '',
      onAnswered: (ok) => { if (ok) score++; else wrongCodes.set(code, (wrongCodes.get(code) || 0) + 1); const n = el.querySelector('.seq-next'); n.hidden = false; },
    });
    el.querySelector('.seq-next').addEventListener('click', () => { k++; step(); el.scrollIntoView({ block: 'start' }); });
    el.querySelector('#seqStop').addEventListener('click', onEnd);
  };
  step();
}
