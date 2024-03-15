/** BREAK  e CONTINUE */

// break - Interrompe uma execução de um loop imediatamente.
for (let i = 0; i < 8; i++){
    console.log("Valor de i antes do break : " + i);
    if (i === 4){
        console.log('Break - : ' + i);
        break; // interrompe o loop.
    }
}


// continue - Interrompe a iteração atual do loop e continua para proxima iteração.
for(i = 0; i < 10; i++){
    if (i === 5){
        continue;// Pula a iteração quando i for igual a 5;
    }
    console.log('Valor de i : ' + i);
}