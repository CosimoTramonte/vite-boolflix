# BoolFlix

Replicare il sito di NetFlix e le sue maggiori features.

## Steps
- Progettare la struttura del global state. Partendo da un impostazione base che successivamente verrà cambiata con una struttura più moderna ed elaborata.
- Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film.
- Al click possiamo cercare sull’API tutti i film che contengono ciò che ha scritto l’utente (Titolo, Titolo Originale, Lingua e Voto).
- Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API
- Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv
- Aggiungiamo la copertina del film o della serie al nostro elenco
- Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote
- Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix.


