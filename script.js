"use strict";

let sum = 0;
const totalParagraph = document.querySelector(".total");

const colaBtn = document.querySelector(".cola");
const peanutBtn = document.querySelector(".peanuts");
const chocolateBtn = document.querySelector(".chocolate");
const gummiesBtn = document.querySelector(".gummies");

colaBtn.addEventListener("click", () => {
  sum += 2;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
peanutBtn.addEventListener("click", () => {
  sum += 3;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
chocolateBtn.addEventListener("click", () => {
  sum += 4;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
gummiesBtn.addEventListener("click", () => {
  sum += 6;
  totalParagraph.textContent = `Total: $${sum}.00`;
});
