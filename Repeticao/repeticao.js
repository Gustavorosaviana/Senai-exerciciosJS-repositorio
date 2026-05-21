
// Estruturas de repetição
// permite executar varias um bloco de código com base em uma condição

// tipos:
/*
    FOR
    WHILE
    DO WHILE
    FOREACH
*/

// FOR -> Usamos para repetir várias vezes quando sabemos quantas veze o código vai se repetir.

// Explicação: let i =1; i <= 5; i++
/*
    let 1 = 1;  -> criamos uma variável e chamamos ela de "i".
                essa variável vai servir como um estado inicial da estrutura de repetição
                conforme for se repetindo, ela vai aumentando de valor.

    i <= 5      -> condição: essa condição vai definir o limite de repetições
                enquanto o valor de "i" for menor ou igual a 5 - imprime OI
    
    i++         -> iterador: quando usamos o ++, quer dizer que estamos acrescentado +1 dentro do i
                i++ é a mesma coisa que i = i + 1         
*/

// for(let i = 4; i <= 5; i++){
//     console.log("OI");
// }


// WHILE
// Executa um bloco de códgio enquanto uma condição for verdadeira
// let contador = 1;

// while(contador <= 3) {
//     console.log("Repetindo....");
//     console.log(contador);
//     contador++ // contador = contador + 1
// }

// DO WHILE
// executa pelo menos uma vez antes da condição
// executa, depois pergunta
// let numero = 1;

// do {
//     console.log("Executou pelo menos uma vez");
//     numero++
// }
// while (numero < 3); // falso

// dirença ->
//         while pergunta e depois executa
//         do while executa e depois pergunta
// let numero2 = 1;
// while( numero2 < 3) {
//     console.log("Executou aqui");
//     numero2++
// }

// FOREACH -> Usado para percorrer uma lista de elementos
// let nomes = ["Davi", "Felipe", "Amanda"];


// // para cada nome na lista, imprima o nome
// nomes.forEach(function(nome) {
//     console.log("Nome: " + nome)
//     // console.log(nome[2])
// })

// // foreach simplificado -> arrow function (função lâmbda) ** usando setinha
// nomes.forEach(nome => {
//     console.log("Nome: " + nome)
// //     console.log(nome[2])
// })

// Sistema de intervalo definido pelo usuário
// let inicio = Number(prompt("Digite o número inical: "));
// let fim = Number(prompt("Digite o número final: "));

// // i += 5-> soma +5 no i
// for(let i = inicio; i <= fim; i+=5) {
//     console.log(i);
// }

// While com condição para sair do sistema
// let valor = "";
// while(valor != "sair") {
//     valor = prompt("Digite algo ou sair para parar");
//     console.log("Você digitou: " + valor);
// }

// contador - 1 a 10(com regra)
// let limite = Number(prompt("Mostrar números maiores que: "));

// for(let i = 1; i <= 10; i++) {
//     if(i > limite) {
//         console.log(i)
//     }
// }

// percorrendo um array usando for
// let cores = ["Azul", "Verde", "Vermelho"]
// //tamanho 3
// // posiçãao(indice) começa em zero - vaid de 0 até 2

// // length -> tamanho(pega o tamanho da lista)

// for(let i = 0; i < cores.length; i++) {
//     console.log("Posição da cor: " + i + " - " + cores[i]);
// }

// Posição da cor: 0 - azul


// condição dentro do foreach
// let numeros = [3, 7, 10, 15];

// numeros.forEach(num => {
//     if(num > 8) {
//         console.log("Maior que 8: " + num);
//     }
// })


// percorrendo objeto
// const pessoa = {
//     nome: "Carlos",
//     idade: 28,
//     profissao: "Desenvolvedor",
// };

// // for ... in -> usamos para objetos(chaves / índices)
// for(let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }

// for ... of -> usamos para arrays dos objetos para retornar o valor
// outro exemplo
// const produtos =[
//     {
//         nome: "Notebook",
//         preco: 3500,
//         estoque: 15
//     },
//     {
//         nome: "Mouse",
//         preco: 80,
//         estoque: 40
//     },
//     {
//         nome: "Teclado",
//         preco: 150,
//         estoque: 20
//     }
// ]
// // acessando o nome do produto
// for(let produto of produtos) {
//     console.log(produto.nome)
// }

// // imprmindo informações
// for(let produto of produtos) {
//     console.log(`Produto: ${produto.nome} | Preço: R$${produto.preco}`);
// }