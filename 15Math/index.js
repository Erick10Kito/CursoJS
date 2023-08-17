let num1 = 9.54578;
let arredondaBaixo = Math.floor(num1); // arredondou o valor para baixo
let arredondaCima = Math.ceil(num1); // arredonda o valor pra cima
let arredondaJustificado = Math.round(num1); // esse ele arredonda pro valor mais perto, ou seja se num1 fo 9.6 ele vai arredondar pra cima, se for 9.4 ele vai arredondar pra baixo

console.log(
  `O numero arredondado pra baixo é ${arredondaBaixo}, e o numero arredondado pra cima é ${arredondaCima}. O arredondamento justificado é ${arredondaJustificado}`
);

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // Pega o maior numero da sequencia de numeros
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // Pega o menor numero da sequencia de numeros

console.log(`O numero aleatorio da vez é ${Math.random()}`); // Gera numeros aleatorios

num1 = 9;
console.log(`A raiz quadrada de ${num1} é ${num1 ** 0.5}`); // pega a raiz quadrada do numero
