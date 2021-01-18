
//Objects:

var user={
    firstName:"Raghavi",
    lastName:"Srinivasan",
    birthMonth:"January",
    age:20,
    Hobby:"Listening music"
};
console.log(user.age);

//Another way of calling object

console.log(user["firstName"]);

//updating values of object

user.Hobby="Reading books";
console.log(user.Hobby);

//Table format

console.table(user);
