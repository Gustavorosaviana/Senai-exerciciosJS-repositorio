let contador = 0;
let numero = document.getElementById("numero");
let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    contador++
    numero.innerText = contador;
})