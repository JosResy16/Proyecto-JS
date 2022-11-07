// script banner bienvenida

let checbox_iniciar = document.getElementById("checbox_iniciar");
let checbox_registrarse = document.getElementById("checbox_registrarse")

checbox_registrarse.addEventListener("click" , registrarse);
checbox_iniciar.addEventListener("click" , iniciar_sesion);

function iniciar_sesion(){
    let form = document.createElement("form");
    form.innerHTML = 
                        `<input type="text" placeholder="Usuario">
                        <input type="password" placeholder="Contraseña">
                        <button class="btn btn-primary" id="btn_ingresar">Ingresar</button>
                        <a href="index.html">Regresar</a>`

    let banner_bienvenida = document.getElementById("banner_bienvenida");

    banner_bienvenida.append(form);

    let input_bienvenida = document.getElementById("inputs_bienvenida");
    input_bienvenida.remove();
}

function registrarse(){
    let form = document.createElement("form");
    form.innerHTML = `
                        <input type="text" placeholder="Nombre" id="nombre_usuario">
                        <input type="text" placeholder="Usuario" id="usuario">
                        <input type="password" placeholder="Contraseña" id="password">
                        <input type="number" placeholder="Edad"> 
                        <button class="btn btn-primary" id="btn_registrar">Registrarse</button>
                        <a href="index.html">Regresar</a>`

    let mensaje_bienvenida = document.querySelector("h4").textContent = "Bienvenido. Hablanos un poco de ti";


    let banner_bienvenida = document.getElementById("banner_bienvenida");
    banner_bienvenida.append(form);

    let input_bienvenida = document.getElementById("inputs_bienvenida");
    input_bienvenida.remove();

    let btn_registro = document.getElementById("btn_registrar");

    btn_registro.addEventListener("click" , alta_usuario);
}

//  fin script banner de bienvenida

// Inicia script para registro / inicio sesion 

let arreglo_usarios = [];

function alta_usuario(){
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");
    let nombre_usuario = document.getElementById("nombre_usuario");

    let objeto_usuario = {
        nombre: nombre_usuario.value,
        pass: pass.value,
        usuario: usuario.value
    }

    arreglo_usarios.push(objeto_usuario);

    if(localStorage.length != 0){
        let recuperado_arreglo = localStorage.getItem("usuarios");
        recuperado_arreglo = JSON.parse(recuperado_arreglo);

        for(let usuario_arreglo of recuperado_arreglo){
            
            if(objeto_usuario.usuario == usuario_arreglo.usuario){
                let p = document.createElement("p");
                p.innerHTML = `<p>Este usuario ya está registrado</p>`

                let alerta_usuario_registrado = document.getElementById("banner_bienvenida");
                alerta_usuario_registrado.append(p);

            }
            else{
                let p = document.createElement("p");
                p.innerHTML = `<p>Registro exitoso</p>`

                let registro_exitoso = document.getElementById("banner_bienvenida");
                registro_exitoso.append(p);

                let input_bienvenida = document.getElementById("inputs_bienvenida");
                input_bienvenida.remove();
            }
        }
    }
    else{
        let arreglo_json = JSON.stringify(arreglo_usarios);
        localStorage.setItem("usuarios" , arreglo_json);

        let p = document.createElement("p");
                p.innerHTML = `<p>Registro exitoso</p>`

                let registro_exitoso = document.getElementById("banner_bienvenida");
                registro_exitoso.append(p);

                let input_bienvenida = document.getElementById("inputs_bienvenida");
                input_bienvenida.remove();

    }
}

// Fin de script para registro / inicio de sesion 
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

    renderizar_carrito(producto);
}

function renderizar_carrito(producto){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.img}"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
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