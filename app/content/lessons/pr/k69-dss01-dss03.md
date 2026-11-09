---
id: pr-k69-dss01-dss03
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "DSS01–DSS03: eksploatacja, incydenty i problemy"
lekcja: "1.69"
dzien: 7
format: krotki
sylabus: [PR-01-04]
minuty: 8
zgadnij: []
cwiczenia: ["q-fin-pliki-29", "q-proces-apo01"]
zapas: ["q-proces-apo02"]
wprowadza: [proc-dss01, proc-dss02, proc-dss03]
wymaga: [pr-k68-bai08-bai10]
cel: "Potrafię odróżnić codzienną eksploatację (DSS01), szybkie przywracanie usługi (DSS02) i usuwanie przyczyny (DSS03)."
priorytet: 2
---

<!-- slajd: start -->
# Pralka, która ciągle staje

Co tydzień czyścisz filtr pralki. To rutyna.

Pewnego dnia pralka staje w połowie prania. Restartujesz ją i pranie się kończy.

Za tydzień staje znowu. I znowu. Wzywasz serwis, żeby znalazł przyczynę.

Rutyna, szybka naprawa i szukanie przyczyny to trzy różne prace.

:::wykladowca
Wchodzimy do domeny DSS, na egzaminie „Dostarczaj, Obsługuj i Wspieraj”. To codzienna praca działu IT. Pierwsze trzy procesy tej domeny dobrze widać na przykładzie pralki. Najważniejsza różnica tej lekcji: szybka naprawa to jeszcze nie usunięcie przyczyny.
:::

---

<!-- slajd: pojecie -->
# DSS01 – codzienna rutyna

**[[proc-dss01]]** (*Manage Operations*)

**Po co:** wykonuje zaplanowane prace, dzięki którym systemy działają: zadania nocne, kopie zapasowe, monitorowanie, opieka nad centrum danych.

**Przykład:** dział IT uczelni co noc uruchamia kopię zapasową i rano sprawdza jej wynik.

> „DSS01 Zarządzanie eksploatacją”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
DSS01 to eksploatacja, po angielsku Operations. To plan i rutyna, a nie naprawa awarii. Harmonogram zadań, monitorowanie infrastruktury, zasilanie i klimatyzacja w serwerowni. Gdy coś przestaje działać, wchodzimy do kolejnego procesu.
:::

---

<!-- slajd: pojecie -->
# DSS02 i DSS03 – awaria i jej przyczyna

**[[proc-dss02]]** (*Manage Service Requests and Incidents*) – szybko przywraca działanie usługi i załatwia prośby użytkowników.

**[[proc-dss03]]** (*Manage Problems*) – szuka przyczyny powtarzających się incydentów i inicjuje trwałe rozwiązanie.

> „Zarządzanie jednostką Service Desk i incydentami”

:::zrodlo FW-PL 88
:::

:::wykladowca
Incydent to przerwa w działaniu usługi albo spadek jej jakości. DSS02 kończy się, gdy usługa znów działa, nawet jeśli nie znamy przyczyny. Do DSS02 należy też prośba użytkownika, na przykład o nowe hasło. Problem to nieznana przyczyna jednego lub wielu incydentów. Szuka jej DSS03.
:::

---

<!-- slajd: przyklad -->
# Bank i bankowość internetowa

W poniedziałek o 9:00 klienci nie mogą się zalogować. Helpdesk restartuje serwer i po 20 minutach logowanie działa. To **DSS02**.

Sytuacja wraca co tydzień. Zespół analizuje logi i znajduje błąd w pamięci aplikacji. To **DSS03**.

Poprawka aplikacji przejdzie przez zatwierdzenie zmiany, czyli BAI06.

:::wykladowca
Zobacz, jak praca przechodzi z procesu do procesu. DSS02 gasi skutki. DSS03 szuka przyczyny i proponuje trwałe rozwiązanie. Samo wprowadzenie poprawki w systemie to zmiana, więc przechodzi przez BAI06. Znaleziona przyczyna i obejście trafiają do opisu znanych błędów.
:::

:::sb przyklad
Helpdesk szpitala chwali się, że 95 procent zgłoszeń zamyka w godzinę. Ale od pół roku co tydzień pada ta sama drukarka recept. Dobre wyniki DSS02 nie znaczą, że problem jest rozwiązany. Brakuje pracy w DSS03, czyli szukania przyczyny.
:::

---

<!-- slajd: porownanie -->
# Z kim mylą się DSS01–DSS03?

| Para | Pytanie rozstrzygające |
|---|---|
| DSS01 / DSS02 | Zaplanowana praca czy przerwa w usłudze? |
| DSS02 / DSS03 | Przywracamy usługę teraz czy usuwamy przyczynę? |
| DSS02 / [[proc-bai06|BAI06]] | Przywracamy działanie czy zmieniamy system? |
| DSS01 / [[proc-bai04|BAI04]] | Pilnujemy obciążenia dziś czy planujemy moc na przyszłość? |

:::wykladowca
Najważniejsza para to DSS02 i DSS03. Pytaj: czy chodzi o szybki powrót usługi, czy o przyczynę? Druga pułapka: nocna zmiana ustawienia, żeby naprawić awarię, to też zmiana. Przechodzi przez BAI06 jako zmiana awaryjna.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** DSS01 to rutyna, DSS02 szybko przywraca usługę, a DSS03 usuwa przyczynę powtarzających się incydentów.

:::zapamietaj
- DSS01 (*Operations*) – zaplanowana eksploatacja.
- DSS02 (*Service Requests and Incidents*) – usługa znów działa.
- DSS03 (*Problems*) – przyczyna i trwałe rozwiązanie.
:::

:::wykladowca
Na egzaminie „przywrócić jak najszybciej” wskazuje DSS02. „Przyczyna źródłowa”, „powtarzające się incydenty” i „znany błąd” wskazują DSS03. Nazw egzaminacyjnych tych procesów nie potwierdziliśmy, więc patrz na kod i angielskie słowa: Incidents i Problems.
:::
