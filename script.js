var number1 = 0;
var number2 = 0;
var operation = '';
var result = 0;
var operationClicked = false;

function showData(value) {
    console.log("Number 1: ", number1)
    console.log("Number 2: ", number2)
    console.log("Operation: ", operation)
    console.log("Result: ", result)
    console.log("Operationclicked: ", operationClicked)
    const resultDisplay = document.querySelector('#resultDisplay');
    resultDisplay.innerHTML = value;

    
}

// List of numeric buttons
const buttonList = document.querySelectorAll('.number')

for (let i = 0; i < buttonList.length; i++) {
    const button = buttonList[i];

    button.addEventListener('click', function (event) {
        if (operationClicked === true) {
            number2 = number2 + event.target.id;
            showData(parseInt(number2));
        } else {
            number1 = number1 + event.target.id;
            showData(parseInt(number1));
        }
        
    })
}

// List of operations buttons
const operationButtonList = document.querySelectorAll('.operation')

for (let i = 0; i < operationButtonList.length; i++) {
    const button = operationButtonList[i];

    button.addEventListener('click', function (event) {
        operationClicked = true;
        operation = event.target.id;
        showData(operation);
    })
}

// operation
const buttonResult = document.querySelector("#equal");
buttonResult.addEventListener('click', function (event) {

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if (operation === '+') {
        result = number1 + number2
    }

    if (operation === '-') {
        result = number1 - number2;
    }

    if (operation === 'x') {
        result = number1 * number2;
    }

    if (operation === '÷') {
        result = number1 / number2;
    }



    showData(result);
})

//Delete button
const buttonDelete = document.querySelector("#delete");
buttonDelete.addEventListener('click', function (event) { 
     number1 = 0;
     number2 = 0;
     operation = '';
     result = 0;
     operationClicked = false;
     showData(result)
})