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
    if(count === 0) 
    {
        lista.insert(0, val)
    }
    else
    {
        for(let i = 0; i < count; i++)
        {
            if(count.data === val) lista.insert(i, val)
        }
        return -1
    }
    
}

insertVal(13)
console.log(lista.print())

insertVal(25)
console.log(lista.print())

insertVal(33)
console.log(lista.print())

insertVal(11)
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

