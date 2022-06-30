import { createCard, q  } from './utils.js'
import { GET, POST, DELETE } from './api.js'

const BASE_URL = 'https://edgemony-backend.herokuapp.com/series';
const addSerieBtnEl = q('.add-serie');
const removeSerieBtnEl = q('.remove-serie');
const deleteInputEl = q('.delete');



const body = {
  favorite: false,
  genres: ["combat"],
  // id: "a0e2e984-f971-44cf-b033-cd49bfdb965b",
  new: false,
  poster: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_CobraKaiTheKarateKidSagaContinues_image1600w.jpg",
  rating: 500,
  seasons: 5,
  year: 2022,
  title: 'COBRA KAI',
}



// ------------ il nuovo GET tramite funzione async/await, il vecchio sta sopra commentato a riga 17
GET(BASE_URL).then(data => {
  data.map(serie => {
    const imgOrPlaceholder = serie.poster || 'https://picsum.photos/200/300';

    try {
      // if (!serie.description) {
      //   throw new Error('La serie non contiene una descrizione');
      // }
      createCard(
        document.body,
        imgOrPlaceholder,
        serie.title,
        serie.year,
        serie.id
      );
    } catch (error) {
      console.log(error)
    }
  })
})


// addSerieBtnEl.addEventListener("click", () => {
  //   POST(BASE_URL, body).then(() => location.reload());
  // });


addSerieBtnEl.addEventListener("click", () => {
  const titleEl = q(".titleInput").value;
  const imgEl = q(".imgInput").value;
  const yearEl = q(".yearInput").value;

  const body = {
    title: titleEl,
    poster: imgEl,
    year: yearEl,
  };
  // console.log(titleEl)
  // console.log(body.title)
  POST(BASE_URL, body)
  .then(() => location.reload());
});


// ----- Per singolo input
// const titleInputEl = document.querySelector('.title');
// const imgInputEl = document.querySelector('.img-url');
// const yearInputEl = document.querySelector('.year');

// titleInputEl.addEventListener('input', (e) => {
//   serieTvBody.title = e.target.value;
// })

// imgInputEl.addEventListener('input', (e) => {
//   serieTvBody.poster = e.target.value;
// })

// yearInputEl.addEventListener('input', (e) => {
//   serieTvBody.year = e.target.value;
// })


const serieTvBody = {};
const inputEls = document.querySelectorAll('input');
const btnEl = document.querySelector('button');

inputEls.forEach(input => input.addEventListener('input', (e) => {
  serieTvBody[input.id] = e.target.value;
}));
btnEl.addEventListener('click', () => console.log(serieTvBody));

// const allInputs = qAll('input');

// allInputs.forEach((item, index, array) => {
//   // console.log(item ,index, array);
//   const titleEl = q('.titleInput');
//   const imgEl = q('.imgInput');
//   const yearEl = q('.yearInput');
  
//   item.addEventListener('input', (eventInput) => {
    
//     const bodyInputs = {
//       favorite: false,
//       genres: ["combat"],
//       // id: "a0e2e984-f971-44cf-b033-cd49bfdb965b",
//       new: false,
//       poster: eventInput.target.value,
//       rating: 500,
//       seasons: 5,
//       year: eventInput.target.value,
//       title: eventInput.target.value,
//     }
//     console.log(bodyInputs);
//     item.addEventListener('click', (eventClick) => {
      
      
//       // POST(BASE_URL, bodyInputs)
//         // .then(() => location.reload())
//     })
//   });
// });
// ------------ il nuovo DELETE tramite funzione async/await, il vecchio sta sopra commentato a riga 43
deleteInputEl.addEventListener('input', (eventInput) => {
  removeSerieBtnEl.addEventListener('click', (eventClick) => {
    DELETE(BASE_URL, eventInput.target.value)
      .then(() => location.reload())
  })
});



