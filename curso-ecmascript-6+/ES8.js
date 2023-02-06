//Entries

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.entries(data);
console.log(entries);

//Values

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.values(data);
console.log(entries);

// padStart y padEnd

const frase = "Hello";
console.log(frase.padStart(7,'hi'));
console.log(frase.padEnd(12,' ------'));
console.log('Una frase'.padEnd(16,' ------'));

// Async y Await

const promesa = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    });
};

const asyncAwait1 = async () => {
    const hello = await promesa();
    console.log(hello);
    console.log('asdas');
}

asyncAwait1();

const asyncAwait2 = async () => {
    try{
        const hello = await promesa();
        console.log(hello);
        console.log('asdas');
    } catch (error) {
        console.log(console.error());
    }
};

asyncAwait2();