/*
ESTRUTURA DE DADOS LISTA ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node {
    constructor(val) {
        this.data = val     //Armazenamento do valor
        this.next = null    //Ponteiro para o próximo nodo.
    }
}

export class LinkedList
{
    #head   // Nodo Inicial da Lista
    #tail   // Nodo Final da Lista
    #count  // Quantidade de nodos na Lista

    constructor() {
        this.#head = null   // Não tem nada no inicio
        this.#tail = null   // Não tem nada no fim
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty() {
        return this.#count === 0
    }

    //  Inserção em uma posição arbitrária
    insert(poss, val) {

        //Cria o nodo para abrigar o valor e o endereço do p´roximo nodo
        let inserted = new Node(val)

        //1º caso: inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }
        //2º caso: Inserção no início da lista
        else if(poss === 0){
            // O sucessor do nodo inserido é o atual head
            inserted.next = this.#head 
            // O novo head passa a ser o nodo inserido
            this.#head = inserted
        }
        //3º caso: Inserção no final d alista
        else if(poss >= this.#count) {
            //O sucessor do tail atual passa a ser o nodo inserido
            this.#tail.nex = inserted
            // O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }
        this.#count ++

        //console.log({head: this.#head, tail: this.#tail, count: this.#count})

    }

    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' -> '
            node = node.next
        }
        return output + ' )'
    }

}

let lista = new LinkedList()
console.log(lista.print())
lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())