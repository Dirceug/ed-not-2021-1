/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações de enfileiramento (enqueue) e desinfileiramento (dequeue), a primeira ocorrendo no final da estrutura e a segunda no inicio da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO(First In, First Out - primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são tarefas de envolvem o processamento de tarefas por ordem de chegada.
*/

export class Queue
{
    #data
    constructor()
    {
        this.#data = [] //Vetor Vazio
    }


    //Inserção na fila (enfileiramento)
    enqueue(val)
    {
        this.#data.push(val)
    }

    //Retirada da fila (desinfileiramento)

    dequeue()
    {
        return this.#data.shift()
    }

    // "Espiadinha" (no inicio)
    peek()
    {
        return this.#data[0]
    }

    get empty()
    {
        return this.#data.length === 0
    }

    print()
    {
        return JSON.stringify(this.#data) //transforma o conteudo de um vetor em string, para poder sem impresso no console.log()
    }
}