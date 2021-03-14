const installments = [
  {
    installment_number: 1,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 2,
    value: 139.88,
    status: 'Pago'
  },
  {
    installment_number: 3,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 4,
    value: 182.37,
    status: 'Aberto'
  },
  {
    installment_number: 5,
    value: 133.93,
    status: 'Aberto'
  }
]

//DEIXEI COMENTADO A FORMA QUE TEM O NÚMERO DE PARCELAS E A PARCELA
//var array = [{"installment_number": 1,
//      "value": 123.45},{"installment_number": 2,
//      "value": 139.88}, {"installment_number": 3,
//      "value": 123.45}, {"installment_number": 4,
//      "value": 182.37}, {"installment_number": 5,
//      "value": 133.93}]

//SOMENTE OS VALORES DAS PARCELAS
var array = [{"value": 123.45},{"value": 139.88}, {"value": 123.45}, {"value": 182.37}, {"value": 133.93}]

const result = array.slice().sort((a,b) => {
return b.value - a.value;
})

console.log("Parcelas de forma decrescente: ", result); 
