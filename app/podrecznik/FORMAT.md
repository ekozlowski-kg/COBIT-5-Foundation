# Podręcznik krok po kroku – format części (`window.DECK`)

Każda część to plik `NN-*.html` z `window.DECK = { id, rozdzial, tytul, prev, next, T, S }` i silnikiem `deck.js`.
Prośby użytkownika, które ten format realizuje:
- panel pojęcia w **kartach**: „Wyjaśnienie” (nazwy + pełne wyjaśnienie), „Przykłady” (osobno, życiowe i rozwinięte), „Na egzamin”;
- „nie »po ludzku« – wyjaśnienie”: pojęcie ma być wytłumaczone tak, żeby przestało być abstrakcyjne;
- **po każdym ważniejszym slajdzie kilka slajdów z pytaniami kontrolnymi**, bardziej złożonymi niż definicje.

## T – pojęcia (klucz → obiekt)
```js
celeakt:{
  t:'Cele aktywatora',                      // nagłówek panelu
  eg:'Cele aktywatora',                     // nazwa z egzaminu PL (pewna albo „niepotwierdzona – …”)
  pd:'Cele czynników umożliwiających',       // nazwa z podręcznika PL (FW-PL)
  en:'Enabler Goals',                        // oryginał angielski
  wyj:'Ostatni poziom kaskady celów. Kiedy wiadomo już, czego organizacja potrzebuje od IT (cele związane z Informatyką), trzeba zdecydować, czym to osiągnąć – i tu wchodzą aktywatory: procesy, ludzie, informacja, zasady, struktury, kultura, usługi i infrastruktura.\n\nDla każdego aktywatora ustala się własny, konkretny cel, który da się zmierzyć – np. „proces obsługi incydentów zamyka 95% zgłoszeń w 4 godziny” albo „każdy pracownik przeszedł szkolenie z bezpieczeństwa”. Dzięki temu na samym dole kaskady każdy zespół wie, co dokładnie ma osiągnąć i po czym pozna, że się udało.\n\nCele aktywatora dzielą się na trzy kategorie: jakość wewnętrzną (w podręczniku: jakość rzeczywista), jakość kontekstową oraz dostęp i bezpieczeństwo (rozdział 5, s. 29).',
  zycie:'Chcesz być zdrowszy (cel ogólny). Żeby się udało, ustalasz cele dla „narzędzi”: buty – kupione do piątku; plan treningów – 3 razy w tygodniu; lodówka – bez słodyczy; partner – biega z Tobą w soboty. Każde narzędzie ma swój mierzalny cel.',
  firma:'Bank chce bezpieczeństwa danych (cel IT 10). Cele aktywatora: proces obsługi incydentów – 95% w 4 godziny; polityka haseł – zatwierdzona i znana wszystkim; zespół bezpieczeństwa – 2 osoby z certyfikatem; rejestr incydentów – kompletny i aktualny; kultura – pracownicy zgłaszają podejrzane maile bez obawy przed karą.',
  urzad:'Gmina chce chronić dane mieszkańców. Cele aktywatora: procedura reagowania na wyciek – zgłoszenie w terminie z przepisów; zarządzenie wójta o bezpieczeństwie informacji – przyjęte; informatyk – po szkoleniu z ochrony danych; kopie zapasowe systemu podatkowego – codziennie, sprawdzane raz w miesiącu.',
  egz:'„Czynnik umożliwiający” w podręczniku = „aktywator” na egzaminie. Cele aktywatora to czwarty, ostatni poziom kaskady (po celach organizacji i celach związanych z Informatyką). Dla procesów powiązania z celami IT podaje Załącznik C.',
  src:'FW-PL s. 18–19, 28–29'
}
```
Zasady:
- `wyj` – **3–6 zdań w 2–3 akapitach** (`\n\n` = nowy akapit): co to jest, po co, jak się łączy z resztą COBIT 5. Bez żargonu bez objaśnienia; każdy skrót rozwinięty i przetłumaczony.
- `zycie`, `firma`, `urzad` – **po 2–4 zdania**, konkretne liczby, osoby, sytuacje. Firma: bank, sklep internetowy, szpital, ubezpieczyciel. Urząd: gmina, ministerstwo, starostwo. **Nigdy** przykładów strażackich (PSP, OSP, komenda, Syrena, pożar…).
- `egz` – pułapki nazw (egzamin vs podręcznik vs EN), typowe złe odpowiedzi, do czego to pojęcie należy.
- `src` – strony FW-PL; wiedza spoza podręcznika oznaczona „wiedza ogólna”.

## S – slajdy
Układ (od 2026-11-08): slajd na cały ekran, minimalistyczny – bez karty i zaokrąglonego tła. Szczegóły otwierają się w **nakładce na przyciemnionym ekranie**: po kliknięciu pojęcia, przycisku „ⓘ Kontekst” (slajd treści) albo „? Pomoc” (pytanie).

Treść: `{pt, h, b, c, s, ctx}` (b to HTML, `<w k="klucz">słowo</w>` = klikalne pojęcie; każdy klucz musi istnieć w T).
- `ctx` – **kontekst slajdu do zapoznania** (obowiązkowy): HTML, **2–4 akapity `<p>…</p>`**, razem ok. 80–200 słów. Nie powtarza slajdu, tylko go pogłębia: skąd to się bierze i po co, jak łączy się z poprzednim/następnym krokiem, jeden konkretny przykład (firma albo urząd), typowe nieporozumienie. Może zawierać `<w k>` i `<span class="en">`. Fakty jak wszędzie – z FW-PL, reszta oznaczona „wiedza ogólna” w tekście.
  Nakładka sama dokleja listę pojęć ze slajdu (z pierwszym zdaniem `wyj`) i źródło – nie trzeba ich powtarzać w `ctx`.

Przykład:
```js
{pt:'Zasada 1 · s. 17 · Rysunek 3',h:'Wartość = trzy rzeczy w równowadze',b:'…',c:'…',s:'…',
 ctx:'<p>Zarząd rzadko pyta „czy to się opłaci?” w oderwaniu od reszty. …</p><p>Przykład: gmina wdraża e-płatności podatku. …</p><p>Częsty błąd: „optymalizacja ryzyka” to nie „zero ryzyka”. …</p>'}
```

Pytanie:
```js
{pt:'Sprawdź się', quiz:{
  kontekst:'Gmina wdraża e-usługę płatności podatku. Wójt pyta, czy warto, skarbnik chce, żeby było tanio, inspektor ochrony danych – żeby było bezpiecznie.', // opcjonalnie: krótki scenariusz
  tresc:'Który element celu Ładu odpowiada na obawy <b>inspektora ochrony danych</b>?',
  opcje:[
    {t:'Realizacja korzyści', w:'Korzyści to krótsze kolejki i wygoda mieszkańców – o to pyta wójt, nie inspektor.'},
    {t:'Optymalizacja ryzyka', ok:true, w:'Bezpieczeństwo danych mieszkańców to ryzyko, które trzeba utrzymać na akceptowalnym poziomie.'},
    {t:'Optymalizacja zasobów', w:'Zasoby (koszt, ludzie) to troska skarbnika.'},
    {t:'Zgodność z politykami wewnętrznymi', w:'To jeden z 17 celów organizacji (cel 15), a nie element celu Ładu.'}
  ],
  src:'COBIT 5 Framework (PL), s. 17. Pytanie autorskie w stylu egzaminu.',
  pomoc:{t:'Cel Ładu ma trzy elementy. Zastanów się, którego z nich dotyczy bezpieczeństwo danych mieszkańców.', k:['war','ryzyko']}
}}
```
- `pomoc` – **pomoc kontekstowa do pytania** (obowiązkowa): `t` – 1–3 zdania, które przypominają, czego dotyczy pytanie i gdzie szukać, **ale nie zdradzają odpowiedzi** (nie wskazują litery, nie wykluczają opcji); `k` – 1–4 klucze pojęć z T do przypomnienia. Nakładka dodaje odnośnik do slajdu treści, którego dotyczy pytanie.
Zasady pytań:
- **Po każdym ważniejszym slajdzie treści 2–4 pytania** (część 9–11 slajdów treści → ok. 10–16 pytań).
- Zawsze **4 opcje**, dokładnie jedna `ok:true`, **każda** opcja ma `w` (dlaczego tak / dlaczego nie).
- Mieszanka typów, jak na egzaminie COBIT 5 Foundation: zwykłe „Który/Co…”, **studium przypadku** (`kontekst`), **z NIE** („Która opcja NIE jest…” – NIE wersalikami), **brakujące słowo** („[?]”), **kolejność / kombinacje** („1 i 3”), **dystraktor terminologiczny** (nazwa z podręcznika zamiast egzaminacyjnej, COBIT 2019, „minimalizacja” zamiast „optymalizacja”).
- Bardziej złożone niż definicje: zastosowanie w sytuacji z firmy lub urzędu, odróżnianie podobnych pojęć, wskazanie kategorii.
- Poprawna odpowiedź **nie** zawsze najdłuższa; pozycja poprawnej odpowiedzi rozłożona równo między A–D.
- **Nie kopiować** pytań z Sample Paper 1 (prawa autorskie ISACA; SP1 zostaje niezależnym sprawdzianem) – można naśladować styl i typy pytań. Można korzystać z wiedzy z publicznych materiałów o COBIT 5 Foundation (sylabus PeopleCert, artykuły ISACA) – fakty sprawdzać w FW-PL.
- Terminologia: nazwy z egzaminu PL (Ład, aktywator, struktura ramowa, cele organizacji, cele związane z Informatyką, Oszacuj/Kieruj/Monitoruj…); nazwy podręcznikowe tylko jako dystraktory albo z wyjaśnieniem.
- `pt` pytań: 'Sprawdź się' (silnik sam dopisze „pytanie n z m”).
