let carrito = [];

let btn_comprar = document.getElementsByClassName("btn-comprar");

for(let boton of btn_comprar){

    boton.addEventListener("click" , agregar_al_carrito);
}

function agregar_al_carrito(e){
    
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector("h4").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = abuelo.querySelector("img").src;

    // console.log(nombre_producto);
    // console.log(precio_producto);
    // console.log(img_producto);

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }

    carrito.push(producto);

    // CONVERTIR A JSON PARA GUARDAR EN LOCALSTORAGE, DESPUES CON OTRA FUNCION DE REDERIZADO LLAMAS EL CARRITO DE JSON Y LO CONVIERTES PARA DESPUES RENDER

}

function mostrar_carrito(){
    
}