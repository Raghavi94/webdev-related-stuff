//FUNCTIONS 

//Q1.find minimum

function findMinimum(a,b){
    return Math.min(a,b);
  }
  console.log(findMinimum(5,2));

  //Q2.Recursion (even/odd)

  function isEven(n){
      if(n==0) return true;
      else if(n==1) return false;
      else if(n<0) return isEven(-n); 
      else return isEven(n-2);

  }
  console.log(isEven(50));
  console.log(isEven(75));
  //here recursion happens when isEven function runs for 2nd time,the function will be isEven(-(-1)) which becomes +1 and it returns false.
  console.log(isEven(-1));

  //Q3.Bean Counting

 /* function countChar(string,character){
      let counted=0;
      for(let i=0; i<string.length ; i++){
          if(string[i]==character) return counted+=1;
      }
      return counted;
  }
  
  function countBs(c){
      return countChar(c,"B");
  }
  console.log(countBs("BBC"));
  console.log(countChar("kakkerlak","k"));*/
  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4