// Gerando Classes

// Criando herança 
class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}


class TodoList /* Extendendo a lista*/ extends List{
    constructor(){
        // Adicionando uma informação a mais
        super(); // Propriedade que chama a constructor da classe pai
        this.user = "Miro"
    }
    showUser(){
        console.log(this.user)
    }


/*    
            Removendo o conteúdo pois será
                    usado da List

    constructor(){
         Primeiro método a ser executado quando um novo 
           objeto é instanciado.

           Podemos criar ações/funções que são executadas
           ao instanciar um novo objeto/classe
                      
           Ou podemos iniciar variáveis, que é o caso desse
           exemplo        
        

        this.todos = []; // Array que armazerá tarefas
    }

    addTodo(){
        // Função responsável por adicionar/exibir tarefas
        this.todos.push('Fazer café');
        console.log(this.todos)
    }
*/
}


// Instanciando um objeto/classe

var MinhaLista = new TodoList(); // Variável que armazena uma nova lista

/*  Como a tarefa será adicionada ao array ?
    
    No index.html foi criado um botão, o qual terá a função de
    adicionar o todo ao todos
*/

document.querySelector('button#addTodo').onclick = function(){
    MinhaLista./*addTodo();*/add('Fazer café com açúcar')
}

MinhaLista.showUser(); // Chama o método da classe - sem o uso do botão
