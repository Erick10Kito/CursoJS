let nome = "João"; // Estou salvando a variavel João na memoria do computador usando let, e dessa forma eu ja declaro e inicializo ela ao mesmo tempo
//let é uma variavel, ou seja, ela VARIA

console.log(nome, "Nasceu em 1984");
console.log("Em 2000", nome, "conehceu Maria");
console.log(nome, "casou-se com Maria em 2012");
console.log("Maria teve 1 filho com", nome, "em 2015");
console.log("O filho de", nome, "se chama Eduardo");

let test; //Declarei a variavel
name = "Qualquer Valor"; // Inicializei a Variavel
console.log(test);
name = "Outro Qualquer Valor Alterado"; // Agora, a partir desse momento do codigo a variavel name ter esse valor, e não mais a frase "Qualquer Valor", pois let é uma variavel, ou seja ela PODE variar
console.log(test);

// Lembrando que não é possivel redeclarar as mesmas variaveis utilizando let

// Não podemos criar variaveis com palavras reservadas:
// let let
// let console
// let if

//Variaveis precisam ter nomes significativos, ou seja tente colocar sempre nomes exatamente parecidos com o valor que estará dentro dela
//por exemplo, joão é um nome, por isso coloquei o nome da variavel de "nome", isso é mais questão de senso de melhoria de código, pois se vc colocar o seguinte:
let n = "João";
console.log(n);
// vai funcionar, mas fica dificil reconhecer que a variavel n quer dizer que é o nome de alguem

// Não pode começar o nome de uma variavel com numeros
// exemplo : "let 1nome;"

//nome das variaveis não podem contem espaços ou traços
//ex: "let nome-Cliente;" ou "let nome Cliente;"
//quando precisamos usar palavras compostas utilizamos da seguinter forma: "let nomeCliente;"

//NÃO UTILIZE VAR, UTILIZE LET.
