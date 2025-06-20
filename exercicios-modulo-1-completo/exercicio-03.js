/*
    3. Palavras Únicas
    Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
    todas as palavras únicas e exibi-las em um array.
*/

const prompt = require ('prompt-sync')();

let frase = "olá olá grande mundo imenso e azul nesta vasta escuridão espacial";

// separa em array de palavras
let palavras = frase.split(" ");
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let contador = 0;

    // Conta quantas vezes a palavra aparece no array
    for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] === palavra) {
            contador++;
        }
    }

    // Se apareceu só uma vez e ainda não está no array de únicas, adiciona
    if (contador === 1) {
        unicas.push(palavra);
    }
}

//Resultado
console.log(unicas);