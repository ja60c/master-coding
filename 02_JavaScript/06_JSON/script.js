console.log('Hola desde script! 🖐🏽');
// JSON (JavaScript Object Notation)
// Es un formato de texto que se usa por excelencia para almacenar y/o compartir ddata entre cliente y servidor, entre programas en general
//La extensión del archivo JSOn es.json
//EL tipo de MIME: (Multipurpose Internet Mail Extension) del formato JSON como "application/json"

//Sintaxis básica JSON:
//{"propiedad": "valor"}


//Objeto de JavaScript

let objetoPersona = {
    nombre: 'Pedro',
    edad: '27'
}
console.log(objetoPersona);

//EL mismo objeto en JSON:

let objetoPersonaJSON ={
    "nombre": "Pedro",
    "edad": 27
}
console.log(objetoPersonaJSON); // JavaScript YA lo interpreta como un objeto

// MÉTODOS JSON
// JSON.parse(json) -> convierte el formato JSON a un objeto literal de js.
// JSON.stringify(objeto) ->convierte un objeto literal de js a formato JSON


//Objeto literal de JS
let mascota ={
    nombre: 'snoopy',
    raza: 'Beagle',
    estaVivo: true
}
console.log(mascota);

// Convertir objeto a JSON
let mascotaJSON = JSON.stringify(mascota);
console.log(mascotaJSON);

// Convertir JSON a objeto
let mascotaJS = JSON.parse(mascotaJSON);
console.log(mascotaJS);

//TIPOS DE DATOS  VÁLIDOS EN JSON
// string
// Number
// Object (contener valores de json validos)
// arreglos
// booleanos
// null

// TIPOS DE DATOS NO VALIDOS EN JSON
// funciones
// fechas (en formatos especificos sí, pero no como lo haríamos tradicionalmente con JS)
// undefined

// FETCH (como "traeme algo")
// El método fetch() permite hacer peticiones directamente desde el navegador
// Este método nos regresa un copcepto llamado: PROMESA, es decir, una propiedad que tiene 3 estados: pendiente, resuelta o rechazada.

// SINTAXIS BÁSICA:
// fetch(url) 
//     .then(respuesta =>{
//     //manejamos la respuesta
//     })
//     .then(data=>{ 
//     //manejamos la data
//     })
//     .catch(error =>{
//     //cacha cualquier error que haya surgido
//     //manejamos el error
//     })

//EJEMPLO TRAYENDO UN JSON LOCAL

const JSON_LOCAL = 'usuarios.json'

fetch(JSON_LOCAL) 
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(usuarios => {
        console.log(usuarios);
    })
    .catch(error=>{
        console.log(error);
    })


//Imprimiendo con un ciclo for

//Imprimiento con un forEach


// Mapeando el arreglo de usuarios

//Trayendo un JSON remoto

const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon'

fetch(URL_POKEAPI) 
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(pokemones.results => {
        console.log(pokemones);
    })
    .catch(error=>{
        console.log(error);
    })

// TRAYENDO TEXTO

// TRAYENDO IMÁGENES


