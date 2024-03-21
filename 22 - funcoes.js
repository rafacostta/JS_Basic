/** FUNÇÕES
 * 
 * funções são blocos de código.
 * Elas são fundamentais para modulação e organização do código.
 */

// Declaração de função

// Usando a palavra reservada 'function'
function hello(){
    console.log("Hello world!");
}

// Chamando a função
hello();

// return - Usado para retornar um valor de uma função
function soma(a,b){
    return a + b;
}

let resultado = soma(1,1);
console.log(resultado);

// Expressões de funções
// Atribuir uma função a uma variável.
var mult = function(a, b){
    return a * b;
}
console.log(mult(2,2)); // saída: 4

// Função anonima
// São funções que não tem nome, são usadas em expressões e ou passadas como argumento para outra função.
var sub = function(a,b){
    console.log(a - b);
}
sub(10,5);// Saída: 5

// Arrow function
// é uma forma mais simples e direta de se declarar função.
// sintaxe básica:
// const nomeDaFuncao = (parametros, ...) => {
//      Código ...
// } 

//PS.: caso a função tenha apenas uma linha não é necessário o uso de chaves {};
// Será estudado mais a fundo sobre este tipo de função.

const arrowSoma = (a, b) => {
   return a + b;   
}

console.log(arrowSoma(2,2)); // saída: 4