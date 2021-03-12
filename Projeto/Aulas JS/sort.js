const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

const result = colaboradores.slice().sort((a,b) => {
  //negatio => quando a precede b
  //positio => quando b precede a
  // zero => iguais
/*  if (a.age < b.age){
    return -1;
  }
  
  if (a.age > b.age){
    return 1;
  }
  
  return 0;
*/
  return a.idade - b.idade;
})

console.log(result);
console.log(colaboradores);