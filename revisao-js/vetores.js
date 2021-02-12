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