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

const result = installments.reduce((acc, parcelas) => {
  return acc + parcelas.value;
}, 0);
console.log("Total das Parcelas: ", result.toFixed(2));