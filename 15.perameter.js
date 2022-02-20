function buyIphone(dollar) {
    console.log('I will buy a Iphone next year.');
    console.log('In Sha Allah!');
    var iphonePrice = 50;
    var iphoneQuantity = dollar / iphonePrice;
    return iphoneQuantity;
}

var price = 500;
var iphone = buyIphone(price);
console.log('I will buy a Iphone!', iphone);