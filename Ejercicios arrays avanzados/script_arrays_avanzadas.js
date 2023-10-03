//EJERCICIOS AVANZADOS ARRAYS
//1
const products = [
    { id: 1, name: "Camisa", price: 25 },
    { id: 2, name: "Pantalón", price: 40 },
    { id: 3, name: "Zapatos", price: 60 },
    { id: 4, name: "Bufanda", price: 15 },
    { id: 5, name: "Gorra", price: 10 },
];

function expensiveProducts(array) {
    let arrayNueva = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].price > 30) {
            arrayNueva.push(array[i]);
        }
    }

    return arrayNueva;
}

console.log(expensiveProducts(products));

function productsName(array) {
    let arrayNueva = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].price > 30) {
            arrayNueva.push(array[i].name);
        }
    }
    return arrayNueva;
}

console.log(productsName(products));

//2
function calculateTotal(array) {
    let total = 0;
    
    for (let i = 0; i < array.length; i++) {
        total += array[i].price;
    }
    return total;
}

console.log(calculateTotal(products));

//3
const students = [
    { id: 1, name: "Carlos", age: 22 },
    { id: 2, name: "Ana", age: 20 },
    { id: 3, name: "Luis", age: 25 },
    { id: 4, name: "Elena", age: 18 },
    { id: 5, name: "María", age: 21 },
];

function findStudents(id) {
    let estudiante = students.find(estudiante => estudiante.id == id);
    return estudiante;
}

console.log(findStudents(1));
console.log(findStudents(2));
console.log(findStudents(3));

function increaseAge(students) {
    for (let i = 0; i < students.length; i++) {
        students[i].age++;
    }
}
//Otra forma con map
let increaseAge2 = students.map((alumno => alumno.age++));
console.log(increaseAge2);

increaseAge(students);
console.log(students);


//4
const transactions = [
    { type: "ingreso", amount: 1000 },
    { type: "egreso", amount: 500 },
    { type: "ingreso", amount: 200 },
    { type: "ingreso", amount: 300 },
    { type: "egreso", amount: 150 },
];

function devolverTotal(array) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].type == "ingreso") {
            acumulador += array[i].amount;
        }
        else if (array[i].type == "egreso") {
            acumulador -= array[i].amount;
        }
    }
    return acumulador;
}

console.log(devolverTotal(transactions));

let resumen = transactions.map(operacion => operacion.type == "ingreso" ? operacion.amount : "-" + operacion.amount);
console.log("///////"+resumen);

let ingresos = transactions.filter(function darIngresos(operacion) {
        if (operacion.type == "ingreso") {
            return true;
        }
    }
);

console.log(ingresos);


let saldo = transactions.reduce(((total, operacion) => operacion.type == "ingreso" ? total += operacion.amount : total -= operacion.amount),0);

console.log(saldo);

//5
const persons = [
    { name: "Juan", age: 25 },
    { name: "Ana", age: 30 },
    { name: "Luis", age: 25 },
    { name: "María", age: 35 },
    { name: "Luis", age: 25 },
];

function removeDuplicates(persons) {
    /*
    let set = new Set();

    for (let i = 0; i < persons.length; i++) {
        set.add(persons[i]);
    }*/
    
    let noDuplicados = new Set(persons);
    return Array.from(noDuplicados);
    
}

let arraySinDuplicados = removeDuplicates(persons);
console.log(arraySinDuplicados);

//6
const fullNames = [
    "John Smith",
    "Alice Johnson",
    "Michael Brown",
    "Emily Davis",
    "David Johnson",
];

function getInitials(lista) {
    let nuevoArray = [];
    let contador;
    let nombreCorto;

    for (let i = 0; i < lista.length; i++) {
        contador = 1;
        let cadena = lista[i].trim();
        let letra = lista[i].charAt(0);
        nombreCorto = letra;
        while (letra != " ") {
            letra = cadena.charAt(contador);
            contador++;
        }
        letra = cadena.charAt(contador);
        nombreCorto += "."+letra;
        nuevoArray.push(nombreCorto);
    }
    return nuevoArray;
}

console.log(getInitials(fullNames));

function getLongestName(lista) {
    let masLargo = "";

    for (let i = 0; i < lista.length; i++) {
        let nombre = lista[i];
        if (masLargo != nombre && masLargo.length < nombre.length) {
            masLargo = nombre;
        }
    }
    return masLargo;
}

console.log(getLongestName(fullNames));

function findNamesStartingWith(lista, letra) {
    let arrayNuevo = [];

    for (let i = 0; i < lista.length; i++) {
        let nombre = lista[i];
        if (lista[i].charAt(0).toUpperCase() == letra.toUpperCase()) {
            arrayNuevo.push(nombre);
        }
    }
    return arrayNuevo;
}

console.log(findNamesStartingWith(fullNames, "A"));