// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// GENERO NUMERO 
const myNumber = Math.floor(Math.random() * 6) + 1;
console.log(myNumber);
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

// CONFRONTO NUMERI
if(myNumber>pcNumber) {
    alert('Hai vinto!');
} else if(myNumber===pcNumber) {
    alert('Hai pareggiato');
} else {
    alert('Hai perso');
}