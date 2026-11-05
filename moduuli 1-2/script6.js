"use strict";
const tulos = confirm("Lasketaanko neliöjuuri?");

if(tulos){
    const luku = prompt("Anna luku: ");

    if(luku < 0){
        document.querySelector("#tulos").textContent = "Negatiivisen luvun neliöjuurta ei ole määritelty.";
    } else {
        document.querySelector("#tulos").textContent = "Neliöjuuri on: " + Math.sqrt(luku);
    }


} else{
    document.querySelector("#tulos").textContent = "Neliöjuuri ei laskettu.";
}

console.log(tulos);