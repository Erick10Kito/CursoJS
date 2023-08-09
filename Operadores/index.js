//   Aritiméticos:
//    + Adição e Concatenação
//    - Subtração
//   / Divisão
//   * Multiplicação
//    ** Potenciação - elevação
//   % Resto da divisão
//

// Adição :
const num1 = 10;
const num2 = 3;
console.log("O valor de num1 somado por num2 é", num1 + num2);

// Concatenação:
const num3 = "2";
const num4 = 10;
console.log("O valor de num3 somado por num4 é", num3 + num4);

// Subtração:
console.log("O valor de num1 subtraido por num2 é", num1 - num2);

// Divisão:
console.log("O valor de num1 dividido por num2 é", num1 / num2);

// Multiplicação:
console.log("O valor de num1 multiplicado por num2 é", num1 * num2);

// Potenciação:
console.log("A potencia de num1 elevado a num2 é ", num1 ** num2);

// Resto da Divisão:
console.log("O valor do resto da divisão entre o num1 e num2 é ", num1 % num2);

console.log(num1 + num2 * num1); // Vai executar sequencialmente, de acordo com as regras da matematica
console.log((num1 + num2) * num1); // Vai executar o parenteses primeiro, tambem de acordo com as regras da matematica

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 6
console.log("O valor do contador é", contador);

let contadorNegativo = 50;
contadorNegativo--; //49
console.log("O valor do contador Negativo é ", contadorNegativo);
//Incremento = ++
//Decremento = --

// Caso eu queira aumentar mais de um numero:
const passo = 2;
let contadorComPasso = 1;
contadorComPasso = contadorComPasso + passo;
console.log(
  "O valor do contador somando com um numero maior do que um é",
  contadorComPasso
);
// Outra forma de fazer a mesma coisa é a seguinte:
contadorComPasso += 2;
contadorComPasso += passo;
console.log(
  "Esse é o valor somando com um numero maior que um, porem feiro de uma maneira diferente:",
  contadorComPasso
);

// NaN = Not a Number

// como converter um valor do tipo string para tipo numerico:
// Primeira forma
const convert1 = 10;
const convert2 = parseInt("5");
console.log(
  "o resultado da primeira forma de converter um valor string em numero é",
  convert1 + convert2
);

// Segunda forma
const convert3 = 10;
const convert4 = parseFloat("5.2"); // se o valor tiver casa decimal como mostrado ali, o parseInt não funcionara, pois ele só funciona com numeros inteiros, portanto use o parseFloat
console.log(
  "o resultado da Segunda forma de converter um valor string em numero é",
  convert3 + convert4
);

// Terrceira forma
const convert5 = 10;
const convert6 = Number("5.5"); // O Number não tem nenhuma distinção, se for ou não decimal ele vai transformar em Numero
console.log(
  "o resultado da Terceira forma de converter um valor string em numero é",
  convert5 + convert6
);
