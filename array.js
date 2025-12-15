colors =['red','green','blue']
colors.push('yellow')
colors.unshift('purple')
console.log(colors);



let students = [
  [1, "Ravi", 85, "A"],
  [2, "Sita", 78, "B"],
  [3, "Kiran", 90, "A"]
];

console.log("Initial Students:");
console.log(students);
function addStudentAtEnd(id, name, marks, grade) {
  students.push([id, name, marks, grade]);
  console.log("\nStudent added at END:");
  console.log(students);
}

addStudentAtEnd(4, "Anu", 88, "A");
function addStudentAtBeginning(id, name, marks, grade) {
  students.unshift([id, name, marks, grade]);
  console.log("\nStudent added at BEGINNING:");
  console.log(students);
}

addStudentAtBeginning(0, "Gopi", 72, "C");

