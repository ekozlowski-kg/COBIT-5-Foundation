"""Sprawdza układ map: zachodzenie węzłów, linie przez cudze węzły, miejsce na napisy.
Ten sam algorytm rozmieszczania napisów jest w podrecznik/mapa.html (funkcja layout)."""
import json, math, sys

W, H = 1120, 780
# Użycie: python3 tools/sprawdz-mape.py [podrecznik/mapa-dane.js | mapy.json]
_src = sys.argv[1] if len(sys.argv) > 1 else __import__('os').path.join(__import__('os').path.dirname(__file__), '..', 'podrecznik', 'mapa-dane.js')
_txt = open(_src, encoding='utf-8').read()
if _src.endswith('.js'):
    _txt = _txt[_txt.index('const M = ') + len('const M = '):_txt.index(';\n  return { C, N, M }')]
maps = json.loads(_txt)


def nodes_of(m):
    ns = [list(n) for n in m['nodes']]
    for x, ids in m.get('cols', []):
        for i, nid in enumerate(ids):
            ns.append([nid, x, 96 + i * 44, 172, 36])
    return ns


def inter(a, b, pad=0):
    return not (a[0] + a[2] + pad <= b[0] or b[0] + b[2] + pad <= a[0] or a[1] + a[3] + pad <= b[1] or b[1] + b[3] + pad <= a[1])


def seg_rect(p, q, r, pad=2):
    x0, y0, x1, y1 = r[0] - pad, r[1] - pad, r[0] + r[2] + pad, r[1] + r[3] + pad
    # Liang–Barsky
    dx, dy = q[0] - p[0], q[1] - p[1]
    t0, t1 = 0.0, 1.0
    for pp, qq in ((-dx, p[0] - x0), (dx, x1 - p[0]), (-dy, p[1] - y0), (dy, y1 - p[1])):
        if pp == 0:
            if qq < 0:
                return False
        else:
            t = qq / pp
            if pp < 0:
                t0 = max(t0, t)
            else:
                t1 = min(t1, t)
            if t0 > t1:
                return False
    return True


def geom(a, b, off):
    ca = (a[1] + a[3] / 2, a[2] + a[4] / 2); cb = (b[1] + b[3] / 2, b[2] + b[4] / 2)
    dx, dy = cb[0] - ca[0], cb[1] - ca[1]; L = math.hypot(dx, dy) or 1; ux, uy = dx / L, dy / L
    px, py = -uy * off, ux * off
    t = lambda r: min((r[3] / 2) / (abs(ux) or 1e-9), (r[4] / 2) / (abs(uy) or 1e-9))
    ta, tb = t(a), t(b) + 3
    s = (ca[0] + ux * ta + px, ca[1] + uy * ta + py); e = (cb[0] - ux * tb + px, cb[1] - uy * tb + py)
    return s, e, ux, uy


def label_size(text):
    lines = text.split('\n')
    return max(len(l) for l in lines) * 6.6 + 12, len(lines) * 15 + 4


def place_labels(ns, edges):
    rects = [(n[1], n[2], n[3], n[4]) for n in ns]
    by = {n[0]: n for n in ns}
    segs = []
    for e in edges:
        s, en, ux, uy = geom(by[e[0]], by[e[1]], e[3] if len(e) > 3 else 0)
        segs.append((s, en, ux, uy))
    placed, out, fails = [], [], []
    for i, e in enumerate(edges):
        text = e[2]
        if not text:
            out.append(None); continue
        s, en, ux, uy = segs[i]
        off = e[3] if len(e) > 3 else 0
        w, h = label_size(text)
        horiz = abs(ux) >= abs(uy)
        cands = []
        for t in (0.5, 0.42, 0.58, 0.34, 0.66, 0.26, 0.74):
            mx, my = s[0] + (en[0] - s[0]) * t, s[1] + (en[1] - s[1]) * t
            if horiz:
                above, below = (mx - w / 2, my - h - 4, w, h), (mx - w / 2, my + 4, w, h)
                cands += [below, above] if off > 0 else [above, below]
            else:
                cands += [(mx + 6, my - h / 2, w, h), (mx - w - 6, my - h / 2, w, h)]
        pick = None
        for c in cands:
            if c[0] < 2 or c[1] < 2 or c[0] + c[2] > W - 2 or c[1] + c[3] > H - 2:
                continue
            if any(inter(c, r, 3) for r in rects):
                continue
            if any(inter(c, p, 2) for p in placed):
                continue
            if any(j != i and seg_rect(segs[j][0], segs[j][1], c, 0) for j in range(len(segs))):
                continue
            pick = c; break
        if pick is None:
            fails.append(text.replace('\n', ' ')); pick = cands[0]
        placed.append(pick); out.append(pick)
    return out, fails


ok = True
for m in maps:
    ns = nodes_of(m)
    by = {n[0]: n for n in ns}
    probs = []
    for i in range(len(ns)):
        a = ns[i]
        if a[1] < 0 or a[2] < 0 or a[1] + a[3] > W or a[2] + a[4] > H:
            probs.append(f'węzeł poza obszarem: {a[0]}')
        for j in range(i + 1, len(ns)):
            if inter((a[1], a[2], a[3], a[4]), (ns[j][1], ns[j][2], ns[j][3], ns[j][4]), 6):
                probs.append(f'węzły nachodzą: {a[0]} / {ns[j][0]}')
    for e in m['edges']:
        s, en, _, _ = geom(by[e[0]], by[e[1]], e[3] if len(e) > 3 else 0)
        for n in ns:
            if n[0] in (e[0], e[1]):
                continue
            if seg_rect(s, en, (n[1], n[2], n[3], n[4])):
                probs.append(f'linia {e[0]}→{e[1]} przechodzi przez {n[0]}')
    _, fails = place_labels(ns, m['edges'])
    probs += [f'brak miejsca na napis: {f}' for f in fails]
    for p in m.get('pairs', []):
        if p[0] not in by or p[1] not in by:
            probs.append(f'para bez węzła: {p}')
    print(m['name'], '–', 'OK' if not probs else '')
    for p in probs:
        print('   ', p); ok = False
sys.exit(0 if ok else 1)
