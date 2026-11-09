---
modul: PR
nazwa: "Moduł 1 – Zasady COBIT 5 (Principles)"
dzien: [2, 3, 4]
# dzien wg METODYKA §18.2 (lekcje 1.1–1.13); atlas procesów 1.14–1.25 wraca spiralnie w dniach 5–9
wymagania:
  - IT0
  - M0
wiedza:
  - "Pięć zasad (Five Principles) w nazwach egzaminacyjnych: 1 Realizacja potrzeb interesariusza (Meeting Stakeholder Needs), 2 Pokrycie całej organizacji (Covering the Enterprise End-to-End), 3 Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej (Applying a Single Integrated Framework), 4 Aktywacja holistycznego podejścia (Enabling a Holistic Approach), 5 Oddzielenie Ładu od Zarządzania (Separating Governance From Management)."
  - "Cel Ładu to Tworzenie Wartości (Value Creation): realizacja korzyści (Benefits Realisation) przy optymalizacji ryzyka (Risk Optimisation) i zasobów (Resource Optimisation) – Rysunek 3."
  - "Kaskada Celów (Goals Cascade): Stakeholder Drivers → Stakeholder Needs → Enterprise Goals (17 celów organizacji, BSC) → IT-related Goals (17 celów związanych z informatyką, IT BSC) → Enabler Goals; stosuje się ją jako wytyczną, nie mechanicznie."
  - "Siedem kategorii aktywatorów (Enablers) ma cztery wymiary: Stakeholders, Goals (Jakość wewnętrzna, Jakość kontekstowa, Dostęp i Bezpieczeństwo), Life cycle, Good practices; wskaźniki opóźnione (lag) mierzą osiągnięcie celów, a wiodące (lead) – stosowanie praktyk i cykl życia."
  - "Ład (Governance) = Oszacuj, Kieruj i Monitoruj (EDM, 5 procesów); Zarządzanie (Management) = Planuj, Twórz, Wykonuj i Monitoruj (PBRM): APO, BAI, DSS, MEA – razem 37 procesów Referencyjnego Modelu Procesu (PRM), Rysunek 16."
  - "Rysunek 9: interesariusze delegują, Organ Ładu i nadzoru wyznacza kierunek, Zarządzanie instruuje i dopasowuje role operacyjne, a informacja wraca przez raportowanie i monitorowanie."
umiejetnosci:
  - "Przypisać działanie z przypadku do właściwej zasady COBIT 5 i podać jej nazwę EN i egzaminacyjną PL."
  - "Przejść Kaskadę Celów od potrzeby klientów do celu aktywatora na przykładzie banku albo szpitala, używając terminów EN."
  - "Przypisać decyzję do Ładu (EDM) albo Zarządzania (APO, BAI, DSS, MEA) i uzasadnić to Rysunkiem 9 i 15."
  - "Odróżnić wskaźnik wiodący od opóźnionego i wskazać, na które z czterech pytań zarządzania wydajnością aktywatora odpowiada."
terminy:
  - zasada-1
  - zasada-2
  - zasada-3
  - zasada-4
  - zasada-5
  - tworzenie-wartosci
  - optymalizacja-ryzyka
  - optymalizacja-zasobow
  - kaskada-celow
  - cele-organizacji
  - cele-zwiazane-z-it
  - cele-aktywatorow
  - bsc
  - system-ladu
  - zakres-ladu
  - role-dzialania-relacje
  - organ-ladu
  - integrator
  - aktywator
  - wymiary-aktywatora
  - cykl-zycia-aktywatora
  - dobre-praktyki
  - jakosc-wewnetrzna
  - jakosc-kontekstowa
  - dostep-i-bezpieczenstwo
  - wskaznik-wiodacy
  - wskaznik-opozniony
  - zarzadzanie-wydajnoscia-aktywatora
  - pbrm
  - prm
  - edm
  - apo
  - bai
  - dss
  - mea
  # procesy 1–37 (lekcje atlasu 1.14–1.25): ćwiczymy kod i nazwę EN; formy PL w większości niepotwierdzone
  - proc-edm01
  - proc-edm02
  - proc-edm03
  - proc-edm04
  - proc-edm05
  - proc-apo01
  - proc-apo02
  - proc-apo03
  - proc-apo04
  - proc-apo05
  - proc-apo06
  - proc-apo07
  - proc-apo08
  - proc-apo09
  - proc-apo10
  - proc-apo11
  - proc-apo12
  - proc-apo13
  - proc-bai01
  - proc-bai02
  - proc-bai03
  - proc-bai04
  - proc-bai05
  - proc-bai06
  - proc-bai07
  - proc-bai08
  - proc-bai09
  - proc-bai10
  - proc-dss01
  - proc-dss02
  - proc-dss03
  - proc-dss04
  - proc-dss05
  - proc-dss06
  - proc-mea01
  - proc-mea02
  - proc-mea03
zadania:
  - "Studium: zarząd banku każe uwzględnić księgowość, kadry, oddziały i dostawcę chmury – którą zasadę stosuje?"
  - "Studium: dwie oferty naprawy systemu sprzedaży ponad budżet – podział decyzji między Ład a Zarządzanie."
  - "Studium: nieaktualizowana od sześciu lat procedura obsługi awarii – które pytanie zarządzania wydajnością aktywatora zawodzi?"
  - "Wypowiedź: Kaskada Celów od oczekiwań klientów do celu procesu, z pięcioma poziomami EN."
  - "Mentor: popraw kolegę, który twierdzi, że EDM to domena działu informatyki."
kryteria:
  wiedza: 70
  terminologia: 70
  rozroznianie: 70
  mechanizmy: 70
  zastosowanie: 70
  synteza: 70
# sprawdzian: questions/sprawdzian-pr.json (sprawdzian: PR, 18 pytań, po 3 na część)
bibliografia:
  publikacja-zrodlowa: [FW-PL]
  standard: []
  dokumentacja: [SYL]
  material-dydaktyczny: [ALTKOM, SP1]
  literatura: []
---

# Synteza modułu

Po module 1 znasz szkielet COBIT 5: pięć zasad (Principles) i to, jak się łączą. Zasada 1 mówi, po co jest Ład: by tworzyć wartość (Value Creation) dla interesariuszy, a Kaskada Celów (Goals Cascade) przekłada ich potrzeby na cele organizacji, cele związane z informatyką i cele aktywatora. Zasada 2 obejmuje całą organizację, a nie tylko dział IT; zasada 3 czyni z COBIT 5 nadrzędną strukturę, która integruje inne standardy; zasada 4 każe patrzeć na siedem wzajemnie powiązanych aktywatorów (Enablers) przez cztery wymiary i mierzyć je wskaźnikami wiodącymi i opóźnionymi; zasada 5 rozdziela Ład (EDM) od Zarządzania (APO, BAI, DSS, MEA) w modelu 37 procesów. Umiesz te zasady nazwać po polsku egzaminacyjnie i po angielsku oraz zastosować je do decyzji w banku, szpitalu czy urzędzie – to fundament modułów 2–4.

# Powtórka terminów

- Principle 1: Meeting Stakeholder Needs – Zasada 1: Realizacja potrzeb interesariusza
- Principle 2: Covering the Enterprise End-to-End – Zasada 2: Pokrycie całej organizacji
- Principle 3: Applying a Single Integrated Framework – Zasada 3: Zastosowanie Pojedynczej Zintegrowanej Struktury Ramowej
- Principle 4: Enabling a Holistic Approach – Zasada 4: Aktywacja holistycznego podejścia
- Principle 5: Separating Governance From Management – Zasada 5: Oddzielenie Ładu od Zarządzania
- Value Creation (Governance objective) – Tworzenie Wartości (Cel Ładu)
- Benefits Realisation / Risk Optimisation / Resource Optimisation – Realizacja korzyści / Optymalizacja ryzyka / Optymalizacja zasobów
- Goals Cascade – Kaskada Celów
- Enterprise Goals – Cele organizacji
- IT-related Goals – Cele związane z informatyką
- Enabler Goals – Cele aktywatora
- Balanced Scorecard (BSC) – Zrównoważona karta wyników
- Governance approach / Governance scope – Podejście do Ładu / Zakres Ładu
- Roles, activities and relationships – Role, działania i relacje
- Governing body – Organ Ładu i nadzoru
- Enabler – Aktywator
- Enabler dimensions – Wymiary aktywatora
- Enabler life cycle – Cykl życia aktywatora
- Good practices – Dobre praktyki
- Intrinsic quality / Contextual quality / Accessibility and security – Jakość wewnętrzna / Jakość kontekstowa / Dostęp i Bezpieczeństwo
- Lead indicators / Lag indicators – Wskaźniki wiodące / Wskaźniki opóźnione
- Enabler performance management – Zarządzanie wydajnością aktywatora
- Process Reference Model (PRM) – Referencyjny Model Procesu
- Evaluate, Direct and Monitor (EDM) – Oszacuj, Kieruj i Monitoruj
- Plan, Build, Run and Monitor (PBRM) – Planuj, Twórz, Wykonuj i Monitoruj
- Align, Plan and Organise (APO) – Dostosuj, Planuj i Organizuj
- Build, Acquire and Implement (BAI) – Twórz, Nabywaj i Wdrażaj
- Deliver, Service and Support (DSS) – Dostarczaj, Obsługuj i Wspieraj
- Monitor, Evaluate and Assess (MEA) – Monitoruj, Oszacuj i Oceń
- EDM01–EDM05, APO01–APO13, BAI01–BAI10, DSS01–DSS06, MEA01–MEA03 – kody i nazwy EN (formy PL w większości niepotwierdzone; potwierdzone m.in. EDM05 Zapewnienie Transparentności Interesariuszy, APO05 Zarządzanie Portfelem)
