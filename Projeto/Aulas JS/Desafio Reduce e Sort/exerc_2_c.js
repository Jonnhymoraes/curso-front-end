const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
const pesos ={
    'back-end': 3,
    'front-end': 2,
    'designer': 4,
    'estagiario': 1
};

const result = colaboradores.slice().sort((a,b) => {
  return pesos[a.cargo] - pesos[b.cargo];
});

console.log(result);