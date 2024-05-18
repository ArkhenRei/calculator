let display = document.querySelector("#display");
let numberButton = document.querySelectorAll(".number");
let numberArray = Array.from(numberButton);

let displayValue;
let writeValue;
let firstNumber;
let secondNumber;
let operator;
let result;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
    default:
      console.log("invalid operator");
  }
  return result;
}

function populateDisplay() {
  //display 0
  numberArray.at(9).addEventListener("click", () => {
    if (!(display.textContent === "0")) {
      writeValue = document.createTextNode("0");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 1
  numberArray.at(6).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "1";
    } else {
      writeValue = document.createTextNode("1");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 2
  numberArray.at(7).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "2";
    } else {
      writeValue = document.createTextNode("2");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 3
  numberArray.at(8).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "3";
    } else {
      writeValue = document.createTextNode("3");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 4
  numberArray.at(3).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "4";
    } else {
      writeValue = document.createTextNode("4");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 5
  numberArray.at(4).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "5";
    } else {
      writeValue = document.createTextNode("5");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 6
  numberArray.at(5).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "6";
    } else {
      writeValue = document.createTextNode("6");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 7
  numberArray.at(0).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "7";
    } else {
      writeValue = document.createTextNode("7");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 8
  numberArray.at(1).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "8";
    } else {
      writeValue = document.createTextNode("8");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 9
  numberArray.at(2).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "9";
    } else {
      writeValue = document.createTextNode("9");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });
}

function main() {
  populateDisplay();
}
main();
