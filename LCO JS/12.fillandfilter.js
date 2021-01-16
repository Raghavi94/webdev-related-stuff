//Fill method:
//It fills the entire array with the value specified in fill bracket.
var testArray=[2,1,4,3,6,5];
//console.log(testArray.fill("r"));

//console.log(testArray.fill("r",2));//here 2 indicates the index from which the value r is to be filled.
//Output:[2,1,'r','r','r','r'].

//console.log(testArray.fill("r",2,5));//here r is replaced at positions 2,3 and 4 ..index 5 is exclusive(end position).
//Output:[2,1,'r','r','r',5];

//Filter method:

const filterArray=[2,5,4,7,10,15,20];
const result=filterArray.filter((num) => (num!=10));//here we have implemented arrow fn.
console.log("New filtered array: " + result);