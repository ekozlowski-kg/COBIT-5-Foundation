// Mini-Markdown zgodny z content/SCHEMA.md. Bez zależności.
// Rozszerzenia: [[id]] / [[id|tekst]] -> przypis; bloki :::zapamietaj / :::pulapka / :::egzamin /
// :::kontekst <zycie|firma|admin|psp> / :::zrodlo DOC strona [ilustracja] / :::uproszczenie.

export const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const TERM_RE = /\[\[([a-z0-9][a-z0-9-]*)(?:\|([^\]]+))?\]\]/g;

const DOCS = {
  'FW-PL': 'COBIT 5 Framework (PL)', SYL: 'Sylabus PeopleCert', SP1: 'Sample Paper 1 (PL)', ALTKOM: 'Altkom: różnice tłumaczenia', WWW: 'Internet',
};
// §17.6 – konteksty: życie → biuro → organizacja → PSP → IT/COBIT (firma/admin = organizacja, przejściowo).
const CTX = { zycie: 'Życie codzienne', biuro: 'Biuro', organizacja: 'Organizacja', firma: 'Organizacja', admin: 'Organizacja', psp: 'PSP (Modrzewiów)', it: 'IT/COBIT' };
const CTX_ICON = { zycie: '🏠', biuro: '🗂️', organizacja: '🏢', firma: '🏢', admin: '🏢', psp: '🚒', it: '💻' };

export function sourceLabel(doc, strona, ilu) {
  return [DOCS[doc] || doc, strona && `s. ${strona}`, ilu && `il. ${ilu}`].filter(Boolean).join(', ');
}

// Nazwy haseł dla [[id]] bez etykiety (ustawia content.js po wczytaniu słownika) – nigdy surowe id na ekranie.
let nameOf = null;
export const setTermNames = (fn) => { nameOf = fn; };
const termLabel = (id, label) => label || (nameOf && nameOf(id) ? esc(nameOf(id)) : null);

export function inline(text, termRef) {
  let s = esc(text);
  s = s.replace(TERM_RE, (_, id, label) => termRef ? termRef(id, termLabel(id, label)) : (termLabel(id, label) || id));
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return s;
}

export function render(md, termRef) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const il = (t) => inline(t, termRef);
  const isBlockStart = (l) => /^(#{1,3}\s|>|\s*\||\s*([-*]|\d+\.)\s+|:::|```)/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    // Blok :::nazwa argumenty … :::
    const bm = line.trim().match(/^:::([a-z-]+)\s*(.*)$/);
    if (bm) {
      const [, name, args] = bm;
      const buf = [];
      let depth = 1;
      i++;
      while (i < lines.length) {
        const t = lines[i].trim();
        if (/^:::[a-z]/.test(t)) depth++;
        else if (t === ':::') { depth--; if (depth === 0) { i++; break; } }
        buf.push(lines[i]);
        i++;
      }
      out.push(block(name, args.trim(), buf.join('\n'), termRef));
      continue;
    }

    if (/^```/.test(line)) {
      const lang = line.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++;
      out.push(`<pre class="code" data-lang="${esc(lang)}"><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }

    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) { out.push(`<h${h[1].length + 1}>${il(h[2])}</h${h[1].length + 1}>`); i++; continue; }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push(`<blockquote>${render(buf.join('\n'), termRef)}</blockquote>`);
      continue;
    }

    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      // Komórki: dzielimy po „|”, ale nie wewnątrz przypisu [[id|tekst]].
      const cells = (r) => r.trim().replace(/^\||\|$/g, '').replace(/\[\[[^\]]*\]\]/g, (x) => x.replace(/\|/g, '\u0000'))
        .split('|').map((c) => c.replace(/\u0000/g, '|').trim());
      const isSep = (r) => /^\s*\|?\s*:?-{2,}/.test(r);
      let head = null, body = rows;
      if (rows.length > 1 && isSep(rows[1])) { head = cells(rows[0]); body = rows.slice(2); }
      let t = '<div class="table-wrap"><table>';
      if (head) t += '<thead><tr>' + head.map((c) => `<th scope="col">${il(c)}</th>`).join('') + '</tr></thead>';
      t += '<tbody>' + body.map((r) => '<tr>' + cells(r).map((c) => `<td>${il(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
      out.push(t);
      continue;
    }

    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        let item = lines[i].replace(/^\s*([-*]|\d+\.)\s+/, '');
        i++;
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i])) { item += ' ' + lines[i].trim(); i++; }
        items.push(`<li>${il(item)}</li>`);
      }
      out.push(ordered ? `<ol>${items.join('')}</ol>` : `<ul>${items.join('')}</ul>`);
      continue;
    }

    const buf = [];
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) { buf.push(lines[i].trim()); i++; }
    if (buf.length) out.push(`<p>${il(buf.join(' '))}</p>`);
    else { out.push(`<p>${il(line)}</p>`); i++; }
  }
  return out.join('\n');
}

function block(name, args, inner, termRef) {
  const body = inner.trim() ? render(inner, termRef) : '';
  switch (name) {
    case 'zapamietaj':
      return `<aside class="box box-remember"><div class="box-label">Zapamiętaj</div>${body}</aside>`;
    case 'pulapka':
      return `<aside class="box box-trap"><div class="box-label">⚠ Pułapka terminologiczna</div>${body}</aside>`;
    case 'egzamin':
      return `<aside class="box box-exam"><div class="box-label">Na egzamin</div>${body}</aside>`;
    case 'uproszczenie':
      return `<aside class="box box-simple"><div class="box-label">Uproszczenie dydaktyczne</div>${body}</aside>`;
    case 'kontekst': {
      const k = args.split(/\s+/)[0];
      return `<aside class="box box-ctx" data-ctx="${esc(k)}"><div class="box-label"><span aria-hidden="true">${CTX_ICON[k] || '•'}</span> ${esc(CTX[k] || k)}<span class="pill prov-przyklad">Przykład autorski</span></div>${body}</aside>`;
    }
    case 'zrodlo': {
      const [doc, strona, ilu] = args.split(/\s+/);
      return `<p class="src">Źródło: ${esc(sourceLabel(doc, strona, ilu))}${body ? ` – ${body.replace(/^<p>|<\/p>$/g, '')}` : ''}</p>`;
    }
    case 'mapa':
      // Fragment taksonomii rysuje widok lekcji (potrzebuje mapa-cobit.json).
      return `<div class="map-snippet" data-node="${esc(args.split(/\s+/)[0] || '')}"></div>${body ? `<div class="map-comment">${body}</div>` : ''}`;
    case 'atom': {
      // §16.2: życie → komenda → twierdzenie COBIT, potem mikropytanie prawda/fałsz o jedno kliknięcie.
      const f = {};
      let key = null;
      for (const ln of inner.split('\n')) {
        const m = ln.match(/^(twierdzenie|poLudzku|zycie|komenda|sprawdz):\s*(.*)$/);
        if (m) { key = m[1]; f[key] = m[2]; } else if (key && ln.trim()) f[key] += ' ' + ln.trim();
      }
      const il2 = (t) => inline(t || '', termRef);
      const [ans, stmt, why] = (f.sprawdz || '').split('::').map((x) => x.trim());
      return `<div class="atom">
        ${f.zycie ? `<div class="atom-row atom-life"><div class="box-label">🏠 W życiu</div><p>${il2(f.zycie)}</p></div>` : ''}
        ${''/* f.komenda – przykłady strażackie wyłączone (FORMAT-KROTKI §2) */}
        <div class="atom-row atom-claim"><div class="box-label">COBIT 5 mówi</div><p class="atom-claim-t">${il2(f.twierdzenie)}</p>${f.poLudzku ? `<p class="small muted">Po ludzku: ${il2(f.poLudzku)}</p>` : ''}</div>
        ${stmt ? `<div class="atom-check" data-atom-check="${ans === 'P' ? 'P' : 'F'}"><p><strong>Sprawdź się:</strong> ${il2(stmt)}</p>
          <div class="btn-row"><button class="btn" data-pf="P">Prawda</button><button class="btn" data-pf="F">Fałsz</button></div>
          <p class="atom-why" hidden>${il2(why)}</p></div>` : ''}
      </div>`;
    }
    case 'wykladowca':
    case 'sb':
      return ''; // warstwa 2 i sekcje sidebaru – pokazuje panel obok slajdu (§17.5, §17.7)
    case 'pytanie-uczestnika': {
      const q = (inner.match(/^pytanie:\s*(.+)$/m) || [])[1] || '';
      const a = (inner.match(/^odpowiedz:\s*([\s\S]+)$/m) || [])[1] || '';
      return `<details class="pq"><summary><span aria-hidden="true">🙋</span> Ktoś pyta: ${inline(q.trim(), termRef)}</summary><div class="pq-a">${render(a.trim(), termRef)}</div></details>`;
    }
    case 'progresja': {
      // §17.6 – progresja poziomów 0–5; ostatni łączy się z COBIT 5.
      const lv = [...inner.matchAll(/^([0-5]):\s*(.+)$/gm)];
      return `<div class="progresja"><div class="box-label">Od codzienności do COBIT 5</div><ol>${lv.map((m) => `<li data-lv="${m[1]}"><span class="lv-n">${m[1]}</span><span>${inline(m[2], termRef)}</span></li>`).join('')}</ol></div>`;
    }
    case 'teza': {
      // §17.8 – „Zatrzymaj się i pomyśl”: najpierw sytuacja i pytanie, teza po kliknięciu.
      const f = {};
      let key = null;
      for (const ln of inner.split('\n')) {
        const m = ln.match(/^(sytuacja|pytanie|teza|uzasadnienie|powiazanie|przyklad|status|zrodlo|refleksja):\s*(.*)$/);
        if (m) { key = m[1]; f[key] = m[2]; } else if (key && ln.trim()) f[key] += ' ' + ln.trim();
      }
      const il3 = (t) => inline(t || '', termRef);
      const TL = { interpretacyjna: 'interpretacyjna', krytyczna: 'krytyczna', praktyczna: 'praktyczna', porownawcza: 'porównawcza', problemowa: 'problemowa', egzaminacyjna: 'egzaminacyjna' };
      return `<section class="teza" data-teza data-status="${esc(f.status || '')}">
        <div class="box-label">🛑 Zatrzymaj się i pomyśl · teza ${esc(TL[args.split(/\s+/)[0]] || '')}</div>
        ${f.sytuacja ? `<p>${il3(f.sytuacja)}</p>` : ''}
        ${f.pytanie ? `<p class="teza-q"><strong>${il3(f.pytanie)}</strong></p>` : ''}
        <button class="btn teza-show">Pomyśl chwilę, potem pokaż tezę</button>
        <div class="teza-body" hidden>
          <p class="teza-t">${il3(f.teza)}</p>
          ${f.uzasadnienie ? `<p><span class="muted">Dlaczego:</span> ${il3(f.uzasadnienie)}</p>` : ''}
          ${f.przyklad ? `<p><span class="muted">Przykład:</span> ${il3(f.przyklad)}</p>` : ''}
          ${f.powiazanie ? `<p class="small"><span class="muted">W COBIT 5:</span> ${il3(f.powiazanie)}</p>` : ''}
          <p class="small teza-meta"><span class="teza-status" data-status="${esc(f.status || '')}"></span>${f.zrodlo ? ` · źródło: ${esc(f.zrodlo)}` : ''}</p>
          ${f.refleksja ? `<p class="teza-r">🤔 ${il3(f.refleksja)}</p>` : ''}
        </div>
      </section>`;
    }
    case 'glebiej':
      // §12.4: drabina „Prosty → Zaawansowany → Skrajny” z `glebokosc` hasła – rysuje widok lekcji.
      return `<div class="depth" data-depth="${esc(args.split(/\s+/)[0] || '')}">${body ? `<div class="depth-comment">${body}</div>` : ''}<div class="depth-ladder"></div></div>`;
    case 'rozwiazany': {
      // §10.5: pytanie z 4 opcjami, potem kroki rozdzielone linią +++ (odsłaniane po kolei).
      const [question, ...steps] = inner.split(/^\+\+\+\s*$/m);
      const st = steps.map((x) => x.trim()).filter(Boolean);
      return `<div class="solved" data-solved>
        <div class="solved-q"><div class="box-label">Pytanie</div>${render(question.trim(), termRef)}</div>
        <ol class="solved-steps">${st.map((x, i) => `<li class="solved-step" data-step="${i}" hidden><div class="box-label">${i === st.length - 1 ? 'Odpowiedź' : `Krok ${i + 1} z ${st.length - 1}`}</div>${render(x, termRef)}</li>`).join('')}</ol>
        <div class="btn-row"><button class="btn btn-primary solved-next">Następny krok →</button><span class="small muted solved-hint">Najpierw spróbuj sam – potem odsłaniaj kroki.</span></div>
      </div>`;
    }
    case 'wlasne-slowa': {
      const [prompt, ...rest] = inner.split(/^\?\?\?\s*$/m);
      const model = rest.join('\n').trim();
      return `<div class="own" data-own>
        <div class="own-prompt">${render(prompt.trim(), termRef)}</div>
        <label class="sr-only">Twoja odpowiedź</label>
        <textarea class="own-text" rows="4" placeholder="Napisz z pamięci, własnymi słowami. Nie zaglądaj do poprzednich slajdów."></textarea>
        <div class="btn-row"><button class="btn own-show">Pokaż wzorzec</button><span class="small muted own-hint" aria-live="polite"></span></div>
        <div class="own-model" hidden><div class="box-label">Wzorzec</div>${render(model, termRef)}</div>
        <div class="own-self" hidden>
          <div class="small muted" style="margin-bottom:6px">Porównaj ze wzorcem. Jak Ci poszło?</div>
          <div class="seg" role="group" aria-label="Samoocena">
            <button data-self="mam">Mam to</button><button data-self="czesciowo">Częściowo</button><button data-self="nie">Nie mam</button>
          </div>
          <div class="small own-result" aria-live="polite"></div>
        </div>
      </div>`;
    }
    default:
      return `<aside class="box">${body}</aside>`;
  }
}

// ---- Plik lekcji: frontmatter (zdejmowany) + slajdy rozdzielone linią "---" ----
export function parseLesson(src, fileName = '') {
  const text = src.replace(/\r/g, '');
  const fm = text.match(/^---\n[\s\S]*?\n---\n/);
  if (!fm) throw new Error(`Brak frontmatter w ${fileName}`);
  const body = text.slice(fm[0].length);
  const slides = body.split(/\n---[ \t]*\n/).map((chunk) => {
    const sm = chunk.match(/<!--\s*slajd:\s*([\w-]+)\s*-->/);
    const md = chunk.replace(/<!--[\s\S]*?-->/g, '').trim();
    const sources = [...md.matchAll(/^:::zrodlo\s+(.+)$/gm)].map((m) => m[1].trim());
    // §16.3 / §17.5 / §17.7: podpowiedź, tekst wykładowcy, pytania uczestników i sekcje sidebaru wyciągamy osobno.
    const hint = ((chunk.match(/<!--\s*podpowiedz:\s*([\s\S]*?)-->/) || [])[1] || '').trim();
    const lecturer = [...md.matchAll(/^:::wykladowca\s*\n([\s\S]*?)^:::\s*$/gm)].map((m) => m[1].trim()).join('\n\n');
    const asks = [...md.matchAll(/^:::pytanie-uczestnika\s*\n([\s\S]*?)^:::\s*$/gm)].map((m) => ({
      q: ((m[1].match(/^pytanie:\s*(.+)$/m) || [])[1] || '').trim(), a: ((m[1].match(/^odpowiedz:\s*([\s\S]+)$/m) || [])[1] || '').trim() }));
    const sb = {};
    for (const m of md.matchAll(/^:::sb\s+([\w-]+)\s*\n([\s\S]*?)^:::\s*$/gm)) sb[m[1]] = (sb[m[1]] ? sb[m[1]] + '\n\n' : '') + m[2].trim();
    return { typ: sm ? sm[1] : 'tresc', md, sources, hint, lecturer, asks, sb };
  }).filter((s) => s.md);
  return { slides };
}

export function termIdsInOrder(slides) {
  const ids = [];
  for (const s of slides) for (const m of s.md.matchAll(TERM_RE)) if (!ids.includes(m[1])) ids.push(m[1]);
  return ids;
}
