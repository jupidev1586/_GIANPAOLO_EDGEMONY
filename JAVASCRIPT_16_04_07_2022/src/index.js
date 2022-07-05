
(function () {
 

  const studentBase = {
    course: "Edgemony", // valore
    bootCampID: 4, // valore
    teachers: [
      // questo viene copiato per referenza
      {
        name: "Casimiro"
      }
    ]
  };

  console.log(studentBase.name);

  const names = ["Marco", "Eleonora", "Martina", "Federica"];

  const students = names.map(function (name) {
    // copia tutto quello che trovi dentro studentBase e mettigli la variabile name
    const newStudent = { ...studentBase, name };

    // const newStudent = JSON.parse(JSON.stringify(studentBase));
    // newStudent.name = name;

    // for (let prop in studentBase) {
    //   newStudent[prop] = studentBase[prop];
    // }

    // const newStudent = { ...studentBase}; // copia i valori di studentBase
    // newStudent.name = name; // aggiungi prop name

    newStudent.name = name;

    return newStudent;
  });

  console.log(students);

  

  // Spread/Rest
  const obj = { ...studentBase };
  console.log({ obj });

  const array = [1, 2, 3, 4, 5];
  const newArr = [...array, 6, 7, 8];
  console.log({ array, newArr });

  // console.log(window);
  // console.log(globalThis);

  // scrivere una funzione che fa il console.log di tutti i parametri
  const logAll = function () {};
})();



// let counter = 0;
// function func() {
//   counter += 1;
//   return counter;
// }

// console.log(func());
// console.log(func());
// console.log(func());

(function () {
  // Spread esercizio 1
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };

  const mergeTwoObjects = function (firstObj, secondObj, newProp) {
    return { ...firstObj, ...secondObj, [newProp]: "value" };
  };

  console.log(mergeTwoObjects(obj1, obj2, "name"));

  // Destructuring  esercizio 2
  const array = ["a", "ab", "jgwroifmwe,fwfe", "nfmwfr"];
  const filterdArray = array.filter((string) => {
    // possiamo anche mettere ({length}) => length >= 10
    const { length } = string;
    return length >= 10;
  });

  // filterdArray.filter(({length}) => length >= 10);

  console.log(filterdArray);
  

  // Get/Set  esercizio 3
  // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>
  const getProductHTML = (product) => {
    const { name, price } = product;
    return `<li>${name} - ${price}€</li>`;
  };

  const shop = {
    name: "Negozio di elettronica",
    _products: [],
    _page: 0,
    _per_page: 2,

    get products() {
      console.log("Stai leggendo i prodotti di ", this.name);
      return this._products;
    },

    set products(newProducts) {
      console.log("nuovi prodotti", newProducts);

      // document.body.innerHTML = "";
      // newProducts.forEach((product) => {
      //   document.body.insertAdjacentHTML("beforeend", getProductHTML(product));
      //   // document.body.innerHTML += getProductHTML(product);
      // });

      const productsHTML = newProducts.map(getProductHTML).join("");

      document.body.innerHTML = `
      <h2>Offerte lampo</h2>
      <ul>${productsHTML}</ul>
      `;

      this._products = newProducts;
      console.log('questi sono i newProducts', newProducts)
    }
  };

  console.log(shop.products);

  shop.products = [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
    { id: 3, name: "Smartphone", price: 40 },
    { id: 4, name: "Apple", price: 30 }
  ];

  // const bucket = [
  //   { id: 1, name: "TV", price: 40 },
  //   { id: 2, name: "PC", price: 30 },
  //   { id: 3, name: "Smartphone", price: 40 },
  //   { id: 4, name: "Apple", price: 30 }
  // ];

  // setInterval(() => {
  //   const randomIndex = Math.floor(Math.random() * bucket.length);
  //   shop.products = [bucket.at(randomIndex)];
  // }, 3_000);

  // shop.products = [

  // ];

  // console.log(shop.products);

  
})();


(function () {
  const product = {
    id: 1,
    name: "TV",
    price: 40,
    addons: {
      decoder: 10,
      qled: 40,
      stereo: 20
    }
  }; // -> 110

  const addonList = [];
  for (const addon in product.addons) {
    addonList.push(addon);
  }
  // console.log(addonList);

  console.log(Object.keys(product));
  console.log(Object.keys(product.addons));
  console.log(Object.values(product.addons));

  console.log("Matrix from addons", Object.entries(product.addons));

  const matrix = [
    ["prop", "value"],
    ["prop2", "value2"]
  ];

  const matrixObj = {
    prop: "value",
    prop2: "value2"
  };
  console.log("Object from matrix", Object.fromEntries(matrix));
})();


