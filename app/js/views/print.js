// Widoki do druku i karta prowadzącego.
// §13.3 – karta prowadzącego (plan 10-minutowego wyjaśnienia lekcji innej osobie),
// §16.5 – ściąga dnia i „Cały COBIT 5 na jednej kartce”. Każdy widok ma „Drukuj” i styl @media print.
import * as C from '../content.js';
import { esc, render, termIdsInOrder } from '../md.js';
import { store } from '../store.js';
import { poLudzku, compassHTML, toast } from '../ui.js';

const strip = (h) => h.replace(/^<p>|<\/p>$/g, '');
const md = (t) => strip(render(t || ''));
const block = (mdText, name) => {
  const m = mdText.match(new RegExp(`^:::${name}[^\\n]*\\n([\\s\\S]*?)^:::\\s*$`, 'm'));
  return m ? m[1].trim() : '';
};
const tools = (back) => `<div class="btn-row no-print" style="margin-bottom:20px"><a class="btn btn-lg" href="${back}">← Wstecz</a><button class="btn btn-primary btn-lg" id="printNow">🖨️ Drukuj</button></div>`;
const bindPrint = () => document.getElementById('printNow')?.addEventListener('click', () => window.print());

/** Dane karty prowadzącego dla lekcji (bez renderowania). */
export async function teacherCard(unitId) {
  const [l, terms, questions] = await Promise.all([C.lesson(unitId), C.terms(), C.questions()]);
  const u = l.unit;
  const allMd = l.slides.map((s) => s.md).join('\n\n');
  const ids = (u.wprowadza.length ? u.wprowadza : termIdsInOrder(l.slides)).filter((id) => terms.has(id)).slice(0, 4);
  const main = ids.map((id) => terms.get(id));
  const warm = u.zgadnij.map((id) => questions.get(id)).find(Boolean);
  const ctrlTerm = main.find((t) => t.mentor && t.mentor.pytanieKontrolne);
  const firstQ = u.cwiczenia.map((id) => questions.get(id)).find((q) => q && q.opcje);
  return {
    unit: u,
    cel: u.cel,
    rozgrzewka: warm ? warm.tresc : '',
    poLudzku: main.map((t) => ({ name: t.plEgzamin, text: poLudzku(t) || t.poziom1 || '' })),
    przyklad: block(allMd, 'kontekst'),
    pomylki: [
      ...main.filter((t) => t.mentor && t.mentor.czestyBlad).map((t) => `${t.plEgzamin}: ${t.mentor.czestyBlad}`),
      ...main.flatMap((t) => (t.zagmatwania || []).slice(0, 1).map((z) => `„${z.mit}” → ${z.prawda}`)),
      ...main.flatMap((t) => (t.nieMylicZ || []).slice(0, 1).map((n) => `Nie mylić ${t.plEgzamin} z: ${(terms.get(n.termin) || {}).plEgzamin || n.termin} – ${n.roznica}`)),
      ...(block(allMd, 'pulapka') ? [block(allMd, 'pulapka')] : []),
    ].slice(0, 5),
    jakTlumaczyc: main.filter((t) => t.mentor && t.mentor.jakTlumaczyc).map((t) => `${t.plEgzamin}: ${t.mentor.jakTlumaczyc}`),
    pytania: u.typowePytania,
    kontrolne: ctrlTerm ? { q: ctrlTerm.mentor.pytanieKontrolne, a: ctrlTerm.mentor.odpowiedzKontrolna }
      : firstQ ? { q: firstQ.tresc, a: (firstQ.opcje.find((o) => o.poprawna) || {}).tekst || '' } : null,
  };
}

export async function renderTeacherCard(main, unitId) {
  const k = await teacherCard(unitId);
  const f = store.flag(`karta:${unitId}`);
  const sec = (title, body) => (body ? `<section class="tc-sec"><h2>${title}</h2>${body}</section>` : '');
  main.innerHTML = `
    <div class="page page-narrow print-page">
      ${tools('#/mentor')}
      <p class="eyebrow">Karta prowadzącego · ok. 10 minut</p>
      <h1>${esc(k.unit.tytul)}</h1>
      <p class="page-lead">Plan, jak wytłumaczyć ten temat innej osobie. Mów po swojemu – karta tylko podpowiada kolejność.</p>
      ${sec('1. Cel rozmowy', k.cel ? `<p>Po tej rozmowie kursant potrafi: ${md(k.cel.replace(/^Potrafię\s*/i, ''))}</p>` : '<p class="muted">Cel lekcji jest w przygotowaniu.</p>')}
      ${sec('2. Pytanie na rozgrzewkę', k.rozgrzewka ? `<p>${md(k.rozgrzewka)}</p><p class="small muted">Niech zgadnie – pomyłka teraz pomaga zapamiętać.</p>` : '')}
      ${sec('3. Wyjaśnienie po ludzku', k.poLudzku.length ? `<ul>${k.poLudzku.map((x) => `<li><strong>${esc(x.name)}</strong> – ${md(x.text)}</li>`).join('')}</ul>` : '')}
      ${sec('4. Przykład', k.przyklad ? `<div class="tc-ex">${render(k.przyklad)}</div>` : '')}
      ${sec('5. Typowa pomyłka i jak ją odróżnić', k.pomylki.length ? `<ul>${k.pomylki.map((x) => `<li>${md(x)}</li>`).join('')}</ul>` : '')}
      ${sec('6. Jak tłumaczyć', k.jakTlumaczyc.length ? `<ul>${k.jakTlumaczyc.map((x) => `<li>${md(x)}</li>`).join('')}</ul>` : '')}
      ${sec('7. Typowe pytania kursanta', k.pytania.length ? `<dl class="tc-qa">${k.pytania.map((p) => `<dt>${md(p.pytanie)}</dt><dd>${md(p.odpowiedz)}</dd>`).join('')}</dl>` : '<p class="muted small">Pytania kursantów do tej lekcji są w przygotowaniu.</p>')}
      ${sec('8. Pytanie kontrolne', k.kontrolne ? `<p><strong>${md(k.kontrolne.q)}</strong></p><p class="small"><span class="muted">Dobra odpowiedź:</span> ${md(k.kontrolne.a)}</p>` : '')}
      <div class="btn-row no-print" style="margin-top:28px">
        <button class="btn btn-lg ${f.samoocena === 'tak' ? '' : 'btn-primary'}" id="taught">${f.samoocena === 'tak' ? '✓ Poprowadziłem to wyjaśnienie' : 'Poprowadziłem to wyjaśnienie'}</button>
      </div>
    </div>`;
  bindPrint();
  document.getElementById('taught').addEventListener('click', (e) => {
    store.setFlag(`karta:${unitId}`, 'samoocena', 'tak');
    e.currentTarget.textContent = '✓ Poprowadziłem to wyjaśnienie';
    e.currentTarget.classList.remove('btn-primary');
    toast('Zapisano – to liczy się do gotowości mentora');
  });
}

export async function renderPrint(main, kind, arg) {
  const [m, units, days, syl, sciagi] = await Promise.all([C.mapa(), C.units(), C.days(), C.syllabus(), C.sciagi()]);
  // §16.5 – gotowe ściągi z content/sciagi/dzien-N.md mają pierwszeństwo przed generowanymi.
  const ready = kind === 'dzien' ? sciagi[`dzien-${+arg || 1}`] : sciagi['dzien-5'];
  if (ready) {
    main.innerHTML = `<div class="page print-page" style="max-width:900px">${tools(kind === 'dzien' ? `#/dzien/${+arg || 1}` : '#/')}<div class="sheet">${render(ready.replace(/^---\n[\s\S]*?\n---\n/, ''))}</div></div>`;
    bindPrint();
    return;
  }
  if (kind === 'dzien') {
    const nr = +arg || 1;
    const d = days.find((x) => x.nr === nr) || {};
    const us = units.filter((u) => u.dzien === nr && u.modul.kod !== 'MT');
    const claims = us.flatMap((u) => u.twierdzenia || []);
    main.innerHTML = `<div class="page page-narrow print-page">${tools(`#/dzien/${nr}`)}
      <p class="eyebrow">Ściąga dnia ${nr} – do powtórki, nie na egzamin</p><h1>${esc(d.tytul || `Dzień ${nr}`)}</h1>
      ${compassHTML(C.COMPASS, { compact: true, here: null })}
      ${claims.length ? `<h2 class="section-title">Najważniejsze twierdzenia</h2><ul class="cheat">${claims.map((c) => `<li>${md(c)}</li>`).join('')}</ul>` : ''}
      ${d.pustaKartka && d.pustaKartka.wzorzec ? `<h2 class="section-title">${esc(d.pustaKartka.tytul || 'Schemat dnia')}</h2><div>${render(d.pustaKartka.wzorzec)}</div>` : ''}
      ${(d.potrafie || []).length ? `<h2 class="section-title">Potrafię…</h2><ul class="cheat">${d.potrafie.map((x) => `<li>☐ ${esc(x)}</li>`).join('')}</ul>` : ''}
      <h2 class="section-title">Lekcje dnia</h2><ol class="cheat">${us.map((u) => `<li>${esc(u.tytul)}</li>`).join('')}</ol>
    </div>`;
  } else {
    const top = m.ok ? m.list.filter((n) => !n.rodzic) : [];
    main.innerHTML = `<div class="page print-page" style="max-width:1000px">${tools('#/')}
      <p class="eyebrow">Do powtórki, nie na egzamin (egzamin jest bez materiałów)</p><h1>Cały COBIT 5 na jednej kartce</h1>
      ${compassHTML(C.COMPASS)}
      ${top.length ? `<h2 class="section-title">Mapa COBIT 5</h2><div class="sheet-map">${top.map((n) => `<div class="sheet-col area-${esc(n.obszar || '')}"><strong>${esc(n.nazwa)}</strong>
        <ul>${(m.children.get(n.id) || []).map((c) => `<li>${esc(c.nazwa)}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
      ${(syl && syl.rdzen || []).length ? '' : ''}
    </div>`;
  }
  bindPrint();
}
