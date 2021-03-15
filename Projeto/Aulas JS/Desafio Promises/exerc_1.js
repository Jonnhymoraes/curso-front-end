let x = 51

const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x > 0){
                resolve("O número é positivo");
            }
            else {
                reject("Erro: número negativo");
            }
        }, 1000);
    }
)}
  
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x % 2 == 0){
                resolve("O número é par");
            }
            else {
                reject("Erro: O número não é par");
            }
        }, 2000);
    }
)}
  
const p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof x === 'number'){
                resolve("x é um número");
               }
               else {
                reject("Erro: x não é um número");
               }
        }, 3000);
     }
)}

Promise.all([p1(), p2(), p3()])
.then(res => {
  console.log("Todas as promises deram sucesso: ", res);
})
.catch(erro => {
  console.log("Alguma promise deu erro: ", erro)
});