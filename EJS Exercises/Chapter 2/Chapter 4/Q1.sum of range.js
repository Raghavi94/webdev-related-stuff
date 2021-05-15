function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } 
    else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array){
    let sum = 0;
    for(let i of array){
      sum+=i;
    }
    return sum;
  }
  
  
  console.log("Print the numbers within the given range: ",range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log("Print the numbers within the given range with -ve step size: " ,range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log("Print the sum of values within the given range: ",sum(range(1, 10)));
  // → 55