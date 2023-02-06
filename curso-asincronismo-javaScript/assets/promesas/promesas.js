const somethingWillHappen1 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Yei')
        } else {
            resolve('Whoops')
        }
    })
}

somethingWillHappen1()
    .then(Response => console.log(Response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            },2000)
        } else {
            const error = new Error('Whoo[s')
            reject(console.error())
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

Promise.all([somethingWillHappen1(), somethingWillHappen2()])
    .then(response => console.log(response))
    .catch(error => console.error(error))