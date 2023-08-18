const numero = Number(prompt("Digite um Número"));
const numeroTitulo = document.getElementById("numero-titulo"); // Basicamnete ele seleciona um elemento pelo id dele no html, e nesse caso ele esta selecionando pelo id 'numero-titulo'

const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero; // com isso eu alterei o html interno do elemnto que contem o id 'numero-titulo' e coloquei ele como a variavel numero que sera o usuario que ira digitar
// é possivel adicionar html e template string no innerHtml

// Essa é uma forma de fazer
texto.innerHTML = `
<p>Raiz quadrada: ${numero ** 0.5} </p><br>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br>
<p>É NaN: ${Number.isNaN(numero)}</p><br>
<p>Arredondado para baixo: ${Math.floor(numero)}</p><br>
<p>Arredondado para cima: ${Math.ceil(numero)}</p><br>
<p>com duas casas decimais: ${numero.toFixed(2)} </p><br>
`;

// Outra forma de fazer seria:
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)} </p>`;

// Uma terceira forma seria essa
function createPage() {
  let pagina = "";

  pagina += `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
  pagina += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
  pagina += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
  pagina += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
  pagina += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
  pagina += `<p>com duas casas decimais: ${numero.toFixed(2)} </p>`;

  return pagina;
}

texto.innerHTML += createPage();
