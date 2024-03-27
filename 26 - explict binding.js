/** EXPLICIT BINDING 
 * Usado para especificar expliciotamente o valor do 'this'
 * em uma função.
 * Métodos: call(), appy() e bind()
*/

// call() - chama a função e passa o contexto para 'this'. Argumentos passados separadamente.
function hello() {
    return "Olá " + this.nome + ' idade : ' + this.idade;
}

let pessoa = {nome: "Rafael", idade: 31};
let msg = hello.call(pessoa);
console.log(msg);

// Apply - semelhando ao método call(), mas os argumentos são passados como um array.
function saudacao(msg){
    console.log(msg + " " + this.nome);
}

saudacao.apply(pessoa,["Bom dia pequeno gafanhoto - "]);

// bind - Cria uma nova função vinculada ao novo contexto this, mas a função não é chamada imediatamente.
// apenas retorna uma nova função que poded ser chamada posteriormente.

function helloBind(){
    return "Hello world - " + this.nome;
}

// variavel agora é uma função com o contexto específico.
let ola = helloBind.bind(pessoa);
console.log(ola());