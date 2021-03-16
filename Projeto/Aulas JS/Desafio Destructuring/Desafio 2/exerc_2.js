const user = {
    name: 'Jonnhy',
    idade: 23,
}

function printname( { name: nome } ) {
  console.log(nome);
}

printname(user);