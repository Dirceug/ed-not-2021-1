/*
MERGE SORT

No precesso de ordenação, esse algoritmo "desmonta" o vetor original contendo N elementos até obter N vetores de apenas um elementos cada um.
Em 
*/

lets comps, divisoes, juncoes

function mergeSort(vetor)
{

    function mesclar(vetEsq, vetDir)
    {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length)
        {
            if(vetEsq[pEsq] < vetDir[pDir])
            {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else
            {
                vetRes.push(vetDir[pDir])
                pDir++
            }~
            comps++
        }
        //Descobrir de qual lado sobrou
        let sobra 
        //Sobra a Esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        //Sobra a direita
        else  sobra = vetDir.slice(pDir)
        //retorna vetor de resultado = sobra
        return[...vetRes, ...sobra]
    }
   //Para ser "desmontado", o vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1)
    {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada.
        //Inclusive até a posição final (exclusive)
        let vetEsq = vetor.slice(0, meio)
        //Caso o segundo parâmetro do slice() seja omitido, serão cpiados os elementos desde a posição informada até a posição final.
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir})
        // Chamadas recursivas a função.
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++
        //console.log({vetFinal})
    }
    return vetor  // Vetor de 1 elemento, não modificado.
}

//let nums1 = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let numsOrd = mergeSort(nums1)
//mergeSort(nums1)
//console.log({numsOrd})

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let numsOrd = mergeSort(nums)
console.log({numsOrd})
console.log({comps, divisoes, juncoes})