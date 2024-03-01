/** ESCOPO DE VARIÁVEL */

/** Escopo de variável em Javascript se refere a parte do código onde essa
 * variável esta acessível.
 * 
 * 1 - ESCOPO GLOBAL: Variáveis declarada fora de função, essas variáveis podem
 * ser acessadas dentro e fora de funções.
 *     PS.: Variáveis globais são evitadas para não gerar conflito em nome de variáveis,
 * e dificultar manutenção.
 * 
*/

/** EXEMPLO VARIÁVEL GLOBAL */
var nome = "Rafael"

function ola(){
    console.log("Olá, " + nome);    
}

ola(); // Saída: Olá, Rafael


/** ESCOPO LOCAL
 * 1 - Variáveis declarada dentro de função.
 * 2 - variáveis LOCAL tem prioridade sobre variáveis globais com o mesmo nome.
 * 
*/

/** EXEMPLO VARIÁVEL GLOBAL */
function hello(){
    let mensagemET = "Olá Terra" 
    console.log(mensagemET);
}

hello(); //"Olá Terra" 

// console.log(mensagemET); // Erro: mensagemET is not defined


