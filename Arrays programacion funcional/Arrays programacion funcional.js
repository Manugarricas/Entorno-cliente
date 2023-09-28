//EJERCICIO 1
//1.-
function saludar1(nombre) {
    console.log("Hola " + nombre);
}

let saludar2 = nombre => "Hola " + nombre;
console.log(saludar1("Manuel"));
console.log(saludar2("Manuel"));

//EJERCICIO 2
let potencia = (base, exponente = 2) => base**exponente;
console.log(potencia(2,3));
console.log(potencia(2));

//EJERCICIO 3
let aplica_fn = (parametro, fn) => fn(parametro);
console.log(aplica_fn(2,potencia));

//EJERCICIO 4
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = array.filter(num => num%2 == 0);

console.log(pares);

let cuadrado = array.map(num => num**num);
console.log(cuadrado);

let suma = array.reduce((total, nota) => total += nota, 0);
console.log(suma);

let mayores_cero = array.every(nota => nota >= 0);
console.log(mayores_cero);

let mayores_diez = array.some(num => num >= 10);
console.log(mayores_diez);

//EJERCICIO 5
const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad"
    }
};

const persona2 = {...persona};
persona2.edad = 2;
console.log(persona);
console.log(persona2);
//Solo cambia en la copia


persona2.direccion.calle = "Diamantino";
console.log(persona);
console.log(persona2);
//Cambia en ambos

//EJERCICIO 6
let otroArray = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = otroArray;

const persona3 = {
    nombre: "Alice",
    edad: 25
}

otroArray.push(persona3);

let [,,,,,prueba] = otroArray;
console.log(prueba);

//EJERCICIO 7
const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

let nombresNoRepetidos = new Set(nombres);

console.log(nombresNoRepetidos);

let arrayNoRepetidos = Array.from(nombresNoRepetidos);

console.log(arrayNoRepetidos);