#!/bin/zsh
# Uruchamia kurs lokalnie (dwuklik w Finderze albo ikona „COBIT – Start” na Pulpicie).
cd "${0:A:h}/app"   # :A rozwiązuje skrót z Pulpitu do prawdziwej lokalizacji
PORT=8123
clear
cat <<'TXT'

  ==============================================================

     KURS COBIT 5 FOUNDATION JEST URUCHOMIONY

     Kurs otworzy się za chwilę w przeglądarce.

     >>> NIE ZAMYKAJ TEGO OKNA PODCZAS NAUKI. <<<

     Gdy skończysz naukę na dziś, możesz zamknąć to okno.
     Wszystkie Twoje postępy są zapisane.

  ==============================================================

TXT
# Jeśli kurs już działa (np. drugi dwuklik), wystarczy otworzyć przeglądarkę.
if curl -s -o /dev/null "http://localhost:$PORT/"; then
  open "http://localhost:$PORT/podrecznik/"
  echo "     Kurs był już uruchomiony – otworzyłem go w przeglądarce."
  echo "     To okno możesz zamknąć."
  exit 0
fi
( sleep 1; open "http://localhost:$PORT/podrecznik/" ) &
exec python3 tools/serve.py --port "$PORT" >/dev/null 2>&1
