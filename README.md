Rysownik
Wykonaj aplikację webową umożliwiającą rysowanie kształtów i zapamiętywanie ich jako kompozycji.
Zapisane kompozycje będzie można przywołać, edytować, a także eksportować do pliku.
Możemy założyć, że aplikacja wykorzystuje Canvas i dostępne na nim kształty.


Wymagania:

użytkownik ma konto na systemie;
korzystamy z komunikacji asynchronicznej AJAX;
aplikacja jest responsywna (testuj na urządzeniach mobilnych);
dane aplikacji powinny być przechowywane w bazie MySQL.



SETUP:

1. Uruchom XAMPP, Apache oraz MySQL
2. Przenieś pliki z folderu serverCode do folderu htdocs gdzie zainstalowany jest xampp
3. Z poziomu przeglądarki uruchom plik initializeDatabase (http://localhost/initializeDatabase.php)
4. Sprawdź poprawnosć działania tego kodu wchodząc na panel admina i sprawdź czy istnieje nowa baza danych "rysownik"