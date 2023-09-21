const display = document.querySelector("#display-output");
const buttons = document.querySelectorAll("button");
let operand1 = "";
let operand2 = "";
let operator = null;

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

// "operate()" using switch

// switch (operator) {
//   case "+":
//     return add(operand1, operand2);
//   case "-":
//     return subtract(operand1, operand2);
//   case "*":
//     return multiply(operand1, operand2);
//   case "/":
//     return divide(operand1, operand2);
// }

// button event handling

let calculation = [];
let append;

buttons.forEach(button => button.addEventListener("click", () => calculate(button)));

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    display.textContent = "0";
  } else if (value === "=") {
    operand2 = parseFloat(append); // convert the string to a number
    calculation = [];
    let currentOperand = operate(operator, operand1, operand2);
    display.textContent = currentOperand;
    operand1 = currentOperand;
    let currentOperator = []
    operator = currentOperator;
  } else {
    if (calculation.length === 0 && (value === "+" || value === "-" || value === "*" || value === "/")) {
      // if the first button pressed after "=" is an operator, do nothing
      return;
    }
    calculation.push(value);
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (calculation.length === 1) {
        // handle the case where an operator is entered as the first input
        operator = value;
        operand1 = 0;
      } else {
        operand1 = parseFloat(calculation.join(""));
        operator = value;
        calculation = [];
      }
    } else {
      // update the display only when a non-operator button is pressed
      append = calculation.join("");
      display.textContent = append;
    }
  }
}


// CURRENT ISSUES: 
  // after doing the original equation, trying to do another equation with the previous solution causes the enter button the display
  // trying to do consecutive equations only evaluates the last part of the equation (ex.: 10 * 2 + 3 will equal 5 because it is only calculating 2 + 3)



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
