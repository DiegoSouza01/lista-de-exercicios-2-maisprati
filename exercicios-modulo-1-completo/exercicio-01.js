/*  
    1. Validação de Datas
    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
    formarem uma data real (meses de 28–31 dias, ano bissexto para
    fevereiro) e false caso contrário.
*/

const prompt = require('prompt-sync')();

//declarando a função ehDataValida
function ehDataValida (dia, mes, ano) {
        if (mes < 1 || mes > 12) {
           return false;
        } if (dia < 1) {
            return false;
        }

//Declarando a variavel
let diaDoMes;

    // Verifica se é ano bissexto
    if (mes === 2) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            diaDoMes = 29;
        } else {
            diaDoMes = 28;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diaDoMes = 30;
    } else {
        diaDoMes = 31;
    }

    if (dia > diaDoMes) {
        return false;
    }
    return true;
}


//Retorno do dia, mes e ano
let dia = parseInt(prompt("Digite o dia: "));
let mes = parseInt(prompt("Digite o mês: "));
let ano = parseInt(prompt("Digite o ano: "));

console.log(ehDataValida(dia, mes, ano));