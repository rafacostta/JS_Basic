/** JSON */

/** JSON ( Javascript Object Notation)
 * Formato de dados leve e fácil de ler e escrever.
 * Amplamente utilizado entre navegador e servidor, como uma forma
 * de representar dados estruturados.
 * 
 * Json é baseado em dois tipo de estrutura de dados:
 * Métodos principais:
 * 1 - JSON.stringfy() - converte um objeto Javascript em uma string JSON.
 * 
 * 2 - JSON.parse() - Converte uma string JSON para um Objeto Javascript.
 */

// Objetos - Coleção de pares e valor.
var pessoa = {
    nome: "Rafael",
    idade: 32
};

var pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON);

var objJSON = JSON.parse(pessoaJSON);
console.log(objJSON);

// Array - Lista ordenada