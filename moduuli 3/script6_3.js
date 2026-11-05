"use strict";

const ul = document.createElement("ul");
function Noppa(){
    return Math.floor(Math.random() * 6) + 1;

}

while(true){
    const tulos = Noppa();
   

    const li = document.createElement("li");
    li.textContent = tulos;
    ul.appendChild(li);

     if (tulos === 6){
        break;
    }

}    
document.body.appendChild(ul);