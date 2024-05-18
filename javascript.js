let display = document.querySelector("#display");
let numberButton = document.querySelectorAll(".number");
let numberArray = Array.from(numberButton);
let sumButton = document.querySelector(".add");
let subtractButton = document.querySelector(".subtract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let equalsButton = document.querySelector(".equals");

let displayValue;
let writeValue;
let firstNumber;
let secondNumber;
let operator;
let result;

let sol;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
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
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "0";
    } else {
      writeValue = document.createTextNode("0");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 1
  numberArray.at(6).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "1";
    } else {
      writeValue = document.createTextNode("1");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 2
  numberArray.at(7).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "2";
    } else {
      writeValue = document.createTextNode("2");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 3
  numberArray.at(8).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "3";
    } else {
      writeValue = document.createTextNode("3");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 4
  numberArray.at(3).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "4";
    } else {
      writeValue = document.createTextNode("4");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 5
  numberArray.at(4).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "5";
    } else {
      writeValue = document.createTextNode("5");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 6
  numberArray.at(5).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "6";
    } else {
      writeValue = document.createTextNode("6");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 7
  numberArray.at(0).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "7";
    } else {
      writeValue = document.createTextNode("7");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 8
  numberArray.at(1).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "8";
    } else {
      writeValue = document.createTextNode("8");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  //display 9
  numberArray.at(2).addEventListener("click", () => {
    if (
      display.textContent === "0" ||
      Number(display.textContent) === firstNumber
    ) {
      display.textContent = "9";
    } else {
      writeValue = document.createTextNode("9");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
    console.log(displayValue);
  });

  sumButton.addEventListener("click", () => {
    if (operator !== "+") {
      calculate();
      operator = "+";
    } else {
      calculate();
    }
  });

  subtractButton.addEventListener("click", () => {
    if (operator !== "-") {
      calculate();
      operator = "-";
    } else {
      calculate();
    }
  });

  multiplyButton.addEventListener("click", () => {
    if (operator !== "*") {
      calculate();
      operator = "*";
    } else {
      calculate();
    }
  });

  divideButton.addEventListener("click", () => {
    if (operator !== "/") {
      calculate();
      operator = "/";
    } else {
      calculate();
    }
  });

  //equals butonuna basıldıktan sonra hesaplama yapılacak ardından herhangi bir sayı butonuna basılırsa display ekranında yeni sayı yazılacak
  equalsButton.addEventListener("click", () => {
    if (operator !== undefined) {
      secondNumber = Number(displayValue);
      display.textContent = operate(operator, firstNumber, secondNumber);
    }
  });
}

function calculate() {
  if (!(firstNumber === undefined)) {
    secondNumber = Number(displayValue);
    sol = operate(operator, firstNumber, secondNumber);
    display.textContent = sol;
    firstNumber = sol;
  } else {
    firstNumber = Number(displayValue);
    display.textContent = 0;
  }
}

function main() {
  populateDisplay();
}
main();
