


const array = [1, 2, 3, 4, 5, 6, 7, 8];


// forEach
// Eseguire console.log() di ogni elemento di array
const arrayLoop = array.forEach( (i, index, array) => {
  console.log(array[index]);
})





// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

const time = 1000;



const arrayLooped = array.forEach( (item, index, array) => {
  setTimeout( () => console.log(array[index]), time * index)
})




// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]




const evenFliteredArray = array.filter( (number) => {
  return number % 2 === 0;
});

console.log(evenFliteredArray);