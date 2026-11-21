"use strict";
const nimet = ["Matti", "Teppo", "Kalle"];
const ul = document.createElement("ul");
for (let i = 0; i < nimet.length; i++){
    const li = document.createElement("li");
    li.textContent = nimet[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);