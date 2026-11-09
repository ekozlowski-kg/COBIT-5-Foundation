---
id: pr-k68-bai08-bai10
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "BAI08–BAI10: wiedza, zasoby (aktywa) i konfiguracja"
lekcja: "1.68"
dzien: 7
format: krotki
sylabus: [PR-01-04]
minuty: 8
zgadnij: []
cwiczenia: ["q-fin-pliki-29", "q-proces-apo01"]
zapas: ["q-proces-apo02"]
wprowadza: [proc-bai08, proc-bai09, proc-bai10]
wymaga: [pr-k67-bai05-bai07]
cel: "Potrafię odróżnić wiedzę (BAI08), majątek IT (BAI09) i opis konfiguracji (BAI10) oraz rozpoznać, które „zasoby” to BAI09."
priorytet: 2
---

<!-- slajd: start -->
# Trzy zeszyty o jednym samochodzie

Masz samochód. W pierwszym zeszycie zapisujesz, jak zmienić koło zimą.

W drugim – kiedy go kupiłeś, ile kosztował i kiedy kończy się gwarancja.

W trzecim – jakie ma opony, jaki olej i które części od siebie zależą.

Instrukcja, majątek i opis budowy to trzy różne rzeczy.

:::wykladowca
Każdy z tych zeszytów odpowiada na inne pytanie. Jak to zrobić? Co posiadamy i ile to kosztuje? Z czego to się składa? W organizacji te trzy pytania mają trzy ostatnie procesy domeny BAI.
:::

---

<!-- slajd: pojecie -->
# BAI08 – wiedza spisana, nie w głowie

**[[proc-bai08]]** (*Manage Knowledge*)

**Po co:** dba, żeby potrzebna wiedza była spisana, aktualna i łatwa do znalezienia. Usuwa też wiedzę nieaktualną.

**Przykład:** helpdesk prowadzi bazę wiedzy z instrukcjami rozwiązania typowych zgłoszeń.

> „BAI08 Zarządzanie wiedzą”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
BAI08 odpowiada na pytanie: jak to zrobić i czego się nauczyliśmy? Instrukcje, procedury, wnioski po projektach. Wiedza nie może zostać tylko w głowie jednego pracownika. Podręcznik mówi, że BAI08 razem z BAI05 pomaga użytkownikom efektywnie korzystać z systemów.
:::

---

<!-- slajd: pojecie -->
# BAI09 i BAI10 – majątek i opis budowy

**[[proc-bai09]]** (*Manage Assets*) – spis sprzętu i licencji: co mamy, gdzie, ile kosztuje, kiedy wymienić.

**[[proc-bai10]]** (*Manage Configuration*) – aktualny opis, z jakich elementów składają się systemy, jak są ustawione i co od czego zależy.

> „BAI09 Zarządzanie zasobami”
>
> „BAI10 Zarządzanie konfiguracją”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
BAI09 patrzy na rzecz jak na majątek: cena, gwarancja, licencja, termin wymiany. BAI10 patrzy na tę samą rzecz jak na część systemu: wersja, ustawienia, powiązania. Ten sam serwer bywa więc w obu procesach. Opis konfiguracji aktualizuje się po każdej zatwierdzonej zmianie z BAI06.
:::

---

<!-- slajd: przyklad -->
# Jeden serwer w banku

Dział IT banku kupuje serwer. Wpisuje numer inwentarzowy, cenę i datę końca gwarancji. To **BAI09**.

Administrator zapisuje, jaki system operacyjny ma serwer i które aplikacje od niego zależą. To **BAI10**.

Instrukcję restartu serwera dodaje do bazy wiedzy. To **BAI08**.

:::wykladowca
Jedna rzecz, trzy spojrzenia. Majątek, część systemu i wiedza o tym, jak z nią pracować. Na egzaminie pytaj, czego dotyczy informacja. Koszt i gwarancja to BAI09. Wersja i powiązania to BAI10. Instrukcja to BAI08.
:::

:::sb przyklad
W sklepie internetowym po aktualizacji przestały działać płatności. Zespół sprawdza w opisie konfiguracji, które elementy zależą od zmienionej biblioteki. To BAI10. Opis obejścia problemu trafia do bazy wiedzy: BAI08. Licencja na tę bibliotekę i jej koszt to BAI09.
:::

---

<!-- slajd: pulapka -->
# Cztery znaczenia słowa „zasoby”

:::pulapka
| EN | Podręcznik PL |
|---|---|
| BAI09 Manage **Assets** | Zarządzanie zasobami (sprzęt, licencje) |
| APO07 Manage **Human Resources** | Zarządzanie zasobami ludzkimi |
| EDM04 Ensure **Resource** Optimisation | Zapewnienie optymalizacji zasobów |

W BAI09 „zasoby” to aktywa, czyli rzeczy z numerem inwentarzowym.
:::

:::zrodlo FW-PL 33 16
:::

:::wykladowca
Podręcznik przetłumaczył angielskie Assets jako „zasoby”. Właściwiej byłoby „aktywa”. Dlatego „zasoby” w BAI09 łatwo pomylić z zasobami ludzkimi w APO07 i z optymalizacją zasobów w EDM04. Gdy widzisz słowo „zasoby”, przetłumacz je w głowie na angielski. Nazwy egzaminacyjnej BAI09 nie potwierdziliśmy.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** BAI08 to wiedza, BAI09 to majątek IT, a BAI10 to opis, z czego systemy się składają.

:::zapamietaj
- BAI08 (*Knowledge*) – jak to zrobić; baza wiedzy.
- BAI09 (*Assets*) – sprzęt i licencje jako majątek.
- BAI10 (*Configuration*) – elementy, ustawienia, powiązania.
:::

:::wykladowca
Tak kończy się domena BAI: 10 procesów budowy, nabywania i wdrażania. Ostatnia trójka to trzy rodzaje informacji o systemach. Pamiętaj też różnicę z lekcji o architekturze. Model całości i zasady budowy to APO03, a spis konkretnych elementów to BAI10.
:::
