//ESTRUTURAS DE REPETIÇÃO

let arr = ["palavra1", "palavra2", "palavra3", "palavra4"];

/*(let i = 0; i < 5; i++){
  console.log(i + ": oi");
}

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

console.log("Fim!");
*/

//FOR EACH

arr.forEach((elem) => {
   console.log(elem);
});

//OUTRA FORMA
const func = elem => {
  console.log(elem);
}

arr.forEach(func);

console.log("Fim!");