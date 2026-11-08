---
id: pr-18-atlas-apo-c
modul: PR
modulNazwa: Moduł 1 – Zasady COBIT 5
temat: "APO08–APO10: Zarządzanie rozmawia z użytkownikami, spisuje z nimi poziom usług i rozlicza dostawców"
lekcja: "1.18"
dzien: 6
sylabus: [PR-01-04]
minuty: 16
priorytet: 2
wielkiObraz: 5
cel:
  - "Potrafię rozpoznać APO08, APO09 i APO10 po kodzie, nazwie polskiej i słowie-kluczu z nazwy angielskiej."
  - "Potrafię odróżnić relację z użytkownikami (APO08), umowę o poziom usług z organizacją (APO09) i kontrakt z dostawcą (APO10)."
wprowadza: [proc-apo08, proc-apo09, proc-apo10]
wymaga: [pr-17-atlas-apo-b]
twierdzenia:
  - "APO08 buduje relację IT z resztą organizacji: wspólne rozumienie potrzeb i zaufanie."
  - "APO09 spisuje z użytkownikami katalog usług i uzgodnione poziomy usług, a potem sprawdza ich dotrzymanie."
  - "APO10 wybiera dostawców, zawiera z nimi umowy i ocenia, czy się wywiązują."
  - "Umowa z firmą zewnętrzną to APO10, choć APO09 ma w nazwie „umowy”."
typowePytania:
  - { pytanie: "APO08 to relacje z dostawcami?", odpowiedz: "Nie. Relacje z dostawcami to APO10. APO08 to relacja IT z własną organizacją, czyli z użytkownikami." }
  - { pytanie: "Skoro APO09 ma w nazwie „umowy”, to umowa z Kwant-Sygnałem jest w APO09?", odpowiedz: "Nie. Kontrakt z dostawcą to APO10. APO09 to uzgodnienie usług z organizacją, którą IT obsługuje." }
  - { pytanie: "Wystarczy podpisać SLA i sprawa załatwiona?", odpowiedz: "Nie. APO09 także mierzy, czy poziomy są dotrzymywane, i regularnie przegląda uzgodnienia." }
zgadnij: [q-atl-apo-c-01]
cwiczenia: [q-atl-apo-c-02, q-atl-apo-c-03, q-atl-apo-c-04]
zapas: [q-atl-apo-c-05, q-atl-apo-c-06]
kontrolaAutora: { data: null, kto: null, uwagi: "atlas procesów – do przeglądu" }
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy -->
# Dlaczego dostawca mówi „wszystko zgodnie z umową”, a alarm i tak nie dochodzi?

:::kontekst psp
**Trzy rozmowy jednego dnia**
Rano kpt. Marek Sikora, naczelnik informatyki, pije kawę na SK (stanowisku kierowania) i słucha, co dyżurnych męczy w Syrenie. W południe uzgadnia z kierownikiem SK, że alarm ma dotrzeć do odbiorcy w 60 sekund. Po południu Igor Wolny z firmy Kwant-Sygnał mówi: „System działa zgodnie z umową”. Sikora czyta umowę i nie znajduje w niej żadnego czasu doręczenia SMS-a. To trzy procesy APO: APO08 (relacje), APO09 (umowy o usługi) i APO10 (dostawcy).
:::

**Wniosek:** rozmowa z użytkownikami, umowa o poziom usług i kontrakt z dostawcą to trzy różne procesy.

:::wykladowca
Ta lekcja dotyczy rozmów i umów. Sikora rozmawia z trzema stronami. Z dyżurnymi buduje relację i poznaje ich potrzeby. Z kierownikiem SK spisuje, jaką usługę i na jakim poziomie dostanie. Z dostawcą negocjuje kontrakt. Problem z Kwant-Sygnałem bierze się stąd, że te trzy rzeczy się rozjechały. Potrzeba dyżurnych nie trafiła do umowy z dostawcą. Na egzaminie te trzy procesy mylą się często, bo dwa z nich mają w nazwie słowo „umowy” albo „relacje”.
:::

:::pytanie-uczestnika
pytanie: Czy dostawca ma rację, skoro spełnia umowę?
odpowiedz: Formalnie tak. Ale umowa nie pokrywała tego, czego potrzebuje SK. Zgodność z umową nie oznacza jeszcze dobrej usługi.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO08 = relacja IT z własną organizacją, rozumienie potrzeb. -->
# APO08: jak IT poznaje potrzeby ludzi, zanim wybuchnie awaria?

**APO08** – [[proc-apo08|Zarządzanie relacjami]]
EN: *Manage Relationships* (wym. „menydż rilejszynszyps”)

**Po ludzku:** informatycy regularnie rozmawiają z resztą organizacji, żeby dobrze rozumieć potrzeby ludzi i budować zaufanie.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO08 i słowie EN *Relationships*.

:::kontekst zycie
Fryzjer przy każdej wizycie pyta, jak sprawdziła się ostatnia fryzura i czego szukasz teraz. Zna Twoje potrzeby, zanim je powiesz. To relacja, a nie cennik.
:::

:::glebiej proc-apo08
Szczebel „skrajny”: gdzie kończy się rozmowa (APO08), a zaczyna zapisany poziom usługi (APO09).
:::

:::zrodlo FW-PL 30
:::

**Wniosek:** APO08 to relacja IT z własną organizacją, a nie z dostawcami.

:::wykladowca
Pierwszy proces tej lekcji to APO08, po angielsku Manage Relationships. Chodzi o relację informatyki z resztą organizacji. Sikora co tydzień przychodzi na SK i pyta dyżurnych, co ich w Syrenie męczy. Rozmawia też z dowódcą zmiany w JRG 1, czyli zawodowej jednostce. Dzięki temu zna potrzeby, zanim wybuchnie awaria. Framework używa APO08 jako przykładu celów i mierników procesu. Jeden z mierników to badanie zadowolenia użytkowników i personelu IT. Relacja ma więc swoje liczby, a nie jest miękkim dodatkiem.
:::

:::sb ekspert
FW-PL s. 30 podaje Zarządzanie relacjami (APO08) jako przykład celów procesu. Cel: „dobre relacje między przedsiębiorstwem i działem IT”. Miernik: badania zadowolenia użytkowników i personelu IT.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO09 = katalog usług i SLA uzgodnione z użytkownikami. -->
# APO09: jaką usługę i na jakim poziomie IT obiecuje użytkownikom?

**APO09** – [[proc-apo09|Zarządzanie umowami o świadczenie usług]]
EN: *Manage Service Agreements* (wym. „menydż serwis agriments”)

**Po ludzku:** spisanie z użytkownikami, jakie usługi daje informatyka, jak dobrze i jak szybko, a potem sprawdzanie tego.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO09 i słowach EN *Service Agreements*.

:::kontekst zycie
Zamawiasz pizzę z obietnicą: dostawa w 30 minut albo za darmo. To uzgodniony poziom usługi. Pizzeria mierzy czas i wie, czy dotrzymuje słowa.
:::

:::glebiej proc-apo09
Szczebel „skrajny”: aneks z dostawcą o czasie SMS-a i słowo „umowa”, które kusi.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO09 to usługa i jej poziom uzgodnione z organizacją, którą IT obsługuje, oraz pomiar ich dotrzymania.

:::wykladowca
Drugi proces to APO09, po angielsku Manage Service Agreements. Sikora uzgadnia z kierownikiem SK, czego SK może oczekiwać od Syreny. Zapisuje: dostępność całą dobę, alarm u odbiorcy w 60 sekund, reakcja na nocną awarię w 15 minut. Taki zapis to SLA, czyli umowa o poziomie usług. Co miesiąc Sikora pokazuje, czy tego dotrzymał. APO09 nie obsługuje samych awarii. Zgłoszenia i incydenty obsługuje DSS02. APO09 ustala, jak szybko ma się to dziać, i to sprawdza.
:::

:::sb skrot
*Manage* – zarządzaj; *Service Agreements* – uzgodnienia usług. SLA (*Service Level Agreement*) to umowa o poziomie usług, czyli zapis jak dobrze i jak szybko.
:::

---

<!-- slajd: pojecie -->
<!-- typ SD: B – objaśniający (karta procesu) -->
<!-- podpowiedz: APO10 = firma zewnętrzna: wybór, kontrakt, ocena, ryzyko dostawcy. -->
# APO10: jak wybrać firmę zewnętrzną i sprawdzić, czy się wywiązuje?

**APO10** – [[proc-apo10|Zarządzanie dostawcami]]
EN: *Manage Suppliers* (wym. „menydż saplajers”)

**Po ludzku:** wybieranie firm, które coś dla nas robią, pilnowanie umów z nimi i sprawdzanie, czy się wywiązują.

*Nazwa egzaminacyjna nie jest potwierdzona i może brzmieć inaczej.* Rozpoznawaj proces po kodzie APO10 i słowie EN *Suppliers*.

:::kontekst zycie
Wybierasz firmę do wywozu śmieci. Porównujesz oferty, podpisujesz umowę, a potem sprawdzasz, czy przyjeżdża w terminie. Gdy zawodzi, rozmawiasz albo zmieniasz firmę.
:::

:::glebiej proc-apo10
Szczebel „skrajny”: dostawca spełnia umowę, a usługa i tak zawodzi.
:::

:::zrodlo FW-PL 33 16
:::

**Wniosek:** APO10 obejmuje cały cykl współpracy z dostawcą: wybór, kontrakt, ocenę wykonania i ryzyko.

:::wykladowca
Trzeci proces to APO10, po angielsku Manage Suppliers. Sikora czyta umowę z Kwant-Sygnałem i widzi, że nie ma w niej potwierdzenia doręczenia SMS-a. Negocjuje aneks. Wprowadza też kwartalną ocenę dostawcy. APO10 nie kończy się na podpisaniu umowy. Obejmuje bieżącą ocenę wykonania i ryzyko dostawcy, na przykład to, że jest tylko jeden i może upaść. Na egzaminie słowa „wybór dostawcy”, „umowa z dostawcą”, „outsourcing” i „ocena wykonania” wskazują APO10.
:::

:::sb skrot
*Manage* – zarządzaj; *Suppliers* – dostawcy. *Outsourcing* to powierzenie pracy firmie zewnętrznej, czyli też APO10.
:::

---

<!-- slajd: porownanie -->
<!-- typ SD: E – porównawczy -->
# Relacja, umowa o usługi, kontrakt: z kim rozmawiamy i co powstaje?

:::mapa domena-apo
APO08, APO09 i APO10 to trzy procesy domeny APO o współpracy z innymi.
:::

| Proces | Z kim? | Co powstaje? | Pytanie rozstrzygające |
|---|---|---|---|
| **APO08** Relacje | z własną organizacją (użytkownicy, kierownicy) | wspólne rozumienie potrzeb, zaufanie | Rozmawiamy o potrzebach z naszymi ludźmi? |
| **APO09** Umowy o usługi | z własną organizacją, którą IT obsługuje | katalog usług, SLA i pomiar ich dotrzymania | Spisujemy, co i jak dobrze dostaną nasi użytkownicy? |
| **APO10** Dostawcy | z firmą zewnętrzną | kontrakt, aneks, ocena dostawcy | Czego żądamy od dostawcy i czy to dostajemy? |
| DSS02 Incydenty | z użytkownikiem, który zgłasza awarię | przywrócone działanie | Naprawiamy awarię teraz? |

DSS02 poznasz w części atlasu o domenie DSS.

:::teza porownawcza
sytuacja: Komenda podpisuje z Kwant-Sygnałem aneks o czasie doręczenia SMS-a.
pytanie: Czy to APO09, bo ma w nazwie „umowy o świadczenie usług”?
teza: Nie. Kontrakt z dostawcą to APO10. APO09 wyznacza tylko, czego trzeba od dostawcy żądać.
uzasadnienie: APO09 i APO10 to dwa osobne procesy domeny APO (FW-PL s. 33). Zakres „uzgodnienia z organizacją” i „kontrakt z dostawcą” to wyjaśnienie kursu, bo opisy procesów są w przewodniku, którego nie ma w korpusie.
powiazanie: APO09 vs APO10
przyklad: 60 sekund dla SK to APO09. Aneks z Kwant-Sygnałem, który ten czas zabezpiecza, to APO10.
status: uproszczenie
refleksja: Co powinno powstać najpierw: SLA dla SK czy umowa z dostawcą? Dlaczego?
:::

**Wniosek:** rozstrzyga druga strona rozmowy: własna organizacja (APO08, APO09) czy firma zewnętrzna (APO10).

:::wykladowca
Ten slajd daje jedno pytanie na całą lekcję: z kim rozmawiamy? Jeśli z własnymi ludźmi o ich potrzebach, to APO08. Jeśli z własnymi ludźmi o zapisanym i mierzonym poziomie usługi, to APO09. Jeśli z firmą zewnętrzną o kontrakcie, to APO10. Ostatni wiersz dodałem dla porządku. Obsługa awarii to DSS02, a nie APO09. Najważniejsza pułapka to słowo „umowy”. Podręcznikowa nazwa APO09 ma to słowo, ale umowa z dostawcą to zawsze APO10.
:::

---

<!-- slajd: rozwiazany -->
<!-- podpowiedz: Firma zewnętrzna i warunki kontraktu to dostawca. -->
# Rozwiązujemy razem

:::rozwiazany
Spółdzielnia mieszkaniowa zleca firmie zewnętrznej utrzymanie swojego serwisu internetowego. Kierownik IT spółdzielni co kwartał ocenia, czy firma dotrzymuje warunków kontraktu, i negocjuje aneks o krótszym czasie reakcji. Który proces COBIT 5 najlepiej opisuje tę pracę?
- A. APO08 Zarządzanie relacjami
- B. APO09 Zarządzanie umowami o świadczenie usług
- C. APO10 Zarządzanie dostawcami
- D. DSS02 Zarządzanie zgłoszeniami serwisowymi i incydentami
+++
**Krok 1 – co jest pytane?** Słowa-klucze: **firma zewnętrzna**, **warunki kontraktu** i **aneks**.
+++
**Krok 2 – jaka kategoria COBIT?** Współpraca z dostawcą i ocena jego wykonania to domena APO, proces dostawców.
+++
**Krok 3 – eliminacja.** A – *inna kategoria*: APO08 to relacja z własną organizacją, a nie z firmą zewnętrzną. B – *forma podręcznikowa*: słowo „umowy” w nazwie kusi, ale APO09 to uzgodnienia z użytkownikami. D – *prawda nie na temat*: czas reakcji dotyczy awarii, ale tu negocjuje się kontrakt, a nie usuwa awarię.
+++
**Odpowiedź: C.** Dlaczego: ocena dostawcy i negocjowanie kontraktu z nim to APO10.
:::

:::wykladowca
Szukamy słów-kluczy: firma zewnętrzna, kontrakt, aneks. Wszystkie wskazują dostawcę, czyli APO10. Teraz sprawdźmy, czemu inne odpowiedzi kuszą. APO09 kusi słowem „umowy” z polskiej nazwy. Ale APO09 to uzgodnienia z własnymi użytkownikami. APO08 kusi słowem „relacje”, ale chodzi o relację z własną organizacją. DSS02 kusi „czasem reakcji”, ale nikt tu nie usuwa awarii. Zapamiętajcie: firma zewnętrzna po drugiej stronie stołu to prawie zawsze APO10.
:::

---

<!-- slajd: wlasne-slowa -->
<!-- typ SD: F – syntetyzujący -->
# Co już umiesz: trzy procesy współpracy

- **APO08** (*Relationships*): relacja i rozumienie potrzeb własnej organizacji ≠ APO10 (dostawcy).
- **APO09** (*Service Agreements*): katalog usług, SLA i ich pomiar ≠ APO10 (kontrakt z dostawcą) ≠ DSS02 (obsługa awarii).
- **APO10** (*Suppliers*): wybór, kontrakt, ocena i ryzyko dostawcy.

:::wlasne-slowa
Wytłumacz Kasi Nowik w 3–4 zdaniach, czym różni się APO09 od APO10. Użyj przykładu „alarm w 60 sekund”.
???
„APO09 to uzgodnienie usług z naszymi użytkownikami. Sikora spisał z kierownikiem SK, że alarm ma dotrzeć w 60 sekund, i co miesiąc to mierzy. APO10 to praca z dostawcą. Żeby dotrzymać 60 sekund, Sikora musi mieć odpowiedni zapis w umowie z Kwant-Sygnałem i oceniać, czy firma się wywiązuje. APO09 mówi, czego potrzebują nasi ludzie, a APO10, czego żądamy od dostawcy.”
:::

**Co dalej i dlaczego:** w lekcji 1.19 zamkniesz domenę APO procesami APO11, APO12 i APO13: jakość, ryzyko i bezpieczeństwo.

:::wykladowca
Podsumujmy trzy procesy współpracy. APO08 to relacja z własną organizacją. APO09 to zapisany i mierzony poziom usług dla użytkowników. APO10 to praca z dostawcą: wybór, kontrakt i ocena. Teraz wytłumaczcie Kasi Nowik, czym różni się APO09 od APO10. Kasia słyszała Wolnego, który mówił „zgodnie z umową”. Pomóżcie jej zrozumieć, że to była umowa z dostawcą, a nie obietnica dla SK. Potem porównajcie wyjaśnienie ze wzorcem.
:::
