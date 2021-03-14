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
             resolve("Resolve p2");
          }, 1000);
      }
)}

/* function func() {
    p1().then(res => {
    console.log(res);   
    })
} */

async function func() {
    /* const res1 = await p1();
    const res2 = await p2(); */
    const res = await Promise.all([p1(), p2()]);
    console.log(res); 
}

func();
