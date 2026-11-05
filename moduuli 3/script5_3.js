"use strict";
const luvut = [];

while(true){
    const luku = Number(prompt("Anna luku: "));
    if(luvut.includes(luku)){
        alert("Luku on jo listassa.");
        break;
    }

    luvut.push(luku);

}
luvut.sort((a, b) => a - b);
console.log(luvut);