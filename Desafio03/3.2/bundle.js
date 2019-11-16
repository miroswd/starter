"use strict";

var usuario = {
  nome: 'Miro',
  idade: 19
};

var mostraIdade = function mostraIdade(user) {
  return console.log(user.idade);
};

mostraIdade(usuario);
