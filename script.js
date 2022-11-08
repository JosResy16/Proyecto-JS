// script banner bienvenida

let btn_iniciar = document.getElementById("btn_iniciar");
let btn_registrar = document.getElementById("btn_registrar");

btn_iniciar.addEventListener("click" , iniciar_sesion);
btn_registrar.addEventListener("click" , registrarse);

function iniciar_sesion(){
    let form = document.createElement("form");
    form.innerHTML = `<input type="text" placeholder="Usuario" id="usuario_iniciar">
                    <input type="password" placeholder="Contraseña" id="password">
                    <button class="btn btn-primary" id="btn_ingresar">Ingresar</button>
                    <a href="index.html">Regresar</a>`

    let banner_bienvenida = document.getElementById("banner_bienvenida");
    banner_bienvenida.append(form);

    let input_bienvenida = document.getElementById("inputs_bienvenida");
    input_bienvenida.remove();

    let btn_iniciar_sesion = document.getElementById("btn_iniciar");
    btn_iniciar_sesion.addEventListener("click" , iniciar_sesion);
}

function registrarse(){
    let form_registro = document.createElement("div");
    form_registro.innerHTML =   `<input type="text" id="nombre" placeholder="Nombre">
                                <input type="text" id="usuario" placeholder="Usuario">
                                <input type="password" name="" id="password" placeholder="Contraseña">
                                <input type="number" id="edad" placeholder="Edad">
                                <button class="btn btn-primary" id="btn_registrarme">Registrarse</button>
                                <a href="index.html">Regresar</a>`

    let mensaje_bienvenida = document.querySelector("h4").textContent = "Bienvenido, háblanos un poco de ti";

    let banner_bienvenida = document.getElementById("banner_bienvenida");
    banner_bienvenida.append(form_registro);

    let input_bienvenida = document.getElementById("inputs_bienvenida");
    input_bienvenida.remove();

    let btn_registrarme = document.getElementById("btn_registrarme");
    btn_registrarme.addEventListener("click" , alta_usuario);
}

//  fin script banner de bienvenida

// Inicia script para registro / inicio sesion 
let arreglo_usarios = [];

function alta_usuario(){
    let nombre = document.getElementById("nombre");
    let nombre_usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");
    let edad = document.getElementById("edad");

    let usuario = {
        nombre:nombre.value, 
        usuario:nombre_usuario.value, 
        pass:pass.value, 
        edad:edad.value
    };

    arreglo_usarios.push(usuario);

    // let arreglo_json = JSON.stringify(arreglo_usarios);
    // localStorage.setItem("usuarios" , arreglo_json);

    if(localStorage.length != 0){
        let recuperado_arreglo = localStorage.getItem("usuarios");
        recuperado_arreglo = JSON.parse(recuperado_arreglo);

        for(let usuario_arreglo of recuperado_arreglo){
            
            if(usuario.usuario == usuario_arreglo.usuario){
                let p = document.createElement("p");
                p.innerHTML = `<p style="color:red">Este usuario ya está registrado</p>`

                let alerta_usuario_registrado = document.getElementById("banner_bienvenida");
                alerta_usuario_registrado.append(p);

            }
            else{
                let p = document.createElement("p");
                p.innerHTML = `<p style="color:green">Registro exitoso</p>`

                let registro_exitoso = document.getElementById("banner_bienvenida");
                registro_exitoso.append(p);
            }
        }
    }
    else{
        arreglo_usarios.push(usuario);

        let arreglo_json = JSON.stringify(arreglo_usarios);
        localStorage.setItem("usuarios" , arreglo_json);

        let p = document.createElement("p");
                p.innerHTML = `<p style="color:green">Registro exitoso</p>`

        let registro_exitoso = document.getElementById("banner_bienvenida");
        registro_exitoso.append(p);

    }
}


// Fin de script para registro / inicio de sesion 

function iniciar_sesion(){
    let usuario = document.getElementById("usuario_iniciar");
    let password = document.getElementById("password");

    let objeto_usuario = {
        usuario: usuario.value,
        pass: pass.value,
    }

    let recuperado_arreglo = localStorage.getItem("usuarios");
    recuperado_arreglo = JSON.parse(recuperado_arreglo);


    let usuario_find = recuperado_arreglo.find(buscar_usuario);
}

function buscar_usuario(usuario){
    return usuario.usuario == usuario.value
}


// FIN Script inicio de sesion 

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