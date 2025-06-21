/*
    6. Memoization
    Implemente function memoize(fn) que armazene em cache chamadas
    anteriores de fn (por argumentos), retornando resultados instantâneos em
    repetidas invocações.
*/

const prompt = require ('prompt-sync')();

function memoize (fn) {
    let cache = {};

    return function (...args) {
        // transforma os argumentos em string para usar como chave
        let key = JSON.stringify(args);

         if (cache[key] !== undefined) {
            console.log("Resultado vindo do cache");
            return cache[key];
        }
        // calcula
        let resultado = fn.apply(this,args);
        // guarda no cache
        cache[key] = resultado;         
        return resultado;
    };
}

// Declaramos o fatorial como função normal (sem chamar ela diretamente ainda)
let fatorial = null;

// Cria a função memoizada já atribuindo a fatorial
fatorial = memoize(function(n) {
    if (n === 0) return 1;
    // agora usa a versão memoizada
    return n * fatorial(n - 1);
});
// calcula
console.log(fatorial(5));
// cache
console.log(fatorial(5));
 // aproveita o cache do 5 para calcular 6
console.log(fatorial(6));