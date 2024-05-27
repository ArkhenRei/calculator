let display = document.querySelector("#display");
let numberButton = document.querySelectorAll(".number");
let numberArray = Array.from(numberButton);
let sumButton = document.querySelector(".add");
let subtractButton = document.querySelector(".subtract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let equalsButton = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");

let displayValue;
let writeValue;
let firstNumber;
let secondNumber;
let operator;
let result;
let equalsPressed = false;
let operatorPressed = false;
let characterLimit = 0;

let solution;

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
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "0";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("0");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 1
  numberArray.at(6).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "1";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("1");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 2
  numberArray.at(7).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "2";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("2");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 3
  numberArray.at(8).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "3";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("3");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 4
  numberArray.at(3).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "4";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("4");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 5
  numberArray.at(4).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "5";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("5");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 6
  numberArray.at(5).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "6";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("6");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 7
  numberArray.at(0).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "7";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("7");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 8
  numberArray.at(1).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "8";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("8");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  //display 9
  numberArray.at(2).addEventListener("click", () => {
    if (characterLimit < 9) {
      if (display.textContent === "0" || operatorPressed || equalsPressed) {
        display.textContent = "9";
        equalsPressed = false;
        operatorPressed = false;
      } else {
        writeValue = document.createTextNode("9");
        display.appendChild(writeValue);
      }
      displayValue = display.textContent;
      console.log(displayValue);
      characterLimit++;
    }
  });

  sumButton.addEventListener("click", () => {
    operatorPressed = true;
    if (operator !== "+") {
      calculate();
      operator = "+";
    } else {
      calculate();
    }
  });

  subtractButton.addEventListener("click", () => {
    operatorPressed = true;
    if (operator !== "-") {
      calculate();
      operator = "-";
    } else {
      calculate();
    }
  });

  multiplyButton.addEventListener("click", () => {
    operatorPressed = true;
    if (operator !== "*") {
      calculate();
      operator = "*";
    } else {
      calculate();
    }
  });

  divideButton.addEventListener("click", () => {
    operatorPressed = true;
    if (operator !== "/") {
      calculate();
      operator = "/";
    } else {
      calculate();
    }
  });

  equalsButton.addEventListener("click", () => {
    equalsPressed = true;
    if (operator !== undefined) {
      secondNumber = Number(displayValue);
      solution = Math.round(operate(operator, firstNumber, secondNumber));
      if (isNaN(solution) || solution === Infinity) {
        display.textContent = "infinity and beyond";
      } else {
        if (solution.toString().length > 9) {
          display.textContent = solution.toExponential(3);
        } else {
          display.textContent = solution;
        }
      }
      solution = undefined;
      firstNumber = undefined;
      secondNumber = undefined;
      operator = undefined;
      characterLimit = 0;
    }
  });

  clearButton.addEventListener("click", () => {
    display.textContent = 0;
    solution = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    characterLimit = 0;
  });
}

function calculate() {
  if (!(firstNumber === undefined)) {
    secondNumber = Number(displayValue);
    solution = Math.round(operate(operator, firstNumber, secondNumber));
    if (isNaN(solution) || solution === Infinity) {
      display.textContent = "infinity and beyond";
      solution = undefined;
      firstNumber = undefined;
      secondNumber = undefined;
      operator = undefined;
    } else {
      if (solution.toString().length > 9) {
        display.textContent = solution.toExponential(3);
      } else {
        display.textContent = solution;
      }
      firstNumber = solution;
    }
  } else {
    firstNumber = Number(displayValue);
  }
  characterLimit = 0;
}

function main() {
  populateDisplay();
}
main();
