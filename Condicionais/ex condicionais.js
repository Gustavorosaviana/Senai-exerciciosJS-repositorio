// NIVEL BASICO
// // 1. Idade
// const idade = Number(prompt("Digite sua idade: "));

// if(idade >= 18) {
//     alert("Você é maior de idade!")
// } else{
//     alert("Você é menor de idade!");
// }
// 1. Número + ou -
// let numero = Number(prompt("Digite um numero: "));

// if(numero > 0) {
//     alert("Número positivo")
// } else{
//     alert("Número negativo")
// }

// 1. Aprovação em uma prova
// let nota = Number(prompt("Digite sua nota: "));
// if(nota >= 60) {
//     console.log("Aprovado!");
// } else {
//     console.log("Reprovado!");
// }

// 1. Número 0, positivo ou negativo
// let numero = Number(prompt("Digite um numero: "));
// if(numero > 0) {
//     alert("Número positivo")
// } 
// else if(numero === 0) {
//     alert("Número zero")
// }
// else{
//     alert("Número negativo")
// }

// 1. Classificação de Idade
// const idade = Number(prompt("Digite sua idade: "));

// if(idade >=0 && idade <=12) {
//     alert("Você é uma criança!")
// } else if(idade >=13 && idade <=17) {
//     alert("Você é um adolescente!")
// } else if(idade >=18) {
//     alert("Você é um adulto!")
// } else{
//     alert("Insira um número positivo!")
// }

// 1. Impar ou Par
// let numero = Number(prompt("Digite um número:"));

// if (numero % 2 === 0) {
//     alert("O número é par.");
// } else {
//     alert("O número é ímpar.");
// }


// NIVEL INTERMEDIARIO
// 2. Calculadora Simples
// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));

// let operacao = prompt("Digite a operação (+, -, *, /):");

// let resultado;

// if (operacao === "+") {
//     resultado = num1 + num2;
// } else if (operacao === "-") {
//     resultado = num1 - num2;
// } else if (operacao === "*") {
//     resultado = num1 * num2;
// } else if (operacao === "/") {
//     if (num2 !== 0) {
//         resultado = num1 / num2;
//     } else {
//         resultado = "Erro: divisão por zero";
//     }
// } else {
//     resultado = "Operação inválida";
// }

// console.log("Resultado:", resultado);

// 2. Maior entre dois números
// let n1 = Number(prompt("Digite o primeiro número:"));
// let n2 = Number(prompt("Digite o segundo número:"));
// let n3 = Number(prompt("Digite o terceiro número:"));

// let maior;

// if (n1 >= n2 && n1 >= n3) {
//     maior = n1;
// } else if (n2 >= n1 && n2 >= n3) {
//     maior = n2;
// } else {
//     maior = n3;
// }

// console.log("O maior número é:", maior);

// 2. Descontos em compras
// let valor = Number(prompt("Digite o valor da compra:"));

// let valorFinal;

// if (valor > 100) {
//     let desconto = valor * 0.10;
//     valorFinal = valor - desconto;
//     console.log("Desconto aplicado!");
// } else {
//     valorFinal = valor;
//     console.log("Sem desconto.");
// }

// console.log("Valor final: R$", valorFinal);

// 2. Sistemas de login simples
// let usuario = prompt("Digite o usuário:");
// let senha = prompt("Digite a senha:");

// if (usuario === "admin" && senha === "1234") {
//     console.log("Login bem-sucedido");
// } else {
//     console.log("Acesso negado");
// }

// 3. NIVEL AVANÇADO