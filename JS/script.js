
const list = [];

const numProduct = parseInt(prompt('Quanti prodotti vuoi acquistare?'));

ol = document.querySelector('ol');

let i = 0;

while (list.length<numProduct) {

  list[i] = prompt('inserisci un articolo!');
  
  ol.innerHTML += ` <li> ${list[i]} </li>`;

  i++;

  
}