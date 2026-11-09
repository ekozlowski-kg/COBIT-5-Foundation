---
id: mt-03-siedem-aktywatorow-incydent
modul: MT
modulNazwa: Moduł MT – Ścieżka mentora
temat: "Siedem aktywatorów w jednym incydencie – dlaczego awaria Syreny nie ma jednego winnego?"
lekcja: "MT.3"
dzien: 12
sylabus: [PR-01-02, PR-02-12, PR-02-13, EN-02-17]
minuty: 22
priorytet: 3
wielkiObraz: 4
cel: "Potrafię rozłożyć jeden incydent na wszystkie 7 aktywatorów i opisać jeden aktywator czterema wymiarami. Potrafię rozstrzygnąć przyczynę, która leży na granicy dwóch aktywatorów."
wprowadza: []
wymaga: [pr-08-zasada-4, pr-09-wymiary-aktywatora, pr-09b-kategorie-celow-aktywatora, pr-10-wskazniki, en-07-informacja]
twierdzenia: ["Poważny incydent ma zwykle przyczyny w kilku aktywatorach naraz.", "Aktywatory są wzajemnie powiązane: naprawa jednego bez reszty nie daje trwałego efektu.", "Każdy aktywator ma te same cztery wymiary: interesariusze, cele, cykl życia, dobre praktyki.", "O przypisaniu przyczyny decyduje to, co zawiodło: dokument, praca, decyzja, zachowanie, dane, technika czy kompetencje."]
typowePytania: [{"pytanie": "Czy nie wystarczy znaleźć jednej głównej przyczyny?", "odpowiedz": "Główna przyczyna pomaga zacząć, ale COBIT 5 każe patrzeć całościowo (Zasada 4). Aktywatory są powiązane, więc trwała naprawa obejmuje kilka z nich."}, {"pytanie": "Nieaktualny numer to wina informacji czy procesu?", "odpowiedz": "Obu, ale w innym sensie. Nieaktualny numer to wada informacji (jakość kontekstowa). Brak regularnej aktualizacji to wada procesu."}, {"pytanie": "Czy kodeks etyczny to aktywator Kultura?", "odpowiedz": "Sam dokument to polityka, czyli aktywator Zasady, Polityki i Struktury ramowe. Kulturę widać dopiero po zachowaniach ludzi."}]
zgadnij: [q-pre-mt-03]
cwiczenia: [q-men-mt-03-1, q-men-mt-03-2, q-mt-03-01, q-mt-03-04]
zapas: [q-mt-03-02, q-mt-03-03]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Autokontrola autora (AI) wykonana 2026-11-08: źródła FW-PL s. 14, 27–29, 81–82. Przypisanie przyczyn do aktywatorów to przykład kursu. Czeka na przegląd człowieka."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Dlaczego po awarii każdy wskazuje innego winnego?

Rano po pożarze przy Lipowej 7 każdy ma swoją wersję:
- dostawca Kwant-Sygnał: „System działa zgodnie z umową”;
- naczelnik Sikora: „Kupiono go bez pytania mojego wydziału”;
- księgowa Halina Mak: „Kazano wybrać najtańszą ofertę”.

Każdy ma **trochę** racji. Nikt nie ma **całej** racji.

**Wniosek:** mentor uczy kursanta szukać przyczyn we wszystkich siedmiu aktywatorach, a nie jednego winnego.

:::wykladowca
Przypomnijmy noc z 14 na 15 marca. Dyżurny Grab kliknął alarm, ale OSP Zawilce nie dostała SMS-a. Pomoc przyjechała sześć minut później, niż mogła. Rano zaczęło się szukanie winnego. Zauważcie, że każda wersja jest prawdziwa, ale niepełna. To typowa sytuacja po incydencie. Kursant też będzie chciał jednego winnego, bo tak jest prościej. Waszym zadaniem jest pokazać mu, że COBIT 5 patrzy całościowo. Dziś rozłożymy tę jedną noc na siedem aktywatorów, a jeden z nich opiszemy czterema wymiarami.
:::

:::pytanie-uczestnika
pytanie: Czy szukanie wielu przyczyn nie rozmywa odpowiedzialności?
odpowiedz: Nie. Odpowiedzialność ustala tabela RACI. Siedem aktywatorów pokazuje, co trzeba naprawić, a nie kogo ukarać.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: B – objaśniający (zjawisko na pięciu przykładach) -->
# Jedna porażka, wiele przyczyn – znasz to z życia

:::kontekst zycie
**Spalony obiad urodzinowy.** Przepis był niejasny. Nikt nie ustalił kolejności gotowania. Nikt nie zdecydował, kto pilnuje kuchni. Wujek widział dym, ale nie chciał się wtrącać. Lista gości była stara. Piekarnik grzeje za mocno. Nikt nie umiał ustawić termoobiegu.
:::

:::kontekst biuro
**Nieudana prezentacja dla zarządu.** Projektor nie działał, plik był w starej wersji, a jedyna osoba znająca salę była na urlopie.
:::

:::kontekst organizacja
**Pomyłka w aptece szpitalnej.** Lek wydano według nieaktualnej karty pacjenta. Procedura sprawdzania istniała, ale personel bał się przyznać do pośpiechu.
:::

:::kontekst psp
**Scena: „Siedem rzeczy, które muszą zagrać”.** Na odprawie komendantka Anna Wrzos wypisuje na tablicy, co zawiodło w noc pożaru. Lista ma siedem pozycji, od braku polityki po jedynego dyżurnego, który zna tryb awaryjny. To siedem [[aktywator|aktywatorów]].
:::

:::kontekst it
**COBIT 5.** Zasada 4 „Aktywacja holistycznego podejścia”: aktywatory działają razem. Procesy wymagają informacji, a struktury organizacyjne wymagają umiejętności i zachowań (FW-PL s. 27–28).
:::

**Wniosek:** porażka w organizacji prawie zawsze ma przyczyny w kilku obszarach naraz.

:::wykladowca
Zacznijcie od przykładu, który kursant zna z domu. Spalony obiad ma siedem przyczyn: przepis, kolejność, decyzję, odwagę wujka, listę gości, piekarnik i umiejętność. Kursant się uśmiechnie, bo zna to z życia. Teraz powiedzcie mu, że te siedem rzeczy ma w COBIT 5 nazwy. Przepis to polityka. Kolejność to proces. Decyzja to struktura. Odwaga wujka to kultura. Lista gości to informacja. Piekarnik to infrastruktura. Umiejętność to kompetencje. Dopiero potem przejdźcie do Syreny. Wtedy siedem nazw nie będzie już abstrakcją.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający (rozkład incydentu) -->
# Noc na Lipowej rozłożona na siedem aktywatorów

| Aktywator | Co zawiodło w noc pożaru (przykład kursu) | Pytanie kontrolne mentora |
|---|---|---|
| 1. Zasady, Polityki i Struktury ramowe | brak polityki: kto i jak często aktualizuje numery | Czy istniała spisana reguła? |
| 2. Procesy | nikt regularnie nie aktualizował numerów ani nie testował wysyłki | Czy była powtarzalna praca z wejściem i wynikiem? |
| 3. Struktury organizacyjne | Syrenę kupiono bez decyzji ciała, które ma mandat | Kto miał prawo zdecydować? |
| 4. Kultura, Etyka i Zachowanie | dyżurny Grab bał się zgłosić wcześniejszą awarię | Co ludzie robią, gdy nikt nie patrzy? |
| 5. Informacja | numer naczelnika OSP był sprzed dwóch lat | Czy dane były aktualne i dostępne? |
| 6. Usługi, Infrastruktura i Aplikacje | jeden serwer pod schodami, bez zasilania awaryjnego | Co z techniki mogło zawieść? |
| 7. Ludzie, Umiejętności i Kompetencje | tylko Grab znał tryb awaryjny | Kto umiał to obsłużyć? |

:::zrodlo FW-PL 27 12
:::

**Wniosek:** każdy aktywator ma swoje pytanie kontrolne; razem dają pełny obraz incydentu.

:::wykladowca
Oto cała noc na jednej tablicy. Przejdźcie wiersz po wierszu i przy każdym zadajcie pytanie z ostatniej kolumny. To jest narzędzie mentora. Kursant nie musi pamiętać tabeli. Wystarczy, że zapamięta siedem pytań. Czy była reguła? Czy była praca? Kto miał prawo decydować? Co ludzie robią? Czy dane były aktualne? Co z techniki zawiodło? Kto umiał to obsłużyć? Zwróćcie uwagę, że szósty wiersz, czyli technika, to tylko jedna siódma problemu. A na niego wszyscy patrzyli rano najpierw.
:::

:::sb nie-mylic
Podręcznik PL pisze „czynniki umożliwiające”, egzamin – „Aktywatory”. Pierwszy aktywator na egzaminie to „Zasady, Polityki i Struktury ramowe”, w podręczniku „Zasady, polityki i metodyki”.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy (przyczyny na granicy dwóch aktywatorów) -->
# Gdy przyczyna leży na granicy dwóch aktywatorów

| Przyczyna | Kusi, by przypisać | Rozstrzygnięcie |
|---|---|---|
| „Kara za każdy błąd” w regulaminie | Kultura | **dokument** → Zasady i polityki; **strach przed zgłaszaniem** → Kultura |
| Nieaktualny numer OSP | Usługi i aplikacje („system źle działa”) | **treść danych** → Informacja; **brak aktualizacji** → Procesy |
| Naczelnik informatyki (CIO – dyrektor ds. informatyki) | „to struktura” | **CIO** → rola osoby (opisana przy aktywatorze Struktury, ale nie jest strukturą); **Rada ds. Informatyki** → struktura |
| Proces kadrowy (APO07) | Ludzie, Umiejętności i Kompetencje | **proces** → Procesy; **sama wiedza i umiejętności** → Ludzie |

:::teza porownawcza
sytuacja: Kursant przypisuje „regulamin z karą za błędy” do aktywatora Kultura, Etyka i Zachowanie.
pytanie: Gdzie kończy się polityka, a zaczyna kultura?
teza: Dokument jest polityką. Kultura to zachowania, które ten dokument wywołuje.
uzasadnienie: Polityki komunikują zasady i wymagania. Kulturę widać po zachowaniu ludzi. Framework pokazuje też, że bez odpowiedniej kultury procedury bezpieczeństwa nie będą skuteczne (Przykład 4).
powiazanie: Zasada 4; aktywatory 1 i 4
przyklad: Po nocy na Lipowej Wrzos zmienia regulamin (polityka) i publicznie dziękuje Grabowi za zgłoszenie (kultura).
status: oficjalne
zrodlo: FW-PL 28
refleksja: Jakie zachowanie zobaczysz w komendzie, jeśli zmieni się tylko dokument?
:::

**Wniosek:** pytaj, **co dokładnie** zawiodło: dokument, praca, decyzja, zachowanie, dane, technika czy kompetencje.

:::wykladowca
To jest poziom mentora. Przypadki graniczne nie oznaczają, że COBIT jest nieprecyzyjny. Oznaczają, że jedna sytuacja ma dwie strony. Regulamin z karą za błędy to dokument, więc polityka. Strach przed zgłaszaniem to zachowanie, więc kultura. Nieaktualny numer to wada danych, a brak aktualizacji to wada procesu. Uczcie kursanta jednego pytania: co dokładnie zawiodło? Odpowiedź w jednym słowie wskaże aktywator. Gdy wychodzą dwa słowa, przypiszcie przyczynę do dwóch aktywatorów i powiedzcie dlaczego.
:::

---

<!-- slajd: schemat -->
<!-- typ SD: C – procesowy (cztery wymiary jednego aktywatora) -->
# Jeden aktywator, cztery wymiary: lista numerów OSP

| Wymiar | Lista numerów OSP w Syrenie (przykład kursu) |
|---|---|
| **Interesariusze** | wewnętrzni: dyżurni SK, Ola Dudek, Sikora; zewnętrzni: OSP Zawilce, mieszkańcy |
| **Cele** | jakość wewnętrzna: numer jest dokładny; jakość kontekstowa: numer jest **aktualny**; dostęp i bezpieczeństwo: każdy dyżurny ma dostęp, obcy – nie |
| **Cykl życia** | planowanie → projektowanie → budowanie/nabywanie/tworzenie/wdrażanie → użytkowanie/eksploatacja → ocena/monitorowanie → aktualizacja/pozbywanie się |
| **Dobre praktyki** | np. comiesięczne potwierdzanie numerów telefonem do OSP |

Wskaźnik **opóźniony** mówi, czy cele osiągnięto, np. odsetek alarmów, które dotarły. Wskaźnik **wiodący** mówi, czy cykl życia i dobre praktyki działają, np. odsetek numerów sprawdzonych w tym miesiącu (FW-PL s. 29).

:::zrodlo FW-PL 28 13
:::

:::glebiej wymiary-aktywatora
Szczebel „skrajny” wyjaśnia, dlaczego zarządzanie wydajnością nie jest piątym wymiarem.
:::

**Wniosek:** w noc pożaru zawiódł wymiar „cele” (aktualność), a przyczyną był brak dobrej praktyki i fazy „aktualizacja”.

:::wykladowca
Teraz zejdźcie głębiej w jeden aktywator. Wybraliśmy listę numerów, bo to ona zawiodła najbardziej widocznie. Każdy aktywator ma te same cztery wymiary. Interesariusze to ci, którzy z listy korzystają albo których dotyczy. Cele dzielą się na trzy kategorie. Aktualność numeru to jakość kontekstowa, a nie wewnętrzna. Cykl życia ma sześć faz i w noc pożaru zabrakło fazy aktualizacji. Dobre praktyki to sposób, żeby ta faza naprawdę działała, na przykład comiesięczny telefon. Wskaźnik wiodący ostrzegłby komendę przed pożarem. Opóźniony pokazał problem dopiero po nim.
:::

:::sb nie-mylic
Podręcznik na Rysunku 13 pisze „Jakość rzeczywista” i „Dostępność i bezpieczeństwo”. Egzamin PL używa nazw „Jakość wewnętrzna” i „Dostęp i Bezpieczeństwo”.
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku (teza o naprawie jednego aktywatora) -->
# Czy wystarczy kupić nowy serwer?

Sikora proponuje: „Kupmy drugi serwer i sprawa załatwiona”.

:::teza krytyczna
sytuacja: Po incydencie komenda chce naprawić tylko aktywator Usługi, Infrastruktura i Aplikacje.
pytanie: Czy nowy serwer zapobiegnie kolejnej nocy jak na Lipowej?
teza: Nie. Drugi serwer wyśle SMS na nieaktualny numer równie sprawnie jak pierwszy.
uzasadnienie: Aktywatory są wzajemnie powiązane. Każdy jest w pełni efektywny tylko wtedy, gdy dostaje wejścia od innych, np. procesy wymagają informacji.
powiazanie: Zasada 4 „Aktywacja holistycznego podejścia”
przyklad: Komenda kupuje serwer, ale też ustala politykę, proces aktualizacji, RACI, szkolenie i zasadę zgłaszania bez kar.
status: oficjalne
zrodlo: FW-PL 28
refleksja: Który aktywator najtaniej poprawić, a który daje największy efekt?
:::

**Wniosek:** technika naprawia jedną siódmą problemu; trwała naprawa obejmuje kilka aktywatorów.

:::wykladowca
Ta teza przyda się Wam w każdej rozmowie z kierownictwem. Po awarii pierwszy odruch to zakup. Zakup jest łatwy do zatwierdzenia i widać go od razu. Ale zapytajcie kursanta: na jaki numer wyśle SMS drugi serwer? Na ten sam nieaktualny. Framework mówi o tym na stronie 28. Aktywatory są powiązane, a każdy działa w pełni dopiero z pozostałymi. Mentor nie mówi „serwer jest zbędny”. Mówi: „serwer plus sześć innych rzeczy”. To jest Zasada 4 w praktyce.
:::

---

<!-- slajd: mapa -->
# Gdzie leży siedem aktywatorów w COBIT 5?

:::mapa aktywatory
Siedem kategorii aktywatorów. Trzy z nich to zasoby organizacji: Informacja; Usługi, Infrastruktura i Aplikacje; Ludzie, Umiejętności i Kompetencje.
:::

**Wniosek:** lista siedmiu aktywatorów to rodzeństwo na jednej gałęzi mapy; wymiary należą do osobnej gałęzi „Ogólny model aktywatora”.

:::wykladowca
Spójrzcie na mapę. Siedem aktywatorów to siedmioro rodzeństwa. Cztery wymiary nie są ich dziećmi. Leżą na osobnej gałęzi, w ogólnym modelu aktywatora, bo dotyczą każdego z siedmiu. To ważne dla mentora. Kursant często pyta, czy wymiary ma tylko proces. Odpowiedź brzmi: wymiary ma każdy aktywator. Zauważcie też, że trzy aktywatory to zasoby. Pozostałe cztery, czyli polityki, procesy, struktury i kultura, zasobami nie są.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Co dokładnie zawiodło: treść danych czy technika? -->
# Rozwiązujemy razem

:::rozwiazany
Syrena wysłała SMS bez błędu technicznego, ale na numer telefonu sprzed dwóch lat. Który aktywator i która kategoria celu zawiodły bezpośrednio?
- A. Usługi, Infrastruktura i Aplikacje – jakość wewnętrzna
- B. Informacja – dostęp i bezpieczeństwo
- C. Procesy – jakość wewnętrzna
- D. Informacja – jakość kontekstowa
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **bez błędu technicznego** i **numer sprzed dwóch lat**.
+++
**Krok 2 – jaka kategoria COBIT?** Aktywator Informacja i trzy kategorie jego celów.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: technika zadziałała. B – *prawda nie na temat*: dostęp był, zawiodła aktualność. C – *zbyt wąskie*: brak aktualizacji to przyczyna, ale bezpośrednio zawiodła informacja.
+++
**Odpowiedź: D.** Dlaczego: aktualność informacji w kontekście zadania to jakość kontekstowa.
:::

:::wykladowca
Rozwiążmy to razem. Słowa-klucze są dwa i oba coś wykluczają. „Bez błędu technicznego” wyklucza usługi i infrastrukturę. „Numer sprzed dwóch lat” wskazuje na treść danych, czyli informację. Teraz kategoria celu. Dyżurny miał dostęp, więc to nie dostęp i bezpieczeństwo. Numer kiedyś był dokładny, ale przestał być aktualny. Aktualność w danym zadaniu to jakość kontekstowa. Proces aktualizacji zawiódł wcześniej, ale pytanie pyta o to, co zawiodło bezpośrednio. Uczcie kursanta czytać słowo „bezpośrednio”.
:::

---

<!-- slajd: wlasne-slowa -->
# W roli mentora: wytłumacz to Kasi Nowik

:::wlasne-slowa
Wytłumacz to kursantce Kasi Nowik, dyżurnej SK (stanowiska kierowania). Kasia mówi: „Winny jest Kwant-Sygnał, bo to ich system”. W 5–6 zdaniach pokaż jej co najmniej pięć aktywatorów, które zawiodły tej nocy. Dodaj jeden przypadek graniczny z rozstrzygnięciem.
???
„Kasiu, system Kwant-Sygnału to jeden z siedmiu aktywatorów: Usługi, Infrastruktura i Aplikacje. Ale tej nocy zawiodła też Informacja, bo numer Pietrzaka był sprzed dwóch lat. Zawiódł Proces, bo nikt regularnie nie aktualizował numerów. Zawiodły Zasady i polityki, bo nie było reguły, kto za to odpowiada. Zawiodła Kultura, bo Grab bał się zgłosić wcześniejszą awarię. Do tego tylko Grab znał tryb awaryjny – to Ludzie i Umiejętności. Przypadek graniczny: regulamin z karą za błędy to polityka, a strach przed zgłaszaniem to już kultura.”
:::

:::wykladowca
Teraz Wy. Kasia powtarza poranną wersję jednego winnego. Wasza odpowiedź ma ją nie zawstydzić, tylko poszerzyć jej obraz. Zacznijcie od przyznania, że system to jeden z aktywatorów. Potem dołóżcie co najmniej pięć kolejnych z konkretnym dowodem z tej nocy. Na końcu dodajcie przypadek graniczny i powiedzcie, jak go rozstrzygacie. Porównajcie się ze wzorcem. Sprawdźcie, czy każdy aktywator ma u Was dowód, a nie tylko nazwę. Sama nazwa niczego kursanta nie nauczy.
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz

- Umiesz rozłożyć jeden incydent na siedem aktywatorów, każdy z dowodem.
- Umiesz zadać siedem pytań kontrolnych: reguła, praca, decyzja, zachowanie, dane, technika, kompetencje.
- Umiesz rozstrzygnąć przyczynę na granicy dwóch aktywatorów pytaniem „co dokładnie zawiodło?”.
- Umiesz opisać jeden aktywator czterema wymiarami i dobrać wskaźnik wiodący oraz opóźniony.

**Co dalej i dlaczego:** w lekcji MT.4 uporządkujesz 37 procesów, czyli najbogatszy aktywator, i rozplączesz pary, które kursanci mylą najczęściej.

:::wykladowca
Podsumujmy. Po incydencie kursant szuka jednego winnego, a Wy pokazujecie siedem aktywatorów. Każdy ma swoje pytanie kontrolne. Przyczyny na granicy rozstrzygacie jednym pytaniem: co dokładnie zawiodło? Jeden aktywator opisujecie czterema wymiarami, a wskaźnik wiodący pokazuje kłopot, zanim wybuchnie. Zamknijcie oczy i wymieńcie siedem aktywatorów z dowodem z nocy na Lipowej. Jeśli się udało, przejdźcie do ćwiczeń. Tam kursanci sprawdzą, czy umiecie to wytłumaczyć bez żargonu.
:::
