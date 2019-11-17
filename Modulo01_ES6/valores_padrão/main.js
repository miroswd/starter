// Valores padrão
// NaN -> Retorna 'Infinito', não conseguiu identificar o valor
function soma(a=1,b=1){
    return a + b
}

const sub = (a=0,b=0) => a + b

console.log(soma(1)) 
console.log(sub(1)) 