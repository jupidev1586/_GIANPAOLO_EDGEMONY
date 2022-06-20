// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4

// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// sum(1) -> Errore in console che spiega cosa non va

// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0

// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

// 1 -> Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// sum(1,3); -> 4
// function sum(a, b) {
//   console.log( a + b );
//   return a + b;
// }


// // 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// // sum(1) -> Errore in console che spiega cosa non va
// function sum(a, b) {
//   if (typeof a === 'number' || typeof b === 'number') {
//     console.log( a + b );
//     return a + b;
//   } else {
//     console.error( 'Non hai inserito degli argomenti validi. Non sono numeri.' );
//   }
// }

// // 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// // div(2,0) -> il programma di deve dire che non posso dividere per 0
// function sub(a, b) {
//   if (typeof a === 'number' || typeof b === 'number') {
//     console.log( a - b );
//     return a - b;
//   } else {
//     console.error( 'Non hai inserito degli argomenti validi. Non sono numeri.' );
//   }
// }

// function mul(a, b) {
//   if (typeof a === 'number' || typeof b === 'number') {
//     console.log( a * b );
//     return a * b;
//   } else {
//     console.error( 'Non hai inserito degli argomenti validi. Non sono numeri.' );
//   }
// }

// function div(a, b) {
//   if ((typeof a === 'number' && a != 0) || (typeof b === 'number' && b != 0)) {
//     if ( a != 0 && b != 0 ) {
//       console.log( a / b );
//       return a / b;
//     } else {
//       console.error( 'I numeri inseriti non sono divisibili tra loro, perchè uno dei 2 è uguale a 0' );
//     }
//   } else {
//     console.error( 'Non hai inserito degli argomenti validi. Non sono numeri.' );
//   }
// }


// document.addEventListener('keydown', function(event) {
//   switch(event.keyCode) {
//     case  97:
//       sum(1, 3);  // key 1
//       break;
//     case  98:
//       sub(3, 5);  // key 2
//       break;
//     case  99:
//       mul(3, 7);  // key 3
//       break;
//     case  100:
//       div(4, 2);  // key 4
//       break;
//     case  101:
//       div(2, 0);  // key 5
//       break;
//     case  102:
//       display(6);
//       break;
//     case  103:
//       display(7);
//       break;
//     case  104:
//       display(8);
//       break;
//     case  105:
//       display(9);
//       break;
//     default:
//       console.log('Non hai selezionato alcuna operazione');
//   }
// });


// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(

function calculate(operation, a, b) {

  if (typeof a === 'number' && typeof b === 'number') {
    if (operation === 'sum') {
      console.log( a + b );
      return a + b;
    } else if (operation === 'sub') {
      console.log( a - b );
      return a - b;
    } else if (operation === 'mul') {
      console.log( a * b );
      return a * b;
    } else if (operation === 'div') {
      if ( a != 0 && b != 0 ) {
        console.log( a / b );
        return a / b;
      } else {
        console.error( 'I numeri inseriti non sono divisibili tra loro, perchè uno dei 2 è uguale a 0' );
      }
    }
  } else {
    console.error( 'Non hai inserito degli argomenti validi. Non sono numeri.' );
  }
  
}


document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case  97:
      calculate('sum', 1, 3);  // key 1
      break;
    case  98:
      calculate('sub', 3, 5);  // key 2
      break;
    case  99:
      calculate('mul', 3, 7);  // key 3
      break;
    case  100:
      calculate('div', 4, 2);  // key 4
      break;
    case  101:
      calculate('div', 2, 0);  // key 5
      break;
    case  102:
      calculate('sum', '2', 0);  // key 6
      break;
    case  103:
      display(7);
      break;
    case  104:
      display(8);
      break;
    case  105:
      display(9);
      break;
    default:
      console.log('Non hai selezionato alcuna operazione');
  }
});