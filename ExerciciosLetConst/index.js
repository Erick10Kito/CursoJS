//Luiz Otavio tem 30 anos, pesa 84kg
//tem 1.8 de altura e seu MC é de 25.925925925924

const nome = "Luiz Otávio";
const sobremone = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;
console.log(`${nome} ${sobremone} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
