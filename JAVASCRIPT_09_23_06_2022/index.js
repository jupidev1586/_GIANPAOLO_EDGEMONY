// ### Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato
// ```
// "Ora" : "Minuti"
// ```
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi `[1,5,10].forEach`


(function (){

  const timeMs = 1000;
  // const hours = new Date().getHours();
  // .padStart(2, "0")
  const getCurrentTime = () => `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
 
  const logCurrentTime = () => {
    console.log(getCurrentTime())
  }
  // setTimeout(logCurrentTime, 1_000);
  // setTimeout(logCurrentTime, 5_000);
  // setTimeout(logCurrentTime, 10_000);

  // [1, 5, 10].forEach( (time) => setTimeout(logCurrentTime, 1000 * time));


  // setInterval( () => {
  //   logCurrentTime();
  // }, 1_000);

  // new Int()

  setInterval( () => {
    document.body.innerHTML = `
      <h2>Orario corrente</h2>
      <h1>${getCurrentTime()}</h1>
    `;
  }, 1_000);



let index = 0;
const numbers = [42, 23, 1, 7, 12, 99].sort(() => Math.random() * -0.5 - 1); // metodo array shuffle


const timerId = setInterval( () => {
const currentNumber = numbers[index];
  if (typeof currentNumber === 'undefined') {
    clearInterval(timerId);
    return;
  }
  console.log( currentNumber );
  index++;
}, 1_000);



  const clockHours = () => {
    setTimeout(() => {
      console.log(new Date().getHours());
    }, timeMs)
  };
  const clockMins = () => {
    setTimeout(() => {
      console.log(new Date().getMinutes());
    }, timeMs * 5)
  };
  const clockSecs = () => {
    setTimeout(() => {
      console.log(new Date().getSeconds());
    }, timeMs * 10)
  };

  // clockHours();
  // clockMins();
  // clockSecs();

  const clockTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log(`${hours} : ${minutes} : ${seconds}`);
  }

  const arrayIntervals = [1, 5, 10];

  // arrayIntervals.forEach( (item) => {
  //   setTimeout(clockTime, timeMs * item)
  //   // console.log(timeMs * item)
  // });

  // const arrayClockLooped = () => {
  //   const hours = new Date().getHours();
  //   const minutes = new Date().getMinutes();
  //   const seconds = new Date().getSeconds();
  //   arrayIntervals.forEach( (item, index, array) => {
  //     setTimeout(() => {
  //       console.log(`${hours} : ${minutes} : ${seconds}`)
  //     }, timeMs * item)
  //   });
  // }

  // arrayClockLooped();

  // const createInterval = function (method, interval) {
  //   method();
  //   setTimeout(method, interval);
  // };
  // const getSecondsFn = () => {
  //   console.log(clockHours());
  // };
  // createInterval(getSecondsFn, 1000);





//   ### Interval
// 1) Fare il console.log analogo a quello mostrato su time.is
// ### DOM
// 1) Prendiamo l'esercizo 1 di Interval e stampiamo la data nel body usando `document.body.innerHTML = "...""`


  const clockTimeIs = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log(`${hours}.${minutes}.${seconds}`);
    document.body.innerHTML = `<h1>${hours}.${minutes}.${seconds}</h1>`;
  }
  // setInterval(clockTimeIs, 1000)


})();



// 2) dato un array `[42, 23, 1, 7, 12, 99]` estraiamo ogni secondo, come se fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i numeri possibili.
// //    tip: Contiamo quante volte abbiamo fatto partire l'intervallo
(function (){


  const arrayNumbers = [42, 23, 1, 7, 12, 99];

  // const arrayFn = arrayNumbers.forEach( (item, index, array) => {
  //   const timerId = setInterval( () => {
  //     array.pop(item);
  //     console.log(array);
  //     clearInterval(timerId);
  //   }, 1000);
  // });

  const lista = [5,6,1,12,24,3,8,100,9];


  // const id = setInterval(() => {
  //   if(lista.length > 0) {
  //     lista.pop()
  //   }
  //   else {
  //     stopInterval()
  //   }
  // }, 220)

  // stopInterval = () => {
  //   clearInterval(id)
  //   console.log(lista, 'lista')
  // }

})();
