let x = 51;

const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x > 0){
                resolve("Executado com sucesso!");
                console.log("O número é positivo")
            }
            else {
                reject("Erro: número negativo");
            }
        }, 2000);
    }
)}
  
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x % 2 == 0){
                resolve("Executado com sucesso!");
                console.log("O número é par");
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
                resolve("Executado com sucesso!");
                console.log("x é um número")
               }
               else {
                reject("Erro: x não é um número");
               }
        }, 1000);
     }
)}

async function teste() {
    try {
        const res = await Promise.all([p1(), p2(), p3()]);
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Final da Execução");
    } 
}

teste();