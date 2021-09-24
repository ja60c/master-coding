console.log('Hola desde index! 👋🤬😱😳😂');

// CRUD
// Create - Read - Update - Delete
// Operaciones / peticiones HTTP para interactuar con bases de datos

// Link de documentación Goodreads: https://goodreads-devf-aaron.herokuapp.com/docs/
// URL API: https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// CREATE AUTHOR - POST

const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
    const jsonSend = {name, last_name, nacionalidad, biography, gender, age}

    request.post(URL_BASE, {form: jsonSend}, (err, res, body) => {
        console.log('Error: ', err);
        console.log('Respuesta: ', res.statusCode);
        console.log('Body: ', body);
    })
}
createAuthor('Franky', 'Rucho', 'MX', 'Ruchitos' 'lindos', 'F', 7);



// READ ALL AUTHORS - GET
// cons readAllAuthors = () => {
//     request.get(URL_BASE, (err, res, body) => {
//         console.log('Error: ', err);
//         console.log('Respuesta: ', res.statusCode);
//         console.log('Body: ', JSON.parse(body));
//     })
// }
// READ ONE AUTHOR - GET
    // cons readOneAuthor = (id) => {
    //     request.get(`${URL_BASE}${id}/`, (err, res, body) => {
    //         console.log('Error: ', err);
    //         console.log('Respuesta: ', res.statusCode);
    //         console.log('Body: ', JSON.parse(body));
    //     })
    // }
    // readOneAuthor(13744);
// UPDATE ALL PROPERTIES OF AUTHOR - PUT
    // cons updateAllPropertiesFromAuthor = (id, name, last_name, nacionaidad, biography, gender, age) => {
    //     const jsonSend = { id, name, last_name, nacionaidad, biography, gender, age}
    //     request.put(`${URL_BASE}${id}/`, {from: jsonSend}, (err, res, body) => {
    //         console.log('Error: ', err);
    //         console.log('Respuesta: ', res.statusCode);
    //         console.log('Body: ', JSON.parse(body));
    //     })
    // }
    // updateAllPropertiesFromAuthor(13744, 'Pedrito', 'Gonzalez', 'ES', 'Una', 'M', 27);

// UPDATE ONE PROPERTY OF AUTHOR - PATCH
    // cons updateOnePropertyFromAuthor = (id, property, newValue) => {
    //     const jsonSend = {
    //         [property]: newValue
    //     }
    //     request.patch(`${URL_BASE}${id}/`, {form: jsonSend}, (err, res, body) => {
    //         console.log('Error: ', err);
    //         console.log('Respuesta: ', res.statusCode);
    //         console.log('Body: ', JSON.parse(body));
    //     })
    // }
    // updateOnePropertyFromAuthor(13744, 'age', 30);

// DELETE - DEL
    cons deleteAuthor = (id) => {
        request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
            console.log('Error: ', err);
            console.log('Res: ', res.statusCode);
            console.log('Body: ', JSON.parse(body));
        })
    }
deleteAuthor(13744);