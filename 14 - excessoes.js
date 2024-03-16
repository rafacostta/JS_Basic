/** EXCESSÕES */
// São erros que podem ocorrer durante a execução do código.

// try e catch - Tenta executar um bloco de código e captura quaisquer exceções que possa vir ocorrer.
// Se a excessão for lançada no bloco 'try', o controle é passado para o bloco 'catch'.
var result;
try{
    // Código que pode gerar alguma excessão
    result = 10 / 0; // Ocorre excessão pois não existe divisão por 0.
} catch(erro) {
    // Trata a excessão
    console.log("Ocorreu um erro inesperado: " + erro.message);
} finally {
    // Bloco Finally  - opcional, Ele é executando sempre independente de ocorrer ou não excessões.
    console.log("Finally - Sou sempre executado.");
}

//throw - Lançar excessões 'manualmente' em javascript.
// Útil para informar que houve um erro em uma função.
function divisao(dividendo, divisor){
    if(divisor === 0){
        throw new Error("Não existe divisão por zero.");
    }
    let result = dividendo / divisor;
    console.log("Valor da divisão : " + result);
}

try{
    divisao(10,0);
} catch(e) {
    console.log("erro : ", e.message);
}
