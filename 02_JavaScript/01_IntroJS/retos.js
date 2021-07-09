console.log('Hola desde retos!');
// ------- RETO 1: VARIABLES
// Guarda en variables el nombre de las siguientes mascotas:
// 1. Pedrito
// 2. Rufo
// 3. Chancla

const masc1 = 'Pedrito'
const masc2 = 'Rufo'
const masc3 = 'Chancla' 

let misMascotas = masc1 + ' ' + masc2 + ' ' + 'y' + ' ' + masc3

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

// console.log('Mis mascotas son: ' + mascota1 + ', ' mascota2 + ' y ' mascota3);
// o también: 
console.log('Mis mascotas son', misMascotas);

console.log(`Mis mascotas son ${masc1}, ${masc2} y ${masc3}`);

// ------- RETO 2: INPUT/OUTPUT
// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
//
// "Quiero mucho a mis mascotas mascota1 y mascota2"
//
// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

let Mascota1 = prompt('Escribe el nombre de una de tus mascotas (1/2)')
let Mascota2 = prompt('Escribe el nombre de otra de tus mascotas (2/2)')

// CONCATENANDO
console.log('CONCATENANDO: Quiero mucho a mis mascotas ' + Mascota1 + ' y ' + Mascota2);
// STRING TEMPLATES
console.log(`PLANTILLAS JS: Quiero mucho a mis mascotas ${Mascota1} y ${Mascota2}`);
// ------- RETO 3: CONVERSIÓN DE DATOS
// 1. Guarda la cadena de texto "100" en una variable
// 2. Muestra el contenido de esta variable en consola
// 3. Muestra el TIPO DE DATO de esta variable en consola
// 4. Transforma la variable de string a number
//   El color cambia (en cadena es negro y en number es azul)
// El tipo de dato cambia pasa de ser string a ser number
// 5. Muestra nuevamente el contenido de esta variable en consola
//
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla?
// ¿Qué es entonces un tipo de dato?
// Info que nos permite diferenciar entre los tipos de cvariables que existen para poderlos manipular


const text = '100';
console.log(text);
console.log(typeof text);

// const num = 100
// console.log(num);
// console.log(typeof num);

// //o:
let numero = parseInt(text)

console.log(numero);
console.log(typeof numero);
console.log(typeof Number(text));

