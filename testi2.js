"use strict";
const nappi = document.querySelector("#nappi");
nappi.addEventListener("click", function() {
    const luku1 = Number(document.querySelector("#luku1").value);
const luku2 = Number(document.querySelector("#luku2").value);
    const tulos = luku1 + luku2;
    document.querySelector("#tulos").textContent = tulos;
});
document.querySelector("#tulos").textContent = summa;