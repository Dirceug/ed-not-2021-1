let comps //Comparações

function buscaBinaria(vetor, fnComp)
{
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio
    while (fim >= ini)
    {
        meio = Math.floor((fim + ini ) / 2)
        switch(fnComp(vetor[meio]))
        {
            case 0:     //ACHOU
                comps++
                return meio
            case 1:     //Valor de busca é MAIOR
                comps += 2
                ini = meio + 1
                break
            default:     //Valor de busca pe MENOR
                comps += 2
                fim = meio - 1
        }
    }
}

const comparaNome = (obj, busca = 'FAUSTO') =>
{
    if (busca === obj.first_name) return 0
    else if ( busca < obj.first_name) return -1
    else return 1
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj, busca = 'ZOZIMO') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd("Buscando ZOZIMO")

console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd("Buscando LAMARA")

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (obj, busca = 'ORKUTILSON') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps})
console.timeEnd("Buscando ORKUTILSON")
