// Mile To Kilometer 
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(25.5);
console.log('Marathon in Kilometer:', marathon);