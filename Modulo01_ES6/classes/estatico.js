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

class Matematica{
    static soma(a,b){
        //console.log(a+b)
        return a+b
    }
}

console.log(Matematica.soma(1,3))