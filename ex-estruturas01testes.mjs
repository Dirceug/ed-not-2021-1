/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

    let armazenadorRestosDeque = new Deque()
    let resultBinario = " " 
    //console.log(armazenadorRestosDeque.print())

function decimalparabinario(decimal)
{
    let rest
    console.log({rest, armazenadorRestosDeque, resultBinario, decimal})

    //Primeiro caso: Se número decimal igual a ZERO
    if(decimal === 0 )
    {
        armazenadorRestosDeque.insertFront()
        console.log({rest, decimal})
        console.log(armazenadorRestosDeque.print())
    }

    //Segundo caso: Se número decimal maior que 0
    while (decimal > 0 )
    {
        rest = decimal % 2
        armazenadorRestosDeque.insertFront(rest)
        decimal = Math.floor(decimal / 2)
        console.log({rest, decimal})
        console.log(armazenadorRestosDeque.print())
    }

    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

   while(!armazenadorRestosDeque.empty)
   {
       console.log({resultBinario})
       resultBinario = armazenadorRestosDeque.removeBack().toString()
       resultBinario += resultBinario
   }
return resultBinario
}

decimalparabinario(200)
console.log(resultBinario)
console.log(resultBinario)
