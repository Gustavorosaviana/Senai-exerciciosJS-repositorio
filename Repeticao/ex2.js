// 1. Contar de 1 à 10.
// for(let i = 1; i <=10; i++) {
//     console.log(i);
// }

// 1.Tabuada de um número
// let numero = Number(prompt("Digite um número: "))
// for(let i = 1; i <= 10; i++) {
//     console.log( numero + " X " + i + " = " + (numero * i));
// }

// 1. Soma dos primeiros N números naturais
// let n = Number(prompt("Digite um número: "))
// let soma = 0;
// let i = 1;

// while(i <= n){
//     soma += i
//     i++
// }
// console.log(soma);

//2. Exbindo os números pares de 1 até 50
// for(let i = 1; i<= 50; i++) {
//     if(i % 2 === 0) 
//         console.log(i)
// }

//2. Jogo de adivinhação
// -> random gera números aleatórios entre 0 e 1
// -> Math.floor: remove casas decimais, para ter somente números inteiros
// let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativa;

// while(tentativa !== numeroSecreto){
//     tentativa = Number(prompt("Digite um número de 1 a 100: "));

//     if(tentativa > numeroSecreto){
//         console.log("O número é menor!");
//     } else if (tentativa < numeroSecreto){
//         console.log("O número é maior!");
//     } else {
//         console.log("Parabéns! Você acertou!!");
//     }
// }

//2. Contagem regressiva
// let numero = Number(prompt("Digite um número"))
// while(numero >= 0){
//     console.log(numero);
//     numero--
// }

//2. Validação da Senha
// let senha = "Bora bill";
// let senhaDigitada = "";

// while(senhaDigitada !== senha){
//     senhaDigitada = prompt("Digite a senha: ");

//     if(senhaDigitada !== senha) {
//         alert("Senha Incorreta! Tente novamente");
//     }

// }

// alert("Senha correta! Acesso permitido");

// 2. Soma até parar
// let soma = 0;

// let valor = Number(prompt("Digite um número ou 0 para parar!"));

// while(valor !== 0) {
//     soma += valor; // soma = soma + valor
//     valor = Number(prompt("Digite um número ou 0 para parar: "));
//     console.log("Você digitou: " + valor);
// }

// console.log("Total da soma: " + soma);

//2. Média de valores
// let somaValores = 0;

// for(let i = 1; i <= 3; i++) {
//     let valor = Number(prompt(`Digite o ${i}º número: `))

//     somaValores += valor; // somaValores = somaValores + valor
// }

// let media = somaValores / 3
// console.log("A média é: " + media);