// Desestruturação
const usuario = {
    nome:'Miro',
    idade:'19',
    endereco:{
        cidade:'São Paulo',
        estado:'SP'
    }
}

/* Buscando informações do usuário

const nome = usuario.nome
const idade = usuario.idade
const cidade = usuario.endereco.cidade

*/

const {nome, idade, endereco:{cidade}} = usuario;

// {nome das propriedades} de(=) objeto -> Isso para objetos
// [nome das propriedades] de(=) array  -> Isso para vetores


console.log(cidade)

/*
function mostraNome(usuario){
    console.log(usuario.nome)
}

mostraNome(usuario)*/


function mostraDados({nome, idade,endereco:{cidade}}){
    console.log(`${nome} possui ${idade} anos e mora em ${cidade}`)
}

mostraDados(usuario)