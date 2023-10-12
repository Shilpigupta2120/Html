var calculator = {
  value: null,
  operation: null,
  waitingForOperand: false
};

function numberPressed(number) {
  var display = document.getElementById("result");

  if (calculator.waitingForOperand) {
    display.innerText = "";
    calculator.waitingForOperand = false;
  }

  display.innerText += number;
}

function operationPressed(op) {
  var display = document.getElementById("result");
  var currentValue = parseFloat(display.innerText);

  if (calculator.operation === null) {
    calculator.value = currentValue;
  } else {
    switch (calculator.operation) {
      case "+":
        calculator.value += currentValue;
        break;
      case "-":
        calculator.value -= currentValue;
        break;
      case "*":
        calculator.value *= currentValue;
        break;
      case "/":
        calculator.value /= currentValue;
        break;
    }
  }
