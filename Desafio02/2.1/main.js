const users = [
    {nome:'Diego', idade:23, empresa:'Rocketseat'},
    {nome:'Gabriel',idade:15,empresa:'Rocketseat'},
    {nome:'Lucas',idade:30,empresa:'Facebook'}
]; 

const idades = users.map(objeto => objeto.idade)
console.log(`Idades: ${idades}`)

