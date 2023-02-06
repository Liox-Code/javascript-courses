// flat
let matriz = [1,2,3, [1,2,3, [1,2,3]]];

console.log(matriz.flat(0));
console.log(matriz.flat());
console.log(matriz.flat(1));
console.log(matriz.flat(2));

// flatmap
let matriz = [1,2,3, [1,2,3, [1,2,3]]];

console.log(matriz.flatmap(value => [value, value * 2]));

// trimStart y trimEnd

let frase = "      Hello      ";
console.log(frase.trimStart());
console.log(frase.trimEnd());



//optional catch biding

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

// fromEntries
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

// symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);