var readlineSync = require("readline-sync");
var fact = readlineSync.question("Enter a number for which factorial is to be found: ");
console.log("Factorial is: " + factorial(fact));
function factorial(fact){
    if(fact==0){
        return 1;
    }
    else{
        return fact*factorial(fact-1);
    }
}