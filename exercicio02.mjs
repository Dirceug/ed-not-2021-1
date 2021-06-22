/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

/*
b -> valor do nodo
c -> .próximo (nodo)
E -> LinkedList
f -> cabeça
g -> calda
h -> contador (quantidade de nodos)
i -> função remoçao posição
j -> posição a ser removida
k -> variável que recebe o valor removido
l -> variável "before" que recebe o nodo anterior
m -> variável "after" que recebe nodo seguinte

*/


//Criação do Nodo de LinkedList
class E {

    /* Código omitido */

    i(j) {
        //1º Caso: a Lista está vazia OU a posição informada é menor que zero OU maior que count -1  -> RETORNE UNDEFINED
        if(this.empty || j < 0 || j > this.#h - 1) return undefined

        // Criar variável que receberá valor do nodo
        let k

        //2º caso: Remoção do inicio da lista
        if(j === 0) {

            //Removido recebe this.#cabeça
            k = this.#f

            //this.cabeça recebe this.#cabeça.próximo
            this.#f = this.#f.c 

            //Atualizando o Tail em caso de remoção do último nodo
            if(this.#h === 1) this.#g = this.#f.c
        }

        //3º Caso, remoção de posição intermediária
        else {

            //criar variável que recebe this.cabeça
            let l = this.#f

            //Enquanto for rodar, variável cabeça recebe cabeça.próximo
            for(let i = 0; i < j - 1; i++) l = l.c

            //removido recebe cabeça.próximo
            k = l.c

            //criar variável "nodo seguinte" que recebe removido.próximo
            let m = k.c

            //cabeça.próximo recebe l "(nodo seguinte)
            l.c = m

            //Atualizando a Tail no caso de remoção do ultimo nodo
            //Se posição estritamente igual a contador menos 1, this.#próximo recebe l "nodo anterior"
            if(j === this.#h - 1) this.#g = l
        }

        //Decrementar contador
        this.#h--

        //Retornar removido.valor
        return k.b
    }

    /* Código omitido */

}