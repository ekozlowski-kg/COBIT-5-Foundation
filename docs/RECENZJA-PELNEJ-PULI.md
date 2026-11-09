# Pełna recenzja banku i testy z nauką — 2026-11-09

Przegląd obejmuje **każdą z 1711 pierwotnych pozycji**: treść, klucz, wszystkie opcje oraz ich uzasadnienia. Zastępuje wcześniejsze ograniczenie przeglądu wybiórczego. Recenzję wykonał Codex przez indywidualne czytanie pozycji; walidacja skryptowa była dodatkową kontrolą struktury, a nie zamiennikiem recenzji. Nie jest to akredytacja ISACA ani niezależna recenzja człowieka.

## Wynik selekcji

| Element | Wynik |
|---|---:|
| Pierwotne pytania przejrzane pojedynczo | 1711 |
| Zachowane i zredagowane | 203 |
| Usunięte wersje z pierwotnej puli | 1508 |
| Nowe, odrębne przypadki dla procesów | 37 |
| Aktywna wspólna pula | **240 / maks. 400** |
| Zestawy tematyczne | 11 |
| Dwa rozłączne arkusze Foundation | 2 × 50 |
| Tematy Foundation z pytaniami i mini lekcją | **64 / 64** |

Podział aktywnej puli: PR 91, EN 93, IM 23, PC 33. Wszystkie 240 pozycji ma cztery odpowiedzi, jeden klucz, omówienie każdej opcji i źródło. Każdemu pytaniu przypisano odrębne zagadnienie w `practice-tests.json`. Powtórki w różnych widokach używają tego samego ID, zamiast dodawać kopie do banku.

Nie należy nazywać wszystkich 1508 usuniętych pozycji literalnymi duplikatami. Odrzucono również wielokrotne pytanie o to samo zagadnienie w innym opakowaniu, niejednoznaczne wersje, słabe uzasadnienia oraz zadania o samej metodyce nauki. W notatkach pierwotnego przeglądu 1010 pozycji oceniono jako spójne, a przy 701 zapisano zastrzeżenie. Zastrzeżenie mogło dotyczyć klucza, uzasadnienia, niejednoznaczności, zbyt mocnego twierdzenia albo niepotwierdzonego tłumaczenia — nie oznacza 701 błędnych kluczy.

[Rejestr decyzji dla wszystkich 1711 ID](REJESTR-RECENZJI-PYTAN.json) zawiera uwagę, decyzję, zmienione pola i powiązane pytanie do powtórki. To ostatnie wskazuje temat, a nie automatycznie dowodzi identyczności dwóch pytań. Usunięte brzmienia można odtworzyć z Git, bazowy commit: `299c9be7a2d652a29b4dcb606d13154d57210760`.

Poza bankiem wykryto **73 ręcznie wpisane quizy bez ID** w pięciu starszych częściach podręcznika. Usunięto je i zastąpiono odwołaniami do recenzowanej puli. Odświeżono również istniejące kopie pytań z warsztatu. Wyłączono dopisywanie pytań z mapy pojęć, a generator testów z synonimami w widoku drylu zastąpiono pytaniami ze wspólnego banku. Samouczek obsługi nie zadaje już dodatkowych pytań merytorycznych COBIT.

## Co poprawiono merytorycznie

- **Governance i management:** EDM oraz PBRM, monitorowanie po obu stronach, podział mandatów zamiast samego stanowiska. Board/chairperson nie jest automatycznie polskim zarządem/prezesem. Rysunek 9 sprawdzono także wizualnie: relacje nie wyłączają monitorowania przez organ Ładu.
- **Kaskada i aktywatory:** cele wszystkich siedmiu kategorii, dostosowanie mapowań, cztery wymiary aktywatora, względność wskaźników wiodących i opóźnionych. Zarządzanie wynikami nie jest piątym wymiarem.
- **Zdolność:** jednoznaczne N/P/L/F, poprawne otwarte dolne granice procentowe, wszystkie wymagane PA zamiast średniej, niższe PA = F. PA 1.1 należy do wymiaru zdolności. Dokument lub KPI nie dowodzi całego atrybutu; poziom 4 wymaga ilościowej przewidywalności i kontroli zmienności.
- **PRM/PAM i samoocena:** rozróżnienie normatywnego przeznaczenia/rezultatów i wskaźników oceny. Pomiar może występować w treści procesu bez narzucania poziomu 4. Rezultat może obejmować artefakt. Samoocena może korzystać z dowodów; samodzielny przewodnik nie wymaga osobnego tomu PAM.
- **Procesy:** m.in. korzyści w BAI01 i APO05, mapa przejścia w APO03, monitorowanie innowacji w APO04, wczesne wsparcie w BAI07, wiedza ukryta w BAI08, aktywa niematerialne w BAI09, relacje konfiguracji w BAI10, diagnoza w DSS02, przyczyny i znane błędy w DSS03, ciągłość szersza niż katastrofy. Zakresy procesów współpracują, nie są rozłącznymi szufladkami.
- **Terminologia i informacja:** architektura bazowa = baseline, nie reference; incydent nie jest synonimem problemu; aktualność danych nie jest tym samym co termin dostarczenia. Poprawnego synonimu nie uznaje się za fałsz tylko ze względu na tłumaczenie.

Zmiany obejmują pytania, odpowiednie hasła słownika, źródła generatora slajdów, wygenerowany podręcznik i instrukcje interfejsu. Polskie nazwy i starsza skala N/C/W/P są jawnie konwencją kursu. Nie deklarujemy potwierdzenia aktualnego polskiego arkusza operatora.

## Testy dostępne wewnątrz aplikacji

Start: **Podręcznik → Testy z pełną nauką i wyjaśnieniami** lub `index.html#/egzamin`.

Każdy z 13 zestawów ma dwa tryby:

1. **Nauka z wyjaśnieniami:** odpowiedź, omówienie wszystkich czterech opcji, zasada COBIT 5, przykład, typowe nieporozumienie i właściwa lekcja. Przejście dalej po udzieleniu odpowiedzi. Można wrócić bez ponownego naliczania tej samej odpowiedzi.
2. **Sprawdzian:** odpowiedzi i zegar; po zakończeniu wynik obszarowy oraz omówienie wszystkich pytań, także poprawnie rozwiązanych. Błędne i pominięte pytania można ponownie przejść w trybie nauki.

Mini lekcje obejmują wszystkie 64 tematy; osobny przewodnik opisuje 37 procesów. Dwa stałe arkusze po 50 pytań są rozłączne między sobą, ale używają tych samych ID co zestawy tematyczne. Rozkład PR/EN/IM/PC 15/21/7/7 jest planem treningowym opartym na przykładzie, a nie gwarantowaną wagą sylabusa. Cele 35/50 lub „mistrzowski” są umowne.

Przy redakcji slajdów zmieniają się pozycje i niektóre brzmienia pytań. Stare odpowiedzi zachowuje się w lokalnym archiwum historii, zamiast przypisywać je nowym pytaniom. Lokalny SP1 migruje według identyfikatorów. Wersja publiczna zawiera pytania autorskie; nie importuje prywatnych arkuszy operatorów.

## Publiczne materiały: zakres rzeczywistej analizy i wykorzystanie

| Źródło | Co przejrzano | Co wnosi do aplikacji |
|---|---|---|
| [ISACA, COBIT 5 Framework EN, 2012](https://teraits.com/anhanguera/marcio/gov/p_COBIT_5_ingles.pdf) | Definicje, rozdziały 1–8, mapowania i szczegóły aktywatorów używane przy pytaniach; rysunek 9 sprawdzony wizualnie | Podstawa mini lekcji, korekt pojęć i kluczy |
| [PeopleCert, Foundation Syllabus v01.2, 2016](https://tiexames.com.br/COBIT5Foundation/anexos/COBIT5_Foundation_Syllabus.pdf) | Zakres Foundation i format egzaminu | 64 tematy, powiązania lekcji, jawnie historyczne parametry egzaminu |
| [ISACA, COBIT 5 Introduction, 44 slajdy](https://courses.cs.taltech.ee/w/images/4/4c/Cobit_5_introduction.pdf) | Cała warstwa tekstowa prezentacji; nie jest to odsłuchanie pełnego kursu prowadzonego na jej podstawie | Oddzielenie EDM/PBRM, integracja, zakres przedsiębiorstwa i współdziałanie aktywatorów; szczegóły potwierdzone Frameworkiem |
| [ISACA HQ, Introduction to COBIT Video Series](https://www.youtube.com/watch?v=XPvc5sKIwWA) | Cała dostępna automatyczna transkrypcja nagrania ok. 6:39 | Wyjaśnienie w warsztacie: pięć obszarów GEIT nie jest pięcioma zasadami COBIT 5; wniosek potwierdzony publikacją |
| [APMG / Pam Erskine, Assessing Process Effectiveness Using COBIT 5](https://apmg-international.com/media/367/download) | Publiczny artykuł, 7 stron | Powiązanie celów z oceną procesów, ocenianie dowodów i dobór poziomu do potrzeb; dodatkowe szczegóły klas oceny nie są narzucone jako wymagania Foundation |
| [ISACA, Enabling Processes](https://community.mis.temple.edu/mis5203sec951fall2025/files/2019/01/COBIT5-Ver2-enabling.pdf) | Opisy i przeznaczenia 37 procesów oraz praktyki istotne dla znalezionych rozbieżności; nie deklarujemy recenzji każdego wiersza całej publikacji | 37 autorskich przypadków z omówieniem każdego dystraktora i poprawione hasła procesów |
| [ISACA, Self-assessment Guide, 2013](https://www.astarnet.jp/astarsaassv/doc/CGEIT/Reference/COBIT/COBIT-5--Selfassementguide.pdf) | Wprowadzenie i opis sposobu użycia, zwłaszcza s. 7 | Samodzielność przewodnika, relacja do PAM i brak formalnego obowiązku zbierania dowodów |

Zakres ograniczono do materiałów publicznych zgodnie z decyzją użytkownika. Katalog 37 adresów pozostaje pomocniczym rozpoznaniem, także historycznych ofert; nie jest deklaracją recenzji każdej strony lub każdego kursu w internecie. Do rozwiązania testów nie trzeba przechodzić do tych witryn. Nie kopiowano pełnych zewnętrznych banków ani nie oznaczano własnych pytań jako oficjalnych.

## Kontrole i granice wniosku

- Walidacja treści: 190 lekcji, 230 pojęć, 240 pytań, **0 błędów, 29 ostrzeżeń**. Pozostałe ostrzeżenia dotyczą redakcji i dawnych zaleceń dydaktycznych, m.in. liczby przykładów, zapasu i czasu lekcji. Nie wytwarzano nowych powielonych pytań tylko po to, by spełnić dawny postulat pytania „skrajnego” dla każdego hasła.
- Zaliczone: 4 testy Pythona, 8 testów JavaScript i kontrola 50 części podręcznika bez błędów. Build publiczny: 272 pliki, około 5,7 MB.
- Testy automatyczne sprawdzają limit, kompletność 1711 decyzji, klucze i uzasadnienia, brak literalnych duplikatów, referencje lekcji/zestawów, rozłączność arkuszy, zgodność wszystkich kopii quizów z bankiem oraz migrację historii. Nie dowodzą samodzielnie poprawności merytorycznej.
- Macierz: 64 tematy i 180 pozycji zakresu, bez tematów pozbawionych lekcji lub pytania. Tag tematu nie oznacza, że każde pytanie realizuje wszystkie jego podwymagania.
- Przegląd przeglądarkowy obejmuje uruchomienie nauki, omówienie błędnej odpowiedzi, mini lekcję, sprawdzian, raport wszystkich odpowiedzi i przejście do nauki na błędach.
- Kontrola nakładania się z prywatnym SP1 jest pominięta, ponieważ pliku nie ma w środowisku. Nie deklarujemy jej zaliczenia. Publiczny build wyklucza ten plik i skany.

Wniosek dotyczy recenzowanej wersji i opisanego zakresu COBIT 5 Foundation. Wynik znanych pytań jest pomiarem treningu, nie gwarancją zdania egzaminu.
