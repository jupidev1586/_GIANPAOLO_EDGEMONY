

// 1. 
const booksArray = ['bookOne', 'bookTwo','bookThree','bookFour','bookFive', 'bookSix', 'bookSeven'];

const firstTask = booksArray.map((element, index, array) => {
  console.log(index + ': '  + element);
  return;
});


// 2.
const secondTask = booksArray.map((element, index, array) => {
  console.log(array.length - index);
  return;
});




// 3.
const thirdTask = booksArray.map((element, index, array) => {
  console.log(array.length - index + ': '  + element);
  return;
});





// ho usato il reverse() come metodo per risolvere l'esercizio. 
// Tuttavia, perchè i console.log all'interno delle const viene eseguito?