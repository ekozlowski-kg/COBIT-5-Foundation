# Specyfikacja panelu

## Widoki
Dashboard pokazujący tylko rzeczywiste próby; lekcje i wyszukiwarka; katalog pytań z filtrami; testy 10/20/50 pytań; trening z wyjaśnieniem po pytaniu; symulacja bez podpowiedzi; moje błędy; mapa 37 procesów; fiszki; eksport/import.

## Ocena
Jedna poprawna odpowiedź, 1 punkt za prawidłową, 0 za błędną lub brak odpowiedzi. Procent = liczba prawidłowych / liczba pytań × 100. Statystyki podawaj z liczbą obserwacji; wynik 1/1 nie oznacza pewnego opanowania procesu. Oceniaj według identyfikatora opcji, nie indeksu po przetasowaniu.

## Interakcja
Odpowiedzi jako przyciski lub pola radio A–D. Postęp, zaznaczone i pominięte pytania, nawigacja wstecz/dalej, oznaczenie „wróć później”. Potwierdzenie zakończenia przy brakujących odpowiedziach. Wynik i wyjaśnienia wszystkich czterech opcji po zakończeniu. Wskaż tekst wybranej i poprawnej opcji, nie tylko literę.

## Tryby
1. Archiwalny: oryginalna kolejność testów 1–9.
2. Losowy: pytania i kolejność opcji losowane z zachowaniem mapowania identyfikatorów.
3. Adaptacyjny: większy udział potwierdzonych słabości; nie wyciągaj wniosków z niezweryfikowanej historii.
4. Symulacja: konfigurowalny rozmiar, czas i próg. Historyczny profil 50 pytań / 40 minut / 50% można dodać jako profil treningowy wymagający odrębnego potwierdzenia aktualnych zasad, a nie jako gwarancję parametrów bieżącego egzaminu.

## Duplikaty i pokrycie
Nie powtarzaj tego samego question.id w jednym teście. Ogranicz liczbę pytań z tego samego concept_group; bank obejmuje powtórki dydaktyczne. Przy zbyt małej liczbie pytań spełniających warunki zgłoś ograniczenie zamiast po cichu powielać pytania. Udział domen w losowym teście to ustawienie treningowe, nie oficjalne wagi egzaminu.

## Stan i prywatność
Zapisuj lokalnie, jeśli środowisko na to pozwala, oraz zawsze zapewnij eksport i import JSON. Nie twierdź, że zapis lokalny jest synchronizacją między urządzeniami. Nie zapisuj żadnych niepowiązanych danych osobowych z wcześniejszej rozmowy. Błędny import nie może usuwać istniejącego stanu; przed zastąpieniem stanu wykonaj kopię.

## Próba
attempt_id, bank_version, test_id lub lista question_ids, started_at, finished_at, mode, question_order, option_order_by_question, answers_by_question_id, wynik i status. Zapis czasu musi pochodzić z faktycznej próby; nie dopisuj dat do historii, dla której ich nie znamy.

## Kontrola jakości
Sprawdź wynik dla wszystkich odpowiedzi poprawnych i wszystkich błędnych; brak odpowiedzi; przetasowanie opcji; ponowne otwarcie zapisanej próby; import/eksport; niepoprawny JSON; puste filtry; zawieszenie lub odświeżenie w trakcie testu. Upewnij się, że klucz nie jest wyświetlany przed zakończeniem trybu testowego.

Paczka nie zawiera gotowego panelu. Zawiera dane, materiały, specyfikację i pomocniczy generator testów w Pythonie.
