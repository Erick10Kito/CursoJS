const pessoa1 = {
  // Dentro do Objeto eu posso colocar atributos do objeto, por exemplo eu estou falando que o nome de pessoa1 é "Erick"
  nome: "Erick",
  sobrenome: "Campos",
  idade: 19,
};
// Chaves da forma como esta acima significa objeto

console.log(`o nome da pessoa 1 sem usar função é ${pessoa1.nome}`); // aqui eu estou acessando o nome do objeto 'pessoa1'

// Fazer uma função que faz a criação de pessoa:
function criaPessoa(nome, sobrenome, idade /*Parametros da função*/) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoaFunction = criaPessoa("Bruna", "Alexia", 19 /* Argumento*/);
console.log(`o nome da pessoa usando a função é ${pessoaFunction.nome}`);

// Função dentro do objeto:
const pessoaFala = {
  nome: "Luquinhas",
  sobrenome: "Arthreus",
  idade: 10,

  fala() {
    // Aqui eu não precisei anteceder o nome da função com a palavra function, ja coloquei somente o nome e abri a função
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    // Nesse contexto o this representa o objeto pessoaFala, ou seja é a mesma coisa que eu tivesse colocado pessoaFala.nome
    console.log(`A minha idade atual é ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++; // Agora cada vez que eu chamar essa função a idade do objeto pessoaFala vai aumentar +1
  },
};

// e para executar essa função eu faço o seguinte:
pessoaFala.fala(); // isso vai gerar o que esta dentro da função, que é um console.log
pessoaFala.incrementaIdade(); // Agora estou aumentando a idade do objeto
pessoaFala.fala();
