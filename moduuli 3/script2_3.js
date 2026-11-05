"use strict";

const määrä = Number(prompt("Kuinka monta osalistusta? "));
const nimet = [];

for (let i = 0; i < määrä; i++){
    const nimi = prompt("Anna osalistujan nimi: ");
    nimet.push(nimi);
}

nimet.sort();

const ol = document.createElement("ol");
for (let i = 0; i < nimet.length; i++){
    const li = document.createElement("li");
    li.textContent = nimet[i];
    ol.appendChild(li);

}

document.body.appendChild(ol);