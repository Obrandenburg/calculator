let maths = document.querySelector('.functions');
let display = document.querySelector('.display');
let numbers = document.querySelector('.numbers');
let calculator = document.querySelector('.calculator');
let equalBttn = document.querySelector('.equals');
let clear = document.querySelector(`.clear`);
let userNumbers = [];
let workingNumbers = [];
let result;
let currentOperator;



calculator.addEventListener('click', (e) => {
    let numb = e.target.value;
    if (numb < 500){
        userNumbers.push(numb);
        display.textContent = `${numb}`;
        let joinedNumbers = userNumbers.join("");
        //console.log('joined', joinedNumbers);
        display.textContent = `${joinedNumbers}`;
        userInt = parseInt(joinedNumbers);
        //console.log('userInt:', userInt);
    }
    else {
        display.textContent = `${userInt}`;
        workingNumbers.push(userInt);
        userNumbers = [];
        if ((workingNumbers.length) >= 2){
            operate(workingNumbers[0], workingNumbers[1]);
            workingNumbers.splice(0, 2, result);
            //console.log('working', workingNumbers);
            currentOperator = numb;
        }
        else{currentOperator = numb};
    };
});

equalBttn.addEventListener('click', () => {
    console.log(result);
    workingNumbers.push(userInt);
    userNumbers = [];
    operate(workingNumbers[0], workingNumbers[1]);
    workingNumbers.splice(0, 2, result);
    //console.log('working', workingNumbers);
    display.textContent = `${result}`;
});

clear.addEventListener('click', () =>{
    display.textContent = `0`;
    userNumbers = [];
    workingNumbers = [];
    userInt = [];
    currentOperator = 0;
});




operate = function(a, b){
    if (currentOperator == 501){
        result = a + b;
        return (result);
    }
    else if (currentOperator == 502){
        result = a - b;
        return (result);
    }
    else if (currentOperator == 503){
        result = a * b;
        return (result);
    }
    else if (currentOperator == 504){
        result = a / b;
        return (result);
    }
    else{console.log('error')};
};
