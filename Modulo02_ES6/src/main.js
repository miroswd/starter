// Exercício - transformar em funções async/await

import axios from 'axios'

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve =>
    setTimeout(resolve,1000)
    );
/*
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
    
        delay().then(() => {
            console.log('2s');
        
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();
*/
/*
const umPorSegundo = async () => {
    await delay()
    console.log('1s')
    
    await delay()
    console.log('2s')
    
    await delay()
    console.log('3s')
}

umPorSegundo() */


// Usuário do github
class Api{
    static async getUserFromGithub(user) {
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response.data)
        } catch (err){
            console.log('Erro na API')
        }
    }
}

Api.getUserFromGithub('miroswd')
Api.getUserFromGithub('diego3g')


// Repositório do Github

class Github{
    static async getRepositories(repo){
        try {
            const response = await axios.get(`https://api.github.com/users/miroswd/${repo}`)
            console.log(response.data)
        } catch (err) {
            console.log('Esse repositório não foi encontrado')
        }
    }
}


Github.getRepositories('starter')


async function buscaUsuario(user){
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch(err){
        console.log('deu ruim')
    }

}

buscaUsuario('miroswdaaa')