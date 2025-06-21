/*
    8. Agrupamento por Propriedade
    Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
    cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const prompt = require('prompt-sync')();

let vendas = [];

console.log("Cadastro de vendas (digite 'fim' para encerrar)");

while (true) {
    let cliente = prompt("Nome do cliente: ");

    if (cliente.toLowerCase() === 'fim') break;

    let total = parseFloat(prompt("Total da venda: R$ "));

    if (isNaN(total)) {
        console.log(" Valor inválido! Digite um número.");
        continue;
    }

    vendas.push({ cliente, total });
    console.log(" Venda registrada!");
}

// Função para agrupar os totais por cliente
function agruparTotaisPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        if (acumulador[venda.cliente]) {
            acumulador[venda.cliente] += venda.total;
        } else {
            acumulador[venda.cliente] = venda.total;
        }
        return acumulador;
    }, {});
}

// Exibe o resultado
console.log("Totais por cliente:");
console.log(agruparTotaisPorCliente(vendas));
