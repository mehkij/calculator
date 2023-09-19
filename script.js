// let operand1
// let operand2
// let operation

const display = document.querySelector(".display");
const displayOutput = document.querySelector("#display-output");

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

const buttons = document.querySelector(".buttons button");

function updateDisplay() {
  buttons.addEventListener("click", (e) => {
    // e.stopPropagation();
    const clickedButton = e.target;
    let currentDisplay = 0;
    
    if (clickedButton.id === "clear" || clickedButton.id === "multiplication" || clickedButton.id === "division" || clickedButton.id === "subtraction" || clickedButton.id === "addition" || clickedButton.id === "equals") {
      displayOutput.textContent = currentDisplay;
      display.appendChild(displayOutput);
    } else {
      displayOutput.textContent = clickedButton.textContent;
      display.appendChild(displayOutput);
    }
  });
}

updateDisplay();