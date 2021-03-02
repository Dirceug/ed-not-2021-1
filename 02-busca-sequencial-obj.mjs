function buscaSequencial(vetor, valorBusca, fnComp)
{
    for(let i = 0; i < vetor.length; i++)
    {
        //Em vez de fazer a comparação dentro do vetor de buscas, terceirizamos essa comparação chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i //Retorna a posição onde foi encontrado
    }
    return -1 //Valor de busca não encontrado
}
/*
function comparaNome(objNome, valorBusca)
{
    return objNome.first_name === valorBusca
}
*/
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'DIRCEU', comparaNome))
console.log(buscaSequencial(objNomes, 'DIRCEU', comparaGrupo))

//Aqui ao inves de declarar uma arrow function e chama-la, ela já é declarada direto na chamada da função.
console.log(buscaSequencial(objNomes, 'FAUSTO', (obj, busca) => obj.first_name ===busca))
console.log(buscaSequencial(objNomes, 'MARIA', (obj, busca) => obj.group_name ===busca))
