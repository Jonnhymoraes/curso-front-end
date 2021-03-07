let obj = {
  nome: "Jonnhy",
  idade: 23,
  obj2: {
    id: 1,
    descricao: "aninhado"
  },
  func: () => {
  console.log("oi");
}
};

//console.log(obj);

console.log(obj["obj2"]);
console.log(obj.obj2);

/* Diferença entre as duas acima: o nome pode estar 
sendo armazenado em uma variável. Ex: let prop = "nome", 
assim não seria possível acessar usando console.log(obj.prop); 
Dessa forma, a linha de cima é a correta. */