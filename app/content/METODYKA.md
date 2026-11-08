# Metodyka nauki – COBIT 5 Foundation w 5 dni

Zatwierdzona przez użytkownika 2026-11-07. Ten plik jest kontraktem dla sesji **UI** (`app/` poza `content/`) i **Materiały** (`app/content/`). Nowe pola opisane w §8 trzeba przenieść do `SCHEMA.md` – robi to sesja UI.

## Dla kogo jest ten kurs (obowiązuje w całym dokumencie, od 2026-11-08)
- **Kursant:** osoba bez żadnego związku z IT, która **ledwo obsługuje komputer**. Nie zna żargonu, skrótów klawiszowych ani menu chowanych pod ikonami.
- **Cel:** kursant zdaje COBIT 5 Foundation **i zostaje mentorem**, czyli potrafi nauczyć tego innych (§12).
- **Zasada nadrzędna:** kurs prowadzi kursanta za rękę. Każdy ekran ma jedno oczywiste następne działanie. Gdy coś nie wychodzi, kurs cofa się do prostszego elementu (§10, §11) i nie dokłada nowego.
- Gdy jakaś reguła z §1–§9 jest sprzeczna z personą, wygrywa persona. Szczegóły interfejsu opisuje §13.

## 0. Zasada główna
Egzamin nie sprawdza, czy pamiętasz definicję. Sprawdza, czy **odróżnisz poprawną odpowiedź od trzech podobnych**. Dlatego:
- uczymy się przez **wydobywanie z pamięci** (odpowiadanie, odtwarzanie, klasyfikowanie), a nie przez ponowne czytanie;
- przy każdym pojęciu ćwiczymy pytanie **„gdzie to leży w COBIT 5?”**.

Uzasadnienia Sample Paper 1 pokazują stały wzór dystraktorów: zdanie jest **prawdziwe, ale z innej kategorii**. Na przykład „Dobre praktyki są wymiarem aktywatora, a nie…”, „Jakość kontekstowa jest celem aktywatora, a nie…”, „To jest punkt zapalny, a nie czynnik środowiskowy”.

## 1. Cykl jednostki (~15 min)
| # | Krok | Realizacja |
|---|---|---|
| 1 | **Zgadnij** | 1–2 pytania przed pierwszym slajdem (`zgadnij` we frontmatter). Bez oceny, z komunikatem „Pomyłka teraz pomaga zapamiętać”. Wynik zapisany jako `pretest`, nie liczy się do opanowania. |
| 2 | **Zjawisko** | Slajdy `start` → `rozklad` → `przyklad` (min. 3 z 4 kontekstów przy ważnych pojęciach). |
| 3 | **Nazwa** | Slajd `pojecie`: termin egzaminacyjny PL + EN + `:::pulapka`, jeśli podręcznik używa innej nazwy. |
| 4 | **Gdzie to leży?** | Slajd `mapa`: miejsce pojęcia na mapie COBIT 5 (§3). Po nim jedno pytanie typu `mapa`. |
| 5 | **Własnymi słowami** | Slajd `wlasne-slowa`: pole tekstowe, potem wzorzec i samoocena „Mam to / Częściowo / Nie mam”. „Częściowo” i „Nie mam” wysyłają hasło do powtórek. Odpowiedź trafia do Notatek. |
| 6 | **Sprawdź** | Ćwiczenia lekcji (`cwiczenia`) + **1–2 pytania z wcześniejszych lekcji**, które UI dobiera automatycznie (najpierw zaległe w powtórkach, potem najsłabsze). |

## 2. Rytm dnia (~4 h) – widok „Plan dnia”
| Czas | Blok | Zawartość |
|---|---|---|
| 20 min | **Rozgrzewka** | Zaległe powtórki + 5 min drillu pułapek terminologicznych. |
| 50 min | **Blok A** | ~⅓ jednostek dnia, na końcu **mini-test** (5 pytań z bloku A). |
| 10 min | przerwa | |
| 50 min | **Blok B** | Kolejna ⅓, mini-test z bloków A i B (6 pytań). |
| 10 min | przerwa | |
| 50 min | **Blok C** | Ostatnia ⅓, mini-test z bloków A, B i C (7 pytań). |
| 30 min | **Test dnia** | 20 pytań na czas (48 s/pyt., jak na egzaminie): 75% z bieżącego dnia, 25% z dni wcześniejszych, potem analiza błędów. |
| 10 min, wieczorem | **Pusta kartka** | Odtworzenie schematu dnia z pamięci (`pustaKartka` w `syllabus.json`). Najpierw próba, potem wzorzec i samoocena. |

UI dzieli jednostki dnia na 3 bloki w kolejności `lekcja`. Licznik czasu bloku i przerwy jest pomocniczy (można pominąć). Nowa treść nie pojawia się w dniu egzaminu.

## 3. Mapa COBIT 5 („Gdzie to leży?”)
Plik `content/mapa-cobit.json` (§8.1) opisuje taksonomię: zasady, aktywatory, wymiary aktywatora, cele aktywatora, wskaźniki, kaskadę celów, Ład/Zarządzanie i domeny, cykl życia wdrożenia (pierścienie, fazy), czynniki wdrożenia (czynniki środowiskowe, punkty zapalne, zdarzenia wyzwalające), model zdolności (poziomy, atrybuty, skala ocen) i przewodniki.

Każde hasło `terms/*.json` z tej taksonomii ma pole `mapa` = id węzła. Na tej podstawie:
- UI **generuje automatycznie** pytania `mapa`: „Gdzie w COBIT 5 leży: *Jakość kontekstowa*?”. Poprawna odpowiedź to węzeł hasła, dystraktorami są 3 węzły rodzeństwa albo kuzyni z tego samego obszaru.
- Widok **„Mapa”** pokazuje całą taksonomię. Węzły odblokowują się po ukończeniu lekcji, a kliknięcie hasła otwiera przypis.
- Materiały mogą też dopisywać ręczne pytania `mapa` z własnym wyjaśnieniem (§8.4).

## 4. Techniki według rodzaju wiedzy
| Rodzaj | Przykłady | Technika w aplikacji |
|---|---|---|
| Listy i struktury | 5 zasad, 7 aktywatorów, 5 domen / 37 procesów, 7 faz, poziomy 0–5, 9 atrybutów | `pustaKartka`, ćwiczenie `kolejnosc` (§8.4), skojarzenia w `:::uproszczenie` (zawsze oznaczone jako autorskie) |
| Pary do rozróżnienia | Ład/Zarządzanie, wiodące/opóźnione, punkty zapalne/zdarzenia wyzwalające, zasady/polityki, jakość wewnętrzna/kontekstowa | slajd `porownanie` + `klasyfikacja` „który z dwóch?” |
| Terminologia egzaminacyjna PL | Ład, Aktywator, N/C/W/P | drill codziennie (rozgrzewka) |
| Zastosowanie | scenariusze | `studium` w 4 kontekstach |

## 5. Wagi obszarów
W Sample Paper 1 rozkład wynosi **EN 21 · PR 15 · IM 7 · PC 7**. W `syllabus.json` zapisujemy `egzamin.wagi`. Skutki:
- symulator losuje pytania w tych proporcjach;
- Materiały przygotowują najwięcej pytań do EN, celem jest ≥ 40% puli;
- pulpit pokazuje opanowanie obszaru ważone udziałem w egzaminie.

## 6. Strategia egzaminacyjna (ćwiczona od dnia 2)
Krótkie jednostki modułu `EX`, po jednej dziennie w dniach 2–4:
1. **Słowa kluczowe** w pytaniu: NIE, NAJLEPIEJ, GŁÓWNY, ZAWSZE.
2. **Kategoria odpowiedzi**: eliminuj zdania prawdziwe, ale z innej kategorii.
3. **Tempo i oznaczanie**: 48 s na pytanie, oznacz trudne i wróć do nich, nie zostawiaj pustych odpowiedzi; „wszystkie powyższe” bywa poprawne.

Każda **błędna** opcja w nowych pytaniach `egzamin` i `studium` ma pole `pulapka` (§8.4). Po teście dnia i symulacji UI pokazuje, które rodzaje pułapek kosztowały najwięcej punktów.

## 7. Progi gotowości i naprawa
`syllabus.json` → `egzamin.progi`:
- `testDnia`: 70 (%) – poniżej tego następnego dnia blok A zaczyna się od **jednostek naprawczych**, czyli lekcji z największą liczbą błędów;
- `symulacja`: 35 (/50), `liczbaSymulacji`: 2;
- `obszar`: 60 (%) – każdy z PR/EN/IM/PC osobno, liczony w symulacjach;
- `drill`: 90 (%) – ostatnia pełna seria drillu pułapek;
- `powtorzonaPomylka`: 2 – po 2 pomyłkach z tym samym tagiem pojawia się **inne wyjaśnienie** (`warianty` hasła albo przykład z innego kontekstu), a nie to samo pytanie.

Pulpit pokazuje listę kontrolną „Gotowość do egzaminu” z tymi progami.

**Sample Paper 1 jest zablokowany do dnia 5.** To jedyny niezależny pomiar na nieznanych pytaniach. Wcześniejsze otwarcie wymaga potwierdzenia: „To jedyny niezależny pomiar – po obejrzeniu pytań wynik będzie zawyżony”. Treść kursu może cytować uzasadnienia SP1 jako źródło (`SP1`), ale **nie może zawierać jego pytań**.

## 8. Nowe pola kontraktu (do przeniesienia do SCHEMA.md)

### 8.1 `content/mapa-cobit.json`
```json
{ "wezly": [
  { "id": "zasady", "nazwa": "Pięć zasad COBIT 5", "en": "Principles", "rodzic": null, "obszar": "PR" },
  { "id": "aktywatory", "nazwa": "Siedem aktywatorów", "en": "Enablers", "rodzic": null, "obszar": "EN" },
  { "id": "wymiary-aktywatora", "nazwa": "Wymiary aktywatora", "en": "Enabler dimensions", "rodzic": "model-aktywatora", "obszar": "EN" }
] }
```
Węzeł: `id`, `nazwa` (egzamin PL), `en`, `rodzic` (id lub `null`), `obszar` ∈ PR/EN/IM/PC, opcjonalnie `opis` (1 zdanie) i `kolejnosc` (liczba, gdy elementy tworzą sekwencję, np. fazy 1–7).

### 8.2 `terms/<id>.json`
- `mapa`: id węzła z `mapa-cobit.json` (opcjonalne, wymagane dla haseł należących do taksonomii).

### 8.3 Lekcje (`lessons/**.md`)
- Frontmatter: `zgadnij: [id-pytań]` (1–2 pytania typu `rozpoznanie` albo `egzamin`).
- Nowe typy slajdów:
  - `mapa`: slajd z pozycją pojęcia. Zawiera blok `:::mapa <id-węzła>`, a UI rysuje fragment taksonomii z podświetleniem.
  - `wlasne-slowa`: blok `:::wlasne-slowa` … `:::`. Pierwsza linia to polecenie, potem separator `???`, a pod nim wzorzec odpowiedzi (Markdown).
- Moduł `EX` (strategia egzaminacyjna) z polem `dzien` 2–4.

### 8.4 Pytania (`questions/*.json`)
- W `egzamin` i `studium` każda **błędna** opcja ma `pulapka`, jedną z wartości:
  - `inna-kategoria` – prawdziwe, ale z innej kategorii;
  - `zbyt-waskie` – tylko część poprawnej odpowiedzi;
  - `forma-podrecznikowa` – nazwa z podręcznika zamiast egzaminacyjnej;
  - `prawda-nie-na-temat` – prawdziwe, ale nie odpowiada na pytanie;
  - `falsz` – zwyczajnie nieprawdziwe;
  - `odwrocone` – zamienione pojęcia, np. wiodące ↔ opóźnione.
- Nowy typ `mapa`: `{ "typ": "mapa", "element": "Jakość kontekstowa", "poprawny": "cele-aktywatora", "dystraktory": ["wymiary-aktywatora", "zasady", "wskazniki"], "wyjasnienie": "…" }`.
- Nowy typ `kolejnosc`: `{ "typ": "kolejnosc", "elementy": ["…", "…"], "wyjasnienie": "…" }`. Elementy w poprawnej kolejności, UI je miesza.
- Opcjonalne `pretest: true` oznacza pytanie przeznaczone do kroku „Zgadnij”.

### 8.5 `syllabus.json`
- `egzamin.wagi`: `{ "PR": 15, "EN": 21, "IM": 7, "PC": 7 }`, źródło: rozkład SP1.
- `egzamin.progi`: jak w §7.
- `dni[].pustaKartka`: `{ "tytul": "Kaskada celów", "polecenie": "…", "wzorzec": "Markdown/tabela" }`. Jeśli `dni` nie istnieje, UI może czytać to z pola `pustaKartka` per dzień w `C.DAYS`. Nazwę pola uzgadniają sesje.

## 9. Podział pracy
- **UI**:
  - przeniesienie §8 do `SCHEMA.md` i walidacja;
  - krok „Zgadnij”, slajdy `mapa` i `wlasne-slowa`, typy `mapa` i `kolejnosc`, generator pytań `mapa`;
  - widoki „Mapa” i „Plan dnia” (bloki, mini-testy, test dnia, pusta kartka);
  - dobór pytań z wcześniejszych lekcji, progi gotowości, jednostki naprawcze, inne wyjaśnienie po powtórzonej pomyłce;
  - blokada SP1, analiza błędów według `pulapka`, losowanie według wag.
- **Materiały**:
  - `mapa-cobit.json` (jako pierwsze, bo UI tego potrzebuje);
  - pole `mapa` w hasłach;
  - `zgadnij`, slajdy `mapa` i `wlasne-slowa` w 13 istniejących lekcjach i we wszystkich nowych;
  - `pulapka` w opcjach pytań;
  - `wagi`, `progi` i `pustaKartka` w `syllabus.json`;
  - moduł `EX` (3 jednostki);
  - przewaga pytań EN.

## 10. Od zera do biegłego (zatwierdzone 2026-11-08)
Słowa użytkownika: kurs ma „prowadzić za rączkę chłopa ze stodoły do biegłego w zakresie COBIT”. Ma być przyjazny dla laika.

**Zasada zera:** kurs nie zakłada żadnej wiedzy wejściowej, ani o IT, ani o zarządzaniu, ani o języku korporacyjnym. Każde słowo spoza codziennej polszczyzny (IT, proces biznesowy, portfel, audyt, SLA, interesariusz…) ma wyjaśnienie „po ludzku” przy **pierwszym** użyciu: przypis `[[id]]` albo nawias. Żaden slajd nie używa pojęcia, które nie zostało wcześniej wyjaśnione.

### 10.1 Drabinka opanowania
Każde pojęcie przechodzi 5 szczebli. Kolejne szczeble realizują istniejące kroki cyklu z §1:

| Szczebel | Co umiesz | Gdzie w kursie |
|---|---|---|
| 1. Słyszę | wiesz, że coś istnieje, i umiesz to nazwać po ludzku | `poLudzku`, Zjawisko |
| 2. Rozumiem | wyjaśniasz to na scenie z historii przewodniej | przykład z historii, Własnymi słowami |
| 3. Rozróżniam | odróżniasz to od podobnych pojęć | `porownanie`, `klasyfikacja`, Gdzie to leży? |
| 4. Stosuję | rozwiązujesz scenariusz | `studium`, rozwiązany przykład |
| 5. Biegły | odpowiadasz na czas na pytanie egzaminacyjne i znasz pułapki nazw | `egzamin`, test dnia, symulacje |

### 10.2 Tryb laika i stopniowe odsłanianie (UI)
- Preferencja `tryb` przyjmuje wartość `laik` (domyślna) albo `pelny`. Przełącznik jest w ustawieniach. Od dnia 2 UI raz proponuje przejście na tryb `pelny` (komunikat „Dobrze Ci idzie – pokazać więcej szczegółów?”), ale niczego nie zmienia samo.
- W trybie `laik`:
  - sidebar pokazuje kolejno `poLudzku`, nazwę egzaminacyjną i `poziom1`;
  - `poziom2`, `poziom3`, `plPodrecznik`, EN i `plInne` są zwinięte pod „Więcej (inne nazwy, szczegóły)”;
  - odznaka pułapki jest widoczna zawsze, bo to nazwa z egzaminu jest najważniejsza, ale jej opis rozwija się dopiero po kliknięciu.
- Konteksty: na slajdzie z kilkoma blokami `:::kontekst` widać tylko **pierwszy**. Pozostałe ukrywa przycisk „Pokaż inny przykład”. Gdy pojęcie ma ≥ 2 pomyłki (`powtorzonaPomylka`), UI rozwija automatycznie kolejny kontekst.
- Przełącznik poziomów na slajdzie: „prosto” domyślnie, „dokładniej” na kliknięcie. „Ekspercko” w trybie `laik` jest ukryte.

### 10.3 Historia przewodnia (Materiały)
- Plik `content/historia.md` jest „biblią” historii: postacie, oś fabularna na 5 dni i lista scen przypisanych do lekcji.
- Akcja dzieje się w fikcyjnej komendzie PSP w fikcyjnym mieście, z wyraźnym oznaczeniem, że to przykład autorski. Nazwy jednostki i miasta nie mogą się pokrywać z żadną realną komendą.
- Postacie z rolami odpowiadającymi pojęciom COBIT:
  - komendant – Ład, ocena, kierowanie, monitorowanie;
  - naczelnik wydziału informatyki – zarządzanie;
  - audytor wewnętrzny – monitorowanie i ocena zdolności;
  - dyspozytorzy i strażacy – użytkownicy, interesariusze wewnętrzni;
  - mieszkańcy, komenda wojewódzka, dostawca systemu – interesariusze zewnętrzni.
- Oś fabularna, propozycja:
  - **D1**: nowy system powiadamiania zawodzi i nikt nie wie, kto decyduje (interesariusze, wartość, ryzyko, Ład kontra zarządzanie, kaskada celów);
  - **D2**: komenda porządkuje zasady i procesy (5 zasad, model aktywatora, 37 procesów);
  - **D3**: ludzie, struktury, informacja, kultura (7 aktywatorów, RACI);
  - **D4**: wdrożenie, czyli punkt zapalny (awaria) i zdarzenie wyzwalające (np. kontrola, nowy komendant), cykl życia, potem audytor ocenia zdolność procesów;
  - **D5**: podsumowanie, czyli „co komenda zrobiła dobrze”.
- W każdej lekcji **pierwszy** blok `:::kontekst psp` jest sceną z historii, a jego pierwsza linia to tytuł sceny. Pozostałe konteksty (`zycie`, `firma`, `admin`) zostają jako „inny przykład”.

### 10.4 Tłumacz z korporacyjnego (Materiały + UI)
- `terms/<id>.json`, nowe pole **`poLudzku`** (wymagane): jedno zdanie, do ~20 słów, słownictwo codzienne, bez innych terminów COBIT. Przykład: „Aktywator – wszystko, co pomaga, żeby informatyka w organizacji działała dobrze: ludzie, zasady, narzędzia, informacje.”
- Nowe pole **`skadNazwa`** (opcjonalne): dlaczego nazwa brzmi dziwnie, np. kalka z angielskiego albo inne tłumaczenie w podręczniku.
- Slajd `pojecie` pokazuje najpierw `poLudzku`, a dopiero potem nazwę egzaminacyjną.
- Nowa lekcja **`m0/00-zanim-zaczniesz`** (dzień 1, przed interesariuszem) wyjaśnia od zera, czym jest organizacja, cel organizacji, informatyka (IT) w organizacji, kto za co płaci i odpowiada, a także po co komuś „ramy” typu COBIT.
- Nowa lekcja **`m0/09-slowa-wytrychy`**: ściąga z ok. 15 korporacyjnych słów i ich ludzkich odpowiedników. Każde słowo ma przypis. Lekcja jest dostępna od dnia 1 i UI linkuje do niej z pulpitu.

### 10.5 Rozwiązany przykład przed pytaniem (Materiały + UI)
- Nowy typ slajdu **`rozwiazany`**, blok `:::rozwiazany` … `:::`:
  - pierwsza część to treść pytania z 4 opcjami (lista Markdown);
  - po niej idą kroki rozdzielone linią `+++`: (1) co dokładnie jest pytane i jakie jest słowo-klucz, (2) do jakiej kategorii COBIT należy pytanie, (3) eliminacja: każda błędna opcja z nazwą pułapki z §8.4, (4) odpowiedź i jedno zdanie „dlaczego”.
- UI pokazuje pytanie, a potem kroki pojedynczo przyciskiem „Następny krok”.
- Każda lekcja, która ma pytania `egzamin` albo `studium`, ma **jeden** slajd `rozwiazany` przed krokiem „Sprawdź”. Pytanie w przykładzie jest autorskie, ale podobne do pytań, które padają w „Sprawdź”.
- Zakaz SP1 obowiązuje także tutaj. `sp1-overlap.py` ma skanować również bloki `:::rozwiazany` w lekcjach.
- Lekcja **„Jak czytać pytanie egzaminacyjne”** (słowa-klucze, prawda nie na temat, eliminacja) przechodzi na **dzień 1** jako krótka jednostka EX na końcu dnia. Obecne EX 9.1 zostaje w dniu 2 jako pogłębienie.

### 10.6 Podział pracy
- **UI**:
  - przeniesienie §10 do `SCHEMA.md`;
  - walidacja w `--check`: ostrzeżenie przy braku `poLudzku`, przy lekcji z pytaniami `egzamin`/`studium` bez slajdu `rozwiazany` oraz przy niepoprawnym bloku `:::rozwiazany`;
  - preferencja `tryb` i zachowanie sidebaru w trybie `laik`;
  - zwijanie kontekstów;
  - slajd `rozwiazany` z odsłanianiem kroków;
  - link do „Słów-wytrychów” na pulpicie;
  - wyświetlanie `poLudzku` i `skadNazwa`.
- **Materiały**:
  - `historia.md` i sceny jako pierwszy `:::kontekst psp` we wszystkich lekcjach;
  - `poLudzku` we wszystkich hasłach i `skadNazwa` przy hasłach-pułapkach;
  - lekcje `m0/00-zanim-zaczniesz` i `m0/09-slowa-wytrychy`;
  - przegląd wszystkich lekcji pod kątem zasady zera;
  - slajd `rozwiazany` w lekcjach z pytaniami;
  - jednostka EX „Jak czytać pytanie” na dzień 1;
  - rozszerzenie `sp1-overlap.py` o bloki `:::rozwiazany`.

## 11. Prowadzenie za rękę: pełna ścieżka laik → biegły (zatwierdzone 2026-11-08)
§10 upraszcza język. §11 ustala, **w jakiej kolejności, z jaką pomocą i do jakiego poziomu** prowadzimy osobę bez żadnego związku z IT.

### 11.0 Cel końcowy: kim jest „biegły”
Biegły to osoba, która spełnia **wszystkie cztery** warunki. Każdy z nich da się sprawdzić w aplikacji:
1. **Zdaje**: ≥ 35/50 w 2 symulacjach i w Sample Paper 1 (dzień 5).
2. **Wyjaśnia**: każde z ok. 25 pojęć rdzenia (`syllabus.json` → `rdzen`) tłumaczy laikowi w minutę, bez żargonu (§11.8).
3. **Stosuje**: opisuje własną organizację językiem COBIT 5 (projekt końcowy, §11.8).
4. **Nazywa**: używa nazw z egzaminu PL i rozpoznaje warianty z podręcznika oraz EN (drill ≥ 90%).

Uczciwie: Foundation sprawdza **wiedzę i rozumienie** (Bloom 1–2), a nie umiejętność wdrażania. Na to jest osobny certyfikat COBIT 5 Implementation. 20 godzin od zera wystarczy na Foundation, ale tylko przy codziennych powtórkach. Pulpit mówi to wprost.

### 11.1 Kolejność bez skoków (graf wymagań)
- Frontmatter lekcji: `wprowadza: [id-haseł]` (pojęcia, które lekcja **definiuje**) i `wymaga: [id-lekcji]`.
- Reguła: hasło `[[id]]` użyte w lekcji musi być wprowadzone w tej lub we wcześniejszej lekcji (porządek `dzien` → `lekcja`). Wyjątkiem jest zapowiedź oznaczona `[[id|…]]` w zdaniu typu „poznasz to w lekcji X”.
- Limity obciążenia:
  - **≤ 4 nowe pojęcia na lekcję**;
  - **≤ 1 nowe pojęcie na slajd** (slajd `pojecie`).
  Dziś limit przekraczają: `pr/03` (6), `pr/09` (6), `pr/01` (5) i `m0/07` (5). Te lekcje trzeba podzielić albo część pojęć przenieść.
- Na mapie COBIT węzeł-rodzic jest wprowadzany przed dziećmi.
- **Lista jako jedno pojęcie** (decyzja 2026-11-08). Lekcja ze slajdem `:::mapa <rodzic>` (stały układ listy, §11.6) może wprowadzić rodzica i jego dzieci, np. 7 faz, poziomy 0–5 czy 4 wymiary aktywatora, jako **jedno** pojęcie w limicie 4. Dzieci zapisuje w polu **`wprowadzaListe: [id…]`**, a nie w `wprowadza`. Warunek z SD („nie wystarczy wymienić nazw, każdy element musi zostać osobno wyjaśniony”): **każde dziecko ma na slajdzie listy (albo na slajdzie bezpośrednio po nim)**:
  - przypis `[[id]]`;
  - **co najmniej jedno zdanie wyjaśnienia po ludzku**;
  - **przykład**.
  Może to być wiersz tabeli „element – po ludzku – przykład” albo blok `:::atom`. Drabina `:::glebiej` jest zalecana. Pytania skrajne i powtórki działają dla każdego atomu osobno.

### 11.2 Rusztowanie, które się wycofuje
Laik dostaje dużo pomocy na początku i coraz mniej z każdym dniem:

| Dzień | Rozwiązany przykład (§10.5) | Podpowiedzi w ćwiczeniach |
|---|---|---|
| 1 | pełny, kroki odsłaniane po kolei | dostępne |
| 2 | „Twoja kolej”: przed każdym krokiem pytanie „Jak myślisz?” i przycisk „Mam swoją odpowiedź”, dopiero potem krok | dostępne |
| 3 | zwinięty pod „Potrzebujesz przykładu?”, pojawia się po pierwszej próbie | dostępne |
| 4–5 | zwinięty | ukryte domyślnie, z możliwością włączenia; test dnia i symulacje nigdy nie mają podpowiedzi |

Podpowiedzi są stopniowane i UI generuje je samo, bez dodatkowej treści:
1. „Gdzie to leży?” pokazuje temat sylabusa i węzeł mapy.
2. „Odrzuć jedną” wyszarza błędną opcję z `pulapka` = `falsz`, a jeśli takiej nie ma, z `prawda-nie-na-temat`.
3. „Pokaż rozwiązany przykład” prowadzi do slajdu `rozwiazany` lekcji.

Odpowiedź po podpowiedzi **nie liczy się jako opanowanie**: pojęcie zostaje najwyżej na szczeblu 3 i wraca w powtórkach.

### 11.3 Opanowanie, zanim pójdziesz dalej
- Lekcja jest **opanowana**, gdy w „Sprawdź” są ≥ 2 z 3 poprawnych odpowiedzi bez podpowiedzi.
- Jeśli nie, od razu rusza **pętla naprawcza** (ok. 3 min): UI rozwija kolejny kontekst i zadaje 2 pytania zapasowe (`zapas: [id-pytań]` we frontmatter). Potem uczący się idzie dalej niezależnie od wyniku, a lekcja trafia do jednostek naprawczych następnego dnia (§7).
- Miękka bramka: jeśli lekcja z `wymaga` nie jest opanowana, UI pokazuje baner „Ta lekcja opiera się na X – 3 minuty powtórki?”. Uczący się może go pominąć.
- Materiały: każda lekcja z pytaniami ma 3 pytania w `cwiczenia` i ≥ 2 w `zapas`.

### 11.4 Pewność odpowiedzi
- W ćwiczeniach i teście dnia uczący się przed sprawdzeniem jednym kliknięciem wybiera: **Pewny / Raczej / Strzelam**. Symulacje tego nie mają, bo mają być realistyczne.
- Pomyłka przy „Pewny” to najcenniejszy sygnał. Hasło idzie na początek powtórek i od razu dostaje **inne** wyjaśnienie (wariant albo inny kontekst).
- Trafienie przy „Strzelam” nie liczy się jako opanowanie.
- Pulpit pokazuje **kalibrację**: jaki odsetek odpowiedzi „Pewny” był poprawny. Cel przed egzaminem: ≥ 85%.

### 11.5 Głos przewodnika
- Frontmatter `cel`: 1–2 zdania „Potrafię…” w języku ucznia, np. „Potrafię powiedzieć, kto w komendzie decyduje, a kto wykonuje”. UI pokazuje je na slajdzie startowym, a na końcu jako samoocenę.
- Ostatni slajd lekcji: „Co już umiesz” i jedno zdanie „Co dalej i dlaczego”, czyli most do następnej lekcji.
- **Prosty język** w tekście autorskim:
  - druga osoba, strona czynna;
  - zdania ≤ 20 słów;
  - jak najmniej rzeczowników odczasownikowych.
  `--check` ostrzega, gdy zdanie ma > 25 słów. Nie dotyczy to cytatów `:::zrodlo`.
- Informacja zwrotna nigdy nie brzmi „Błąd”. UI układa ją według rodzaju pułapki w 4 krokach: co wybrałeś → dlaczego to kusi → jak to odróżnić → jedno zdanie do zapamiętania. Na każdy z 6 rodzajów `pulapka` jest szablon.
- Opcjonalnie przycisk „Przeczytaj mi” (`speechSynthesis`, głos pl-PL) na slajdach.

### 11.6 Obraz do każdej listy
Każda lista do zapamiętania ma swój slajd `mapa` (§8.3). Dotyczy to: 5 zasad, 7 aktywatorów, 4 wymiarów, kaskady celów, 5 domen, 7 faz × 3 pierścieni, poziomów 0–5 i 9 atrybutów. UI rysuje każdą listę **zawsze w tym samym układzie i kolejności**, żeby działała pamięć przestrzenna („aktywatory: informacja jest piąta, na dole po lewej”).

### 11.7 Dzienne punkty kontrolne
`syllabus.json` → `dni[].potrafie` to 5–8 zdań „Potrafię…” na dzień. Wieczorem, razem z pustą kartką, uczący się zaznacza każde jako „Tak / Nie wiem / Nie”. Odpowiedzi „Nie” trafiają do jednostek naprawczych następnego dnia.

### 11.8 Sprawdzian biegłości
- **„Wytłumacz w minutę”** (wieczór dnia 4 i dzień 5): 5 losowych pojęć z `rdzen`. Uczący się pisze albo mówi na głos, potem widzi wzorzec (`poLudzku` + `poziom1` + scena z historii) i robi samoocenę. Mechanizm jest ten sam co w `wlasne-slowa`.
- **Projekt końcowy „Moja komenda w COBIT 5”** (dzień 5, 30 min, po symulacjach) to formularz z 8 pól:
  1. 3 interesariusze i ich potrzeby;
  2. cel organizacji → cel związany z Informatyką → cel aktywatora;
  3. aktywator, który najbardziej kuleje;
  4. 2 procesy (nazwa egzaminacyjna i domena);
  5. punkt zapalny;
  6. zdarzenie wyzwalające;
  7. faza cyklu życia, w której jesteś;
  8. poziom zdolności jednego procesu z uzasadnieniem (skala N/C/W/P).
  Wzorcem jest projekt wypełniony dla komendy z historii przewodniej. Wynik zapisuje się w Notatkach i trafia do eksportu.

### 11.9 Realizm i ścieżka ratunkowa
- Frontmatter `priorytet`:
  - 1 – rdzeń egzaminu;
  - 2 – ważne;
  - 3 – pogłębienie.
- Gdy test dnia wyjdzie < 50% albo dzień nie zostanie skończony, UI proponuje **tryb „minimum do zdania”**:
  - następnego dnia najpierw jednostki naprawcze i lekcje z `priorytet: 1`, przy czym EN i PR mają pierwszeństwo, bo to 36 z 50 pytań;
  - lekcje z `priorytet: 3` wypadają z planu, ale zostają dostępne.
- Zmęczenie: po 2 kolejnych mini-testach < 60% UI proponuje 15 minut przerwy albo powtórkę zamiast nowej treści.

### 11.10 Podział pracy i kolejność wdrożenia
Kolejność wdrożenia: (a) graf wymagań, limity i prosty język; (b) podpowiedzi i pewność; (c) pętla naprawcza; (d) cele i „Potrafię”; (e) rdzeń i projekt końcowy; (f) priorytety i ścieżka ratunkowa.

- **UI**:
  - przeniesienie §11 do `SCHEMA.md`;
  - nowe ostrzeżenia `--check`:
    - hasło użyte przed wprowadzeniem;
    - > 4 nowe pojęcia na lekcję;
    - zdanie > 25 słów;
    - brak `cel`;
    - brak `zapas`;
    - brak `priorytet`;
  - wycofywanie rusztowania według dnia;
  - 3 stopnie podpowiedzi;
  - przyciski pewności i kalibracja na pulpicie;
  - pętla naprawcza i miękka bramka;
  - informacja zwrotna według szablonów pułapek;
  - stały układ list;
  - „Potrafię” wieczorem;
  - „Wytłumacz w minutę”;
  - formularz projektu końcowego;
  - tryb „minimum do zdania” i przerwy;
  - opcjonalnie „Przeczytaj mi”.
- **Materiały**:
  - `wprowadza`, `wymaga`, `cel`, `zapas` i `priorytet` we wszystkich lekcjach;
  - podział lekcji przekraczających limit pojęć;
  - poprawki tekstu pod prosty język;
  - pytania zapasowe (≥ 2 na lekcję, z kontrolą SP1);
  - `rdzen` (~25 pojęć);
  - `dni[].potrafie`;
  - wzorzec projektu końcowego dla komendy z historii.

## 12. Atomy, trzy głębokości, skrajności, mentor (zatwierdzone 2026-11-08)
Słowa użytkownika (cel): każdy element COBIT 5 Foundation ma być „wytłumaczony na poziomie turbo laika”. Do każdego są „przykłady proste, przykłady bardziej zaawansowane, przykłady skrajnie zaawansowane łącznie z pytaniami” oraz „sprawdzenie regularne, czy osoba rozumie skrajności i zagmatwania”. Framework ma być „rozbity na atomy”. Po kursie, w którym na początku prowadzimy za rękę, osoba ma być „specjalistą i mentorem w tym zakresie”.

§10–11 prowadzą od laika do biegłego na egzaminie. §12 dodaje **głębię**: każdy element dostaje własną jednostkę wiedzy (atom), drabinę przykładów aż do przypadków granicznych i regularną kontrolę, czy zagmatwania są zrozumiane. Na końcu jest poziom mentora.

### 12.1 Atom = liść mapy COBIT
- **Atom** to najmniejszy element, o który może zapytać egzamin albo który mentor musi umieć wyjaśnić osobno, np. faza 4, atrybut PA 2.2, litera W, rola A w RACI, proces APO12.
- Reguła: **każdy liść `mapa-cobit.json` ma własne hasło** w `terms/`. Dla nowych atomów `id` hasła jest równy `id` węzła, a `mapa` wskazuje na ten sam węzeł.
- Mapa dostaje 37 procesów jako dzieci domen: `proc-edm01` … `proc-mea03`, z polem `kolejnosc`.
- Rodzic (np. `poziomy-zdolnosci`) zostaje hasłem zbiorczym: pokazuje całość i układ listy (§11.6). Atomy-dzieci wyjaśniają każdy element z osobna.
- Pulpit ma **„Atlas atomów”**: wszystkie atomy pogrupowane według mapy, a przy każdym szczebel opanowania z §10.1. Szczebel 6 to „Mentor” (§12.4).

### 12.2 Trzy głębokości przykładu
Każde hasło (stare i nowe) ma drabinę przykładów, od prostego do skrajnego. Uzupełnia ona `przyklady`: konteksty pokazują *szerokość* (życie, firma, urząd, PSP), a drabina pokazuje *głębokość*.

| Szczebel | Dla kogo | Treść | Długość |
|---|---|---|---|
| **Prosty** | turbo laik | życie codzienne, bez IT i żargonu; jedna sytuacja, jeden mechanizm | 2–4 zdania |
| **Zaawansowany** | osoba po lekcji | komenda z historii przewodniej albo urząd z IT; mechanizm w działaniu i powiązanie z ≥ 1 innym atomem | 3–6 zdań |
| **Skrajny** | kandydat na mentora | przypadek graniczny, w którym intuicja zawodzi: dwa pojęcia nachodzą na siebie, rola zmienia kategorię w zależności od punktu widzenia, słowo z podręcznika ≠ egzamin, coś „prawie” spełnia definicję | 4–8 zdań, zakończone **„Rozstrzygnięcie:”** z regułą do zapamiętania |

Szczebel „skrajny” musi być merytorycznie zgodny z COBIT 5. Jeśli rozstrzygnięcie opiera się na interpretacji, a nie na Frameworku, dostaje dopisek „(interpretacja kursu)”.

### 12.3 Skrajności i zagmatwania – regularna kontrola
- Hasło ma listę **`zagmatwania`**: 2–4 typowe nieporozumienia, każde w parze „co ludzie myślą” → „jak jest naprawdę”. Przykład: „Wskaźnik wiodący to ten ważniejszy” → „Wiodący mierzy przebieg (czy robimy dobrze), opóźniony mierzy efekt”.
- Pytania sprawdzające skrajności mają `skrajnosc: true` i `atom: <id hasła>`. Są trudniejsze niż typowe pytania Foundation, ale w tym samym formacie (4 opcje, każda z wyjaśnieniem, błędne z `pulapka`). Każdy atom ma **≥ 1** takie pytanie.
- Rytm kontroli (UI):
  1. **Każda lekcja**: w „Sprawdź” jedno z pytań jest skrajne, jeśli lekcja wprowadza atom, który je ma.
  2. **Co 3 lekcje „Kontrola zagmatwań”**: 3 pytania skrajne z wcześniejszych lekcji, przemieszane (interleaving), bez podpowiedzi.
  3. **Koniec dnia „Test skrajności”**: 10 pytań skrajnych z dnia. Próg 70%.
  4. **Powtórki**: pomyłka w pytaniu skrajnym → atom wraca z odsłoniętym szczeblem „skrajny” i listą `zagmatwania`.
- W symulacjach egzaminu pytań skrajnych jest najwyżej 10%, bo symulacja ma odwzorować prawdziwy egzamin.

### 12.4 Poziom mentora (po egzaminie, `priorytet: 3`)
Uczciwie: Foundation sprawdza wiedzę i rozumienie. Mentor to poziom **ponad egzaminem**. Kurs go przygotowuje, ale go nie certyfikuje.
- Hasło ma pole **`mentor`**:
  - `czestyBlad`: co uczniowie najczęściej mylą;
  - `jakTlumaczyc`: analogia albo kolejność wyjaśniania, która działa;
  - `pytanieKontrolne`: pytanie, które mentor zadaje, żeby sprawdzić, czy ktoś naprawdę rozumie, wraz z oczekiwaną odpowiedzią.
- Moduł **`MT` – Ścieżka mentora** (dzień 5 po symulacjach albo później, `priorytet: 3`) obejmuje lekcje przekrojowe:
  1. Jak tłumaczyć Ład i Zarządzanie (oraz typowe błędne analogie).
  2. Kaskada celów od końca: od procesu do potrzeby interesariusza.
  3. Siedem aktywatorów w jednym incydencie (analiza przypadku z historii).
  4. 37 procesów: jak je pogrupować i zapamiętać, oraz które się mylą (np. APO12 i EDM03, BAI06 i DSS02).
  5. Ocena zdolności od kuchni: przypadki graniczne N/C/W/P i reguła osiągnięcia poziomu.
  6. Wdrożenie: 7 faz × 3 pierścienie w realnym kalendarzu.
  7. Prowadzenie mini-szkolenia: jak zbudować 15 minut o jednym atomie.
- Typ ćwiczenia **„Popraw kolegę”**, oparty na istniejącym typie `bledy`: wypowiedź „kolegi” z 1–3 błędami do znalezienia i wyjaśnienia.
- **Sprawdzian mentora**:
  - 10 losowych atomów, przy każdym „Wytłumacz w minutę” (§11.8) i pytanie skrajne;
  - 3 zadania „Popraw kolegę”;
  - próg: ≥ 80% pytań skrajnych i samoocena „Mam to” przy ≥ 8 z 10 atomów.
  Zaliczenie daje szczebel 6 „Mentor” w Atlasie atomów.

### 12.5 Źródła
- Treść oficjalna: FW-PL (korpus `sources/text/framework-pl`) i uzasadnienia SP1.
- Pomocniczo: opracowanie użytkownika `sources/pdf/prosto-krok-po-kroku.pdf` (tekst w `sources/text/prosto/`). To materiał **nieoficjalny**: można z niego brać pomysły na przykłady i atlas procesów, ale nie definicje oznaczane jako `oficjalne`.
- Nazwy 37 procesów: polskie nazwy podręcznikowe są w FW-PL s. 33 (il. 16). Egzaminacyjne nazwy PL mamy tylko dla części procesów (SP1). Pozostałe hasła procesów dostają `status: niepotwierdzone` dla `plEgzamin`, z dopiskiem w `pulapkaOpis`.

### 12.6 Podział pracy
- **Koordynacja (sesja główna)**:
  - §12 w METODYKA i SCHEMA;
  - nowe hasła atomów: liście mapy bez hasła i 37 procesów;
  - pytania skrajne do nowych atomów (`questions/skrajnosci-*.json`);
  - węzły procesów w `mapa-cobit.json`;
  - lekcje modułu MT.
- **Materiały**: `glebokosc`, `zagmatwania` i `mentor` w **istniejących** hasłach, przy okazji przeglądu z §10 (`poLudzku`), oraz ≥ 1 pytanie skrajne na istniejące hasło.
- **UI**:
  - drabina głębokości w przypisie i na slajdzie (`:::glebiej`);
  - rytm kontroli z §12.3;
  - Atlas atomów;
  - moduł MT i sprawdzian mentora;
  - ostrzeżenia `--check` z SCHEMA §12.

## 13. Mentor od pierwszego dnia (zatwierdzone 2026-11-08)
§12.4 opisuje poziom mentora **po egzaminie** (moduł MT, sprawdzian mentora). §13 dokłada mentora **w trakcie kursu**, żeby kursant od początku uczył się, tłumacząc innym.
Mentor to ktoś, kto nie tylko zna odpowiedź, ale **potrafi doprowadzić do niej inną osobę**. Uczenie innych jest też najmocniejszą techniką własnej nauki (efekt protegowanego). 

### 13.1 Kompetencje mentora
Do warunków z §11.0 dochodzi piąty: **uczy**. Mentor potrafi:
1. Wyjaśnić każde pojęcie rdzenia na 3 poziomach: po ludzku, egzaminacyjnie i na przykładzie.
2. Przewidzieć typową pomyłkę kursanta i wyjaśnić, jak ją odróżnić.
3. Odpowiedzieć na typowe pytania kursanta, również te zbudowane na błędnym założeniu.
4. Zadać pytanie kontrolne i ocenić odpowiedź kursanta.
5. Poprowadzić 10-minutowe wyjaśnienie jednego tematu na podstawie karty prowadzącego (§13.3).

### 13.2 Ćwiczenia mentorskie (Materiały + UI)
Od dnia 2 w „Sprawdź” pojawia się 1 ćwiczenie mentorskie na lekcję, a od dnia 4 dwa:
- **„Kursant pyta”**, nowy typ pytania `mentor`. Kursant (postać z historii przewodniej) zadaje pytanie, często z błędnym założeniem, np. „Czyli Ład robi informatyk, tak?”. Do wyboru są 4 odpowiedzi mentora: poprawna, ale też poprawna merytorycznie lecz niezrozumiała („odpowiedź w żargonie”), zbyt uproszczona-fałszywa i taka, która przytakuje błędowi. Każda opcja ma wyjaśnienie, a błędne mają `pulapkaMentora` ∈ `zargon | falszywe-uproszczenie | przytakniecie | nie-na-temat`.
- **„Popraw kolegę”** (§12.4) pojawia się od dnia 3 w formie lekkiej: 1 błąd w krótkim wyjaśnieniu.
- **„Wytłumacz w minutę”** (§11.8) ma od dnia 2 krótką formę: 1 pojęcie na koniec dnia.

### 13.3 Karta prowadzącego (UI generuje, Materiały uzupełniają)
Każda lekcja ma kartę do wyjaśnienia tematu innej osobie, czyli plan na 10 minut:

| Część karty | Skąd UI ją bierze |
|---|---|
| Cel („Po tej rozmowie kursant potrafi…”) | `cel` lekcji (§11.5) |
| Pytanie na rozgrzewkę | pytanie z `zgadnij` |
| Wyjaśnienie po ludzku | `poLudzku` haseł z `wprowadza` |
| Przykład | pierwsza scena `:::kontekst` (historia przewodnia) |
| Typowa pomyłka i jak ją odróżnić | `mentor.czestyBlad` i `zagmatwania` (§12), `nieMylicZ`, `:::pulapka` lekcji |
| Jak tłumaczyć | `mentor.jakTlumaczyc` (§12.4) |
| Typowe pytania kursanta i odpowiedzi | **nowe pole `typowePytania`** we frontmatter: 2–3 pary `{ pytanie, odpowiedz }` |
| Pytanie kontrolne | `mentor.pytanieKontrolne` (§12.4), a w razie braku pierwsze pytanie z `cwiczenia` |

- Widok „Karta prowadzącego” jest dostępny przyciskiem na ostatnim slajdzie lekcji i w osobnej zakładce „Mentor”. Można go wydrukować (styl `@media print`).
- Zakładka **„Mentor”** jest dostępna zawsze. Pokazuje karty wszystkich ukończonych lekcji i postęp „mentora”: ćwiczenia `mentor` ≥ 80% oraz „Wytłumacz w minutę” z samooceną „Mam to” dla wszystkich pojęć `rdzen`.

### 13.4 Dzień 5 i dalej
- Na liście „Gotowość do egzaminu” dochodzi sekcja **„Gotowość mentora”** z kryteriami §13.1, §13.3 i §12.4. Jest osobna, bo nie blokuje egzaminu.
- Po egzaminie aplikacja przechodzi w tryb mentora: moduł MT (§12.4), finał (§15), karty, ćwiczenia mentorskie i powtórki rdzenia, żeby wiedza nie wygasła.

## 14. Interfejs dla osoby, która słabo zna komputer (zatwierdzone 2026-11-08)
### 14.1 Jedno działanie naraz
- Ekran Start ma **jeden duży przycisk** „Następny krok” (już jest) i obok jedno zdanie, co się stanie po kliknięciu. Reszta (mapa, słownik, notatki) jest niżej pod nagłówkiem „Inne miejsca”.
- Na każdym ekranie nauki na dole są dwa duże przyciski z napisami: **„← Wstecz”** i **„Dalej →”**. Nic nie wymaga klawiatury. Skróty klawiszowe są tylko dodatkiem.
- **Żadnych przycisków z samą ikoną.** Każdy przycisk ma słowo (np. „☰ Spis lekcji”, „▶ Pełny ekran”, „Aa Wygląd”), także na telefonie.
- Nie ma przeciągania, podwójnego kliknięcia ani funkcji widocznych tylko po najechaniu myszą. Dopasowanie i kolejność działają przez kliknięcia (sprawdzone: przeciągania nie ma).

### 14.2 Czytelność
- Domyślny tekst ma **18 px**, z możliwością powiększenia do 24 px przyciskiem „A+” z napisem.
- Elementy do kliknięcia mają ≥ 48 px wysokości, odstępy ≥ 8 px, a kontrast jest co najmniej WCAG AA.
- Przypisy `[[id]]` są wyraźnymi, podkreślonymi słowami z ikoną „?”. Kliknięcie otwiera wyjaśnienie w dużym oknie z przyciskiem **„Zamknij”** u góry i u dołu.

### 14.3 Język interfejsu bez żargonu
| Zamiast | Piszemy |
|---|---|
| Drill, dryl | Ćwiczenie nazw z egzaminu |
| Leitner, SRS, powtórki rozłożone | Powtórki (aplikacja sama wybiera, co powtórzyć) |
| Eksport / import (JSON) | Zapisz kopię postępu w pliku / Wczytaj kopię postępu |
| Bundle, localStorage, cache | (nie pokazujemy użytkownikowi) |
| Tryb prezentacji | Pełny ekran |
| Pretest | Rozgrzewka: zgadnij |
| Symulacja | Próbny egzamin |

`--check` (albo osobny test UI) ostrzega, gdy w tekstach interfejsu pojawi się słowo z lewej kolumny.

### 14.4 Bezpieczeństwo i spokój
- Wszystko zapisuje się samo. Przy pierwszym uruchomieniu pojawia się komunikat: „Wszystko zapisuje się samo. Niczego nie zepsujesz klikaniem.”
- Potwierdzenia pojawiają się tylko przy działaniach nieodwracalnych, czyli zakończeniu egzaminu i wyczyszczeniu postępu. Tekst potwierdzenia mówi zwykłymi słowami, co się stanie.
- Na każdym ekranie jest przycisk **„Co mam teraz zrobić?”**, który odpowiada jednym zdaniem dopasowanym do miejsca w kursie.
- Raz dziennie aplikacja przypomina: „Zapisz kopię postępu w pliku (1 klik)”. Chroni to przed utratą postępu, jeśli przeglądarka wyczyści dane.
- Zegar odlicza czas tylko w testach i próbnym egzaminie. W lekcjach go nie ma.

### 14.5 Pierwsze uruchomienie: „Jak korzystać” (4 kroki)
Karta „Jak działa ten kurs” (już jest) dostaje 4 kroki z obrazkami:
1. Klikasz duże przyciski.
2. Słowa podkreślone z „?” możesz kliknąć, żeby zobaczyć wyjaśnienie.
3. „← Wstecz” zawsze cofa.
4. Robisz przerwę, kiedy chcesz, bo wszystko jest zapisane.

Kartę można otworzyć ponownie z „Co mam teraz zrobić?”.

### 14.6 Uruchamianie
- Ikona **„COBIT – Start”** na Pulpicie: dwuklik otwiera kurs w przeglądarce.
- Okno Terminala pokazuje duży napis „Nie zamykaj tego okna podczas nauki. Kurs jest w przeglądarce.”
- Robi to sesja „COBIT 5 Foundation kurs” (fork), w pliku `start.command`.

### 14.7 Podział pracy
- **UI**:
  - przeniesienie §13–§15 do `SCHEMA.md`;
  - typ pytania `mentor` z `pulapkaMentora` i jego walidacja;
  - karta prowadzącego z wydrukiem;
  - zakładka „Mentor” i „Gotowość mentora”;
  - całe §13.1–§13.5;
  - test żargonu w tekstach UI.
- **Materiały**:
  - `typowePytania` (2–3 pary) we wszystkich lekcjach;
  - pytania `mentor` (≥ 1 na lekcję od dnia 2, ≥ 2 od dnia 4, z kontrolą SP1);
  - usunięcie żargonu z §13.3 z tekstów lekcji.

## 15. Finał: „skrajnie biegły” (zatwierdzone 2026-11-08)
Słowa użytkownika: na samym końcu kursu mają być „zaawansowane przykłady i pytania z załączonych plików, pytania ze źródeł internetowych oraz skrajnie zaawansowane pytania” autorstwa Claude. Po całym kursie kursant ma być „skrajnie biegły w posługiwaniu się COBIT 5 Foundation”.

### 15.1 Miejsce w kursie
- Finał to moduł **`FN` – Finał**, który odblokowuje się po pierwszym podejściu do Sample Paper 1 (dzień 5). Zostaje dostępny na stałe także po egzaminie.
- Kolejność etapów jest od najbliższego egzaminowi do najtrudniejszego. Każdy etap to krótka lekcja-wprowadzenie z zaawansowanymi przykładami (`:::glebiej` na szczeblu „skrajny”, §12.2), a potem zestaw pytań:

| Etap | Treść | Plik | Liczba |
|---|---|---|---|
| **F1 – Z plików** | (a) SP1 **drugi raz**, tym razem z omówieniem każdego uzasadnienia; po pierwszym pomiarze nic już nie zawyża wyniku, ale SP1 zostaje lokalny. (b) Zaawansowane pytania na ilustracjach i dodatkach FW-PL: kaskada celów (il. 4–6) i jej mapowania (il. 22: cele organizacji → cele związane z Informatyką, il. 23: cele związane z Informatyką → procesy), role i struktury (il. 9, 33), model referencyjny procesów (il. 16), cykl życia (il. 17), model zdolności (il. 19) i porównanie z COBIT 4.1 (il. 18, 20–21), metadane i cykl informacji (il. 35–36). (c) Pułapki nazw z Altkom w kontekście pytań. (d) Przykłady z opracowania `prosto-krok-po-kroku` (nieoficjalne, §12.5). | `questions/final-pliki.json` | 30 |
| **F2 – Z internetu** | Pytania **inspirowane** zweryfikowanymi publicznymi źródłami z planu (A2/A3: Simplilearn, GoConqr, Quizlet, Brainscape, ISACA, Good e-Learning, ITwiz, PTI). Treść jest **zawsze własna**, bez kopiowania. Każde pytanie ma odwołanie do FW-PL ze stroną. Odrzucone źródła (COBIT 2019, „dumpy”, gotestprep) nie są używane. | `questions/final-www.json` | 30 |
| **F3 – Mistrzowskie** | Skrajnie zaawansowane pytania autorskie: przekrojowe (≥ 2 obszary w jednym pytaniu), przypadki graniczne, pułapki nazw w trzech wersjach (egzamin PL, podręcznik PL, EN), „prawie spełnia definicję”, rozumowanie wstecz po kaskadzie celów, reguły oceny zdolności. | `questions/final-mistrz.json` | 40 |

### 15.2 Format i kontrola
- Format to zwykłe pytania `egzamin` / `studium` (4 opcje, wyjaśnienie każdej, `pulapka` w błędnych) z polem **`final`** ∈ `pliki | www | mistrz` i `trudnosc: 3`.
- F2: `zrodlo` zawiera wpis `{ "doc": "WWW", "url": "…", "uwaga": "inspiracja – treść własna" }` **oraz** wpis FW-PL ze stroną.
- `verify-sources.py` i `sp1-overlap.py` obejmują wszystkie pliki `final-*`. Wyjątkiem jest SP1 w F1(a), który pochodzi wprost z `sample-paper-1.local.json` i jest tylko lokalny.

### 15.3 Egzamin mistrzowski
- 50 pytań losowanych z F1(b–d), F2 i F3 w proporcjach PR 15 · EN 21 · IM 7 · PC 7, w 40 minut, bez podpowiedzi.
- **Próg „skrajnie biegły”: ≥ 40/50 (80%)** w dwóch kolejnych podejściach, a każdy obszar ≥ 70%.
- Na pulpicie wynik ma osobny wiersz: „Skrajnie biegły” obok „Gotowy do egzaminu” (§7) i „Gotowość mentora” (§13.4).
- Uzupełnienie §11.0: szósty warunek, **„Skrajnie biegły”**, to zaliczony egzamin mistrzowski. Pełna ścieżka wygląda więc tak: laik → gotowy do egzaminu → biegły → skrajnie biegły → mentor.

### 15.4 Podział pracy
- **Sesja „COBIT 5 Foundation kurs” (fork, koordynacja §10–§15)**: `final-mistrz.json` (F3) i `final-www.json` (F2), sprawdzone z korpusem FW-PL.
- **Materiały**: `final-pliki.json` (F1 b–d) i lekcje-wprowadzenia modułu FN.
- **UI**:
  - moduł FN z odblokowaniem po pierwszym SP1;
  - SP1 drugi raz z omówieniem;
  - egzamin mistrzowski z progiem z §15.3;
  - pole `final` w walidacji;
  - wiersz „Skrajnie biegły” na pulpicie.

## 16. Dźwignie przyswajania dla totalnego laika (zatwierdzone 2026-11-08)
Słowa użytkownika:
- „rozpoznaj możliwości dodatkowych wpływów na odbiorcę, żeby lepiej i szybciej przyswajał wiedzę – to totalny laik”;
- „każdy termin i twierdzenie rozwalany na atomy”;
- „o co tak naprawdę chodzi w tym frameworku”;
- „podpowiedzi w sidebarze”;
- „szczegółowe wyjaśnienia i przykłady z życia”;
- „przekładające się na późniejszy realny egzamin w Altkom”.

### 16.1 „O co naprawdę chodzi” – wielki obraz w 7 zdaniach
Cały COBIT 5 Foundation da się powiedzieć w 7 zdaniach. Kursant widzi je **pierwszego dnia** (lekcja `m0/00`) i **na początku każdego dnia**. Każda lekcja pokazuje, na które z nich odpowiada („Jesteś tu”):

| # | Pytanie laika | Odpowiedź COBIT 5 | Obszar |
|---|---|---|---|
| 1 | Po co to wszystko? | Żeby informatyka dawała organizacji **korzyść**, przy rozsądnym **ryzyku** i rozsądnych **kosztach** (tworzenie wartości). Potrzeby ludzi zamienia się w konkretne cele (kaskada celów). | PR, zasada 1 |
| 2 | Czego to dotyczy? | **Całej organizacji**, nie tylko działu IT. | PR, zasada 2 |
| 3 | Skąd ta wiedza? | Z **jednej ramy**, która łączy inne standardy (ITIL, ISO…). | PR, zasada 3 |
| 4 | Czym się to robi? | Siedmioma „narzędziami”, czyli **aktywatorami**: zasady, procesy, struktury, kultura, informacja, usługi i aplikacje, ludzie. | PR/EN, zasada 4 |
| 5 | Kto co robi? | **Szefowie oceniają, kierują i pilnują** (Ład), a **kierownicy planują, tworzą, wykonują i mierzą** (Zarządzanie). | PR, zasada 5 |
| 6 | Jak to wprowadzić? | Krok po kroku, w **7 fazach**, dbając o ludzi i o ciągłe ulepszanie. | IM |
| 7 | Skąd wiem, że proces jest dobry? | Mierzę jego **zdolność** na skali 0–5. | PC |

- Frontmatter lekcji: `wielkiObraz: <1–7>`.
- UI pokazuje stały „kompas” z 7 polami: na slajdzie startowym podświetla bieżące pole, a na pulpicie pokazuje postęp w każdym z nich.

### 16.2 Atomy twierdzeń, a nie tylko pojęć
§12.1 rozbija na atomy **pojęcia** (liście mapy). §16.2 rozbija na atomy **twierdzenia**, czyli każde zdanie, które trzeba zrozumieć. Na przykład zdanie „Ład ocenia, kieruje i monitoruje” to trzy osobne atomy.
- Reguła: **jeden slajd = jedno twierdzenie-atom.** Zdanie złożone („A, B i C”) rozbijamy na osobne slajdy albo na listę z osobnym przykładem przy każdym elemencie.
- Nowy blok `:::atom` … `:::` z polami w kolejnych liniach:
  - `twierdzenie:` – zdanie z COBIT, nazwy egzaminacyjne;
  - `poLudzku:` – to samo zdanie słowami codziennymi;
  - `zycie:` – przykład z życia codziennego: dom, rodzina, zakupy, samochód, wesele;
  - `komenda:` – ten sam mechanizm w komendzie z historii;
  - `sprawdz:` – mikropytanie „prawda/fałsz” o jedno kliknięcie, w formacie `P|F :: zdanie :: dlaczego`.
- UI pokazuje atom w kolejności **życie → komenda → twierdzenie COBIT**. To „blaknięcie konkretu”: od znanego do abstrakcji. Mikropytanie pojawia się od razu pod atomem. Błędna odpowiedź od razu pokazuje „dlaczego” i nie zatrzymuje kursanta.
- Frontmatter lekcji: `twierdzenia:` – lista 3–5 kluczowych twierdzeń, które trafiają też do powtórek jako fiszki P/F.

### 16.3 Podpowiedzi w sidebarze (UI + Materiały)
Sidebar dostaje stałą zakładkę **„Podpowiedź”**: duży napis, widoczny zawsze w lekcji i ćwiczeniach, wyłączony w testach i próbnym egzaminie.
- **Na slajdzie** pokazuje:
  - „Na co zwrócić uwagę” – 1 zdanie z komentarza `<!-- podpowiedz: … -->` w slajdzie, a jeśli go nie ma, z bloku `:::zapamietaj`;
  - pojęcia ze slajdu z `poLudzku`;
  - przycisk „Wyjaśnij szczegółowo” (§16.4).
- **Przy pytaniu**:
  - stopniowane podpowiedzi z §11.2 (tu, a nie w treści pytania);
  - „Pułapka, której szukaj”, czyli najczęstszy rodzaj `pulapka` dla tego tematu, wyliczony z danych;
  - przypomnienie słowa-klucza (NIE, NAJLEPIEJ…), jeśli występuje w treści pytania.
- **Przy pomyłce**: „Jak to zapamiętać” – `zagmatwania` hasła (§12.3) i przykład z życia.

### 16.4 Szczegółowe wyjaśnienia i przykłady z życia
- Każdy atom (pojęcie i twierdzenie) ma **co najmniej jeden przykład z życia codziennego**. Przykład z życia jest **przed** przykładem z komendy i przed definicją. Przykład z życia musi mieć ten sam mechanizm, co pojęcie, a nie tylko podobne słowa.
- Przycisk **„Wyjaśnij szczegółowo”** otwiera wyjaśnienie krok po kroku w 5 częściach:
  1. po ludzku;
  2. przykład z życia;
  3. przykład z komendy;
  4. jak to brzmi na egzaminie;
  5. z czym się myli (`zagmatwania`).
  Źródłem są pola haseł i atomów. Nie ma osobnej treści do pisania.
- Wyjaśnienia błędnych odpowiedzi kończą się jednym zdaniem „W życiu to tak, jakby…”: opcjonalne pole `zycie` w opcji pytania, przy pytaniach z dni 1–3.

### 16.5 Dodatkowe dźwignie (na podstawie badań nad uczeniem się)
| Dźwignia | Na czym polega | Kto |
|---|---|---|
| **Kodowanie barwą i ikoną** | Ład ma jedną stałą barwę, Zarządzanie drugą. PR/EN/IM/PC mają swoje barwy, a 7 aktywatorów i 5 domen ma stałe ikony z podpisem. Ten sam kolor i ikona pojawiają się wszędzie: na mapie, w pytaniach, w sidebarze i na kompasie. | UI |
| **Sygnalizacja** | Na slajdzie pogrubione jest jedno słowo-klucz, nie więcej. | Materiały |
| **Uczenie przez obserwację** | Kasia Nowik (laik w historii) robi **te same błędy co kursant**, a mentorzy je prostują. W każdej lekcji z pułapką jest scena „Kasia się myli”. | Materiały |
| **Pytanie „Dlaczego?”** | Po każdym kluczowym twierdzeniu pada pytanie „Dlaczego tak jest?” z miejscem na własną odpowiedź i wzorcem, np. „Dlaczego COBIT oddziela Ład od Zarządzania?”. | Materiały + UI (mechanizm `wlasne-slowa`) |
| **Konsolidacja przez sen** | Rano przed nową treścią są 3 pytania „Co pamiętasz z wczoraj?”, wieczorem pusta kartka (już jest). | UI |
| **Mikropowtórka po przerwie** | Po powrocie po ≥ 10 min Start proponuje 3 fiszki (2 min), zanim pójdzie dalej. | UI |
| **Pałac pamięci „Remiza”** (opcjonalny, `:::uproszczenie`) | 7 aktywatorów to 7 miejsc w komendzie z historii: tablica z regulaminem = zasady i polityki, grafik zmian = procesy, gabinet komendantki = struktury, kuchnia = kultura, monitor dyżurnego = informacja, serwerownia = usługi i aplikacje, szatnia ze sprzętem = ludzie i kompetencje. | Materiały |
| **Tryb skupienia** | W lekcji widać tylko slajd, „Dalej” i zakładkę „Podpowiedź”. Reszta jest ukryta. | UI |
| **Słuchanie** | „Przeczytaj mi” (§11.5) jest dostępne domyślnie, bo laik często łatwiej słucha, niż czyta. | UI |
| **Ściąga dnia na 1 kartkę** | Do wydruku do powtórki, nie na egzamin, bo egzamin jest bez materiałów. Na końcu kursu jest „Cały COBIT 5 na jednej kartce” (kompas z §16.1 i mapa). | Materiały + UI (`@media print`) |
| **Poczucie postępu** | Pasek dnia, liczba opanowanych atomów, komunikaty od postaci z historii („Komendantka Wrzos: tego nie wiedział nawet Sikora”). Nigdy nie ma porównań, które zniechęcają. | UI + Materiały |

### 16.6 Przełożenie na prawdziwy egzamin (Altkom / PeopleCert, PL)
Wszystko w kursie ma się przekładać na prawdziwy arkusz:
- **Terminologia**: tylko nazwy egzaminacyjne PL według zestawienia różnic Altkom (`ALTKOM`). Nazwy podręcznikowe pojawiają się wyłącznie jako „w podręczniku: …”.
- **Odwołania do rysunków**: w treści pytań „Rysunek N”, jak na egzaminie. Numery są te same co „Ilustracja N” w podręczniku. Na slajdach podajemy oba.
- **Styl pytań** (analiza SP1 i Altkom):
  - jedna poprawna z 4 odpowiedzi;
  - pytania z luką („Uzupełnij lukę…”);
  - pytania z NIE wyróżnionym wersalikami;
  - poprawna odpowiedź **nie** jest systematycznie najdłuższa, cel ≤ 35% pytań;
  - litery poprawnych odpowiedzi rozłożone równo w każdym pliku.
  `--check` ostrzega o odstępstwach.
- **Warunki**: próbny egzamin w aplikacji wygląda jak prawdziwy:
  - jedno pytanie na ekranie;
  - oznaczanie pytań do powrotu;
  - zegar 40 min;
  - bez podpowiedzi i sidebaru;
  - wynik dopiero na końcu.
  Lekcja `ex/06-dzien-egzaminu` opisuje przebieg egzaminu przez Altkom/PeopleCert: dokument tożsamości, egzamin online z nadzorem albo w sali, zasady „closed book”.
- **Miara gotowości**: SP1 (niezależny pomiar) ≥ 35/50 → egzamin mistrzowski (§15) ≥ 40/50.

### 16.7 Podział pracy
- **UI**:
  - kompas wielkiego obrazu;
  - blok `:::atom` z mikropytaniem P/F i fiszkami;
  - zakładka „Podpowiedź” w sidebarze;
  - „Wyjaśnij szczegółowo” (5 części);
  - kodowanie barwą i ikoną;
  - poranne „Co pamiętasz z wczoraj?”;
  - mikropowtórka po przerwie;
  - tryb skupienia;
  - „Przeczytaj mi” domyślnie;
  - wydruk ściąg;
  - ostrzeżenia `--check` o stylu pytań z §16.6.
- **Materiały**:
  - `wielkiObraz` i `twierdzenia` we wszystkich lekcjach;
  - bloki `:::atom` dla kluczowych twierdzeń (najpierw dzień 1, potem 2–5);
  - `<!-- podpowiedz -->` na slajdach;
  - przykład z życia dla każdego atomu;
  - sceny „Kasia się myli”;
  - pytania „Dlaczego?”;
  - pałac pamięci „Remiza”;
  - ściągi dnia;
  - pole `zycie` w opcjach pytań z dni 1–3.
- **Sesja Altkom**: audyt całej bazy pytań pod kątem §16.6, czyli terminologii, „Rysunek N”, długości, rozkładu liter, luk i NIE. Raport i poprawki we współpracy z Materiałami.

## 17. Wdrożenie standardu dydaktycznego użytkownika (dokument nadrzędny, 2026-11-08)
Pełny tekst: [`STANDARD-DYDAKTYCZNY.md`](STANDARD-DYDAKTYCZNY.md), dalej **SD**. SD jest **nadrzędny** wobec §0–§16, a §17 mówi, jak go realizujemy w danych, w UI i w treści. Reguła SD: „nie obniżamy poziomu merytorycznego, zwiększamy jakość i szczegółowość procesu dydaktycznego”.

### 17.1 Rozstrzygnięcia sprzeczności
| Sprzeczność | Rozstrzygnięcie |
|---|---|
| SD I.2: termin oryginalny → tłumaczenie → definicja… vs SD-2 §3: „najpierw zjawisko, potem nazwa” | **Lekcja** (slajdy) zaczyna się od zjawiska, a nazwa przychodzi dopiero w kroku „Nazwij”. **Karta terminologiczna** (sidebar, słownik) zaczyna się od terminu EN. Obie reguły obowiązują, każda w swoim miejscu. |
| §10.2 chowa EN w trybie laika vs SD V/7: „termin angielski powinien pozostać widoczny” | **EN jest zawsze widoczny** obok nazwy z egzaminu PL, z wymową. Pod „Więcej” chowamy tylko warianty podręcznikowe, `plInne` i `poziom2/3`. **§10.2 zostaje w tym punkcie zmieniony.** |
| Egzamin PL (Altkom) vs „angielski jako język podstawowej nomenklatury” (SD-3 §4) | Na karcie terminu są **trzy równorzędne wiersze**: EN (oryginał ISACA), egzamin PL (tłumaczenie wydawcy egzaminu), podręcznik PL (oficjalne tłumaczenie publikacji). Dodatkowo wiersz „tłumaczenie przyjęte w kursie” i parafraza. Pytania egzaminacyjne mają treść PL (jak na egzaminie), a ćwiczenia terminologiczne ćwiczą EN w obie strony. |
| 5 dni po 4 h vs „od podstaw cyfrowych” | Dochodzi **Dzień 0** (~2,5 h, przed dniem 1): moduł **IT0 „Podstawy cyfrowe”** (§17.3). Pojęcia z IT0 są wymaganiami wstępnymi (`wymaga`) lekcji COBIT. Gdy kursant ich nie opanował, UI kieruje go do konkretnej lekcji IT0 (SD-2 §11). |
| §10.3 historia PSP vs SD IV/3: PSP „nie powinna zastępować przykładów uniwersalnych” | Historia Modrzewiowa zostaje jako **ciągłe studium przypadku** (SD-3 „longitudinal case study”), ale każdy ważny atom ma też przykład **codzienny i biurowy** (§17.6). Pierwszy kontekst na slajdzie to `zycie`, a scena PSP jest drugim kontekstem, a nie pierwszym. **Zmienia §10.3 i §16.4.** |

### 17.2 Cztery kategorie każdej informacji (SD IX.2)
Każdy blok treści ma status, a UI pokazuje go stałą etykietą:

| SD | Pole `status` | Etykieta | Wymóg |
|---|---|---|---|
| FAKT | `oficjalne` | „COBIT 5 (źródło)” | `zrodlo` z dokumentem i stroną; dla FW-PL kontrola korpusem |
| INTERPRETACJA | `uproszczenie` | „Wyjaśnienie kursu” | bez źródła normatywnego, z dopiskiem, że to nie stanowisko ISACA |
| PRZYKŁAD | `przyklad` | „Przykład (scenariusz dydaktyczny)” | fikcja oznaczona jako fikcja |
| OPINIA EKSPERCKA | **`opinia`** (nowy status) | „Opinia autora kursu” | nigdy nie jest przypisywana ISACA |

### 17.3 Moduł IT0 „Podstawy cyfrowe” (Dzień 0)
Pojęcia mają poziomy P0–P3 (SD-2 §11) i łańcuch `wymaga`. Lista minimalna, czyli to, czego COBIT 5 Foundation używa bez wyjaśnienia:

| Lekcja | Pojęcia (EN) | Poziom | Wymaga |
|---|---|---|---|
| IT0.1 Komputer i program | hardware, software, aplikacja (application), system operacyjny (operating system) | P0 | – |
| IT0.2 Dane i informacja | data, information, plik (file), folder | P0 | IT0.1 |
| IT0.3 Sieć i Internet | network, Internet, Wi-Fi | P0 | IT0.1 |
| IT0.4 Serwer i usługa | server, client, request/response, usługa IT (IT service) | P1 | IT0.1–3 |
| IT0.5 Baza danych | database | P1 | IT0.2, IT0.4 |
| IT0.6 Konto, logowanie, uprawnienia | account, authentication, authorization | P1 | IT0.4 |
| IT0.7 Infrastruktura i aplikacje w organizacji | infrastructure, application, dostawca (supplier), outsourcing | P1 | IT0.4–5 |
| IT0.8 Gdy coś się psuje | incident, problem, change, kopia zapasowa (backup), ciągłość działania (continuity) | P1 | IT0.4, IT0.7 |
| IT0.9 Bezpieczeństwo i ryzyko IT | information security, risk, dostępność (availability) | P1 | IT0.6, IT0.8 |
| IT0.10 Projekt i program IT | project, programme, portfolio | P1 | IT0.7 |

Każda lekcja IT0 to 4–6 slajdów według pełnego schematu SD-2 §3: zjawisko → wyjaśnij → nazwij → każdy element osobno → współpraca → EN → organizacja → znaczenie specjalistyczne → sprawdź. Pojęcia IT0 dostają hasła w `terms/` (prefiks `it-`) z polem `poziomP` i `wymaga`.

### 17.4 Karta terminologiczna (SD V.1, SD-3 §3) – pola hasła `terms/<id>.json`
Do istniejących pól dochodzą:
- `wymowa`: orientacyjna wymowa EN, np. „gawernens”;
- `statusTlumaczenia` ∈ `A` (jednoznaczny) | `B` (kontekstowy) | `C` (sporny) | `D` (zachować oryginał);
- `zrodloTlumaczenia`: `{ "wydawcaEgzaminu": "Ład", "podrecznik": "Nadzór", "kurs": "Ład (governance)", "uwaga": "…" }`. Te trzy formy się **nie zrównuje**;
- `poCo`: po co to istnieje (1–2 zdania);
- `jakDziala`: jak działa (2–4 zdania);
- `dlaczegoWazne`: dlaczego trzeba to znać;
- `wyobrazSobie`: analogia;
- `przykladWypowiedzi`: zdanie z poprawnie użytym terminem EN i PL, które kursant ma umieć wypowiedzieć;
- `poziomP` ∈ P0–P3; `wymaga`: id haseł wymaganych wcześniej;
- `przyklady` ma klucze `zycie`, `biuro`, `organizacja`, `psp`, `it` (§17.6). Dotychczasowe `firma` i `admin` traktujemy jako `organizacja`.

**Kolejność na karcie:** EN + wymowa → egzamin PL / podręcznik PL / kurs (ze statusem A–D) → definicja (FAKT ze źródłem) → po ludzku → wyobraź sobie → po co / jak działa → przykłady (od życia do IT/COBIT) → czego nie mylić → przykład wypowiedzi → powiązane → źródło.

### 17.5 Slajd: trzy warstwy i typ (SD II.3, SD-2 §4 i §8)
- **Tytuł slajdu wyraża zagadnienie**, np. „Dlaczego sprawny dział IT to jeszcze nie Ład?”, a nie „Ład”.
- **Typ slajdu według SD**:
  - A – problemowy: `start`, `zgadnij`;
  - B – objaśniający: `rozklad`, `pojecie`;
  - C – procesowy: nowy `proces`, czyli kroki, odpowiedzialność i przepływ, każdy element objaśniony;
  - D – przypadku: `przyklad`, `studium`;
  - E – porównawczy: `porownanie`;
  - F – syntetyzujący: `wniosek`, `zapamietaj`.
- **Warstwa 1 – treść widoczna**: jedna teza i krótkie objaśnienie. Element wizualny (`schemat`, tabela, `:::mapa`) ma objaśniony każdy element. Źródło, gdy to FAKT.
- **Warstwa 2 – didaskalia wykładowcy** (SD-2 §8): blok `:::wykladowca` … `:::`, czyli **pełny tekst do wypowiedzenia** (60–150 słów), a nie hasła. „Przeczytaj mi” czyta właśnie ten tekst, więc kursant dostaje wykład.
- **Warstwa 3 – dodatkowe wyjaśnienia**: blok `:::pytanie-uczestnika` z polami `pytanie:` i `odpowiedz:`, czyli pytania, które kursant może zadać, i odpowiedzi na nie.
- Ostatnia linia każdego slajdu niesyntetyzującego: `**Wniosek:** …` (SD-2 §4, zasada 5).

### 17.6 Przykłady: progresja i cztery rodzaje (SD IV, SD-2 §6)
- Kolejność przykładów: **codzienny** (`zycie`: telefon, bankomat, e-mail, logowanie do banku) → **biurowy** (`biuro`) → **organizacyjny** (`organizacja`) → **PSP** (`psp`, scena z historii) → **specjalistyczny** (`it`: IT/COBIT, np. APO13).
- Przy ważnych zagadnieniach jest **progresja poziomów 0–5** (SD IV.2, przykład „bezpieczeństwo informacji”): blok `:::progresja` z liniami `0: …` do `5: …`. Ostatni poziom zawsze łączy się z COBIT 5.

### 17.7 Sidebar – „drugi nauczyciel” (SD III, SD-2 §5)
Sidebar ma **stałe sekcje**, które pokazujemy, jeśli mają treść. Ich źródłem są bloki slajdu `:::sb <typ>` oraz pola hasła:

| Sekcja (SD) | `<typ>` | Domyślne źródło, gdy brak bloku |
|---|---|---|
| Wyjaśnij mi | `wyjasnij` | `poLudzku` + `jakDziala` haseł ze slajdu |
| Przykład z życia | `przyklad` | `przyklady.zycie` |
| Wyobraź sobie | `wyobraz` | `wyobrazSobie` |
| Co oznacza ten skrót? | `skrot` | EN + rozwinięcie + wymowa |
| Dlaczego to ważne? | `dlaczego` | `dlaczegoWazne` |
| Czego nie mylić? (pułapka pojęciowa) | `nie-mylic` | `nieMylicZ`, `zagmatwania` |
| Kontekst | `kontekst` | – |
| Powiązanie | `powiazanie` | `powiazane` |
| Kontrowersja (tłumaczenia, interpretacje) | `kontrowersja` | `zrodloTlumaczenia.uwaga` przy statusie C/D |
| Uwaga wykładowcy | `uwaga` | – |
| Uwaga ekspercka (status `opinia` albo `oficjalne`) | `ekspert` | – |
| Sprawdź, czy rozumiesz | `sprawdz` | pierwsze mikropytanie `:::atom` (§16.2) |
| Źródło (przypis rozszerzony) | `zrodlo` | `zrodla` haseł i slajdu |

- Głębokość sidebaru zależy od poziomu kursanta (SD III.4): początkujący (tryb `laik`), średnio zaawansowany, zaawansowany i specjalistyczny (tryb `pelny` i kolejne poziomy hasła).
- Zakazy: sidebar **nie powtarza** slajdu, nie ma w nim ogólników typu „warto pamiętać”, a każde zdanie normatywne ma źródło.
- Zakładki sidebaru: **Wyjaśnij mi** (domyślna) · **Wykładowca** (warstwa 2) · **Terminy** (karty) · **Źródła** · **Podpowiedź** (tylko w ćwiczeniach, §16.3).

### 17.8 Tezy reaktywne (SD VI)
- Blok `:::teza <typ>` … `:::`, gdzie `<typ>` ∈ `interpretacyjna | krytyczna | praktyczna | porownawcza | problemowa | egzaminacyjna`. Pola:
  - `sytuacja:` – najpierw sytuacja (SD-2 §9);
  - `pytanie:`;
  - `teza:`;
  - `uzasadnienie:`;
  - `powiazanie:` – element COBIT, np. „Zasada 5”;
  - `przyklad:`;
  - `status:` – `oficjalne` ze `zrodlo:` albo `uproszczenie` / `opinia`;
  - `refleksja:` – pytanie do kursanta.
- UI pokazuje tezę **dopiero po** głównej treści slajdu, którego dotyczy, jedną naraz, jako kartę „Zatrzymaj się i pomyśl”. Teza bez `uzasadnienie` i bez statusu to błąd `--check`.

### 17.9 Przypisy i bibliografia (SD VII)
- **Przypis bezpośredni** na slajdzie: krótko, np. „FW-PL s. 31”.
- **Przypis rozszerzony** w sidebarze (sekcja Źródło): pełny opis z `content/zrodla.json`, czyli nowego rejestru źródeł. Dla każdego `doc`:
  - autor lub instytucja, tytuł, wydanie i rok, język;
  - URL dla źródeł publicznych i `dostep` (data) dla treści internetowych;
  - kategoria ∈ `publikacja-zrodlowa | standard | dokumentacja | literatura | material-dydaktyczny`.
- **Bibliografia modułu** generowana automatycznie z przypisów lekcji modułu, pogrupowana według kategorii, na ostatnim slajdzie modułu.
- **Hierarchia źródeł** (SD VII): ISACA > instytucje branżowe > normy > publikacje recenzowane > literatura > materiały edukacyjne. Źródła `WWW` **nie mogą** być podstawą definicji `oficjalne`. Zakaz zmyślania stron obowiązuje i jest sprawdzany przez `verify-sources`.

### 17.10 Biegłość terminologiczna EN (SD-3 §2–§5)
- Każde hasło ma 5 stopni: **rozpoznanie → rozumienie → rozróżnianie → zastosowanie → biegłość**, zgodne z drabinką §10.1. Biegłość = poprawne użycie EN bez podpowiedzi w 2 różnych zadaniach w różnych dniach.
- Nowe typy ćwiczeń:
  - `nazwa-en`: podaj pełną angielską nazwę, np. domeny APO, z porównaniem tolerującym wielkość liter i myślniki;
  - `wypowiedz`: opisz mechanizm, używając terminów EN; wzorzec, lista wymaganych terminów i samoocena; UI sprawdza, czy wymagane terminy padły;
  - `popraw-termin`: w opisie procesu użyto złego terminu, wskaż i popraw; wariant typu `bledy`.
- **Słownik narastający**: słownik pokazuje wszystkie hasła z ukończonych lekcji i ich stopień.
- **Powtórki spiralne**: hasło wraca w późniejszych modułach w trudniejszym kontekście.
- **Drill dwukierunkowy** EN→PL i PL→EN.

### 17.11 Czytanie dokumentacji źródłowej (SD-3 §8)
Trzy etapy:
1. Dni 0–1: tylko objaśnienia.
2. Dni 2–3: slajd `zrodlo-czytaj` z **krótkim** fragmentem FW-PL (≤ 3 zdania, FAKT ze stroną) i objaśnieniem terminów.
3. Dni 4–5: pytania do fragmentu bez objaśnień, jako typ `studium` z `scenariusz` = fragment.

Oryginał EN ISACA nie jest w repozytorium. Jeśli użytkownik go dostarczy (`sources/pdf/framework-en.pdf`), fragmenty dostaną wersję EN. Do tego czasu terminy EN pochodzą z haseł.

### 17.12 Bramki kompetencyjne modułu (SD-3 §7)
- Po każdym module jest **sprawdzian modułu** z 6 częściami (SD-3 §7): wiedza, terminologia, rozróżnianie, mechanizmy, zastosowanie, synteza. Każda część ma ≥ 2 zadania.
- Próg: ≥ 70% w każdej części.
- Gdy część nie przejdzie, UI pokazuje dodatkowe wyjaśnienie i ćwiczenia dla tej części, a potem ponowne podejście. To miękka bramka: można iść dalej, ale moduł zostaje „niezaliczony” w Gotowości.
- **Format**: pytania sprawdzianu leżą w `questions/sprawdzian-<modul>.json` (np. `sprawdzian-pr.json`). Każde pytanie ma pola `sprawdzian: "<MODUL>"` (np. `"PR"`) i `czesc` ∈ `wiedza | terminologia | rozroznianie | mechanizmy | zastosowanie | synteza`. Każda część ma ≥ 2 pytania. Typy pytań są dowolne, np. terminologia to `nazwa-en`, `dopasowanie` albo `popraw-termin`, a synteza to `studium` albo `wypowiedz`. Plik modułu nie musi wyliczać id: UI zbiera pytania po polu `sprawdzian`.

### 17.13 Moduł: stała konstrukcja (SD-3 §10)
Nowy plik `content/modules/<modul>.md` z frontmatter:
- `wymagania`, `wiedza`, `umiejetnosci`;
- `terminy` – do aktywnego stosowania;
- `zadania`, `kryteria`;
- `bibliografia` – generowana, ręcznie można dopisać.

Kolejność w module: problem → nowe pojęcia → teoria (FAKT) → zależności → przykład praktyczny → (sidebar i didaskalia w każdej lekcji) → ćwiczenia → podsumowanie z powtórką terminów → sprawdzian (§17.12) → bibliografia.

### 17.14 Lista kontrolna autora (SD-2 §13) – automatyczna tam, gdzie się da
`--check` ostrzega, gdy:
1. skrót z wielkich liter (≥ 2 litery) pojawia się bez rozwinięcia przy pierwszym użyciu w kursie;
2. hasło `[[id]]` jest użyte przed lekcją, która je wprowadza (już jest, §11.1);
3. slajd nie ma `:::wykladowca`;
4. pojęcie z `wprowadza` nie ma przykładu `zycie`;
5. slajd niesyntetyzujący nie ma `**Wniosek:**`;
6. blok `oficjalne` nie ma źródła;
7. teza nie ma uzasadnienia lub statusu;
8. hasło nie ma `wymowa`, `statusTlumaczenia` lub `przykladWypowiedzi`.
9. id z `wprowadzaListe` nie ma w lekcji przypisu `[[id]]` (sprawdzenie zdania wyjaśnienia i przykładu przy każdym dziecku wchodzi do `kontrolaAutora`).

Punktów, których nie da się sprawdzić automatycznie (czy laik zrozumie początek, czy didaskalia da się wypowiedzieć), dotyczy pole frontmatter `kontrolaAutora: { data, kto, uwagi }`. Lekcja bez niego ma w UI etykietę „wersja robocza”.

### 17.15 Profil absolwenta (SD-3 §1)
Do §11.0 dochodzą:
- prowadzi merytoryczną rozmowę z kierownictwem, audytorem, specjalistą IT i właścicielem procesu, używając terminów EN i PL;
- odczytuje fragmenty oryginalnej dokumentacji;
- rozpoznaje, kiedy COBIT 5 **nie** jest wystarczającym rozwiązaniem.

Kurs wyraźnie oddziela kompetencje Foundation od kompetencji konsultanta wdrożeniowego.

### 17.16 Wzorce produkcyjne
- `content/_wzorce/lekcja-wzorcowa.md`: kompletna lekcja według SD i §17, czyli „Governance vs Management”, model SD VIII. Jest dla autorów, nie trafia do kursu.
- `content/_wzorce/lekcja-it0-wzorcowa.md`: lekcja P0 według SD-2, czyli „Czym jest serwer?”.
- `content/_wzorce/modul-wzorcowy.md`: plik modułu (§17.13).
- `content/_wzorce/haslo-wzorcowe.json`: karta terminologiczna (§17.4).

### 17.17 Podział pracy
- **Sesja koordynująca (fork)**: §17, wzorce z §17.16, rejestr `zrodla.json`, `dostep` w źródłach WWW.
- **UI**:
  - SCHEMA §17 i walidacja (§17.14);
  - status `opinia` i stałe etykiety (§17.2);
  - EN zawsze widoczny (§17.1);
  - zakładki i sekcje sidebaru (§17.7);
  - `:::wykladowca` i „Przeczytaj mi” na nim;
  - `:::pytanie-uczestnika`, `:::teza`, `:::sb`, `:::progresja`, slajd `proces`, slajd `zrodlo-czytaj`;
  - typy `nazwa-en`, `wypowiedz`, `popraw-termin`;
  - słownik narastający, drill EN↔PL;
  - sprawdzian modułu z bramką (§17.12);
  - pliki modułów i bibliografia (§17.13);
  - Dzień 0 w planie;
  - kierowanie do lekcji IT0 przy brakach wymagań.
- **Materiały**:
  - moduł IT0 (10 lekcji, hasła `it-*`);
  - przegląd wszystkich lekcji według wzorca: tytuły-tezy, `:::wykladowca` na każdym slajdzie, wnioski, przykłady `zycie` → `biuro` → `organizacja` → `psp` → `it`, tezy reaktywne (≥ 2 na lekcję), `:::sb`;
  - nowe pola haseł z §17.4 (`poCo`, `jakDziala`, `dlaczegoWazne`, `wyobrazSobie`, `przykladWypowiedzi`, `poziomP`, `wymaga`);
  - pliki modułów;
  - sprawdziany modułów.
- **Altkom**: `wymowa`, `statusTlumaczenia`, `zrodloTlumaczenia` we wszystkich hasłach (rejestr SD V.3) oraz ćwiczenia `nazwa-en` i `popraw-termin`.
- **„Proste tłumaczenia”** (autor §12, potwierdzone): zadania z §12.6 – atomy, 37 procesów, `skrajnosci-*.json`, moduł MT.

## 18. Harmonogram: 12 dni po ≤ 4 h (decyzja użytkownika 2026-11-08: „Więcej dni nauki”)
Pełny standard (SD, §17) nie mieści się w 5 dniach. Dzień 1 miał 261 slajdów (≈ 5 h samych lekcji). Użytkownik wybrał **więcej dni bez obniżania poziomu**. Po rozbiciu na atomy (§12) i podziałach lekcji (§11.1) model zdolności urósł z 46 do 145 slajdów, więc plan ma **12 dni (0–11)**, a moduł mentora odbywa się po egzaminie. Ten paragraf **zastępuje** wszystkie odwołania do „5 dni” w §1–§17 (np. „dzień 5”, „dni 1–3”), według tabeli mapowania z §18.3.

### 18.1 Budżet dnia
- Na lekcje przypada **≤ 150 min** (≈ 100–107 slajdów przy 1,4 min na slajd z warstwą wykładowcy). Na resztę **≈ 90 min**: rozgrzewka 20, mini-testy 15, test dnia 30, przerwy 15, pusta kartka 10. W dniach egzaminacyjnych próbny egzamin (40 min + 20 min analizy) **zastępuje** test dnia, więc lekcji może być ≤ 110 min.
- `--check` ostrzega, gdy suma slajdów lekcji jednego dnia × 1,4 min > 150 min.
- `minuty` w lekcji = liczba slajdów × 1,4 (zaokrąglone) + czas ćwiczeń.

### 18.2 Plan dni
| Dzień | Tytuł | Lekcje (`dzien`) | Slajdy (stan 2026-11-08) |
|---|---|---|---|
| **0** | Start i podstawy cyfrowe | IT0 0A.1–0A.10, M0 0.0 „Zanim zaczniesz” | ≈ 80 (IT0 w toku) |
| **1** | Organizacja po ludzku | M0 0.1–0.6 | 95 |
| **2** | COBIT na tle świata i pierwsze zasady | M0 0.7–0.9, PR 1.1–1.2, EX 9.0 „Jak czytać pytanie” | 97 |
| **3** | Kaskada celów i zasady 2–4 | PR 1.3–1.8 | 100 |
| **4** | Model aktywatora, Ład vs Zarządzanie, procesy EDM | PR 1.9–1.13, atlas PR 1.14 (EDM01–03), EX 9.1 | 104 |
| **5** | Aktywatory, część 1 | EN 2.1–2.5 (z 2.3b), atlas PR 1.15 | 101 |
| **6** | Aktywatory, część 2, i atlas APO | EN 2.6–2.9, atlas PR 1.16–1.20 | 101 |
| **7** | Wdrożenie | IM 3.1–3.5, atlas PR 1.21–1.24 (BAI/DSS) | ≈ 100 |
| **8** | Model zdolności, część 1 | PC 4.1–4.2e, PC 4.3–4.3b | ≈ 101 |
| **9** | Model zdolności, część 2, i pierwszy próbny egzamin | PC 4.4–4.5, EX 9.2 „Kategoria odpowiedzi” (przeniesiona z dnia 6 – budżet §18.1; 9.3 jej wymaga), EX 9.3–9.4, atlas PR 1.25 (MEA), **próbny egzamin 1** zamiast testu dnia | ≈ 100 + egzamin |
| **10** | Strategia i niezależny pomiar | EX 9.5 powtórka IM/PC i pułapek, **SP1** (odblokowany w tym dniu, §7) i analiza, **próbny egzamin 2**, EX 9.6 „Dzień egzaminu”; bez testu dnia | 40 + 2 egzaminy |
| **11** | Finał „skrajnie biegły” | FN 10.1–10.3 (F1 z omówieniem SP1, F2, F3), **egzamin mistrzowski** ×2 (§15.3), projekt końcowy; bez testu dnia | 27 + 2 egzaminy |
| **12 = po egzaminie** | Mentor | moduł MT (§12.4) MT.1–MT.7, karty prowadzącego (§13), powtórki rdzenia | 69 |

Atlas 37 procesów (lekcje PR 1.14–1.25, po 3–4 procesy, ≤ 4 nowe pojęcia) pisze sesja „proste tłumaczenia” (§12.6). Pojawia się bezpośrednio po przeglądzie domen (PR 1.12–1.13) i lekcji EN 2.2 „Procesy”.

`dzien: 12` oznacza **ścieżkę po egzaminie**: UI nie wlicza jej do „Dzień N z 11” ani do budżetu i pokazuje ją jako „Mentor – po egzaminie”, dostępną od dnia 11.

Prawdziwy egzamin (Altkom/PeopleCert) najlepiej po dniu 11, a najwcześniej po dniu 10, jeśli SP1 i oba próbne egzaminy mają ≥ 35/50.

### 18.3 Ustawienia zależne od dnia – w danych, nie w kodzie
`syllabus.json` → `dni[]` dostaje pola, z których UI czyta zachowanie dnia (zamiast stałych w kodzie):

| Pole | Wartości (dzień → wartość) | Zastępuje |
|---|---|---|
| `rusztowanie` | 0–2: `pelny`, 3–4: `twoja-kolej`, 5–6: `zwiniety`, 7+: `zwiniety` | §11.2 (dni 1 / 2 / 3 / 4–5) |
| `podpowiedzi` | 0–6: `widoczne`, 7+: `ukryte` | §11.2 |
| `propozycjaTrybu` | `true` od dnia 3 | §10.2 („od dnia 2”) |
| `mentor` | 0–2: 0, 3–5: 1, 6+: 2 (ćwiczenia `mentor` na lekcję) | §13.2 |
| `wytlumacz` | 3–6: `krotki` (1 pojęcie), 7+: `pelny` (5 pojęć) | §11.8, §13.2 |
| `zrodla` | 0–2: `objasnienia`, 3–6: `fragmenty`, 7+: `bez-objasnien` | §17.11 |
| `sp1` | `true` tylko od dnia 10 | §7 („dzień 5”) |
| `egzaminy` | 9: `[proba-1]`, 10: `[sp1, proba-2]`, 11: `[mistrzowski, mistrzowski]` | §2, §15 |
| `projekt` | `true` w dniu 11 | §11.8 |
| `testDnia` | `false` w dniach z polem `egzaminy` (9, 10, 11), bo próbny egzamin zastępuje test dnia | §2 |

Pozostałe reguły z §1–§17 bez zmian. „Rano: Co pamiętasz z wczoraj?” i „mikropowtórka” obowiązują od dnia 1.

### 18.4 Podział pracy
- **Materiały**:
  - zmiana pola `dzien` w lekcjach według §18.2;
  - `syllabus.json` → `dni[]` dla dni 0–11 i wpis 12 (po egzaminie) (`tytul`, `pustaKartka`, `potrafie` i pola z §18.3);
  - `minuty` według §18.1;
  - przy lekcjach > 20 slajdów rozważ podział, a nie skracanie treści.
- **UI**:
  - plan „Dzień N z 11” z dniem 0 i ścieżka „Mentor – po egzaminie” (`dzien: 12`);
  - wszystkie stałe zależne od dnia czytane z `syllabus.dni[]` (§18.3);
  - SP1 odblokowany od dnia 10;
  - próbne egzaminy i egzamin mistrzowski według pola `egzaminy`;
  - ostrzeżenie o budżecie dnia w `--check` (§18.1).
- **Wszyscy**: nowe treści (IT0, MT, atomy, sprawdziany) przypisują `dzien` według §18.2.
