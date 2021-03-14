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

const total_paid = installments.reduce((acc, parcelas) => {
  if (parcelas.status === 'Pago') {
      acc += parcelas.value;
  }
  return acc;
}, 0);

const total_open = installments.reduce((acc, parcelas) => {
  if (parcelas.status === 'Aberto') {
      acc += parcelas.value;
  }
  return acc;
}, 0);

console.log("total_paid: ", total_paid.toFixed(2));
console.log("total_open: ", total_open.toFixed(2));