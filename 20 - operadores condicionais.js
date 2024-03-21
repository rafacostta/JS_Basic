/** OPERADORES CONDICIONAIS
 * Operadores condicionais são usados para analisar condições e tomar decisões.
 */

// (?:) - Operador ternário - Abreviação da declaração if...else
// Sintaxe - condição ? valorSeVerdadeiro : valorSeFalso;
let idade = 31;
let msg = idade >= 31 ? "Maior de idade" : "Menor de idade";
console.log(msg);

// (&&) - Operador lógico AND
let nome = 'rafael';
let sobrenome = 'costa';

if (nome === 'rafael' && sobrenome === 'costa'){
    console.log(`${nome} ${sobrenome} ... pessoa encontrada!`);
}

// (||) - Operador lógico OR
let dia = 'domingo';
let diaSemana = (dia === 'domingo') ? "fim de semana" : "dia de semana";
console.log(diaSemana);

//(!) - Operador negação - Usado para negar o valor do operado.
let aprovado = false;
if (!aprovado) {
    console.log("Reprovado");
}