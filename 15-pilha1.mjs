const texto = "Socorram-me, subi no ònibus em Marrocos"

const pilha = []

//Empilhamento
for(let i = 0; i < texto.length; i++)
{
    pilha.push(texto.charAt(i))
}
console.log(pilha)

//Inserindo alguns caractes no MEIO da pilha(PROIBIDO)
pilha.splice(16, 0, 'b', 'a', 't', 'a', 't', 'a')

//console.log(pilha)

let textoRev = ''

//Desempilhamento
while(pilha.length)  // 0 é avaliado como false; qualquer coisa diferente de 0 é avaliado como true
{
    textoRev += pilha.pop()
}

console.log(textoRev)