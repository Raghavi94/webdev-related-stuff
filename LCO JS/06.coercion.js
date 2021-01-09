//Coercion and falsy values

//undefined
//null-empty
//0
//''-empty string
//NaN-Not a Number
//In JS when we check if condition which is 2=="2",this returns true..because this double equal to does not check its data type..but checks only value present
//eg:
var user="2";
if(2=="2"){
    console.log("Condition is true");//this statement will execute.
}

//For strict checking(ie.to check even data type),we need to use triple equal to(===).
//eg:
if(2==="2"){
    console.log("Condition is false");//this statement will not execute.
}
