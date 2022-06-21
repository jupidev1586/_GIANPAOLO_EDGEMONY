// Esercizi funzione Map
// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']
// Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:

// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];
// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:

// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];

// 1. 
const booksArray = ['bookOne', 'bookTwo','bookThree','bookFour','bookFive', 'bookSix', 'bookSeven'];

const firstTask = booksArray.map((element, index, array) => {
  // console.log(index + ': '  + element);
  return index + ': '  + element;
});

console.log(firstTask);
// 2.
const secondTask = booksArray.map((element, index, array) => {
  // console.log(array.length -1 - index);
  return array.length -1 - index;
});


console.log(secondTask);

// 3.
const thirdTask = booksArray.map((element, index, array) => {
  // console.log(array.length -1 - index + ': '  + element);
  return array.length -1 - index + ': '  + element;
});

console.log(thirdTask);



