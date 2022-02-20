function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial (6);
console.log('My Factorial of 6 is:', myFactorial);


function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i <= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial (6);
console.log('My Factorial of 6 is:', myFactorial);

// For Loop Reverse 
function getFactorial(number){
    let factorial = 1;
    for (let i = number; i >=1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);