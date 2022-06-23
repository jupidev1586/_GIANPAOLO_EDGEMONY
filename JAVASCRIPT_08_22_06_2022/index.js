


const array = [1, 2, 3, 4, 5, 6, 7, 8];


// forEach
// Eseguire console.log() di ogni elemento di array
// const arrayLoop = array.forEach( (item, index, array) => {
//   console.log(array[index]);
// })


const logItemFn = (item) => console.log(item); 
array.forEach(logItemFn);

// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

const ONE_SEC = 1000;

const logItemInTheFuture = (item, index) => {
  const timeIntoFuture = ONE_SEC * index;
  setTimeout( () => {
    console.log(`Sono ${item}`)
  }, timeIntoFuture)
}
// array.forEach(logItemInTheFuture);

// const time = 1000;

// const arrayLooped = array.forEach( (_item, index, array) => {
//   setTimeout( () => console.log(array[index]), time * index)
// })


const timeMax = array.reduce((time, item) => {
  setTimeout( () => {
    console.log(`Sono ${item}`)
  }, time)
  return time + 1000
}, 0);

console.log({ timeMax });



// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]


const evenCondition = (number) => {
  return number % 2 === 0;
}

const evenFilteredArray = array.filter( evenCondition );

console.log(evenFilteredArray);


// Tenere solo i numeri in comune con questo array: `[10, 1, 2, 5, 6]`, usare utility come `Array.includes` oppure `Array.indexOf`.
// ```
// risultato: [1,2,5,6]
// console.clear();

// sol. 1
const arrayCompared = [10, 1, 2, 5, 6];

// const conditionFn = () => {
//   return array.includes(1) && arrayCompared.includes(1);
// }
const combinedArray = (element) => arrayCompared.includes(element);

console.log('filteredArrayCOmbined', array.filter(combinedArray));


const comparingArray = [10, 1, 2, 5, 6];
const getNumbersInCommon = (item) => {
  const isInArrayCompared = comparingArray.includes(item);
  return isInArrayCompared
};
const commonNumberz = array.filter(getNumbersInCommon);
console.log('commonNumberz', commonNumberz);

// sol.2
const array2 = [10, 1, 2, 5, 6];
const evenNumbers = array.filter((num) => num % 2 === 0);
// const commonNumbers = array.filter((num) => array2.indexOf(num) > -1);
const commonNumbers = array.filter((num) => array2.indexOf(num) > 0);
// const commonNumbers = array.filter((num) => array2.indexOf(num) !== -0;
console.log('indexOf', commonNumbers);

// console.log(array2.indexOf() > -1)

// metodi migliori per ricercare array di oggetti??
// find() 
// findIndex()