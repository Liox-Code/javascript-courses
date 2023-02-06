const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const opts = {crossDomain: true};

//****************************** CALLBACK ******************************
//****************************** VERSION 1 ******************************

// function onCharacterResponse(character){
//     console.log(`Hola ${character.name}`);
// }
var onCharacterResponseV1 = function (character){
    console.log(`Hola ${character.name}`);
}

function obtenerPersonajeV1(id){
    const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(characterUrl, opts, onCharacterResponseV1)
}

//No se respeta el orden por que no se puede saber en que orden devolvera el servidor la peticion
obtenerPersonajeV1(1);//Luke Skiwaker
obtenerPersonajeV1(2);//C-3PO
obtenerPersonajeV1(3);//R2-D2

//****************************** VERSION 2 ******************************

function obtenerPersonajeV2(id, callback){

    const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(characterUrl, opts, callback)
    .fail(function(){
        console.log(`Sucedio un error. No se pudo oterner el personaje ${id}`);
    });
}

//No se respeta el orden por que no se puede saber en que orden devolvera el servidor la peticion
obtenerPersonajeV2(1, function(character){
    console.log(`Hola ${character.name}`);
    obtenerPersonajeV2(2, function(character){
        console.log(`Hola ${character.name}`);
        obtenerPersonajeV2(3, function(character){
            console.log(`Hola ${character.name}`);
        });//R2-D2
    });//C-3PO
});//Luke Skiwaker

//****************************** PROMISE ******************************

// function obtenerPersonajePromesa(id){
//     return new Promise(function (resolve, reject){
//         const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//         $.get(characterUrl, opts, function(personaje){
//             resolve(personaje);
//         })
//         .fail(function(){
//             reject(id);
//         });
//     });
// }
function obtenerPersonajePromesa(id){
    return new Promise(function (resolve, reject){
        const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(characterUrl, opts, (personaje) => resolve(personaje))
        .fail(() => reject(id));
    });
}

function onError(id){
    console.log(`Sucedio un error. No se pudo oterner el personaje ${id}`);
}

// obtenerPersonajePromesa(1)
//     .then(function(personaje){
//         console.log(`Hola ${personaje.name}`);
//     })
//     .catch(function(id){
//         onError(id);
//     })
obtenerPersonajePromesa(1)
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
        return obtenerPersonajePromesa(2);
    })
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
        return obtenerPersonajePromesa(3);
    })
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
    })
    .catch(onError)

function obtenerPersonajePromesa(id){
    return new Promise(function (resolve, reject){
        const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(characterUrl, opts, (personaje) => resolve(personaje))
        .fail(() => reject(id));
    });
}

function onError(id){
    console.log(`Sucedio un error. No se pudo oterner el personaje ${id}`);
}

// obtenerPersonajePromesa(1)
//     .then(function(personaje){
//         console.log(`Hola ${personaje.name}`);
//     })
//     .catch(function(id){
//         onError(id);
//     })
obtenerPersonajePromesa(1)
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
        return obtenerPersonajePromesa(2);
    })
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
        return obtenerPersonajePromesa(3);
    })
    .then(personaje => {
        console.log(`Hola ${personaje.name}`);
    })
    .catch(onError)

//Promesas en Parelelo

function obtenerPersonajePromesaParalelo(){
    var ids = [1 ,2 ,3 ,4 ,5 ,6 ,7];
    // var promesas = ids.map(function(id){
    //     return obtenerPersonajePromesa(id);
    // });
    var promesas = ids.map(id => obtenerPersonajePromesa(id));
    Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)
}

obtenerPersonajePromesaParalelo();

//****************************** ASYNC AWAIT ******************************

async function obtenerPersonajeAsyncAwait(){
    var idsAsyncAwait = [1 ,2 ,3 ,4 ,5 ,6 ,7];
    var promesas = idsAsyncAwait.map(id => obtenerPersonajePromesa(id));
    try{
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch (id){
        onError(id);
    }
}

obtenerPersonajeAsyncAwait();