> **Dokument historyczny pierwszego, wybiórczego przeglądu.** Aktualną recenzję wszystkich 1711 pytań, redukcję do 240 i testy w aplikacji opisuje [pełna recenzja](RECENZJA-PELNEJ-PULI.md). Poniższe liczby i ograniczenia dotyczą stanu sprzed tej zmiany.

# Przegląd merytoryczny i wdrożone poprawki

Stan: 2026-11-09. Punktem wyjścia był commit `295b8b46ee039c356de07fdacebde41201f48bec`. Zakres: COBIT 5 Foundation według sylabusa PeopleCert v01.2 z kwietnia 2016. Nie zastępujemy go zakresem COBIT 2019.

## Poprawione ustalenia

| Ustalenie | Zmiana i uzasadnienie |
|---|---|
| F01 PRM i pomiary | Usunięto zakaz planowania i pomiarów w treści procesów. Ograniczenie dotyczące atrybutów powyżej poziomu 1 odnosi się do opisu przeznaczenia i rezultatów w PRM. DSS02.07 jest przykładem monitorowania i raportowania w konkretnym procesie; sam raport nie nadaje poziomu 4. Zmieniono lekcję 4.51, hasło wymiaru procesu, konteksty, slajd skrótu i pytania. |
| F02 Outcome a dokument | Rezultat procesu może obejmować artefakt, zmianę stanu lub spełnienie warunku. Produkt pracy może być dowodem rezultatu. Usunięto rozstrzygnięcie wyłącznie na podstawie fizycznej formy „dokument”. Doprecyzowano także, że odsetek udanych operacji nie jest automatycznie oceną całego PA 1.1. |
| F03 Wymiar zdolności | Obejmuje poziomy 0–5 i dziewięć PA 1.1–5.2. Specyficzne wskaźniki wykonania procesu wspierają PA 1.1; praktyki ogólne wspierają poziomy 2–5. Poprawiono lekcję, hasła, slajd i uzasadnienie odpowiedzi. |
| F04 Ocena dowodów | W `q-pck-42-2` dopisano pełne i systematyczne spełnienie wymagań PA 2.2 w całym zakresie. Jeden rejestr nie wystarczał do F. W `q-pck-21-z1` usunięto twierdzenie „pomiar liczbami to poziom 4”. Nowy scenariusz ćwiczy rozpoznanie niewystarczających dowodów. |
| F05 Interesariusze | Właściciele są jedną z grup interesariuszy. Relację delegowania ograniczono do kontekstu ilustracji 9, zamiast przedstawiać ją jako pełną definicję wszystkich działań interesariuszy. |
| F06 Organy a stanowiska | Wyjaśniono funkcję organu Ładu i kierownictwa wykonawczego. Polskie nazwy stanowisk nie wyznaczają automatycznie rozdziału odpowiedzialności COBIT. |
| U01 Decision making i role | Dodano podejmowanie decyzji do lekcji 2.26, hasła i slajdu struktur oraz nowe pytanie. Element był już wymieniony w metadanych sylabusa, ale wymagał wyjaśnienia w nauce. Zachowano sześć praktyk z Appendix G, w tym skład; lista sylabusa i lista frameworka nie są identycznie sformułowane. Uzupełniono pusty końcowy wiersz tabeli ról. |
| U02 Źródła | Dodano rejestr Enabling Processes, PAM i słownika ISO/IEC/IEEE 24765:2010. Interfejs oraz generator pokazują też lokalizator sekcji, bez zgadywania strony. Karty pojęć w podręczniku pokazują źródła inne niż FW-PL. |
| U03 Pokrycie | Dodano generowaną macierz: 64 tematy Foundation i 180 elementów zakresu, ze źródłami, lekcjami, slajdami i ID pytań. Wszystkie mają deklarowane powiązania. Status recenzji jest odrębny; tag tematu nie potwierdza każdego podwymagania. |
| U04 Wyniki nauki | Usunięto etykiety prognozujące zdanie. „Mój poziom” pokazuje umowny wskaźnik treningowy i osobno pierwsze zarejestrowane odpowiedzi MCQ bez pomocy. Wagi 15/21/7/7 pochodzą z pojedynczego SP1; waga egzaminów 60% jest założeniem aplikacji. |

Pierwsze odpowiedzi mają wspólne ID w ćwiczeniach, wygenerowanym podręczniku i egzaminach. Historia obejmuje też obejrzenie pytania oraz rezerwację arkusza: przerwane podejście nie przywraca go do puli nowych. Pomoc, testy wstępne i powtórki wykluczają wpis do osobnego wyniku. Wynik nie jest ustandaryzowanym pomiarem gotowości. Dawne slajdy bez ID i ekspozycje poza aplikacją pozostają ograniczeniem.

## Dodatki z przeglądu materiałów internetowych

[Katalog materiałów](BAZY-PYTAN-I-MATERIALY.md) obejmuje 37 pozycji, z czego 24 to banki, arkusze lub tropy do ich sprawdzenia. Nie oznacza to 24 niezależnych banków: są tam kopie SP1, programy szkoleń i oferty bez dostępu do treści. Katalog w aplikacji ma wyszukiwarkę i filtry.

Przeczytano automatyczną transkrypcję pełnego filmu ISACA (6:39). Warsztat rozróżnia pięć obszarów GEIT omawianych w filmie i pięć zasad COBIT 5. Analiza pozostałych nagrań i płatnych kursów dotyczy ich publicznych opisów i programów; nie odsłuchano pełnych kursów ani ich nie zakupiono.

Dodano autorski warsztat: potrzeby → cele → integracja praktyk → rezultaty i dowody → ocena. Łącznie bank wzrósł z 1703 do 1711 pozycji (+8 autorskich pytań, w tym Decision making). Część banku ma inne formy niż MCQ. Zewnętrzne pytania nie zostały zaimportowane; dostęp publiczny nie oznacza otwartej licencji.

## Podstawa merytoryczna

- [Sylabus PeopleCert v01.2](https://tiexames.com.br/COBIT5Foundation/anexos/COBIT5_Foundation_Syllabus.pdf): EN-02-12 i PC-01/02.
- [COBIT 5: Enabling Processes, publikacja ISACA udostępniona przez uczelnię](https://community.mis.temple.edu/mis5203sec951fall2025/files/2019/01/COBIT5-Ver2-enabling.pdf): rozdział 5 s. 25 oraz DSS02.07 s. 180.
- [ISO/IEC/IEEE 24765:2010, publikacja udostępniona przez uczelnię](https://cse.msu.edu/~cse435/Handouts/Standards/IEEE24765.pdf): s. 271, pojęcia process outcome i process reference model.
- [ISACA Self-assessment Guide](https://www.astarnet.jp/astarsaassv/doc/CGEIT/Reference/COBIT/COBIT-5--Selfassementguide.pdf): PA 2.2 oraz reguła poziomów. PAM jest dodatkowo wskazany w rejestrze bibliograficznym i sylabusie.
- [ISACA – film wprowadzający](https://www.youtube.com/watch?v=XPvc5sKIwWA): transkrypcja automatyczna, szczególnie 1:11–1:26 i 5:45–6:04.

## Walidacja i granice

- Walidator treści: 190 lekcji, 230 pojęć, 1711 pozycji; **0 błędów i 121 ostrzeżeń**, tyle samo ostrzeżeń co w punkcie wyjścia. Ostrzeżenia obejmują m.in. rozkład odpowiedzi, brak niektórych ćwiczeń i budżet dawnych dni nauki.
- Kontrola 44 wygenerowanych części i nowego warsztatu: brak błędów; zachowane ostrzeżenia redakcyjne. Warsztat: 7 pytań, rozkład kluczy A/B/C/D = 2/2/2/1, poprawna opcja najdłuższa w 29% pytań.
- Testy Node: **5/5** – pierwsza odpowiedź między trybami, pomoc, stara historia, eksport/import/reset, wykluczenie innych form z wyniku MCQ i lokalizatory źródeł.
- W przeglądarce: wyszukiwanie i filtr katalogu, odpowiedź i wyjaśnienia warsztatu, osobny wynik pierwszych prób, krótki egzamin i raport. Pytania bez odpowiedzi nie zwiększają licznika pierwszych odpowiedzi.
- Budowa `dist/` kończy się poprawnie i sprawdza brak prywatnych plików. Ponowna generacja podręcznika daje identyczne pliki. Regeneracja bez prywatnego SP1 zachowuje tylko dotychczasowe identyfikatory miejsc jego pytań, bez kopiowania treści.
- Kontrola podobieństwa do SP1 została **pominięta** przez narzędzie z powodu braku prywatnego `sample-paper-1.local.json`. Nie zgłaszamy jej jako zaliczonej.

Nie wykonano ręcznej certyfikacji każdego dystraktora w całym banku ani weryfikacji wszystkich polskich cytatów i stron na podstawie prywatnych FW-PL/Altkom/SP1. Dlatego repozytorium nie otrzymuje deklaracji „w całości zweryfikowane” lub „oficjalny kurs”. Macierz wskazuje miejsce dalszej recenzji.
