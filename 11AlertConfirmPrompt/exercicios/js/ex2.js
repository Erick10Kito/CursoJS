// Preciso colocar no console as varieveis transformadas na letra que esta comentada
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

//Solução que eu achei
let newA = varB;
let newB = varC;
let newC = varA;

console.log(newA, newB, newC);

//Solução do Curso
const vartTempA = varA;
varA = varB;
varB = varC;
varC = vartTempA;

console.log(varA, varB, varC);

// Forma mais moderna apresentada no curso, dessa forma não preciso criar novas variaveis
// criei novas variaveis para fazer a terceira forma sem interferir na resposta
let varA2 = "A"; //B
let varB2 = "B"; //C
let varC2 = "C"; //A

[varA2, varB2, varC2] = [varB2, varC2, varA2];

console.log(varA2, varB2, varC2);
