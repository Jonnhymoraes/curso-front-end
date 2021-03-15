//DESESTRUTURAÇÃO DE ARRAY
/* const numeros = [10, 20, 30, 40, 50]

//let x = numeros[2];
let [,,x] = numeros;

console.log(x);

//DESESTRUTURAÇÃO DE OBJETO
const user = {
    name: "Jonnhy",
    idade: 23
}

//let nome = user.name
let { name: nome, idade} = user

console.log(nome);

console.log(user); */

////////////////////////////////////
const user = {
    name: 'Jonnhy',
    idade: 23,
    obj: {
        prop1: 1,
        prop2: '2'
    }
}

let { obj: object } = user
let { prop2} = object
//FAZER EM UMA LINHA O Q FOI FEITO ACIMA
let { obj: { prop2} } = user;

console.log(prop2)

console.log(user)