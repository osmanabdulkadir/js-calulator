class Calculator {
  constructor(previousOperndTextElement, currentOperndTextElement){
    this.previousOperndTextElement = previousOperndTextElement
    this.currentOperndTextElement = currentOperndTextElement
    this.clear();
  }

  claer() {
    this.currentOperand = "";
    this.previousOpernd = ''
    this.operation = undefined;
  }

  delete (){
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }

  appendNumber(number) {
    if(number === '' && this.currentOperand.includes('.')) return 
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if(this.currentOperand === '') return 
    if(this.previousOpernd !== '') {
      this.compute()
    }
    this.operation - operation
    this.previousOpernd = this.currentOperand
    this.currentOperand = ''
  }
  compute() {
    
  }
}





const numberButtons = document.querySelectorAll('[data-number]');
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