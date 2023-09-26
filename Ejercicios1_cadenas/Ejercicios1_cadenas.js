//EJERCICIOS CADENAS JAVASCRIPT
//1.-
function longitud(cadena) {
    return cadena.length;
}
console.log(longitud("ana"));

//2.-
function devuelvePrimeraLetra(cadena) {
    return cadena.charAt(0);
}
console.log(devuelvePrimeraLetra("Letra"));

//3
function devuelveUltimaLetra(cadena) {
    return cadena.charAt(cadena.length-1);
}
console.log(devuelveUltimaLetra("Letra"));

//4
function devuelveEnesimaLetra(cadena, numero) {
    return cadena.charAt(numero);
}
console.log(devuelveEnesimaLetra("cadena",3));

//5
console.log("wonderful day".substring(3,7));

//6
function devuelveMasLarga(cadena1,cadena2) {
    let resultado = "";
    if (cadena1.length > cadena2.length) {
        resultado = `La cadena mayor es: ${cadena1}`
    }
    else if (cadena1.length < cadena2.length) {
        resultado = resultado = `La cadena mayor es: ${cadena2}`
    }
    else {
        resultado = "Las cadenas son iguales"
    }
    return resultado;
}

console.log(devuelveMasLarga("Soy corta", "Yo soy mas larga"));
console.log(devuelveMasLarga("Somos iguales", "Somos iguales"));
console.log(devuelveMasLarga("Adios", "Hola"));

//7
function devuelveMasLarga2(cadena1, cadena2, cadena3) {
    let resultado = "";
    
    if (cadena1.length > cadena2.length && cadena1.length > cadena3.length) {
        resultado = `La cadena: ${cadena1} es la mas larga`;
    }
    else if (cadena2.length > cadena1.length && cadena2.length > cadena3.length) {
        resultado = `La cadena: ${cadena2} es la mas larga`;
    }
    else if (cadena3.length > cadena1.length && cadena3.length > cadena2.length) {
        resultado = `La cadena: ${cadena3} es la mas larga`;
    }
    else {
        resultado = "Al menos dos cadenas son iguales";
    }
    return resultado;
}

console.log(devuelveMasLarga2("cadena1", "cadena2", "cadena3"));
console.log(devuelveMasLarga2("cadena1", "dgf", "fghf"));
console.log(devuelveMasLarga2("asdf", "cadena2", "safd"));
console.log(devuelveMasLarga2("asf", "asf", "cadena3"));

//8
function generarNombre(cadena1, cadena2, cadena3) {
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
        resultado = "error"
    }
    else {
        resultado = devuelvePrimeraLetra(cadena1) + devuelvePrimeraLetra(cadena2) + devuelvePrimeraLetra(cadena3);
    }
    return resultado;
}

console.log(generarNombre("a", "ijwgfshyuiosgf", "jhvac"));
console.log(generarNombre("Manuel", "bocaillo", "xope que rico"));

//9
function generarNombre2(cadena1, cadena2, cadena3) {
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
        resultado = "error"
    }
    else {
        resultado = devuelveUltimaLetra(cadena1) + devuelveUltimaLetra(cadena2) + devuelveUltimaLetra(cadena3);
    }
    return resultado;
}

console.log(generarNombre2("a", "ijwgfshyuiosgf", "jhvac"));
console.log(generarNombre2("Manuel", "bocaillo", "xope que rico"));

//10
function generarNombre3(cadena1, cadena2, cadena3) {
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
        resultado = "error"
    }
    else {
        resultado = cadena1;
    }
    return resultado;
}

console.log(generarNombre3("a", "ijwgfshyuiosgf", "jhvac"));
console.log(generarNombre3("Manuel", "bocaillo", "xope que rico"));

//11
function tieneLetra(cadena, letra) {
    resultado = false;
    if (cadena.indexOf(letra) == -1) {
        resultado = false; 
    }
    else {
        resultado = true;
    }
    return resultado;
}

console.log(tieneLetra("Hola", "o"));
console.log(tieneLetra("Hola", "p"));

//12
function tieneLetraEvolution(cadena, letra) {
    resultado = false;
    letra = letra.toUpperCase();
    
    if (cadena.toUpperCase().indexOf(letra) === -1) {
        resultado = false; 
    }
    else {
        resultado = true;
    }
    return resultado;
}

console.log(tieneLetraEvolution("Hola", "O"));
console.log(tieneLetraEvolution("Hola", "p"));

//13
function crearPalabra(letra, cantidad) {
    let contador = 0;
    let cadenaNueva = "";

    while (contador != cantidad) {
        contador++;
        cadenaNueva += letra;
    }
    return cadenaNueva;
}

console.log(crearPalabra("h", 3));
console.log(crearPalabra("L", 5));

//14
function crearPalabraMayus(letra, cantidad) {
    let contador = 0;
    let cadenaNueva = "";

    while (contador != cantidad) {
        contador++;
        cadenaNueva += letra.toUpperCase();
    }
    return cadenaNueva;
}

console.log(crearPalabraMayus("h", 3));
console.log(crearPalabraMayus("L", 5));

//15
function addGuiones(cadena) {
    resultado = "";
    contador = 0;

    for (let i = 0; i <= cadena.length*2; i++) {
        if (i%2 == 0) {
            resultado = resultado + cadena.charAt(contador)
            contador++;
        }
        else {
            resultado = resultado + "-";
        }
    }
    return resultado;
}

console.log(addGuiones("Hola"));
console.log(addGuiones("Guioneeeees"));

//16
function contadorDeLetras(cadena, letra) {
    contador = 0;

    for (let i = 0; i <= cadena.length; i++) {
        if (cadena.charAt(i) == letra) {
            contador++;
        }
    }
    return contador;
}

console.log(contadorDeLetras("Vavavavava", "a"));
console.log(contadorDeLetras("VavavavavaHolaHola", "o"));

//17
function contadorDeLetras2(cadena1, cadena2, letra) {
    let contador_cadena1 = 0;
    let contador_cadena2 = 0;
    resultado = "";
    
    for (let i = 0; i <= cadena1.length; i++) {
        if (cadena1.toUpperCase().charAt(i) == letra.toUpperCase()) {
            contador_cadena1++;
        }
    }
    for (let i = 0; i <= cadena2.length; i++) {
        if (cadena2.toUpperCase().charAt(i) == letra.toUpperCase()) {
            contador_cadena2++;
        }
    }
    if (contador_cadena1 > contador_cadena2) {
        resultado = cadena1;
    }
    else {
        resultado = cadena2;
    }
    return resultado;
}

console.log(contadorDeLetras2("Hola", "Holo", "o"));
console.log(contadorDeLetras2("Hola", "Holo", "O"));

//18
function toCase(cadena) {
    return cadena.toLowerCase() + "-" + cadena;
}

console.log(toCase("Pablo"));

//19
function shortcut(cadena1, cadena2) {
    resultado = "";
    return cadena1.charAt(0) + cadena2.charAt(0);
}

console.log(shortcut('Amnesty', 'International'));

//20
function firstChar(cadena) {
    return cadena.trim().charAt(0);
}

console.log(firstChar("Rosa de Guadalupe"));

//21
function indexOfIgnoreCase(cadena, aBuscar) {
    resultado = 0;
    if (cadena.toUpperCase().includes(aBuscar.toUpperCase())) {
        resultado = 1;
        //No se devolver la posicion en la que se encuentra
    }
    return resultado;
}
console.log("RESULTADOS EJERCICIO")
console.log(indexOfIgnoreCase("bit","it"));
console.log(indexOfIgnoreCase("bit","IT"));
console.log(indexOfIgnoreCase("bit","at"));

//22
function firstWord(cadena) {
    contador = 0;
    resultado = "";
    cadena = cadena.trim();
    letra = cadena.charAt(contador);
    while (letra != " " || contador > cadena.length) {
        letra = cadena.charAt(contador);
        resultado += cadena.charAt(contador);
        contador++;
    }
    return resultado;
}

console.log(firstWord("      bocaillo kkkkkkk"));

//TEMPLATE LITERALS
//1.-
function saludoPersonalizado(nombre, edad) {
    return `Hola ${nombre}, tienes ${edad}.`
}

console.log(saludoPersonalizado("Raul", 19));

//2.-
let cadenaCompra = "Choped, Jamon, Queso";
console.log(`La lista de la compra es: ${cadenaCompra}.`);

//3.-
const producto = {
    precio: 5.99,
    nombre: "Champu",
    categoria: "Higiene personal",
    precio_sin_iva: 4.7,
}

function informacionProducto(producto) {
    return `El producto es: ${producto.nombre}, el precio es de: ${producto.precio}, sin iva seria ${producto.precio_sin_iva} y es de la categoria ${producto.categoria}.`;;
}

console.log(informacionProducto(producto));

//DNI Y LETRA
let dni1 = "12345678w";
let dni2 = "87654321T";

function comprobarDNI(dni) {
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resultado = false;

    if (dni.length === 9) {
        let numero = dni.substring(0,8);
        numero = numero%23;
        cadena = cadena.substring(numero,numero+1);
        if (dni.substring(8,9) === cadena) {
            resultado = true;
        }
    }
    return resultado;
}

console.log(comprobarDNI("48122128X"));//Verdadero
console.log(comprobarDNI("48122128A"));//False
console.log(comprobarDNI(dni1));//False
console.log(comprobarDNI(dni2));//False
