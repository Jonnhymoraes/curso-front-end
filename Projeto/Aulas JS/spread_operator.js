//ARRAY
/* const arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(...arr);

const copy = [...arr];

console.log(arr);
console.log(copy);
 */
//OBJECT
const obj = {
    name: 'Jonnhy',
    idade: 23
}

console.log(obj);

/* const newObj = {
    ...obj,
    profissao: "dev"
}
 */

const copy = { ...obj }

console.log(obj);
console.log(copy);

copy.profissao = "dev";

console.log(obj);
console.log(copy)

/* const obj1 = {name: 'Jonnhy'};
const obj2 = {idade: 23};

const newObj = {
    ...obj1,
    ...obj2
}

console.log(newObj); */


