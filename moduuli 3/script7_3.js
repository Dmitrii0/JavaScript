"use strict";

const ul = document.createElement("ul");
const tahkot = Number(prompt("Kuinka monta tahkoa nopassa on?"));

function Noppa(tahkot){
    return Math.floor(Math.random() * tahkot) + 1;

}

while(true){
    const tulos = Noppa(tahkot);
   

    const li = document.createElement("li");
    li.textContent = tulos;
    ul.appendChild(li);

     if (tulos === tahkot){
        break;
    }

}    
document.body.appendChild(ul);