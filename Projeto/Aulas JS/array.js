//CRIANDO E ACESSANDO ARRAYS
let arr = [23, 45, 66, 1];

console.log(arr[0]);
console.log(arr);

//ARRAY DE OBJETOS
let arra = [
  {
    nome:  "Érico",
    idade: 28
  },
  {
    nome: "Jonnhy",
    idade: 23
  }
]

console.log(arra)
console.log(arra.length)

/*MÉTODOS DE ARRAY
concat -> concatena 2 arrays.
push -> adiciona novo elemento no final do array.
join -> junta o array definindo símbolo p/ separar.
slice -> copia ou quebra o array.
reverse -> inverte o array.
pop -> remove o último elemento da lista.
shift -> remove o primeiro, faz o inverso do pop.
*/

let vet = ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"];

let newArray = vet.concat([1,2]);
console.log(newArray);

vet.push("palavra nova");
console.log(vet);

const newarray = vet.join(" | ");
console.log(newarray);

const newArra = vet.slice(1, 3);
console.log(newArra);

const newAr = vet.slice().reverse();
console.log(newAr);

const elem = vet.pop();
console.log(elem);
console.log(vet);