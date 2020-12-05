
const chalk = require('chalk');
var readlineSync=require("readline-sync");
var score=0;

var userName = readlineSync.question(chalk.red.bold("What's your name? "));
console.log(chalk.cyan("--------------------"));
console.log(chalk.blue.bold("Welcome ") + chalk.green.underline(userName) + chalk.yellow.bold(" ! ") + chalk.blue.bold("DO YOU KNOW RAGHAVI? "));

console.log(chalk.cyan("--------------------"));

console.log(chalk.magentaBright.bold("How well do you know me? Take up this quiz to check that!"));

//high score
var highScore=[{
  name:"Raghavi",
  score:7,
}
];

//play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("Yes! You are right!!"));
    score = score + 1;
    console.log(chalk.blue.italic("Current score: ") + chalk.red.bold(score));

  }
  else{
    console.log(chalk.red("Oops! You are wrong!!"));
    console.log(chalk.blue.italic("Current score: ") + chalk.red.bold(score));
  }
  console.log(chalk.cyan("--------------------"))

}

//array of objects
var questions=[{
    question:chalk.yellowBright("Where do I live?"),
    answer:"Chennai"
  },{
    question:chalk.yellowBright("Where do I study?"),
    answer:"SVCE"
  },{
    question:chalk.yellowBright("My favorite food? ")+chalk.magentaBright("Poori/Maggi/Chapathi"),
    answer:"Poori"
  },{
    question:chalk.yellowBright("My favorite color? ")+chalk.magentaBright("Pink/Blue/Red"),
    answer:"Pink"
  },{
    question:chalk.yellowBright("Brand of my phone?"),
    answer:"Mi"
  },{
    question:chalk.yellowBright("Do I have an Instagram account?"),
    answer:"Yes"
  },{
    question:chalk.yellowBright("My favorite beverage? ") +  chalk.magentaBright("Coffee/Tea/Green tea"),
    answer:"Tea"
  }];

  //loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
//console.log("----------------")
console.log(chalk.yellow.bgGreen.bold("YAY! Your final score is: "),chalk.green.bgRed(score));
console.log(chalk.cyan("---------------"));
if(score===7){
  console.log(chalk.green.bgBlue("Wow ! "+ userName +" You scored the highest!"));
}

//for (j=0; j<highScore.length ; j++){
  //var currentListName = highScore[j];
 // console.log(currentListName.name)
 // console.log(currentListName.score)
 // console.log("---------------------");
//}

