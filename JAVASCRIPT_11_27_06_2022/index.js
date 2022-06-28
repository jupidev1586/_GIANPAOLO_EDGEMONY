const userPrompt = prompt('Inserisci il tuo username qui...');

const createEl = (el) => document.createElement(el);

const loginSection = () => {
  const headerEl = createEl('header');
  const containerEl = createEl('div');
  const navEl = createEl('nav');
  const pEl = createEl('p');
  
  const body = document.body;
  
  headerEl.className = 'header'; 
  containerEl.className = 'container'; 
  navEl.className = 'navbar'; 
  pEl.className = 'paragraph'; 
  
  body.append(containerEl);
  containerEl.appendChild(headerEl);
  headerEl.appendChild(navEl);
  navEl.appendChild(pEl);
  localStorage.setItem('username', 'jupi');
  pEl.textContent = 'Benvenuto, ' + (localStorage.getItem('username').toUpperCase());
}

const spinnerEl = document.querySelector('.spinner');

try {
  if(userPrompt === 'jupi') {
    loginSection();
  } else {
    alert('Username errato');
    throw new Error('Username errato!')
  }
} catch (error) {
  console.error(error);
  spinnerEl.style.display = 'block';
} finally {
  console.log('Default');
}