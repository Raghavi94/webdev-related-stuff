//I have used inbuilt reverse method 

function reverseArray(value){
    return value.reverse();
  }
  function reverseArrayInPlace(arr){
    return reverseArray(arr);
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]