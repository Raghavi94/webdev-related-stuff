var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question(chalk.red("What's your name? "));
var year = readlineSync.question(chalk.blue("Can you tell your year of birth"));
if((year%4)===0 || (year%100)===0 && (year%400)===0){
  console.log(chalk.magentaBright(userName) + ", your year of birth " + chalk.green(year) + " is leap year");
}
else{
  console.log(chalk.magentaBright(userName) + ", your year of birth " + chalk.green(year) + " is not a leap year");
}
