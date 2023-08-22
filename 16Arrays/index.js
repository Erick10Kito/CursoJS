//                0        1       2
const alunos = ["Luiz", "Maria", "João"];
console.log(alunos[0]); // os itens do array podem ser acessados atraves do index deles, assim como mostra nesse exemplo. Por exemplo nesse caso só ira aparecer Luiz no console
console.log(alunos); // Array Completo

alunos[0] = "Eduardo"; // Aqui eu estou trocando o valor do array com indice 0 para 'Eduardo'
console.log(alunos); // Ou seja agora ao inves de Luiz teremos Eduardo como primeiro nome do array

alunos[3] = "Luiza"; // Como o indice 3 não existe no array alunos, nesse caso ele esta criando um novo item dentro do array
console.log(alunos); // E agora tera 4 itens no array e o ultimo nesse caso sera a 'Luiza'
// A forma acima de adicionar um item no array pode dar um problema, pois você tera que saber a quantidades de itens que tem no array para poder colocar o indice que não tenha
//a forma abaixo é uma maneira de fazer a mesma coisa mas sem ter que colocar o numero especifico:

alunos[alunos.length] = "Bruna";
// nesse caso eu estou vendo a quantidade de itens que tem no array e colcando essa quantidade como indice, pois ele conta a partir do 1 e não do 0 igual os indices,
// portanto a quantidade final sempre sera um valor acima do indice, ou seja entrando em um indice que não existe no array ainda
console.log(alunos); // Agora foi adicionado ao final do array o nome 'Bruna'

alunos.push("Erick"); // Essa é outra maneira de adicionar um item ao array, sem precisar saber quantos itens tem dentro, ele sempre ira adicionar ao final do array
console.log(alunos); // agora 'Erick' foi adicionado ao final
// todos esse itens que adicionam ao array são adicionados ao final do array

alunos.unshift("Messi"); // Dessa forma o nome é adicionado ao inicio do array, ou seja esse sera o novo indice 0 do array
console.log(alunos); // agora o array começara como o nome 'Messi'

alunos.pop(); // nesse momento eu estou removendo o ultimo elemento do array
console.log(alunos); // Agora "Erick" deixará de existir no array

const removido = alunos.pop(); // salvei quem foi removido do array na variavel 'removido'
console.log(removido); // o item que foi removido do array, nesse caso é o nome Bruna
console.log(alunos); // o array sem o ultimo item, ou seja sem o item removido que nesse caso é o nome Bruna

const removidoInicio = alunos.shift(); // o shift() remove o item do começo do array, ou seja remove o item que tem o indice 0, nesse caso é o nome Messi, vale lembrar que estou salvando o item removido em uma variavel
console.log(removido); // o item que foi removido do começo do array, nesse caso é o nome Messi
console.log(alunos); // o array sem o primeiro item, ou seja sem o item removido que nesse caso é o nome Messi

// Como tirar algum item do array sem trocar o indice dos outros itens
delete alunos[1]; // Nesse caso eu estou deletando o item com o indice 1, que é o nome Maria, porem somente o conteudo dele foi apagado, o indice continua existindo
console.log(alunos); // agora o item do indice 1 é um indice vazio, sem conteudo

alunos[1] = "Maria"; // Voltei o nome Maria para o indice 1
console.log(alunos);

console.log(alunos.slice(0, 3)); // estou pegando os itens do indice 0 ate o indice 2, tem que colocar o numero do indice com valor a mais pois ele não pega o indice descrito e sim o anterior dele, por isso coloquei (0,3) e não (0,2)
console.log(alunos.slice(0, -2)); // Dessa forma eu estou pegando do final para o começo, ou seja eu estou com subtraindo do final, nesse caso eu subtrai os dois ultimos itens

console.log(typeof alunos);
console.log(alunos instanceof Array); // eu estou vendo se o alunos é uma instancia de array, pois o typeOf fala que alunos é um objeto, aqui estou perguntando se esse objeto é um array
