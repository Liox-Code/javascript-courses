// ************************************************** TIPOS BASICOS **************************************************
// BOOLEAN
let muted: boolean = true
muted = false
// muted = "dasd" // ERROR

//NUMEROS
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//ARREGLOS
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']
// people.push(9000) // ERROR

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(4000)

//ENUM
enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`)

//ANY
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}

//OBJECT
let someObject:Object = {type: 'Wildcard'}

// ************************************************** FUNCIONES **************************************************
function add(a:number, b:number): number{
    return a + b
}

const sum = add(4, 6)

function createAdder(a:number): (number) => number {
    return function(b:number) {
        return b + a
    }
}

const addFour = createAdder(4)
console.log(addFour(6))

function fullNameOptional(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

console.log(fullNameOptional('Richard'))

function fullNameDefaultValue(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`
}

console.log(fullNameDefaultValue('Richard'))

// ************************************************** INTERFACE **************************************************
enum ColorInterface{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

interface rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo
}

function area(r: rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
    return this.color ? `un rectangulo ${this.Color}` : `un rectangulo`
}

console.log(rect.toString())

// ************************************************** PATRONES DE DISEÑO **************************************************
// SINGLETON
class singleton{
    private static instance: singleton
    private constructor() {

    }

    static getInstance(){
        if(!singleton.instance){
            singleton.instance = new singleton()
        }
        return singleton.instance
    }
}
const a = singleton.getInstance()
const b = singleton.getInstance()
console.log(`A es igual a B?`, a === b)

// OBSERVER
interface Observer{
    update: (data: any) => void
}

interface Subject{
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class bitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', () => {
            this.notify(el.value)
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs == observer
        })

        this.observers.splice(index, 1)
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer{
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector(`#price`)
    }

    update(data: any){
        this.el.innerText = data
    }
}

const value = new bitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)

setTimeout(() => value.unsubscribe(display),5000)

// DECORATOR

class Field{
    errors: string[]
    input: HTMLInputElement

    constructor(input: HTMLInputElement){
        this.input = input
        this.errors = []

        let errorMessage = document.createElement('p')
        errorMessage.className = 'text-danger'
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling)

        this.input.addEventListener('input', () => {
            this.errors = []
            this.validate()
            errorMessage.innerText = this.errors[0] || ''
        })
    }

    validate(){}
}

function RequiredFieldDecorator(field: Field): Field{
    let validate = field.validate

    field.validate = function(){
        validate()
        let value = field.input.value
        if(!value){
            field.errors.push('Requerido')
        }
    }
    return field
}


function EmailFieldDecorator(field: Field): Field{
    let validate = field.validate

    field.validate = function(){
        validate()
        let value = field.input.value
        if(value.indexOf('@') == -1){
            field.errors.push('Debe ser un email')
        }
    }
    return field
}

let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field)
field = EmailFieldDecorator(field)