//Closure

function addition(x){
    return function(y){
        return x+y;
    };
}
var value = addition(5);
console.log(value(2));

//other way of calling
console.log(addition(5)(5));