// Spread Operator

const obj = {
    nombre: "Oscar",
    edad: 32,
    pais: "MX",
};

let {name, ...all} = obj;
console.log(all);

const obj1 = {
    nombre: "Oscar",
    edad: 32,
};

const obj2 = {
    ...obj1,
    pais: "MX",
};

console.log(obj1);
console.log(obj2);

// Promise .finally

const promesa = () => {
    return new Promise ((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

promesa()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match2 = regexData.exec('2018-04-20');
const match21 = regexData.exec('2020-05-132');

console.log(match2[1],match2[2],match2[3]);

console.log(match21[1],match21[2],match21[3]);

console.log(match2);

console.log(match21);