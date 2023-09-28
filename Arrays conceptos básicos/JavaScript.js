//EJERCICIOS ARRAYS: CONCEPTOS BASICOS
//EJERCICIO 1
//1.-
let listaCompra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];

//2.-
listaCompra.splice(1,1);

//3.-
listaCompra.splice(3,0, "Naranjas", "Sandias");

//4.-
listaCompra.splice(1,1, "Cerezas", "Nísperos");

//5.-
console.log(listaCompra);

//EJERCICIO 2
//1.-
let original = ["arr", "ori", "ginal"];
//2.-
let copia = original.slice();
//3.-
copia.push("bocaillo");
console.log("Original -->" + original);
console.log("Copia -->" + copia);
//No se modifica

//EJERCICIO 3
//1.-
let notas = [4, 8, 3, 10, 5];
//2.-

let notasOrdenadas = notas.sort((nota1, nota2) => nota2 - nota1);//si ponemos nota1 - nota2 lo hace de menor a mayor

//3.-
console.log(notasOrdenadas);

//EJERCICIO 4
//1.-
const alumno1 = {
    nombre:"Juan",
    edad: 2
}
const alumno2 = {
    nombre:"Pedro",
    edad: 3
}
const alumno3 = {
    nombre:"Almendra",
    edad: 4
}
const alumno4 = {
    nombre:"Jose",
    edad: 5
}
const alumno5 = {
    nombre:"Juaquin",
    edad: 6
}

let alumnos = [];
alumnos.push(alumno1);
alumnos.push(alumno2);
alumnos.push(alumno3);
alumnos.push(alumno4);
alumnos.push(alumno5);

//2.-
let alumnosOrdenados = alumnos.sort((alumno1, alumno2) => alumno1.edad - alumno2.edad);

//3.-
console.log(alumnosOrdenados);
/*Esto nos imprime por consola
0
: 
{nombre: 'Juan', edad: 2}
1
: 
{nombre: 'Pedro', edad: 3}
2
: 
{nombre: 'Almendra', edad: 4}
3
: 
{nombre: 'Jose', edad: 5}
4
: 
{nombre: 'Juaquin', edad: 6}
*/

//EJERCICIO 5
//1.-
let array1 = ["Juan", "Pedro", "Alfonso"];
let array2 = [1, 3, 5, 8 ,3];

//2.-
let concatenado = array1.concat(array2);
console.log(concatenado);

//3.-
concatenado.reverse();
console.log("Reverse --> " + concatenado);

//4.-
concatenado.push("Plátanos");
console.log(concatenado.indexOf("Plátanos"));

//5.-
concatenado.splice(1,0, "Plátanos");
console.log(concatenado.lastIndexOf("Plátanos"));