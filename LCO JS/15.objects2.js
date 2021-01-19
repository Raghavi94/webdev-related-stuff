//Objects and Methods

var user={
    firstName:"Raghavi",
    lastName:"Srinivasan",
    role:"Admin",
    loginCount:32,
    facebookSignedIn:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseContent:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses `;
    },
    info:function(){
        console.table(user);
    }


};
console.log(user.firstName);
console.log(user.getCourseContent());
user.buyCourse("React JS course");
console.log(user.getCourseContent());
console.log(user.info());