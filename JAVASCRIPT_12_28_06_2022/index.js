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
    .then(data => {
      data
        .filter(product => product.price <= 100)
        .map((product, _index, array) => {
          navEl.textContent = `${userPrompt.toUpperCase()} ${array.length}`;
          titleProducts_01.textContent = 'Prezzo <= 100';
          createElements(salesEl, product.image, product.title, product.price)
        })
      data
        .filter(product => product.price >= 100)
        .map((product, _index, array) => {
          navEl2.textContent = `${userPrompt.toUpperCase()} ${array.length}`;
          titleProducts_02.textContent = 'Prezzo >= 100';
          createElements(newCollectionEl, product.image, product.title, product.price)
        })
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