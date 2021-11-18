// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// GENERO NUMERO 
const myNumber = Math.floor(Math.random() * 6) + 1;
console.log(myNumber);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

// CONFRONTO NUMERI
let message;
if(myNumber>pcNumber) {
    message='Hai vinto!';
} else if(myNumber===pcNumber) {
    message='Hai pareggiato';
} else {
    message='Hai perso';
}

//OUTPUT
const preMessage = `Il tuo numero è ${myNumber}, quello del computer è ${pcNumber}: `;
alert(preMessage+message)