// ### Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato
// ```
// "Ora" : "Minuti"
// ```
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi `[1,5,10].forEach`


(function (){

  const timeMs = 1000;

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
    console.log(hours, minutes, seconds);
  }

  const arrayIntervals = [1, 5, 10];

  arrayIntervals.forEach( (item) => {
    setTimeout(clockTime, timeMs * item)
    console.log(timeMs * item)
  });

  // const arrayClockLopped = () => {
  //   const hours = new Date().getHours();
  //   const minutes = new Date().getMinutes();
  //   const seconds = new Date().getSeconds();
  //   arrayIntervals.forEach( (item, index, array) => {
  //     setTimeout(() => {
  //       console.log(`${hours} : ${minutes} : ${seconds}`)
  //     }, timeMs * item)
  //   });
  // }

  // arrayClockLopped(clockHours, clockMins, clockSecs);

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


  // const arrayNumbers = [42, 23, 1, 7, 12, 99];

  // const arrayFn = arrayNumbers.forEach( (item, index, array) => {
  //   const timerId = setInterval( () => {
  //     array.pop(item);
  //     console.log(array);
  //     clearInterval(timerId);
  //   }, 1000);
  // });

  

})();
