// Aplicadas em funções anônimas, sem nome
// function() ao invés de:
// function nome()


const arr = [1,2,3,4]
/*
const newArr = arr.map(function(item){
    return item  * 2
})

console.log(newArr) */

const newArr = arr.map(item => item * 2)
// Quando tem apenas 1 parâmetro, não precisa de parenteses
// Quando o return é simples, basta remover o return, e colocar após =>