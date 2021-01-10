//Function in variable
//User role in JS
/*Define a function that can answer the role of user.
User can be on following roles
admin-with full access
sub-admin-with access to create/delete courses
testprep-with access to create/delete tests
user-consume all content
other-trial user
input:getUserRole(user,role)
we use backtaits here(``)
*/

function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name} is admin with full access`;
            break;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is user with access to consume all content`;
            break;  
        default:
            return `${name} is a trial user`;
            break;

    }
}
console.log(getUserRole("Raghavi","admin"));