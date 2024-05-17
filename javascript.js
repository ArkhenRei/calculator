let display = document.querySelector("#display");
let numberButton = document.querySelectorAll(".number");
let digitArray = Array.from(numberButton); //convert nodelist to array
let addOperator = document.querySelector(".add");
let equals = document.querySelector(".equals");

let displayValue;
let writeValue;
let numberArray;
let operator;
let result;

function add(numberArray) {
  return numberArray.reduce((acc, cur) => acc + cur);
}

function subtract(numberArray) {
  return numberArray.reduce((acc, cur) => acc - cur);
}

function multiply(numberArray) {
  return numberArray.reduce((acc, cur) => acc * cur);
}

function divide(numberArray) {
  return numberArray.reduce((acc, cur) => acc / cur);
}

function operate(operator, numberArray) {
  switch (operator) {
    case "+":
      result = add(numberArray);
      break;
    case "-":
      result = subtract(numberArray);
      break;
    case "*":
      result = multiply(numberArray);
      break;
    case "/":
      result = divide(numberArray);
      break;
    default:
      console.log("invalid operator");
  }
  return result;
}

function populateDisplay() {
  //display 0
  digitArray.at(9).addEventListener("click", () => {
    if (!(display.textContent === "0")) {
      writeValue = document.createTextNode("0");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 1
  digitArray.at(6).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "1";
    } else {
      writeValue = document.createTextNode("1");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 2
  digitArray.at(7).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "2";
    } else {
      writeValue = document.createTextNode("2");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 3
  digitArray.at(8).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "3";
    } else {
      writeValue = document.createTextNode("3");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 4
  digitArray.at(3).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "4";
    } else {
      writeValue = document.createTextNode("4");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 5
  digitArray.at(4).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "5";
    } else {
      writeValue = document.createTextNode("5");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 6
  digitArray.at(5).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "6";
    } else {
      writeValue = document.createTextNode("6");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 7
  digitArray.at(0).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "7";
    } else {
      writeValue = document.createTextNode("7");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 8
  digitArray.at(1).addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "8";
    } else {
      writeValue = document.createTextNode("8");
      display.appendChild(writeValue);
    }
    displayValue = display.textContent;
  });

  //display 9
  digitArray.at(2).addEventListener("click", () => {
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
