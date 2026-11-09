// Podręcznik krok po kroku – silnik prezentacji.
// Strona definiuje window.DECK = { id, rozdzial, tytul, prev, next, T, S }.
//
// Układ: slajd na cały ekran, minimalistyczny (bez karty i tła). Szczegóły otwierają się
// w nakładce na przyciemnionym ekranie – po kliknięciu pojęcia, „Kontekst” albo „Pomoc”.
//
// T – pojęcia (klucz → obiekt): { t, eg, pd, en, wyj, zycie, firma, urzad, egz, src }
//   (starszy format tablicowy [t, eg, pd, en, wyj, firma, urzad, egz, src] też działa).
//
// S – slajdy, po kolei:
//   treść:   { pt, h, b, c, s, ctx? }
//            b – HTML; <w k="klucz">słowo</w> = klikalne pojęcie
//            ctx – kontekst do zapoznania (HTML, akapity <p>…</p>; może zawierać <w k>)
//   pytanie: { pt, quiz: { kontekst?, tresc, opcje: [{ t, ok?, w }], src, pomoc?: { t?, k?: [klucze] } } }
//            pomoc.t – podpowiedź, która NIE zdradza odpowiedzi; pomoc.k – pojęcia do przypomnienia.
//            Bez pomocy silnik pokazuje pojęcia i kontekst najbliższego slajdu treści przed pytaniem.
(function () {
  const D = window.DECK;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const KEY = 'c5.podrecznik';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } };
  const save = (st) => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* bez zapisu */ } };
  const term = (k) => {
    const v = D.T[k];
    if (!v) return null;
    if (!Array.isArray(v)) return v;
    return { t: v[0], eg: v[1], pd: v[2], en: v[3], wyj: v[4], firma: v[5], urzad: v[6], egz: v[7], src: v[8] };
  };
  // Klikalne pojęcie z nazwą angielską pod spodem (żeby wzrokowo kojarzyć PL ↔ EN).
  // Gdy tuż za pojęciem stoi już <span class="en">, nie dublujemy oryginału.
  // Znak interpunkcyjny tuż za pojęciem (także za </b>) wchodzi do środka pojęcia (.wp, bez podkreślenia),
  // bo przeglądarka łamie linię za blokiem pojęcia i „:” albo „,” spadałby na początek następnej linii.
  const words = (html) => String(html || '').replace(/<w k="([\w-]+)">(.*?)<\/w>(?:\s*<span class="en">(.*?)<\/span>)?((?:<\/(?:b|strong|em|i)>)*)([,.;:!?)\]”»…]+)?/g, (m, k, lab, enNext, closers, punct) => {
    const t = D.T[k] && (Array.isArray(D.T[k]) ? { en: D.T[k][3] } : D.T[k]);
    const txt = enNext || (t && t.en ? esc(t.en) : '');
    const same = txt.replace(/<[^>]+>/g, '').trim().toLowerCase() === lab.replace(/<[^>]+>/g, '').trim().toLowerCase();
    const en = txt && !same ? `<span class="wen" lang="en"><span>${txt}</span></span>` : '';
    const wp = punct ? `<span class="wp">${punct}</span>` : '';
    return `<button class="w" data-k="${k}"><span class="wl">${lab}</span>${wp}${en}</button>${closers || ''}`;
  });
  const keysIn = (html) => [...new Set([...String(html || '').matchAll(/<w k="([\w-]+)">/g)].map((m) => m[1]))].filter((k) => D.T[k]);
  const firstSentence = (s) => { const m = String(s || '').match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : String(s || ''); };
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];

  // Ilustracje i strony podręcznika – plik lokalny ilustracje/ilu.js (prawa autorskie ISACA, poza gitem).
  // window.ILU = { pages: 94, figs: { "9": { t: "Kluczowe role…", s: [24], img: ["il-9-1.jpg"] } } }
  const ILU = window.ILU || null;
  function refs(text) {
    const out = { figs: [], pages: [] };
    if (!ILU) return out;
    const t = String(text || '').replace(/<[^>]+>/g, ' ');
    for (const m of t.matchAll(/(?:Ilustracj\w*|Rysun\w*)\s+(\d{1,2})\b/gi)) {
      const n = String(+m[1]);
      if (ILU.figs[n] && !out.figs.includes(n)) out.figs.push(n);
    }
    for (const m of t.matchAll(/(?:\bs\.|\b[Ss]tron[aiey]?)\s*((?:\d{1,3}(?:\s*[–-]\s*\d{1,3})?(?:\s*,\s*(?=\d))?)+)/g)) {
      for (const part of m[1].split(',')) {
        const r = part.trim().split(/\s*[–-]\s*/).map(Number);
        if (!r[0]) continue;
        for (let p = r[0]; p <= Math.min(r[1] || r[0], r[0] + 3); p++) if (p >= 1 && p <= ILU.pages && !out.pages.includes(p)) out.pages.push(p);
      }
    }
    return out;
  }
  function slideRefs(s) {
    if (s.quiz) { const q = s.quiz; return refs([q.tresc, q.kontekst, q.src, q.kurs, ...(q.opcje || []).map((o) => o.w)].join(' ')); }
    return refs([s.h, s.b, s.s, s.ctx].join(' '));
  }
  const figImg = (n, k = 0) => 'ilustracje/' + ILU.figs[n].img[k];
  const figCap = (n) => `Ilustracja ${n} — ${esc(ILU.figs[n].t)} · s. ${ILU.figs[n].s.join(', ')}`;
  function thumbs(r) {
    if (!r.figs.length && !r.pages.length) return '';
    let h = '<div class="figs">';
    h += r.figs.slice(0, 2).map((n) => `<button class="figthumb" data-src="1"><img src="${figImg(n)}" alt="Ilustracja ${n}" loading="lazy"><span>${figCap(n)}</span></button>`).join('');
    h += `<button class="ctxbtn" data-src="1">▣ Z podręcznika${r.figs.length ? '' : ': s. ' + r.pages.slice(0, 4).join(', ')}</button></div>`;
    return h;
  }
  function figBlock(r, withPages) {
    let h = r.figs.map((n) => `<figure class="figfull"><figcaption>${figCap(n)}</figcaption>${ILU.figs[n].img.map((f) => `<a href="ilustracje/${f}" target="_blank" rel="noopener"><img src="ilustracje/${f}" alt="Ilustracja ${n}" loading="lazy"></a>`).join('')}</figure>`).join('');
    if (withPages) {
      const figPages = r.figs.flatMap((n) => ILU.figs[n].s);
      h += r.pages.filter((p) => !figPages.includes(p)).map((p) => { const f = 'strona-' + String(p).padStart(3, '0') + '.jpg'; return `<figure class="figfull"><figcaption>Podręcznik COBIT 5 (PL), strona ${p}</figcaption><a href="ilustracje/${f}" target="_blank" rel="noopener"><img src="ilustracje/${f}" alt="Strona ${p}" loading="lazy"></a></figure>`; }).join('');
    }
    return h;
  }

  document.title = D.tytul + ' · COBIT 5';
  document.body.classList.add('deck');
  document.body.innerHTML = `
    <header class="top"><a class="back" href="index.html" aria-label="Spis treści">←</a>
      <div class="ttl"><small>${esc(D.rozdzial)}</small><strong>${esc(D.tytul)}</strong></div>
      <span class="score" id="score"></span><span class="cnt" id="cnt"></span><a class="maplink" href="mapa.html" title="Mapa COBIT 5 – schemat całego frameworka">Mapa</a></header>
    <div class="prog" aria-hidden="true"><span id="pb"></span></div>
    <main class="stage"><section class="slide" id="slide" aria-live="polite"></section></main>
    <button class="side-nav prev" id="sprev" aria-label="Poprzedni slajd (strzałka w lewo)">‹</button>
    <button class="side-nav next" id="snext" aria-label="Następny slajd (strzałka w prawo)">›</button>
    <dialog class="ov" id="ov" aria-labelledby="ovh"><div class="ovp">
      <div class="ovbar"><button class="ovback" id="ovback" hidden>← Wróć</button><span class="ovkind" id="ovkind"></span><button class="ovx" id="ovx" aria-label="Zamknij">✕</button></div>
      <div id="ovbody"></div></div></dialog>`;

  // Pytania z Sample Paper 1 są w pliku lokalnym sp1.local.js (prawa autorskie ISACA, poza gitem).
  // Gdy pliku nie ma, slajdy-zaślepki znikają.
  const SP = window.SP1 || {};
  const S = D.S.filter((s) => !s.sp1 || SP[s.sp1]).map((s) => {
    if (!s.sp1) return s;
    const q = SP[s.sp1];
    return { pt: 'Arkusz próbny · pytanie nr ' + q.nr, sp: true, quiz: { tresc: q.tresc, opcje: q.opcje, kurs: q.kurs,
      src: 'COBIT 5 Foundation Sample Paper 1 (PL), pytanie ' + q.nr + ' – oficjalny arkusz próbny, uzasadnienia z arkusza',
      pomoc: { t: 'Pytanie z oficjalnego arkusza próbnego. Dotyczy lekcji ' + s.lekcja + ' „' + s.temat + '”.', k: s.k || [] } } };
  });
  const QN = S.map((s, i) => (s.quiz ? i : -1)).filter((i) => i >= 0);
  let i = 0;
  let tab = 'wyj';
  let stack = [];
  const fromHash = () => { const m = (location.hash || '').match(/^#slajd-(\d+)$/); return m ? Math.min(S.length, Math.max(1, +m[1])) - 1 : null; };

  function entry() { const st = load(); return [st, st[D.id] || { max: 0, q: {} }]; }
  function remember() {
    const [st, e] = entry();
    e.last = i; e.ts = Date.now(); e.max = Math.max(e.max || 0, i + 1); e.total = S.length; e.qTotal = QN.length; e.q = e.q || {};
    st[D.id] = e; save(st);
  }
  function scoreLine() {
    const q = entry()[1].q || {};
    const done = Object.keys(q).length; const ok = Object.values(q).filter(Boolean).length;
    $('score').textContent = QN.length ? `Pytania: ${ok}/${QN.length}${done < QN.length ? ` · ${QN.length - done} przed Tobą` : ''}` : '';
  }
  function groupInfo(idx) {
    let a = idx; while (a > 0 && S[a - 1].quiz) a--;
    let b = idx; while (b < S.length - 1 && S[b + 1].quiz) b++;
    return [idx - a + 1, b - a + 1];
  }
  // Najbliższy slajd treści przed pytaniem – do niego odsyła pomoc.
  function baseSlide(idx) { let a = idx; while (a > 0 && S[a].quiz) a--; return S[a].quiz ? -1 : a; }

  // ---------- slajd ----------
  function drawContent(s) {
    return `<div class="phead"><p class="part">${s.pt}</p><button class="ctxbtn" data-open="ctx">ⓘ Kontekst</button></div>
      <h1>${s.h}</h1>${words(s.b)}
      ${s.c ? `<div class="concl"><small>Wniosek</small><p>${words(s.c)}</p></div>` : ''}
      ${thumbs(slideRefs(s))}
      <div class="sfoot"><button class="ctxbtn" data-open="ctx">ⓘ Więcej w kontekście</button>${s.s ? `<p class="src">Źródło: ${s.s}</p>` : ''}</div>`;
  }
  function drawQuiz(s) {
    const q = s.quiz;
    const [n, of] = groupInfo(i);
    const answered = (entry()[1].qa || {})[i];
    let h = `<div class="phead"><p class="part qpart">${s.sp ? esc(s.pt) : `${esc(s.pt || 'Sprawdź się')} · pytanie ${n} z ${of}`}</p><button class="ctxbtn" data-open="help">? Pomoc</button></div>`;
    if (q.kontekst) h += `<div class="qctx">${words(q.kontekst)}</div>`;
    h += `<h2 class="qstem">${words(q.tresc)}</h2><div class="qopts" role="group" aria-label="Odpowiedzi">`;
    h += q.opcje.map((o, k) => `<button class="qopt" data-k="${k}"><span class="ql">${LETTERS[k]}</span><span class="qt">${o.t}</span></button><div class="qwhy" id="why${k}" hidden></div>`).join('');
    h += `</div><div class="qres" id="qres" aria-live="polite"></div>`;
    const qr = slideRefs(s);
    h += `<div class="sfoot"><button class="ctxbtn" data-open="help">? Pomoc kontekstowa do pytania</button>${qr.figs.length || qr.pages.length ? '<button class="ctxbtn" data-src="1">▣ Z podręcznika</button>' : ''}${q.src ? '<p class="src">Źródło: ' + q.src + '</p>' : ''}</div>`;
    $('slide').innerHTML = h;
    $('slide').querySelectorAll('.qopt').forEach((b) => b.addEventListener('click', () => reveal(+b.dataset.k, true)));
    if (typeof answered === 'number') reveal(answered, false);
  }
  function reveal(k, store) {
    const q = S[i].quiz;
    const good = q.opcje.findIndex((o) => o.ok);
    $('slide').querySelectorAll('.qopt').forEach((b) => {
      const j = +b.dataset.k;
      b.disabled = true;
      b.classList.toggle('good', j === good);
      b.classList.toggle('bad', j === k && k !== good);
      const w = $('why' + j);
      w.hidden = false;
      w.innerHTML = `<b>${j === good ? 'Tak.' : 'Nie.'}</b> ${q.opcje[j].w || ''}`;
    });
    $('qres').innerHTML = k === good
      ? '<p class="ok">Dobrze! Przeczytaj jeszcze wyjaśnienia pozostałych odpowiedzi.</p>'
      : `<p class="no">Prawidłowa odpowiedź to ${LETTERS[good]}. Przeczytaj wyjaśnienia – pomyłka teraz pomaga zapamiętać.</p>`;
    if (q.kurs) $('qres').innerHTML += `<div class="qkurs"><p class="trapk">Wyjaśnienie kursu</p><p>${words(q.kurs)}</p></div>`;
    if (store) {
      const [st, e] = entry();
      e.q = e.q || {}; e.qa = e.qa || {};
      e.q[i] = k === good; e.qa[i] = k;
      st[D.id] = e; save(st); scoreLine();
    }
  }
  function draw() {
    const s = S[i];
    $('slide').classList.toggle('isquiz', !!s.quiz);
    if (s.quiz) drawQuiz(s); else $('slide').innerHTML = drawContent(s);
    $('pb').style.width = ((i + 1) / S.length) * 100 + '%';
    $('cnt').textContent = `${i + 1} / ${S.length}`;
    const last = i === S.length - 1;
    $('sprev').disabled = i === 0 && !D.prev;
    $('snext').disabled = last && !D.next;
    $('sprev').title = (i === 0 && D.prev ? 'Poprzednia część' : 'Poprzedni slajd') + ' (←)';
    $('snext').title = (last ? (D.next ? 'Następna część' : 'Koniec') : 'Następny slajd') + ' (→)';
    $('sprev').setAttribute('aria-label', $('sprev').title); $('snext').setAttribute('aria-label', $('snext').title);
    if (location.hash !== '#slajd-' + (i + 1)) history.replaceState(null, '', '#slajd-' + (i + 1));
    remember(); scoreLine();
  }

  // ---------- nakładka ----------
  function termList(keys) {
    if (!keys.length) return '';
    return '<div class="tlist">' + keys.map((k) => { const t = term(k); return `<button class="tli" data-k="${k}"><b>${esc(t.t)}</b><em>${esc(t.en)}</em><span>${esc(firstSentence(t.wyj))}</span></button>`; }).join('') + '</div>';
  }
  function viewTerm(k) {
    const t = term(k);
    const tabs = [['wyj', 'Wyjaśnienie'], ['prz', 'Przykłady'], ['egz', 'Na egzamin']];
    let body = '';
    if (tab === 'wyj') {
      body = `<table class="names"><tr><td>Egzamin</td><td><strong>${esc(t.eg)}</strong></td></tr><tr><td>Podręcznik</td><td>${esc(t.pd)}</td></tr><tr><td>Oryginał</td><td><em>${esc(t.en)}</em></td></tr></table>
        <div class="wyj">${String(t.wyj || '').split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join('')}</div>`;
    } else if (tab === 'prz') {
      body = '<div class="ex">' + [['zycie', 'Z życia'], ['firma', 'Firma'], ['urzad', 'Urząd'], ['it', 'IT']].filter(([f]) => t[f]).map(([f, l]) => `<div><b>${l}</b><p>${esc(t[f])}</p></div>`).join('') + '</div>';
    } else {
      body = `<div class="trap"><p>${esc(t.egz)}</p></div><p class="k">Źródło</p><p>${esc(t.src)}</p>`;
    }
    return ['Pojęcie', `<h2 id="ovh">${esc(t.t)}</h2><div class="stabs" role="tablist">${tabs.map(([key, l]) => `<button role="tab" class="stab" data-tab="${key}" aria-selected="${key === tab}">${l}</button>`).join('')}</div><div class="sbody">${body}</div>`];
  }
  function viewCtx(idx) {
    const s = S[idx];
    const keys = keysIn(s.b + (s.ctx || ''));
    let h = `<h2 id="ovh">${s.h}</h2>`;
    h += s.ctx ? `<div class="ctxtxt">${words(s.ctx)}</div>` : (s.c ? `<div class="ctxtxt"><p>${words(s.c)}</p></div>` : '');
    if (keys.length) h += '<p class="k">Pojęcia na tym slajdzie</p>' + termList(keys);
    if (s.s) h += `<p class="k">Źródło</p><p>${s.s}</p>`;
    const r = slideRefs(s);
    if (r.figs.length) h += '<p class="k">Z podręcznika</p>' + figBlock(r, false);
    return ['Kontekst slajdu', h];
  }
  function viewSrc(idx) {
    const r = slideRefs(S[idx]);
    return ['Źródło w podręczniku', `<h2 id="ovh">Z podręcznika COBIT 5</h2><p class="hint">Kliknij obraz, żeby otworzyć go w pełnym rozmiarze.</p>${figBlock(r, true) || '<p>Brak ilustracji dla tego slajdu.</p>'}`];
  }
  function viewHelp(idx) {
    const q = S[idx].quiz; const p = q.pomoc || {}; const b = baseSlide(idx);
    const keys = (p.k && p.k.length ? p.k : (b >= 0 ? keysIn(S[b].b + (S[b].ctx || '')) : [])).filter((k) => D.T[k]);
    let h = '<h2 id="ovh">Pomoc do pytania</h2><p class="hint">Pomoc nie zdradza odpowiedzi – przypomina, czego dotyczy pytanie.</p>';
    if (p.t) h += `<div class="ctxtxt">${words(p.t)}</div>`;
    if (keys.length) h += '<p class="k">Pojęcia do przypomnienia</p>' + termList(keys);
    if (b >= 0) h += `<p class="k">Slajd, którego dotyczy pytanie</p><p><button class="linkbtn" data-ctx="${b}">${S[b].h}</button> – kontekst · <button class="linkbtn" data-goto="${b}">przejdź do slajdu ${b + 1}</button></p>`;
    return ['Pomoc kontekstowa', h];
  }
  function renderOv() {
    const v = stack[stack.length - 1];
    const [kind, html] = v.type === 'term' ? viewTerm(v.k) : v.type === 'ctx' ? viewCtx(v.i) : v.type === 'src' ? viewSrc(v.i) : viewHelp(v.i);
    $('ovkind').textContent = kind;
    $('ovback').hidden = stack.length < 2;
    $('ovbody').innerHTML = html;
    $('ovbody').scrollTop = 0; $('ov').querySelector('.ovp').scrollTop = 0;
  }
  function open(v, push) {
    if (v.type === 'term' && !term(v.k)) return;
    if (v.type === 'term') tab = 'wyj';
    stack = push && $('ov').open ? stack.concat([v]) : [v];
    renderOv();
    if (!$('ov').open) $('ov').showModal();
  }
  function closeOv() { if ($('ov').open) $('ov').close(); }

  $('ov').addEventListener('click', (e) => {
    if (e.target === $('ov')) { closeOv(); return; } // klik w przyciemnione tło
    const b = e.target.closest('button'); if (!b) return;
    if (b.id === 'ovx') closeOv();
    else if (b.id === 'ovback') { stack.pop(); renderOv(); }
    else if (b.dataset.tab) { tab = b.dataset.tab; renderOv(); }
    else if (b.dataset.k) open({ type: 'term', k: b.dataset.k }, true);
    else if (b.dataset.ctx) open({ type: 'ctx', i: +b.dataset.ctx }, true);
    else if (b.dataset.goto) { closeOv(); i = +b.dataset.goto; draw(); scrollTo({ top: 0 }); }
  });
  $('slide').addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || b.classList.contains('qopt')) return;
    if (b.classList.contains('w')) open({ type: 'term', k: b.dataset.k });
    else if (b.dataset.open === 'ctx') open({ type: 'ctx', i });
    else if (b.dataset.open === 'help') open({ type: 'help', i });
    else if (b.dataset.src) open({ type: 'src', i });
  });

  function go(d) {
    const n = i + d;
    if (n < 0) { if (D.prev) location.href = D.prev + '#koniec'; return; }
    if (n >= S.length) { if (D.next) location.href = D.next; return; }
    i = n; draw(); scrollTo({ top: 0 });
  }
  $('sprev').onclick = () => go(-1);
  $('snext').onclick = () => go(1);
  // Na telefonie: przesunięcie palcem w lewo / w prawo zmienia slajd.
  let tx = null, ty = 0;
  document.querySelector('.stage').addEventListener('touchstart', (e) => { if (e.touches.length === 1) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; } }, { passive: true });
  document.querySelector('.stage').addEventListener('touchend', (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 50) go(dx < 0 ? 1 : -1);
  }, { passive: true });
  addEventListener('keydown', (e) => {
    if ($('ov').open) return; // w nakładce działa Esc (zamyka) i Tab
    if (e.target.closest && e.target.closest('input,textarea,select')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { go(1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { go(-1); e.preventDefault(); }
    else if (e.key === 'i' || e.key === '?') { open(S[i].quiz ? { type: 'help', i } : { type: 'ctx', i }); e.preventDefault(); }
    else if (S[i].quiz && /^[a-dA-D1-4]$/.test(e.key)) {
      const k = /\d/.test(e.key) ? +e.key - 1 : 'abcd'.indexOf(e.key.toLowerCase());
      const b = $('slide').querySelector(`.qopt[data-k="${k}"]`);
      if (b && !b.disabled) b.click();
    }
  });
  addEventListener('hashchange', () => { const n = fromHash(); if (n !== null && n !== i) { i = n; draw(); } });

  // Etykiety EN pod pojęciami (.wen): nie mogą nachodzić na sąsiednią etykietę ani wychodzić poza akapit.
  // Za szeroką etykietę zawijamy do szerokości wolnego miejsca (linia rośnie w pionie), a gdy miejsca
  // jest bardzo mało – skracamy wielokropkiem; pełna nazwa zostaje w podpowiedzi (title).
  const BLK = 'p,li,td,th,h1,h2,h3,blockquote,dd,figcaption,div';
  // Kolejno w każdej linii (od lewej): etykieta może przesunąć się w lewo pod wcześniejsze słowa
  // (tam jest wolne miejsce), ale nie dalej niż koniec poprzedniej etykiety i lewa krawędź akapitu.
  // Dopiero gdy i tak się nie mieści – zawija się do szerokości wolnego pasa albo dostaje wielokropek.
  function fitWen() {
    const labs = [...document.querySelectorAll('.w .wen')].filter((l) => !l.closest('.chips,th'));
    labs.forEach((l) => { l.classList.remove('fit', 'cut'); l.firstElementChild.style.width = ''; l.style.marginLeft = ''; });
    const vw = document.documentElement.clientWidth;
    const items = labs.map((l) => {
      const blk = l.closest('.w').parentElement.closest(BLK);
      let lo = 8, hi = vw - 8;
      if (blk) { const b = blk.getBoundingClientRect(), cs = getComputedStyle(blk); lo = Math.max(lo, b.left + parseFloat(cs.paddingLeft || 0)); hi = Math.min(hi, b.right - parseFloat(cs.paddingRight || 0)); }
      return { l, r: l.getBoundingClientRect(), nat: l.scrollWidth, lo, hi };
    }).filter((x) => x.r.height > 0).sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left);
    let prev = null;
    items.forEach((x, k) => {
      const same = (y) => y && Math.abs(y.r.top - x.r.top) < 3;
      const next = same(items[k + 1]) ? items[k + 1] : null;
      const left = same(prev) ? Math.max(x.lo, prev.end + 8) : x.lo;
      const right = next ? Math.min(x.hi, next.r.left - 8) : x.hi;
      let start = x.r.left;
      if (start + x.nat > right) start = Math.max(left, right - x.nat);
      let width = x.nat;
      if (start + width > right) {
        width = Math.max(24, Math.floor(right - start));
        const w = x.l.closest('.w');
        if (!w.title) w.title = x.l.textContent;
        x.l.firstElementChild.style.width = width + 'px'; // szerokość ma wnętrze – .wen zostaje 0 i nie rozpycha pojęcia
        x.l.classList.add(width >= 64 ? 'fit' : 'cut');
      }
      if (start < x.r.left) x.l.style.marginLeft = Math.round(start - x.r.left) + 'px';
      x.end = start + width;
      prev = x;
    });
  }
  let fitQ = 0;
  const fitSoon = () => { cancelAnimationFrame(fitQ); fitQ = requestAnimationFrame(fitWen); };
  new MutationObserver(fitWen).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['open'] });
  addEventListener('resize', fitSoon);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitSoon);

  const h = fromHash();
  if (location.hash === '#koniec') i = S.length - 1;
  else if (h !== null) i = h;
  else { const e = load()[D.id]; i = e && typeof e.last === 'number' ? Math.min(e.last, S.length - 1) : 0; }
  draw();
})();
