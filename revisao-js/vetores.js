let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana']

//Vetor original
console.log(frutas)

// Retirar o Último elemento de um vetor
let ultimaFruta = frutas.pop()

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção em posição intermediária
//1º parâmetro -> a posição de remoção (contagem começa em zero)
//2º parâmetro -> quantidade de elementos a remover

let terceiraFruta = frutas.splice(2, 1) // Sempre retornará um vetor

console.log(frutas)
console.log(terceiraFruta)

//Inserindo elementos no FINAL do vetor
frutas.push('amora')//Pode inserir mais de um elemento ao mesmo tempo.
//Por exemplo: frutas.push('amora', 'jaca')

console.log(frutas)

//Inserir elementos no INICIO do vetor
frutas.unshift('jabuticaba')//Também pode inserir mais de um elemento ao mesmo tempo.
//Por ex. frutas.unshift('jabuticaba', 'mexerica')
console.log(frutas)

//Inserir elementos no MEIO do vetor
//Parâmetros do Splice para inserção
//Primeiro parâmetro = posição em que vamos trabalhar
//Segundo parâmetro = número de elementos a serem excluídos
//Terceiro parâmentro em diante = valores a serem acrescentados
frutas.splice(2, 0, 'pêssego') // Inserindo na terceira posição 
//Também funciona para inserir vários elementos ao mesmo tempo.
//Por ex: frutas.splice(2, 0, 'pêssego, 'jaca', 'nectarina')
console.log(frutas)

//Usando splice para SUBSTITUIÇÃO 
//parâmetros:
//1º-> Posição para substituição
//2º-> Quantidade de elementos que será substituidos
//3º-> O elemento que será incluído.
frutas.splice(4, 1, 'ameixa')//Substituição na quinta posição
console.log(frutas)


//Inserção múltipla com splice
frutas.splice(1, 0, 'nectarina', 'jaca')
console.log(frutas)
console.table(frutas)


console.log('------------------------------------------------------')
console.log('PERCURSO DE VETORES:')
console.log('1) For Tradicional')

//*******************************************************
//PERCURSO DE VETORES

//1) PERCURSO TRADICIONAL
//a) A contagem começa em zero
//b) Ocorre enquanto o contador for MENOR que p número de elemntos do vetor.
//c) length termina com TH 
//d) É o método mais tradicional, pois se necessário, é possivel fazer um percurso parcial (começar em algum elemento que não é o primeiro e terminar antes do fim.)
for(let i = 0; i < frutas.length; i++)//++ anda uma casa para a frente
{
    console.log(i, frutas[i])
}

console.log('***')
console.log('2) For Tradicional no caminho inverso')
//For tradicional no caminho inverso
//a) O contador inicia-se em lenght - 1
//b) A condição é contador MAIOR ou IGUAL a zero (0 - primeiro elemento)
for (let i = frutas.length - 1; i>=0; i--)//-- anda uma casa para trás
{
    console.log(i, frutas[i])
}

console.log('***')
console.log('3) Percurso com for..of')
// 3)Perurso com for..of
// a)Sempre percorre o vetor inteiro, na ordem natural, sem necessicade de uma variável contadora
// Variáveis:
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome de variável)
// frutas -> é o vetor a ser percorrido.

for (let f of frutas)
{
    console.log(f)
}

console.log('***')
console.log('4) forEach')
//4) Percurso com forEach
// forEach() recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor
//O nome do parâmetro da função pode ser qualquer nome válido de idendificador
frutas.forEach(function(elemento)
{
    console.log(elemento)
})

console.log('***')
console.log('4) forEach usando uma arrow function como parâmetro')
//O mesmo forEach(), usando uma arrow function como parâmetro.
frutas.forEach(elemento => console.log(elemento))
