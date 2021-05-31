/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

const palindromo = "subi no onibus"

const deque = new Deque()


for(let i = 0; i < palindromo.length ; i++)
{
    deque.insertBack(palindromo.charAt(i))
}

console.log(deque)
console.log(deque.print())

let omordnilap = ""

while(! deque.empty)
{
    omordnilap += deque.removeBack()
}

console.log({palindromo})
console.log({omordnilap})

