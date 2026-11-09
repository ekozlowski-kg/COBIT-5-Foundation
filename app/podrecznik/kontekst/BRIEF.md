# Rozbudowa kontekstu slajdów – instrukcja dla agentów

Podręcznik COBIT 5 Foundation (PL) pokazuje każdy slajd na cały ekran. Przycisk „ⓘ Kontekst” otwiera nakładkę
z **kontekstem slajdu**. Dla lekcji przeniesionych z dawnego kursu kontekst to dziś zwykle jeden krótki akapit
(`:::wykladowca`) albo nic. Użytkownik chce **2–4 akapitów do zapoznania przy każdym slajdzie**.

## Co robisz
1. Dostajesz zakres lekcji i nazwę **swojego** pliku wyjściowego `kontekst/<nazwa>.json`. Piszesz tylko do niego.
2. Lekcje i numery slajdów pokazuje:
   `cd app/podrecznik/kontekst && python3 narzedzia.py lista <MODUŁ> <od> <do>`
   `python3 narzedzia.py pokaz <id-lekcji> [<id> …]`
   Numer slajdu = numer z `pokaz` (liczy wszystkie slajdy lekcji od 1, także „start” i „wniosek”).
3. Dla **każdego slajdu każdej lekcji** z zakresu piszesz kontekst. Format pliku:
   ```json
   { "pr-k29-role-ladu": { "1": "<p>…</p><p>…</p>", "2": "<p>…</p><p>…</p><p>…</p>" } }
   ```
4. Zapisuj plik **po każdej lekcji** (dopisuj do istniejącego JSON), żeby postęp nie przepadł.
5. Na końcu: `python3 narzedzia.py sprawdz <twój-plik>.json` → zero BŁĄD. Popraw i sprawdź ponownie.
6. Nie edytujesz żadnego innego pliku, nie uruchamiasz `z_kursu.py`, nie commitujesz.

## Jaki ma być kontekst
- **2–4 akapity `<p>…</p>`, razem ok. 80–200 słów**, po polsku, prosto i konkretnie.
- **Nie powtarza slajdu** – pogłębia go. Wątki do wyboru (2–4 na slajd):
  - skąd to się bierze i po co jest w COBIT 5;
  - jak łączy się z poprzednim / następnym slajdem albo lekcją (np. „dalej zobaczysz…”);
  - **jeden konkretny przykład**: firma (bank, sklep internetowy, szpital, ubezpieczyciel) **albo** urząd
    (gmina, starostwo, ministerstwo) – inny niż przykład na samym slajdzie; przy kolejnych slajdach naprzemiennie;
  - typowe nieporozumienie albo **pułapka egzaminacyjna** (nazwa z egzaminu vs z podręcznika vs EN).
- **Zachowaj sens istniejącego `:::wykladowca`, `:::sb` i `:::uproszczenie`** – wpleć je (przeredaguj), nie gub ich treści.
- Slajd „start” (pytanie z życia): kontekst wyjaśnia, do czego to zjawisko prowadzi w COBIT 5, bez zdradzania odpowiedzi na kolejnych slajdach wprost.
- Slajd „wniosek”: kontekst zbiera lekcję w całość i mówi, jak to wykorzystać na egzaminie i w pracy.

## Dozwolony HTML
`<p>`, `<b>`, `<em>`, `<span class="en">English original</span>` (oryginał angielski, pokaże się w nawiasie),
`<w k="id-hasła">słowo</w>` – klikalne pojęcie; **tylko id istniejące** w `app/content/terms/<id>.json`
(najprościej: id użyte w lekcji jako `[[id|…]]`). Bez Markdownu (`**`, `[[`, `:::` są błędem).

## Fakty i terminologia
- Fakty COBIT 5 sprawdzaj w `sources/text/framework-pl/page-NNN.txt`
  (strona drukowana = numer pliku; lekcja wskazuje strony w `:::zrodlo FW-PL <strona> [ilustracja]`).
  Fakty spoza podręcznika oznacz w tekście „(wiedza ogólna)”.
- Nazwy z **egzaminu PL**: Ład, Zarządzanie, aktywator, struktura ramowa, cele organizacji, cele związane z Informatyką,
  Cele aktywatora, Kaskada Celów, Organ Ładu i nadzoru, domeny „Oszacuj, Kieruj i Monitoruj”, „Dostosuj, Planuj i Organizuj”,
  „Twórz, Nabywaj i Wdrażaj”, „Dostarczaj, Obsługuj i Wspieraj”, „Monitoruj, Oszacuj i Oceń”; kategorie celów aktywatora:
  jakość wewnętrzna, jakość kontekstowa, dostęp i bezpieczeństwo. Nazwy podręcznikowe tylko jako pułapka z wyjaśnieniem.
- Każdy skrót rozwinięty i przetłumaczony przy pierwszym użyciu na slajdzie (CIO – dyrektor ds. informatyki…).
- **ZAKAZ** przykładów strażackich (PSP, OSP, straż, komenda, Syrena, pożar, dyżurny…) – walidator to odrzuca.
- **Nie cytuj i nie parafrazuj pytań z Sample Paper 1** (`private/…`) – są osobno w kursie.
