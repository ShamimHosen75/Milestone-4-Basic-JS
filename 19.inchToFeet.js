// Inch To Feet 
function incheToFeet (inches){
    var feet = inches | 12;
    return feet;
}

var bashInches = 132;
var feet = incheToFeet(bashInches);
console.log('BashInche to Feet:', feet);