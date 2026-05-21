// Lista de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];


// Filtrar produtos com preço acima de 500
let produtosCaros = produtos.filter(produto => produto.preco > 500);


// Encontrar o primeiro produto chamado "Mouse"
const mouse = produtos.find(produto => produto.nome === "Mouse");


// Criar um array apenas com os nomes dos produtos
let nomesProdutos = produtos.map(produto => produto.nome);


// Somar todos os preços dos produtos usando reduce
let totalPreco = produtos.reduce((total, produto) => total + produto.preco, 0);


// Retorno:

console.log(produtosCaros); // [{ id: 1, nome: "Notebook", preco: 3500 }, { id: 4, nome: "Monitor", preco: 1200 }]
console.log(mouse); // { id: 2, nome: "Mouse", preco: 150 }
console.log(nomesProdutos); // ["Notebook", "Mouse", "Teclado", "Monitor"]
console.log(totalPreco); // 5050