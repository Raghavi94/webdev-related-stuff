
//Slice method:

//slice method has start and end value where start value is included and end value is excluded.

var users=["Ragh","Madhu","Nandhi","Bhuvi","Sangi","Mari"];
console.log(users.slice(1,4));
//console.log(users.slice(1));
//Output:['Madhu','Nandhi','Bhuvi','Sangi','Mari']

//Splice method:

users.splice(1,3,"hi");//here the first index(ie.1 here)points starting value and end index(ie.3)points the count(ie.delete count=3)from 1 index.The value between these are re-placed by another value specified in third argument(ie.here string hi).
console.log(users);