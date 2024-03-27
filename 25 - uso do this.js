/** USO DO THIS 
 * 
 * É uma referência dinâmica ao onjeto no qual uma função está sendo executada.
 * 
*/

// Métodos de objetos - Dentro de uma função de objeto, 'this' refere-se ao próprio 
// objeto que contém a função.

var pessoa = {
    nome: "Mr. robot",
    hello: function(){
        console.log("Hello - " + this.nome);
    }
};
pessoa.hello(); // Hello - Mr. robot

// Funções Globais - Geralmente 'this' se refere ao objeto global,
// como por exemplo 'window' no navegador, 'global' no node.
// Exemplo Navegador:

//console.log(this === window); // Saída: true

// Em função 'strict mode' -  Em funções strinct mode o 'this' é 'undefined';

function exemplo(){
    'use strict'
    console.log(this === undefined); // true
}
exemplo();

// Funções construtoras - Quando uma função é usada como contrutora ( usando o operador 'new')
// o this se refere à nova instância.
function Aluno(nome) {
    this.nome = nome;
}
let alu = new Aluno('Rafael');
console.log(alu.nome);

// Métodos de Evento em elemento HTML - o 'this' geralmente se refere ai próprio HTML.
// <button onclick="console.log(this)">Clique-me</button>


// 'this' em Arrow function - 'this' é definido pelo contexto em que a função é definida,
//e não pelo contexto de execução.
//Em Arrow function não possuem seu próprio this, logo, se refere ao escopo global
// ou do escopo do módulo.

const obj = {
    nome: 'Rafael',
    getNome: function(){
        return this.nome;
    },

    getNomeArrow: () => {
        return this.nome; // undefined
    }
};

console.log(obj.getNome()); //Rafael
console.log(obj.getNomeArrow()); //undefined



//PS.: Exemplorar mais o uso do 'this'.