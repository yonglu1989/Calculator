// Initialization
const lowerDisplay    = document.querySelector('.lower-screen');
const clearButton     = document.querySelector('.clear');
const equalButton     = document.querySelector('.enter');
const numberButtons   = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let lowerDisplayValue = 0;
let totalValue        = 0;
let storedOperator    = "";
let operatorSign      = "";
let num1              = 0;
let num2              = 0;
let operatorPressed   = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function clearLower() {
    lowerDisplayValue = 0;
    lowerDisplay.innerHTML = lowerDisplayValue;
}

// Grab all the buttons with class number and add a listener
// that adds to the display value.
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        lowerDisplayValue = lowerDisplayValue * 10 + parseInt(button.innerHTML);
        lowerDisplay.innerHTML = lowerDisplayValue.toString();
    });
});



// Grab all the operator buttons and add event listeners.
// The lowerDisplayValue will be stored in lowerDisplayStorage
// while the operator will be stored in operator storage.
// operatorPressed will be set to true, preventing operator to be pressed again.

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(operatorPressed == false) {
            num1 = lowerDisplayValue;
            operatorPressed = true;
            
            switch(button.innerHTML) {
                case '*':
                    storedOperator = multiply;
                    operatorSign = "*";
                    break;
                case '÷':
                    storedOperator = divide;
                    operatorSign = "÷";
                    break;
                case '-':
                    storedOperator = subtract;
                    operatorSign = "-";
                    break;
                case '+':
                    storedOperator = add;
                    operatorSign = "+";
                    break;
                default:
                    break;
            }
            clearLower();
        }
    });
});


// Equals button takes num1 and num2 and throws them into the operate
// function. 
equalButton.addEventListener('click', ()=> {
    if(operatorPressed == true) {
        num2 = lowerDisplayValue;
        totalValue = operate(storedOperator, num1, num2);
        lowerDisplayValue = totalValue;
        lowerDisplay.innerHTML = totalValue.toString();

    
        num1 = 0;
        operatorPressed = false;
    }

});

// Clear button sets lowerDisplayValue to 0 and updates the screen.
clearButton.addEventListener('click', () => {
    clearLower();
    lowerDisplayValue = 0;
    totalValue = 0;
    storedOperator = "";
    operatorSign = "";
    num1 = 0;
    operatorPressed = false;
});



