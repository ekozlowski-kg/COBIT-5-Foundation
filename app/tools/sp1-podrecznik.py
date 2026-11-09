#!/usr/bin/env python3
"""Kontrola podobieństwa pytań podręcznika (window.DECK) do Sample Paper 1 – te same progi co sp1-overlap.py.
Użycie (z katalogu app/, tylko lokalnie – wymaga content/sample-paper-1.local.json):  python3 -I tools/sp1-podrecznik.py"""
import os; os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
import sys,json,glob,re,difflib,importlib.util,unicodedata
sys.path.insert(0,'content/_narzedzia'); sys.path.insert(0,'podrecznik')
spec=importlib.util.spec_from_file_location('ov','content/_narzedzia/sp1-overlap.py'); src=open('content/_narzedzia/sp1-overlap.py').read()
ns={}; exec(src[:src.index('def main')] if 'def main' in src else src.split('\nfor ')[0], ns) if False else None
norm=None
exec(re.search(r'(def norm\(s\):.*?\n(?=\S))',src,re.S).group(1),globals())
import sprawdz
sp=json.load(open('content/sample-paper-1.local.json')); sp=sp.get('pytania',sp)
S=[(i+1,norm(q['tresc']),{norm(o['tekst']) for o in q['opcje']}) for i,q in enumerate(sp)]
err=warn=n=0
for f in sorted(glob.glob('podrecznik/[0-9k]*.html')):
    if '02b' in f: continue
    D=sprawdz.deck_of(f)
    for s in D['S']:
        q=s.get('quiz')
        if not q or s.get('sp1'): continue
        n+=1
        t=norm(re.sub('<[^>]+>',' ',q.get('tresc',''))); opts={norm(re.sub('<[^>]+>',' ',o['t'])) for o in q['opcje']}
        for nr,st,so in S:
            r=difflib.SequenceMatcher(None,t,st).ratio(); same=len(opts&so)
            if r>=0.75 or same>=2:
                err+=1; print('BŁĄD',f,nr,round(r,2),same,t[:80])
            elif r>=0.6 or same==1: warn+=1
print('pytania podręcznika:',n,'błędy:',err,'uwagi:',warn)
sys.exit(1 if err else 0)
