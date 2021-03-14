let x = 20;

const P = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      if (x > 10){
         resolve(20);
      } else{
        reject("Ocorreu um erro");
      }
    }, 3000);
  }
)

console.log("antes: ", x);

P
  .then(res => {
  x = res;
  console.log("Exec com sucesso", x);
})
  .catch(err => {
  console.log(err);
})


console.log("depois: ", x);