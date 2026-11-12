# Przykład KG PSP – zasady i biblia scenariusza „SWD 24/7”

Jeden spójny przykład w każdym kafelku schematu COBIT 5 (ramka „Przykładowy proces” w `notatki/schemat-cobit5.html`).
Dane: `notatki/przyklad-kg-psp.js` – dla każdego kafelka `{co, we, wy}`: co dzieje się w KG PSP, skąd to przychodzi,
co przekazuje dalej. Tryb „▶ Przykład KG PSP” (obiekt `EX` w schemacie) prowadzi przez te same kroki.
Cel: czytając same ramki po kolei, da się prześledzić całą logikę COBIT 5 na Komendzie Głównej PSP.
Nowe lub zmienione kafelki dostają ramkę zgodną z tym dokumentem.

## 0. Twarde reguły

1. **Prawdziwe** (wolno pisać jako fakt): struktura i zadania komórek KG PSP z rozdziału 1, przepisy, cele i mierniki
   z planu działalności Komendanta Głównego na 2026 r. Nazwy komórek pisz dokładnie jak w rozdziale 1.
2. **Scenariusz szkoleniowy** (fikcja): program „SWD 24/7”, awarie, liczby z rozdziału 3, harmonogram M1–M12,
   wyniki ocen, zespoły powołane „decyzją Komendanta Głównego” w ramach programu. Ramka ma nagłówek
   „scenariusz szkoleniowy”, więc nie dopisuj tego w każdym zdaniu. Nigdy nie pisz, że opisane awarie
   naprawdę się zdarzyły, i nie dawaj im kalendarzowych dat. Używaj miesięcy programu (M1…M12).
3. **Bez nazwisk.** Tylko stanowiska i komórki. Nie wymyślaj nazw firm (pisz „wykonawca utrzymania SWD PSP”).
4. **Nie wymyślaj nowych prawdziwie brzmiących faktów** (ustaw, numerów aktów, dat, kwot, liczby etatów KG).
   Liczby wolno brać tylko z rozdziałów 1 i 3. Potrzebujesz innej liczby? Napisz bez liczby.
5. **COBIT musi być trafny.** Ramka pokazuje dokładnie ten element, którego dotyczy kafelek (definicja, rola,
   atrybut, faza, cel), nie ogólnik o programie. Sprawdzaj znaczenie w opisie kafelka („from”) i w FW-PL
   (`wer/fw-czysty.json`, klucz = numer strony). Nie podawaj powiązań P/S z tabel mapowania, chyba że są w rozdziale 4.
6. **Terminy egzaminu PL**: Ład (nie nadzór), Zarządzanie, Aktywator (nie czynnik umożliwiający), Struktura ramowa,
   organizacja (nie przedsiębiorstwo), zdolność procesu, wskaźniki wiodące/opóźnione, zdarzenia wyzwalające,
   punkty zapalne, Aktywowanie zmiany, Oszacuj/Kieruj/Monitoruj (EDM), skala N/C/W/P (P = pełny).
   Termin z podręcznika możesz dodać w nawiasie, gdy kafelek dotyczy różnicy nazw.
7. Pisz konkretnie: kto (komórka, rola), co robi, na jakim dokumencie/systemie, z jakim skutkiem.
   Bez „można by”, bez lania wody, bez wykrzykników. Krótkie zdania, polski urzędowo-praktyczny.

## 1. Fakty o KG PSP (prawdziwe, stan na regulamin z 12.09.2024)

**Status.** Komendant Główny PSP jest centralnym organem administracji rządowej, podległym ministrowi właściwemu
do spraw wewnętrznych (MSWiA). Kieruje Komendą Główną z pomocą zastępców i dyrektorów komórek. Organ jest
jednoosobowy: ta sama osoba wyznacza kierunek (Ład) i jest kierownikiem jednostki. Komendant Główny jest też
Szefem Obrony Cywilnej Kraju (ustawa o ochronie ludności i obronie cywilnej, obowiązuje od 1.01.2025).
Statut KG PSP: rozporządzenie Prezesa Rady Ministrów z 23.08.2024. Regulamin organizacyjny: zarządzenie nr 8
Komendanta Głównego z 12.09.2024. Wewnętrzne regulaminy komórek zatwierdza Komendant Główny albo zastępca
nadzorujący komórkę, po opinii Biura Komendanta Głównego. Każda komórka ma zapewnić adekwatną i skuteczną
kontrolę zarządczą.

**Komórki KG PSP (13):**
- Biuro Komendanta Głównego (BKG): m.in. Wydział Planowania i Analiz (plan działalności Komendanta, sprawozdania
  kwartalne i roczne), Wydział Prasowy, Wydział Kancelaryjno-Archiwalny, Wydział Prezydialny.
- Krajowe Centrum Koordynacji Ratownictwa (KCKR): Wydział Koordynacji Ratownictwa (z Sekcją Wsparcia Stanowiska
  Kierowania Komendanta Głównego), Wydział Analiz Operacyjnych, Wydział Odwodów Operacyjnych, Ćwiczeń i Działań
  Międzynarodowych, Wydział Zagrożeń CBRN. Koordynuje krajowy system ratowniczo-gaśniczy (KSRG), prowadzi
  stanowisko kierowania Komendanta Głównego, analizuje działania ratownicze, koordynuje duże akcje i odwody.
- Biuro Przeciwdziałania Zagrożeniom (BPZ), Biuro Logistyki (BL, w tym Wydział Zamówień Publicznych),
  Biuro Współpracy Międzynarodowej (BWM), Biuro Edukacji (BE), Biuro Ochrony Ludności (BOL).
- Biuro Informatyki i Łączności (BIŁ): Wydział Infrastruktury Teleinformatycznej i Radiokomunikacji
  (z Sekcją Cyberbezpieczeństwa i Sekcją Łączności), Wydział Utrzymania Systemów Informatycznych,
  Wydział Cyfryzacji i Rozwoju Systemów Informatycznych, Wydział Administracji i Planowania.
  Zadania BIŁ (z regulaminu): planuje rozwój systemów informatycznych i przedstawia plany do zatwierdzenia
  Komendantowi Głównemu; ustala procedury, standardy i środki cyberbezpieczeństwa infrastruktury PSP;
  nadzoruje i administruje centralne systemy, w tym System Wspomagania Decyzji PSP (SWD PSP); planuje potrzeby,
  zakupy i utrzymanie systemów i łączności; geoinformacja (we współpracy z KCKR); współpraca z ABW i RCB
  w sprawach cyberbezpieczeństwa; obsługa i zgłaszanie incydentów bezpieczeństwa do właściwego CSIRT (KSC).
- Biuro Kadr (BK): kadry, sprawy osobowe, BHP; w jego strukturze **Samodzielne Stanowisko ds. Audytu
  Wewnętrznego**, które podlega bezpośrednio Komendantowi Głównemu.
- Biuro Finansów (BF): plany dochodów i wydatków, sprawozdania z wykonania budżetu, dotacje dla OSP,
  fundusze europejskie.
- Biuro Kontroli, Skarg i Wniosków (BKSW): kontrole, skargi i wnioski.
- Biuro Prawne (BP): obsługa prawna, legislacja.
- Inspektorat Ochrony Informacji Niejawnych i Spraw Obronnych (IO): kancelarie tajne, Inspektor Bezpieczeństwa
  Teleinformatycznego, planowanie obronne, **Inspektor Ochrony Danych (IOD)**.

**Skala KSRG.** 16 komend wojewódzkich (KW) i ponad 300 komend powiatowych/miejskich (KM/KP) z jednostkami
ratowniczo-gaśniczymi (JRG); w KSRG działają też jednostki OSP. Dyżurni pracują na stanowiskach kierowania:
SK w KM/KP, wojewódzkie stanowiska w KW, stanowisko kierowania Komendanta Głównego w KCKR.

**SWD PSP (prawdziwe).** System Wspomagania Decyzji PSP działa na podstawie art. 14g–14ha ustawy o ochronie
przeciwpożarowej; minimalną funkcjonalność określa rozporządzenie MSWiA w sprawie SWD PSP (2021, z późn. zm.),
m.in. przyjmowanie zgłoszeń i rejestrację zdarzeń, połączenie z systemem powiadamiania ratunkowego (centra
powiadamiania ratunkowego 112, CPR) i sposób działania w sytuacji awaryjnej. Dostęp do systemu przyznaje się
w zakresie niezbędnym do zadań. SWD PSP jest podstawowym narzędziem stanowisk kierowania (dysponowanie sił
i środków, koordynacja działań). Współadministratorami danych osobowych w SWD PSP są m.in. Komendant Główny,
komendanci wojewódzcy i komendanci powiatowi (miejscy) PSP; każda jednostka ma swojego IOD.

**Plan działalności Komendanta Głównego na 2026 r. (prawdziwe cele i mierniki):**
- Cel: „Zwiększenie sprawności interwencji ratowniczych jednostek ochrony przeciwpożarowej tworzących KSRG”;
  miernik: odsetek interwencji, w których jednostka KSRG dotarła na miejsce w czasie krótszym niż 15 minut, **≥ 90%**.
- Cel: „Utrzymanie Systemu Wspomagania Decyzji PSP”; miernik: dostępność SWD PSP (miernik SLA), **97%**;
  zadania: stałe monitorowanie działania SWD PSP, modernizacja infrastruktury teleinformatycznej KG PSP,
  usuwanie awarii infrastruktury teleinformatycznej KG PSP.
- Cel: „Modernizacja systemów teleinformatycznych”; miernik: realizacja działań z harmonogramu ustawy
  modernizacyjnej na lata 2026–2029, **18%** w 2026 r.; zadania: ośrodki przetwarzania danych PSP,
  wzmocnienie cyberbezpieczeństwa i sieci, modernizacja stanowiska kierowania KG PSP i systemów łączności,
  zakup sprzętu i oprogramowania.
- Cel: rozbudowa, modernizacja i ujednolicenie systemu ostrzegania i alarmowania (projekt KPO, 100%).
- Cele ochrony ludności (Program Ochrony Ludności i Obrony Cywilnej na lata 2025–2026).
- Plan i sprawozdanie z jego wykonania są publikowane; KG PSP publikuje też oświadczenie o stanie kontroli zarządczej.

**Przepisy, które dotyczą przykładu:** ustawa o ochronie przeciwpożarowej (SWD PSP), ustawa o PSP, rozporządzenie
w sprawie SWD PSP, ustawa o systemie powiadamiania ratunkowego (CPR 112), ustawa o krajowym systemie
cyberbezpieczeństwa (KSC) – nowelizacja wdrażająca NIS2 obowiązuje od 3.04.2026, podmioty mają 12 miesięcy
na dostosowanie (do 3.04.2027); Krajowe Ramy Interoperacyjności (rozporządzenie Rady Ministrów z 21.05.2024:
minimalne wymagania dla systemów teleinformatycznych, w tym bezpieczeństwo informacji); RODO; ustawa o ochronie
informacji niejawnych; ustawa o finansach publicznych (kontrola zarządcza, audyt wewnętrzny); Prawo zamówień
publicznych. Kontrolę zewnętrzną prowadzi m.in. NIK.

**Interesariusze zewnętrzni:** MSWiA (nadzór, budżet, ustawa modernizacyjna), Minister Cyfryzacji (KSC, KRI),
właściwy CSIRT, ABW i RCB (cyberbezpieczeństwo), UODO, NIK, wojewodowie (CPR 112; KW i KM/KP działają
w administracji zespolonej), OSP i gminy, Policja i Państwowe Ratownictwo Medyczne (współdziałanie w zdarzeniach),
wykonawca utrzymania SWD PSP, operatorzy łączności, obywatele (zgłaszający i poszkodowani).

## 2. Mapowanie ról COBIT 5 (Rysunek 33) na KG PSP

| Rola COBIT | W KG PSP |
|---|---|
| Zarząd | Komendant Główny z kierownictwem KG (zastępcy); decyzje kierunkowe na naradzie kierownictwa |
| Dyrektor generalny (CEO) | Komendant Główny PSP |
| Dyrektor ds. finansowych (CFO) | Dyrektor Biura Finansów |
| Dyrektor ds. operacyjnych (COO) | zastępca Komendanta Głównego nadzorujący KCKR (operacje ratownicze) |
| Kierownictwo biznesowe | dyrektorzy komórek merytorycznych: KCKR, BOL, BPZ, BE |
| Właściciele procesów biznesowych | dyrektor KCKR (koordynacja ratownictwa, dysponowanie), dyrektor BOL (ostrzeganie i alarmowanie) |
| Komitet ds. strategii (wykonawczy) | Zespół sterujący ds. cyfryzacji PSP (scenariusz: powołany decyzją Komendanta Głównego) |
| Komitet sterujący (programów/projektów) | Komitet sterujący programu „SWD 24/7” (scenariusz) |
| Biuro zarządzania projektami (PMO) | biuro programu przy Wydziale Cyfryzacji i Rozwoju Systemów Informatycznych BIŁ (scenariusz) |
| Biuro zarządzania wartością (VMO) | brak osobnej komórki; rolę pełnią Biuro Finansów i Wydział Planowania i Analiz BKG |
| Kierownik ds. ryzyka (CRO) | brak; ryzyko w kontroli zarządczej koordynuje BKG, właścicielami ryzyk są dyrektorzy komórek |
| Dyrektor ds. bezpieczeństwa informacji (CISO) | kierownik Sekcji Cyberbezpieczeństwa BIŁ; dla systemów niejawnych Inspektor Bezpieczeństwa Teleinformatycznego (IO) |
| Rada ds. architektury | Zespół ds. architektury systemów PSP (scenariusz) |
| Komitet ds. ryzyka korporacyjnego | narada kierownictwa przy rocznym przeglądzie ryzyk kontroli zarządczej |
| Kierownik ds. zasobów ludzkich | Dyrektor Biura Kadr |
| Zgodność (Compliance) | Biuro Prawne; kontrole w jednostkach: BKSW |
| Audyt | Samodzielne Stanowisko ds. Audytu Wewnętrznego (podlega Komendantowi) |
| Dyrektor ds. informatyki (CIO) | Dyrektor Biura Informatyki i Łączności |
| Kierownik ds. architektury / rozwoju | naczelnik Wydziału Cyfryzacji i Rozwoju Systemów Informatycznych BIŁ |
| Kierownik ds. operacji IT | naczelnik Wydziału Utrzymania Systemów Informatycznych BIŁ |
| Kierownik ds. administracji IT | naczelnik Wydziału Administracji i Planowania BIŁ |
| Kierownik ds. usług | koordynator usługi SWD PSP w Wydziale Utrzymania Systemów Informatycznych (scenariusz) |
| Kierownik ds. bezpieczeństwa informacji | Sekcja Cyberbezpieczeństwa BIŁ |
| Kierownik ds. ciągłości działania | koordynator ciągłości SWD w BIŁ, współpracuje z KCKR (scenariusz) |
| Funkcjonariusz ds. prywatności | Inspektor Ochrony Danych (IO) |

Interesariusze wewnętrzni (Rysunek 7): powyższe role + użytkownicy IT (dyżurni stanowisk kierowania KM/KP, KW,
KCKR; analitycy Wydziału Analiz Operacyjnych), kierownicy IT (naczelnicy BIŁ), administratorzy SWD w KW.
Zewnętrzni: patrz rozdział 1 (MSWiA i obywatele w roli „właścicieli/udziałowców”, regulatorzy, partnerzy,
dostawcy, audytorzy zewnętrzni = NIK, organizacje normalizacyjne = PKN/ISO, konsultanci = zewnętrzny asesor).

## 3. Scenariusz szkoleniowy: program „SWD 24/7”

**Punkty zapalne (fikcja).** W okresie przed startem programu: kilka przerw SWD PSP na stanowiskach kierowania;
dostępność w jednym kwartale **96,4%** wobec miernika **97%**. Dyżurni zgłaszają awarie telefonicznie do KW
i do BIŁ, mailem i komunikatorem – nie ma jednego rejestru. Wykonawca utrzymania dostaje to samo zgłoszenie
od kilku osób. Nikt nie wie, ile trwa przywrócenie (szacunkowo **ok. 5 godzin** średnio). Przy przerwie dyżurni
przechodzą na tryb awaryjny (papierowa karta zdarzenia, łączność radiowa), a potem przepisują dane do SWD –
z opóźnieniem i lukami. To psuje dane do miernika „dojazd < 15 min”.

**Zdarzenia wyzwalające (prawdziwe):** nowelizacja KSC (od 3.04.2026; dostosowanie do 3.04.2027: zarządzanie
incydentami, zgłaszanie do CSIRT, bezpieczeństwo systemów); ustawa modernizacyjna na lata 2026–2029 (środki
na ośrodki przetwarzania danych, cyberbezpieczeństwo, stanowisko kierowania KG PSP); miernik dostępności SWD PSP
97% w planie działalności na 2026 r.

**Decyzja (Ład).** Komendant Główny na naradzie kierownictwa ocenia ryzyko i korzyści, ustanawia program
„SWD 24/7” decyzją, wyznacza sponsora (zastępca Komendanta Głównego nadzorujący BIŁ), powołuje komitet
sterujący, zatwierdza zakres, budżet i apetyt na ryzyko: **żadna przerwa SWD na stanowiskach kierowania dłuższa
niż 1 godzina** (próg scenariusza) i dostosowanie do KSC przed 3.04.2027.

**Obsada programu (scenariusz):** sponsor – zastępca KG nadzorujący BIŁ; kierownik programu – zastępca dyrektora BIŁ;
właściciel procesu DSS02 – naczelnik Wydziału Utrzymania Systemów Informatycznych; właściciel procesu biznesowego
(odbiorca usługi) – dyrektor KCKR; komitet sterujący: sponsor, dyrektor BIŁ, dyrektor KCKR, przedstawiciele
dwóch KW pilotażowych, naczelnik Wydziału Administracji i Planowania BIŁ; doradczo IOD i kierownik Sekcji
Cyberbezpieczeństwa; audytor wewnętrzny jako obserwator bez głosu (niezależność).

**Kaskada celów (używaj tej ścieżki):**
potrzeby interesariuszy („pomoc ma dotrzeć szybko także wtedy, gdy system zawiedzie”; KCKR: „SWD ma działać
24/7”; MSWiA: „miernik planu działalności i KSC mają być spełnione”) → **cel organizacji 7** „Ciągłość i dostępność
usług biznesowych” (także 4 „Zgodność z przepisami prawa i regulacjami” i 9 „Świadome podejmowanie decyzji
strategicznych na podstawie informacji”) → **cel IT 07** „Dostarczanie usług IT zgodnie z wymogami biznesowymi”
(oraz 04 ryzyko IT, 10 bezpieczeństwo, 14 dostępność wiarygodnych informacji) → **proces DSS02** (wspierające:
DSS03, DSS04, DSS05, APO09, APO10, APO12, APO13, BAI06, MEA01, MEA03) i cele pozostałych aktywatorów.
Uwaga z tabel (FW-PL s. 49–50): dla celu organizacji 7 relacja z celem IT 07 jest wspierająca (S), podstawowe (P)
to cele IT 04, 10 i 14. Wybór ścieżki 7 → 07 → DSS02 jest decyzją przykładu, nie jedyną drogą.

**Harmonogram (miesiące programu):** M1 faza 1 · M2–M3 faza 2 · M3–M4 faza 3 · M4–M5 faza 4 · M5–M10 faza 5
(pilotaż w KG i 2 KW pilotażowych od M6, 16 KW od M8, KM/KP od M9) · M11 faza 6 (ponowna ocena) · od M12 faza 7.
Termin graniczny: dostosowanie do KSC do 3.04.2027.

**Ocena stanu obecnego DSS02 (faza 2, scenariusz):** PA 1.1 = **P** (awarie są ostatecznie usuwane, usługa wraca –
dowody: maile, zgłoszenia u wykonawcy, notatki dyżurnych); PA 2.1 = **C** (jest grafik dyżurów administratorów,
ale nikt nie planuje ani nie monitoruje obsługi incydentów i czasu przywrócenia); PA 2.2 = **C** (zgłoszenia i notatki
istnieją, ale nie są jednolite, kontrolowane ani przechowywane w jednym miejscu). Wynik: **poziom 1 (wykonywany)**.
Reguła: poziom osiągnięty, gdy jego atrybuty ≥ W, a wszystkie niższe = P.

**Stan docelowy (faza 3):** **poziom 3** do końca M10 (przed terminem KSC): PA 1.1, 2.1, 2.2 = P; PA 3.1 i 3.2 ≥ W.
Poziom 5 odrzucono jako zbyt kosztowny w stosunku do korzyści; poziom 4 – jako następny krok po ustabilizowaniu.

**Luka (faza 3):** brak jednego punktu zgłoszeń dla KG, KW i KM/KP; brak kategorii i priorytetów; brak czasów
reakcji uzgodnionych z KCKR i w umowie z wykonawcą; brak rejestru i bazy wiedzy; brak pomiaru czasu przywrócenia;
brak ścieżki „incydent bezpieczeństwa → Sekcja Cyberbezpieczeństwa → CSIRT”; brak szkoleń dyżurnych
i administratorów KW; brak zdefiniowanego standardowego procesu z dopuszczalnym dostosowaniem dla KW.

**Plan w 7 aktywatorach (faza 4):**
1. Zasady, polityki i struktury ramowe: „Procedura obsługi zgłoszeń i incydentów SWD PSP” wprowadzona decyzją
   Komendanta Głównego dla wszystkich jednostek PSP; zasada „każdą niedostępność SWD na stanowisku kierowania
   zgłaszamy od razu, przez jeden kanał”; aktualizacja polityki bezpieczeństwa informacji (SZBI wg KRI) o KSC.
2. Procesy: praktyki DSS02 (rejestracja, klasyfikacja, priorytet, diagnoza, eskalacja do wykonawcy, przywrócenie,
   zamknięcie z potwierdzeniem dyżurnego, raport); styki: DSS03 (przyczyny), DSS04 (tryb awaryjny), DSS05/KSC.
3. Struktury: Punkt Zgłoszeń SWD 24/7 w Wydziale Utrzymania Systemów Informatycznych; koordynatorzy SWD w 16 KW;
   macierz RACI (A za proces: naczelnik WUSI; R: dyżurny punktu zgłoszeń, administratorzy KW; C: KCKR, Sekcja
   Cyberbezpieczeństwa; I: komitet sterujący).
4. Kultura, etyka i zachowanie: zgłaszamy od razu, bez szukania winnych; analiza po każdym incydencie P1 jak
   analiza działań ratowniczych; kierownictwo daje przykład, korzystając z nowego kanału.
5. Informacja: rejestr incydentów (czas wykrycia, czas przywrócenia, wpływ na stanowiska kierowania), raport
   kwartalny dostępności (miernik planu działalności), baza wiedzy.
6. Usługi, infrastruktura i aplikacje: narzędzie do obsługi zgłoszeń (zakup przez Wydział Zamówień Publicznych BL
   albo rozbudowa posiadanego – zasada „nabywaj, zanim zbudujesz”), monitoring SWD 24/7, ośrodek zapasowy
   w ramach modernizacji ośrodków przetwarzania danych.
7. Ludzie, umiejętności i kompetencje: szkolenia administratorów KW (BIŁ z Biurem Edukacji) i dyżurnych SK,
   zastępstwa na dyżurach punktu zgłoszeń, profile kompetencji ról.

**Priorytety incydentów (scenariusz):** P1 – SWD niedostępny na stanowisku kierowania (reakcja natychmiast,
przywrócenie albo obejście w ≤ 1 h); P2 – niedziała moduł lub pojedyncze stanowisko; P3 – drobna usterka.

**Wynik (faza 6, scenariusz):** ponowna ocena w M11 (zespół z przeszkolonym asesorem, audytor obserwuje):
PA 1.1, 2.1, 2.2 = P; PA 3.1 = W; PA 3.2 = W → **poziom 3**. Korzyści mierzone osobno: średni czas przywrócenia
z ok. 5 h do **ok. 1,5 h**; dostępność ≥ 97% w kolejnych kwartałach; 100% incydentów P1 w rejestrze; zgłoszenia
do CSIRT w terminach KSC; kompletniejsze dane o zdarzeniach do miernika 15 min.

**Utrzymanie (faza 7):** procedura w regulaminie wewnętrznym BIŁ; kwartalny przegląd miernika na naradzie
kierownictwa; coroczna ocena DSS02; nowy wyznacznik otwiera kolejną pętlę: **DSS04** (ćwiczenie przełączenia
na ośrodek zapasowy i pracy SK w trybie awaryjnym) i pełne wymagania KSC (APO13/DSS05).

**Uzasadnienie biznesowe (business case, scenariusz):** potrzeba działania (przerwy SWD, KSC); korzyści i zgodność
ze strategią (miernik 97%, cel 15 min, ustawa modernizacyjna); koszty (narzędzie, umowa serwisowa, szkolenia,
dyżury 24/7, bieżące koszty IT i koszty po stronie jednostek); ryzyko, ograniczenia, zależności (zamówienia
publiczne, wykonawca, kadry); role i odpowiedzialność; sposób monitorowania (kwartalnie). Dokument żyje przez
cały program i aktualizuje się go na komitecie.

## 4. Cele organizacji (17) i cele IT (17) w KG PSP

Cele organizacji (perspektywa BSC; znaczenie w służbie publicznej):
1 Wartość inwestycji dla interesariuszy – efekt inwestycji z ustawy modernizacyjnej dla obywateli i KSRG.
2 Portfel konkurencyjnych produktów i usług – portfel usług PSP (ratownictwo, prewencja, ochrona ludności)
  dopasowany do potrzeb; „konkurencyjność” = adekwatność i jakość usług publicznych.
3 Zarządzane ryzyko biznesowe – ryzyka działań ratowniczych i ciągłości KSRG pod kontrolą (kontrola zarządcza).
4 Zgodność z przepisami prawa – KSC, KRI, RODO, rozporządzenie w sprawie SWD PSP, informacje niejawne.
5 Przejrzystość finansowa – plan i sprawozdania budżetowe, rozliczenie środków modernizacyjnych.
6 Kultura usług zorientowanych na klienta – obywatel i zgłaszający; klienci wewnętrzni: KW, KM/KP, KCKR.
7 Ciągłość i dostępność usług – dysponowanie i koordynacja 24/7 (wątek główny).
8 Zwinność wobec zmian otoczenia – nowe zadania ochrony ludności, duże zdarzenia (powodzie, nawałnice).
9 Decyzje strategiczne na podstawie informacji – analizy KCKR z danych SWD, mierniki planu działalności.
10 Optymalizacja kosztów świadczenia usług – koszt utrzymania SWD i łączności.
11 Funkcjonalność procesów biznesowych – droga zgłoszenie → dysponowanie → meldunek bez zbędnych kroków.
12 Koszty procesów biznesowych – praca dyżurnych, podwójne wpisy po trybie awaryjnym.
13 Zarządzanie programami zmian – programy z ustawy modernizacyjnej, Programu Ochrony Ludności, KPO.
14 Wydajność pracowników i działań – dyżurni i administratorzy nie tracą czasu na obejścia.
15 Zgodność z politykami wewnętrznymi – zarządzenia i decyzje Komendanta, regulaminy, procedury.
16 Wykwalifikowany i zmotywowany personel – kadra BIŁ, dyżurni, administratorzy KW.
17 Kultura innowacji – nowe technologie w ratownictwie (geoinformacja, lokalizacja, analityka).

Cele IT (01–17) – ich odpowiedniki w KG PSP:
01 zgodność IT ze strategią (plan rozwoju systemów BIŁ zgodny z planem działalności i ustawą modernizacyjną) ·
02 zgodność IT z przepisami (KSC, KRI, RODO) · 03 zaangażowanie kierownictwa w decyzje IT (narada kierownictwa,
zespół sterujący) · 04 zarządzanie ryzykiem związanym z IT (rejestr ryzyk SWD) · 05 korzyści z inwestycji IT
(program „SWD 24/7”, ośrodki przetwarzania danych) · 06 przejrzystość kosztów, korzyści i ryzyka IT ·
07 usługi IT zgodne z wymogami (dostępność SWD 97%, czasy reakcji P1) · 08 właściwe wykorzystanie aplikacji
i informacji (dyżurni korzystają z SWD zgodnie z procedurą) · 09 zwinność IT (szybkie zmiany SWD przy nowych
zadaniach) · 10 bezpieczeństwo informacji i infrastruktury (Sekcja Cyberbezpieczeństwa, KSC) · 11 optymalizacja
zasobów i infrastruktury IT · 12 aplikacje wspierające procesy (SWD dopasowany do pracy SK) · 13 programy
dostarczające korzyści w czasie, budżecie i jakości · 14 dostępność wiarygodnych i użytecznych informacji
do decyzji (dane SWD do analiz KCKR) · 15 zgodność IT z politykami wewnętrznymi · 16 kompetentny i zmotywowany
personel IT · 17 wiedza, doświadczenie i inicjatywy na rzecz innowacji.

## 5. 37 procesów – przykład dla każdego

- EDM01: Komendant Główny ustala decyzją, kto i jak decyduje o systemach teleinformatycznych PSP (zespół sterujący
  ds. cyfryzacji, progi decyzji, raportowanie do kierownictwa).
- EDM02: Komendant wymaga dowodu korzyści programu: dostępność ≥ 97%, krótszy czas przywrócenia, pełniejsze dane
  do miernika 15 min; przegląd korzyści w fazie 6.
- EDM03: Komendant ustala apetyt na ryzyko: przerwa SWD na SK > 1 h nieakceptowalna; niedostosowanie do KSC –
  nieakceptowalne.
- EDM04: Komendant przydziela zasoby: środki z ustawy modernizacyjnej, obsada punktu zgłoszeń 24/7, decyzja
  własne zasoby kontra wykonawca.
- EDM05: przejrzystość: sprawozdanie z planu działalności (miernik SWD), oświadczenie o stanie kontroli
  zarządczej, informacja dla MSWiA, komunikat do KW o postępie programu.
- APO01: BIŁ porządkuje swoją metodykę zarządzania: regulamin wewnętrzny biura, role, wybrane procesy COBIT, RACI.
- APO02: plan rozwoju systemów PSP (BIŁ przedstawia Komendantowi do zatwierdzenia), spięty z planem działalności
  i ustawą modernizacyjną.
- APO03: architektura: SWD PSP, połączenie z CPR 112, ośrodki przetwarzania danych, sieć PSP, łączność radiowa,
  geoinformacja; zasady architektury.
- APO04: innowacje: pilotaż automatycznego wykrywania niedostępności SWD z poziomu stanowisk kierowania,
  testy nowych usług mapowych.
- APO05: portfel: ośrodki przetwarzania danych, cyberbezpieczeństwo, modernizacja SK KG, system ostrzegania
  i alarmowania (KPO); „SWD 24/7” dostaje priorytet przed nowymi funkcjami SWD.
- APO06: budżet i koszty programu (Wydział Administracji i Planowania BIŁ z Biurem Finansów): narzędzie, umowa
  serwisowa, szkolenia, dyżury; środki ustawy modernizacyjnej.
- APO07: Biuro Kadr i BIŁ: obsada punktu zgłoszeń 24/7, zastępstwa, rekrutacja informatyków, szkolenia,
  wpływ przeniesień służbowych na ciągłość wiedzy.
- APO08: relacje BIŁ z KCKR i 16 KW: stałe spotkania koordynatorów SWD, jeden kanał komunikatów o awariach.
- APO09: umowa o poziomie usług SWD PSP: dostępność 97%, priorytety P1–P3, czasy reakcji, 24/7; katalog usług BIŁ.
- APO10: umowa z wykonawcą utrzymania SWD (zamówienie przez Wydział Zamówień Publicznych BL): czasy reakcji,
  kary umowne, raporty, kwartalna ocena wykonawcy.
- APO11: jakość: przegląd próbki zgłoszeń (czy priorytet poprawny), ankieta dyżurnych, działania korygujące.
- APO12: rejestr ryzyk SWD w ramach kontroli zarządczej: awaria ośrodka, utrata połączenia z CPR, cyberatak,
  brak kadr; właściciele i działania.
- APO13: system zarządzania bezpieczeństwem informacji (SZBI wg KRI) uzupełniony o wymagania KSC; analiza ryzyka;
  Sekcja Cyberbezpieczeństwa.
- BAI01: program „SWD 24/7”: karta programu, harmonogram M1–M12, komitet sterujący, projekty (narzędzie, procedura,
  szkolenia, monitoring).
- BAI02: wymagania do narzędzia zgłoszeń od dyżurnych SK, KCKR, administratorów KW, Sekcji Cyberbezpieczeństwa
  (dane do zgłoszenia do CSIRT) i IOD (dane osobowe w zgłoszeniach).
- BAI03: wybór i konfiguracja rozwiązania: kategorie, priorytety, eskalacje, integracja z monitoringiem.
- BAI04: dostępność i pojemność SWD na szczyty zdarzeń (nawałnice, powodzie), testy obciążeniowe, planowanie zasobów.
- BAI05: przekonanie dyżurnych i administratorów do nowego sposobu zgłaszania: komunikacja kierownictwa,
  szkolenia, koordynatorzy w KW jako ambasadorzy zmiany.
- BAI06: każda zmiana w SWD (np. aktualizacja od wykonawcy) przez rejestr zmian i okno serwisowe uzgodnione z KCKR.
- BAI07: testy akceptacyjne nowej wersji SWD z udziałem dyżurnych, plan wycofania, przekazanie do utrzymania.
- BAI08: baza wiedzy: instrukcje obejść dla SK, wnioski z analiz poincydentalnych.
- BAI09: ewidencja aktywów: stacje SK, serwery, licencje SWD, ich cykl życia.
- BAI10: konfiguracja: zależności SWD – serwery – sieć – łącze do CPR (CMDB), potrzebne do diagnozy.
- DSS01: eksploatacja: kopie zapasowe SWD, monitoring 24/7, prace w ośrodku przetwarzania danych.
- DSS02: wątek główny – patrz rozdział 3.
- DSS03: analiza przyczyn powtarzających się przerw (np. łącze do CPR), jak analiza działań ratowniczych:
  przyczyna, wnioski, działania naprawcze.
- DSS04: plan ciągłości SWD, praca SK w trybie awaryjnym (rozporządzenie), ćwiczenia przełączenia; kolejna pętla.
- DSS05: uprawnienia do SWD w zakresie niezbędnym, konta, ochrona przed złośliwym oprogramowaniem,
  monitorowanie zdarzeń bezpieczeństwa.
- DSS06: kontrole w procesie biznesowym: obowiązkowe pola karty zdarzenia, kontrola znaczników czasu
  (zgłoszenie, zadysponowanie, przybycie – źródło miernika 15 min), blokada edycji po zamknięciu zdarzenia.
- MEA01: kwartalny raport dostępności SWD i czasu przywrócenia dla kierownictwa; trend; działania.
- MEA02: kontrola zarządcza: samoocena komórek, zadanie zapewniające audytu wewnętrznego, oświadczenie
  o stanie kontroli zarządczej.
- MEA03: zgodność z KSC (do 3.04.2027), KRI, RODO (współadministratorzy SWD), rozporządzeniem w sprawie SWD,
  ochroną informacji niejawnych; kontrole NIK.

## 6. Aktywatory – szczegóły do kafelków z Rysunków 28–39

**Informacja (karta zdarzenia w SWD).** Wytwórca: dyżurny SK zakłada kartę po zgłoszeniu z CPR; kierujący
działaniem ratowniczym (KDR) uzupełnia meldunek. Opiekun: BIŁ (administrator SWD) i administratorzy KW.
Konsument: KCKR (koordynacja), Wydział Analiz Operacyjnych (statystyka, miernik 15 min), MSWiA (raporty).
Jakość rzeczywista: dokładność (adres, współrzędne, znaczniki czasu), obiektywność, wiarygodność (źródło: CPR),
reputacja (SWD jako oficjalne źródło statystyki PSP). Jakość kontekstowa: adekwatność, kompletność, aktualność
(wpis na bieżąco, nie przepisywanie z papieru po awarii), właściwa ilość, zwięzłość, spójna reprezentacja
(słowniki typów zdarzeń), interpretowalność, zrozumiałość, łatwość posługiwania się. Dostęp i bezpieczeństwo:
dostępność 24/7, ograniczony dostęp (uprawnienia w zakresie niezbędnym, dane osobowe zgłaszającego).
Cykl życia: planowanie (jakie dane zbiera SWD), projektowanie (model karty), tworzenie/pozyskanie (zgłoszenie
z CPR, wpis dyżurnego), użytkowanie (przechowywanie, udostępnianie KW i KCKR, wykorzystanie do dysponowania
i analiz), monitorowanie, usuwanie/archiwizacja według przepisów. Warstwy: fizyczna (serwery w ośrodkach
przetwarzania danych, nośniki kopii), empiryczna (kanały dostępu: stanowisko dyżurnego, sieć PSP, interfejs z CPR),
syntaktyczna (format karty, kody i słowniki), semantyczna (typ informacji, aktualność, poziom szczegółowości),
pragmatyczna (retencja, status operacyjna/historyczna, wartość, zależność od innych danych, nowość), świat
społeczny (prawo: ustawa i RODO, współadministrowanie, kultura meldunku).

**Usługi, infrastruktura i aplikacje.** Usługa: SWD PSP dla stanowisk kierowania. Infrastruktura: ośrodki
przetwarzania danych PSP, sieć PSP, łączność radiowa, stanowiska kierowania. Aplikacje: moduły SWD, narzędzie
zgłoszeń, monitoring. Zasady architektury: ponowne wykorzystanie (wspólne usługi mapowe), nabywanie zamiast
budowania, prostota, zwinność, otwartość (standardy wymiany z CPR). Poziomy usług: 97%, P1–P3.

**Ludzie, umiejętności i kompetencje.** Kadra BIŁ (funkcjonariusze i pracownicy cywilni), administratorzy SWD
w KW, dyżurni SK. Umiejętności techniczne (administracja SWD, sieci, bezpieczeństwo) i behawioralne (rozmowa
z dyżurnym w stresie). Cykl życia: rekrutacja, szkolenie, przeniesienia służbowe, zastępstwa, odejścia.
Dobra praktyka: profil kompetencji dla każdej roli (np. według SFIA).

**Kultura, etyka i zachowanie.** Etyka organizacji: wartości służby – ratowanie życia i zdrowia, zaufanie
obywateli. Etyka indywidualna: rzetelność dyżurnego i administratora. Zachowania: zgłaszanie błędów od razu,
świadome podejmowanie ryzyka przy obejściach, przestrzeganie procedury, reakcja na negatywne wyniki bez szukania
winnych. Dobre praktyki: komunikacja, egzekwowanie, zachęty (wyróżnienie KW z najlepszą jakością zgłoszeń),
świadomość (szkolenia), przykład kierownictwa.

**Struktury organizacyjne (komitet sterujący programu).** Mandat: decyzja Komendanta Głównego. Zasady działania:
posiedzenia co 2 tygodnie, protokół, decyzje większością z rozstrzygającym głosem sponsora. Skład: rozdział 3.
Zakres kontroli: decyzje w granicach budżetu i zakresu programu. Poziom uprawnień: zmiana harmonogramu do 1
miesiąca bez eskalacji. Delegowanie: kierownik programu decyduje o zadaniach projektów. Eskalacja: do Komendanta
Głównego przy ryzyku niedotrzymania terminu KSC lub przekroczeniu budżetu. Cykl życia: powołanie, działanie,
rozwiązanie po fazie 7 i przekazanie spraw do linii (BIŁ, KCKR).

**Zasady, polityki i struktury ramowe.** Zasada (nieliczne, proste, wyrażają wartości): „Dostępność SWD
dla stanowisk kierowania ma pierwszeństwo przed nowymi funkcjami”. Polityka: polityka bezpieczeństwa informacji
(SZBI wg KRI) i procedura obsługi zgłoszeń SWD – cel, zakres, role, wyjątki, konsekwencje, sposób monitorowania.
Struktura ramowa: komplet aktów wewnętrznych KG (decyzje i zarządzenia Komendanta, regulaminy) spięty jednym
podejściem. Cykl życia: projekt w BIŁ, opinia BKG i Biura Prawnego, podpis Komendanta, ogłoszenie, przegląd,
wycofanie. Dobre polityki: skuteczne, wydajne, nieinwazyjne; dostępne dla adresatów (dyżurni i administratorzy wiedzą, gdzie je znaleźć).

**Procesy (aktywator).** Interesariusze procesu = role z macierzy RACI. Cele procesu: wewnętrzne (procedura
zgodna z KSC i regulaminem), kontekstowe (dopasowanie do pracy SK 24/7), dostępność i bezpieczeństwo.
Cykl życia procesu: projekt, wdrożenie, eksploatacja, monitorowanie, aktualizacja albo wycofanie. Dobre praktyki:
praktyki zarządzania DSS02, działania, dane wejściowe i wyniki (np. zgłoszenie od dyżurnego → zarejestrowany
incydent → raport).

## 7. Ocena zdolności i porównania (do kafelków modelu zdolności)

Poziomy DSS02 w KG PSP:
0 niekompletny – część przerw nie jest usuwana albo usługa nie wraca bez interwencji z zewnątrz; brak efektu.
1 wykonywany – stan obecny: awarie ostatecznie usuwane, ale każdy po swojemu (PA 1.1 = P).
2 zarządzany – obsługa planowana i monitorowana (dyżury, czasy, odpowiedzialności), zgłoszenia i raporty
  kontrolowane (PA 2.1, PA 2.2).
3 ustanowiony – stan docelowy: jeden standardowy proces dla KG, 16 KW i KM/KP, z uzasadnionym dostosowaniem
  dla KW; faktycznie stosowany (PA 3.1, PA 3.2).
4 przewidywalny – czas przywrócenia mierzony i utrzymywany w ustalonych granicach (PA 4.1, PA 4.2).
5 zoptymalizowany (podr.: optymalizujący) – innowacje i stałe ulepszanie na podstawie pomiarów (PA 5.1, PA 5.2).

Skala N/C/W/P (egzamin; podręcznik N/P/L/F): N 0–15%, C >15–50%, W >50–85%, P >85–100% – ocenia się stopień
osiągnięcia atrybutu na podstawie dowodów, nie liczbę pracowników ani istnienie dokumentu.

COBIT 4.1 (porównanie, tryb warunkowy): gdyby KG PSP oceniła tę samą obsługę awarii modelem dojrzałości
COBIT 4.1, wyszłoby zapewne „powtarzalny” (2), bo administratorzy robią podobnie; w modelu zdolności COBIT 5
wynik to poziom 1 – wyniki COBIT 5 są zwykle niższe i nie przelicza się ich 1:1.

Cel oceny: wewnętrzny (porównanie DSS02 w KW, wybór priorytetów), ponowna ocena w fazie 6. Ocenę formalną
prowadzi przeszkolony asesor według PAM (model oceny procesu); samoocenę może zrobić zespół programu.

## 8. Standardy i inne metodyki (do kafelków standardów)

ITIL / ISO/IEC 20000 – praktyki obsługi incydentów i katalogu usług w procedurze SWD; ISO/IEC 27000 (27001) –
SZBI wymagany przez KRI i podstawy wymagań KSC; ISO 31000 – podejście do ryzyka w kontroli zarządczej;
ISO/IEC 38500 – zasady Ładu IT dla Komendanta Głównego (odpowiedzialność, strategia, nabycie, sprawność,
zgodność, zachowania ludzkie); TOGAF – architektura (Zespół ds. architektury); PRINCE2 / PMBOK – projekty
w ramach ustawy modernizacyjnej i programu; ISO/IEC 15504 – podstawa modelu zdolności i oceny. COBIT 5 spina je
w jedną strukturę ramową (Zasada 3) i nie zastępuje ich.
