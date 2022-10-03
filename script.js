let peso_mexicano =  0.0680671;
let dolor_canadiense = 14.6886;
let importe = "";

while( importe != "0"){
    importe = parseFloat(prompt("introduzca la cantidad a convertir"));

    if(typeof importe == "number"){
        let resultado = importe * peso_mexicano;
        console.log("el equivalente en dolar canadiense es: " , resultado);
    } else if(typeof importe != "number") {
        console.log("introduzca una cantidad válida");
    }
}



/*
function convertir_divisas(pesos_mexicanos){

    if(typeof importe == "number"){
        let resultado = importe * peso_mexicano;
        console.log("el equivalente en dólar conadiense es: " , resultado);
    } else {
        console.log("introdizca una cantidad válida");
    }

}
*/


