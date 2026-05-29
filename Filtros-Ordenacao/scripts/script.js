
const produtos = [
    { id: 1, nome: "Teclado Gamer", categoria: "Periféricos", preco: 120.90},
    { id: 2, nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.90 },
    { id: 3, nome: "Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90 },
    { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.90 },
    { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.90 },
    { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.90 },
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {
    
    // FILTRO DE BUSCA
    
    // pega o valor digitado na busca e converte para minúsculo
    let textoBusca = campoBusca.value.toLowerCase();

    // percorre a lista de produtos e valida se existe o nome buscado no filtro
    // includes -> valida se existe o texto buscado dentro da lista de produtos
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoBusca))

    // FILTRO DE ORDENAÇÃO (select)

    // verificar se a opção selecionada é "Nome A-Z"
    if(ordenacao.value === "nome-az") {

        // ordena o array de produtos
        
        produtosFiltrados.sort((a,b) => {

            // localeCompare -> faz uma comparação linguistica mais correta
            // negativo -> A vem antes
            // positivo -> B vem antes
            // 0 -> são iguais(texto iguais)
            return a.nome.localeCompare(b.nome);
        })
    }

    // Verifica se a opçao é "nome Z-A"
    if(ordenacao.value === "nome-za") {
        
        // ordena o array de produtos
        produtosFiltrados.sort((a,b) => {

            // localeCompare -> faz uma comparação linguistica mais correta
            // negativo -> A vem antes
            // positivo -> B vem antes
            // 0 -> são iguais(texto iguais)
            return b.nome.localeCompare(a.nome);
        })
    }
    
    //Verificar se é o menor preço
    if(ordenacao.value === "preco-menor") {

        // Ordena pelos preços
        produtosFiltrados.sort((a,b) => {

            // subtrai os valores:
            // se der negativo -> a vem antes do b (menor preço)
            // se der positivo -> b vem antes
            return a.preco - b.preco;
        })
    }

    // Verificar se é o maior preco
        if(ordenacao.value === "preco-maior") {

        // Ordena pelos preços
        produtosFiltrados.sort((a,b) => {

            // subtrai os valores:
            // se der negativo -> a vem antes do b (maior preço)
            // se der positivo -> b vem antes
            return b.preco - a.preco;
        })
    }

    // Limpa a tela para mostrar os produtos filtrados
    listaProdutos.innerHTML = "";

    if(produtosFiltrados.length === 0) {
        listaProdutos.innerHTML = "<p class='mensagem'> Nenhum produto encontrado.</p>"
        // return serve para quebrar o sitema aqui
        // nãoe executa mais nada pra baixo dessa função
        return;
    }

    // criar o card de produto para cada produto
    for(let i = 0; i < produtosFiltrados.length; i++) {
        let produto = produtosFiltrados[i];

        listaProdutos.innerHTML += `
            <div class='card'>
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p class ='preco'>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
            </div>
        `
    }
}

// Eventos
// evento que dispara o input quando digitamos
campoBusca.addEventListener("input", () => {
    mostrarProdutos();
});

// evento que dispara o select quando trocamos as options
ordenacao.addEventListener("change", () => {
    mostrarProdutos();
});

// iniciando na tela, chamando a função de msotrar produtos
// renderizando produtos -> renderizar: mostrar na tela
mostrarProdutos();