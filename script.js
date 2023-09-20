let operand1;
let operand2;
let operation;

// operation fuctions

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

const display = document.querySelector(".display");
const displayOutput = document.querySelector("#display-output");
let currentDisplay = "0";

function updateDisplay() {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const clickedButton = e.target;
      const buttonValue = clickedButton.textContent;

      // check if the clicked button's text content is numeric
      if (/^[0-9]$/.test(buttonValue)) {
        if (currentDisplay === "0" || currentDisplay === "ERROR") {
          currentDisplay = buttonValue; // replace the initial "0"
        } else {
          currentDisplay += buttonValue; // append display with button click
        }
      }

      if (clickedButton.id === "clear") {
        currentDisplay = "0";
      } 
      
      const addButton = clickedButton.id === "addition";
      const subtractButton = clickedButton.id === "subtraction";
      const multiplyButton = clickedButton.id === "multiplication";
      const divideButton = clickedButton.id === "division";

      if (addButton || subtractButton || multiplyButton || divideButton) {
        operand1 = currentDisplay;
        operation = clickedButton;
      }

      displayOutput.textContent = currentDisplay;
    });
  });
}

updateDisplay();

// CURRENT OBJECTIVES:

// add functionality to the calculator
  // store the final value of the display after clicking an operator (addition, subtraction, etc.)
  // store the operator
  // update the display to make it display the second operand after you begin clicking buttons inputting the operator
  // store the 2nd operand for evaluation when the "=" button is pressed
  // pass the stored operands and the stored operator into the operate() function
  // update the display with the solution to the equation
  // NOTE: MAKE SURE THAT YOU CAN DO MULTIPLE OPERATIONS IN SUCCESSION (ex: 2 + 2 = 4 x 5 = 20 - 10 = 10 ...)

// extra credit:

  // add a functional decimal button that can be used in the operate() function
    // make sure the button can only be used ONCE with each operand
      // probably use the "once()" function with event listeners. biggest hurdle is figuring out how to re-enable it once you move onto the second operand (maybe toggle function instead?)
    // should be as simple as adding a "." button that appends to the display in the same way the numerical buttons do
  
  // add a backspace button that allows the user to delete as many numbers as they want in the display if they make a mistake

  // add keyboard support
    // the "/" key (and other similar keys) might cause some trouble, read this MDN documentation: (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
