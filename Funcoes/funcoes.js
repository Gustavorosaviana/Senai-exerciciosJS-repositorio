
// Fuções nativas do Javascript
// ajudam a manter um código limpo de organizado
// evita muita repetição de código

// MAP -> Percorre uma lista e cria uma nova lista com base em uma nova condição
// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// console.log(numerosDobrados);

// mesma função, mas agor aomc arrow function
// let numerosDobradosArrow = numeros.map(num => num * 2);
// console.log(numerosDobradosArrow)

// let teste = numeros.map(num => {
//     let resultado = num * 2;
//     return resultado
// })

// console.log(teste)

// IF Ternário
// se for verdadeiro -> a resposta vem depois da interrogação
// se for falso -> a resposta vem depois dos dois pontos
// let resposta = (idade > 18) ? "maior de idade" : "menor de idade";

// se for verdadeiro -> a resposta vem depois da interrogação
// se for falso -> a resposta vem depois dos dois pontos
// se depois dos dois pontos tiver outra condição, a gente volta pro começo
// let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";

// FILTER -> Filtra os elementos de uma lista com base em uma condição
// let numeros = [5, 10, 15, 20];

// let maiorQueDez = numeros.filter(num => num > 10);
// console.log(maiorQueDez); // [15,20]

// REDUCE -> Reduz os valores de um array para um único valor
// let numeros = [1, 2, 3, 4]

// acumulador
// variavel auxiliar
// 0 -> é o valor inicial do acumulador
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
// console.log(soma);

// Find -> retorna o primeiro elemento que atende a uma condição
// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50},
//     { id: 2, nome: "Mouse", preco: 30},
//     { id: 2, nome: "Fone de ouvido", preco: 200}
// ]

// let item = produtos.find(produto => produto.id === 2);
// console.log(item);

// SPLIT -> Divide uma string em partes, transformando em uma lista
// let frase = "JS é muito bom!";

// // criando um array de palavras usando split
// let palavras = frase.split(" ");
// console.log(palavras)

// TRIM -> remove espaços no inicio de final de uma string
// let nome = "    João    ";
// let nome2 = "   João    ";
// let nomeLimpo = nome.trim();

// console.log(nomeLimpo)
// console.log(nome2)

// Includes -> verifica se existe um valor dentro de uma lista ou stiring
// let frutas = ["maçã", "banana"];

// let frutaExiste = frutas.includes("banana"); // booleano
// console.log(frutaExiste); // true (verdadeiro)

// toLowerCase -> transforma o texto em minúsculo
// toUpperCase -> transforma o texto em maiúsculo
// let nome ="JULIA";
// let cargo = "amor da minha vida";

// console.log(nome.toLowerCase()); // julia
// console.log(cargo.toUpperCase()); // AMOR DA MINHA VIDA

