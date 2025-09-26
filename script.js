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
// –—————————————————————————————————————————————————————————
// OPERATOR BUTTONS
const btnClear = document.querySelector("#clear-btn");
const btnAdd = document.querySelector("#add-btn");
const btnSubtract = document.querySelector("#subtract-btn");
const btnMultiply = document.querySelector("#multiply-btn");
const btnDivide = document.querySelector("#divide-btn");
const btnEquals = document.querySelector("#equals-btn");
const btnPlusMinus = document.querySelector("#plusminus-btn");

// const operators = ["+", "-", "*", "/", "%"]

// –—————————————————————————————————————————————————————————
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
  // Prevent multiple dots in a row
  if (display.value.endsWith(".")) {
    return;
  } else display.textContent += ".";
});

btnClear.addEventListener("click", () => {
  display.textContent = "";
});
btnAdd.addEventListener("click", () => {
  // Prevent multiple operators in a row
  if (display.value.endsWith("+")) {
    return;
  } else display.textContent += "+";
});
btnSubtract.addEventListener("click", () => {
  // Prevent multiple operators in a row
  if (display.value.endsWith("-")) {
    return;
  } else display.textContent += "-";
});
btnMultiply.addEventListener("click", () => {
  // Prevent multiple operators in a row
  if (display.value.endsWith("*")) {
    return;
  } else display.textContent += "*";
});

btnDivide.addEventListener("click", () => {
  // Prevent multiple operators in a row
  if (display.value.endsWith("/")) {
    return;
  } else display.textContent += "/";
});

btnPlusMinus.addEventListener("click", () => {
  const displayContent = display.value;
  if (!displayContent) return;
  display.textContent = `(-${displayContent})`;
  // TODO: add toggle function
});

// btnEquals.addEventListener("click", () => {

// –—————————————————————————————————————————————————————————
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Valid keys
  keyMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "%": "%",
    "(": "(",
    ")": ")",
    ".": ".",
    ",": ".",
  };

  const operators = ["+", "-", "*", "/"];
  const symbol = keyMap[key];
  const lastChar = display.textContent.slice(-1);

  if (key in keyMap) {
    if (operators.includes(symbol)) {
      if (symbol === lastChar) {
        return; // prevent duplicate operator
      } else if (operators.includes(lastChar)) {
        const newString = display.textContent.slice(0, -1);
        display.textContent = newString + symbol; // replace operator
        return;
      } else if (symbol === "." && display.textContent.endsWith(".")) {
        return; // prevent duplicate dot
      }
    }
    display.textContent += symbol;
  }
  // Special keys
  if (key === "Enter") {
    // TODO: calculateInput();
  }
  if (key === "Backspace" || key === "Delete") {
    display.textContent = display.textContent.slice(0, -1);
  }
  if (key.toLowerCase() === "c") {
    display.textContent = "";
  }
});
