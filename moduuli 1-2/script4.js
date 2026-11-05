"use strict";

const nimi = prompt("Kirjoita nimesi:");
const tuvat = [
  "Rohkelikko",
  "Luihuinen",
  "Puuskupuh",
  "Korpinkynsi"
];
const arpoo = Math.floor(Math.random() * tuvat.length);

document.querySelector("#nimi", "#arpoo").textContent = "Moi " + nimi + " sinä olet " + tuvat[arpoo] + ".";
