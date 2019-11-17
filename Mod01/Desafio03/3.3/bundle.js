"use strict";

var nome = 'Miro';
var idade = 19;

var MostraUsuario = function MostraUsuario(nome) {
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return console.log(nome, idade);
};

MostraUsuario(nome, idade);
MostraUsuario(nome);
