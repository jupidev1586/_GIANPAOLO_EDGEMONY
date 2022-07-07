(function () {

  const newProducts = Array.from(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      (_, index) => {
        return {
          id: 1,
          name: `TV - ${_}`,
          price: 40 + index,
          stock: index * 2
        };
      }
  ); // Creiamo un array di 12 prodotti

  const shop = {
    page: 0,
    perPage: 5,

    products: [],

    setPage(newPage) {
      this.page = newPage;
      this.renderHTML();
    },

    // torna solo i prodotti dentro shop.products nella vista corrente
    getProducts() {
      const startIndex = this.page * this.perPage;
      const endIndex = startIndex + this.perPage;

      const slicedProducts = this.products.slice(startIndex, endIndex);

      return slicedProducts;
    },

    // imposta i prodotti dentro shop.products e stampa in pagina
    setProducts(products) {
      this.products = products;
      this.renderHTML();
    },
    // get getPrice() {
      
    //   alert(`Super prezzo di oggi: ${this._products[this._id].price}€, Occhio! ne sono rimasti solamente ${this._products[this._id].stock}`)
    // }, 

    // set idValue(id) {
    //   this._id = id;
      
    // },
    
    renderHTML() {
      // this.products
      // calcoliamo gli indici di inizio e fine

      const productsHTML = this.getProducts()
          .map((product, index) => {
            const { name, price, stock } = product;
            //
            return `
            <li class="product" id="${(this.page * this.perPage) + index}"
              data-name="${name}"
              data-price="${price}€"
              data-stock="${stock} in magazzino">
              <h3>${name}</h3> ${price}€ - 
              <small>${stock} in magazzino</small>
              </li>
            `;
          })
          .join("");


      document.querySelector(".shop").innerHTML = `
          <h2>Offerte lampo</h2>
          <div>Page: ${this.page +1}</div>
          <div>Showing: ${this.getProducts().length * (this.page + 1)} / 
          ${
          this.products.length
      }</div>
          <ul>${productsHTML}</ul>
      `;

      

    }
  };

  shop.setProducts(newProducts);
  
  const $pagination = document.querySelector(".pagination");
  const $buttons = document.querySelectorAll(".pagination button");

  $pagination.addEventListener("click", function (event) {
    console.clear();
    console.log(new Date().getTime());
    // console.log("click su pagination");
    console.log("event current target:", event.currentTarget);
    console.log("event target:", event.target);

    if (event.target.tagName === "BUTTON") {
      event.preventDefault();
      
      const buttonEl = event.target;
      const newPage = Number(buttonEl.innerText) - 1;
      console.log("id button",buttonEl.id);
      shop.setPage(newPage);
    }
  });
  

  const shopEl = document.querySelector(".shop"); 

  shopEl.addEventListener("click", function (event) {

    // metodo pro -------------
    console.log("click sul product!");

    const productEl = event.target.closest(".product");

    if (productEl) {
      console.clear();
      console.log("cafone:", productEl.innerText);
      // dentro il dataset ho tutti gli attributi [data-*], super comodo per passare dati a JS
      console.log("dataset:", productEl.dataset.alert);

      // metodo tramite recupero di id da array
      console.log("productEl.id:", productEl.id);
      console.log(shop.products[productEl.id]);
      return;
    }

    // end metodo pro -------------


    // console.log(shopEl);

    // metodo easy -------------
    // const isProduct = event.target.tagName === "LI" || event.target.parentNode.tagName === "LI";

    // if(!isProduct) {
    //   return
    // }

    // const liEl = event.target.classList.contains('product')
    // ? event.target
    // : event.target.closest('product')

    // if ( isProduct ) {
    //   const productEl = event.target;
    //   console.log(productEl.innerText);
    // }
    
  })

  // $buttons.forEach(($button, index, array) => {
  //   // facciamo il console log del singolo bottone
  //   // console.log($button);
  //   // impostiamo un id = al suo index
  //   $button.id = index;

  //   // aggiungiamo un listener al click
  //   $button.addEventListener("click", function (event) {
  //     // annulla l'evento di default del browser associato all'elemento
  //     // event.preventDefault();
  //     // annulla il natura bubbling dell'evento
  //     event.stopPropagation();

  //     // ricordiamo sempre che this.innerText/HTML è una stringa
  //     // console.log(typeof this.innerText);
  //     // voglio partire con le pagine da 0, per cui decremento di 1 il numero
  //     const newPage = Number(this.innerText) - 1;
  //     // imposto la pagina dentro l'oggetto
  //     shop.setPage(newPage);
  //     // controllo
  //     // console.log("shop.page", shop.page);
  //   });

  // });

})();