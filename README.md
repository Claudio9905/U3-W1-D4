Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!).
CommentArea dovrà fare la fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.
CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea. La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.
AddComment conterrà un form per aggiungere il testo della recensione e il voto (da 1 o a 5). Questo componente dovrà permettere all'utente di fare la POST del nuovo commento sul libro selezionato.

[EXTRA]
Aggiungi vicino ogni commento un bottone per cancellarlo (DELETE). Dovrà creare una richiesta verso https://striveschool-api.herokuapp.com/api/comments/:commentId
Crea un componente Loading. Questo apparirà nella pagina quando la richiesta è in fase di elaborazione, ma non ancora risolta.
Crea un componente Error. Se qualcosa andrà male con una network request, dovrà apparire un messaggio di errore.
