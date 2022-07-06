// const product = {
//   id: 1,
//   name: "TV",
//   price: 40,
//   addons: {
//     decoder: 10,
//     qled: 40,
//     stereo: 20
//   }
// };
// const fullOptionalPrice = Object.values(product.addons);
// console.log(fullOptionalPrice);

// const sumValues = fullOptionalPrice.reduce((a, b) => a + b);

// console.log("Addition addons", sumValues);


// ----------------------------------------------------------------

// (function () {

//   const getProductHTML = (product) => {
//     const { name, price } = product;
//     return `<li>${name} - ${price}€</li>`;
//   };

//   const shop = {
//     name: "Negozio di elettronica",
//     _products: [],
//     _page: 0,
//     _per_page: 2,

//     get products() {
//       console.log("Stai leggendo i prodotti di ", this.name);
//       return this._products;
//     },

//     set products(newProducts) {
//       console.log("nuovi prodotti", newProducts);

//       // document.body.innerHTML = "";
//       // newProducts.forEach((product) => {
//       //   document.body.insertAdjacentHTML("beforeend", getProductHTML(product));
//       //   // document.body.innerHTML += getProductHTML(product);
//       // });

//       const productsHTML = newProducts.map(getProductHTML).join("");

//       document.body.innerHTML = `
//       <h2>Offerte lampo</h2>
//       <ul>${productsHTML}</ul>
//       `;

//       this._products = newProducts;
//       console.log('questi sono i newProducts', newProducts)
//     }
//   };

//   console.log(shop.products);

//   shop.products = [
//     { id: 1, name: "TV", price: 40 },
//     { id: 2, name: "PC", price: 30 },
//     { id: 3, name: "Smartphone", price: 40 },
//     { id: 4, name: "Apple", price: 30 }
//   ];


  
// })();


/*///////////////////////////////////////////////////////////////////////////////////// */





const getProductHTML = (product) => {
  const { name, price, img } = product;

  return `<li><img src="${img}"><p class="title_product">${name}</p><p class="price_product">${price} €</p><button class="buy button button--primary">Acquista</button></li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 6, // numero di risultati per pagina

  get products() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */

    const indexOfLastPost = this._page * this._per_page;
    const indexOfFirstPost = indexOfLastPost - this._per_page;
    // console.log(indexOfFirstPost)
    const paginatedProducts = this._products.slice(
      indexOfFirstPost, // al primo giro 0
      indexOfLastPost // al primo giro 6
    );
    // console.log(paginatedProducts)
    return paginatedProducts;
  },

  set products(newProducts) {
    this._products = newProducts;
    this.renderHTML();
  },

  set page(newPage) {
    this._page = newPage;
    this.renderHTML();
  },

  renderHTML() {
    const productsEl = document.querySelector(".products");

    const productsHTML = this.products.map(getProductHTML).join("");
    productsEl.innerHTML = `
         <ul>${productsHTML}</ul>
     `;
  },
};

let button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    shop.page = button.getAttribute("id");
  });
});

shop.products = [
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 200,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 300,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 100,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 400,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 350,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 150,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 170,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 270,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 320,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 485,
    img: "https://via.placeholder.com/150x300"
  },
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 360,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 450,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 190,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 90,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 70,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 120,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 210,
    img: "https://via.placeholder.com/150x300"
  }, 
  {
    name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    price: 600,
    img: "https://via.placeholder.com/150x300"
  } 
];