//Logical condition for purchase

//criteria

//user must be logged in
//email verfication
//correct card info

//At first we need to declare variables

var isLoggedIn = true;

var isEmailVerified = true;

var cardInfo = true;

//using AND operator if all the conditions must be satisfied

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("You're allowed to make a purchase!");
}
else{
    console.log("Sorry,You're not allowed");
}

//Logical condition for login
//Allow user to login if he is:
//logged in from email
//logged in from google
//logged in facebook

var email = true;

var google = false;

var facebook = false;

//using OR operator if any one of the condition is to be satisfied

if(email || google || facebook){
    console.log("LOGIN Success!");
}
else{
    console.log("LOGIN Failed!");
}

