const equalEl = document.getElementById('=').value;
const submitEl = document.getElementById('submit');
const firstNum = document.getElementById('input1');
const secondNum = document.getElementById('input2');
const subtractEl = document.getElementById('-');
const addEl = document.getElementById('+');
const divideEl = document.getElementById('/');
const multiplyEl = document.getElementById('*');
const resultEl = document.getElementById('result');
const number = document.querySelectorAll('.numbers')



function arithmetic() {
    function addInputs() {
        const inputValue1 = parseInt(firstNum.value);
        const inputValue2 = parseInt(secondNum.value);
        const sum = inputValue1 + inputValue2;
        resultEl.textContent = sum;
        console.log(sum)

    }

    function subtractInputs() {
        const inputValue1 = parseInt(firstNum.value);
        const inputValue2 = parseInt(secondNum.value);
        const subtract = inputValue1 - inputValue2;
        resultEl.textContent = subtract;
        console.log(subtract)

    }

    function divideInputs() {
        const inputValue1 = parseInt(firstNum.value);
        const inputValue2 = parseInt(secondNum.value);
        const divide = inputValue1 / inputValue2;
        resultEl.textContent = divide;
        console.log(divide)

    }

    function multiplyInputs() {
        const inputValue1 = parseInt(firstNum.value);
        const inputValue2 = parseInt(secondNum.value);
        const multiply = inputValue1 * inputValue2
        resultEl.textContent = multiply;
        console.log(multiply)

    }


    addEl.addEventListener('click', addInputs)
    subtractEl.addEventListener('click', subtractInputs);
    divideEl.addEventListener('click', divideInputs);
    multiplyEl.addEventListener('click', multiplyInputs);
    

}

for (let index = 0; index < number.length; index++) {
    number[index].addEventListener('click', function(e){
        console.log(e.target)
    });
        
    
        
    
};

arithmetic();






