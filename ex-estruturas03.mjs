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
//console.log(lista.print())


function insertVal (val)
{
    let i = 0       //criei o i do contador aqui, pq em certo momento precisei printa-lo fora do loop, para achar o erro que dava...
    let busca = lista.peek(0) //Variável que recebe o primeiro Nodo
    let count = lista.count // Variável que recebe a quantidade de Nodos na lista.
    //Primeiro caso, se não há nenhum valor inserido ainda
    if(count === 0) 
    {
        //console.log("IF (primeiro valor a ser inserido)") //console.log para mostrar em qual "caso" o número foi inserido
        lista.insert(0, val)
    }
    //Segundo caso, quando o valor a ser inserido é menor que o primeiro Node
    else if(busca > val)
    {
        //console.log("ELSE IF 1 (valor a ser inserido é menor que o primeiro da lista)") //console.log para mostrar em qual "caso" o número foi inserido       
        lista.insert(0, val)
    }
    //Terceiro caso, quando o valor a ser inseriro fica no meio da lista encadeada.
    else if(busca < val && val < lista.peekTail())
    {
        //console.log("ELSE IF 2(valor a ser inserido é maior que o primeiro da lista e menor que o último node)") //console.log para mostrar em qual "caso" o número foi inserido" 
        for (i = 0; i < count; i++)
        {
            busca = lista.peek(i)
            //console.log({busca})
            if(busca > val)
            {
                //console.log({i})
                lista.insert(i, val)
                return -1
            }
        }
        //console.log({i}) 
    }
    //Quarto caso, quando o valor a ser inserido é maios que o último Node
    else if(busca < lista.peekTail())
    {
        //console.log("ELSE IF 3(valor a ser inserido é maior que o último node)") //console.log para mostrar em qual "caso" o número foi inserido" 
        lista.insertTail(val)
    }


}
console.log("1º Número = 25")
insertVal(25)
console.log(lista.print())

console.log("2º Número = 14")
insertVal(14)
console.log(lista.print())

console.log("3º Número = 19")
insertVal(19)
console.log(lista.print())

console.log("4º Número = 3")
insertVal(3)
console.log(lista.print())

console.log("5º Número = 11")
insertVal(11)
console.log(lista.print())

console.log("6º Número = 13")
insertVal(13)
console.log(lista.print())

console.log("7º Número = 99")
insertVal(99)
console.log(lista.print())

console.log("8º Número = 8")
insertVal(8)
console.log(lista.print())

console.log("9º Número = 155")
insertVal(155)
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

