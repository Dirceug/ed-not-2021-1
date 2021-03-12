let trocas, pass, comps

function selectionSort(vetor, fnComp)
{
    trocas = 0, pass = 0, comps = 0
    function encontrarMenor(inicio)
    {
        let menor = inicio
        // Este loop vai até a ÚLTIMA posição
        for (let j = inicio + 1; j < vetor.length; j++)
        {
            //if(vetor[j] < vetor[menor]) menor = j
            // Na passagem para função de comparação, a ordem dos objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor [j])) menor = j
            comps ++
        }
        return menor
    }
    //Percurso até a PENÚLTIMA POSIÇÃO
    for(let i = 0; i <= vetor.length - 2; i++)
    {
        pass ++
        let menor = encontrarMenor(i + 1)

        //if(vetor[menor] < vetor[i]) 
        //Parâmetros em ordem invertida.
        if(fnComp(vetor[i], vetor[menor]))
        {
            [ vetor[menor], vetor[i]] = [vetor[i], vetor [menor]]
            trocas ++
        }
        comps ++
    }
}


import { candidatos } from './includes/candidatos-2018.mjs'

//console.log('Antes: ', candidatos)
console.time('Ordenando Candidatos...')
selectionSort(candidatos, (obj1, obj2) => obj1.NH_URNA_CANDIDATO > obj2.NH_URNA_CANDIDATO)
console.timeEnd('Ordenando Candidatos...')
console.log('Depois: ', candidatos)
console.log({trocas, pass, comps})


//função de comparação retorna treu caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO