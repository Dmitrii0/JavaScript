"use strict";

const koirat = [];

for (let i = 0; i < 6; i++){
    const nimi = prompt("Anna koiran nimi: ");
    koirat.push(nimi);

}
koirat.sort().reverse();


const ul = document.createElement("ul");
for (let i = 0; i < koirat.length; i++){
    const li = document.createElement("li");
    li.textContent = koirat[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);