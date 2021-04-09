/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/
import { candidatos } from './includes/candidatos-2018.mjs'

const a = (b, fnComp) => { // Início de uma declaração de arrow function que tem 'b' como args
    const c = (d, e) => { // Início de outra arrow funcion com 'd' e 'e' como args
        let f = e // delcaração da variável 'f' igual ao arg 'e'
        for(let g = e + 1; g < d.length; g++) if(fnComp(d[f],d[g])) f = g
        /*
            Declara a variável 'g' que recebe o arg 'e' + 1
            O loop desde 'g' até o final do vetor, com incremento de 1
            O loop percorre todo o vetor para encontrar a última posição do vetor           
        */
        return f
    }
    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1) 
        if(fnComp(b[h],b[i])) [b[h], b[i]] = [b[i], b[h]]
        /*
            faz um loop até a penúltima posição do vetor,
            chamando a função 'c' para cada 'mini intervalo'
            da posição h até o fim do vetor, onde se o valor da
            posição 'h' for maior que a posição 'i' (a última do intervalo),
            o algoritmo realiza a troca
        */
    }
    return b
}

// CONCLUSÃO: TRATA-SE DO SELECTION SORT
let ord = a(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) {
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE
})
console.log({ord})
