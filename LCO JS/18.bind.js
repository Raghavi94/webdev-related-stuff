//Bind-using bind we can borrow methods

const rags = {
    firstName:"Raghavi",
    lastName:"Srinivasan",
    role:"Admin",
    courseCount:2,
    getInfo:function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        Role is ${this.role}
        Has taken ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName:"Rocky",
    lastName:"dj",
    role:"Sub-Admin",
    courseCount:3,
    
};
//rags.getInfo();

//bind property used to borrow methods
rags.getInfo.bind(dj)();
