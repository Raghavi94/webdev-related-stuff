let o=3
let a=30
let fruits=0
while(fruits!=50){
  if(o>0){
    console.log("You can take 1 orange");
    fruits=fruits+1;
  }
  else if(o==0){
    console.log("You can take one apple");
    fruits=fruits+1;
  }
  else{
    console.log("Impossible!");
  }
}
