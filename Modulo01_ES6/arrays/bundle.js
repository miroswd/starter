"use strict";

// Operações com array
var array = [1, 2, 3, 4, 5, 6, 7];
/*
map -> Percorre o vetor e retornar algo de dentro
*/

var newArray = array.map(function (x, index) {
  // vetor.método(parametro(item,index))
  return index;
});
console.log(newArray);
/*
reduce -> Forma de consumir todo o vetor e transforma em único valor
*/

var sumArr = array.reduce(function (total, next) {
  // Cada vez que executar, pega o valor e total++
  return total + next; //0
  // + 1
  // = 1
  // + 3
  // = 4
});
console.log('Soma dos valores do array:' + sumArr);
/*
filter -> Condição para separar os items, retorna true or false
 */

var filter = array.filter(function (item) {
  // Retorna true se o novo item estará no novo array
  return item % 2 === 0;
});
console.log(filter);
/*
find -> Verificar se existe no array
*/

var find = array.find(function (item) {
  // Retorna o item, se o item existir no array
  return item === 20;
});
console.log(find);
