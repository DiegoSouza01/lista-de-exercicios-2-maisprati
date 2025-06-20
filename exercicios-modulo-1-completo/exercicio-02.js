/* 
    2. Jogo de Adivinhação
    Escreva um script que gere um número aleatório de 1 a 100 e peça ao
    usuário, para adivinhar. Use while para repetir até acertar, contando
    tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

const prompt = require ('prompt-sync')();

// Gera um número aleatório entre 1 e 100 para o usuário adivinhar
let numeroSecreto = Math.floor (Math.random()* 100) +1;

//Declara as variaveis
let tentativa;
let tentativas = 0;

// Enquanto o palpite do usuário for diferente do número secreto, continue pedindo palpite
while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 100: "));
    tentativas++;

//Se o palpite for menor que o número secreto, indica que deve chutar um número maior
if (tentativa < numeroSecreto) {
    console.log("Mais Alto sargento!");

//Se o palpite for maior que o número secreto, indica que deve chutar um número menor
} else if (tentativa > numeroSecreto) {
    console.log("Mais baixo sargento!");

//// Se o palpite for igual ao número secreto, parabeniza e mostra o total de tentativas
} else {
    console.log (`Parabéns! você acerto com ${tentativas} tentativas.`);
    }
}
