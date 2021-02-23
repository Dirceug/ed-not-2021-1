/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   1 Sergipe;SE;21915.08;2278308
   2 Alagoas;AL;27848.14;3322820
   3 Rio Grande do Norte;RN;52811.05;3479010
   4 Paraíba;PB;56469.78;3996496
   5 Pernambuco;PE;98148.32;9496294
   6 Ceará;CE;148920.47;9075649
   7 Piauí;PI;251577.74;3264531
   8 Maranhão;MA;331937.45;7035055
   9 Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}
estadosNe.push(estado1)
//Alagoas;AL;27848.14;3322820

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

let estado2 = {
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820
}
estadosNe.push(estado2)

//3 Rio Grande do Norte;RN;52811.05;3479010
let estado3 = {
   nome: 'Rio Grande do Norte',
   sigla: 'RN',
   area: 52811.05,
   populacao: 3479010
}
estadosNe.push(estado3)

//4 Paraíba;PB;56469.78;3996496
let estado4 = {
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}
estadosNe.push(estado4)

//5 Pernambuco;PE;98148.32;9496294
let estado5 = {
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}
estadosNe.push(estado5)

//6 Ceará;CE;148920.47;9075649
let estado6 = {
   nome: 'Ceará',
   sigla: 'CE',
   area: 148920.47,
   populacao: 9075649
}
estadosNe.push(estado6)

//7 Piauí;PI;251577.74;3264531
let estado7 = {
   nome: 'Piauí',
   sigla: 'PI',
   area: 251577.74,
   populacao: 3264531
}
estadosNe.push(estado7)

//8 Maranhão;MA;331937.45;7035055
let estado8 = {
   nome: 'Maranhão',
   sigla: 'MA',
   area: 331937.45,
   populacao: 7035055
}
estadosNe.push(estado8)

//9 Bahia;BA;564733.18;14812617
let estado9 = {
   nome: 'Bahia',
   sigla: 'BA',
   area: 564733.18,
   populacao: 14812617
}
estadosNe.push(estado9)

console.table(estadosNe)


/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

let densidade = (a, b) => a/b
/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.
*/
for (let i = 0; i < estadosNe.length; i++)
{
    let densidadeDemografica
    densidade(i.area, i.populacao)
    return densidadeDemografica
    i['Densidade Demográfica'] = densidadeDemografica
    delete i.sigla
}

console.table(estadosNe)


/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

const infoEstados = (objeto) => {for (let atributo in objeto) console.log(atributo)} 
infoEstados(estadosNE[1])

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo
/*
/*

*/

for (let f of estadosNE)
{
    infoEstados(f)
}

   /*6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/

let vazio = []
vazio.push(estado1.nome)
vazio.unshift(estado2.nome)
vazio.splice(1, 0, estado3.nome)
vazio.splice(2, 0, estado4.nome)
vazio.splice(3, 0, estado5.nome)
vazio.splice(1, 0, estado6.nome)
vazio.splice(5, 0, estado7.nome)
vazio.splice(6, 0, estado8.nome)
vazio.splice(1, 0, estado9.nome)


console.table(vazio)
