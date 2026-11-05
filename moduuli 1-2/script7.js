"use strict";
const määrä = prompt("Anna määrä: ");

let summa = 0;

for( let i = 0; i < määrä; i++){
    const noppa = Math.floor(Math.random() * 6) + 1;
    console.log(noppa);
    summa += noppa;

}
console.log("Summa: " + summa);
