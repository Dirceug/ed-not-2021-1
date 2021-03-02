function buscaSequencial(vetor, fnComp)
{
    for(let i = 0; i < vetor.length; i++)
    {
        //Em vez de fazer a comparação dentro do vetor de buscas, terceirizamos essa comparação chamando uma função externa
        if(fnComp(vetor[i])) return i //Retorna a posição onde foi encontrado
    }
    return -1 //Valor de busca não encontrado
}
/*
function comparaNome(objNome, valorBusca)
{
    return objNome.first_name === valorBusca
}
*/
//const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
//const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

//console.log(buscaSequencial(objNomes, 'DIRCEU', comparaNome))
//console.log(buscaSequencial(objNomes, 'DIRCEU', comparaGrupo))

//Aqui ao inves de declarar uma arrow function e chama-la, ela já é declarada direto na chamada da função.
console.time('Buscando ZOZIMO')
console.log(buscaSequencial(objNomes, obj => obj.first_name ==='ZOZIMO'))
console.timeEnd('Buscando ZOZIMO')
console.time('Buscando LAMARA')
console.log(buscaSequencial(objNomes, obj => obj.first_name ==='LAMARA'))
console.timeEnd('Buscando LAMARA')
console.time('Buscando ORKUTILSON')
console.log(buscaSequencial(objNomes, obj => obj.first_name ==='ORKUTILSON'))
console.timeEnd('Buscando ORKUTILSON')

console.log('--------------------------------------------------------------------')

console.log(buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))

//Primeiro nome da lista que tem mais de 1000 pessoas registradas com ele
//let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

//console.log(objNomes[pos])

//Primeiro nome masculino da lista com mais de 10000 registrados

let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification ==='F')
console.log(objNomes[pos])
