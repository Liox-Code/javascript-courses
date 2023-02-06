const API_URL = 'https://rickandmortyapi.com/api/character/'

const OPTS = {crossDomain: true};

function fechaData(url_api, callback){
    $.get(url_api, OPTS, (data) => {
        callback(null, data)
    })
    .fail(() => {
        callback(new Error, null)
    })
}

console.log('****************************** CALLBACK ******************************')

fechaData(API_URL, ( error1, data1) => {
    if(error1) return console.log(error1)
    fechaData(`${API_URL}${data1.results[0].id}`, ( error2, data2) => {
        if(error2) return console.log(error2)
        fechaData(data2.origin.url, ( error3, data3) => {
            if(error3) return console.log(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        });
    });
});