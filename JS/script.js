
const list = [];

ul = document.querySelector('ul');

let i = 0;

const numProduct = parseInt(prompt('Inserisci numericamente quanti prodotti acquistare?'));

if (!isNaN(numProduct)) {

  while (list.length<numProduct) {

    list[i] = prompt('inserisci un articolo!');
    
    ul.innerHTML += ` <li> ${list[i]} </li>`;
  
    i++;
  
    
  }


  
} else {

 alert('A LETTO SENZA CENA! LEGGI MEGLIO LA PROSSIMA VOLTA!')

  ul.innerHTML += ` <li> Il nulla cosmico </li>`;
  
}



