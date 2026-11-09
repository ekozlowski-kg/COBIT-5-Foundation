---
id: it0-03-siec-internet
modul: IT0
modulNazwa: Podstawy cyfrowe
temat: "Dlaczego Wi-Fi działa, a strony się nie otwierają? Sieć, Internet i Wi-Fi"
lekcja: "0A.3"
dzien: 0
sylabus: [M0-00-07]
minuty: 13
priorytet: 2
wielkiObraz: 4
cel:
  - "Potrafię odróżnić sieć komputerową (network) od Internetu (Internet) i od Wi-Fi."
  - "Potrafię powiedzieć, co przestaje działać, gdy padnie łącze z Internetem, a co nadal działa."
wprowadza: [it-siec, it-internet, it-wifi]
wymaga: [it0-01-komputer-program]
twierdzenia: ["Sieć komputerowa (network) to połączone urządzenia, które wymieniają dane.", "Internet to ogólnoświatowa sieć sieci.", "Wi-Fi to połączenie z siecią bez kabla, w pobliżu routera.", "Sieć w budynku może działać bez Internetu."]
typowePytania: [{"pytanie": "Mam pełne Wi-Fi, a nic się nie otwiera. Jak to możliwe?", "odpowiedz": "Wi-Fi łączy Cię tylko z routerem w pobliżu. Jeśli router nie ma łącza z Internetem, Wi-Fi działa, a Internetu nie ma."}, {"pytanie": "Czy Internet to to samo co strona wyszukiwarki?", "odpowiedz": "Nie. Internet to drogi, a strony to przesyłki, które tymi drogami do Ciebie jadą."}]
zgadnij: [q-pre-it0-03]
cwiczenia: [q-it0-03-01, q-it0-03-02, q-it0-03-03]
zapas: [q-zap-it0-03-1, q-zap-it0-03-2]
kontrolaAutora: {"data": null, "kto": null, "uwagi": "Wersja robocza – do przeglądu przez człowieka (test laika)."}
---

<!-- slajd: start -->
<!-- typ SD: A – problemowy; krok 1: pokaż zjawisko -->
# Pełny zasięg Wi-Fi, a strony się nie otwierają – co się zepsuło?

Siedzisz w domu. Telefon pokazuje pełny znaczek Wi-Fi. A jednak żadna strona się nie otwiera.

Jednocześnie możesz wysłać zdjęcie z telefonu na telewizor w tym samym pokoju.

**Wniosek:** „połączenie” to kilka różnych rzeczy – jedna może działać, a druga nie.

:::wykladowca
Na pewno to znacie. Telefon pokazuje pełne Wi-Fi, a strony się nie ładują. Dziwne, prawda? Jeszcze dziwniej: w tym samym czasie możecie przesłać zdjęcie z telefonu na telewizor. Coś więc działa, a coś nie. Na tej lekcji rozbierzemy słowo „połączenie” na trzy części. Każda ma swoją nazwę. Gdy je poznacie, sami odpowiecie na pytanie, co się zepsuło. A w pracy będziecie wiedzieć, komu zgłosić kłopot.
:::

:::pytanie-uczestnika
pytanie: Czyli Wi-Fi i Internet to nie to samo?
odpowiedz: Nie. Za chwilę zobaczysz, że Wi-Fi to tylko ostatni kawałek drogi do Internetu.
:::

---

<!-- slajd: rozklad -->
<!-- typ SD: B – objaśniający; kroki 2–4: wyjaśnij, nazwij, każdy element -->
# Trzy różne „połączenia”: sieć, Internet, Wi-Fi

1. **[[it-siec|Sieć komputerowa]]** (EN: *network*, wym. „netłerk”) – kilka urządzeń połączonych tak, że mogą przesyłać sobie dane. Mała sieć w jednym budynku to **sieć lokalna** (skrót LAN – od angielskiego *Local Area Network*).
2. **[[it-internet|Internet]]** (EN: *Internet*, wym. „internet”) – ogromna sieć łącząca sieci z całego świata. Łączysz się z nim przez **dostawcę Internetu**, czyli firmę, której płacisz za łącze.
3. **[[it-wifi|Wi-Fi]]** (wym. „łaj-faj”) – połączenie z siecią **bez kabla**, przez fale radiowe. Działa tylko blisko **routera**, czyli urządzenia, które nadaje sygnał i kieruje dane dalej.

**Wniosek:** sieć to połączone urządzenia, Internet to sieć sieci, a Wi-Fi to sposób przyłączenia się bez kabla.

:::wykladowca
Pierwsza część to sieć komputerowa, po angielsku network. To po prostu kilka urządzeń połączonych ze sobą: komputer, telefon, drukarka, telewizor. Sieć w domu albo w jednym budynku nazywamy siecią lokalną. Druga część to Internet. To sieć sieci, która łączy cały świat. Dostęp do niej sprzedaje nam firma, dostawca Internetu. Trzecia część to Wi-Fi, czytamy „łaj-faj”. To sposób przyłączenia się do sieci bez kabla. Działa tylko w pobliżu routera, czyli małego pudełka, które nadaje sygnał.
:::

:::sb wyobraz
Sieć to drogi na Twoim osiedlu. Internet to wszystkie drogi świata połączone ze sobą. Wi-Fi to krótkofalówka zamiast telefonu na kablu: działa bez przewodu, ale tylko w zasięgu.
:::

:::sb skrot
**Wi-Fi** – nazwa handlowa, w polszczyźnie zostaje w oryginale; opisowo: sieć bezprzewodowa (EN: *wireless network*). **LAN** – *Local Area Network*, sieć lokalna.
:::

---

<!-- slajd: proces -->
<!-- typ SD: C – procesowy; krok 5: jak elementy współpracują -->
# Jak Twoje zdjęcie trafia do cioci w Kanadzie?

1. Telefon wysyła zdjęcie przez **Wi-Fi** do routera w Twoim domu.
2. Router jest częścią Twojej **sieci lokalnej**. Kablem przekazuje zdjęcie do sieci **dostawcy Internetu**.
3. Zdjęcie płynie przez **Internet**: z sieci do sieci, przez wiele krajów.
4. Na końcu trafia do sieci i telefonu cioci.

Co się stanie, gdy padnie krok 2? Wi-Fi i sieć w domu działają, ale **Internetu nie ma**. Zdjęcie dojdzie do telewizora w pokoju, a do Kanady – nie.

**Wniosek:** każdy odcinek drogi może zawieść osobno, więc trzeba wiedzieć, który przestał działać.

:::wykladowca
Prześledźmy drogę jednego zdjęcia. Telefon wysyła je przez Wi-Fi do routera. Router to brama Waszego domu. Przez kabel przekazuje zdjęcie dostawcy Internetu. Potem zdjęcie wędruje przez Internet, z sieci do sieci, aż do telefonu cioci w Kanadzie. Teraz wróćmy do zagadki z początku lekcji. Pełne Wi-Fi oznacza, że działa krok pierwszy. Jeśli zawiódł krok drugi, łącze z dostawcą, Internetu nie ma. Sieć w domu wciąż działa, więc telewizor dostanie zdjęcie. Ciocia nie.
:::

:::teza problemowa
sytuacja: W biurze padło łącze z Internetem. Pracownicy mówią: „Nic nie działa, idziemy do domu”.
pytanie: Czy brak Internetu oznacza, że w biurze nie da się pracować?
teza: Nie zawsze. Sieć lokalna w budynku nadal działa, więc wspólna drukarka i wspólne foldery na komputerach w biurze mogą być dostępne.
uzasadnienie: Sieć lokalna i Internet to różne odcinki drogi. Awaria łącza od dostawcy zatrzymuje tylko to, co wymaga połączenia ze światem.
powiazanie: Infrastruktura sieciowa (FW-PL s. 86)
przyklad: Bez Internetu nie wyślesz maila do klienta, ale wydrukujesz umowę na drukarce w biurze.
status: uproszczenie
refleksja: Co w Twojej pracy działa bez Internetu, a co bez niego staje?
:::

---

<!-- slajd: przyklad -->
<!-- typ SD: D – przypadku; kroki 6–8: EN, organizacja, znaczenie specjalistyczne -->
# Sieć w kawiarni, w biurze i w komendzie

:::kontekst zycie
**Kawiarnia.** Prosisz o hasło do Wi-Fi. Telefon łączy się z siecią kawiarni, a przez nią z Internetem.
:::

:::kontekst biuro
**Biuro.** Pięć komputerów drukuje na jednej drukarce dzięki sieci w biurze. Goście łączą się z osobnym Wi-Fi „Biuro-Goście”, które nie widzi folderów pracowników.
:::

:::kontekst organizacja
**Sklep internetowy.** Przyjmuje zamówienia przez Internet całą dobę. Gdy łącze pada, sklep nie zarabia, choć komputery w magazynie działają.
:::

:::kontekst psp
**Scena: „Jedno łącze”.** Komputery stanowiska kierowania (SK) i obu jednostek ratowniczo-gaśniczych (JRG) łączy sieć komendy w Modrzewiowie. Dzięki niej wszyscy widzą to samo zgłoszenie. Aplikacja „Syrena” wysyła jednak SMS-y, czyli krótkie wiadomości na telefon, przez Internet. Komenda ma tylko jedno łącze internetowe. Gdy ono pada, dyżurni widzą zgłoszenia, ale ochotnicy z OSP Zawilce nie dostają alarmu.
:::

:::kontekst it
**COBIT 5.** Sieć to część infrastruktury technicznej: FW-PL wymienia „infrastrukturę sieciową” obok sprzętu i oprogramowania systemowego (s. 86).
:::

:::zrodlo FW-PL 86
:::

**Wniosek:** organizacja musi wiedzieć, które jej usługi potrzebują Internetu, a które tylko sieci w budynku.

:::wykladowca
W kawiarni, w biurze i w sklepie widać to samo. Sieć w budynku to jedno, a Internet to drugie. W komendzie w Modrzewiowie ma to znaczenie dla życia ludzi. Sieć w budynku łączy dyżurnych z jednostkami. Ale „Syrena” wysyła wiadomości do ochotników przez Internet, a łącze jest tylko jedno. Gdy ono pada, alarm do ochotników nie wychodzi. COBIT 5 nazywa sieć infrastrukturą sieciową i każe ją planować razem z resztą infrastruktury. Do tej sprawy wrócimy przy lekcji o ryzyku.
:::

:::teza praktyczna
sytuacja: Dyżurny mówi: „Mam pełne Wi-Fi na tablecie, więc Syrena na pewno wyśle alarm”.
pytanie: Czy zasięg Wi-Fi gwarantuje, że wiadomość dotrze do ochotników?
teza: Nie. Wi-Fi to tylko odcinek do routera. Alarm do ochotników potrzebuje jeszcze działającego łącza z Internetem.
uzasadnienie: Wi-Fi, sieć lokalna i Internet to kolejne, niezależne odcinki drogi danych.
powiazanie: Infrastruktura sieciowa; ciągłość działania (lekcja 0A.8)
przyklad: W nocy łącze komendy pada: Wi-Fi w budynku działa, a SMS-y do OSP nie wychodzą.
status: uproszczenie
refleksja: Co komenda powinna mieć w zapasie, gdy zawiedzie jedyne łącze?
:::

---

<!-- slajd: wniosek -->
<!-- typ SD: F – syntetyzujący; krok 9: sprawdź zrozumienie -->
# Co już umiesz

| PL | EN (wymowa) | Jednym zdaniem |
|---|---|---|
| sieć komputerowa | network („netłerk”) | połączone urządzenia, które wymieniają dane |
| Internet | Internet („internet”) | ogólnoświatowa sieć sieci |
| Wi-Fi | Wi-Fi („łaj-faj”) | połączenie z siecią bez kabla, blisko routera |

:::progresja
0: Łączysz telefon z domowym Wi-Fi, wpisując hasło.
1: W biurze kilka komputerów drukuje na jednej drukarce przez sieć.
2: Firma ma osobne Wi-Fi dla gości i osobną sieć dla pracowników.
3: Organizacja sprawdza, które usługi staną, gdy padnie łącze z Internetem.
4: Kierownictwo decyduje o drugim łączu od innego dostawcy, bo przerwa byłaby zbyt groźna.
5: W COBIT 5 sieć to infrastruktura sieciowa w aktywatorze Usługi, infrastruktura i aplikacje (FW-PL s. 86).
:::


**Co dalej i dlaczego:** następna lekcja to 0A.4 „Skąd Twój telefon „wie”, jaka jest pogoda? Serwer, klient i usługa IT”.

:::wykladowca
Podsumujmy trzema parami słów. Sieć komputerowa – network. Internet – Internet. Wi-Fi – Wi-Fi. Sieć to połączone urządzenia. Internet to sieć sieci na całym świecie. Wi-Fi to sposób przyłączenia się bez kabla. Najważniejsza myśl z tej lekcji: każdy odcinek drogi może zawieść osobno. Pełne Wi-Fi nie oznacza działającego Internetu. A brak Internetu nie zawsze zatrzymuje pracę w budynku. Sprawdźcie się teraz w ćwiczeniach.
:::

:::wlasne-slowa
Wyjaśnij sąsiadowi w 3 zdaniach, dlaczego ma pełne Wi-Fi, a strony się nie otwierają. Użyj słów „Wi-Fi”, „sieć” i „Internet”.
???
„Wi-Fi łączy Twój telefon tylko z routerem w domu – to sieć lokalna (network). Strony przychodzą z Internetu, a do niego router łączy się przez łącze od dostawcy. Jeśli to łącze padło, Wi-Fi działa, a Internetu nie ma.”
:::

:::atom
twierdzenie: Sieć lokalna, Internet i Wi-Fi to trzy różne odcinki drogi danych; każdy może zawieść osobno.
poLudzku: Pełne Wi-Fi nie znaczy, że działa Internet.
zycie: W domu Wi-Fi działa, a strony się nie otwierają, bo padło łącze od dostawcy.
komenda: Sieć komendy działa, ale bez łącza internetowego „Syrena” nie wyśle SMS-ów do OSP.
sprawdz: F :: Brak Internetu zawsze oznacza, że nie działa sieć w budynku. :: Sieć lokalna może działać bez Internetu.
:::
