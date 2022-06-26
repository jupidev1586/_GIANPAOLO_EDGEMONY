// Elements
const $button_01 = document.createElement('button'); 
const $button_02 = document.createElement('button'); 
const $div = document.createElement('div');
const $resultH1Cont = document.createElement('div');
const $resultH1 =  document.createElement('h1');
const appId = document.getElementById('app');
$resultH1.innerHTML = 0;
// Append elements
const appendApp = appId.append($div);
const appendResult = $div.append($resultH1);
const appendButton_01 = $div.append($button_01);
const appendButton_02 = $div.append($button_02);


$button_01.classList.add('button');
$button_02.classList.add('button');
$button_01.innerHTML = ' - ';
$button_02.innerHTML = ' + ';

let increment = 0;

const incFn = () => {
  if (increment < 10) {
    increment++;
  }
  $resultH1.innerHTML = increment;
}

const decFn = () => {
  if (increment > 0) {
    increment--;
  } 
  $resultH1.innerHTML = increment;
}

$button_02.addEventListener('click', incFn);
$button_01.addEventListener('click', decFn);