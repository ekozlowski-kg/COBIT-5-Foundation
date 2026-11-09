---
id: pr-k70-dss04-dss06
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "DSS04–DSS06: ciągłość, usługi bezpieczeństwa i mechanizmy kontrolne procesów"
lekcja: "1.70"
dzien: 7
format: krotki
sylabus: [PR-01-04]
minuty: 8
zgadnij: []
cwiczenia: [q-prc-70-1, q-prc-70-2, q-prc-70-3]
zapas: [q-prc-70-z1]
wprowadza: [proc-dss04, proc-dss05, proc-dss06]
wymaga: [pr-k69-dss01-dss03]
cel: "Potrafię odróżnić ciągłość (DSS04) od pojemności (BAI04), codzienną ochronę (DSS05) od systemu bezpieczeństwa (APO13) i kontrole w procesie (DSS06) od ich oceny (MEA02)."
priorytet: 2
---

<!-- slajd: start -->
# Co, jeśli padnie wszystko?

Trzymasz kopię ważnych dokumentów u rodziców. Wiesz, co zrobisz, gdy zaleje mieszkanie.

Na co dzień zamykasz drzwi na klucz i nie podajesz nikomu PIN-u.

W domowym budżecie wydatek powyżej tysiąca złotych zatwierdzacie we dwoje.

Plan na katastrofę, codzienna ochrona i zabezpieczenie w procedurze to trzy różne rzeczy.

:::wykladowca
Ostatnie trzy procesy domeny DSS dotyczą odporności i bezpieczeństwa. Pierwszy to plan na najgorszy dzień. Drugi to codzienna ochrona dostępu. Trzeci to zabezpieczenia wbudowane w samą pracę, na przykład zatwierdzanie we dwoje. Każdy łatwo pomylić z procesem z innej domeny.
:::

---

<!-- slajd: pojecie -->
# DSS04 – plan na czarną godzinę

**[[proc-dss04]]** (*Manage Continuity*)

**Po co:** utrzymuje plan ciągłości działania: najważniejsze usługi mają działać także po katastrofie. Plan jest testowany i ćwiczony.

**Przykład:** bank ćwiczy przeniesienie systemów do zapasowego centrum danych.

> „DSS04 Zarządzanie ciągłością”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
DSS04 odpowiada na pytanie: jak przetrwać, gdy padnie centrum danych, zabraknie prądu albo ludzi? Plan ciągłości, kopie zapasowe poza siedzibą, testy i ćwiczenia. Plan, którego nikt nie przećwiczył, nie spełnia celu procesu. Pamiętaj: tłok i szczyt ruchu to BAI04, a katastrofa to DSS04.
:::

---

<!-- slajd: pojecie -->
# DSS05 – codzienna ochrona

**[[proc-dss05]]** (*Manage Security Services*)

**Po co:** wykonuje ochronę na co dzień: antywirus, zapora sieciowa, konta i uprawnienia, fizyczny dostęp, monitorowanie zdarzeń bezpieczeństwa.

**Przykład:** administrator urzędu blokuje konto byłego pracownika w dniu jego odejścia.

> „Administracja bezpieczeństwa”

:::zrodlo FW-PL 88
:::

:::wykladowca
DSS05 to usługi bezpieczeństwa. Słowo „usługi” w nazwie wskazuje pracę operacyjną. Podręcznik podaje administrację bezpieczeństwa jako przykładową umiejętność domeny DSS. APO13 ustala system i plan bezpieczeństwa. DSS05 wykonuje ochronę każdego dnia.
:::

---

<!-- slajd: pojecie -->
# DSS06 – kontrole wbudowane w proces

**[[proc-dss06]]** (*Manage Business Process Controls*)

**Po co:** zabezpieczenia w codziennej pracy organizacji pilnują, żeby dane były kompletne, poprawne i zatwierdzone przez właściwą osobę.

**Przykład:** w ubezpieczalni wypłatę odszkodowania powyżej limitu zatwierdza druga osoba.

> „DSS06 Zarządzanie mechanizmami kontrolnymi procesów biznesowych”

:::zrodlo FW-PL 33 16
:::

:::wykladowca
DSS06 to kontrola, którą robi sam proces biznesowy w chwili pracy. Rozdział obowiązków, zatwierdzanie we dwoje, sprawdzanie kompletności danych. Za te kontrole odpowiada zwykle właściciel procesu biznesowego. Ocena, czy wszystkie kontrole działają, to już domena MEA, czyli MEA02.
:::

---

<!-- slajd: porownanie -->
# Z kim mylą się DSS04–DSS06?

| Para | Pytanie rozstrzygające |
|---|---|
| DSS04 / [[proc-bai04|BAI04]] | Katastrofa czy za dużo ruchu? |
| DSS05 / [[proc-apo13|APO13]] | Codzienna ochrona czy system i plan bezpieczeństwa? |
| DSS05 / DSS06 | Konto w systemie czy prawo do zatwierdzania w procesie? |
| DSS06 / MEA02 | Kontrola działa w procesie czy ktoś ocenia jej skuteczność? |

:::wykladowca
Bezpieczeństwo to kilka procesów naraz. APO13 organizuje. DSS05 wykonuje. DSS06 zabezpiecza sam proces biznesowy. MEA02 ocenia, czy kontrole działają. Pytaj zawsze: kto to robi i kiedy?
:::

:::sb przyklad
Sklep internetowy ma politykę bezpieczeństwa przyjętą przez zarząd: APO13. Codziennie system blokuje konto po pięciu błędnych hasłach: DSS05. Zwrot pieniędzy klientowi powyżej 2000 zł wymaga drugiego zatwierdzenia: DSS06. Raz w roku audytor sprawdza, czy te zabezpieczenia działają: MEA02.
:::

---

<!-- slajd: wniosek -->
# Co zapamiętać

**Wniosek:** DSS04 utrzymuje ciągłość po katastrofie, DSS05 chroni na co dzień, a DSS06 zabezpiecza sam proces biznesowy.

:::zapamietaj
- DSS04 (*Continuity*) – katastrofa; tłok to BAI04.
- DSS05 (*Security Services*) – codzienna ochrona; system i plan to APO13.
- DSS06 (*Business Process Controls*) – kontrole w procesie; ich ocena to MEA02.
:::

:::wykladowca
Tak kończy się domena DSS: sześć procesów codziennej obsługi. Na egzaminie najczęściej pada para APO13 i DSS05. Zapamiętaj: APO13 planuje i organizuje, DSS05 wykonuje. Nazw egzaminacyjnych tych procesów nie potwierdziliśmy, więc patrz na kod i angielskie słowa.
:::
