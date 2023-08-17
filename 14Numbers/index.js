let num1 = 1; // number
let num2 = 200; // number

console.log(num1.toString() + num2); // Nesse caso eu estou fazendo com que o numero vire uma string no console.log, e ele só é uma string no console
// num1 = num1.toString(); // nesse caso eu alterei a variavel de number para string, ou seja a partir de agora o num1 é uma string

console.log(num2.toString(2)); // Converti para versão Binaria do valor do num2 que no caso é 200

let numQuebrado = 10.55587846132184;
console.log(numQuebrado.toFixed(2)); // Aqui basicamente eu peguei um numero quebrado e transformei ele em no maximo duas casas decimais usando o toFixed e o numero dentro do toFixed é o valor de casa decimais desejaveis, nesse caso foram duas casas decimais

console.log(Number.isInteger(num1)); // Uso a função isInteger para descobrir se o valor é inteiro, caso for inteiro vai retornar true caso não for vai retornar false

let temp = num1 * "OLA";
console.log(Number.isNaN(temp)); // Nesse caso se "temp" for um NaN ele vai retornar verdadeiro, se não for NaN ele vai retornar false

let newNum1 = 0.7;
let newNum2 = 0.1;

// newNum1 += newNum2; // newNum1 = newNum1 + newNum2

newNum1 += newNum2; // 0.8
newNum1 += newNum2; // 0.9
newNum1 += newNum2; // 1.0

console.log(newNum1); // 0.99999999999 -> um numero quebrado e que pode ser facilmente arredondado
newNum1 = parseFloat(newNum1.toFixed(2)); // dessa forma o problema seria resolvido
console.log(newNum1); // Numero agora arredondado
