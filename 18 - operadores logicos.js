/**
 * OPERADORES LÓGICOS
 * 
 * São usados para manipular valores booleanos.
 */

// (&&) - Operador AND - Retorna true se os dois valores forem verdadeiros.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// (||) - Operador OU - retorna true se pelo menos uma condição for verdadeira.
console.log(true || true); // Saída: true
console.log(true || false); // Saída: true
console.log(false || true); // Saída: true
console.log(false || false); // Saída: false

// (!) - Operador negação lógica
console.log(!true); //  false
console.log(!false); // true

// PS.: Esses operadores são muito usados para expressões condicionais e declaração de controle de fluxo,
// para tomar desição baseado em valores booleanos.