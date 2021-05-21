/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
      informação a segunda que guarda o endereço do nodo anterior; e a terceira, que guarda o endereço para o nodo seguinte na sequência.0
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro Ou do último nodo e percorrendo a sequência.
*/

class Node {
    constructor(val) {
        this.data = val     // Armazenamento de valor
        this.prev = null    // Ponteiro para o nodo anterior
        this.next = null    // Ponteiro para o nodo seguinte
    }
}

export class DoublyLinkedList{

    #head       // Primeiro nodo
    #tail       // Último nodo
    #count      // Quantidade de nodos

    constructor(){
        this.#head = null   //Não tem nada no início
        this.#tail = null   //Não tem nada no fim
        this.#count = 0     //Não tem nenhum nodo ainda
    }

    // Dada um posição, retorna o nodo daquela posição.
    #findNode(pos)
    {
        let node = null
        //Posição se encontra na primeira metade da lista
        if(pos < this.#count/2){
            node = this.#head
            for(let i = 0; i < pos; i++) node = node.next
        }
        //Posição se encontra na segunda metade.
        else 
        {
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) node = node.prev
        }
        return node
    }

    get empty()
    {
        return this.#count === 0
    }

    insert(pos, val)
    {
        const node = new Node(val)
        //1º caso: lista vazia
        if(this.empty){
            this.#head = node
            this.#tail = node
        }
        //2º caso: Inserção no inicio da lista
        else if(pos === 0)
        {
            node.next = this.#head
            this.#head.prev = node
            this.#head = node       //Precisa ser a última
        }
        //3º caso: Inserção no final da lista
        else if(pos >= this.#count)
        {
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail = node       //Precisa ser a última
        }
        //4º caso: inserção em posição intermediária
        else
        {
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev
            before.next = node      //O nodo anterior à posição passa a apontar para o novo nodo.
            node.prev = before      //O novo nodo aponta de volta para o anterior
            node.next = nodePos     //O novo nodo passa a apontar para o nodo que ocupava a posição
            nodePos.prev = node     //O antigo nodo da posição aponta de volta para o novo nodo
        }
        this.#count++
    
    }

    inserHead(val){     //Atalho para inserção no inicio
        this.inser(0,val)
    }

    insertTail(val){    //Atalho para inserção no final
        this.insert(this.#count, val)
    }

    remove(pos)
    {

        //1º caso: Lista vazia ou posição fora dos limites
        if(rhis.empty || pos < 0 || pos > this.#count - 1)return undefined

        let removed
        //2º caso: Remoção no inicio
        if(pos === 0)
        {
            removed = this.#head
            this.#head = removed.next
            //Se existir um nodo válido como head
            if(this.#head) this.#head.prev = null

            //Remoção do último nodo: head é null, tail tem que ser também
            if(this.#count === 1 ) this.#tail = null
            {
                removed = this.#head
                this.#head = removed.next
                this.#head.prev = null
            }
            //3º caso: remoção no final
            else if(pos === this.#count-1){
                removed = this.#tail
                this.#tail = removed.prev//Se existir um nodo válido como tail, ele não terá sucessor
                if(this.#tail) this.#tail.next = null
                //Remoção do último nodo: tail é null, head tem que ser também
                if(this.#count === 1 ) this.#head = null
            }
            this.#count--
        }
        return removed.data

    }

    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' <-> '
            node = node.next
        }
        return output + `) count: ${this.#count}`
    }

        printReverse() {
        let output = '( '
        let node = this.#tail
        for(let i = this.#count - 1; i >= 0; i--) {
            output += `[${i}]: ${node.data}`
            if(node.prev) output += ' <-> '
            node = node.prev
        }
        return output + `) count: ${this.#count}`
    }

}


const lista = new DoublyLinkedList()

console.log(lista.print())

lista.insert(0, 'Odorico')// Primeiro nodo (lista vazia)
console.log(lista.print())
console.log(lista.printReverse())
console.log("")
lista.insert(1, 'Gercina')// Inserção no final
console.log(lista.print())
console.log(lista.printReverse())
console.log("")
lista.insert(0, 'Temistocles')// Inserção no inicio
console.log(lista.print())
console.log(lista.printReverse())
console.log("")
lista.insert(1, 'Deusdete')// Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())
console.log("")
lista.insert(2, 'Alípio')// Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())
console.log("")
lista.insert(2, 'Cremilda')// Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())
console.log("")