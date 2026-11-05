"use strict";

const lukut = [];

while (true){
    const luku = Number(prompt("Anna luku: "));
    if (luku === 0){
        break;
    }
    lukut.push(luku);
}

lukut.sort((a, b) => a - b);

console.log(lukut);