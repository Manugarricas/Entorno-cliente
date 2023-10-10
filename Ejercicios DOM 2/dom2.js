//EJERCICIOS DOM 2. MANUEL JESUS GARRIDO CASTILLO
//EJERCICIO 1: CREACION Y ADICION DE NODOS
//1.1. Utiliza document.createElement('etiqueta') para crear un nuevo elemento HTML <div>. Asigna este elemento a una variable llamada nuevoDiv.
let nuevoDiv = document.createElement("div");

//1.2. Usa document.createTextNode('texto') para crear un nuevo nodo de texto con el contenido "Nuevo elemento de lista". Asigna este nodo a una variable llamada textoNuevo.
let textoNuevo = document.createTextNode("Nuevo elemento de lista");

//1.3. Utiliza nuevoDiv.appendChild(nuevoNodo) para agregar textoNuevo como hijo del nuevoDiv. Luego, agrega nuevoDiv como último hijo del elemento con el id "lipsum" en tu página web de ejemplo.
nuevoDiv.appendChild(textoNuevo);
document.getElementById("lipsum").appendChild(nuevoDiv);

//1.4. Añade a la página:
// Un nuevo párrafo al final del DIV ‘lipsum’ con el texto “Nuevo párrafo añadido por javascript” (fíjate que una palabra estça en negrita)
let divLipsum = document.createElement("div");
let parrafico = document.createElement("p");
parrafico.innerHTML = "Nuevo parrafo <b>añadido</b> por javascript";
divLipsum.appendChild(parrafico);
nuevoDiv.appendChild(divLipsum);

// Un nuevo elemento al formulario tras el ‘Dato 1’ con la etiqueta ‘Dato 1 bis’ y el INPUT con id ‘input1bis’ que al cargar la página tendrá escrito “Hola”
let dato2nuevo = document.createElement("input");
let dato1 = document.getElementById("input1");

dato1.after(dato2nuevo);

dato2nuevo.setAttribute("id", "input1bis");
dato2nuevo.setAttribute("value", "Hola")

//EJERCICIO 2: INSERCION DE NODOS
//2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu 
//página web de ejemplo. Almacena este nodo en una variable llamada primerParrafo
let primerParrafo = document.querySelector("#lipsum p:nth-of-type(1)");

//2.2. Crea un nuevo elemento <p> con el texto "Este es el nuevo segundo párrafo" y almacénalo en una variable llamada nuevoParrafo.
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "Este es el nuevo segundo párrafo";

//2.3. Utiliza el método primerParrafo.before(nuevoParrafo) para insertar nuevoParrafo antes del primer párrafo dentro del div "lipsum".
primerParrafo.before(nuevoParrafo);

//EJERCICIO 3: REEMPLAZO Y ELIMINACION DE NODOS
//3.1. Utiliza document.querySelector() para obtener el primer elemento <li> dentro de una lista en tu 
//página web de ejemplo. Almacena este nodo en una variable llamada primerElemento.
let primerElemento = document.querySelector("ul li:nth-of-type(1)");

//3.2. Crea un nuevo elemento <li> con el texto "Nuevo elemento de lista" y almacénalo en una variable llamada nuevoElemento.
let nuevoElemento = document.createElement("li");
nuevoElemento.innerHTML = "Nuevo elemento de la lista";

//3.3. Utiliza el método primerElemento.replaceWith(nuevoElemento) para reemplazar el primerElemento con el nuevoElemento dentro de la lista.
primerElemento.replaceWith(nuevoElemento);

//3.4. Utiliza el método nuevoElemento.remove() para eliminar el nuevoElemento de la página.
nuevoElemento.remove();

//EJERCICIO 4: ATRIBUTOS Y ESTILOS
//4.1. Utiliza document.querySelector() para obtener un elemento de tu página web que tenga un atributo id. Almacena este elemento en una variable.
let elementoConId = document.getElementById("input1");

//4.2. Usa el método elemento.setAttribute('nombreAtributo', 'valor')
//para agregar un atributo "data-nuevo" con el valor "123" al elemento obtenido en el ejercicio 4.1.
elementoConId.setAttribute("data-nuevo", "123");


//4.3. Utiliza el método elemento.removeAttribute('nombreAtributo') para eliminar el atributo "data-nuevo" del elemento.
elementoConId.removeAttribute("data-nuevo");

//4.4. Cambia el color de fondo de un elemento de tu página web utilizando la propiedad
//style.backgroundColor. Asegúrate de que el cambio de estilo se realice mediante JavaScript.
elementoConId.setAttribute("style", "background-color: red;");

//EJERCICIO 5: CLASES Y CLASSLIST
//5.1. Utiliza document.querySelector() para obtener un elemento de tu página web y
//asigna una clase "destacado" a este elemento utilizando la propiedad elemento.className.
let ejemploClases = document.querySelector("#lipsum");
ejemploClases.className = "destacado";

//5.2. Utiliza la propiedad classList para agregar la clase "nuevo-estilo" al elemento obtenido en el ejercicio 5.1.
ejemploClases.classList += " nuevo-estilo";

//5.3. Emplea la propiedad classList para eliminar la clase "destacado" del elemento obtenido en el ejercicio 5.1.
ejemploClases.classList = "nuevo-estilo";

//5.4. Comprueba si el elemento obtenido en el ejercicio 5.1 tiene la clase "nuevo-estilo" utilizando el método classList.contains().
console.log(ejemploClases.classList.contains("nuevo-estilo"));