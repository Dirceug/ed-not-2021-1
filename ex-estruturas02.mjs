/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

//const palindromo = "subi no onibus"

const deque = new Deque()



function palindromoTeste(val)
{
    const palindromo = val
    let palindromo2 = palindromo.toUpperCase().trim()
    let omordnilap = ''
    let omordnilap2 = ''
    let palindromo3 = ''
    let casual
    let result = true

    for(let i = 0; i < palindromo2.length ; i++)
    {
        deque.insertBack(palindromo2.charAt(i))
        casual = palindromo2.charAt(i)
        if(casual != " ")
        {
            palindromo3 += casual
        }     
        
        //console.log(palindromo3)        
    }


    while(! deque.empty)
    {
        omordnilap = deque.removeBack().toUpperCase()
        if(omordnilap != " ")
        {
            omordnilap2 += omordnilap
        }

        //console.log(omordnilap2)
    }

    if(palindromo3 == omordnilap2)
    {
        console.log(`A expressão "${palindromo}" é um palindromo!`)
        result = true
    }
    else
    {
        console.log(`A expressão "${palindromo}" não é um palindromo!`)
        result = false
    }
}

//console.log({palindromo})
//console.log({omordnilap})
console.log(palindromoTeste("1001"))

