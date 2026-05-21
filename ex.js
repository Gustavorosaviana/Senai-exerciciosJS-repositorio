
// //VARIÁVEIS
// /* 
//     LET     -> Quando o valor da variável pode mudar, usamos let
//     VAR     -> Forma antiga - evitar usar (está sendo descontinuado por dar muitos problemas)
//     CONST   -> Quando o valor da variável NÃO pode mudar
// */

// let nome = "Caio";
// const idade = 25;
// var cidade = "São Paulo";

// // console.log() -> imprime valores na tela
// console.log(nome);
// console.log(idade);

// // trocando informações da variável com let
// nome = "Késsia";
// console.log(nome);

// //trocando informações da variável com const
// // idade = 30;
// // console.log(idade);

// // imprimindo valores juntos
// console.log(nome + cidade);

// // imprimindo valores juntos com texto
// //concatenação
// console.log("Nome: " + nome + ", cidade: " + cidade);

// //interpolação
// console.log(`Nome: ${nome}, cidade: ${cidade}`);


// tipos primitivos

// String (texto)
// let mensagem = "olá, mundo!";
// console.log(typeof mensagem);

// // Number (número)
// let idade = 30;
// let temperatura = 36.5;
// console.log(typeof idade);
// console.log(typeof temperatura);

// // Boolean (booleano -> verdadeiro / falso)
// let estaChovendo = true;
// console.log(typeof estaChovendo);

// // Undefined -> quando não definimos um valor para a variável
// let nome;
// console.log(typeof nome);

// // Null / object -> usado para ausência intencional de um valor
// let endereco = null;
// console.log(typeof endereco);

// // Conversão dos tipos
// // Covnersão implícita (automática)
// let soma = "5" + 3;
// let sub = "5"-3;

// console.log(typeof soma);
// console.log(soma); // 53 string
// console.log(typeof sub);
// console.log(sub); // 2 number

// // Conversão expícita
// // converter string para número
// let número = "42";
// let convetido = Number(número);

// // converter número para string
// let número2 = 100;
// let texto = String(número2);


// Operadores Relacionais
/*
    >   MAIOR QUE
    <   MENOR QUE
    >=  MAIOR OU IGUAL
    <=  MENOR OU IGUAL
    ==  IGUALDADE (ignora tipo)
    === IGUALDADE ESTRITA (verifica tipo)
    !=  DIFERENTE (ignora tipo)
    !== DIFERENTE ESTRITO (verifica tipo)

*/

// // Exemplo
// console.log(10 > 5); // true
// console.log(10 < 5); // false

// console.log(5 == "5"); // true -> ignora tipo
// console.log(5 ==="5"); // false -> compara valor e tipo

// // Operadores Matemáticos
// /*
//     + SOMA
//     - SUBTRAÇÃO
//     * MULTIPLICAÇÃO
//     / DIVISÃO
//     % RESTO DA DIVISÃO
//     ** POTÊNCIA
// */

// // Exemplo
// let a = 10;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // resto
// console.log(a % b); // resto da divisão
// console.log(a ** b); // potência

// // Operadores Lógicos
// /*
//     && (AND)    -> OPERADOR E
//     || (OR)     -> OPERADOR OU
//     !(NOT)      -> OPERADOR NÃO (negação)
// */

// // Operador E (&&)
// // Só retorna verdadeiro quando todas as condições forem verdadeiras

// let num1 = 5
// let num2 = 5
// let num3 = 10
// console.log(num1 == num2 && num3 > num2); // true

// // Operador OU (||)
// // retorna verdadeiro se pelo menos uma das informações forem verdadeiras
// let num4 = 9
// console.log(num1 == num4 || num1 == num2); // true

// // Operador NÂO (!)
// // inverte a condição, se é verdadeiro -> vira falso e vice e versa
// let logado = false;
// console.log(!logado); // true

// let logado1 = true;
// console.log(!logado1);// false)

