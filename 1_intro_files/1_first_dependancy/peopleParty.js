const faker = require("faker");
const Student = require("../student");


// console.log("message: ", Student)
let students = [];
for(let i = 0; i<10; i++){
    const student = new Student(faker.name.firstName() + " " + faker.name.lastName());
    // console.log(student.name);
    students.push(student);
// console.log(faker.name.prefix(), faker.name.firstName(), faker.name.lastName(),", city:", faker.address.city());
}
console.log(students);