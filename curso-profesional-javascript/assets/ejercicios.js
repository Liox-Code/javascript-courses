// ************************************************** SCOPE **************************************************
// ****************************** GLOBAL SCOPE ******************************

// var message = 'Hello! Platzi'
// console.log(window.message)

// ****************************** FUNCTION SCOPE ******************************

// function mostratNumerosPadre1(){
//     for (var i = 0; i < 10; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, 100)
//     }
// }

// mostratNumerosPadre1()

// function mostratNumerosPadre2(){
//     for (var i = 0; i < 10; i++) {
//         function printNumber2(n) {
//             setTimeout(function () {
//                 console.log(n)
//             }, 100)
//         }
//         printNumber2(i)
//     }
// }

// mostratNumerosPadre2()

// ****************************** BLOCK SCOPE ******************************

// function mostrarNumeros() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(function () {
//             console.log(i)
//         },100)
//     }
// }
// mostrarNumeros()

// ****************************** MODULE SCOPE ******************************

// <script type="module" src='assets/ejercicios.js'></script>

// ************************************************** CLOUSURE **************************************************
// ****************************** PRINT COLOR ******************************
// (function() {
//     let color = 'GREEN'

//     function printColor() {
//         console.log(color);
//     }
//     printColor()
// })()

// ****************************** FUNCIONES QUE REGRESAN FUNCIONES ******************************
// function printColor(color) {
//     let colorMensaje = `El color es ${color}`

//     return function () {
//         console.log(colorMensaje);
//     }
// }

// let colorPrinter = printColor('green')
// console.log(colorPrinter())

// ****************************** VARIABLES PRIVADAS ******************************
function makecounter(n) {
    let count = n
    return {
        increase: function() {
            return count++
        },
        decrease: function() {
            return count--
        },
        getCount: function() {
            return count
        },
    }
}

let counter = makecounter(7)
console.log(`this count is: ${counter.getCount()}`)
counter.increase()
console.log(`this count is: ${counter.getCount()}`)
counter.increase()
counter.increase()
counter.increase()
console.log(`this count is: ${counter.getCount()}`)
counter.decrease()
counter.decrease()
counter.decrease()
console.log(`this count is: ${counter.getCount()}`)

// ************************************************** THIS **************************************************

// this en el scope GLOBAL

console.log(`this: ${this}`)

// this en el scope de una funcion

function whoIsThis() {
    return this
}

console.log(`whoIsThis(): ${whoIsThis()}`)

// this en el scope de una funcion en strict mode

function whoIsThisStrict() {
    "use strict"
    return this
}
console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`)

// this en el contexto de un objeto

const person1 = {
    name: 'Gabriel',
    saludar: function() {
        console.log(`Hola soy ${this.name}`)
    }
}

person1.saludar()

// this cuando sacamos a una funcion de un objeto

const accion1 = person1.saludar;
accion1()

// this en el contextp de una clase

function person2(name) {
    this.name = name
}

person2.prototype.saludar = function () {
    console.log(`Me llamo ${this.name}`)
}

const angela = new person2('Angela');
angela.saludar()

// ************************************************** CALL, APPLY Y BIND **************************************************

// Establece `this` usando `call`
function saludar() {
    console.log(`Hola. Soy ${this.name} ${this.apellido}`)
}

const richard = {
    name: "Richard",
    apellido: 'Kaufman',
}

saludar.call(richard)

// Establece `this` usando `call` y pasar argumentos a la funcion

function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`)
}

caminar.call(richard,400,"este")

// Establece `this` usando `apply` y pasar argumentos a la funcion

const valores = [800, 'noroeste']
caminar.apply(richard, valores)

/*
    Call - comma
    Apply - areglo
*/

// Establece `this` en una funcion usando bind

const daniel = { name: 'Daniel', apellido: 'Sanchez'}
const danielSaluda = saludar.bind(daniel);

const danielCamino = caminar.bind(daniel, 2000);
danielCamino('oeste')

// ************************************************** PROTOTYPE **************************************************
// Un objeto comun y corriente

const zelda = {
    name: 'Zelda'
}

zelda.saludar = function() {
    console.log(`Hola ${this.name}`)
}

zelda.saludar()

const link = {
    name: 'Link'
}

link.saludar = function() {
    console.log(`Hola ${this.name}`)
}

link.saludar()

// Seamos un poco mas eficientes

function heroFunc1(name) {
    const hero = {
        name: name
    }

    hero.saludar = function () {
        console.log(`Hola soy ${this.name}`)
    }

    return hero
}

const Zelda1 = heroFunc1('Zelda')
Zelda1.saludar()
const Link1 = heroFunc1('Link')
Link1.saludar()
// Aun podemos mejorar mas y evitar tener que crear la misma funcion cada ves

const heroMethods1 = {
    saludar: function () {
        console.log(`Me llamo ${this.name}`)
    },
}

function herofunc2(name) {
    const hero = {
        name: name,
    }
    hero.saludar = heroMethods1.saludar
    return hero
}

const Zelda2 = herofunc2('Zelda')
Zelda2.saludar()
const Link2 = herofunc2('Link')
Link2.saludar()

// Object.create

const heroMethods2 = {
    saludar: function () {
        console.log(`Soy superhero: ${this.name}`)
    },
}

function herofunc3(name) {
    const hero = Object.create(heroMethods2)
    hero.saludar = heroMethods2.saludar
    hero.name = name
    return hero
}

const Zelda3 = herofunc3('Zelda')
Zelda3.saludar()
const Link3 = herofunc3('Link')
Link3.saludar()

// Los metodos de hero dentro de hero

function heroSuper(name) {
    const hero = Object.create(heroSuper.prototype)
    hero.name = name
    return hero
}

heroSuper.prototype.saludar = function () {
    console.log(`Me llamo: ${this.name}`)
}

const Zelda4 = heroSuper('Zelda')
Zelda4.saludar()
const Link4 = heroSuper('Link')
Link4.saludar()

// new es un atajo (azulcar sintactico) para llevar Hero.prototype al objeto

function heroNew(name) {
    this.name = name
}

heroNew.prototype.saludar = function () {
    console.log(`New: ${this.name}`)
}

const Zelda5 = new heroNew('Zelda')
Zelda5.saludar()
const Link5 = new heroNew('Link')
Link5.saludar()

// ************************************************** HERENCIA PROTOTIPAL **************************************************

// Propiedades de la instancia

console.log(`Name: ${Zelda5.name}`)

// propiedades de la clase

console.log(`Saludar: ${Zelda5.saludar}`)

// propiedades heredadas ej: toString

console.log(`toString: ${Zelda5.toString}`)

// hasOwnProperty (de donde sale toString o esto?)

console.log(`Zelda5.hasOwnProperty("name"): ${Zelda5.hasOwnProperty("name")}`)
console.log(`Zelda5.hasOwnProperty("saludar"): ${Zelda5.hasOwnProperty("saludar")}`)

// ************************************************** GENERATOR **************************************************

// Los generadores son funciones de las que se puede salir y volver a entrar
// Su contexto (asociacion de variables) será conservado entre las reentradas.
// Cada vez que llamamos next, la ejecucion del generador va a continuar hasta el proximo yield
function* simpleGenrator() {
    console.log('GENERATOR START')
    yield 1
    console.log('GENERATOR END')
}

const genSimpleGenrator = simpleGenrator()
genSimpleGenrator.next()
genSimpleGenrator.next()

//PODEMOS HACER GENERADORES INFINITOS
function* idMaker() {
    let id = 1
    let reset
    while (true) {
        reset = yield id
        if(reset){
            id = 1
        } else {
            id++
        }
    }
}

const genIdMaker = idMaker()
console.log(genIdMaker.next())
console.log(genIdMaker.next())
console.log(genIdMaker.next())
console.log(genIdMaker.next(true))
console.log(genIdMaker.next())

// AHORA HAGAMOS UN EJEMPLO UN POCO MAS COMPLEJO: LA SECUENCIA FIBONACCI
function* fibonacci() {
    let a = 1
    let b = 1
    while (true) {
        const nextNumber = a + b
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const genFibonacci = fibonacci()
console.log(genFibonacci.next())
console.log(genFibonacci.next())
console.log(genFibonacci.next())
console.log(genFibonacci.next())
console.log(genFibonacci.next())