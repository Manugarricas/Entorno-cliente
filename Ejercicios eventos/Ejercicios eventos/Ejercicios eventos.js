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
//No se mostrar la ubicacion del puntero, y aunque he encontrado varias formas de hacerlo en internet, ninguna funciona

//EJERCICIO 2: AGREGAR EVENTOS DE TECLADO
//2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione cualquier tecla, muestre un mensaje de alerta con el nombre de la tecla pulsada y su código.
document.body.addEventListener("keydown", () => console.log(""));//No se como saber que tecla he pulsado

//2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra correctamente el nombre y el código de la tecla pulsada.
//No se como saber que tecla he pulsado

//EJERCICIO 3: CAPTURA Y PROPAGACION
//3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. Agrega un escuchador de eventos al elemento <ul>
//para que cuando se haga clic en cualquier elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento clickeado.
let listaNueva = document.createElement("ul");
let hijo1 = document.createElement("li");
let hijo2 = document.createElement("li");
let hijo3 = document.createElement("li");
let hijo4 = document.createElement("li");

document.body.appendChild(listaNueva);
listaNueva.appendChild(hijo1);
listaNueva.appendChild(hijo2);
listaNueva.appendChild(hijo3);
listaNueva.appendChild(hijo4);

hijo1.innerHTML = "Soy el primer hijo";
hijo2.innerHTML = "Soy el segundo hijo";
hijo3.innerHTML = "Soy el tercer hijo";
hijo4.innerHTML = "Soy el cuarto hijo";

function objetoPulsado() {
    return console.log("Has pulsado en: " + event.target.innerHTML);
}

listaNueva.addEventListener("click",  objetoPulsado);

//3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del elemento clickeado.
//Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".
listaNueva.removeEventListener("click", objetoPulsado);

function jerarquiaObjetoPulsado() {
    resultado = "";

    if (listaNueva.click) {
        resultado = console.log("Has pulsado en un elemento de nivel 2");
    }
    else {
        resultado = "Ha habido un error";
    }

    return resultado;
}

listaNueva.addEventListener("click", jerarquiaObjetoPulsado);