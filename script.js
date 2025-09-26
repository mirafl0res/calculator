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
  const lastChar = display.textContent.slice(-1);
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
    const currentNumber = display.textContent.split(/[\+\-\*\/]/).pop();
    if (currentNumber.includes(".")) return;
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
      const currentNumber = display.textContent.split(/[\+\-\*\/]/).pop();
      if (currentNumber.includes(".")) return;
    }

    display.textContent += symbol;
  }
});


