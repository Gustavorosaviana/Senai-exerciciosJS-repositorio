
// MANIPULAÇAO DE DOM
// DOM -> Document Object Model
// é a forma como o navegador organiza o html para que o js consiga acessar os elementos

// Principais métodos de seleção de elementos do DOM

/*
    getElementById -> serve para selecionar um elemento pelo seu ID.

    querySelector -> serve para selecionar o 1º elemento que corresponde a um seletor CSS (tag(ex. p, h1, h2), ID, nome de classe)

    querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.

    getElementsByClassName -> serve para selecionar TODOS os elementos que correspondem a uma classe.
*/

// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;

// console.log(titulo);
// console.log(valor);

// querySelector
// const titulo = document.querySelector("#titulo"); // chamando id -> #nomeid
// const paragrafo = document.querySelector(".paragrafo"); // chamando classes -> .nomeclasse
// const tituloH2 = document.querySelector("h2"); // chamando tags -> h2


// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);


// querySelectorAll
// const elementos = document.querySelectorAll(".texto");
// // imprime o elemento (p)
// console.log(elementos);

// // imprime o valor que está dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));

// // trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado")

// // trocando a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>")

// // trocando a cor da fonta (letra)
// elementos.forEach(elemento => elemento.style.color = "#0000FF");

// Eventos
// Eventos são ações do usuário

// Evento de click
// const botao = document.getElementById("btn");

// // adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// })


// Evento de digitação (input / keyup)
// evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// // campo.addEventListener("input", () => {
// //     // value -> o valor digitado dentro da caixinha de texto
// //     resultado.innerText = campo.value;
// // });

// // evento keyup -> dispara quando sotla a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressioanda")
// })

// evento do mouse
// const elemento = document.getElementById("troca-cor");
// const botao = document.getElementById("btn");

// // mousever -> quando o mouse passa por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })

// // mouseout -> quando o mouse sai de cima do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     botao.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

// mousemove -> pegar a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição de X: ", evento.clientX, " Posição de Y: ", evento.clientY);
// })

// Evento de fomrulário (submit)
// const form = document.getElementById("form");

// comportamento padrão de um formulário é recarregar a página
// form.addEventListener("submit", (evento) => {
    // evento.preventDefault(); // impede o comportamento padrão

//     const nome = document.getElementById("nome").value;
//     console.log("Nome: " + nome);
// })


// criando elementos na página
// const novoElemento = document.createElement("p"); // cria um elemento <p>
// novoElemento.innerText = "Elemento novo criado"; // cria um texeto no elemento

// form.appendChild(novoElemento); // estamos adicionando um elemento filho (p) dentro do pai (form).

// const botao = document.createElement("button");
// botao.innerText = "Excluir elemento";
// form.appendChild(botao);

// botao.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     // apagando direto do pai
//     // form.removeChild(novoElemento)
// })


// adicionando elementos em uma lista não ordenada (ul) através de um input
const input = document.getElementById("input") // input
const botao = document.getElementById("add") // button
const lista = document.getElementById("lista") // ul

botao.addEventListener("click", () => {
    const valor = input.value; // pega o valor digitado na caixinha (input)

    const li= document.createElement("li");
    li.innerText = valor; // li recebe o texto digitado na caixinha

    lista.appendChild(li); // <li> vai ser criado dentro do <ul>

    input.value = "";
})