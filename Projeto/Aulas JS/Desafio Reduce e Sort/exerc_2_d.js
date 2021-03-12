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

const cargos =  {
  'estagiario': 1,
  'front-end': 2,
  'back-end': 3,
  'designer': 4
} 

const result = colaboradores.sort((a,b) => {
if (a.idade - b.idade === 0) {
	// faz os pesos
    return cargos[a.cargo] -  cargos[b.cargo]
}

return a.idade - b.idade 
}
)

console.log(result);