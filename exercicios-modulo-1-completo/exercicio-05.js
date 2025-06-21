/*
    5. Debounce
    Crie function debounce(fn, delay) que receba uma função fn e um delay
    em ms, retornando uma nova função que só executa fn se não for
    chamada novamente dentro do intervalo.
*/

const prompt = require ('prompt-sync')();

function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        // Cancela o último timer se a função for chamada antes do delay terminar
        clearTimeout(timerId);

        // Agenda uma nova chamada da função
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function escreverMensagem(msg) {
    console.log("Mensagem enviada:", msg);
}

let escreverComDebounce = debounce(escreverMensagem, 1000);

// Simulando chamadas rápidas (como digitação)
escreverComDebounce("olá");
escreverComDebounce("olá, tudo");
escreverComDebounce("olá, tudo bem?");
// Apenas a última será executada após 1 segundo sem novas chamadas
