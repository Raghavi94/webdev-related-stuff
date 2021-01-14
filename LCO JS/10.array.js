//Array

var countries=["India","USA","UK","Russia"];
var states =new Array("Rajasthan","TamilNadu","Andhra Pradesh","Kerala");

console.log(states[1]);
console.log(states.length);
states[0]="Karnataka";//replacing array index 0 value
console.log(states);

var user=["Raghavi","Srinivasan",94,2001,99.9];//array of mixed data types.
console.log(user);

user.pop()//eliminates last value
console.log(user);

//unshift method takeds in a user input and insert it at the beginning of array and push rest of the things to right.

user.unshift("NEW VALUE");
console.log(user);

//shift is opposite to unshift

user.shift();
console.log(user);

//indexof returns index value of specified element.
console.log(user.indexOf("Raghavi"));

console.log(Array.from("Raghavi"));

