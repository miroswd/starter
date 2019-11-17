"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Métodos estáticos - Não precisa dar o new na Class

/*
                Nessse caso está dando erro
              a variável "não" foi declarada

class TodoList {
    constructor() {
        this.todos = [];
    }
    static addTodo(){
        Quando o método é estático, ele não enxerga
        o restante da classe, não enxerga o this.todos

        Serve para passar uma informação para esse método
        e retornar outro resultado, independente da classe


        this.todos.push('Café');
        console.log(this.todos);
    }

}

TodoList.addTodo();
*/
// Quando for ter um método estático, não terá constructor
// Será uma classe de auxílio
var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      //console.log(a+b)
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 3));
