//here arrow function is used and wrapped inside a variable.
var isEven=(element)=>{
    // if(element%2===0){
    //     return true;
    // }
    // return false;
    return element%2===0;
}
console.log(isEven(2));


var result=[2,4,6,8].every(isEven);//every keyword checks every single element inside array based on condition passed to it..here it checks for even nos.
console.log(result);//it outputs true bcoz every element in array is even.

var noteven=[2,3,5,7].every(isEven);
console.log(noteven);//it outputs false bcoz there is one odd element inside array.

//callback function

var callbackfn=[2,3,5,7,8].every((e) => (e%2===0));//we need not use return keyword and braces if our code is like this.
console.log(callbackfn);
