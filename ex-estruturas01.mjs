/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

    let armazenadorRestos = new Deque()
    let resultBinario = "" 
    console.log(armazenadorRestos.print())

function decimalparabinario(decimal)
{
    let rest
    console.log({rest, armazenadorRestos, resultBinario, decimal})

    if(decimal == 0 )
    {
        armazenadorRestos.insertBack()
        console.log({rest, decimal})
        console.log(armazenadorRestos.print())
    }

    while (decimal > 0 )
    {
        rest = Math.floor(decimal % 2)
        armazenadorRestos.insertBack(rest)
        decimal = Math.floor(decimal / 2)
        console.log({rest, decimal})
        console.log(armazenadorRestos.print())
    }

        if(decimal == 0 )
    {
        armazenadorRestos.insertBack(0)
        console.log({rest, decimal})
        console.log(armazenadorRestos.print())
    }


    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

    console.log(armazenadorRestos.peekBack())

   while(!armazenadorRestos.empty)
   {
       resultBinario = armazenadorRestos.removeBack().toString()
       resultBinario += resultBinario
   }

    console.log('  ')
return resultBinario
}

console.log(decimalparabinario(200))