# Część 2: IM i PC (+ budowanie pliku). Uruchamiać po gen_mistrz_pr_en.py (exec).
q("q-fn-m-29", ["IM-02-02"], [37], None,
  "Uzupełnij lukę: „Wyniki audytu regularnie wskazujące na niedostateczną sprawność IT” to ______, a „audyt zewnętrzny lub ocena dokonana przez konsultantów” to ______.",
  [("punkt zapalny; zdarzenie wyzwalające", True, "FW s. 37 wymienia regularne złe wyniki audytu wśród punktów zapalnych (objaw), a audyt zewnętrzny wśród zdarzeń wyzwalających (okazja).", None),
   ("zdarzenie wyzwalające; punkt zapalny", False, "Odwrotnie: powtarzający się objaw to punkt zapalny, a jednorazowe zdarzenie to zdarzenie wyzwalające.", "odwrocone"),
   ("punkt zapalny; punkt zapalny", False, "Audyt zewnętrzny jest na liście zdarzeń wyzwalających.", "zbyt-waskie"),
   ("czynnik środowiskowy; zdarzenie wyzwalające", False, "Czynniki środowiskowe to kontekst organizacji, a złe wyniki audytu są objawem, czyli punktem zapalnym.", "inna-kategoria")])

q("q-fn-m-30", ["IM-02-02", "IM-02-01"], [37], None,
  "Która sytuacja jest PUNKTEM ZAPALNYM, a NIE zdarzeniem wyzwalającym?",
  [("Nowy komendant wojewódzki", False, "Zmiana kluczowej osoby (nowy CEO, CIO) to zdarzenie wyzwalające.", "odwrocone"),
   ("Nowe wymagania regulacyjne", False, "To zdarzenie wyzwalające.", "odwrocone"),
   ("Złożone, niejasne modele operacyjne IT", True, "FW s. 37 wymienia złożone modele operacyjne IT wśród punktów zapalnych.", None),
   ("Połączenie dwóch komend w jedną", False, "Fuzje i przejęcia to zdarzenia wyzwalające.", "odwrocone")])

q("q-fn-m-31", ["IM-02-05", "IM-01-01"], [37, 38], "17",
  "Komenda organizuje szkolenia, komunikację i zaangażowanie liderów, żeby dyżurni zaakceptowali nowy system. Który komponent cyklu życia wdrożenia to opisuje?",
  [("Zarządzanie programem (krąg zewnętrzny)", False, "Zarządzanie programem planuje i prowadzi inicjatywę, ale ludźmi i kulturą zajmuje się krąg środkowy.", "prawda-nie-na-temat"),
   ("Aktywowanie zmiany (krąg środkowy)", True, "FW s. 37: ten komponent uwzględnia aspekty związane z zachowaniem i kulturą, czyli zyskanie zaangażowania interesariuszy.", None),
   ("Cykl życia ciągłego doskonalenia (krąg wewnętrzny)", False, "Ten krąg dotyczy samego doskonalenia aktywatorów.", "inna-kategoria"),
   ("Proces BAI06 – zarządzanie zmianami", False, "BAI06 to zmiany w IT (techniczne). Zmiany organizacyjne to BAI05, a pytanie dotyczy cyklu życia, nie procesu.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-32", ["IM-02-06"], [38], "17",
  "Zespół mapuje cele organizacji na cele związane z Informatyką i procesy, korzysta ze scenariuszy ryzyka i ocenia bieżący poziom zdolności procesów. Która to faza cyklu życia wdrożenia?",
  [("Faza 1 – Jakie są wyznaczniki?", False, "W fazie 1 rozpoznaje się punkty zapalne i zdarzenia wyzwalające.", "inna-kategoria"),
   ("Faza 3 – Dokąd zmierzamy?", False, "W fazie 3 określa się cel i analizuje luki.", "inna-kategoria"),
   ("Faza 2 – Gdzie jesteśmy teraz?", True, "FW s. 38: w fazie 2 określa się zakres przez mapowanie celów, korzysta ze scenariuszy ryzyka i ocenia stan obecny oraz zdolność procesów.", None),
   ("Faza 4 – Co trzeba zrobić?", False, "W fazie 4 definiuje się projekty i uzasadnienia biznesowe.", "inna-kategoria")], bloom="zastosowanie")

q("q-fn-m-33", ["IM-02-07", "IM-02-05"], [38], "17",
  "Dlaczego COBIT 5 zaleca dzielić duże wdrożenie na wiele iteracji cyklu życia?",
  [("Bo wdrożenie dłuższe niż pół roku traci dynamikę i poparcie", True, "FW s. 38 podaje to wprost.", None),
   ("Bo każda iteracja musi kończyć się certyfikacją ISO/IEC 15504", False, "Nie ma takiego wymogu.", "falsz"),
   ("Bo w jednej iteracji można wdrożyć tylko jedną domenę procesów", False, "Nie ma takiej reguły.", "falsz"),
   ("Bo uzasadnienie biznesowe jest ważne tylko przez jedną iterację", False, "Uzasadnienie jest stale aktualizowane, ale nie z tego wynika podział na iteracje.", "prawda-nie-na-temat")])

q("q-fn-m-34", ["IM-02-03", "IM-02-04"], [39], None,
  "Księgowa Mak pyta, czym ma być uzasadnienie biznesowe programu „Syrena”. Które zdanie jest zgodne z COBIT 5?",
  [("To jednorazowy dokument z fazy 4, zatwierdzany i archiwizowany", False, "FW s. 39: to nie jest jednorazowy, statyczny dokument.", "falsz"),
   ("Powinno ilościowo ujmować wszystkie możliwe korzyści, także trudne do osiągnięcia", False, "Odwrotnie: należy skupić się tylko na korzyściach realistycznych.", "odwrocone"),
   ("Przygotowuje je zespół IT, a sponsor biznesowy jest opcjonalny", False, "Inicjatywa musi mieć sponsora.", "falsz"),
   ("To dynamiczne narzędzie, stale aktualizowane, by widzieć opłacalność programu", True, "FW s. 39 podaje to wprost.", None)])

q("q-fn-m-35", ["PC-02-06", "PC-01-03"], [42, 45], "19",
  "Audytorka Lis ocenia proces: PA 1.1 = W (w znacznym stopniu), PA 2.1 = P (w pełni), PA 2.2 = P (w pełni). Jaki poziom zdolności osiągnął proces?",
  [("Poziom 2, bo oba atrybuty poziomu 2 są ocenione na P", False, "Poziom 2 wymaga także pełnego (P) osiągnięcia atrybutu niższego poziomu, a PA 1.1 ma tylko W.", "zbyt-waskie"),
   ("Poziom 1", True, "Do poziomu 1 wystarczy W dla PA 1.1. Poziom 2 wymaga P na poziomie 1 (s. 42).", None),
   ("Poziom 0, bo PA 1.1 nie jest P", False, "Do poziomu 1 wystarczy W.", "falsz"),
   ("Nie da się ustalić bez ocen PA 3.1 i PA 3.2", False, "Wyższe atrybuty nie są potrzebne do ustalenia poziomów 1–2.", "falsz")], bloom="zastosowanie")

q("q-fn-m-36", ["PC-02-06"], [42], "19",
  "Proces ma oceny: PA 1.1 = P, PA 2.1 = P, PA 2.2 = P, PA 3.1 = W, PA 3.2 = W, PA 4.1 = C. Jaki poziom zdolności osiągnął proces?",
  [("Poziom 2, bo atrybuty poziomu 3 nie są w pełni osiągnięte", False, "Dla bieżącego poziomu wystarczy W. Pełne P jest wymagane tylko dla niższych poziomów.", "odwrocone"),
   ("Poziom 4, bo PA 4.1 jest ocenione", False, "C (częściowo) nie wystarcza do żadnego poziomu.", "falsz"),
   ("Poziom 3", True, "Poziomy 1–2 są w pełni (P), a atrybuty poziomu 3 co najmniej w znacznym stopniu (W). FW s. 42 podaje przykład dla poziomu 3.", None),
   ("Poziom 1, bo dopiero PA 1.1 = P daje poziom 1", False, "Mylenie reguł: do poziomu 1 wystarczy W.", "falsz")], bloom="zastosowanie")

q("q-fn-m-37", ["PC-01-03"], [45], None,
  "Dowody wskazują, że atrybut jest osiągnięty w około 40%. Jaką ocenę dostaje w polskiej skali egzaminacyjnej N/C/W/P?",
  [("W – w znacznym stopniu", False, "W to przedział 50–85%.", "falsz"),
   ("P – bo w skali angielskiej P oznacza „Partially”", False, "Pułapka językowa: w polskiej skali egzaminacyjnej P to „w pełni” (85–100%), a „częściowo” to C.", "forma-podrecznikowa"),
   ("N – Nieosiągnięty", False, "N to 0–15%.", "falsz"),
   ("C – częściowo", True, "15–50% to ocena „częściowo” (FW s. 45: P = Partially w EN). Na egzaminie PL to C.", None)], bloom="zastosowanie")

q("q-fn-m-38", ["PC-01-01"], [43, 44], "20",
  "Proces miał w COBIT 4.1 poziom dojrzałości 1. Jaki wynik może dostać w modelu zdolności COBIT 5?",
  [("Zawsze poziom 1, bo skale są równoważne", False, "FW s. 43: porównanie jest trudne, bo różnią się zakres, ukierunkowanie i intencje.", "falsz"),
   ("Nawet poziom 0, jeśli proces nie osiąga swoich rezultatów", True, "FW s. 44, il. 20: proces z poziomem 1 w modelu dojrzałości może mieć 0 w ISO 15504, gdy nie osiąga rezultatów. Wyniki COBIT 5 są zwykle niższe.", None),
   ("Co najmniej poziom 2, bo COBIT 5 ocenia łagodniej", False, "Odwrotnie: wyniki są zwykle niższe.", "odwrocone"),
   ("Wyniku nie da się ustalić, bo COBIT 5 nie ma poziomu 0", False, "COBIT 5 ma poziom 0 (proces niekompletny).", "falsz")])

q("q-fn-m-39", ["PC-02-03", "PC-01-04"], [43], None,
  "Dlaczego opis procesu APO08 w przewodniku „Procesy umożliwiające” nie zawiera wymogu „proces jest mierzony i formalnie opisany”?",
  [("Bo pomiar wszystkich procesów jest zadaniem wyłącznie domeny MEA", False, "Pomiar procesu to atrybut PA 4.1, dostępny dla każdego procesu.", "falsz"),
   ("Bo APO08 jest procesem Ładu, a nie procesem Zarządzania", False, "APO08 należy do Zarządzania. Ta reguła dotyczy zresztą wszystkich procesów.", "falsz"),
   ("Bo opis procesu wg ISO/IEC 15504 nie zawiera cech poziomów 2–5", True, "FW s. 43: opis procesu zawiera tylko kroki potrzebne do osiągnięcia celu procesu. Cechy poziomów 2–5 są w modelu oceny.", None),
   ("Bo procesu APO08 w ogóle nie ocenia się w modelu zdolności", False, "Ocenić można każdy z 37 procesów.", "falsz")])

q("q-fn-m-40", ["PC-02-01", "PC-02-05"], [43, 45], None,
  "Który z poniższych celów NIE jest celem oceny zdolności procesów według COBIT 5?",
  [("Porównanie zdolności procesów przez organ Ładu i kierownictwo", False, "To jest cel (s. 45).", "falsz"),
   ("Wykazanie postępu przez bezpośrednie porównanie z ocenami dojrzałości COBIT 4.1", True, "FW s. 43 ostrzega, że takie porównanie jest trudne. To nie jest cel oceny.", None),
   ("Analiza luk i informacje do planowania udoskonaleń", False, "To jest cel (s. 45).", "falsz"),
   ("Określenie stanu obecnego i wymaganego, by wspierać decyzje inwestycyjne", False, "To jest cel (s. 45).", "falsz")])

# ---------------- budowanie ----------------
import json, itertools
OBSZAR = lambda syl: syl[0][:2]
out = []
for n, x in enumerate(Q):
    opts = x["opcje"]
    ci = [i for i, o in enumerate(opts) if o[1]]
    assert len(ci) == 1, x["id"]
    # równy rozkład liter: poprawna na pozycji n % 4 (rotacja zachowuje kolejność błędnych)
    target = n % 4
    corr = opts[ci[0]]; wrong = [o for o in opts if not o[1]]
    new = wrong[:target] + [corr] + wrong[target:]
    opcje = []
    for t, ok, w, pk in new:
        o = {"tekst": t, "poprawna": ok, "wyjasnienie": w}
        if not ok: o["pulapka"] = pk
        opcje.append(o)
    zr = [{"doc": "FW-PL", "strona": s} for s in x["strony"]]
    if x["il"]: zr[0]["ilustracja"] = x["il"]
    out.append({"id": x["id"], "typ": "egzamin", "sylabus": x["syl"], "bloom": x["bloom"], "trudnosc": 3,
                "final": "mistrz", "tresc": x["tresc"], "zrodlo": zr, "status": "oficjalne", "opcje": opcje})
json.dump({"_opis": "F3 – pytania mistrzowskie (METODYKA §15). Autor: sesja koordynująca §10–§15. Nie edytować bez ponownej weryfikacji z FW-PL.",
           "pytania": out}, open(OUT, "w"), ensure_ascii=False, indent=1)
from collections import Counter
print("pytań:", len(out), "obszary:", Counter(OBSZAR(x["sylabus"]) for x in out))
print("litery:", Counter("ABCD"[[o["poprawna"] for o in x["opcje"]].index(True)] for x in out))
longest = sum(1 for x in out if max(x["opcje"], key=lambda o: len(o["tekst"]))["poprawna"])
print("poprawna najdłuższa w:", longest, "/", len(out))
for x in out:
    L = sorted(((len(o["tekst"]), o["poprawna"]) for o in x["opcje"]), reverse=True)
    if L[0][1] and L[0][0] > 1.4 * L[1][0]: print("  wyraźnie najdłuższa:", x["id"], L[0][0], L[1][0])
