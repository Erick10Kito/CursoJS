function saudacao(
  nome /*Nesse momento eu criei um parametro 'nome' e agora a função pode receber um valor nesse parametro*/
) {
  console.log(`Bom dia ${nome}`); // Agora aqui eu estou o parametro que é o valor escolhido na hora que puxei a função
}

saudacao("Erick");
/*Aqui eu passo o valor que eu quero que o parametro tenha nesse caso eu estou colcoando que o parametro nome tem o valor 'Erick' nele*/
// tenho que chamar a função dessa forma
saudacao("Maria");
saudacao("Felipe");
// Basicamente a função vai fazer tudo que tiver dentro dela, toda vez que eu puxar a função, nesse caso eu estou fazendo um console.log toda vez que puxo a função, e posso mudar o valor sempre que eu quiser

const variavel = saudacao("Jota"); // Aqui eu estou tentando salvar a função dentro de uma variavel constante, mas sem especificação
console.log(variavel); // Nesse caso ira retornar undefined
// para fazer que salve algo na variavel preciso especificar o quero que seja salvo, e posso fazer isso usando return, assim como mostra a função abaixo
function boaNoite(nomeDois) {
  console.log(`Boa noite ${nomeDois}`);
  return 123456; // agora estou retornando algo da função ou seja, agora é possivel salvar ela em uma variavel
}
const variavelSalvamentoCorreto = boaNoite("Jonas");
console.log(
  `O valor que retorna da função, e qu foi salvo na variavel é ${variavelSalvamentoCorreto}`
);

function soma(
  x = 1 /*caso não for colocado o valor de x na hora que puxar a função, ele colocara 1 como valor padrão*/,
  y = 1 /*caso não for colocado o valor de y na hora que puxar a função, ele colocara 1 como valor padrão*/
) {
  const resultado = x + y; // variavel que faz a soma dos resultados
  return resultado; // o que retorna da função
}

console.log(soma(2, /*valor de x*/ 2 /*valor de x*/));
console.log(soma(3 /*valor de x*/, 1 /*valor de x*/));
console.log(soma(5 /*valor de x*/, 10 /*valor de x*/));

// Não posso acessar o que esta dentro da função, estando fora da função, por exemplo eu não consigo acessar a variavel resultado fora da função, somente dentro da função
// O return basicamente encerra a função, ou seja, nada abaixo do return sera executado

const resultadoSemValor = soma(); // não coloquei nenhum valor nem para x nem para y
console.log(
  `Esse é o resultado da soma qaundo não é colocado os valores de x e y = ${resultadoSemValor}` // Aqui ele usa os valores padrões definidos na função
);

// Abaixo esta o exemplo de uma função anonima(Função dentro de uma variavel)
const raiz = function (n) {
  return n ** 0.5;
};
console.log(`A raiz de 9 é ${raiz(9)}`);
console.log(`A raiz de 16 é ${raiz(16)}`);
console.log(`A raiz de 25 é ${raiz(25)}`);

// Abaixo esta um exemplo de uma arrow function
const arrowRaiz = (number) => {
  return number ** 0.5;
};

console.log(
  `A raiz de 9 feita pela função que tem arrow function é ${arrowRaiz(9)}`
);
console.log(
  `A raiz de 16 feita pela função que tem arrow function é ${arrowRaiz(16)}`
);
console.log(
  `A raiz de 25 feita pela função que tem arrow function é ${arrowRaiz(25)}`
);

// Com uma arrow function eu posso fazer a função sa seguinte forma:
const arrowRaizSimplificada = (numero) => numero ** 0.5;
// as condições para fazer desse jeito é: ter somente uma linha de codigo dentro da função, caso tenha somente um parametro dentro da função pode tirar os parenteses do parametro

console.log(
  `A raiz de 9 feita pela função que tem arrow function e esta simplificada é ${arrowRaizSimplificada(
    9
  )}`
);
console.log(
  `A raiz de 16 feita pela função que tem arrow function e esta simplificada é ${arrowRaizSimplificada(
    16
  )}`
);
console.log(
  `A raiz de 25 feita pela função que tem arrow function e esta simplificada é ${arrowRaizSimplificada(
    25
  )}`
);

// NÃO É INTERESSANTE CRIAR UM FUNÇÃO QUE FAZ VARIAS COISAS, E SIM VARIAS FUNÇÕES QUE CADA UMA FAZ UMA COISA DIFERENTE
