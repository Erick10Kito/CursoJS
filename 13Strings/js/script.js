//               01234567 -> indice(index)
let umaString = "Um texto";
console.log(umaString[4]);
// nesse caso ira aparecer somente o que esta no indice 4 que é a letra 'e', como podemos ver os indices possiveis acima, caso eu coloque o indice 8, ele vai retornar undefined, pois o 8 não existe
// E caso eu coloque um indice negativo ele tambem vai retornar um undefined

console.log(umaString.charAt(4)); // faz a mesma coisa que o [4] do exemplo acima

// console.log(umaString.concat()); -> Esse concat é usado para concatenar as strings, mesma coisa que o sinal de mais faz
// Outras formas de fazer concatenação é as seguintes:
console.log(umaString + " em um lindo dia");
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf("t")); // nesse exemplo estou usando para descobrir em qual indice começa a palavra texto
console.log(umaString.lastIndexOf("t")); // mesma coisa do indexOf só que começa de tras pra frente

console.log(umaString.match(/[a-z]/g)); // isso é uma expressão regular que mostra as letras de A a Z que existem dentro de "umaString"

console.log(umaString.replace("Um", "Outro")); // Com replace eu consigo substituir alguma palavra da string, nesse caso eu substitui o "Um" por "Outro"

let RatoString = "O rato roeu a roupa do rei de roma";
console.log(RatoString.replace(/r/g, "#")); // Nesse caso eu substitui todas as letras R da frase para um sinal de jogo da velha "#", sem a flag "g" ele faz a troca somente no primero "r"

console.log(RatoString.length); // serve para ver o tamanho da string, ou seja, quantos items tem, ou seja nesse caso seria quantas caracteres tem

console.log(RatoString.slice(2, 6)); // Nesse serve para deixar a frase em pedaços, ou seja ele vai pegar somente do iundice 2 ate o indice 5, mas tem que por um indice a mais para dar certo, por isso coloquei ate o 6

console.log(RatoString.slice(-5)); // nesse caso vou pegar só as 5 ultima caracteres, pois ele vem de tras pra frente

console.log(RatoString.split(" ")); // estou dividindo as strings por espaço e gerando um array e a separação por virgula de cada item vem do espaço
console.log(RatoString.split(" ", 2)); // Nesse caso coloquei um limite para que isso aconteça somente duas vezes
