class Student {
    // fields
    // courses = [];
    constructor(name){
        this.name = name;
        this.courses = [];
    }
    addCourse(course){
        this.courses.push(course);
    }
}
module.exports = Student;

// const student = new Student('Lars');
// student.addCourse("React")
// student.addCourse("Django")
// console.log(student);


