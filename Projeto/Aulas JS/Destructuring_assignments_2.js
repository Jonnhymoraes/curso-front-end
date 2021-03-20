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

/* function printProp({ idade: idade1}, {idade: idade2}) {
    console.log(idade1 + idade2);
}

printProp(user2);  */

const array = [1, 3, 6]

function getFirst([first]) {
    console.log(first);
}

getFirst(array);
