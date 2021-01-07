
//If user is authenticated ,show the signout button

//Or else ask them to signup/login

var authenticated = true;

//Instead of if else block,using Ternary operator(?:)

authenticated ? console.log("SIGN OUT Button") : console.log("SIGNUP / LOGIN")