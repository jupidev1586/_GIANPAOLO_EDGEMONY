// ## Spread:

// 1) scrivere una funzione che unisce le proprietà di due oggetti

// ```js
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }
// ```

// const joinArrays = (firstEl, secEl, thirdEl) => {
//   const objRes = {foo: firstEl, name: secEl, age: thirdEl};
//   console.log(objRes)
//   return objRes
// }

// joinArrays('bar', 'Mio nome', 32);

const object1 = {foo: 'bar'};
const object2 = {name: 'Mio nome'};

const objRes = {foo: 'bar', name: 'Mio nome'};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2})

const obj3 = mergeObjects(object1, object2);

console.log(obj3);

// 2) Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// ```js
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };
// ```

// objRes.age = 32;

// console.log(objRes);

// ## Destructuring:

// 1) Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la
//    length
const objectBase = {
  course: 'Edgemony'
};

// console.log(objectBase.name);

const names = ['Marco', 'Eleonora', 'Martina', 'Federica', 'Luca'];

const { length } = names.filter(prop => prop.length >= 5);

console.log(length);



// ## Get/Set

// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// - leggere _products nel getter
// - sovrascrivere _products nel setter
// - contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

// ```js

// shop.products = [{id: 1, nome: 'TV', price: 40}, {id: 2, nome: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

// const shop = {
//   _products: [],
//   get products() {
//     _products.map( product => {
//         id: product.id,
//         nome: product.nome,
//         price: product.price
//       }
//     }
//   },
//   set products(val) {

//   }
// }


let shop = {
  get shopItem() {
    return `${this.id} ${this.name} ${this.price}`
  },

  set shopItem( value ) {
    [this.id, this.name, this.price] = value.split( " " );
    // console.log(this.shopItem)
    // console.log([this.id, this.name, this.price] = value.split( " " ));
    
    let ulItemEl = document.querySelector('.ul__item');
    ulItemEl.forEach( item => {
      const itemEl = document.createElement('li');
      item.appendChild( itemEl );
      item.textContent = item.shopItem;
    })
    // document.getElementById("item").innerHTML = this.shopItem;
  }
}


shop.shopItem1 = '1 TV 40';
shop.shopItem2 = '1 PC 560';

console.log(shop);





// let liItem1 = document.getElementById('li__item_1');
// let liItem1 = document.getElementById('li__item_1')

// liItemEl.textContent = shop.shopItem1;


console.clear();

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

  // console.clear();

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

console.clear();

// let counter = 0;
// function func() {
//   counter += 1;
//   return counter;
// }

// console.log(func());
// console.log(func());
// console.log(func());

(function () {
  // Spread
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };

  const mergeTwoObjects = function (firstObj, secondObj, newProp) {
    return { ...firstObj, ...secondObj, [newProp]: "value" };
  };

  console.log(mergeTwoObjects(obj1, obj2, "name"));

  // Destructuring
  const array = ["a", "ab", "jgwroifmwe,fwfe", "nfmwfr"];
  const filterdArray = array.filter((string) => {
    // possiamo anche mettere ({length}) => length >= 10
    const { length } = string;
    return length >= 10;
  });

  // filterdArray.filter(({length}) => length >= 10);

  console.log(filterdArray);
  console.clear();

  // Get/Set
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

  // console.clear();
})();

// (function () {
//   const first = {
//     nomeNascosto: "Eleonora",
//     counterPremi: 0,
//     get name() {
//       console.log(
//         `Congraturazione ${this.nomeNascosto}! Sei andata a premi :))`
//       );
//       this.counterPremi += 1;
//       console.log(
//         `Counter premi di ${this.nomeNascosto}: ${this.counterPremi}`
//       );

//       return this.nomeNascosto;
//     }
//   };

//   const second = {
//     name: "Marco"
//   };

//   const podioCorsa = [first.name, second.name];
//   //

//   const podioOstacoli = [first.name, second.name];
//   const podioNuoto = [second.name];

//   console.log({ podioCorsa, podioOstacoli, podioNuoto });
//   console.log(first.counterPremi);
// })();

// (function () {
//   const prop = "dynamicProp";
//   let user = {
//     // an object
//     name: "John", // by key "name" store value "John"
//     age: 30, // by key "age" store value 30
//     [prop]: "valore su chiave dinamica",
//     logName() {
//       return user.name;
//     }
//   };

//   const oldUser = user;

//   (function () {
//     const user = null;

//     oldUser.logName();
//   })();

//   console.log(user.logName());
// })();

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


