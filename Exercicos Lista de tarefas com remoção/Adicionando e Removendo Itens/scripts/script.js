const input = document.getElementById("input");
const botaoAdicionar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

botaoAdicionar.addEventListener("click", function () {

    const tarefa = input.value;

    if (tarefa === "") {
        mensagem.innerText = "Digite uma tarefa!";
        return;
    }

    mensagem.innerText = "";

    const item = document.createElement("li");

    item.innerText = tarefa;

    lista.appendChild(item);

    input.value = "";

    item.addEventListener("click", function () {
        item.remove();
    });

});