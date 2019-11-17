const users = [
    {nome:'Diego', idade:23, empresa:'Rocketseat'},
    {nome:'Gabriel',idade:15,empresa:'Rocketseat'},
    {nome:'Lucas',idade:30,empresa:'Facebook'}
]; 

let double = users.map(user => user.idade * 2)
for (var i = 0; i < users.length; i++ ){
    users[i].idade = double[i]
}

const fifty = users.filter(user => user.idade <= 50)
console.log(fifty)

