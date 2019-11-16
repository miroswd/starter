const nome = 'Miro';
const idade = 19;

const MostraUsuario = (nome, idade = 18) => console.log(nome,idade);

MostraUsuario(nome,idade)
MostraUsuario(nome)
