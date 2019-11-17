const users = [
    {nome:'Diego', idade:23, empresa:'Rocketseat'},
    {nome:'Gabriel',idade:15,empresa:'Rocketseat'},
    {nome:'Lucas',idade:30,empresa:'Facebook'}
]; 

const google = users.find(item => item.empresa === 'Google')
if (google === undefined) {
    console.log('Nenhum usuário que trabalha na Google foi encontrado')
} else {
    google
}
