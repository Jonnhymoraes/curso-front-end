//then -> bloco de código para ser executado caso a função seja concluída com sucesso;
//catch -> bloco de código para ser executado caso a função seja concluída comm falha;
//finally -> bloo de código opcional para ser executado independente da função ser concluída com sucesso ou falha.

const P = new Promise(
  (resolve, reject) => {
    console.log("Iniciou promise");
    resolve();
//    reject();
  }
)

P
  .then(() => {
  console.log("Final com sucesso");
})
  .catch(() => {
  console.log("Final com erro");
})
  .finally(() => {
  console.log("Final");
})