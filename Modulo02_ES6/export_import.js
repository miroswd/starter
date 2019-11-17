export function soma(a,b){
    return a + b
}
// O nome da função deverá ser o mesmo na importação

// import functon {soma as somaFunction} from './export' -> maneira de modificar o nome


// import {soma} from './export_import'

export default function sub(a,b){
    return b - a;
} // Para arquivos com uma única funcionalidade

// import sub from './export_import' -> não precisa das chaves 

// Com o export default, o nome da função não precisa ser o mesmo


// Quando o arquivo estiver mesclado com funções defaults

// import soma, {sub} from './funcoes'

// import * as funcoes from './funcoes' -> todas as funcoes