/*In previous video,we saw that even when function is called first before defining it..code gets executed..this is because of GLOBAL CONTEXT.
If we execute that in browser it is called global context..In NodeJS it is called by another name.
Execution Context-It helps console log the output.
Types(3):
->Variable object
->scope chain
->this
#Function declarations are scanned and made available.
#Variable declarations are scanned and made undefined.
*/

tipper(5);//passing int..even when we call function at first it executes because there is a GLOBAL CONTEXT which scans entire code.
function tipper(a){
    var bill=parseInt(a);//parseInt builtin function converts any input to integer
    console.log(bill+5);
}
//tipper(5);//passing int
tipper("15");//passing string

//Another example to know variable function declarations

console.log(name);//this will print undefined because we first console it and after it goes to declaration part.
var name="rags";

function printName(m){
    console.log("Ms.Rags");
}
printName();//here while calling fuction another execution context opens and overwrites rags..refer the stack structure.
console.log(name);//this will print rags because in line 23..as new execution context comes here.. we defined name and only after defining this line is getting executed.