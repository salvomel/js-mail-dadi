// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// ARRAY DI EMAILS
const emails = ['giacomo@email.it', 'antonio@email.it', 'cristina@email.it', 'marianna@email.it', 'salvo@email.it'];

// CHIEDO ALL'UTENTE L'EMAIL 
const userEmail = prompt ('Indicare la propria email');

// CICLO FOR PER ARRAY
let emailFound = false;

for(let i=0; i<userEmail.length; i++) {
    const thisEmail = emails[i];
    
    // Controllo se email user = email array
    if(thisEmail === userEmail) {
        emailFound = true;
    }
}

// STAMPO RISULTATO
if(emailFound) {
    alert('La tua email può accedere');
} else {
    alert('La tua email non è abilitata!')
}
