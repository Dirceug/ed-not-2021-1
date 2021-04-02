/*
Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio,
a classe empresta algumas características aos objetos que serão criados a partir
dela, embora outras características dos objetos possam variar.
*/

// Por convenção, nomes de classes em JS se iniciam com Letras Maiúsculas

class FormaGeometrica {
    
    //Declaração dos atributos privados
    #base
    #altura
    #tipo

    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe, elas são denomidadas MÉTODOS.

    //Um método especial é o constructor(). Ele é chamado toda vez que se vai criar um novo objeto a partir da classe. No constructor(), podem ser feitas validações que, ao falhar, geram um Error. A Existência de um ou mais Errors impede que o objeto seja criado.
    constructor(base, altura, tipo)
    {
        //Invocar os setters das propriedades. As validações serão feitas por lá.
        this.base = base
        this.altura = altura
        this.tipo = tipo


        //Se chegamos até aqui, podemos prosseguir com a criação do objeto.

        //No caso atual, precisamos armazenar as informações de base, altura e tipo.
        //Em algum lugar, de modo que, ao sair do constructor(), essas informações não se percam.

        //Para tanto, armazenaremos essas informações em variáveis que pertencerão ao escopo do objeto criado a partir da classe. Essas variáveis especiais são denominadas ATRIBUTOS e diferenciam-se das variáveis comuns pela presença do prefixo this.

        //Atributo recebe valor do parâmetro de mesmo nome
        //ATRUBUTOS PÚBLICOS: podem ser acessados e modificados FORA da classe
        /*
        this.base = base
        this.altura = altura
        this.tipo = tipo

        console.log('Interno', this)
        */

        //ATRIBUTOS PRIVADOS: só podem ser acessados e modificados DENTRO da classe
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo

        //Selando o objeto. Isso impede que novos atributos públicos sejam adicionados ao objeto após a sua criação.
        Object.seal(this)
    }

    /*
        getters: métodos especiais que permitem expor o valor dos atributos privados de forma SOMENTE-LEITURA, sem permitir a sua moodificação.
    */
   get base()
   {
       return this.#base
   }
   get altura()
   {
       return this.#altura
   }
   get tipo()
   {
       return this.#tipo
   }

   /************************************************************************************
    * PROPRIEDADE CALCULADA: NÃO RETORNA UM VALOR ARMAZENADO EM UM ATRIBUTO PRIVADO. eM VEZ DISSO, CALCULA "AO VIVO" UM VALOR E O RETORNA
    */
  get area()
{
    switch(this.tipo)
    {
        case 'Q':
            return this.base * this.altura
        case 'T':
            return this.base * this.altura / 2
        default:
            return (this.base / 2) * (this.altura / 2) * Math.PI
    }
}
   /*
    setters: permitem que p mundo externo possa alterar o valor de atributos privados, caso o novo valor esteja de acordo com regras de negócio.
   */


   set base(valor)
   {//base deve ser numérica e seu valor maior que zero
    if(isNaN(valor) || valor <= 0)
        throw new Error('A base deve ser numérica e seu valor maior que zero.')

    this.#base = valor // O atributo #base recebe o novo valor validado.
   }
   set altura(valor)
   {//Altura deve ser numérica e seu valor maior que ZERO
    if(isNaN(valor) || valor <= 0)
        throw new Error('A altura deve ser numérica e seu valor maior de zero.')

    this.#altura = valor //O atributo #altura recebe o novo valor validado.
   }
   set tipo(valor)
   { //if(tipo !== 'Q' && tipo !== 'T' && tipo !== 'E')
    if(!['Q', 'T', 'E'].includes(valor))
        throw new Error('O Tipo deve ser Q, T, ou E.')

    this.#tipo = valor // O atributo #valor recebe o novo valor validade
   }

   /*
   Quando um atributo tem pelo menos um getter ou um setter associado a ele, passamos a nos referir a ele como PROPRIETADE do objeto.
   
   */
}

let forma1, forma2, forma3

//Criação de objetos a partir da classe
try
{
    forma1 = new FormaGeometrica(8, 4, 'Q')
    console.log('Externo', forma1)
}
catch(erro)
{
    console.log('ERRO: ', + erro.message)
}

try
    {    // Tenta executar as linhas comtidas
    //Se acontecer alguma exceção no bloco try, a execussão é desviada para o bloco catch
    forma3 = new FormaGeometrica('cebola', 'alho', 'X')
    console.log('Externo', forma3)
    }

catch(erro)//O Bloco catch() recebe o erro que foi gerado no bloco try
{    //Tratamento de excessão, Nesse caso, simplesmente exibiremos a mensagem de erro
    console.log('ERRO: ' + erro.message)
}

try
    {
    forma2 = new FormaGeometrica(2, 0.5, 'T')
    console.log('Externo', forma2)
    }
catch(erro)
{
    console.log('ERRO: ', + erro.message)
}

//forma1.base = 'abobrinha' /
forma1.base = 10  //Funcionar
forma1.altura = 8.5
console.log({
    base: forma1.base,      // Acesso ao getter base
    altura: forma1.altura,  // Acesso ao getter altura
    tipo: forma1.tipo       //Acesso ao getter tipo
})

//Funções, dentro de classes, passam a ser denominadas Métodos e perdem a palavra function
//forma1.base = 'çwjhfsad'    // Não funcionar

console.log('calcularArea() de forma1 (método):', forma1.calcularArea())
console.log('area de forma1 (propriedade calculada):', forma1.area)

