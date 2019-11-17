"use strict";

function mostraInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usuario,
      nome = _ref.nome,
      idade = _ref.idade;

  console.log("".concat(nome, " tem ").concat(idade, " anos"));
}

mostraInfo({
  nome: 'Miro',
  idade: 19
});
