/** ESTRUTURA DE DADOS */

/** Estrutura de dados são maneiras de organizar e armazenar dados.
 * Há várias estruturas de dados em Javascript, as mais comuns são:
 */

// Array - Coleção ordenada de elementos, onde os valores são acessados através dos indices.
var numeros = [1,2,3,4,5];

// Object - Coleção de pares Chave-Valor, onde os valores são acessados através das chaves únicas.
var pessoa = {
    nome: 'Rafael',
    idade: 32,
    apelido: 'Mr. Robot'
};
console.log(pessoa); // { nome: 'Rafael', idade: 32, apelido: 'Mr. Robot' }

// Map - Coleção de pares chave-valor, onde a chave pode ser qualquer tipo de dado.
var mapa = new Map();
mapa.set("chave1", "valor-1");
mapa.set("chave3", "valor-2");
console.log(mapa); // Map { 'chave1' => 'valor-1', 'chave3' => 'valor-2' }

// Set - Coleção de valores ÚNICOS, onde cada valor pode ocorrer apenas uma vez.
var conjunto = new Set();
conjunto.add(1);
conjunto.add("Mr. Robot");
console.log(conjunto); //Set { 1, 'Mr. Robot' }

// Outras estruturas de dados que vou adicionar mais tarde.
/**
 * 1 - Stack (Pilha)
 * 2 - Queue (Fila)
 * 3 - LinkedList (Lista encadeada)
 */