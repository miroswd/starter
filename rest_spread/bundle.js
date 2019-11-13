"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Operadores rest/spread - manipulação em objetos e vetores
// Necessário instalar um novo pacote >>> yarn add @babel/plugin-proposal-object-rest-spread
// No babelrc foi criado um array de plugins
// REST -> Pega o resto das propriedades
var usuario = {
  nome: 'Miro',
  idade: '19',
  empresa: 'Globo'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); // Crio uma variável que irá armazenar o nome
// Crio uma outra variável que irá armazenar as outras informações


console.log(nome);
console.log(resto);
var arr = [1, 2, 4, 5];
var a = arr[0],
    b = arr[1],
    x = arr.slice(2);
console.log(a);
console.log(b);
console.log(x);

var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}; //...params, pega o resto dos parầmetros


console.log(soma(12, 3, 4)); // Spread -> Repassa as informações para outra estrutura de dados

var array1 = [1, 2, 3];
var array2 = ["a", "b", "c"];
var array3 = [].concat(array1, array2);
console.log(array3);
var user1 = {
  username: 'miroswd',
  language: 'javascript'
}; // Copia todas as propriedades e altera os valores mencionados

var user2 = _objectSpread({}, user1, {
  username: 'miro'
});

console.log(user2);
