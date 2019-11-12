// Const e let
// const -> Não pode ter o seu valor reatribuído igual a var
// let   -> Variáveis de escopo

/*
    É possível criar mutações
    const usuario = {nome:'miro'}
    usuario.nome = 'miroswd'
*/

function teste(x){
    // Variável de escopo -> dentro de chaves
    let y = 2
    if (x > 5) {
        console.log(x,y)
    }
}

teste(10)