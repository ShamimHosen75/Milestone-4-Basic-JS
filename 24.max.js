function findLargest (firstNum, secondNum){
    if(firstNum > secondNum){
        return firstNum;
    }
    else {
        return secondNum;
    }
}

const largest = findLargest(755, 533);
console.log('Largest number is', largest);