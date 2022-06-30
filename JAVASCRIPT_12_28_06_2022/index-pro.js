11

12

13

fetch(BASE_URL)

.then(res => res.json())

.then(data =>

const productsListFiltered = data

.filter(product product.rating.count >= 200)
productsListFiltered
.map(product => createCard(newCollectionEl, product.image, product.title, prod
spanProductsEl.textContent = productsListFiltered.length; document.body.appendChild(spanProductsEl);
.then(() => loadingEl.style.display = 'none')



// ----------------------------------------------------------------------------------------------------------------

import { userPrompt, spinnerEl, body, navEl, navEl2, createElements, loginSection, q } from './utils.js';



const BASE_URL = 'https://fakestoreapi.com/products';
const salesEl = q('.priceMinor');
const newCollectionEl = q('.priceMajor');
const loadingEl = q('.spinner');
const titleProducts_01 = q('.title-01 h2');
const titleProducts_02 = q('.title-02 h2');

try {
  if(localStorage.getItem('username')) {
    loginSection();
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => const productsListFiltered = data
      .filter(product product.rating.count >= 200)
      productsListFiltered
      .map(product => createCard(newCollectionEl, product.image, product.title, prod
      spanProductsEl.textContent = productsListFiltered.length; document.body.appendChild(spanProductsEl);
      .then(() => loadingEl.style.display = 'none')
    })
    .then(() => loadingEl.style.display = 'none')
  } else {
    throw new Error('Nessun username nella local storage!')
  }
} catch (error) {
  console.error(error);
  localStorage.setItem('username', userPrompt);
  // body.remove();
  spinnerEl.style.display = 'block';
  alert('Nessun username nella local storage');
  throw new Error('Nessun username nella local storage!')
} finally {
  // localStorage.removeItem('username');
  console.log('Default');
}