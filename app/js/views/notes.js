// Osobisty notatnik: wszystkie oznaczenia i notatki (slajdy + pojęcia).
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';

const LABEL = { powtorka: 'Do powtórki', nieRozumiem: 'Nie rozumiem', wazne: 'Ważne na egzamin' };

export async function renderNotes(main) {
  const [terms, units] = await Promise.all([C.terms(), C.units()]);
  let filter = '';

  function draw() {
    const entries = Object.entries(store.get().flags).filter(([k, f]) => !/^(rano|przerwa|naprawa):/.test(k) && (!filter || f[filter]));
    const row = ([k, f]) => {
      const tags = Object.keys(LABEL).filter((x) => f[x]).map((x) => `<span class="pill${x === 'nieRozumiem' ? '' : ''}">${LABEL[x]}</span>`).join(' ');
      let title, href;
      const SELF = { mam: 'Mam to', czesciowo: 'Częściowo', nie: 'Nie mam' };
      if (k.startsWith('own:') || k.startsWith('kartka:')) {
        const parts = k.split(':');
        if (parts[0] === 'own') {
          title = `Własnymi słowami · ${units.find((u) => u.id === parts[1])?.tytul || parts[1]} · slajd ${+parts[2] + 1}`;
          href = `#/lekcja/${parts[1]}/${+parts[2] + 1}`;
        } else {
          title = `Pusta kartka · dzień ${parts[1]}`;
          href = `#/dzien/${parts[1]}`;
        }
        if (f.samoocena) title += ` · samoocena: ${SELF[f.samoocena] || f.samoocena}`;
      } else if (/^fiszka:/.test(k)) {
        const [, uid, idx] = k.split(':');
        title = `Prawda czy fałsz · ${units.find((u) => u.id === uid)?.tytul || uid}`;
        href = `#/lekcja/${uid}/${+idx + 1}`;
      } else if (/^karta:/.test(k)) {
        const uid = k.slice(6);
        title = `Karta prowadzącego · ${units.find((u) => u.id === uid)?.tytul || uid}${f.samoocena === 'tak' ? ' · poprowadzone' : ''}`;
        href = `#/karta/${uid}`;
      } else if (/^(projekt|minuta|potrafie|cel|naprawa|naprawa-lekcja):/.test(k)) {
        const [kind, a, b] = k.split(':');
        const SELF2 = { ...SELF, tak: 'Tak', 'nie-wiem': 'Nie wiem' };
        if (kind === 'projekt') { title = `Projekt końcowy · pole ${+a + 1}`; href = '#/dzien/5'; }
        else if (kind === 'minuta') { title = `Wytłumacz w minutę · ${terms.get(a)?.plEgzamin || a}`; href = '#/dzien/4'; }
        else if (kind === 'potrafie') { title = `Potrafię… · dzień ${a}, zdanie ${+b + 1}`; href = `#/dzien/${a}`; }
        else if (kind === 'cel') { title = `Cel lekcji · ${units.find((u) => u.id === a)?.tytul || a}`; href = `#/lekcja/${a}`; }
        else { title = `Do naprawy · ${units.find((u) => u.id === a)?.tytul || `dzień ${a}`}`; href = kind === 'naprawa' ? '#/powtorki' : `#/lekcja/${a}`; }
        if (f.samoocena) title += ` · samoocena: ${SELF2[f.samoocena] || f.samoocena}`;
      } else if (k.startsWith('term:')) {
        const id = k.slice(5);
        title = `Pojęcie: ${terms.get(id)?.plEgzamin || id}`;
        href = `#/slownik/${id}`;
      } else {
        const [, uid, idx] = k.split(':');
        title = `${units.find((u) => u.id === uid)?.tytul || uid} · slajd ${+idx + 1}`;
        href = `#/lekcja/${uid}/${+idx + 1}`;
      }
      return `<div class="card" style="padding:14px 16px">
        <div class="btn-row" style="justify-content:space-between"><a href="${esc(href)}" style="font-weight:600;color:var(--text)">${esc(title)}</a><span class="btn-row">${tags}</span></div>
        ${f.notatka ? `<p style="margin:8px 0 0;white-space:pre-wrap">${esc(f.notatka)}</p>` : ''}</div>`;
    };
    main.innerHTML = `
      <div class="page">
        <h1>Notatki</h1>
        <p class="page-lead">Twoja baza wiedzy: oznaczone slajdy i pojęcia oraz własne notatki.</p>
        <div class="btn-row" style="margin-bottom:16px" role="group" aria-label="Filtr">
          ${[['', 'Wszystkie'], ...Object.entries(LABEL)].map(([k, l]) => `<button class="flag-btn" data-f="${k}" aria-pressed="${filter === k}">${l}</button>`).join('')}
        </div>
        <div class="grid">${entries.length ? entries.map(row).join('') : '<p class="muted">Brak notatek. Oznaczaj slajdy przyciskami pod kanwą, a pojęcia w panelu przypisów.</p>'}</div>
      </div>`;
    main.querySelectorAll('[data-f]').forEach((b) => b.addEventListener('click', () => { filter = b.dataset.f; draw(); }));
  }
  draw();
}
