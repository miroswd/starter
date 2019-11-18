// Funções assíncronas
// Requisições a apis

/*
    Necessário instalar um novo plugin
    >>> yarn add @babel/plugin-transform-async-to-generator -D
    >>> yarn add @babel/polyfill -D
*/



// Criando uma promise manualmente -- delay
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')},2000)
})

/*
minhaPromise()
    .then(response => { // pega o retorno, caso não seja erro
        console.log(response)
}) */

///// Sempre tem q ter uma função por fora

// await -> mesma coisa que o .then

async function executaPromise(){
    /*
      minhaPromise().then(response => { console.log(response) })  

      o response, vira uma constante
      await = .then()
      nome da função que vai retornar a promise => minhaPromise()

    */


    //const response = await minhaPromise()  
    //console.log(response)

    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()


/// Com arrow function

const executa = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executa()   