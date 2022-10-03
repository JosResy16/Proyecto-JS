let peso_mexicano =  0.0680671;
let dolor_canadiense = 14.6886;
let importe = parseFloat(prompt("ingrese el monto a convertir"));

function convertir_divisas(pesos_mexicanos){

    if(typeof importe == "number"){
        let resultado = importe * peso_mexicano;
        console.log("el equivalente en dólar conadiense es: " , resultado);
    } else {
        console.log("introdizca una cantidad válida");
    }

}

convertir_divisas();

