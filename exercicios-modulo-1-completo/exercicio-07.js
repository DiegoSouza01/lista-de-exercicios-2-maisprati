/*
    7. Mapeamento e Ordenação
    Dado um array produtos = [{ nome, preco }, ...], crie uma função que
    retorne um novo array apenas com os nomes, ordenados por preço
    crescente, usando map, sort.
*/

const prompt = require ('prompt-sync')();

//Declaração da array produtos
let produtos = [
    {nome: "Notebook", preco: 2500 },
    {nome: "Mouse", preco: 500},
    {nome: "Teclado", preco: 250}
];

// Função que retorna os nomes ordenados por preço crescente
function nomesOrdenadosPorPreco(produtos) {
    return produtos
        // ordena por preço
        .sort((a, b) => a.preco - b.preco)
        // extrai os nomes
        .map(p => p.nome);
}

// Testando
console.log(nomesOrdenadosPorPreco(produtos));