class Student {
    // fields
    courses = [];
    constructor(name){
        this.name = name;
        // this.courses = [];
    }
    addCourse(course){
        this.courses.push(course);
    }
}

const student = new Student('Lars');
student.addCourse("React")
console.log(student.courses);