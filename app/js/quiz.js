// Silnik ćwiczeń: 6 typów z content/SCHEMA.md. Tryb nauki = natychmiastowe omówienie KAŻDEJ odpowiedzi.
import { esc, inline } from './md.js';
import { store } from './store.js';
import { QTYPES, termsOfQuestion, termsSync, PROGI_DOMYSLNE, shuffleOptions } from './content.js';
import { sourceText, statusPill } from './ui.js';
import { analysisHTML, aiButtonsHTML, bindAI, promptForQuestion } from './czytanie.js';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];
const SINGLE = new Set(['rozpoznanie', 'egzamin', 'studium', 'mapa', 'mentor']);
const CTX_LABEL = { zycie: 'z życia codziennego', biuro: 'z biura', organizacja: 'z organizacji', firma: 'z organizacji', admin: 'z organizacji', psp: 'z PSP', it: 'z IT/COBIT' };

// Po N pomyłkach z tym samym hasłem: inne wyjaśnienie (warianty albo przykład z innego kontekstu) – METODYKA §7.
export function altExplanation(termIds, prog = PROGI_DOMYSLNE.powtorzonaPomylka) {
  const terms = termsSync();
  if (!terms) return '';
  const mistakes = store.get().mistakes;
  const parts = [];
  for (const id of termIds) {
    const t = terms.get(id);
    const n = mistakes[id] || 0;
    if (!t || n < 1) continue;
    // Pierwsza pomyłka: cofamy się do najprostszego wyjaśnienia (po ludzku + przykład z życia).
    if (n < prog) {
      const human = t.poLudzku || (t.warianty && t.warianty.prosto) || t.poziom1;
      const ex = t.przyklady && (t.przyklady.zycie || t.przyklady.firma);
      if (human) parts.push(`<div class="alt-expl"><div class="box-label">Po ludzku: „${esc(t.plEgzamin)}”</div><p>${inline(human)}</p>${ex ? `<p class="small"><span class="muted">Na przykład:</span> ${inline(ex)}</p>` : ''}</div>`);
      continue;
    }
    const variants = ['prosto', 'dokladniej', 'ekspercko'].filter((k) => t.warianty && t.warianty[k]);
    const ctx = Object.keys(t.przyklady || {});
    const pool = [...variants.map((k) => ['w', k]), ...ctx.map((k) => ['p', k])];
    if (!pool.length) continue;
    const [kind, key] = pool[n % pool.length];
    const text = kind === 'w' ? t.warianty[key] : t.przyklady[key];
    const label = kind === 'w' ? { prosto: 'prościej', dokladniej: 'dokładniej', ekspercko: 'ekspercko' }[key] : `przykład ${CTX_LABEL[key] || key}`;
    parts.push(`<div class="alt-expl"><div class="box-label">Inaczej o „${esc(t.plEgzamin)}” (${label}) · pomyłek: ${n}</div>${inline(text)}</div>`);
  }
  return parts.join('');
}
export const isSingle = (q) => SINGLE.has(q.typ);
export const correctIndex = (q) => (q.opcje || []).findIndex((o) => o.poprawna);

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

const codes = (q) => (Array.isArray(q.sylabus) ? q.sylabus : q.sylabus ? [q.sylabus] : []);

const head = (q, termRef, examMode = false) => (!examMode && q.typ === 'mentor') ? `
  <div class="btn-row" style="margin-bottom:6px"><span class="quiz-type">Kursant pyta</span></div>
  <div class="quiz-context student"><div class="box-label">${esc(q.postac || 'Kursant')} pyta:</div><p class="quiz-stem" id="stem-${esc(q.id)}" style="margin:0">${inline(q.tresc, termRef)}</p></div>
  <p class="muted" style="margin:0 0 12px">Co odpowiesz jako mentor? Wybierz najlepszą odpowiedź – prawdziwą i zrozumiałą dla laika.</p>` : examMode ? `
  ${q.scenariusz ? `<div class="quiz-context">${inline(q.scenariusz)}</div>` : ''}
  <p class="quiz-stem" id="stem-${esc(q.id)}">${inline(q.tresc)}</p>` : `
  <div class="btn-row" style="margin-bottom:6px">
    <span class="quiz-type">${q.typ === 'bledy' && q.mentor ? 'Popraw kolegę' : esc(QTYPES[q.typ] || q.typ)}</span>
    ${q.skrajnosc ? '<span class="pill pill-extreme" title="Przypadek graniczny – trudniejszy niż typowe pytanie egzaminu">Skrajny przypadek</span>' : ''}
    ${codes(q).map((c) => `<span class="pill pill-code">${esc(c)}</span>`).join('')}
    ${q.pochodzenie === 'sample-paper' ? `<span class="pill prov-oficjalne">Sample Paper 1${q.numer ? ` · pyt. ${esc(q.numer)}` : ''}</span>` : ''}
  </div>
  ${q.scenariusz ? `<div class="quiz-context">${inline(q.scenariusz, termRef)}</div>` : ''}
  <p class="quiz-stem" id="stem-${esc(q.id)}">${inline(q.tresc, termRef)}</p>
  ${q.typ === 'bledy' && q.tekst ? `<div class="quiz-context${q.mentor ? ' colleague' : ''}">${q.mentor ? '<div class="box-label">Kolega mówi:</div>' : ''}${inline(q.tekst, termRef)}</div>` : ''}`;

const footer = (q, ok, summary, termRef) => `<div class="feedback ${ok ? 'ok' : 'bad'}">
  ${summary}
  ${q.wyjasnienie && !['dopasowanie', 'mapa'].includes(q.typ) ? `<div style="margin-top:6px">${inline(q.wyjasnienie, termRef)}</div>` : ''}
  ${q.zrodlo ? `<div class="source-ref">Źródło: ${esc(sourceText(q.zrodlo))}</div>` : ''}
  ${q.status && q.status !== 'oficjalne' ? `<div style="margin-top:6px">${statusPill(q.status)}</div>` : ''}</div>`;

// §11.5: informacja zwrotna według rodzaju pułapki – co wybrałeś → dlaczego kusi → jak odróżnić → co zapamiętać.
export const TRAP_FEEDBACK = {
  'inna-kategoria': ['To zdanie jest prawdziwe, ale opisuje inną część COBIT 5.', 'Najpierw ustal, o którą listę albo kategorię pyta pytanie.', 'Prawdziwe to jeszcze nie „na temat” – zacznij od kategorii.'],
  'zbyt-waskie': ['To fragment prawdy – pasuje do jednego elementu.', 'Pytanie dotyczy całości. Szukaj odpowiedzi, która obejmuje wszystko.', 'Gdy pytają o całość, wybierz najszerszą poprawną odpowiedź.'],
  'forma-podrecznikowa': ['Brzmi znajomo, bo to nazwa z polskiego podręcznika.', 'Egzamin używa innych nazw niż podręcznik. Sprawdź nazwę egzaminacyjną.', 'Na egzaminie liczą się nazwy z polskiego arkusza.'],
  'prawda-nie-na-temat': ['To zdanie jest prawdziwe – dlatego kusi.', 'Sprawdź, czy odpowiada dokładnie na to pytanie, a nie na podobne.', 'Odpowiedź musi być prawdziwa i na temat.'],
  falsz: ['Brzmi wiarygodnie, ale w COBIT 5 tak nie jest.', 'Porównaj z definicją: które słowo jest przekręcone albo dodane?', 'Gdy coś brzmi „prawie dobrze”, szukaj przekręconego słowa.'],
  odwrocone: ['Ma właściwe pojęcia, tylko w odwrotnym kierunku.', 'Sprawdź kierunek: co z czego wynika, kto komu podlega, co jest pierwsze.', 'Uważaj na zamienioną kolejność albo kierunek.'],
};
// §13.2 – „Kursant pyta”: błędne odpowiedzi mentora wg pulapkaMentora.
export const MENTOR_FEEDBACK = {
  zargon: ['Merytorycznie to prawda, ale kursant tego nie zrozumie – same fachowe słowa.', 'Zapytaj siebie: czy laik umiałby to powtórzyć własnymi słowami?', 'Mentor najpierw mówi po ludzku, dopiero potem podaje nazwę.'],
  'falszywe-uproszczenie': ['Brzmi prosto i przyjaźnie – dlatego kusi.', 'Uproszczenie nie może zmieniać sensu. Porównaj z tym, co mówi COBIT.', 'Prościej – tak. Nieprawdziwie – nigdy.'],
  przytakniecie: ['Miło przyznać kursantowi rację.', 'Sprawdź założenie w samym pytaniu – często jest błędne.', 'Mentor życzliwie prostuje błędne założenie, zamiast je potwierdzać.'],
  'nie-na-temat': ['To prawda, ale nie odpowiada na to, o co pyta kursant.', 'Wróć do pytania: czego kursant naprawdę chce się dowiedzieć?', 'Najpierw odpowiedz na pytanie, dopiero potem dodawaj resztę.'],
};
function trapFeedback(q, pick, good, termRef) {
  const o = q.opcje[pick];
  const t = TRAP_FEEDBACK[o.pulapka] || MENTOR_FEEDBACK[o.pulapkaMentora];
  const lines = [
    `<li><strong>Wybrałeś ${KEYS[pick]}:</strong> ${inline(o.tekst, termRef)}</li>`,
    `<li><strong>Dlaczego kusi:</strong> ${t ? t[0] : ''} ${o.wyjasnienie ? inline(o.wyjasnienie, termRef) : ''}</li>`,
    t ? `<li><strong>Jak odróżnić:</strong> ${t[1]}</li>` : '',
    `<li><strong>Zapamiętaj:</strong> ${t ? t[2] + ' ' : ''}Poprawna jest <strong>${KEYS[good]}</strong>.</li>`,
  ];
  return `Tym razem nie.<ol class="fb-steps">${lines.join('')}</ol>`;
}

const CONF = [['pewny', 'Pewny'], ['raczej', 'Raczej'], ['strzelam', 'Strzelam']];
const SECTION_HINTS = ['Gdzie to leży?', 'Odrzuć jedną', 'Pokaż rozwiązany przykład'];

/**
 * Pytanie w trybie nauki. opts: { termRef, onTerm, onAnswered(correct, info), record=true, prog,
 *   confidence: bool (§11.4 – Pewny/Raczej/Strzelam przed sprawdzeniem),
 *   hints: { where: html, onSolved: fn|null, hidden: bool } (§11.2 – 3 stopnie podpowiedzi) }
 */
export function renderQuestion(el, q, opts = {}) {
  // Nowe podejście = nowa kolejność odpowiedzi (stała w obrębie podejścia).
  if (opts.shuffle !== false) q = shuffleOptions(q, (store.answer(q.id) || {}).tries || 0);
  const termRef = opts.termRef || null;
  let hinted = false;
  let conf = null;
  const done = (correct) => {
    if (opts.pretest) store.recordPretest(q.id, correct);
    else if (opts.record !== false) store.recordAnswer(q, correct, { terms: termsOfQuestion(q), conf, hinted });
    // §12.3 – pomyłka w pytaniu skrajnym: atom wraca w powtórkach z odsłoniętym szczeblem „skrajny”.
    if (!correct && !opts.pretest && q.skrajnosc && q.atom) {
      store.setFlag('term:' + q.atom, 'skrajny', true);
      store.setFlag('term:' + q.atom, 'powtorka', true);
    }
    if (!correct && !opts.pretest) {
      // Pomyłka przy „Pewny” → od razu INNE wyjaśnienie (rotacja wariantów), inaczej – najpierw po ludzku.
      const alt = altExplanation(termsOfQuestion(q), conf === 'pewny' ? 0 : opts.prog);
      if (alt) el.insertAdjacentHTML('beforeend', alt);
    }
    if (correct && (hinted || conf === 'strzelam') && !opts.pretest) {
      el.querySelector('.fb')?.insertAdjacentHTML('beforeend', `<p class="small muted" style="margin:8px 0 0">${hinted ? 'Z podpowiedzią' : 'Na strzał'} – zaliczone, ale wróci w powtórkach, żeby utrwalić.</p>`);
    }
    if (hintsNode) { hintsNode.querySelector('.hint-btn')?.remove(); hintsNode.insertAdjacentHTML('beforeend', '<p class="small muted">Pytanie rozwiązane.</p>'); }
    opts.onAnswered && opts.onAnswered(correct, { conf, hinted, mastery: !!correct && !hinted && conf !== 'strzelam' });
  };
  // Podpowiedzi: jeden mały link, kolejne stopnie odsłaniane po kolei.
  // Podpowiedzi: węzeł budowany osobno. Z opts.hints.external trafia do panelu „Podpowiedź” (§16.3), inaczej pod pytanie.
  let hintsNode = null;
  const hintsHTML = () => '';
  const bindHints = () => {
    const h = opts.hints;
    if (!h || opts.pretest || hintsNode) return;
    const box = document.createElement('div');
    box.className = 'hints';
    if (h.hidden) box.dataset.hidden = '1';
    box.innerHTML = `<button class="hint-btn" type="button">${h.hidden ? 'Włącz podpowiedzi' : 'Pokaż podpowiedź'}</button><div class="hint-out" aria-live="polite"></div>`;
    hintsNode = box;
    const btn = box.querySelector('.hint-btn');
    const out = box.querySelector('.hint-out');
    const levels = [];
    if (opts.hints.where) levels.push(() => `<p><strong>${SECTION_HINTS[0]}</strong> ${opts.hints.where}</p>`);
    if (isSingle(q) && q.opcje) {
      const good = correctIndex(q);
      const idx = ['falsz', 'prawda-nie-na-temat', 'odwrocone', 'inna-kategoria', 'zbyt-waskie', 'forma-podrecznikowa']
        .map((k) => q.opcje.findIndex((o, i) => i !== good && o.pulapka === k)).find((i) => i >= 0);
      const elim = idx !== undefined ? idx : q.opcje.findIndex((o, i) => i !== good);
      if (elim >= 0) levels.push(() => {
        const b = el.querySelector(`.option[data-i="${elim}"]`);
        if (b) { b.disabled = true; b.classList.add('eliminated'); }
        return `<p><strong>${SECTION_HINTS[1]}:</strong> ${KEYS[elim]} na pewno nie.</p>`;
      });
    }
    if (opts.hints.onSolved) levels.push(() => `<p><button class="inline-term solved-link" type="button">${SECTION_HINTS[2]} →</button></p>`);
    if (!levels.length) { hintsNode = null; return; }
    let k = 0;
    if (h.external) h.onHints && h.onHints(box);
    else el.querySelector('.fb')?.before(box);
    btn.addEventListener('click', () => {
      if (box.dataset.hidden) { delete box.dataset.hidden; btn.textContent = 'Pokaż podpowiedź'; return; }
      hinted = true;
      out.insertAdjacentHTML('beforeend', levels[k]());
      out.querySelector('.solved-link')?.addEventListener('click', () => opts.hints.onSolved());
      k++;
      if (k >= levels.length) btn.hidden = true; else btn.textContent = 'Jeszcze jedna podpowiedź';
      h.onUsed && h.onUsed();
    });
  };

  if (isSingle(q)) {
    const good = correctIndex(q);
    const askConf = opts.confidence && !opts.pretest;
    el.innerHTML = head(q, termRef) + `
      <ul class="options" role="list" aria-labelledby="stem-${esc(q.id)}">
        ${q.opcje.map((o, i) => `<li><button class="option" data-i="${i}"><span class="key">${KEYS[i]}</span><span class="txt">${inline(o.tekst, termRef)}</span></button></li>`).join('')}
      </ul>
      ${askConf ? `<div class="conf" hidden><span class="small muted">Jak bardzo jesteś pewny?</span>
        <span class="conf-btns">${CONF.map(([k, l]) => `<button class="conf-btn" data-conf="${k}">${l}</button>`).join('')}</span></div>` : ''}
      ${hintsHTML()}
      ${!opts.pretest && opts.rozbior !== false ? '<div class="rz-wrap"><button class="btn btn-sm btn-ghost rz-btn" type="button" title="Rozbiór pytania – nie zdradza odpowiedzi">Nie rozumiem pytania</button><div class="rz-out"></div></div>' : ''}
      <div class="fb" aria-live="polite"></div>`;
    bindHints();
    el.querySelector('.rz-btn')?.addEventListener('click', (e) => {
      hinted = true;
      e.currentTarget.remove();
      el.querySelector('.rz-out').innerHTML = analysisHTML(q);
    });
    let picked = null;
    const check = (pick) => {
      const correct = pick === good;
      el.querySelectorAll('.option').forEach((x) => {
        const i = +x.dataset.i;
        x.disabled = true;
        if (i === good) x.classList.add('correct');
        else if (i === pick) x.classList.add('wrong');
        const why = q.opcje[i].wyjasnienie;
        if (why) x.insertAdjacentHTML('beforeend',
          `<span class="why"><strong>${i === good ? 'Dlaczego poprawna:' : 'Dlaczego nie:'}</strong> ${inline(why, termRef)}${q.opcje[i].zycie && i !== good ? ` <em>${/^W życiu to tak, jakby/i.test(q.opcje[i].zycie) ? inline(q.opcje[i].zycie, termRef) : `W życiu to tak, jakby ${inline(q.opcje[i].zycie, termRef)}`}</em>` : ''}</span>`);
      });
      el.querySelector('.conf')?.remove();
      el.querySelector('.fb').innerHTML = opts.pretest
        ? `<div class="feedback ${correct ? 'ok' : 'bad'}">${correct ? '✓ Trafione.' : `Poprawna odpowiedź: <strong>${KEYS[good]}</strong>.`} <strong>Pomyłka teraz pomaga zapamiętać</strong> – to pytanie nie liczy się do wyniku. Odpowiedź poznasz dokładnie w tej lekcji.</div>`
        : footer(q, correct, correct ? '✓ Dobrze.' : (q.opcje[pick] && (q.opcje[pick].pulapka || q.opcje[pick].pulapkaMentora) ? trapFeedback(q, pick, good, termRef) : `Tym razem nie. Poprawna jest <strong>${KEYS[good]}</strong> – omówienie każdej opcji jest powyżej.`), termRef);
      if (!opts.pretest && opts.rozbior !== false) {
        const fb = el.querySelector('.fb');
        const shown = !!el.querySelector('.rz-out .rozbior');
        el.querySelector('.rz-wrap')?.remove();
        fb.insertAdjacentHTML('beforeend', `${shown ? analysisHTML(q) : `<details class="rz-det"${correct ? '' : ' open'}><summary>Jak czytać to pytanie</summary>${analysisHTML(q)}</details>`}${opts.backLink ? `<p class="small" style="margin:8px 0 0">${opts.backLink}</p>` : ''}${aiButtonsHTML(correct ? 'Pogłęb z AI' : 'Wyjaśnij z AI')}`);
        bindAI(fb, () => promptForQuestion(q, { picked: pick }));
      }
      bindTerms(el, opts);
      done(correct);
    };
    el.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => {
      if (!askConf) { check(+b.dataset.i); return; }
      picked = +b.dataset.i;
      el.querySelectorAll('.option').forEach((x) => x.classList.toggle('picked', x === b));
      const c = el.querySelector('.conf');
      c.hidden = false;
      c.querySelector('.conf-btn').focus({ preventScroll: true });
    }));
    el.querySelectorAll('.conf-btn').forEach((b) => b.addEventListener('click', () => {
      if (picked === null) return;
      conf = b.dataset.conf;
      check(picked);
    }));
  } else if (q.typ === 'klasyfikacja' || q.typ === 'bledy' || q.typ === 'popraw-termin') {
    const isErr = q.typ === 'bledy' || q.typ === 'popraw-termin';
    const cats = q.typ === 'popraw-termin' ? ['Termin dobry', 'Zły termin'] : isErr ? ['Prawdziwe', 'Błędne'] : q.kategorie;
    const items = isErr
      ? q.twierdzenia.map((t) => ({ tekst: t.tekst, ok: t.poprawne ? 0 : 1, wyjasnienie: t.wyjasnienie + (t.poprawka ? ` **Poprawnie: ${t.poprawka}**${t.blednyTermin ? ` (zamiast: ${t.blednyTermin})` : ''}.` : '') }))
      : q.elementy.map((e) => ({ tekst: e.tekst, ok: q.kategorie.indexOf(e.kategoria), wyjasnienie: e.wyjasnienie }));
    const picks = new Array(items.length).fill(null);
    el.innerHTML = head(q, termRef) + `
      <div class="cls">${items.map((it, i) => `
        <div class="cls-row" data-i="${i}">
          <span>${i + 1}. ${inline(it.tekst, termRef)}</span>
          <span class="seg" role="group" aria-label="Element ${i + 1}">
            ${cats.map((c, ci) => `<button data-c="${ci}" aria-pressed="false">${esc(c)}</button>`).join('')}
          </span>
        </div>`).join('')}</div>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary check">Sprawdź</button><span class="small muted hint-msg" aria-live="polite"></span></div>
      <div class="fb" aria-live="polite"></div>`;
    const checkBtn = el.querySelector('.check');
    let finished = false;
    el.querySelectorAll('.cls-row').forEach((row) => {
      const i = +row.dataset.i;
      row.querySelectorAll('.seg button').forEach((b) => b.addEventListener('click', () => {
        if (finished) return;
        picks[i] = +b.dataset.c;
        row.querySelectorAll('.seg button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        el.querySelector('.hint-msg').textContent = '';
      }));
    });
    checkBtn.addEventListener('click', () => {
      if (finished) return;
      const missing = picks.filter((p) => p === null).length;
      if (missing) { el.querySelector('.hint-msg').textContent = `Oceń jeszcze ${missing} ${missing === 1 ? 'element' : 'elementy'}.`; return; }
      finished = true;
      checkBtn.disabled = true;
      let ok = 0;
      el.querySelectorAll('.cls-row').forEach((row) => {
        const i = +row.dataset.i;
        const it = items[i];
        const good = picks[i] === it.ok;
        if (good) ok++;
        row.querySelectorAll('.seg button').forEach((b) => {
          const c = +b.dataset.c;
          if (c === it.ok) b.classList.add('correct');
          else if (c === picks[i]) b.classList.add('wrong');
        });
        if (it.wyjasnienie) row.insertAdjacentHTML('beforeend', `<span class="why">${good ? '✓' : '✗'} ${inline(it.wyjasnienie, termRef)}</span>`);
      });
      const all = ok === items.length;
      el.querySelector('.fb').innerHTML = footer(q, all, `Wynik: ${ok} / ${items.length}.`, termRef);
      bindTerms(el, opts);
      done(all);
    });
  } else if (q.typ === 'dopasowanie') {
    const rights = shuffle(q.pary.map((p, i) => ({ t: p.prawa, i })));
    el.innerHTML = head(q, termRef) + `
      <div class="match">${q.pary.map((p, i) => `
        <div class="match-row" data-i="${i}">
          <label for="m-${esc(q.id)}-${i}">${inline(p.lewa, termRef)}</label>
          <select id="m-${esc(q.id)}-${i}">
            <option value="">— wybierz —</option>
            ${rights.map((r) => `<option value="${r.i}">${esc(r.t)}</option>`).join('')}
          </select>
        </div>`).join('')}</div>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary check">Sprawdź</button><span class="small muted hint-msg" aria-live="polite"></span></div>
      <div class="fb" aria-live="polite"></div>`;
    const sels = [...el.querySelectorAll('select')];
    const checkBtn = el.querySelector('.check');
    sels.forEach((s) => s.addEventListener('change', () => { el.querySelector('.hint-msg').textContent = ''; }));
    checkBtn.addEventListener('click', () => {
      const missing = sels.filter((x) => x.value === '').length;
      if (missing) { el.querySelector('.hint-msg').textContent = `Dopasuj jeszcze ${missing}.`; return; }
      checkBtn.disabled = true;
      let ok = 0;
      el.querySelectorAll('.match-row').forEach((row) => {
        const i = +row.dataset.i;
        const sel = row.querySelector('select');
        sel.disabled = true;
        const good = +sel.value === i;
        if (good) ok++;
        row.classList.add(good ? 'correct' : 'wrong');
        if (!good) row.insertAdjacentHTML('beforeend', `<span class="why">✗ Poprawnie: <strong>${esc(q.pary[i].prawa)}</strong></span>`);
      });
      const all = ok === q.pary.length;
      el.querySelector('.fb').innerHTML = footer(q, all, `Wynik: ${ok} / ${q.pary.length}.${q.wyjasnienie ? `<div style="margin-top:6px">${inline(q.wyjasnienie, termRef)}</div>` : ''}`, termRef);
      bindTerms(el, opts);
      done(all);
    });
  } else if (q.typ === 'kolejnosc') {
    let order = shuffle(q.elementy.map((t, i) => ({ t, i })));
    if (order.every((o, k) => o.i === k)) order = order.slice().reverse();
    let finished = false;
    el.innerHTML = head(q, termRef) + `
      <p class="small muted" style="margin:-6px 0 10px">Ułóż elementy w poprawnej kolejności przyciskami ↑ ↓.</p>
      <ol class="order" aria-label="Elementy do uporządkowania"></ol>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary check">Sprawdź</button></div>
      <div class="fb" aria-live="polite"></div>`;
    const list = el.querySelector('.order');
    const draw = (focusIdx = null, dir = null) => {
      list.innerHTML = order.map((o, k) => `<li class="order-item${finished ? (o.i === k ? ' correct' : ' wrong') : ''}">
        <span class="order-txt">${inline(o.t, termRef)}</span>
        ${finished ? (o.i === k ? '<span class="order-mark">✓</span>' : `<span class="order-mark">→ ${o.i + 1}</span>`) : `<span class="order-btns">
          <button class="icon-btn" data-up="${k}" aria-label="Przesuń wyżej: ${esc(o.t)}" ${k === 0 ? 'disabled' : ''}>↑</button>
          <button class="icon-btn" data-down="${k}" aria-label="Przesuń niżej: ${esc(o.t)}" ${k === order.length - 1 ? 'disabled' : ''}>↓</button></span>`}
      </li>`).join('');
      list.querySelectorAll('[data-up]').forEach((b) => b.addEventListener('click', () => { const k = +b.dataset.up; [order[k - 1], order[k]] = [order[k], order[k - 1]]; draw(k - 1, 'up'); }));
      list.querySelectorAll('[data-down]').forEach((b) => b.addEventListener('click', () => { const k = +b.dataset.down; [order[k + 1], order[k]] = [order[k], order[k + 1]]; draw(k + 1, 'down'); }));
      if (focusIdx !== null) {
        const btn = list.querySelector(`[data-${dir}="${focusIdx}"]`) || list.querySelector(`[data-${dir === 'up' ? 'down' : 'up'}="${focusIdx}"]`);
        btn && btn.focus();
      }
    };
    draw();
    el.querySelector('.check').addEventListener('click', (e) => {
      if (finished) return;
      finished = true;
      e.currentTarget.disabled = true;
      const ok = order.filter((o, k) => o.i === k).length;
      draw();
      const all = ok === order.length;
      el.querySelector('.fb').innerHTML = footer(q, all, `Na swoim miejscu: ${ok} / ${order.length}.
        <ol class="small" style="margin:8px 0 0">${q.elementy.map((t) => `<li>${inline(t, termRef)}</li>`).join('')}</ol>`, termRef);
      bindTerms(el, opts);
      done(all);
    });
  } else if (q.typ === 'nazwa-en') {
    // §17.10 – podaj nazwę EN; porównanie bez wielkości liter, myślników i podwójnych spacji.
    // Porównanie (Altkom): małe litery; myślniki, ukośniki, półpauzy → spacja; bez . , : ; ' " ( ); scalone spacje.
    const norm = (x) => String(x || '').toLowerCase().replace(/[-‐‑‒–—―/\\]/g, ' ').replace(/[.,:;'"()’‘“”„]/g, '').replace(/\s+/g, ' ').trim();
    el.innerHTML = head(q, termRef) + `
      <label class="sr-only" for="en-${esc(q.id)}">Twoja odpowiedź po angielsku</label>
      <input class="search en-input" id="en-${esc(q.id)}" type="text" autocomplete="off" spellcheck="false" placeholder="Wpisz po angielsku…">
      <div class="btn-row"><button class="btn btn-primary check">Sprawdź</button><span class="small muted hint-msg" aria-live="polite"></span></div>
      <div class="fb" aria-live="polite"></div>`;
    const inp = el.querySelector('.en-input');
    const go = () => {
      if (!inp.value.trim()) { el.querySelector('.hint-msg').textContent = 'Wpisz odpowiedź – choćby próbę.'; inp.focus(); return; }
      const ok = (q.poprawne || []).some((p) => norm(p) === norm(inp.value));
      inp.disabled = true; el.querySelector('.check').disabled = true;
      inp.classList.add(ok ? 'en-ok' : 'en-bad');
      const tt = q.termin && termsSync() ? termsSync().get(q.termin) : null;
      el.querySelector('.fb').innerHTML = footer(q, ok, (ok ? '✓ Dobrze.' : `Tym razem nie. Poprawnie: <strong>${esc((q.poprawne || [])[0] || '')}</strong>.`) + (tt && tt.wymowa ? ` Wymowa: „${esc(tt.wymowa)}”.` : ''), termRef);
      bindTerms(el, opts);
      done(ok);
    };
    el.querySelector('.check').addEventListener('click', go);
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
  } else if (q.typ === 'wypowiedz') {
    // §17.10 – opis mechanizmu z terminami EN: UI sprawdza, czy padły wymagane terminy, potem wzorzec i samoocena.
    const norm = (x) => String(x || '').toLowerCase().replace(/[^a-z0-9ąćęłńóśźż ]/g, ' ').replace(/\s+/g, ' ');
    el.innerHTML = head(q, termRef) + `
      <p class="small muted">Użyj terminów po angielsku: ${(q.wymagane || []).map((w) => `<strong>${esc(w)}</strong>`).join(', ')}.</p>
      <textarea class="own-text" rows="5" placeholder="Napisz albo powiedz na głos i zapisz kilka zdań…"></textarea>
      <div class="btn-row"><button class="btn btn-primary check">Sprawdź terminy</button><span class="small muted hint-msg" aria-live="polite"></span></div>
      <div class="fb" aria-live="polite"></div>`;
    const ta = el.querySelector('textarea');
    el.querySelector('.check').addEventListener('click', () => {
      if (!ta.value.trim()) { el.querySelector('.hint-msg').textContent = 'Najpierw napisz kilka zdań.'; ta.focus(); return; }
      const txt = ' ' + norm(ta.value) + ' ';
      const hits = (q.wymagane || []).map((w) => ({ w, ok: txt.includes(' ' + norm(w).trim() + ' ') || txt.includes(norm(w).trim()) }));
      const all = hits.every((h) => h.ok);
      el.querySelector('.check').disabled = true;
      el.querySelector('.fb').innerHTML = `<div class="feedback ${all ? 'ok' : 'bad'}">
        <ul class="terms-hit">${hits.map((h) => `<li>${h.ok ? '✓' : '✗'} ${esc(h.w)}</li>`).join('')}</ul>
        <div class="own-model" style="margin-top:10px"><div class="box-label">Wzorzec</div>${inline(q.wzorzec || '', termRef)}</div>
        <div class="seg" role="group" aria-label="Samoocena" style="margin-top:10px">${[['mam', 'Mam to'], ['czesciowo', 'Częściowo'], ['nie', 'Nie mam']].map(([k, l]) => `<button data-self="${k}">${l}</button>`).join('')}</div></div>`;
      bindTerms(el, opts);
      el.querySelectorAll('[data-self]').forEach((b) => b.addEventListener('click', () => {
        el.querySelectorAll('[data-self]').forEach((x) => { x.disabled = true; x.setAttribute('aria-pressed', String(x === b)); });
        done(all && b.dataset.self === 'mam');
      }));
    });
  } else {
    el.innerHTML = `<p class="muted">Nieznany typ pytania: ${esc(q.typ)}</p>`;
  }
  // Podpowiedzi także dla typów innych niż jednokrotny wybór (bez „Odrzuć jedną”).
  if (!opts.pretest && opts.hints && !hintsNode && el.querySelector('.fb')) bindHints();
  bindTerms(el, opts);
}

function bindTerms(el, opts) {
  if (!opts.onTerm) return;
  el.querySelectorAll('.term:not([data-bound])').forEach((b) => {
    b.dataset.bound = '1';
    b.addEventListener('click', (e) => { e.stopPropagation(); opts.onTerm(b.dataset.term); });
  });
}

// Pytanie w symulacji egzaminu (bez podpowiedzi). reveal=true pokazuje omówienie wszystkich opcji.
export function renderExamQuestion(el, q, { selected = null, onPick, reveal = false, backLink = '' } = {}) {
  const good = correctIndex(q);
  el.innerHTML = head(q, null, !reveal) + `
    <ul class="options" role="list" aria-labelledby="stem-${esc(q.id)}">
      ${q.opcje.map((o, i) => `<li><button class="option${reveal ? (i === good ? ' correct' : i === selected ? ' wrong' : '') : ''}${!reveal && selected === i ? ' picked' : ''}" data-i="${i}" aria-pressed="${selected === i}" ${reveal ? 'disabled' : ''}>
        <span class="key">${KEYS[i]}</span><span class="txt">${inline(o.tekst)}${reveal && o.wyjasnienie ? `<span class="why" style="display:block">${inline(o.wyjasnienie)}</span>` : ''}</span></button></li>`).join('')}
    </ul>
    ${reveal && q.zrodlo ? `<div class="source-ref">Źródło: ${esc(sourceText(q.zrodlo))}</div>` : ''}
    ${reveal ? `<details class="rz-det"><summary>Jak czytać to pytanie</summary>${analysisHTML(q)}</details>${backLink ? `<p class="small" style="margin:8px 0 0">${backLink}</p>` : ''}${aiButtonsHTML()}` : ''}`;
  if (reveal) bindAI(el, () => promptForQuestion(q, { picked: selected }));
  if (!reveal) el.querySelectorAll('.option').forEach((b) => b.addEventListener('click', () => onPick && onPick(+b.dataset.i)));
}

// Analiza błędów według rodzaju pułapki (METODYKA §6): które pułapki kosztowały najwięcej punktów.
export function trapStats(qs, answers) {
  const counts = {};
  let unlabeled = 0, blank = 0;
  qs.forEach((q, i) => {
    const a = answers[i];
    const good = correctIndex(q);
    if (a === good) return;
    if (a === null || a === undefined) { blank++; return; }
    const pk = q.opcje && q.opcje[a] && q.opcje[a].pulapka;
    if (pk) counts[pk] = (counts[pk] || 0) + 1; else unlabeled++;
  });
  return { counts, unlabeled, blank };
}

export function trapTable(stats, labels) {
  const rows = Object.entries(stats.counts).sort((a, b) => b[1] - a[1]);
  if (!rows.length && !stats.blank && !stats.unlabeled) return '<p class="muted">Bez błędów.</p>';
  const max = Math.max(1, ...rows.map((r) => r[1]), stats.blank, stats.unlabeled);
  const bar = (label, n, hint) => `<div class="area-bar" style="grid-template-columns:minmax(0,1.4fr) 1fr 40px">
    <span title="${esc(hint || '')}">${esc(label)}</span><div class="progress"><span style="width:${(n / max) * 100}%;background:var(--bad)"></span></div><span class="small">${n}</span></div>`;
  return `<div class="area-bars card">${rows.map(([k, n]) => bar(labels[k] || k, n, k)).join('')}
    ${stats.blank ? bar('Brak odpowiedzi', stats.blank) : ''}
    ${stats.unlabeled ? bar('Bez oznaczenia rodzaju pułapki', stats.unlabeled) : ''}</div>`;
}

/** Seria pytań jedno po drugim (ćwiczenie nazw, powtórki). opts: { title, onEnd(score, total) } */
export function runSequence(el, qs, { title = 'Ćwiczenie', onEnd = null } = {}) {
  let k = 0, score = 0;
  const step = () => {
    if (k >= qs.length) {
      el.innerHTML = `<div class="feedback ${score / Math.max(1, qs.length) >= 0.7 ? 'ok' : 'bad'}">${esc(title)}: ${score}/${qs.length}. ${score === qs.length ? 'Świetnie!' : 'Pomyłki wrócą w powtórkach.'}</div>`;
      onEnd && onEnd(score, qs.length);
      return;
    }
    el.innerHTML = `<div class="card"><div class="slide-kind">${esc(title)} · ${k + 1} z ${qs.length}</div><div class="seq-q"></div>
      <div class="btn-row" style="margin-top:12px"><button class="btn btn-primary btn-lg seq-next" hidden>${k === qs.length - 1 ? 'Wynik →' : 'Dalej →'}</button></div></div>`;
    renderQuestion(el.querySelector('.seq-q'), qs[k], { onAnswered: (ok) => { if (ok) score++; const n = el.querySelector('.seq-next'); n.hidden = false; n.focus(); } });
    el.querySelector('.seq-next').addEventListener('click', () => { k++; step(); });
  };
  step();
}
