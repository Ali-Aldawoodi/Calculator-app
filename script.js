const equalEl = document.getElementById('=');
const clearEl = document.getElementById('clear')
const resultEl = document.getElementById('result');
const numberButtons = document.querySelectorAll('.numbers');
const displayEl = document.getElementById('display');
const operatorButtons = document.querySelectorAll('.operations');

let currentInput = '';

function updateDisplay(value) {
    currentInput += value;
    displayEl.textContent = currentInput;
};

function clearDisplay() {
    currentInput = '';
    displayEl.textContent = '';
};

function calculate() {
    try {
        const result = Function(`'use strict'; return (${currentInput})`)();
        resultEl.textContent = result;
    } catch (error) {
        resultEl.textContent = 'Error';
    }
};

numberButtons.forEach(function (button) {
    button.addEventListener('click', function (e){
        const clickedNumber = e.target.textContent;
        updateDisplay(clickedNumber);
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const clickedOperator = e.target.textContent;
        updateDisplay(clickedOperator);
    });
});

equalEl.addEventListener('click', function () {
    calculate();
    displayEl.textContent = '';
});

clearEl.addEventListener('click', function () {
    clearDisplay();
    resultEl.textContent = '';
});






