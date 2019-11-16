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
var google = users.find(function (item) {
  return item.empresa === 'Google';
});

if (google === undefined) {
  console.log('Nenhum usuário que trabalha na Google foi encontrado');
} else {
  google;
}
