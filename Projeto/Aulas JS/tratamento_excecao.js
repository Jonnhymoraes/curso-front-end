/* FUNÇÕES ASSÍNCRONAS

async -> usada para definir uma função como assíncrona, 
pode ser usada em qualquer tipo de função (regular, anonima
e arrow function).
await -> pausa a execução do código enquanto espera a Promise
ser resolvida.
 */

const p1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
           resolve("Resolveu p1");
        }, 3000);
    }
)}
  
const p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             reject("Rejeita p2");
          }, 1000);
      }
)}

/* function func() {
    p1().then(res => {
    console.log(res);   
    })
} */

async function func() {
    try {
    const res = await Promise.all([p1(), p2()]);
    console.log(res);
    } catch (error) {
    console.log(error);
    } /* finally {
        console.log("Final");
    } */
}

const func2 = a => {
    try {
       if(typeof a !== "string"){
           throw new Error("Argumento não é uma string");
       } 
       console.log(a);
    } catch (error) {
        console.log(error);
    }
}

func2(1);
