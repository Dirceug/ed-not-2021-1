/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

import { candidatos } from './includes/candidatos-2018.mjs'

const a = (b, ordenados) => {//declaração da função de Selection Sort
    const c = (d, e) => {//Declaração da função encontrar menor
        let f = e //Cria a posição de inicio
        for(let g = e + 1; g < d.length; g++)//Loop que vai até a ultima posição
        {
            if(d[g] < d[f]) f = g //Verifica se a posição do vetor é menor que que a marcação como menor e troca de mosição se for o caso.
        }
        return f //retorna o menor valor
    }
    for(let h = 0; h < b.length - 1; h++) //Percorre até a penúltima posição
    {
        let i = c(b, h + 1) //Cria função de encontrar menor
        if(b[h] > b[i]) //Avalia se posição marcada como menor e maior que posição atual do loop
        {
            [b[h], b[i]] = [b[i], b[h]] //troca de lugar se if for verdadeiro
        }
    }
}



let ordenados = a(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE)
    {
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE
})

console.log(candidatos)
a(candidatos)
console.log(candidatos)