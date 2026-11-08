---
# Moduł IT0 „Podstawy cyfrowe” (Dzień 0) – METODYKA §17.3, §17.13; wzorzec: _wzorce/modul-wzorcowy.md
modul: IT0
nazwa: "Moduł 0A – Podstawy cyfrowe"
dzien: [0]
wymagania: []                    # moduł startowy: nie zakłada żadnej wiedzy wejściowej
wiedza:
  - "Sprzęt (hardware), oprogramowanie (software), system operacyjny (operating system) i aplikacja (application) – czym się różnią."
  - "Dane (data) a informacja (information); plik (file) i folder (folder)."
  - "Sieć komputerowa (network), Internet i Wi-Fi – trzy różne odcinki drogi danych."
  - "Serwer (server), klient (client), żądanie i odpowiedź (request, response) oraz usługa IT (IT service)."
  - "Baza danych (database) – uporządkowany, wspólny zbiór danych."
  - "Konto (account), uwierzytelnianie (authentication) i autoryzacja (authorization)."
  - "Infrastruktura IT (IT infrastructure), dostawca (supplier) i outsourcing."
  - "Incydent (incident), problem, zmiana (change), kopia zapasowa (backup) i ciągłość działania (business continuity)."
  - "Bezpieczeństwo informacji (information security): poufność, integralność, dostępność (availability); ryzyko związane z IT (IT-related risk)."
  - "Projekt (project), program (programme) i portfel (portfolio)."
umiejetnosci:
  - "Wskazać, czy awaria dotyczy sprzętu, programu, sieci czy danych, i komu ją zgłosić."
  - "Opisać krok po kroku wymianę klient–serwer na przykładzie alarmu w „Syrenie”."
  - "Odróżnić usługę IT od jej składników: infrastruktury i aplikacji."
  - "Rozpoznać w opisie zdarzenia incydent, problem, zmianę i ryzyko."
  - "Wyjaśnić, dlaczego outsourcing nie zdejmuje z organizacji odpowiedzialności."
  - "Używać każdego terminu modułu po polsku i po angielsku, z poprawną wymową."
terminy:                         # do AKTYWNEGO stosowania (§17.10)
  - it-hardware
  - it-software
  - it-system-operacyjny
  - it-aplikacja
  - it-dane
  - it-informacja
  - it-plik
  - it-folder
  - it-siec
  - it-internet
  - it-wifi
  - it-serwer
  - it-klient
  - it-zadanie-odpowiedz
  - it-usluga-it
  - it-baza-danych
  - it-konto
  - it-uwierzytelnianie
  - it-autoryzacja
  - it-infrastruktura
  - it-dostawca
  - it-outsourcing
  - it-incydent
  - it-problem
  - it-zmiana
  - it-kopia-zapasowa
  - it-ciaglosc-dzialania
  - it-bezpieczenstwo-informacji
  - it-dostepnosc
  - it-ryzyko-it
  - it-program
  - it-portfel
zadania:
  - "Studium: noc na Lipowej – nazwij, co zawiodło (usługa, aplikacja, infrastruktura, dane) i czym było każde zdarzenie (incydent, problem, ryzyko)."
  - "Rysunek: trzy piętra „Syreny” – infrastruktura, aplikacja, usługa IT – z podpisami PL i EN."
  - "Wypowiedź: wyjaśnij sąsiadce różnicę między uwierzytelnianiem a autoryzacją, używając terminów EN."
  - "Plan: trzy elementy planu ciągłości działania dla „Syreny”."
kryteria:                        # sprawdzian modułu (§17.12): ≥ 70% w każdej części
  wiedza: 70
  terminologia: 70
  rozroznianie: 70
  mechanizmy: 70
  zastosowanie: 70
  synteza: 70
# sprawdzian: questions/sprawdzian-it0.json – pytania z polami sprawdzian: "IT0" i czesc: wiedza|terminologia|rozroznianie|mechanizmy|zastosowanie|synteza
bibliografia:                    # generowana z przypisów lekcji; tu dopisane ręcznie
  publikacja-zrodlowa: [FW-PL]
  standard: []
  material-dydaktyczny: []
  literatura: []
---

<!-- Kolejność w module (SD-3 §10): problem → nowe pojęcia → teoria (FAKT) → zależności → przykład praktyczny →
     (sidebar i didaskalia w każdej lekcji) → ćwiczenia → podsumowanie z powtórką terminów → sprawdzian → bibliografia. -->

# Po co jest Dzień 0?

COBIT 5 używa wielu słów z informatyki bez tłumaczenia: aplikacja, infrastruktura, usługa IT, incydent, ciągłość, portfel. Moduł IT0 uczy ich od zera, zanim zaczniesz właściwy kurs.

**Problem wyjściowy:** w nocy z 14 na 15 marca system „Syrena” w komendzie straży w Modrzewiowie nie powiadomił ochotników z OSP Zawilce. Żeby zrozumieć, co zawiodło, trzeba umieć nazwać każdy element: od sprzętu po decyzję o inwestycjach.

# Lekcje modułu

| Lekcja | Temat | Nowe pojęcia (EN) | Poziom |
|---|---|---|---|
| 0A.1 | Komputer i program | hardware, software, operating system, application | P0 |
| 0A.2 | Dane i informacja | data, information, file, folder | P0 |
| 0A.3 | Sieć i Internet | network, Internet, Wi-Fi | P0 |
| 0A.4 | Serwer i usługa | server, client, request/response, IT service | P1 |
| 0A.5 | Baza danych | database | P1 |
| 0A.6 | Konto, logowanie, uprawnienia | account, authentication, authorization | P1 |
| 0A.7 | Infrastruktura i aplikacje w organizacji | IT infrastructure, supplier, outsourcing | P1 |
| 0A.8 | Gdy coś się psuje | incident, problem, change, backup, business continuity | P1 |
| 0A.9 | Bezpieczeństwo i ryzyko IT | information security, availability, IT-related risk | P1 |
| 0A.10 | Projekt i program IT | project, programme, portfolio | P1 |

# Jak pojęcia się łączą

- **Sprzęt + oprogramowanie** → na nich działa **system operacyjny**, a na nim **aplikacje**.
- Aplikacje zapisują **dane** w **plikach** albo w **bazie danych**; dane z kontekstem to **informacja**.
- Urządzenia rozmawiają przez **sieć** i **Internet**: **klient** wysyła **żądanie**, **serwer** odsyła **odpowiedź**.
- Sprzęt, sieć, serwery i systemy operacyjne tworzą **infrastrukturę**; aplikacje stoją na niej, a ludzie dostają **usługę IT**.
- Do usługi wpuszcza **konto** i **uwierzytelnianie**, a zakres działań wyznacza **autoryzacja**.
- Gdy coś się psuje: **incydent** (gasimy) → **problem** (szukamy przyczyny) → **zmiana** (bezpiecznie naprawiamy); na najgorsze: **kopia zapasowa** i **ciągłość działania**.
- **Bezpieczeństwo informacji** chroni poufność, integralność i **dostępność**; **ryzyko** to to, co może pójść źle.
- Pieniądze na poprawę dzieli się w **portfelu**; powiązane **projekty** łączy **program**.

# Synteza modułu

Po tym module potrafisz nazwać po polsku i po angielsku każdy element informatyki, o którym mówi COBIT 5. Odróżniasz usługę od jej składników, incydent od problemu i ryzyka, uwierzytelnianie od autoryzacji. Wiesz, że pracę można zlecić dostawcy, ale odpowiedzialności nie. Jutro, w dniu 1, zapytamy: **kto o tym wszystkim decyduje, a kto to wykonuje?**

# Sprawdzian modułu

Sześć części (§17.12): wiedza, terminologia, rozróżnianie, mechanizmy, zastosowanie, synteza – po 2–4 zadania. Próg: co najmniej 70% w każdej części. Pytania: `questions/sprawdzian-it0.json`.
