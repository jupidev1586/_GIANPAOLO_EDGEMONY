
const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list"); // lista

// const API_URL = "https://openlibrary.org/subjects/harry_potter.json";
const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let inputValue = inputEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  console.log("calling:", apiURL);

  fetch(apiURL)
  .then((res) => {
    console.log({ res });
    const json = res.json();
    console.log({ json });
    return json;
  })
  .then((json) => {
    console.log(json);
    listEl.innerHTML = json.docs
    // .filter((item) => { item.title.length > 6 })
    .map(item => `<li>${item.title}</li>`) 
    .join("")
  })
  .catch((err) => {
    console.error(err);
    listEl.innerHTML = `<li>C'è stato un errore, riprovare!</li>`;
    return []; // array vuoto
  })
  .finally();
  formEl.reset();
});


