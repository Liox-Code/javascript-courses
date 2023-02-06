// ************************************************** SCOPE **************************************************
var varX = 1;
var varX = 2;
varX = 3;
let letX = 1;
// let letX = 2; // ERROR
letX = 3;
const constX = 1;
// const constX = 2; // ERROR
// constX = 3; // ERROR

let x = 1;
{
    let x = 2;
    console.log(x); //2
}
console.log(x);//1

var x = 1;
{
    var x = 2;
    console.log(x);//2
}
console.log(x);//2

// ************************************************** CLOUSURE **************************************************

const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5) // 5
moneyBox(10) // 10

const moneyBox = (dineroInicial) => {
    var saveCoins = dineroInicial
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins
}

let myMoneyBox = moneyBox(3)
myMoneyBox(3) // 6
myMoneyBox(10) // 16
myMoneyBox(3) // 19

let otherMoneyBox = moneyBox(7)
otherMoneyBox(6) // 13
otherMoneyBox(8) // 21

// ****************************** VARIABLES PRIVADAS  ******************************

const person = () => {
    var saveName = "Name"
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            return saveName = name
        },
    }
}

let newPerson = person();
console.log(newPerson.getName())
newPerson.setName("Oscar")
console.log(newPerson.getName())

// ****************************** CLOUSURE INVOLUNTARIOS ******************************
// Podemos crear Closures de diferentes formas y también de forma involuntaria

const otraFuncion = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

otraFuncion() // 10 10 10 10 10 10 10 10 10 10

const otraFuncion = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

otraFuncion() // 0 1 2 3 4 5 6 7 8 9