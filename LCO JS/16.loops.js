//For loops

var myStates=[
    "TamilNadu",
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    1947,
    "Rajasthan",
    "Delhi"
];
for(let i=0 ; i<myStates.length; i++){
    if(typeof myStates[i]!=='string')continue;
    console.log(myStates[i]);
}

//While loop
console.log("-----------------------");
console.log("While Loop");
let i=0;
while(i<myStates.length){
    console.log(myStates[i]);
    i++;
}

//Do-while loop
console.log("------------------------");
console.log("Do-while Loop");
var j=20;
do{
    console.log(j);
    j++;
}while(j<10);//here even if the condition is false.. loop is executed one time..because in hierarchy do executes first and then while.