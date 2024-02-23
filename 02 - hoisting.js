// HOISTING

// Comportamento do Javascript onde as declarações de variáveis e função
// são movidas para o topo do seu contexto durante a fase de compilação, antes da execução do código.
// A declaração da variável ou função é movida para o topo, porém não é INICIALIZADA.

console.log(nome);

var nome = 'RAFAEL';
console.log(nome);
