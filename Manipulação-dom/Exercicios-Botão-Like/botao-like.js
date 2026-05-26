// let curtido = false;
// let curtidas = 0;

// const status = document.getElementById("status");
// const Botaocurtir = document.getElementById("Botaocurtir");
// const contadoor = document.getElementById("contador");

// Botaocurtir.addEventListener("click", function () {
//     if (curtido === false) {
//         status.innerText = "❤️ Curtido"
//         curtido = true

//         curtidas++;
//         contador.innerText = "Curtidas: " + curtidas;

//     } else {
//         status.innerText = "🤍 Curtir"
//         curtido = false
//     }
// });


//2. Intermediário
const senhaCorreta = "1234";
const usuarioCorreto = "admin";

const CampoUsuario = document.getElementById("usuario");
const CampoSenha = document.getElementById("senha");
const botaoEntrar = document.getElementById("botaoLogin");

botaoEntrar.addEventListener ("click", function () {
    const usuarioDigitado = CampoUsuario.value.toLowerCase();
    const senhaDigitada = CampoSenha.value.toLowerCase();

    if(usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login realizado com sucesso! Bem vindo!")
    } else {
        alert("Usuario ou senha incorretos, tente novamente.")
    }
});