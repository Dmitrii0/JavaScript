"use strict";

const karkausvuosi = prompt("Kirjoita vuosi ");

if (karkausvuosi % 4 === 0 && (karkausvuosi % 100 !== 0 || karkausvuosi % 400 === 0)) {
  document.querySelector("#karkausvuosi").textContent = karkausvuosi + " on karkausvuosi.";
} else {
  document.querySelector("#karkausvuosi").textContent = karkausvuosi + " ei ole karkausvuosi.";
}