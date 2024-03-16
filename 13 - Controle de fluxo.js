/** CONTROLE DE FLUXO */
// Controle de fluxo se refere ao controle de execução de um bloco de código.

//if...else - Executa se a condição for verdadeira e outra se for falsa.
let idade = 20;
if(idade >= 20){
    console.log('Condição verdadeira');
} else {
    console.log("Condição falsa");
}


//Switch - Permite selecionar entre várias opções com base no valor da expressão.
// Executa o código baseado no valor correspondente.
let nome = "rafael";
switch (nome){
    case "rafael":
        console.log("Olá me chamo : " + nome);
        break;
    case "felipe":
        console.log("Condição falsa");
    default:
        console.log("Valor inválido"); // se todas as condições forem falsa esse bloco é executado.
}



