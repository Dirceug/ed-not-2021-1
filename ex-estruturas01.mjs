/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Stack } from './lib/Stack.mjs'

    let armazenadorRestos = new Stack()
    let resultBinario = "" 
    let binario = " "
    let count = 0
    //console.log(armazenadorRestos.print())

function decimalparabinario(decimal)
{
    let rest //Variável que receberá o resto das divisões
    //1º Caso, se o número digitado for igual a ZERO
    if(decimal == 0 )
    {
        binario = '0'
    }

    //2º Caso, se ´número inserido for maior que ZERO
    while (decimal > 0 )
    {
        rest = decimal % 2      //Variável de resto recebe a sobra da divisão
        armazenadorRestos.push(rest)    //Insere a sobra da divisão no vetor
        decimal = Math.floor(decimal / 2)   //Divide p númerop por 2
        count ++        //Acrescenta mais um no contador.
    }

    for(let i = count; i > 0; i--) //Enquanto o houver
    {
        resultBinario = armazenadorRestos.pop()
        binario += resultBinario.toString()

    }

return binario
}

console.log(decimalparabinario(0))
//console.log(binario)