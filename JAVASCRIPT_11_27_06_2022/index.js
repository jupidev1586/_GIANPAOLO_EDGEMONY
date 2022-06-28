const userPrompt = prompt('Inserisci il tuo username qui...');

const createEl = (el) => document.createElement(el);
const headerEl = createEl('header');
const containerEl = createEl('div');
const navEl = createEl('nav');
const pEl = createEl('p');


const loginSection = () => {
  const body = document.body;
  
  headerEl.className = 'header'; 
  containerEl.className = 'container'; 
  navEl.className = 'navbar'; 
  pEl.className = 'paragraph'; 
  
  body.append(containerEl);
  containerEl.appendChild(headerEl);
  headerEl.appendChild(navEl);
  navEl.appendChild(pEl);
  localStorage.setItem('username', userPrompt);
  pEl.textContent = 'Benvenuto, ' + userPrompt.toUpperCase();
}

const spinnerEl = document.querySelector('.spinner');

try {
  if(localStorage.getItem('username')) {
    loginSection();
  } else {
    throw new Error('Nessun username nella local storage!')
  }
} catch (error) {
  console.error(error);
  localStorage.setItem('username', userPrompt);
  containerEl.remove();
  spinnerEl.style.display = 'block';
  alert('Nessun username nella local storage');
  throw new Error('Nessun username nella local storage!')
} finally {
  // localStorage.removeItem('username');
  console.log('Default');
}