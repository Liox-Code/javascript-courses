// Default Params

// EcmaScript 5

function parametrosDefaultES5(nombre, edad, pais){
    var nombre = nombre || "Liox";
    var edad = edad || 22;
    var pais = pais || "Bolivia";
    console.log(nombre + " " + edad + " " + pais);
}

parametrosDefaultES5();
parametrosDefaultES5("Pedro");
parametrosDefaultES5("Pedro",42,"Peru");

// EcmaScript 6

function parametrosDefaultES6(nombre = "Liox", edad = 22, pais = "Bolivia"){
    console.log(`${nombre} ${edad} ${pais}`);
}

parametrosDefaultES6();
parametrosDefaultES6("Pedro");
parametrosDefaultES6("Pedro",42,"Peru");

// Concatenacion
    
let a = "Hola";
let b = " Mundo";

// EcmaScript 5

console.log(a + " " + b);

// EcmaScript 6

console.log(`${a} ${b}`);

// Multilinea

// EcmaScript 5

let loremES5 = "Frase epica en primera linea \n"
                + "Segunda linea de frase epica";

console.log(loremES5);

// EcmaScript 6

let loremES6 = `Frase epica en primera linea 
Segunda linea de frase epica`;

console.log(loremES6);

// Desustructuracion

let persona = {
    nombre: 'Oscar',
    edad: '32',
    pais: 'MX',
}

// EcmaScript 5

console.log(persona.nombre, persona.edad);

// EcmaScript 6

let {nombre, edad, pais} = persona;
console.log(nombre, edad , pais);

// Propagacion

let grupoA = ['Oscar', 'Julian', 'Ricardo'];
let grupoB = ['Valeria', 'Yesica', 'Camila'];

// EcmaScript 5

let gruposES5 = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];
console.log(gruposES5);

// EcmaScript 6

let grupoES6 = ['David', ...grupoA, ...grupoB];
console.log(grupoES6);

// Let

// EcmaScript 5

{
    var varES5 = "Hola Mundo ES5";
    console.log(varES5); // ERROR
}
console.log(varES5); // ERROR

// EcmaScript 6

{
    let letES6 = "Hola Mundo ES5";
    console.log(letES6); // OK
}
console.log(letES6); // ERROR

// Const

// EcmaScript 5

const a = "a";
a = "b"; // ERROR
console.log(a);

// EcmaScript 6

let a = "a";
a = "b"; // OK
console.log(a);

// Parámetros en objetos

let nombre = 'Oscar';
let edad = 32;

// EcmaScript 5

let objES5 = {nombre: nombre, edad: edad};
console.log(objES5);

// EcmaScript 6

let objES6 = {nombre, edad};
console.log(objES6);

// Arrow Function =>

let nombres = [
    { nombre: 'Oscar', edad: 32},
    { nombre: 'Leo', edad: 22}
];
// EcmaScript 5

let listaNombresES5 = nombres.map(function(item){
    console.log(item.nombre);
});

// EcmaScript 6

let listaNombresES6_1 = nombres.map(item =>{console.log(item.nombre);});

// listaNombresES6_2 = (nombre, edad) => { ... }
let listaNombresES6_2 = nombres.map(({nombre, edad}) => {console.log(`${nombre} ${edad}`);});


// listaNombresES6_2 = nombre => { ... }
let listaNombresES6_3 = nombres.map(({nombre}) => {console.log(`${nombre}`);});

// squareES6 = num => num * num;

let squareES6 = num => console.log(num * num);
squareES6(2);

// Promise

// EcmaScript 5

// EcmaScript 6

let promesa = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Se resolvio");
        } else{
            reject("Rechazado");
        }
    });
}

promesa()
    .then(respuesta => console.log(respuesta))
    .then(() => console.log("Otra accion"))
    .catch(error => console.log(error));

// Clase

// EcmaScript 6

class calculadora{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculadora();
console.log(calc.sum(3,2));

// Modulos

// EcmaScript 6

import {hello} from './modulos';

hello();

// Generadores

// EcmaScript 6

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);