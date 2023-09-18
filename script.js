// let operand1
// let operand2
// let operation

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