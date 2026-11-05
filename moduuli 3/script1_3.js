"use strict";

const number = [];

for (let i = 0; i < 5; i++){
    const luvut = prompt("Anna luku:");
    number.push(Number(luvut));
}

for (let i = number.length - 1; i >= 0; i--){
    console.log(number[i]);
}