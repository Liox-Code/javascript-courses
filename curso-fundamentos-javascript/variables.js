// ****************************************************************************************** Strings ******************************************************************************************

var nombre = 'Leonardo';
var apellido = 'Mendieta';

var nombreMayuscula = nombre.toUpperCase();
console.log(nombreMayuscula);

var nombreMiniscula = nombre.toLowerCase();
console.log(nombreMiniscula);

var primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

var segundaLetraNombre = nombre.charAt(1);
console.log(segundaLetraNombre);

var cantidadLetrasNombre = nombre.length;
console.log(cantidadLetrasNombre);

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompleto);

var subStr = nombre.substr(2, 3);
console.log(subStr);

// ****************************************************************************************** Numeros ******************************************************************************************

var edad = 22;
console.log(edad);
edad = edad + 3;
console.log(edad);
edad += 3;
console.log(edad);

edad = edad - 3;
console.log(edad);
edad -= 3;
console.log(edad);

var precioVino = 200.3;

var tresVinos1 = precioVino * 3;
console.log(`${tresVinos1} ${typeof(tresVinos1)}`);
var tresVinos2 = precioVino * 100 * 3 / 100;
console.log(`${tresVinos2} ${typeof(tresVinos2)}`);
var tresVinos3 = (precioVino * 3).toFixed(3);
console.log(`${tresVinos3} ${typeof(tresVinos3)}`);
var tresVinos4 = parseFloat((precioVino * 3).toFixed(3));
console.log(`${tresVinos4} ${typeof(tresVinos4)}`);

var pizza = 8;
var personas = 2;
var porcionesPizzaPersona = pizza / 2;
console.log(porcionesPizzaPersona);

// ****************************************************************************************** Funciones ******************************************************************************************

var nombre = 'Sasha';
var edad = 24;

function imprimirDatos(n, e){
    console.log(`${n} tiene ${e} años`);
}

imprimirDatos(nombre, edad);
imprimirDatos('Juan', 24);
imprimirDatos(24, 'Juan');
imprimirDatos();

// ****************************************************************************************** Objetos ******************************************************************************************

var persona = {
    nombre: 'Leonardo',
    apellido: 'Mendieta',
    edad: 24,
}

//(var {nombre, edad} = persona;) es equivalente a (var nombre = persona.nombre, edad = persona.edad;

function imprimirNombreMayuscula({nombre}){
    console.log(nombre.toUpperCase());
}

imprimirNombreMayuscula(persona);
imprimirNombreMayuscula({edad: 22, nombre: 'Pedro'});
imprimirNombreMayuscula({nombre: 'Juan', edad: 23});

// Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

// Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

function incrementeEdad1(p){
    p.edad += 1;
}

incrementeEdad1(persona);
console.log(persona);

function incrementeEdad2(p){
    return {
        ...p,
        edad: p.edad + 1,
    }
}

console.log(incrementeEdad2(persona));

// ****************************************************************************************** Comparaciones ******************************************************************************************

4 == '4' // TRUE
4 == '4' // 

var sacha = {
    nombre: 'Sacha'
}
var otro = {
    nombre: 'Sacha'
}
var otroMas = {
    ...sacha
}

var otroMasMas = sacha //Apunta a la misma variable (misma posicion en memoria RAM)

sacha == otro		
// FALSE
sacha === otro 	
// FALSE
sacha == otroMas	
// FALSE
sacha === otroMas	
// FALSE
sacha == otroMasMas	
// TRUE
sacha === otroMasMas	
// TRUE

// ESTRUCTURAS DE CONTROL
// 1 CONDICIONALES
// 2 REPETITIVAS

// ****************************************************************************************** CONDICIONALES ******************************************************************************************
var persona = {
    nombre: 'Leonardo',
    apellido: 'Mendieta',
    edad: 24,
    ingeniero: true,
    cocinero: false,
    cantante: true,
}

function profesiones(persona){
    console.log(`${persona.nombre} es:`);
    if(persona.ingeniero){
        console.log(`Ingeniero`);
    }
    else{
        console.log(`No es Ingeniero`);
    }
    if(persona.cocinero){
        console.log(`Cocinero`);
    }
    else{
        console.log(`No es Cocinero`);
    }
    if(persona.cantante){
        console.log(`Cantante`);
    }
    else{
        console.log(`No es Cantante`);
    }
}

profesiones(persona);

var persona = {
    nombre: 'Leonardo',
    apellido: 'Mendieta',
    edad: 24,
    ingeniero: true,
    cocinero: false,
    cantante: true,
}

const MAYORIA_DE_EDAD = 18;
 
// function esMayorDeEdad(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad.`);
    }
}

imprimirSiEsMayorEdad(persona);

// ****************************************************************************************** REPETITIVAS ******************************************************************************************

// FOR
// CAMBIO DE PESO
var persona = {
    nombre: 'Leonardo',
    apellido: 'Mendieta',
    edad: 24,
    peso: 75,
}

const CANTIDAD_CAMBIO_PESO = 0.2;
const CANTIDAD_DIAS_YEAR = 365;

console.log(`${persona.nombre} a principio del año pesa ${persona.peso}`);

const engorda = (persona) => persona.peso += CANTIDAD_CAMBIO_PESO;
const adelgaza = (persona) => persona.peso -= CANTIDAD_CAMBIO_PESO;

for(var i = 1; i <= CANTIDAD_DIAS_YEAR; i++){
    var random = Math.random();
    if(random < 0.25){
        engorda(persona);
    } else if(random < 0.50){
        adelgaza(persona);
    }
}

console.log(`${persona.nombre} a fin de año pesa ${persona.peso.toFixed(1)}`);

// WHILE
// CANTIDAD DIAS PARA BAJAR 3 KILOS
var persona = {
    nombre: 'Leonardo',
    apellido: 'Mendieta',
    edad: 24,
    peso: 75,
}

const CANTIDAD_CAMBIO_PESO = 0.3;
const CANTIDAD_DIAS_YEAR = 365;
const NUMERO_KILOS_BAJAR = 3;
const META = persona.peso - NUMERO_KILOS_BAJAR;


console.log(`${persona.nombre} a principio del año pesa ${persona.peso}`);

const engorda = (persona) => persona.peso = parseFloat((persona.peso + CANTIDAD_CAMBIO_PESO).toFixed(1));
const adelgaza = (persona) => persona.peso = parseFloat((persona.peso - CANTIDAD_CAMBIO_PESO).toFixed(1));

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var diasDieta = 0;

while(persona.peso > META){
    if(comeMucho()){
        engorda(persona);
    } 
    if(realizaDeporte()){
        adelgaza(persona);
    }
    diasDieta += 1;
}

console.log(`${persona.nombre} bajo ${NUMERO_KILOS_BAJAR}kg en ${diasDieta}`);

// DO WHILE

var contador = 0

const llueve = () => Math.random() < 0.25;

do{
    contador++;
} while (!llueve())

console.log(`Fui a ver si llovia ${contador} veces.`);

// SWITCH

var signoSodiacal = 'Géminis';
//var signoSodiacal = prompt('Cual es tu signo sodiacal?'); //Para navegadores

console.log(signoSodiacal);

switch(signoSodiacal){
    case 'Leo':
        console.log('Eres Leo');
        break
    case 'Cancer':
    case 'Cáncer':
        console.log('Eres Cáncer');
        break
    case 'Geminis':
    case 'Géminis':
        console.log('Eres Géminis');
        break
}

// Arrays

var persona1 = {
    nombre: 'Paola',
    apellido: 'Barros',
    altura: 1.76,
    cantidadLibros: 42,
}

var persona2 = {
    nombre: 'Juan',
    apellido: 'Zapata',
    altura: 1.83,
    cantidadLibros: 14,
}

var persona3 = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.60,
    cantidadLibros: 86,
}

var persona4 = {
    nombre: 'Vicky',
    apellido: 'Perez',
    altura: 1.72,
    cantidadLibros: 25,
}

var personas = [persona1, persona2, persona3, persona4];

for(var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

const esAlta = ({altura}) => altura > 1.8;

var personasAltas = personas.filter(esAlta);
// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.8;
// });

console.log(personasAltas);

const pasarAlturaCms = persona => ({...persona, altura: persona.altura * 100});

var personasCms = personas.map(pasarAlturaCms);

console.log(personas);
console.log(personasCms);

// var acum = 0;
// for(var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidad
// }

const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros;

var totalLibros = personas.reduce(reducer, 0);
console.log(totalLibros);

// Clases (Prototipos)
// Antiguo metodo
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy desarrollador`);
}

var sacha = new Persona('Sacha', 'Lifszyc',1.75);
sacha.saludar();
console.log(sacha.soyAlto());

var erick = new Desarrollador('Erick', 'Perez',1.82);
erick.saludar();
console.log(erick.soyAlto());

// Nuevo metodo

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        var { nombre, apellido} = this;
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        if(fn){
            fn(nombre, apellido, false);
        }
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var { nombre, apellido} = this;
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy desarrollador`);
        if(fn){
            fn(nombre, apellido, true);
        }
    }
}

function devolverSaludo(nombre, apellido, isDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(isDev){
        console.log(`No sabia que eras desarrollador`);
    }
}

var sacha = new Persona('Sacha', 'Lifszyc',1.75);
sacha.saludar();
console.log(sacha.soyAlto());

var erick = new Persona('Erick', 'Perez',1.82);
erick.saludar(devolverSaludo);
console.log(erick.soyAlto());

var erick = new Desarrollador('Juan', 'Florez',1.68);
erick.saludar(devolverSaludo);
console.log(erick.soyAlto());

// ****************************************************************************************** RECURSIVIDAD ************************************************************************************

function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0;
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(13, 4))

// ****************************************************************************************** MEMOIZACION *************************************************************************************

//Guarda info en cache y ahorra tiempo de procesamiento

function divisionEntera(numero){
    if(!this.cache){
        this.cache = {}
    }

    if(numero){
        return 1;
    }

    if(this.cache[numero]){
        return this.cache[numero]
    }

    this.cache[numero] = numero * divisionEntera(numero - 1)
    return this.cache[numero]
}

console.log(6)
console.log(6)

// ****************************************************************************************** FECHAS ******************************************************************************************

function diferenciaDiasEntreFechas(primeraFecha, segundaFecha){
    const MILISEGUNDOS_DIA = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(primeraFecha - segundaFecha)

    return Math.floor(diferencia / MILISEGUNDOS_DIA)
}

const fechaNacimiento =  new Date(1998,7,1)
const fechaHoy = new Date()

const resultado = diferenciaDiasEntreFechas(fechaNacimiento, fechaHoy)
console.log(`cantidad de dias: ${resultado}`);
console.log(`cantidad de años: ${Math.floor(resultado / 365)}`);

// ****************************************************************************************** CLOUSURE ****************************************************************************************

function crearSaludo (finalFrase){
    return function(nombre){
        console.log(`Hola ${nombre} ${finalFrase}`)
    }
}

const saludoArgentina = crearSaludo('che')
const saludoMexico = crearSaludo('guey')
const saludoColombia = crearSaludo('hey')
const saludoNormal = crearSaludo('hola')

saludoArgentina('Leo')
saludoMexico('Leo')
saludoColombia('Pedro')
saludoNormal('Juan')

// ****************************************************************************************** ESTRUCTURAS DE DATOS INMUTABLES *****************************************************************

//Efecto de lado
let persona1 = {
    nombre: 'Leo',
    apellido: 'Mendieta',
    edad: 22,
}

function aumentarEdad(persona1){
    return persona1.edad++
}

aumentarEdad(persona1)
console.log(persona1)
aumentarEdad(persona1)
console.log(persona1)
aumentarEdad(persona1)
console.log(persona1)

//ESTRUCTURAS DE DATOS INMUTABLES

let persona2 = {
    nombre: 'persona2',
    apellido: 'Mendieta',
    edad: 22,
}

const aumentarEdad = (persona2) =>({
        ...persona2,
        edad: persona2.edad + 1,
        //edad: persona2.edad++, Efecto de lado
    })

let persona2MasVieja1 = aumentarEdad(persona2)
console.log(persona2)
console.log(persona2MasVieja1)
let persona2MasVieja2 = aumentarEdad(persona2)
console.log(persona2)
console.log(persona2MasVieja2)
let persona2MasVieja3 = aumentarEdad(persona2)
console.log(persona2)
console.log(persona2MasVieja3)

// ****************************************************************************************** CONTEXTO CAMBIA AL LLAMAR FUNCION ***************************************************************

let persona = {
    nombre: 'Leo',
    apellido: 'Mendieta',
    edad: 22,
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

var saludarPersona1 = saludar.bind(persona)
saludarPersona1();
var saludarPersona2 = saludar.bind(persona, 'Hey')
saludarPersona2();

setTimeout(saludar.bind(persona, 'Exelsior'), 500)

saludar.call(persona, 'Hola che');
saludar.apply(persona, ['Super Exelsior']);

// ****************************************************************************************** CUANDO PONER (;) PUNTO Y COMA *******************************************************************

// console.log('Hola mi nombre es Leo') //ERROR
// [1,2,3].forEach(n => console.log(n * 2)) //ERROR

console.log('Hola mi nombre es Leo');
[1,2,3].forEach(n => console.log(n * 2))
// o puede ser tambien
console.log('Hola mi nombre es Leo')
;[1,2,3].forEach(n => console.log(n * 2))

var nombre = 'Juan'
// console.log('Hola mi nombre es Leo'); //ERROR
// `${nombre} soy desarrollador` //ERROR

console.log('Hola mi nombre es Leo');
`${nombre} soy desarrollador`

// function calcular(numero){
//     return   //ERROR
//      {   //ERROR
//         original: numero,    //ERROR
//         doble: numero * 2,   //ERROR
//     }    //ERROR
// }

function calcular(numero){
    return {
        original: numero,
        doble: numero * 2,
    }
}