
// NUMBER BUTTONS
const btnOne = document.querySelector("#one-btn");
const btnTwo = document.querySelector("#two-btn");
const btnThree = document.querySelector("#three-btn");
const btnFour = document.querySelector("#four-btn");
const btnFive = document.querySelector("#five-btn");
const btnSix = document.querySelector("#six-btn");
const btnSeven = document.querySelector("#seven-btn");
const btnEight = document.querySelector("#eight-btn");
const btnNine = document.querySelector("#nine-btn");
const btnZero = document.querySelector("#zero-btn");
const btnDot = document.querySelector("#dot-btn");

// OPERATOR BUTTONS
const btnClear = document.querySelector("#clear-btn");
const btnAdd = document.querySelector("#add-btn");
const btnSubtract = document.querySelector("#subtract-btn");
const btnMultiply = document.querySelector("#multiply-btn");
const btnDivide = document.querySelector("#divide-btn");
const btnEquals = document.querySelector("#equals-btn");
// TODO: 
// - [ ] add function for plusminus-button
// - [ ] add function for percentage button

// DISPLAY
const display = document.querySelector("#display-area");

btnOne.addEventListener("click", () => {
  display.textContent += "1";
});
btnTwo.addEventListener("click", () => {
  display.textContent += "2";
});
btnThree.addEventListener("click", () => {
  display.textContent += "3";
});
btnFour.addEventListener("click", () => {
  display.textContent += "4";
});
btnFive.addEventListener("click", () => {
  display.textContent += "5";
});
btnSix.addEventListener("click", () => {
  display.textContent += "6";
});
btnSeven.addEventListener("click", () => {
  display.textContent += "7";
});
btnEight.addEventListener("click", () => {
  display.textContent += "8";
});
btnNine.addEventListener("click", () => {
  display.textContent += "9";
});
btnZero.addEventListener("click", () => {
  display.textContent += "0";
});
btnDot.addEventListener("click", () => {
  display.textContent += ".";
});


btnClear.addEventListener("click", () => {
  display.textContent = "";
});
btnAdd.addEventListener("click", () => {
  display.textContent += "+";
});
btnSubtract.addEventListener("click", () => {
  display.textContent += "-";
});
btnMultiply.addEventListener("click", () => {
  display.textContent += "*";
});
btnDivide.addEventListener("click", () => {
  display.textContent += "/";
});



// btnEquals.addEventListener("click", () => {
