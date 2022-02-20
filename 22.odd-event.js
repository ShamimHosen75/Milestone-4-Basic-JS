// Is Even Function 
function isEven(number){
    if (number % 2 == 0 ){
        return true;
    }
    return false;
}

const myNumber = 1675;
const isMyNumberEven = isEven(myNumber);
console.log('My Even Number is:', isMyNumberEven);

const herNumber = 1860;
const isHerNumberEven = isEven(herNumber);
console.log('Her Even Number is:', isHerNumberEven);


// Is Odd Function 
function isOdd (number){
    if(number % 2 != 0){
        return true;
    }
    return false;
} 

const isMyNumberOdd = isOdd(myNumber);
console.log('My Odd Number is:', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('Her Odd Number is:', isHerNumberOdd);