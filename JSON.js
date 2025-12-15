const student = { id: 101,name: "GOWTHAMI",marks: 95,grade: "A"};
const jsonString = JSON.stringify(student);
console.log("JSON String:");
console.log(jsonString);
const parsedObject = JSON.parse(jsonString);
console.log("\nParsed Object:");
console.log(parsedObject);
console.log("\nStudent Name:", parsedObject.name);
console.log("Student Marks:", parsedObject.marks);
