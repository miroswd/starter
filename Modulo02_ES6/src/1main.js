// Utilizando a biblioteca axios - acessa API

/*
>>> yarn add axios
*/

import axios from 'axios';

class Api {
    static async getUserInfo(username){
    try {   
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response);
    } catch(err){
        console.warn('Erro na API')
    }
        
    }
}

Api.getUserInfo('miroswd')
Api.getUserInfo('miroswda')


/*
    Promises -> .then .catch
    no async await -> try {} catch (err){}
*/