
//Discount price

var originalPrice = 199;

var sellingPrice = 799;

var discount = ((sellingPrice-originalPrice)/sellingPrice)*100;

console.log("Discount percentage : " +discount);

var roundedDiscountPercentage = Math.round(discount);

console.log(roundedDiscountPercentage + "% off");