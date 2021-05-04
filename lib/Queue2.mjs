/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações de enfileiramento (enqueue) e desinfileiramento (dequeue), a primeira ocorrendo no final da estrutura e a segunda no inicio da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO(First In, First Out - primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são tarefas de envolvem o processamento de tarefas por ordem de chegada.
*/

export class Queue
{
    #data //Armazenamento
    #head //Cabeça, inicio da estrutura
    #tail //Calda, final da estrutura

    constructor()
    {
        this.#data = {} //Objeto vazio (armazenamento)
        this.#head = 0  //Inicio da fila
        this.#tail = -1 //Final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(val)
    {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    dequeue()
    {
        if(this.empty) return undefined     //Se a fila já estiver vazia, retorna undefined para não afetar o posicionamento de #head

        let temp = this.#data[this.#head]   //Salva o elemento no início da fila
        delete this.#data[this.#head]       //Apaga o elemento no inicio da fila
        this.#head++                        //Chega o inicio da fila para a frente
        //console.log(this.#data, this.#head, this.#tail)
        return temp                         //Returna o valor armazenado na variável
        //console.log(this.#data, this.#head, this.#tail)

    }

    peek()
    {
        return this.#data[this.#head]
    }


        get empty()
    {
        return this.#tail - this.#head + 1 === 0
    }

    print()
    {
        return JSON.stringify(this.#data)
    }

}

/*

let fila = new Queue()

fila.enqueue("Leila")
fila.enqueue("Adalberto")
fila.enqueue("Cléber")
fila.enqueue("Paula")
console.log("_____________")

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())
console.log("_____________")

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
console.log("_____________")

atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
console.log("_____________")

fila.enqueue("Yara")
console.log(fila.print())
console.log("_____________")

fila.dequeue()
fila.dequeue()
fila.dequeue()

fila.enqueue("Ubiratan")
*/
