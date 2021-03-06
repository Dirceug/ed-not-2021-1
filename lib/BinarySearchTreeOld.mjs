/*
ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
- Árvore ~> é uma estrutura de dados não-linear, hierárquica,
que é formada recursivamente por outras subárvores.
- Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
diretos).
- Árvore binária de busca ~> é uma árvore binária otimizada para a
operação de busca binária. Por isso, na inserção, os valores são
colocados já em ordem.
*/

class Node {
    constructor (val){
        this.data = val
        this.left = null        //Ponteiro para a sub-árvore à esquerda
        this.right = null       //Ponteiro para a sub-árvore à direita
    }
}

export class binarySearchTreee {

    #root       //Raiz da árvore

    constructor(){
        this.#root = null
        console.log(this.#root)
    }

    insert(val){

        const node = new Node(val)
        //1º caso: Árvore vazia
        if(this.#root === null) this.#root = node

        //2º caso: inserção recursiva ~> percorre a árvore recursivamente para encontrar a posição do primeiro nodo
        else this.#insertNode(node, this.#root)
        console.log(this.#root)
    }

    #insertNode(node, root) {

    }
}

const arvore = new binarySearchTreee()

arvore.insert(41)