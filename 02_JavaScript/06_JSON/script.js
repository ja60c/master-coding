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

// Objeto literal de JS
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
// number
// object (contener valores de json válidos)
// arreglos
// booleanos
// null

// TIPOS DE DATOS NO VALIDOS EN JSON
// funciones
// fechas (en formatos especificos sí, pero no como lo haríamos tradicionalmente con JS)
// undefined

// FETCH (como "traeme algo")
// El método fetch() permite hacer peticiones directamente desde el navegador
// Este método nos regresa un concepto llamado: PROMESA, 
// es decir, una propiedad que tiene 3 estados: pendiente, resuelta o rechazada.

// SINTAXIS BÁSICA:
// fetch(url, opciones) ---------> la url es a donde se hará la petición, las opciones es en caso de que queramos cambiar de método o agregar credenciales de acceso
//     .then(respuesta =>{
//     //manejamos la respuesta
//     })
//     .then(data=> { 
//     //manejamos la data
//     })
//     .catch(error => {
//     //cacha cualquier error que haya surgido
//     //manejamos el error
//     })

// //EJEMPLO TRAYENDO UN JSON LOCAL
const JSON_LOCAL = 'usuarios.json'

fetch(JSON_LOCAL) 
    .then(response =>{
        console.log(response);
        console.log(response.status);
        return response.json();
    })
    .then(usuarios => {
        console.log(usuarios);
    // console.log(usuarios[0]);
    // console.log(usuarios[1]);

    // Imprimiendo con un ciclo for
    for (var i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i]);
    }

    // Imprimiendo con un forEach
    usuarios.forEach(usuario => console.log(usuario));
    })
    .catch(error => {
        console.log(error);
    })

// TRAYENDO UN JSON REMOTO CON FETCH
const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon';
fetch(URL_POKEAPI)
    .then(response => response.json())
    .then(pokemones => pokemones.results.forEach(pokemon => console.log(`Hola soy ${pokemon.name}`)))
    .catch(error => console.log(error))

// También podemos traer y procesar texto con respuesta.text()
const txtLocal = 'texto.txt';
fetch(txtLocal)
  .then(response => response.text())
  .then(texto => console.log(texto))
  .catch(error => console.log(error))

// También podemos traer y procesar imágenes con respuesta.blob()
const imgLocal = 'imagen.jpg';
fetch(imgLocal)
  .then(response => response.blob())
  .then(imagen => console.log(imagen))
  .catch(error => console.log(error))