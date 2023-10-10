//EJERCICIOS EVENTOS
//EJERCICIO 1: EVENTOS BÁSICOS
//1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos
//para que cuando se haga clic en el botón, se muestre un mensaje en la consola del navegador.
document.getElementById("boton").addEventListener("click",() => console.log("¡Hola!"));

//1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un
//escuchador de eventos para que cuando se pase el mouse sobre el elemento, el color de fondo cambie.
let body = document.querySelector("body");
function cambiarFondo() {
    if (!body.hasAttribute("style")) {
        body.setAttribute("style", "background-color: black;");
    }
    else {
        body.removeAttribute("style");
    }
}
document.querySelector("a").addEventListener("mouseenter", cambiarFondo);
document.querySelector("a").addEventListener("mouseleave", cambiarFondo);

//1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el ratón en cualquier punto de la ventana del navegador,
//muestre en algún elemento (puedes agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador y respecto a la página.
let parrafo = document.createElement("p");
body.appendChild(parrafo);

function mostrarUbicacion(event) {
    
}
////////////////////////////////////////////////////

////////////////////////////////////////////////////
body.addEventListener("mousemove", mostrarUbicacion);
parrafo.textContent = "Hola, ";
