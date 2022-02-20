// Addition Two Numbers in Function Return
function addTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var firstNum = 33;
var secondNum = 75;
var result = addTwoNumbers(firstNum, secondNum); 
console.log('Total After Additon Result', result);

// Multiplication Two Numbers in Function Return

function multiplyTwoNumbers (num1 , num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers (5, 100);
console.log('Total after multiplication Result', total);


// Subtraction Two Numbers in Function Return
function subtractionTwoNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}

var total = subtractionTwoNumbers (75, 35);
console.log('Total after Subtraction Result', total);

// Division Two Numbers in Function Return
function divisionTwoNumbers(num1, num2){
    var result = num1 / num2 ;
    return result;
}

var total = divisionTwoNumbers(80, 4)
console.log('Total After Division Result', total);
