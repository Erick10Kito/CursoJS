// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um numero
// Não podem conter espaços ou traços
// Utilizamos CamelCase
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST
// É sempre necessario ja passar um valor na criação da constante

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
// Acima são as formas que são aceitas pelas varivaeis constantes.

let resultadoTripliclado = resultado * 3; // nesse momento ainda é algo que a constante consegue fazer
resultadoTripliclado = resultadoTripliclado + 5; // Isso ja é algo que a variavel constante não consegue fazer, pois ela não consegue alterar o proprio valor depois de setado uma primeira vez

console.log(typeof primeiroNumero); // O typeof pode ser utilizado para ver qual o tipo da variavel que você colocar dentro dele, por exemplo agora estou vendo o tipo do primeiro numero que é number
