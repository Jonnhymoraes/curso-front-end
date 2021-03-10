const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

const result = students.filter(student => {
  return student.age > 20;
})

console.log("Resposta:", result);
console.log(students);