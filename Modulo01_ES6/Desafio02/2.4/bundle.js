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

var _double = users.map(function (user) {
  return user.idade * 2;
});

for (var i = 0; i < users.length; i++) {
  users[i].idade = _double[i];
}

var fifty = users.filter(function (user) {
  return user.idade <= 50;
});
console.log(fifty);
