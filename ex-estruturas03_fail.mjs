/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { LinkedList } from './lib/LinkedList.mjs'

let lista = new LinkedList()
console.log(lista.print())


function insertVal (val)
{
    let count = lista.count
    //Se não há nenhum valor inserido ainda
    if(count === 0) 
    {
        lista.insert(0, val)
    }
    else
    {
        console.log({count})
        console.log({val})
        let busca = lista.peekHead()
        for (let i = 0; i < count; i++)
        {
            if(busca > val)
            {
                lista.insert(i, val)
                busca = busca.next             
            }
            else if(busca < val)
                {
                    busca = busca.next  
                }
        }


    }


/*
    else
    {
        console.log({count})
        let busca = lista.peekHead()
        //console.log({busca})
        for(let i = 0; i < count; i++)
        {
            if(busca > val) 
            {
                lista.insert(i, val)
                busca = busca.next
                //console.log(lista.print())
            }
            else if(busca < val)
            {
                lista.insertTail(val)
                busca = busca.next
            }                 
        }
    }
*/
}

insertVal(13)
console.log(lista.print())

insertVal(11)
console.log(lista.print())

insertVal(55)
console.log(lista.print())
lista.insert(3, 55)

insertVal(12)
console.log(lista.print())

insertVal(10)
console.log(lista.print())

insertVal(66)
console.log(lista.print())

/*
insert(pos, val)
{
    let inserted = new Node(val)
    if(this.empty) {
        this.#head = inserted
        this.#tail = inserted
    }


}
*/

