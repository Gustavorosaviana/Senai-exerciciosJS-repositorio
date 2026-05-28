const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefa");

// criando uma lista vazia
let tarefas = [];

// função para salvar tarefas no local storage
function salvarTarefas() {

    /*
        localStorage -> armazenamento local do navegador
        setItem -> salva no armazenamento o conteúdo recebido
        JSON.stringify(tarefas) -> pega  a lista de tarefas, converte para texto (string) e armazena esse texto
    */
localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// função para mostrar tarefas na tela
function mostrarTarefas() {
    listaTarefas.innerHTML =""; // limpa a lista de tarefas na tela

    //[tomar cafe, almoçar, jantar]
    for(let i = 0; i < tarefas.length; i++) {
        // para cada um elemento, cria um li
        const li = document.createElement("li");
        // cada vez que criar o li, passa o valor que está na lista de tarefas na posição do li
        li.innerText = tarefas[i];

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        
        // cria classe para usar estilização do css
        botaoRemover.className = "botao-remover";

        botaoRemover.addEventListener("click", () => {
            // CHAMAR FUNÇÃO PARA REMOVER TAREFA
            removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa) {

    // splice -> (posicaoInicial, qtde_Itens)
    tarefas.splice(posicaoTarefa, 1);

    // depois de remover, chamo a função de salvar no localSotarge
    // atualiza o localStorage com array de tarefas atualizado
    salvarTarefas();

    // mostra as tarefas atualizadas, sem as tarefas que foram removidas
    mostrarTarefas();

}

function adiconarTarefas() {
    const valortarefa = inputTarefa.value;

    if(valortarefa.trim() === "") {
        alert("Digite uma tarefa!");
        return; // não deixa a tarefa vazia aparecer na tela
    }

    // adiciona tarefas dentro do array
    tarefas.push(valortarefa);
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();


}

// função para carregar as tarefas salvas no localStorage
function carregarTarefas() {
    // pega as tarefas e armazena na varíavel 'tarefasSalvas'
    const TarefasSalvas = localStorage.getItem("tarefas");

    // se existir alguma coisa dentro de tarefasSalvas
    // então converte a tarefa e mostra na tela
    if(TarefasSalvas) {
        // transforma o texto que está no localStorage em array novamente
        tarefas = JSON.parse(TarefasSalvas);
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adiconarTarefas);

carregarTarefas();
