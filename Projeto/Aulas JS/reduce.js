const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

/*const result = students.reduce((acc, student) => {
  return acc + student.age;
}, 0);
*/
const result = students.reduce((acc, student) => {
  if (student.scholarship) {
    return {
      tem_bolsa: acc.tem_bolsa + 1,
      nao_tem_bolsa: acc.nao_tem_bolsa
    }
  } else {
      return {
      tem_bolsa: acc.tem_bolsa,
      nao_tem_bolsa: acc.nao_tem_bolsa + 1
      }
    }
                                
}, {
    tem_bolsa: 0,
    nao_tem_bolsa: 0
});

console.log("Resposta:", result);
console.log(students);