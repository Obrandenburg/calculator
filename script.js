let maths = document.querySelector('.functions');
let display = document.querySelector('.display');
let numbers = document.querySelector('.numbers');
let calculator = document.querySelector('.calculator');
let userNumbers = [];
let workingNumbers = [];


let Expression = new Object();

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
        userNumbers = []
        //console.log('working', workingNumbers);
    };
});


//for length of array iterate through, run operate function, then remove the first two values



operate = function(a, b){
    if (numb = '501'){
        let result = a + b;
    }
    else if (numb = '502'){
        let result = a - b;
    }
    else if (numb = '503'){
        let result = a * b;
    }
    else if (numb = '504'){
        let result = a / b;
    }
    else{console.log('error')};
};
//try to use numb in function and remove the event as an argument