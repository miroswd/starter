"use strict";

// Aplicadas em funções anônimas, sem nome
// function() ao invés de:
// function nome()
var arr = [1, 2, 3, 4];
/*
const newArr = arr.map(function(item){
    return item  * 2
})

console.log(newArr) */

var newArr = arr.map(function (item) {
  return item * 2;
}); // Quando tem apenas 1 parâmetro, não precisa de parenteses
// Quando o return é simples, basta remover o return, e colocar após =>
// const teste = () => 'string'
// const teste = () => 12
// const teste = () => [1,2,3,4]

var teste = function teste() {
  return {
    nome: 1
  };
}; // Para retornar um objeto, preciso passar dentro de parenteses


console.log(teste());
