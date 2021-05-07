/*
ESTRUTURA DE DADOS DEQUE
- Deque = Double-Ended Queue(Fila de duas pontas)
- Fila é uma lista linear de acesso restrito, que permite apenas as operações de enfileiramento (insertFront/insertBack) e desinfileiramento (removeFront/removeBACK), acontecendo em qualquer uma das extremidades da estrutura.
- Como consequência, o deque NÃO SEGUE o principio FIFO(First In, First Out - primeiro a entrar, primeiro a sair).
- A principal aplicação dos Deques são situações em que filas precisam aceitar a inserção de ítens prioritários e a desistência do último ítem.

*/

export class Deque
{

    #data

    constructor()
    {
        this.#data = []
    }

    //insertFront = inserir na frente
    insertFront(val)
    {
        this.#data.unshift(val)
    }

    //insertBack = Inserir no fim
    insertBack(val)
    {
        this.#data.push(val)
    }

    //get Empty = Se estrutura está vazia
    get empty()
    {
        return this.#data.length === 0
    }

    //removeFront = Remoção do começo
    removeFront()
    {
        return this.#data.shift()
    }

    //removeBack = Remoção do fim
    removeBack()
    {
        return this.#data.pop()
    }

    //peekFront = espiada no começo
    peekFront()
    {
        return this.#data[0]
    }

    //peekBack = espiada no final
    peekBack()
    {
        return this.#data[this.#data.length-1]
    }

    print()
    {
        return JSON.stringify(this.#data)
    }
}