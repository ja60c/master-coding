console.log('Hola desde Reto Pizza! 🍕');

//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Dirección
// Preguntar Teléfono
// Preguntar si quieren pizza con piña o sin
// respuestas: sí o no
// -> mostrar las respuestas en una card de Bootstrap después de presionar un botón

// PASOS SUGERIDOS
// Paso 1: Declarar los elementos (inputs y respuestas) que vamos a usar del html (getElementById('id') es una forma)

const nombre = document.getElementById('nombre')
const direccion = document.getElementById('direccion')
const telefono = document.getElementById('telefono')
const pina = document.getElementById('pina')
const boton = document.getElementById('boton')
const respuesta = document.getElementById('respuesta')


// let nombre = prompt('Ingresa tu nombre')
// let direccion = prompt('¿Cuál es tu dirección?')
// let telefono = prompt('Ingresa tu teléfono')

// console.log(nombre);
// console.log(direccion);
// console.log(telefono);

// const funcionCambiar = () => {
//     console.log('click!');
//     titulo.innerHTML = 'Soy un nuevo innerHTML del título cambiado desde JS 🤯'
//     subtitulo.innerHTML = 'Soy el subtitulo cambiado desde JS 🐱‍👤'

//     titulo.style.color = 'red';
//     titulo.style.fontSize = '40px';
//     titulo.style.fontFamily = 'sans-serif';

// }

// document.write(`Tus datos son: ${ nombre + ' ' + direccion + ' ' + telefono}`)


// const boton = document.getElementById('boton')

// if ((player1 === piedra) && (player2 === papel)){
//     //     console.log("Player 2 gana la partida")
//     // }   else if ((player2 === piedra) && (player1 === papel)){
//     //     console.log("Player 1 gana la partida")