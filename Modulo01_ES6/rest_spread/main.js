// Operadores rest/spread - manipulação em objetos e vetores
// Necessário instalar um novo pacote >>> yarn add @babel/plugin-proposal-object-rest-spread
// No babelrc foi criado um array de plugins

// REST -> Pega o resto das propriedades

const usuario = {
    nome:'Miro',
    idade:'19',
    empresa:'Globo'
}

const {nome, ...resto} =usuario
// Crio uma variável que irá armazenar o nome
// Crio uma outra variável que irá armazenar as outras informações
console.log(nome)
console.log(resto)


const arr = [1,2,4,5];
const [a,b, ...x] = arr;

console.log(a)
console.log(b)
console.log(x)

const soma = (...params) =>{
    return params.reduce((total,next) => total + next);
}

//...params, pega o resto dos parầmetros
console.log(soma(12,3,4))


// Spread -> Repassa as informações para outra estrutura de dados

const array1 = [1,2,3]
const array2 = ["a","b","c"]

const array3 = [...array1,...array2]
console.log(array3)


const user1 = {
    username:'miroswd',
    language:'javascript'
}

// Copia todas as propriedades e altera os valores mencionados
const user2 = {...user1,username:'miro'}
console.log(user2)