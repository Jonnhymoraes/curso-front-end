const user = {
    name: 'Jonnhy',
    idade: 23,
    obj: {
        prop1: 1,
        prop2: [1, 5, 3, 7]
    }
}

const user2 = {
    name: "Juca",
    idade: 23
}

/* let { obj: { prop2: [,segundo] } } = user;

console.log(segundo);

console.log(user); */

//DESESTRUTURANDO FUNÇÕES
/* function printProp(obj) {
    console.log(obj.name);
} */

function printProp({ name}) {
    console.log(name);
}

printProp(user);