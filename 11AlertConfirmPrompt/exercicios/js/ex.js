// Exercicio do curso
let num1 = prompt("DIGITE O PRIMEIRO NUMERO:");
let num2 = prompt("DIGITE O SEGUNDO NUMERO:");
const resultado = Number(num1) + Number(num2);
alert(`O resultado da conta foi ${resultado}`);

// Exercicio criado por mim
let numero1 = prompt("Digite um número:");
let numero2 = prompt("Digite outro número:");

if (confirm("Deseja saber o resultado da soma dos dois numeros?")) {
  const resultado2 = Number(numero1) + Number(numero2);
  alert(`O resultado da conta do segundo exercicio é ${resultado2}`);
} else {
  alert("Ok, então fica para a proxima");
}
