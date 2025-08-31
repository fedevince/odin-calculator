const add = function(a,b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};


let num1; 
let num2;
let operator;

const operate = function(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const display = document.querySelector(".display");
display.textContent = '';
const operators = "-+*/";


// logic for equal

const equal = function(display) {
    num1 = Number(display.textContent.split(/[+\-*\/]/)[0]);
    num2 = Number(display.textContent.split(/[+\-*\/]/)[1]);
    let currentOperators = display.textContent.match(/[+\-*\/]/g);
    let operator1 = currentOperators[0];
    let result = operate(num1, num2,operator1)
    return result;
}
// factor out splitting function?
// logic for decimal
// logic for what happens when two operators in a row
const executeOperation = function (display) { 
    let operatorCounter = 0;
    for (index in display.textContent) {
        let character = display.textContent.charAt(index);
        if (operators.includes(character)) operatorCounter ++;
    }
    if (operatorCounter >= 2) {
        num1 = Number(display.textContent.split(/[+\-*\/]/)[0]);
        num2 = Number(display.textContent.split(/[+\-*\/]/)[1]);
        let currentOperators = display.textContent.match(/[+\-*\/]/g);
        let operator1 = currentOperators[0];
        let operator2 = currentOperators[1]
        operator = display.textContent[display.textContent.search(/[+\-*\/]/)];
        let result = operate(num1, num2, operator1);
        display.textContent = result + `${operator2}`;
    }
}

let btns = document.querySelectorAll("button");
for (let btn of btns) {
    btn.addEventListener("click", () => {
        if (btn.id === "clear") display.textContent = 0;
        else if (btn.id == "=") display.textContent = equal(display);
        else display.textContent += btn.id;
        executeOperation(display)
    })
}


// function to execute operation on display
// parse display content into num1, num2 and operator
// set up a temporary result
// set error for divide by 0
// round results with long decimals
// clear should clear all existing data
// don't run any operation if operator is pressed two times
// pressing a new digit when final result is displayed should clear everything

// backspace button
// keyboard support if focused