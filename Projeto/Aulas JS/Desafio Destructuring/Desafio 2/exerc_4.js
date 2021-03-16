const array1 = [1, 3, 6];
const array2 = [0, 2, 5];

function unirVet ([first], [second]) {
  console.log(...array1, ...array2);
}

unirVet(array1, array2);