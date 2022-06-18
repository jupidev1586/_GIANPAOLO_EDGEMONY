// console.log('Ciao');

// alert('Ciao');

// let usrMsg = prompt('Inserisci qualcosa');


// Calculator - PSEUDO
// 1. Chiede 2 numeri da input all'utente
//  -- IF se l'utente non inserisce 1 o entrambi i numeri, ritorna una stringa che ci informa su questo
//     e interrompe il ciclo del programma

// 2. Chiede all'utente l'operazione da eseguire
// -- IF se l'utente non inserisce alcuna operazione, ritorna una stringa che ci informa su questo

// 3. Venga mostrato il risultato dell'operazione


// prompt restituisce una string, bisogna convertire in numero

// Calculator - CODE
const firstNumber = prompt('Inserisci il primo numero');
const secondNumber = prompt('Inserisci il secondo numero');

const operationChoice = prompt('Inserisci pure l\'operazione desiderata')

const parsedFirstNum = parseInt(firstNumber);
const parsedSecondNum = parseInt(secondNumber);


if (firstNumber.length == 0 || secondNumber.length == 0) {
  // 1. Chiede 2 numeri da input all'utente
  //  -- IF se l'utente non inserisce 1 o entrambi i numeri, ritorna una stringa che ci informa su questo
  //     e interrompe il ciclo del programma
  console.log('Non hai inserito un numero');
} 

// if (operationChoice === 'addizione' && secondNumber.length == 0) {
//   // 
//   console.log('il risultato della tua operazione è:', parsedFirstNum + parsedSecondNum)
// }

switch(operationChoice) {
  case '+' || 'addizione':
    console.log('il risultato della tua operazione è:', parsedFirstNum + parsedSecondNum);
    break;
  case '-' || 'sottrazione':
    console.log('il risultato della tua operazione è:', parsedFirstNum - parsedSecondNum);
    break;
  case '*' || 'moltiplicazione':
    console.log('il risultato della tua operazione è:', parsedFirstNum * parsedSecondNum);
    break;
  case '/' || 'divisione':
    console.log('il risultato della tua operazione è:', parsedFirstNum / parsedSecondNum);
    break;
  default:
    console.log('Non hai selezionato alcuna operazione');
}
