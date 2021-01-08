//Switch for role based access in javascript

//Create an application with following roles:
//admin-gets full access
//sub-admin-gets access to create/delete courses
//testprep-gets access to create/delete tests
//user-gets access to consume content

var user = "testprep";

switch(user){
    case "admin":
        console.log("You get full access!");
        break;
    case "sub-admin":
        console.log("Gets access to create/delete courses");
        break;
    case "testprep":
        console.log("Gets access to create/delete tests");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;                

}