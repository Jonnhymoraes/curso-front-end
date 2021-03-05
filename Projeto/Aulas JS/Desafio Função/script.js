//FUNÇÃO ANÔNIMA
const subtrai = function (a, b){
    return a - b;
};

//ARROW FUNCTION
 const testaZero = x => x == 0 ? console.log("É zero") : console.log("Não é zero");

 //FUNÇÃO
function testaSinal (x, y) {
    if (subtrai(x, y) == 0){
        console.log("É zero");
    }
    else if(subtrai(x, y) && x > 0 && y < 0 || subtrai(x, y) && x < 0 && y > 0){
        console.log("Subtração entre números de sinais diferentes");
    }
    else
        console.log("Subtração entre números de mesmo sinal");
};