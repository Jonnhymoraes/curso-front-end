const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
//COM PONTO
console.log(user.nome);
console.log(user.endereco.rua);
console.log(user.projetos[1]);

//COM COLCHETES
console.log(user['nome']);
console.log(user.endereco['rua']);
console.log(user.projetos[1]);
//COM VARIÁVEIS
const { endereco: {numero} } = user;
console.log(numero);
