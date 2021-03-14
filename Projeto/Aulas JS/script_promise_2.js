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
           resolve("Resolveu p2");
        }, 1000);
    }
  )}

const p3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
           reject("Rejeitou p3");
        }, 3000);
    }
  )}

 Promise.race([p1(), p2(), p3()])
    .then(res => {
    console.log("Sucesso: ", res)
    })
    .catch(err => {
    console.log("Alguma promise deu erro:", err)
}) 

/* Promise.all([p1(), p2(), p3()])
    .then(res => {
    console.log("Todas as promises deram sucesso", res)
    })
    .catch(err => {
    console.log("Alguma promise deu erro:", err)
    }) */

/* p1().then(() => {
    console.log("Resolveu p1");
    p2().then(() => {
    console.log("Resolveu p2");
        p3().then(() => {
        console.log("Resolveu p3");
        }).catch(() => {
            console.log("Rejeitou p3");
        })
    })
}) */