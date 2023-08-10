alert("Com a Nossa mensagem"); // sempre retorna undefined

window.confirm("Deseja realmente apagar?"); // vai gerar uma pergunta que tem a opção de o usuario confirmar ou cancelar, se o usuario cancelar vai retornar false, se confirmar vai retornar um valor true

window.prompt("Digite o seu Nome:"); // abre uma caixa de texto para o usuario digitar alguma coisa e o que ele digita é o que retorna

let confirma = confirm("Isso é um teste?"); // isso faz com que o valor que retorna do confirm, fique salvo na variavel confirma
alert(confirma);

let num1 = prompt("Digite um número:"); // isso faz com que o valor que o usuario digitou, fique salvo na variavel "num1"
alert(num1);
