clickMap = {
  "one-btn": "1",
  "two-btn": "2",
  "three-btn": "3",
  "four-btn": "4",
  "five-btn": "5",
  "six-btn": "6",
  "seven-btn": "7",
  "eight-btn": "8",
  "nine-btn": "9",
  "zero-btn": "0",
  "add-btn": "+",
  "subtract-btn": "-",
  "multiply-btn": "*",
  "divide-btn": "/",
  "percentage-btn": "%",
  "dot-btn": ".",
  "plusminus-btn": "+/-",
  "clear-btn": "C",
  "equals-btn": "=",
};

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

const display = document.querySelector("#display-area");

document.addEventListener("click", (event) => {
  const buttonId = event.target.id;
  const symbol = clickMap[buttonId];

  if (!(buttonId in clickMap)) return; // exit if clicked element isn’t a calculator button

  // Special cases
  // ------------------------------
  if (symbol === "C") {
    display.textContent = "";
    return;
  }
  if (symbol === "=") {
    // TODO: calculateInput()
    return;
  }
  if (symbol === "+/-") {
    const content = display.textContent;
    if (!content) return;
    display.textContent = `(-${content})`;
    return;
  }
  // ------------------------------

  // Prevent duplicate operators
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(symbol)) {
    const displayContent = display.textContent;
    const lastChar = displayContent.slice(-1);

    if (operators.includes(lastChar)) {
      display.textContent = displayContent.slice(0, -1) + symbol;
      return;
    }
  }
  // Prevent duplicate dots
  if (symbol === ".") {
    const currentcurrentNumber = display.textContent.split(/[\+\-\*\/]/).pop();
    if (currentcurrentNumber.includes(".")) return;
  }

  display.textContent += symbol;
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Special keys
  if (key === "Enter") {
    // TODO: calculateInput();
    return;
  }
  if (key === "Backspace" || key === "Delete") {
    display.textContent = display.textContent.slice(0, -1);
  }
  if (key.toLowerCase() === "c") {
    display.textContent = "";
  }

  const operators = ["+", "-", "*", "/"];

  if (key in keyMap) {
    const symbol = keyMap[key];
    const lastChar = display.textContent.slice(-1);

    if (operators.includes(symbol)) {
      if (symbol === lastChar) {
        return; // prevent duplicate operator
      } else if (operators.includes(lastChar)) {
        const newString = display.textContent.slice(0, -1);
        display.textContent = newString + symbol; // replace operator
        return;
      }
    }

    // Prevent duplicate dots
    if (symbol === ".") {
      const currentcurrentNumber = display.textContent
        .split(/[\+\-\*\/]/)
        .pop();
      if (currentcurrentNumber.includes(".")) return;
    }

    display.textContent += symbol;
  }
});

const isDigitOrDot = (char) => "0123456789.".includes(char);
const isOperatorOrParenthesis = (char) => "+-*/%()".includes(char);

const tokenize = (string) => {
  let tokens = [];
  let currentNumber = "";
  for (const char of string) {
    if (isDigitOrDot(char)) {
      currentNumber += char;
    } else if (isOperatorOrParenthesis(char)) {
      if (currentNumber !== "") {
        tokens.push(Number(currentNumber));
        currentNumber = "";
      }
      tokens.push(char);
    }
  }
  if (currentNumber !== "") {
    tokens.push(Number(currentNumber));
  }
  return tokens;
};

// console.log(tokenize("1234+445.34*25-12--24"));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add(4, 5))
console.log(subtract(4, 5))
console.log(multiply(4, 5))
console.log(divide(4, 5))
/*

const calculate = (tokens) => {

  for (const token of tokens) {
    if (isDigitOrDot)
    }


  
  
  } 


  - Look at tokens array
  - IF index 0 is number THEN 




*/


