const API_URL = 'https://rickandmortyapi.com/api/character/'

const OPTS = {crossDomain: true};

function fechaData(url_api){
    return new Promise((resolve, reject) => {
        $.get(url_api, OPTS, (data) => {
            resolve(data)
        })
        .fail(() => {
            const error = new Error('Error Promesa');
            reject(error)
        })
    })
}

const printData  = async () => {
    try{
        const cantidadPersonajes = await fechaData(API_URL)
        const personaje = await fechaData(`${API_URL}${cantidadPersonajes.results[0].id}`)
        const origen = await fechaData(personaje.origin.url)
        console.log(cantidadPersonajes.info.count)
        console.log(personaje.name)
        console.log(origen.dimension)
    } catch (error) {
        console.error(error)
    }
}

printData()