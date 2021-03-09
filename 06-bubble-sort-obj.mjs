let totTrocas, pass, comps
function bubbleSort(vetor, fnComp)
{
    totTrocas = 0
    pass = 0
    comps = 0
    let trocas

    do 
    {
        pass++ //Conta quantas passadas foram necessárias
        trocas = 0 //Iniciando uma nova passada.
        //Percusso do vetor, da primeira até a PENÚLTIMA posição
        for(let i = 0; i <= vetor.length - 2; i ++)
        {
            //if(vetor[i] > vetor[i + 1])
            if(fnComp(vetor[i], vetor[i + 1]))
            {
                //TROCA DIRETA de JS via via desestuturação do vetor
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocas++
            }
            comps++
        }
        totTrocas += trocas
    } while (trocas > 0);
}

import { candidatos } from './includes/candidatos-2018.mjs'

console.log('Antes: ', candidatos)
console.time('Ordenando Candidatos...')
bubbleSort(candidatos, (obj1, obj2) => obj1.NH_URNA_CANDIDATO > obj2.NH_URNA_CANDIDATO)
console.timeEnd('Ordenando Candidatos...')
console.log('Depois: ', candidatos)
console.log({totTrocas, pass, comps})