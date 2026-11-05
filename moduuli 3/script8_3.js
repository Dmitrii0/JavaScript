"use strict";

const nimet = [ "Johnny", "DeeDee", "Joey", "Marky" ];


function concat(arr) {
    let tulos = "";
    for (let i = 0; i < arr.length; i++) {
        tulos += arr[i];
    }
    return tulos;
}
const vasta = concat(nimet);
document.body.textContent = vasta;