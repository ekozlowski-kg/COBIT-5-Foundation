// Sprawdzian mentora (METODYKA §12.4): 10 losowych atomów („Wytłumacz w minutę” + pytanie skrajne) i 3 zadania „Popraw kolegę”.
// Próg: ≥ 80% pytań skrajnych i „Mam to” przy ≥ 8 z 10 atomów. Zaliczenie daje szczebel 6 „Mentor” w Atlasie atomów.
import * as C from '../content.js';
import { esc, render } from '../md.js';
import { store } from '../store.js';
import { renderQuestion } from '../quiz.js';
import { poLudzku, toast } from '../ui.js';
import { atomAtlas, shuffle, mentorReadiness } from '../progress.js';

const strip = (h) => h.replace(/^<p>|<\/p>$/g, '');

export async function renderMentorExam(main) {
  const [terms, questions, m, units] = await Promise.all([C.terms(), C.questions(), C.mapa(), C.units()]);
  const extreme = [...questions.values()].filter((q) => q.skrajnosc && q.atom && !q.pretest);
  const colleague = [...questions.values()].filter((q) => q.typ === 'bledy' && q.mentor);
  // Atomy: liście mapy z hasłem; najpierw te z pytaniem skrajnym. Bez mapy – hasła z pytaniem skrajnym.
  const atlasTerms = atomAtlas(m, terms, questions, units).map((a) => a.term).filter(Boolean);
  const extremeTerms = [...new Set(extreme.map((q) => q.atom))].map((id) => terms.get(id)).filter(Boolean);
  const atoms = [...new Map([...extremeTerms, ...atlasTerms].map((t) => [t.id, t])).values()];
  const withQ = new Set(extreme.map((q) => q.atom));
  const pick = [...shuffle(atoms.filter((t) => withQ.has(t.id))), ...shuffle(atoms.filter((t) => !withQ.has(t.id)))].slice(0, 10);
  const tasks = shuffle(colleague).slice(0, 3);
  const last = store.get().mentorExam;

  const res = new Map(); // atomId -> { self, ok }
  let qTotal = 0;
  let qOk = 0;

  main.innerHTML = `
    <div class="page page-narrow">
      <p class="eyebrow">Ścieżka mentora · poziom ponad egzaminem</p>
      <h1>Sprawdzian mentora</h1>
      <p class="page-lead">Mentor potrafi wytłumaczyć każdy element COBIT 5 komuś, kto go nie zna, i rozpoznaje przypadki graniczne. Kurs to przygotowuje, ale nie certyfikuje.
        Zaliczenie: ≥ 80% pytań skrajnych i „Mam to” przy co najmniej 8 z 10 pojęć.</p>
      ${last ? `<p class="notice">Ostatnie podejście: ${last.pass ? '<strong>zaliczone</strong>' : 'jeszcze nie'} · pytania skrajne ${Math.round(last.pct)}% · „Mam to” ${last.mam}/10.</p>` : ''}
      ${pick.length < 3 ? '<p class="muted">Za mało pojęć z przykładami i pytaniami skrajnymi – sprawdzian odblokuje się, gdy treść będzie gotowa.</p>' : `
      <h2 class="section-title">1. Wytłumacz i rozstrzygnij · ${pick.length} pojęć</h2>
      ${pick.map((t, i) => {
        const q = extreme.find((x) => x.atom === t.id);
        return `<section class="minute mentor-item" data-atom="${esc(t.id)}">
          <div class="minute-head"><strong>${i + 1}. ${esc(t.plEgzamin)}</strong><span class="small muted">wytłumacz w minutę, bez żargonu</span></div>
          <textarea class="own-text" rows="3" placeholder="Twoje wyjaśnienie dla laika…"></textarea>
          <div class="btn-row"><button class="btn btn-ghost min-show">Pokaż wzorzec</button></div>
          <div class="own-model" hidden><div class="box-label">Wzorzec</div>
            ${poLudzku(t) ? `<p><strong>Po ludzku:</strong> ${esc(poLudzku(t))}</p>` : ''}${t.poziom1 ? `<p>${strip(render(t.poziom1))}</p>` : ''}
            ${t.mentor ? `<p><strong>Jak tłumaczyć:</strong> ${strip(render(t.mentor.jakTlumaczyc || ''))}</p>` : ''}</div>
          <div class="own-self" hidden><div class="seg" role="group" aria-label="Samoocena">${[['mam', 'Mam to'], ['czesciowo', 'Częściowo'], ['nie', 'Nie mam']].map(([k, l]) => `<button data-self="${k}">${l}</button>`).join('')}</div></div>
          ${q ? `<div class="mentor-q" data-qid="${esc(q.id)}"></div>` : ''}
        </section>`;
      }).join('')}
      ${tasks.length ? `<h2 class="section-title">2. Popraw kolegę · ${tasks.length} zadania</h2>${tasks.map((q) => `<section class="minute"><div class="mentor-q" data-qid="${esc(q.id)}"></div></section>`).join('')}` : ''}
      <div class="btn-row" style="margin-top:28px"><button class="btn btn-primary btn-lg" id="mentorEnd">Zakończ sprawdzian</button><span class="small muted" id="mentorMsg" aria-live="polite"></span></div>
      <div id="mentorRes"></div>`}
    </div>`;

  main.querySelectorAll('.mentor-q').forEach((el) => {
    const q = questions.get(el.dataset.qid);
    if (!q) return;
    qTotal++;
    renderQuestion(el, q, { onAnswered: (ok) => { if (ok) qOk++; } });
  });
  main.querySelectorAll('.mentor-item').forEach((card) => {
    const id = card.dataset.atom;
    card.querySelector('.min-show').addEventListener('click', () => {
      if (!card.querySelector('textarea').value.trim()) { toast('Najpierw spróbuj sam – choćby dwa zdania.'); return; }
      card.querySelector('.own-model').hidden = false;
      card.querySelector('.own-self').hidden = false;
    });
    card.querySelectorAll('[data-self]').forEach((b) => b.addEventListener('click', () => {
      res.set(id, b.dataset.self);
      card.querySelectorAll('[data-self]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    }));
  });
  document.getElementById('mentorEnd')?.addEventListener('click', () => {
    const answered = [...main.querySelectorAll('.mentor-q')].filter((el) => el.querySelector('.feedback')).length;
    if (res.size < pick.length || answered < qTotal) {
      document.getElementById('mentorMsg').textContent = `Zostało: ${pick.length - res.size} samoocen i ${qTotal - answered} pytań.`;
      return;
    }
    const mam = [...res.values()].filter((v) => v === 'mam').length;
    const pct = qTotal ? (qOk / qTotal) * 100 : 0;
    const need = Math.ceil(pick.length * 0.8);
    const pass = pct >= 80 && mam >= need;
    store.saveMentorExam({ pass, pct, mam, atoms: pass ? pick.map((t) => t.id) : [] });
    document.getElementById('mentorRes').innerHTML = `<div class="feedback ${pass ? 'ok' : 'bad'}" style="margin-top:16px">
      ${pass ? '<strong>Zaliczone – szczebel „Mentor”.</strong> Te pojęcia mają teraz poziom 6 w Atlasie atomów.' : '<strong>Jeszcze nie.</strong> Wróć do pojęć z „Częściowo”/„Nie mam” i do pytań skrajnych z pomyłkami, potem spróbuj ponownie.'}
      <br>Pytania skrajne i „Popraw kolegę”: ${qOk}/${qTotal} (${Math.round(pct)}%, próg 80%) · „Mam to”: ${mam}/${pick.length} (próg ${need}).</div>`;
    document.getElementById('mentorEnd').hidden = true;
  });
}

// Zakładka „Mentor” (§13.3–§13.4): gotowość mentora, karty prowadzącego ukończonych lekcji, sprawdzian.
export async function renderMentor(main) {
  const r = await mentorReadiness();
  main.innerHTML = `
    <div class="page page-narrow">
      <p class="eyebrow">Mentor – uczysz się, tłumacząc innym</p>
      <h1>Mentor</h1>
      <p class="page-lead">Mentor to ktoś, kto nie tylko zna odpowiedź, ale potrafi do niej doprowadzić drugą osobę. Tłumaczenie innym to też najlepszy sposób, żeby samemu zapamiętać.</p>
      <h2 class="section-title">Gotowość mentora</h2>
      <ul class="ready">${r.items.map((it) => `<li><span class="check ${it.ok ? 'done' : ''}" aria-hidden="true">${it.ok ? '✓' : ''}</span><span>${esc(it.label)}</span><span class="detail">${esc(it.detail)}</span></li>`).join('')}</ul>
      <p class="small muted">Gotowość mentora nie blokuje egzaminu – to poziom ponad nim.</p>
      <h2 class="section-title">Karty prowadzącego</h2>
      ${r.done.length ? `<p class="small muted">Wybierz lekcję i opowiedz ją komuś – albo na głos, sam sobie. Kartę możesz wydrukować.</p>
        <ul class="unit-list">${r.done.map((u) => `<li><a href="#/karta/${esc(u.id)}"><span class="check ${(store.flag('karta:' + u.id).samoocena === 'tak') ? 'done' : ''}" aria-hidden="true">${store.flag('karta:' + u.id).samoocena === 'tak' ? '✓' : ''}</span><span>${esc(u.tytul)}</span><span class="small muted" style="margin-left:auto">karta →</span></a></li>`).join('')}</ul>`
        : '<p class="muted">Karty pojawią się, gdy ukończysz pierwsze lekcje.</p>'}
      <h2 class="section-title">Sprawdzian mentora</h2>
      <p class="small muted">10 pojęć do wytłumaczenia, pytania o przypadki graniczne i „Popraw kolegę”. Najlepiej po egzaminie.</p>
      <a class="btn btn-lg" href="#/sprawdzian-mentora">Otwórz sprawdzian mentora →</a>
    </div>`;
}
