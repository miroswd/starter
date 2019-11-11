"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Gerando Classes
var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    /* Primeiro método a ser executado quando um novo 
       objeto é instanciado.
        Podemos criar ações/funções que são executadas
       ao instanciar um novo objeto/classe
                  
       Ou podemos iniciar variáveis, que é o caso desse
       exemplo        
    */
    this.todos = []; // Array que armazerá tarefas
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      // Função responsável por adicionar/exibir tarefas
      this.todos.push('Fazer café');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}(); // Instanciando um objeto/classe


var MinhaLista = new TodoList(); // Variável que armazena uma nova lista

/*  Como a tarefa será adicionada ao array ?
    
    No index.html foi criado um botão, o qual terá a função de
    adicionar o todo ao todos
*/

document.querySelector('button#addTodo').onclick = function () {
  MinhaLista.addTodo();
};
