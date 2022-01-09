# Nazwa i prezentacja projektu:
    GitHub User Repo

    Jest to aplikacja typu React-Github, która umożliwia wyszukiwanie dowolnego użytkownika serwisu GitHub i przeglądanie jego repozytoriów.


# Instrukcje instalacji i konfiguracji

    Pierwsze kroki
    Najpierw należy sklonować repozytorium

    $ git clone https://github.com/AdriannaSuchomska/GitHub-User-Repo-React.git

    Instalacja:
    npm install

    Aby uruchomić serwer:
    npm start

    Aby odwiedzić aplikację:
    localhost:3000/ideas


# Opis aplikacji:

    Każdą nową aplikację traktuję jako możliwość rozwoju, dlatego zdecydowałam się  na użycie create-react-app, aby zminimalizować początkową konfigurację i poświęcić więcej czasu na jak najlepsze dopracowanie aplikacji, zarówno od strony wizualnej jak i funkcjonalnej.

    Aplikacja pozwala użytkownikowi wpisać dowolną nazwę użytkownika serwisu GitHub, zatwierdzenie wpisanej nazwy użytkownika może odbyć się zarówno poprzez kliknięcie buttona jak i klawisza ‘Enter’ na klawiaturze.

    Wysyłania żądań  HTTP i obsługi ich odpowiedzi odbywa się za pomocą biblioteki Axios, będącej alternatywą dla dla natywnej funkcji JavaScript .fetch().

    W rezultacie aplikacja wyświetla login wyszukanego użytkownika, jego avatar oraz posortowaną listę repozytoriów pobrane z GitHub API.

    W celu wyświetlenia oraz posortowania po popularności repozytoriów zastosowałam metodę .map() oraz .sort(). Poszczególne repozytoria wyświetlone zostają jako hiperłącza, po kliknięciu w dane hiperłącze zostanie otwarta w przeglądarce nowa karta serwisu GitHub na której znajduje się dane repozytorium. Wyświetlone linki zostaną przedstawione w aplikacji ze zmienionym  kolorem.  
    Aby aplikacja wyświetliła login oraz avatar użytkownika użyłam metody map () oraz slice(). 

    W celu ułatwienia sobie tworzenia wizualnej strony aplikacji, zdecydowałam się na wykorzystanie preprocesora CSS-a - SASS. 
    Aplikacja jest w pełni responsywna dzięki wykorzystaniu Media Queries.


