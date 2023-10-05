//EJERCICIOS DOM
//1.-
//1.1.-
let main = document.getElementById("lipsum");
console.log(main);

//1.2.-
let class_error = document.getElementsByClassName("important");
console.log(class_error);

//1.3.-
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

//1.4.-
let primerError = document.querySelector("li.important");
console.log(primerError);

//1.5.-
let errores = document.querySelectorAll(".important");
console.log(errores);
console.log("/////////////////////////////");

//1.6.- Obtener de dos formas distintas lo siguiente
//Elemento con id 'input2'
let number1 = document.getElementById("input2");
let number11 = document.querySelectorAll("#input2")[0];
console.log(number1);
console.log(number11);
console.log("/////////////////////////////");

//La coleccion de parrafos
let number2 = document.getElementsByTagName("p");
let number22 = document.querySelectorAll("p");
console.log(number2);
console.log(number22);
console.log("/////////////////////////////");

//La coleccion de parrafos dentro del div
let number3 = document.querySelectorAll("div p");
let number33 = document.querySelectorAll("p:nth-of-type(1)");
console.log(number3);
console.log(number33);
console.log("/////////////////////////////");

//El formulario
let number4 = document.getElementsByTagName("form")[0];
let number44 = document.querySelector("form");
console.log(number4);
console.log(number44);

//Todos los inputs
let number5 = document.getElementsByTagName("input");
let number55 = document.querySelectorAll("input");
console.log(number5);
console.log(number55);

//Todos los inputs con nombre 'sexo'
let number6 = document.querySelectorAll("label:nth-of-type(4) input");
let number66 = document.querySelectorAll("label:nth-last-child(2) input");
console.log(number6);
console.log(number66);