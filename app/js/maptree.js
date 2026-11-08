// Rysowanie taksonomii COBIT 5 (content/mapa-cobit.json): fragment dla slajdu `mapa` i pełne drzewo dla widoku „Mapa”.
import { esc } from './md.js';
import { SYMBOLS } from './content.js';

const sym = (n) => SYMBOLS[n.id] || SYMBOLS[n.rodzic] ? `<span class="mn-sym" aria-hidden="true">${(SYMBOLS[n.id] || {}).icon || ''}</span>` : '';
const node = (n, cls, extra = '') =>
  `<span class="mnode ${cls} area-${esc(n.obszar || '')}${n.id === 'lad' || n.rodzic === 'domena-edm' ? ' is-lad' : ''}${n.id === 'zarzadzanie' ? ' is-zarz' : ''}" data-node="${esc(n.id)}">${sym(n)}<span class="mn-area">${esc(n.obszar || '')}</span>${n.kolejnosc ? `<span class="mn-area">${esc(n.kolejnosc)}.</span>` : ''}<span>${esc(n.nazwa)}</span>${extra}</span>`;

/** Fragment: przodkowie → rodzeństwo (węzeł podświetlony) → dzieci węzła. */
export function mapSnippet(m, id) {
  const n = m && m.nodes.get(id);
  if (!n) return `<p class="small muted">Mapa COBIT 5: brak węzła „${esc(id)}”.</p>`;
  const anc = m.ancestors(id);
  const sib = m.children.get(n.rodzic || null) || [n];
  const kids = m.children.get(id) || [];
  const MAX = 9;
  const sibs = sib.length > MAX ? [...sib.slice(0, MAX - 1).filter((x) => x.id !== id), n] : sib;
  let inner = `<ul>${sibs.map((s) => `<li>${node(s, s.id === id ? 'hit' : 'sib')}${s.id === id && kids.length
    ? `<ul>${kids.map((k) => `<li>${node(k, 'sib')}</li>`).join('')}</ul>` : ''}</li>`).join('')}${sib.length > sibs.length ? `<li class="small muted">… i ${sib.length - sibs.length} innych</li>` : ''}</ul>`;
  for (let i = anc.length - 1; i >= 0; i--) inner = `<ul><li>${node(anc[i], 'anc')}${inner}</li></ul>`;
  return `<div class="mtree" role="tree" aria-label="Położenie w COBIT 5: ${esc(m.path(id))}">${inner.replace(/^<ul>/, '').replace(/<\/ul>$/, '')}</div>`;
}

/**
 * Pełne drzewo. opts: { unlocked: Set<id> | null (null = wszystko), termByNode: Map<nodeId, term>, open: Set<id> }
 */
export function mapFull(m, { unlocked = null, termByNode = new Map(), showLocked = true } = {}) {
  const visible = (id) => !unlocked || unlocked.has(id);
  const walk = (parentId, depth) => {
    const kids = m.children.get(parentId) || [];
    if (!kids.length) return '';
    return `<ul>${kids.map((k) => {
      const vis = visible(k.id);
      if (!vis && !showLocked) return '';
      const t = termByNode.get(k.id);
      const sub = walk(k.id, depth + 1);
      const label = vis
        ? node(k, '', t ? ` <button class="mn-term" data-term="${esc(t.id)}">przypis</button>` : '')
        : `<span class="mnode locked" title="Odblokuje się po lekcji z tym pojęciem"><span class="mn-area">${esc(k.obszar || '')}</span>🔒 ${esc(k.nazwa)}</span>`;
      return `<li>${sub ? `<details ${depth < 1 ? 'open' : ''}><summary>${label}</summary>${sub}</details>` : label}</li>`;
    }).join('')}</ul>`;
  };
  return `<div class="mtree mtree-full">${walk(null, 0)}</div>`;
}
