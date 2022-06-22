


const array = [1, 2, 3, 4, 5, 6, 7, 8];


// forEach
// Eseguire console.log() di ogni elemento di array
const arrayLoop = array.forEach( (item, index, array) => {
  console.log(array[index]);
})





// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

const time = 1000;



const arrayLooped = array.forEach( (item, index, array) => {
  setTimeout( () => console.log(array[index]), time * index)
})




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


// sol.2
const array2 = [10, 1, 2, 5, 6];
const evenNumbers = array.filter((num) => num % 2 === 0);
const commonNumbers = array.filter((num) => array2.indexOf(num) > -1);
console.log('indexOf', commonNumbers);

// console.log(array2.indexOf() > -1)