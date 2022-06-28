    const userPrompt = prompt('Inserisci il tuo username qui...');

    const body = document.body;

    

    const q = (el) => document.querySelector(el);

    const navEl = q('.navbar-header');
    const navEl2 = q('.navbar-footer');

    const createEl = (el) => document.createElement(el);

    const loginSection = () => {
      const headerEl = q('header');
      // const containerEl = createEl('div');
      // const containerEl2 = createEl('div');
      
      // const pEl = createEl('p');
      // const pEl2 = createEl('p');
      const footerEl = q('footer');
      

      headerEl.className = 'header'; 
      footerEl.className = 'footer'; 
      // containerEl.className = 'container'; 
      // containerEl2.className = 'container';
      // navEl.className = 'navbar'; 
      // navEl2.className = 'navbar'; 
      // pEl.className = 'paragraph'; 
      
      // body.append(headerEl, footerEl);
      // headerEl.appendChild(containerEl);
      // footerEl.appendChild(containerEl2);
      // containerEl.appendChild(navEl2);
      // containerEl2.appendChild(navEl);
      // navEl.appendChild(pEl);
      // navEl2.appendChild(pEl2);
      localStorage.setItem('username', userPrompt);
      navEl.textContent = userPrompt.toUpperCase();
      navEl2.textContent = userPrompt.toUpperCase();
    }
    
    const createElements = (parent, imgLink, title, price) => {
      const wrapperEl = createEl('div');
      const titleEl = createEl('h3');
      const priceEl = createEl('p');
      const imgEl = createEl('img');
    
      wrapperEl.className = "col-4"
      titleEl.className = "title"
      priceEl.className = "price"
      imgEl.className = "mw-100"
    
      imgEl.setAttribute('alt', title);
      imgEl.setAttribute('src', imgLink)
    
      titleEl.textContent = title
      priceEl.textContent = price
    
      wrapperEl.append(imgEl, titleEl, priceEl);
      parent.appendChild(wrapperEl);
    }
    
    const pushProductQty = () => {
      
    }
    
    const spinnerEl = document.querySelector('.spinner');
    
    
  

export { userPrompt, spinnerEl, body, navEl, navEl2, createElements, loginSection, q };

