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




