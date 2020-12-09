const chalk = require('chalk');
var readlineSync=require("readline-sync");
var score=0;

var userName = readlineSync.question(chalk.red.bold("Hi!What's your name? "));
console.log(chalk.cyan("--------------------"));
console.log(chalk.blue.bold("Welcome ") + chalk.green.underline(userName) + chalk.yellow.bold(" ! ") + chalk.blue.bold("Are you a fan of MS DHONI?  "));

console.log(chalk.cyan("--------------------"));

console.log(chalk.magentaBright.bold("Then take up this FANDOM QUIZ and know more about ")+chalk.yellowBright.bold("CAPTAIN COOL!"));
console.log(chalk.cyan("--------------------"));

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
    question:chalk.yellowBright("How many times has MS Dhoni remained not-out in a successful chase in One Day Internationals? ")+chalk.magentaBright("41/47/43/48"),
    answer:'47'
  },{
    question:chalk.yellowBright("How many matches has Dhoni lost as captain in the ODI World Cup? ")+chalk.magentaBright("4/5/2/3"),
    answer:"2"
  },{
    question:chalk.yellowBright("How many runs has Dhoni scored in all the IPL 20th overs he has played? ")+chalk.magentaBright("564/596/514/498"),
    answer:"564"
  },{
    question:chalk.yellowBright("Which railway zone did Dhoni work for, as a TTE? ")+chalk.magentaBright("Central Indian Railways/Eastern Indian Railways/Western Indian Railways/South Eastern Railways"),
    answer:"South Eastern Railways"
    
  },{
    question:chalk.yellowBright("Which team did Dhoni make his Ranji trophy debut for? ")+chalk.magentaBright("Bengal/Chhattisgarh/Railways/Bihar"),
    answer:"Bihar"
  },{
    question:chalk.yellowBright("How many times has Dhoni been a part of the ICC ODI team of the year? ")+chalk.magentaBright("7/8/9/5"),
    answer:"8"
  },{
    question:chalk.yellowBright("How many sixes has Dhoni hit as a captain, in international cricket? ")+chalk.magentaBright("211/221/201/225"),
    answer:"211"
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
  console.log(chalk.green.bgBlue("Wow ! "+ userName +" You scored the highest and you are a great fan!"));
}

//for (j=0; j<highScore.length ; j++){
  //var currentListName = highScore[j];
 // console.log(currentListName.name)
 // console.log(currentListName.score)
 // console.log("---------------------");
//}

