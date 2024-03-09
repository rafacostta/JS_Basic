/** ARRAY */

/** Estrutura de dados que armazena uma uma coleção de dados
 * ordenado por um indice.
 */

/**
 * CARACTERISTICAS:
 * 1 - Podem ser criados vazios ou com valores definidos
 * 2 - Indices -  São acessados atravez dos indices, iniciando em zero.]
 * 3 - Tamanho dinâmico - Podem ser adicionado ou retirado valores do array.
 * 4 - Iteração - Os valos podem ser percorridos em loop por for, for-of forEach;
 */

// Declarando array
var arr = [];
var arr1 = new Array();
var arr2 = Array();

/** Principais métodos
 * 1 - push()/
 * 2 - pop()
 * 3 - shift()
 * 4 - unshift()
 * 5 - splice()
 * 6 - slice()
 * 7 - includes()
 * 8 - concat()
 * 9 - indexOf()
 * 10 - sort()
 * 11 - reverse()
 * Entre outros.
 */

// Percorrendo Array

//for (contador; condição; incremento)
var arrTest = ['rafael', 'Felipe', 'Carol'];
for (let i = 0; i < arrTest.length; i++){
    console.log(arrTest[i]);
}

//For..of - Itera sobre os valor ao invez dos indíces;
var numArr = [1,2,3,4,5];
for (let num of numArr){
    console.log(num);
}

//forEach - Executa uma função de callback para cada iteração
var numeros = [10,11,12,14];
numeros.forEach(function(numero){
    console.log(numero + 1);
});


// While
let cont = 0;
const ARR_NOMES = ['Mr. Robot', 'rafael Costa', 'Felipe'];

while( cont < ARR_NOMES.length){
    console.log(ARR_NOMES[cont]);
    cont++;
}


//FUNÇÕES IMPORTANTES PARA ARRAYS

//map - itera e retorna um novo array com os resultados de uma função de callback
var arrNumeros = [1,2,3,4,5];
var arrSoma = arrNumeros.map(function(numero){
    return numero + 2;
});
console.log(arrSoma); // [3,4,5,6,7]

//filter - Retorna um novo array com os elementos que passam no teste
var nomes = ['rafael','felipe', 'silvana', 'cindy'];
let nomeResult = nomes.filter(function(nome){
    return nome == 'silvana';
});
console.log(nomeResult);