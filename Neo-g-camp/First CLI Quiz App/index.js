var readlineSync = require("readline-sync");

var score=0;
console.log("How well do you know me?");
console.log("---------------");
console.log("Here is the quiz below to check that!");
console.log("---------------");
var userName = readlineSync.question("What's your name? ");
console.log("Welcome ! " + userName + " DO YOU KNOW Raghavi?");

//play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("Yes! You are right!!");
    score = score + 1;

  }
  else{
    console.log("Oops! You are wrong!!");
  }

}
//console.log("Current score: ",score);
//console.log("-------------------------");


//array of objects
var questions=[{
    question:"Where do I live?",
    answer:"Chennai"
  },{
    question:"Where do I study?",
    answer:"SVCE"
  },{
    question:"My favorite food?",
    answer:"Poori"
  },{
    question:"My favorite color?",
    answer:"Pink"
  },{
    question:"Brand of my phone?",
    answer:"Mi"
  }];
//console.log("Current score: ",score);
//console.log("------------------------------");


//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("----------------")
console.log("YAY! Your final score is: ",score);
