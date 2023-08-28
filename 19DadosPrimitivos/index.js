//Dados Primitivos são Imutaveis - string, number, boolean, undefined, null (bigint, symbol)

let nome = "Luiz";
nome = "Otavio";
console.log(nome);
// Nesse caso acima eu não mudei o valor primiotivo, estou trocando o valor da variavel

let nomeImutavel = "Luiz";
nomeImutavel[0] = "R"; // Estou trocando a letra com o indice 0 para R
console.log(nomeImutavel[0]); // pedi para aparecer a letra com o indice 0, que supostamente deveria ser R, porem será L do mesmo jeito pois a string é imutavel, portanto não consigo trocar o valor primitivo dela
// A variavel seria mutavel, pois ela é uma caixa que contem o valor, ja o dado primitivo é o valor da caixa

// Referencia (mutavel) - Arrays, object, function

let a = [1, 2, 3]; // array
let b = a; // nesse caso tanto a quanto o apontam para o array na memoria

// Valores primitivos são copiados quando a gente passa o valor dele para outra variavel utilizando o sinal de atribuição

const aa = {
  name: "Xerick",
  sobrenome: "Xampos",
};

const bb = aa;
const c = { ...aa }; // aqui eu estou fazendo uma copia, ou seja mesmo que tenha mudado, ele vai pegar o valor primitivo

aa.name = "João";
console.log(bb); // agora o nome de bb é o nome de aa que é 'João' por causa do da alteração feita

// caso eu queira que o valor seja "Xerick" eu posso fazer o seguinte:

console.log(c);
