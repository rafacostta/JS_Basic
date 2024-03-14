/** Operador IGUAL */

// Operador '=' - Operador de atribuição
let nome = 'Rafael'; // Atribuindo o valor 'Rafael' à variável nome;

// Operador '===' - é usado para comparar dois valores, considerando o valor e o tipo de dado.
// retornando true se verdadeiro e false se o valores forem diferentes.
console.log( 2 === 2); // true
console.log(2 === '2'); // false

// Object.is() - Usado para verificar se os dois valores são iguai tanto no tipo como no valor.
// retorna true ou false.
// Muito usado para comparar objetos.
console.log(Object.is(1,1)); // true
console.log(Object.is(3, '3')); // false
console.log(Object.is(NaN, NaN)); // true


