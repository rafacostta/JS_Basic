// OBJECT ERROR
// É um objeto do javascript usado para representar erros.
// Também usado para criar instâncias de erros que podem ser lançados e capturados
// dentro dos blocos 'try' e 'catch'.

// O pbjeto error possuio propriedades padrão.
// como 'name' e 'message', que fornecem informações do erro.

try {
    // Código que pode gerar uma exceção
    throw new Error("Este é um erro personalizado.");
} catch (erro) {
    // Lidar com o erro
    console.error("Ocorreu um erro:", erro.message);
    console.error("Nome do erro:", erro.name);
}


// Há varios tipos de erros mais específicos ... estudar mais sobre esse objeto.