const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
// LETRA A
let { nome } = user;
console.log(nome);

//LETRA B
let { endereco: { rua } } = user;
console.log(rua);

//LETRA C
let { projetos } = user;
console.log(projetos);

//LETRA D
let { projetos: [,segundo]  } = user;
console.log(segundo);