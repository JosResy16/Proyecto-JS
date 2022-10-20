let peso = parseFloat(prompt("¿Cuál es tu peso?"));
let altura = parseFloat(prompt("¿Cuál es tu estatura?"));
let imc;
let imc_bajo = {
    valor_max: 18.5,
    recomendacion: "Se recomienda que hable sobre su IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del bajo peso y recomendar apoyo o tratamiento."
};
let imc_saludable = {
    valor_min: 18.5,
    valor_max: 24.5,
    recomendacion: "Sin enbargo se recomienda cotinuar con buenos hábitos alimenticios y de actividad física para mantenerse saludable"
};
let imc_sobrepeso = {
    valor_min: 25.0,
    valor_max: 29.9,
    recomendacion: "Se recomienda que hable con su proveedor de atención médica, así podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto."
};
let imc_obesidad = {
    valor_min: 30,
    recomendacion: "Las personas que tienen obesidad tienen un mayor riesgo de padecer muchas enfermedades y afecciones, hable con su proveedor de atención médica."
};

function calc_imc(peso,altura){
    if(typeof altura == "number" && typeof peso == "number"){
        imc = Math.round(peso * 10 / altura / altura) / 10;
        console.log("Tu IMC es: " , imc)
    } else{
        console.log("Datos no válidos, intenta nuevamente");
    };

    if(imc <= 18.5){

        console.log("DE ACUERDO A LA INFORMACIÓN QUE INGRESASTE:")
        console.log("Peso: " , peso);
        console.log("Altura: " , altura);
        console.log("Su IMC es " , imc , "lo que indica que su peso esta en la categoría de Bajo peso para adultos de su estatura.");
        console.log("IMC por debajo de ",imc_bajo.valor_max , imc_bajo.recomendacion);

    } else if(imc <= 24.9 && imc > 18.5){

        console.log("DE ACUERDO A LA INFORMACIÓN QUE INGRESASTE:")
        console.log("Peso: " , peso);
        console.log("Altura: " , altura);
        console.log("Su IMC es " , imc , "lo que indica que su peso esta en la categoría de Peso saludable para adultos de su estatura.");
        console.log("Su IMC se encuentra entre los valores recomendados ", imc_saludable.valor_min ,"a" , imc_saludable.valor_max , imc_saludable.recomendacion);

    } else if(imc <= 29.9 && imc > 24.9){
        
        console.log("DE ACUERDO A LA INFORMACIÓN QUE INGRESASTE:")
        console.log("Peso: " , peso);
        console.log("Altura: " , altura);
        console.log("Su IMC es " , imc , "lo que indica que su peso esta en la categoría de Sobrepeso para adultos de su estatura.");
        console.log("Su IMC sobre pasa los valores recomendados y se encuntra entre ", imc_sobrepeso.valor_min , "y" , imc_sobrepeso.valor_max , imc_sobrepeso.recomendacion);

    } else if(imc => 30){

        console.log("DE ACUERDO A LA INFORMACIÓN QUE INGRESASTE:")
        console.log("Peso: " , peso);
        console.log("Altura: " , altura);
        console.log("Su IMC es " , imc , "lo que indica que su peso esta en la categoría de Obeso para adultos de su estatura.");
        console.log("Su IMC se ecuntra en valores de obesidad, por incima de ", imc_obesidad.valor_min , imc_obesidad.recomendacion);

    }
};

calc_imc(peso, altura);