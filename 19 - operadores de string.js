/**
 * OPERADORES DE STRING
 * 
 * Usados para realizar operações com strings.
 */

//(+) - Concatenação - União de strinfs em uma só.
let nome = "Rafael";
let sobrenome = "Costa";
let nomeCompleto = nome + " " + sobrenome; // "rafael Costa"
console.log(nomeCompleto);

//(+=) - atribuição de concatenação - Atribui e adiciona o valor para primeira string.
var n = "Rafael";
n += " Costa";
console.log(n); // "Rafael costa"

//Template literais(Templat string) - São strings delimitadas por (`)
// que permitem incorporar expressões javascript usando a sintaxe `${expressão}
var nickName = "Rafael";
var lastName = "Costa";
var myName = `My name is ${nickName} ${lastName}`;
console.log(myName);

// (length) - propriedade que retorna a quantidade de caracteres da string;
var cidade = "São Paulo";
console.log(cidade.length); // 9, espaço também vale como caractere.

// Acesso de caracteres por indexação. O contador começa no valor 0.
var frase = "Obrigado Deus";
console.log(frase[1]); // b