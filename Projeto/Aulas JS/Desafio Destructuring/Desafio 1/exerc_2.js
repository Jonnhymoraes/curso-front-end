const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

//LETRA A
let = [x] = students;
console.log(x);

//LETRA B
let = [, , y] = students;
console.log(y);

//LETRA C
const estudante = {id: 2, name: 'Margoe Rose', age: 19, scholarship: true }

let { name } = estudante
console.log(name);
