# 📝 Lista de Exercícios- Estudando as estruturas - +PraTi & Codifica Edu​

## ✅​Pré-Requisitos:
Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado na sua máquina. Recomenda-se a versão 14 ou superior.

## 📌​Instalação
1. Clone este repositório:
```bash
git clone https://github.com/DiegoSouza01/lista-de-exercicios-2-maisprati.git
cd seu-repositório
```

2. Instale a dependência necessária:
```bash
    npm install
```

📌 Neste projeto será utilizado apenas a biblioteca prompt-sync para permitir entrada de dados pelo terminal.

## 📀 Execução:

Cada exercício está em um arquivo separado (por exemplo: exercicio-01.js, exercicio-02.js, etc.).

```
/
├── exercicios-modulo-01-completo
|   ├── exercicio-01.js
|   ├── exercicio-02.js
|   ├── exercicio-03.js
|   ├── ...
├── package.json
└── README.md
```

**✅​Certifica-se de estar no diretório certo antes da execução de qualquer comando.**

## 🎛️ Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Crie a função `ehDataValida(dia, mes, ano)` que retorne `true` se os valores formarem uma data real (considerando meses com 28-31 dias, anos bissextos para fevereiro) e `false` caso contrário.

2. **Jogo de Adivinhação**  
   Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário para adivinhar. Use `while` para repetir até acertar, contando as tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

3. **Palavras Únicas**  
   Dada uma string (exemplo: `"olá olá mundo mundo"`), use `if/else` e `for` para extrair todas as palavras únicas e exibi-las em um array.

---

## 😶‍🌫️ Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Implemente `function fatorial(n)` de forma recursiva.  
   - Se `n < 0`, lance um `Error`.  
   - Se `n === 0`, retorne `1`.

5. **Debounce**  
   Crie `function debounce(fn, delay)` que receba uma função `fn` e um `delay` em milissegundos, retornando uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo.

6. **Memoization**  
   Implemente `function memoize(fn)` que armazena em cache as chamadas anteriores de `fn` (por argumentos), retornando resultados instantâneos em chamadas repetidas.

---

## 🗃️ Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Dado um array `produtos = [{ nome, preco }, …]`, crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando `map()` e `sort()`.

8. **Agrupamento por Propriedade**  
   Em `vendas = [{ cliente, total }, …]`, use `reduce()` para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus `total`.

9. **Conversão Entre Formatos**  
   Escreva duas funções:  

   - `paresParaObjeto(pares)`: recebe um array de pares `[[chave, valor], …]` e retorna o objeto equivalente.  
   - `objetoParaPares(obj)`: faz o inverso, retornando um array de pares.

---
