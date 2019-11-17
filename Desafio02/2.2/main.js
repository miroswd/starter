const users = [
    {nome:'Diego', idade:23, empresa:'Rocketseat'},
    {nome:'Gabriel',idade:15,empresa:'Rocketseat'},
    {nome:'Lucas',idade:30,empresa:'Facebook'}
]; 

const rocket = users.filter(user => {
    return user.empresa === 'Rocketseat' && user.idade >= 18
});

console.log(rocket)
