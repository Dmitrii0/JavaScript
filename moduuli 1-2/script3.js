"use strict";
const eka = prompt("Kirjoita ensimmäinen luku.");
const toka = prompt("Kirjoita toinen luku. ");
const kolmas = prompt("Kirjoita kolmas luku. ");
const summa = Number(eka) + Number(toka) + Number(kolmas);
document.querySelector("#summa").innerHTML = summa;



const tulos = Number(eka) + Number(toka) + Number(kolmas);
document.querySelector("#tulos").innerHTML = tulos;

const keskiarvo = (Number(eka) + Number(toka) + Number(kolmas)) / 3;
document.querySelector("#keskiarvo").innerHTML = keskiarvo;
