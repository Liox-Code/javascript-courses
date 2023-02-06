const doSomethingAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something Async'),2000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

doSomething()