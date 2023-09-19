// let operand1
// let operand2
// let operation

const display = document.querySelector(".display");
const displayOutput = document.querySelector("#display-output");
let currentDisplay = "0";

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  if (operator == "+") {
    return add(operand1, operand2);
  } else if (operator == "-") {
    return subtract(operand1, operand2);
  } else if (operator == "*") {
    return multiply(operand1, operand2);
  } else if (operator == "/") {
    return divide(operand1, operand2);
  }
}

// button event handling

function updateDisplay() {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const clickedButton = e.target;
      const buttonValue = clickedButton.textContent;

      // check if the clicked button's text content is numeric
      if (/^[0-9]$/.test(buttonValue)) {
        if (currentDisplay === "0" || currentDisplay === "ERROR") {
          currentDisplay = buttonValue; // replace the "0"
        } else {
          currentDisplay += buttonValue; // append display with button click
        }
      }

      if (clickedButton.id === "clear") {
        currentDisplay = "0";
      } else if (clickedButton.id === "equals") {

      }

      displayOutput.textContent = currentDisplay;
    });
  });
}

updateDisplay();