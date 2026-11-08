// Start: następny krok, kompas, inne miejsca, plan kursu (dni 0–N), postęp, kopia postępu.
import * as C from '../content.js';
import { esc } from '../md.js';
import { store } from '../store.js';
import { toast, howToHTML, compassHTML } from '../ui.js';
import { prefs } from '../store.js';
import { readiness, currentDay, nextStep, atomAtlas, RUNGS, mentorReadiness, masterStatus } from '../progress.js';
import { quickDue, quickPool } from './quick.js';

export async function renderHome(main) {
  const [units, sylAll, problems, daysAll, ready, prog, questions, terms, mapa, mentorR] = await Promise.all([C.units(), C.syllabus(), C.problems(), C.days(), readiness(), C.progi(), C.questions(), C.terms(), C.mapa(), mentorReadiness()]);
  const master = masterStatus();
  store.ensureStarted();
  const syl = sylAll.tematy || [];
  const m = { dni: daysAll.map((d) => ({ ...d, jednostki: units.filter((u) => u.dzien === d.nr).map((u) => u.id) })) };
  const dayNow = currentDay(units);
  const byId = new Map(units.map((u) => [u.id, u]));
  const st = store.get();
  const errs = problems.filter((p) => p.poziom === 'blad');

  const dayProgress = (d) => {
    const ids = d.jednostki.filter((id) => byId.has(id));
    const done = ids.filter((id) => store.unit(id).done).length;
    return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
  };
  // Dzień bieżący = pierwszy nieukończony.
  const today = (m.dni.find((d) => { const p = dayProgress(d); return p.total === 0 || p.done < p.total; }) || m.dni[m.dni.length - 1])?.nr;
  const nextUnit = units.find((u) => !store.unit(u.id).done);

  const allDone = units.filter((u) => store.unit(u.id).done).length;
  const lastExam = st.exams[0];

  const dayInfo = m.dni.find((d) => d.nr === dayNow) || m.dni[0] || { nr: dayNow, tytul: '' };
  const readyOk = ready.items.filter((it) => it.ok).length;
  const cel = (sylAll.egzamin && sylAll.egzamin.celTreningowy) || 35;
  const sylDone = syl.filter((s) => { const r = st.syllabus[s.kod]; return r && r.total && r.ok / r.total >= 0.8; }).length;

  let step = nextStep(units, prog, m.dni, questions);
  // §16.5 – rano 3 pytania z wczoraj; po przerwie ≥ 10 min – mikropowtórka. Zanim nowa treść.
  {
    const gap = +(document.body.dataset.gap || 0);
    const learned = units.some((u) => store.unit(u.id).done);
    if (learned && currentDay(units) >= 1 && quickDue('rano') && (await quickPool('rano')).length) {
      step = { kind: 'rano', day: dayNow, label: 'Co pamiętasz z wczoraj?', href: '#/szybka/rano', why: 'Trzy krótkie pytania z wczoraj, około 2 minut. Rozgrzewka pamięci przed nową treścią.' };
    } else if (learned && quickDue('przerwa', gap) && (await quickPool('przerwa')).length) {
      step = { kind: 'przerwa', day: dayNow, label: 'Witaj z powrotem!', href: '#/szybka/przerwa', why: 'Trzy szybkie pytania z ostatnich lekcji (2 minuty), potem idziesz dalej.' };
      document.body.dataset.gap = '0';
    }
  }
  const atlas = atomAtlas(mapa, terms, questions, units);
  const atlasFluent = atlas.filter((a) => a.level >= 5).length;
  const atlasGroups = [];
  for (const a of atlas) {
    const key = a.parent ? a.parent.id : a.group.id;
    let g = atlasGroups.find((x) => x.key === key);
    if (!g) atlasGroups.push(g = { key, name: (a.parent || a.group).nazwa, top: a.group.nazwa, items: [] });
    g.items.push(a);
  }
  const firstRun = !units.some((u) => store.unit(u.id).seen.length);
  // §14.4 – raz dziennie przypomnienie o kopii postępu (gdy jest już jakiś postęp).
  const todayIso = new Date().toISOString().slice(0, 10);
  const backupDue = !firstRun && prefs.get('kopiaPytanie', '') !== todayIso;
  const compassProg = new Map(C.COMPASS.map((c) => {
    const us = units.filter((u) => u.wielkiObraz === c.nr);
    return [c.nr, { done: us.filter((u) => store.unit(u.id).done).length, total: us.length }];
  }));
  const wytrychy = units.find((u) => /slowa-wytrychy/.test(u.id));

  main.innerHTML = `
    <div class="page page-narrow">
      <section class="hero" aria-label="Następny krok">
        <p class="eyebrow">Dzień ${step.day ?? dayNow} z ${C.lastDayOf(daysAll)} · Twój następny krok</p>
        <h1 class="hero-title">${esc(step.label)}</h1>
        <div class="btn-row hero-actions">
          <a class="btn btn-primary btn-xl" href="${esc(step.href)}" id="stepGo">${{ lekcja: 'Następny krok: lekcja →', mini: 'Następny krok: krótki test →', test: 'Następny krok: test dnia →', skrajnosci: 'Następny krok: test skrajności →', naprawa: 'Następny krok: powtórka →', kartka: 'Następny krok: pusta kartka →', egzamin: 'Następny krok: próbny egzamin →', jutro: 'Następny krok: powtórki →', rano: 'Zaczynam – 3 pytania →', przerwa: 'Zaczynam – 3 pytania →' }[step.kind] || 'Następny krok →'}</a>
          ${step.kind === 'naprawa' ? `<button class="btn btn-lg" id="retest">Powtórzyłem – test jeszcze raz</button>` : ''}
        </div>
        <p class="hero-why">Po kliknięciu: ${esc(step.why)}</p>
      </section>

      ${backupDue ? `<div class="notice backup">Zapisz kopię postępu w pliku – 1 klik. Chroni przed utratą postępu, gdyby przeglądarka wyczyściła dane.
        <div class="btn-row" style="margin-top:8px"><button class="btn btn-primary" id="backupNow">Zapisz kopię postępu w pliku</button><button class="btn" id="backupLater">Nie dziś</button></div></div>` : ''}

      ${firstRun ? `<section class="howto" aria-label="Jak korzystać z kursu">
        <h2>Jak korzystać – 4 kroki</h2>
        ${howToHTML()}
        <p style="margin:12px 0 0"><strong>Wszystko zapisuje się samo. Niczego nie zepsujesz klikaniem.</strong></p>
        <p class="small muted" style="margin:6px 0 0">Nie musisz nic umieć – zaczynamy od codziennych sytuacji. Cel: zdać COBIT 5 Foundation i umieć nauczyć tego innych. Około 20 godzin od zera wystarczy, pod warunkiem codziennych powtórek.</p>
      </section>` : ''}

      <h2 class="section-title">O co naprawdę chodzi w COBIT 5</h2>
      ${compassHTML(C.COMPASS, { progress: compassProg })}

      <h2 class="section-title">Inne miejsca</h2>
      <div class="places">
        <a class="place" href="#/dzien/${step.day || dayNow}"><strong>📅 Plan dnia</strong><span>Wszystko na dziś, po kolei</span></a>
        <a class="place" href="#/powtorki"><strong>🔁 Powtórki</strong><span>Pojęcia, w których były pomyłki</span></a>
        <a class="place" href="#/slownik"><strong>📖 Słownik</strong><span>Każde pojęcie po ludzku</span></a>
        <a class="place" href="#/mapa"><strong>🗺️ Mapa COBIT 5</strong><span>Gdzie co leży</span></a>
        <a class="place" href="#/dryl"><strong>🏷️ Ćwiczenie nazw z egzaminu</strong><span>Nazwy, które padają na egzaminie</span></a>
        <a class="place" href="#/notatki"><strong>📝 Notatki</strong><span>Twoje zapiski</span></a>
        <a class="place" href="#/moduly"><strong>📚 Moduły</strong><span>Cele, terminy, sprawdzian i bibliografia</span></a>
        <a class="place" href="#/mentor"><strong>🎓 Mentor</strong><span>Jak uczyć tego innych</span></a>
        <a class="place" href="#/egzamin"><strong>⏱️ Próbny egzamin</strong><span>Jak prawdziwy: 50 pytań, 40 minut</span></a>
        ${wytrychy ? `<a class="place" href="#/lekcja/${esc(wytrychy.id)}"><strong>🔑 ${esc(wytrychy.tytul)}</strong><span>Korporacyjne słowa po ludzku</span></a>` : ''}
        <button class="place" id="printCobit"><strong>🖨️ COBIT 5 na jednej kartce</strong><span>Do wydruku i powtórki</span></button>
      </div>

      <h2 class="section-title">Twój postęp</h2>
      <ul class="levels-list">
        <li class="${readyOk === ready.items.length ? 'ok' : ''}"><span class="lv-dot"></span><strong>Gotowy do egzaminu</strong><span>${readyOk} z ${ready.items.length} warunków</span></li>
        <li class="${mentorR.items.every((x) => x.ok) ? 'ok' : ''}"><span class="lv-dot"></span><strong>Gotowość mentora</strong><span>${mentorR.items.filter((x) => x.ok).length} z ${mentorR.items.length} · <a href="#/mentor">szczegóły</a></span></li>
        <li class="${master.ok ? 'ok' : ''}"><span class="lv-dot"></span><strong>Skrajnie biegły</strong><span>egzamin mistrzowski: ${esc(master.detail)}</span></li>
      </ul>
      <div class="stats">
        <div class="stat"><span class="stat-v">${allDone}<small>/ ${units.length}</small></span><span class="stat-l">ukończone lekcje</span></div>
        <div class="stat"><span class="stat-v">${Object.keys(ready.mastery).length ? `~${Math.round(ready.weighted * 50)}<small>/ 50</small>` : '—'}</span><span class="stat-l">szacowany wynik</span></div>
        <div class="stat" title="Jaki odsetek odpowiedzi „Pewny” był poprawny. Cel przed egzaminem: ≥ 85%."><span class="stat-v"${ready.calib && ready.calib.pct < 85 ? ' style="color:var(--bad)"' : ''}>${ready.calib ? `${ready.calib.pct}<small>%</small>` : '—'}</span><span class="stat-l">trafność „Pewny” · cel 85%</span></div>
        <div class="stat"><span class="stat-v">${readyOk}<small>/ ${ready.items.length}</small></span><span class="stat-l">progi gotowości</span></div>
      </div>

      <h2 class="section-title">Plan kursu</h2>
      <ol class="dlist">
        ${m.dni.map((d) => {
          const p = dayProgress(d);
          const list = d.jednostki.map((id) => byId.get(id)).filter(Boolean);
          return `<li class="${d.nr === today ? 'today' : ''}"><details>
            <summary class="drow" aria-label="Dzień ${d.nr}: ${esc(d.tytul)}, ukończono ${p.pct}%">
              <span class="drow-n">0${d.nr}</span>
              <span class="drow-t"><strong>${esc(d.tytul)}</strong><span>${list.length ? `${list.length} lekcji · ${p.done} ukończonych` : 'Treść w przygotowaniu'}${d.opis ? ` · ${esc(d.opis)}` : ''}</span></span>
              <span class="drow-p">${p.pct}%<span class="progress"><span style="width:${p.pct}%"></span></span></span>
            </summary>
            <div class="dbody">
              ${list.length ? `<ul class="unit-list">${list.map((u) => {
                const s = store.unit(u.id);
                return `<li><a href="#/lekcja/${esc(u.id)}"><span class="check ${s.done ? 'done' : s.seen.length ? 'partial' : ''}" aria-hidden="true">${s.done ? '✓' : ''}</span>
                  <span>${u.nr ? `<span class="muted">${esc(u.nr)}</span> ` : ''}${esc(u.tytul)}</span><span class="small muted" style="margin-left:auto;white-space:nowrap">${u.minuty ? `${esc(u.minuty)} min` : ''}</span></a></li>`;
              }).join('')}</ul>` : ''}
              <a class="btn btn-ghost small" href="#/dzien/${d.nr}">Otwórz plan dnia ${d.nr} →</a>
            </div>
          </details></li>`;
        }).join('')}
      </ol>

      <h2 class="section-title">Postęp</h2>
      <details class="fold">
        <summary>Gotowość do egzaminu<span class="fold-meta">${readyOk} z ${ready.items.length}</span></summary>
        <div class="fold-body">
          <p class="small muted">Progi z metodyki kursu. Gdy wszystkie są spełnione, jesteś gotowy.</p>
          <ul class="ready">${ready.items.map((it) => `<li><span class="check ${it.ok ? 'done' : ''}" aria-hidden="true">${it.ok ? '✓' : ''}</span>
            <span>${esc(it.label)}<span class="sr-only">${it.ok ? ' – spełnione' : ' – jeszcze nie'}</span></span><span class="detail">${esc(it.detail)}</span></li>`).join('')}</ul>
        </div>
      </details>
      <details class="fold">
        <summary>Opanowanie obszarów<span class="fold-meta">${Math.round(ready.weighted * 100)}% ważone</span></summary>
        <div class="fold-body">
          <p class="small muted">Z ćwiczeń i testów, ważone liczbą pytań z obszaru na egzaminie (${Object.entries(ready.w).map(([a, n]) => `${a} ${n}`).join(' · ')}).</p>
          <div class="area-bars">${Object.entries(ready.w).map(([a, n]) => {
            const r = ready.mastery[a];
            const p = r && r.total ? r.ok / r.total : null;
            return `<div class="area-bar"><strong title="${esc(C.AREAS[a] || '')}">${esc(a)}</strong>
              <div class="progress"><span style="width:${p === null ? 0 : p * 100}%;background:${p === null ? 'var(--border)' : p * 100 >= ready.prog.obszar ? 'var(--ok)' : 'var(--bad)'}"></span></div>
              <span class="small">${p === null ? '—' : Math.round(p * 100) + '%'} · ${n} pyt.</span></div>`;
          }).join('')}</div>
        </div>
      </details>
      ${atlas.length ? `<details class="fold">
        <summary>Atlas atomów<span class="fold-meta">${atlasFluent} z ${atlas.length} na poziomie „Biegły”</span></summary>
        <div class="fold-body">
          <p class="small muted">Każdy najmniejszy element COBIT 5 osobno. Szczeble: ${RUNGS.slice(1).map((r, i) => `${i + 1} ${r}`).join(' · ')}.</p>
          ${atlasGroups.map((g) => `<div class="atlas-group"><div class="atlas-head">${esc(g.top !== g.name ? `${g.top} › ` : '')}${esc(g.name)}</div>
            <ul class="atlas">${g.items.map((a) => `<li>${a.term ? `<a href="#/slownik/${esc(a.term.id)}">${esc(a.node.nazwa)}</a>` : `<span class="muted">${esc(a.node.nazwa)}</span>`}${a.lesson ? ` <a class="atlas-lesson" href="#/lekcja/${esc(a.lesson.id)}" title="Lekcja: ${esc(a.lesson.tytul)}">lekcja →</a>` : ''}
              <span class="rungs" title="${a.level ? `${a.level} – ${RUNGS[a.level]}` : 'jeszcze nie'}" aria-label="Szczebel ${a.level} z 6">${[1, 2, 3, 4, 5, 6].map((k) => `<i class="${k <= a.level ? 'on' : ''}"></i>`).join('')}</span></li>`).join('')}</ul></div>`).join('')}
        </div>
      </details>` : ''}
      <details class="fold">
        <summary>Mapa sylabusa<span class="fold-meta">${sylDone} z ${syl.length} opanowanych</span></summary>
        <div class="fold-body">
          <p class="small muted">Obramowanie: czerwone &lt; 50%, żółte 50–79%, zielone ≥ 80% poprawnych odpowiedzi w temacie. Pełną taksonomię znajdziesz w <a href="#/mapa">Mapie COBIT 5</a>.</p>
          ${syl.length ? `<div class="syllabus-map">${syl.map((s) => {
            const r = st.syllabus[s.kod];
            const pct = r && r.total ? r.ok / r.total : null;
            const level = pct === null ? 0 : pct < 0.5 ? 1 : pct < 0.8 ? 2 : 3;
            return `<div class="syl" data-m="${level}" title="${esc((s.zakres || []).join(' · '))}">${esc(s.kod)}${r ? ` · ${r.ok}/${r.total}` : ''}<strong>${esc(s.tytul)}</strong></div>`;
          }).join('')}</div>` : '<p class="muted small">Plik sylabusa nie został jeszcze dodany.</p>'}
        </div>
      </details>
      <details class="fold">
        <summary>Kopia postępu<span class="fold-meta">zapisz albo wczytaj</span></summary>
        <div class="fold-body">
          <p class="small muted">Postęp i notatki są zapisywane tylko w tej przeglądarce. Zrób kopię, zanim wyczyścisz dane przeglądarki.</p>
          <div class="btn-row">
            <button class="btn" id="exportBtn">Zapisz kopię postępu w pliku</button>
            <label class="btn" for="importFile">Wczytaj kopię postępu</label>
            <input type="file" id="importFile" accept="application/json" class="sr-only">
            <button class="btn btn-ghost" id="resetBtn">Wyczyść postęp</button>
          </div>
        </div>
      </details>
      ${problems.length ? `<details class="fold">
        <summary><span style="color:${errs.length ? 'var(--bad)' : 'var(--trap)'}">Walidacja treści</span><span class="fold-meta">${errs.length} błędów · ${problems.length - errs.length} uwag</span></summary>
        <div class="fold-body"><ul class="small" style="margin:0;padding-left:18px">${problems.slice(0, 80).map((p) => `<li><span style="color:${p.poziom === 'blad' ? 'var(--bad)' : 'var(--trap)'}">${p.poziom === 'blad' ? 'Błąd' : 'Uwaga'}</span> <code>${esc(p.gdzie)}</code>: ${esc(p.opis)}</li>`).join('')}</ul></div>
      </details>` : ''}
    </div>`;

  document.getElementById('retest')?.addEventListener('click', () => { store.setFlag(step.flag, 'wazne', true); location.hash = step.retest; });
  const saveBackup = () => document.getElementById('exportBtn').click();
  document.getElementById('backupNow')?.addEventListener('click', () => { saveBackup(); prefs.set('kopiaPytanie', todayIso); document.querySelector('.backup')?.remove(); });
  document.getElementById('backupLater')?.addEventListener('click', () => { prefs.set('kopiaPytanie', todayIso); document.querySelector('.backup')?.remove(); });
  document.getElementById('printCobit').addEventListener('click', () => { location.hash = '#/druk/cobit'; });
  document.getElementById('exportBtn').addEventListener('click', () => {
    const blob = new Blob([store.export()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `cobit5-postep-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
  document.getElementById('importFile').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try { store.import(await f.text()); toast('Zaimportowano postęp'); renderHome(main); }
    catch (err) { toast('To nie jest poprawny plik postępu'); }
  });
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Usunąć cały postęp, notatki i wyniki egzaminów z tej przeglądarki? Tego nie da się cofnąć (chyba że masz kopię w pliku).')) {
      store.reset(); toast('Postęp wyczyszczony'); renderHome(main);
    }
  });
}
