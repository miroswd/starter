"use strict";

// Desestruturação
var usuario = {
  nome: 'Miro',
  idade: '19',
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};
/* Buscando informações do usuário

const nome = usuario.nome
const idade = usuario.idade
const cidade = usuario.endereco.cidade

*/

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade; // {nome das propriedades} de(=) objeto

console.log(cidade);
/*
function mostraNome(usuario){
    console.log(usuario.nome)
}

mostraNome(usuario)*/

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log("".concat(nome, " possui ").concat(idade, " anos e mora em ").concat(cidade));
}

mostraDados(usuario);
