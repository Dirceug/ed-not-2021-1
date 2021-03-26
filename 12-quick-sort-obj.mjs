let trocas, comps, pass 

function quicksort(vetor, fnComp, ini = 0, fim = vetor.length - 1)
{
    if(fim > ini)// Condição de saída das chamadas recursivas
    {
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai até a PENÚLTIMA POSIÇÃO
        for(let i = ini; i < fim; i++)
        {
            //if(vetor[i] < vetor[pivot])
            if(fnComp(vetor[pivot], vetor[i])) //Parêmetros Invertidos
            {
                comps++
                div++
                if(i !== div)
                {
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
            }
        }
        div++
        //Colcando o pivô no lugar definitivo.
        //if (vetor[pivot] < vetor[div])
        if (fnComp(vetor[div], vetor[pivot]))//Parâmetro invert
        {
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++
        //Ordena o subvetor a esqueda do pivô
        quicksort(vetor, fnComp, ini, div-1)

        //Ordenar o subvetor a direita do pivô
        quicksort(vetor, fnComp, div + 1, fim)
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'
trocas = 0, comps = 0, pass = 0
console.time('Ordenando Candidatos...')
//quicksort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por SG_UE depois por US_CARGO e, finalmente por NR_CANDIDATO
//const candidatosSP = candidatos.filter(obj => obj.SG_UE == 'SP')
quicksort(candidatos, (a, b) =>
{
    if(a.SG_UE === b.SG_UE) //Empate na UF
    {   //Empate no cargo, desempate no número do candidato
        if(a.DS_CARGO === b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO// 
        //UF Igual, cargos diferentes, diferencia por cargo
        else return a.DS_CARGO > b.DS_CARGO
    }
    //UFs diferentes, diferencia por UF
    else return a.SG_UE > b.SG_UE
})
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando Candidatos...')
console.log('depois', candidatos)
console.log({trocas, pass, comps, memoria})