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


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    }

    carrito.push(producto);

    // mostrar_carrito(producto);

     // CONVERTIR A JSON PARA GUARDAR EN LOCALSTORAGE, DESPUES CON OTRA FUNCION DE REDERIZADO LLAMAS EL CARRITO DE JSON Y LO CONVIERTES PARA DESPUES RENDER

    let carrito_json = JSON.stringify(carrito);
    let producto_sesionstorage = sessionStorage.setItem("carrito" , carrito_json);

    convertir_carrito(producto_sesionstorage);

    // console.log(carrito_json);
}

function convertir_carrito(producto_sesionstorage){

    for ( let i = 0; i < sessionStorage.length; i++){
        let clave = sessionStorage.key(i);

        let objeto_carrito_json = sessionStorage.getItem(clave);
        let array_objetos_carrito = JSON.parse(objeto_carrito_json);

        mostrar_carrito(array_objetos_carrito); 
    }
}

function mostrar_carrito(array_objetos_carrito){

    for(let i = 0; i < array_objetos_carrito.length; i++){

        let objeto = array_objetos_carrito[i];

        renderizar_carrito(objeto);
    }
}

function renderizar_carrito(objeto){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${objeto.img}"></td>
                <td>${objeto.nombre}</td>
                <td>${objeto.precio}</td>
                <td>${objeto.cantidad}</td>
                <td><button class="btn btn-danger borrar_elemento">Borrar</td>`;

    let tabla = document.getElementById("tbody");

    tabla.appendChild(fila);

    let btn_borrar = document.getElementsByClassName("borrar_elemento");

    for(let boton of btn_borrar){

        boton.addEventListener("click", borrar_elemento);
    }
}

// BORRAR ELEMENTOS DEL LOCAL STORAGE Y CAMBIARLO A SESIONSTORAGE

function borrar_elemento(e){

    let abuelo = e.target.parentNode.parentNode

    abuelo.remove();

}


let btn_carrito = document.getElementById("carrito");

btn_carrito.addEventListener("click" , abrir_carrito);

function abrir_carrito(){

    let carrito = document.getElementById("seccion_carrito");

    if(carrito.style.display != "flex"){

        carrito.style.display = "flex";

    } 
    else{
        carrito.style.display = "none"

    }
}

sessionStorage.clear();
