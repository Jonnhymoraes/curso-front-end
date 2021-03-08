const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
//NOME DOS ESTUDANTES
console.log("Nome dos estudantes\n");
students.forEach((valorAtual) => {
    console.log(valorAtual.name);
 });
//ESTUDANTES COM MAIS DE 20 ANOS
console.log("\nEstudantes com mais de 20 anos\n");
students.forEach((valorAtual) => {
   if(valorAtual.age > 20)
     console.log(valorAtual.name)
 });
//ESTUDANTES QUE POSSUEM BOLSA
console.log('\nEstudantes que posuem bolsa\n');
const newArray = students.slice(1);
newArray.forEach(valorAtual => {
  console.log(valorAtual.name);
});