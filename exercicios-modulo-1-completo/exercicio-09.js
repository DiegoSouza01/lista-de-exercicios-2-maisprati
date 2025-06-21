/*
    9. Conversão Entre Formatos
    Escreva duas funções:

    ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    valor], ... ] e retorna o objeto equivalente.
    ○ objetoParaPares(obj) faz o inverso, retornando um array de
    pares.
*/

const prompt = require ('prompt-sync')();

// Converte array de pares em objeto
function paresParaObjeto (pares) {
    let obj = {};
    for (let [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

// Converte objeto em array de pares
function objetoParaPares(obj) {
    let pares = [];
    for (let chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

// Testes
let arrayDePares = [["nome", "Diego"], ["idade", 30], ["cidade", "São Paulo"]];
let objeto = { nome: "Diego", idade: 30, cidade: "São Paulo" };

console.log("Pares para objeto:");
console.log(paresParaObjeto(arrayDePares));

console.log("Objeto para pares:");
console.log(objetoParaPares(objeto));