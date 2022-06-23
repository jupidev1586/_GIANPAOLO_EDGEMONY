const delayLoop = (fn, delay) => {
  return (x, i) => {
    setTimeout(() => {
      fn(x);
    }, i * delay);
  };
};

const names = [
  "Alberta",
  "Barry",
  "Charley",
  "Christopher",
  "Dianne",
  "Ellen",
  "Ethel",
  "James",
  "Jodee",
  "Joseph",
  "Lilia",
  "Mark",
  "Mary",
  "Merri",
  "Michael",
  "Mildred",
  "Randall",
  "Roy",
  "Thomas",
  "Venus"
];

const output = document.querySelector("#output");

const display = s => output.innerText = s;

// names.forEach(display);
names.forEach(delayLoop(display, 1000));
