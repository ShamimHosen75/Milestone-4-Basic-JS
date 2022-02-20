// Leap Year Function 
function isLeapYear (year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is Year Leap-Year:', isMyYearLeapYear);

const yourYear = 2052;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is Your Year Leap-Year:', isYourYearLeapYear);