/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from './lib/Deque.mjs'

//const palindromo = "subi no onibus"

const deque = new Deque()



function palindromoTeste(val)
{
    const palindromo = val      //Variável que recebe o texto digitado na chamada da função
    let palindromo2 = palindromo.toUpperCase().trim()   //Variavel que recebe o texto digitado em caixa alta e sem espaços no final e começo.
    let omordnilap = ''         //Variável que receberá o texto ao contrário
    let omordnilap2 = ''        //Variável que receberá o texto ao contrário, em caixa alta e sem espaços
    let palindromo3 = ''        //Variavel que recebe o texto digitado em caixa alta e sem espaços no final e começo, e entre as palavras
    let casual                  //Variável criada para tirar os espaços em branco no meio do texto.
    let result = true           //Variavel booleana que recebe se o texto é ou não um palídromo

    for(let i = 0; i < palindromo2.length ; i++)    //For para enquanto ouverem letras fazer tal ação
    {
        deque.insertBack(palindromo2.charAt(i))     //Deque recebe letra a letra o texto e empilha
        casual = palindromo2.charAt(i)              //Variavel que recebe o texto para tirar os espaços em branco
        if(casual != " ")                           //Se cada caracter não for um espaço em branco, insetir em palindromo3
        {
            palindromo3 += casual
        }     
        
        //console.log(palindromo3)        
    }


    while(! deque.empty)        //Enquanto deque não estiver vazio
    {
        omordnilap = deque.removeBack().toUpperCase()   //Variavel recebe letra a letra dispostos em ordem inversa
        if(omordnilap != " ")       //Se cada caractere não for um espaço em brando, inserir na variavel
        {
            omordnilap2 += omordnilap
        }

        //console.log(omordnilap2)
    }

    if(palindromo3 == omordnilap2)      //Se texto inserido e modificado for identico nas duas direções
    {
        console.log(`A expressão "${palindromo}" é um palindromo!`)     //imprimir avisando que é palindromo 
        result = true
    }
    else        //Se texto inserido e modificado não for identico nas duas direções
    {
        console.log(`A expressão "${palindromo}" não é um palindromo!`) //imprimir avisando que não é palindromo 
        result = false
    }
}

//console.log({palindromo})
//console.log({omordnilap})
console.log(palindromoTeste("Socorram me subi no onibus em marrocos"))        //Console.log que chama a função

