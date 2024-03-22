/** STRICT MODE 
 * 
 * Funcionalidaed introduzeda no (ES5) que permite que você
 * opte por operar em modo restrito e seguro.
 * com modo strict ativado algumas práticas arriscadas e ambiguas são transformadas em erros.
 * Erros que muitas vezes não aparecem na hora de executar o javascript.
 * O strict mode pode ser usado no arquivo inteiro ou apenas dentro de uma função.
 */

// Ativando o modo strict - declarar na primeira linha do arquivo ou da função.
// "use strict" - mode de declarar.

/** MUDANÇA E COMPORTAMENTO:
 * 1 - Erro na declaração de variáveis implicitas.
 * 2 - Error para deletar propriedades não configuráveis.
 * 3 - Erro para reatribuir ao argumentos "arguments" e "eval"
 * 4 - Erro no uso de palavras reservadas.
 * 
 */

// Exemplos
"use strict"

class Pessoa {
    get nome() {
        return "Rafael";
    }
}

let p = new Pessoa();
console.log(p.nome); // Rafael

// Mas se tentar mudar o valor da variavel 'nome', que é apenas para leitura, gera um erro.
// p.nome = "Felipe";