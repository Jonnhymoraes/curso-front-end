let x = 20;

const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve(20);
      }, 3000);
  }
)}

const resposta = p();
resposta()
  .then(res => {
  x = res;
  console.log("Exec com sucesso", x);
})
  .catch(err => {
  console.log(err);
})