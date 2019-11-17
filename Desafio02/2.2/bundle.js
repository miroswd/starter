"use strict";

var users = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var rocket = users.filter(function (user) {
  return user.empresa === 'Rocketseat' && user.idade >= 18;
});
console.log(rocket);
