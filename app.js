cont numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll("[[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperndTextElement = document.querySelector('[data-previous-operand]');
const currentOperndTextElement = document.querySelector('[data-current-operand]');

const calculator = new calculator(previousOperndTextElement, currentOperndTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  });

  operationButtons.forEach('button')