/*
    4. Fatorial Recursivo
    Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
    um Error, e n === 0 retornando 1.
*/

const prompt = require ('prompt-sync')();

fa
function fatorial(n) {
    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo");
    }

    if (n === 0) {
        // Caso base: fatorial(0) = 1
        return 1;
    }
    // Chamada recursiva
    return n * fatorial(n - 1);
}

try {
    console.log(fatorial(5));
    console.log(fatorial(0));
    console.log(fatorial(1));
    console.log(fatorial(-3));
} catch (erro) {
    //Mensagem de erro
    console.log("Erro:", erro.message);
}

