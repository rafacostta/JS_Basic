/** LOOPS E ITERAÇÕES */

// for - (contador, condição, incremento)
for (let i = 0; i < 5; i++){
    console.log('Valor de i : '+i);// Imprime os números de 0 a 4
}

// While - Executa um bloco enquanto uma condição específica é verdadeira:
// OBS.: Loop while testa a condição antes de executar o loop.
let j = 0;
while (j <= 3){
    console.log('valor de j : ' + j);// Imprime os números de 0 a 3
    j++;
}

// Do .. while - Semelhando ao while, porém executa o bloco e depois testa a condição.
var h = 0;
do {
    console.log('Valor de h : ' + h);
    h++

} while (h <= 10);

// for...of
// Usado para iterar uma coleção de dados  como Array e string.
// Percorre os valores.
// for (let variavel que recebe o valor do loop of Array ser iterado)
let nums = [1,2,3,4,5]
for (let num of nums){
    console.log(num);
}

// for...in - Usado para iterar sobre as propriedades de um objeto.
// Percorre todas as propriedades de um objeto.

var pessoa = {nome: "Rafael", idade: 31, cidade: "São Paulo"};

for(let prop in pessoa){
    console.log(prop + " : " + pessoa[prop]);
}