// for (i = 1; i < 7; i++){
//     console.log(i);
// }

// Recursion 
function consoleNumber (i) {
    if (i > 7){
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);