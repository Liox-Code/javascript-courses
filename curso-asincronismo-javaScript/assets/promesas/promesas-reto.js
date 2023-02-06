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

fechaData(API_URL)
    .then((data) => {
        console.log(data.info.count)
        return fechaData(`${API_URL}${data.results[0].id}`)
    })
    .then((data) => {
        console.log(data.name)
        return fechaData(data.origin.url)
    })
    .then((data) => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))