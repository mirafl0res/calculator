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
  // Operator keys
  if (event.key === "/") {
    if (display.value.endsWith("/")) {
        return;
    } else display.textContent += "/";
  }
  if (event.key === "*") {
    if (display.value.endsWith("*")) {
      return;
    } else display.textContent += "*";
  }
  if (event.key === "-") {
    if (display.value.endsWith("-")) {
        return;
    } else display.textContent += "-";
  }
  if (event.key === "+") {
    if (display.value.endsWith("+")) {
        return;
    } else display.textContent += "+";
  }
  if (event.key === "Enter") {
    // TODO: function: calculateInput
  }
  if (event.key.toLowerCase() === "c") {
    display.textContent = "";
  }

  // –—————————————————————————————————————————————————————————
  // Number keys
  if (event.key === "1") {
    display.textContent += "1";
  }
  if (event.key === "2") {
    display.textContent += "2";
  }
  if (event.key === "3") {
    display.textContent += "3";
  }
  if (event.key === "4") {
    display.textContent += "4";
  }
  if (event.key === "5") {
    display.textContent += "5";
  }
  if (event.key === "6") {
    display.textContent += "6";
  }
  if (event.key === "7") {
    display.textContent += "7";
  }
  if (event.key === "8") {
    display.textContent += "8";
  }
  if (event.key === "9") {
    display.textContent += "9";
  }
  if (event.key === "0") {
    display.textContent += "0";
  }
  if (event.key === "." || event.key === ",") {
    if (display.value.endsWith(".")) {
        return;
    } else display.textContent += ".";
  }

  // Backspace key
  if (event.key === "Backspace" || event.key === "Delete") {
    let string = display.value;
    let newString = string.substring(0, string.length - 1);
    display.textContent = newString;
  }
});
