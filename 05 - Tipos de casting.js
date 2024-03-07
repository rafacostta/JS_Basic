/** TIPOS DE CASTING */

/** Casting se refere a conversão de um valor de um tipo de dado em outro.
 * Isso permite operações entre tipo de dados diferentes e garante que 
 * os dados serão interpretados da forma correta.
 * 
 * Há dois tipo de casting:
 * 
 * 1 - Casting Implicito
 * Ocorre automaticamente pelo Javascript, tentando interpretar e converter os dados para realizar operações.
 * 
 * Exemplo :
 */

let numero = "10";
let resultado = numero * 2;// Javascript conver o '10' string para Number.
console.log(resultado); // 20

/** 2 - casting Explicito 
 * É feito pelo programador usando uma função, oferecendo mais controle sobre a conversão
 * Exemplo :
 * 
*/

var numeroString = "20";
var numeroConvertido = parseInt(numeroTexto); // Converte '20' string para o tipo Number.
console.log(numeroConvertido); // 20

/** 
 * Métodos nativos para realizar casting explícito:
 * 1 - parseInt();
 * 2 - parseFloat();
 * 3 - Number();
 * 4 - String();
 * Entre outros;
 */