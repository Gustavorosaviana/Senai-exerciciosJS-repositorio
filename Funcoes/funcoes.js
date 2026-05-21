
// Fuções nativas do Javascript
// ajudam a manter um código limpo de organizado
// evita muita repetição de código

// MAP -> Percorre uma lista e cria uma nova lista com base em uma nova condição
// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// console.log(numerosDobrados);

// mesma função, mas agora com arrow function
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

// SOME -> Verifica se pelo menos um item da lista atende a condição
// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0); // true ou false
// console.log(temPar) // true

// // EVERY -> Verifica se TODOS os elementos da lista atendem a uma condição
// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

// SORT -> Ordena todos os elementos de uma lista
// let numeros = [3, 10, 5, 2, 4]
// let letras = ["c", "a", "x", "h"]

// // ordenando letras
// letras.sort();
// console.log(letras);

// // ordenando números
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// // REVERSE -> Inverte a ordem de array
// numeros.reverse();
// console.log(numeros);

// JOIN -> junta os elementos de um array em uma string
// let palavras = ["JS", "é", "muito", "bom!"];

// let frase = palavras.join(" ");
// console.log(frase);


// PUSH -> Adicionar elementos no final do array
// POP -> Remover elementos no final do array
// let lista = ["A", "B"];

// lista.push("C"); // adicionado
// console.log(lista);

// lista.pop(); // removendo
// console.log(lista);

// SHIFT -> Remover elementos do inicio do array
// UNSHIFT -> Adicionar elementos no inicio do array
// let lista = ["B", "C"]

// lista.unshift("A"); // adiciona
// console.log(lista);

// lista.shift(); // remove
// console.log(lista);


// SLICE -> Cria uma cópia de uma parte da lista
/*
    array.slice(inicial, final)

    inicial -> onde começa (a copiar o array)
    final -> onde para (não inclui a posição final (indíce / index))
*/

// let numeros = [1, 2, 3, 4]
// let copia = numeros.slice(1, 3); // 1 e 3 são posições do array

// console.log(copia);


// SPLICE -> Remove ou adiciona elementos em qualquer posição
/*
    array.splice(indice, count, item1, ..., itemX)

    indice -> posição do elemento no array(index)
    count -> número de itens a serem removidos (pode ser 0)
    item -> itens que vão ser adicionados
*/

// let numeros = [1, 2, 3, 4];

// numeros.splice(1, 1);
// console.log(numeros);


// let frutas = ["Banana", "Laranja", "Maçã", "Manga"]

// frutas.splice(0, 3, "Limão", "Kiwi");
// console.log(frutas);

// let frutasNovas = ["Banana", "Laranja", "Maçã", "Manga"]

// frutasNovas.splice(2, 0, "Limão", "Kiwi");
// console.log(frutasNovas);

// REPLACE -> Substitui uma parte da string
// let texto = "Olá mundo!";

// // replace(valorProcurado, valorSubstituto)
// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);


// SPOILER.........
// let textoP = document.getElementById("texto");
// let saudacao = prompt("Digite uma saudação: ");

// textoP.textContent = saudacao == "bom dia" ? saudacao : "QUINTOUUUUUU!!";