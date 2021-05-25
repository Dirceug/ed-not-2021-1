/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Stack } from './lib/Stack.mjs'

    let armazenadorRestos = new Stack()
    let resultBinario = "" 
    let count = 0
    console.log(armazenadorRestos.print())

function decimalparabinario(decimal)
{
    let rest
    console.log({rest, armazenadorRestos, resultBinario, decimal})

    if(decimal == 0 )
    {
        armazenadorRestos.push()
        console.log({rest, decimal})
        console.log(armazenadorRestos.print())
    }

    while (decimal > 0 )
    {
        rest = Math.floor(decimal % 2)
        armazenadorRestos.push(rest)
        decimal = Math.floor(decimal / 2)
        count ++
        console.log({rest, decimal})
        console.log(count)
        console.log(armazenadorRestos.print())
        
    }

 
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

    console.log(armazenadorRestos.peek())

   for(let i = count; i > 0; i--)
   {
       resultBinario = armazenadorRestos.pop()
       resultBinario += resultBinario
       console.log('X')
   }

    console.log('')
return resultBinario
}
console.log("x")
console.log(decimalparabinario(200))