const inputPedido = document.getElementById("input-Pedido");
const btnAdicionar = document.getElementById("btn-Adicionar");
const listaPedidos = document.getElementById("lista-Pedidos");
const btnAtender = document.getElementById("btn-Atender");
const pedidoAtual = document.getElementById("pedido-Atual");

btnAdicionar.addEventListener("click", function () {
        if (inputPedido.value.trim() === "") {
        return;
    }
    
    const insiraPedido = inputPedido.value;
    
    const li = document.createElement("li");
    li.innerText = insiraPedido;
    
    li.addEventListener("click", function () {

        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }

    });

    const btnRemover = document.createElement("button");
    btnRemover.innerText = "❌";

    btnRemover.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnRemover);
    
    listaPedidos.appendChild(li);

    inputPedido.value = "";
});

btnAtender.addEventListener("click", function () {
    const primeiroPedido = listaPedidos.firstElementChild;

    if(primeiroPedido) {
        pedidoAtual.innerText = "Atendendo: " + primeiroPedido.innerText;

        primeiroPedido.remove();
    } else {
        pedidoAtual.innerText = "Nenhum pedido sendo atendido!"
    }
});