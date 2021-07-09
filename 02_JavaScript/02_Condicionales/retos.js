console.log('Hola desde retos! 👋');

// // // ------- RETO 1
// // // Almacenar un password en una variable
// // // Preguntar al usuario su contraseña
// // // Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// // // Si la contraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'

// console.log("RETO 1 -------------")

// const password = '123password'

// let usuarioLogin = prompt('Escribe tu contraseña')

// if (usuarioLogin == password){
//     console.log('Bienvenido');
// } else{
//     console.log('Password incorrecto, intenta de nuevo')
// }

// let password = "1234"
// let login = prompt("Ingresa tu contraseña");

//     if (password === login){
//     console.log("Bienvenido");
//     } 
//     else {
//     console.log("Contraseña incorrecta")
//     }


// ------- RETO 2
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.
// Utilizar símbolo de modulo/residuo -> % <-

// console.log("RETO 2------------")

// let elNumero = prompt('Ingresa un número, por favor')
// if(elNumero%2 == 0){
//     alert('tu número es par');
// } else {
//     alert('tu número es impar');
// } 

// if(elNumero%2 == 0){
//     alert('tu número es par');
// } else if(elNumero%2 == 1){
//     alert('tu número es impar');
// } else{
//     alert('Hubo un error, intenta de nuevo')
// }

// const numUsuario = parseInt(prompt('Ingresa un número'));
// if (numUsuario % 2 === 0) {
//     console.log('Tu número ' + numUsuario + ' es un número PAR');
//     alert('Tu número ' + numUsuario + ' es un número PAR');

// }   else{
//     console.log('Tu número ' + numUsuario + ' es un número IMPAR');
//     alert('Tu número ' + numUsuario + ' es un número IMPAR');

// }

// // o de esta forma:
// const residuo = numUsuario % 2

// if (residuo === 0) {
//     console.log('Tu número ' + numUsuario + ' es un número PAR');
// }   else if (residuo === 1) {
//     console.log('Tu número ' + numUsuario + ' es un número IMPAR');
//     alert('Tu número ' + numUsuario + ' es un número IMPAR')
// } else{
//     console.log('Datos incorrectos, por favor ingresa números enteros');
//     alert('Tu número ' + numUsuario + ' es un número IMPAR');
// }

// ------- RETO 3
// Crea una aplicación web empleando JavaScript 
// que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. 
// Compara los valores ingresados y muestra en pantalla, 
// mediante un alert o console.log, quién fue el jugador ganador.

// console.log('---RETO 3️⃣---');



// let jugador1 = prompt('Jugador 1: ingresa piedra, papel o tijera')
// let jugador2 = prompt('Jugador 2: ingresa piedra, papel o tijera')

// if (jugador1 == 'piedra' && jugador2 == 'tijera' || jugador1 == 'tijera' && jugador2 == 'papel' || jugador1 == 'papel' && jugador2 == 'piedra'){
//     alert('JUGADOR 1 GANA PARTIDA')
// }else if (jugador2 == 'piedra' && jugador1 == 'tijera' || jugador2 == 'tijera' && jugador1 == 'papel' || jugador2 == 'papel' && jugador1 == 'piedra'){
//     alert('JUGADOR 2 GANA PARTIDA')
// }else if (jugador1 == jugador2){
//     alert('¡EMPATE!')
// }else{
//     alert('Hubo un error, intenta de nuevo')
// }

// let player1 = prompt("Jugador 1, ingresa piedra, papel o tijera");
// let player2 = prompt("Jugador 2, Ingresa piedra, papel o tijera");

// // si agrego .toLowercase me permite convertir el texto de mayúsculas a minúsculas :)

// let piedra = "piedra"
// let papel = "papel"
// let tijera = "tijera"

// if ((player1 === piedra) && (player2 === papel)){
//     console.log("Player 2 gana la partida")
// }   else if ((player2 === piedra) && (player1 === papel)){
//     console.log("Player 1 gana la partida")
// }
//     else if ((player1 === tijera) && (player2 === papel)){
//         console.log("Player 1 gana la partida")
// }   
//     else if ((player2=== tijera) && (player1 === papel)){
//     console.log("Player 2 gana la partida")
// }
//     else if ((player1 === tijera) && (player2 === piedra)){
//     console.log("Player 2 gana la partida")
// }
//     else if ((player2 === tijera) && (player1 === piedra)){
//     console.log("Player 1 gana la partida")
// }
//     else if (player1 === player2){
//     console.log("Esto es un empate")
// } 
//     else {
//     console.log("Hubo un error, inténtalo de nuevo")
// }

// ------- RETO 4
// Crea una aplicación web con JavaScript que reciba tres números 
// digitados por el usuario, mediante prompts, 
// y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

// let num1 = Number(prompt('Ingresa un número 1/3'))
// let num2 = Number(prompt('Ingresa un número 2/3'))
// let num3 = Number(prompt('Ingresa un número 3/3'))

// if(num1 > num2 && num1 > num3){
//     alert(`El número: ${num1} es el mayor de los 3 números.`)
// }else if(num2 > num1 && num2 > num3){
//     alert(`El número: ${num2} es el mayor de los 3 números.`)
// }else if(num3 > num1 && num3 > num2){
//     alert(`El número: ${num3} es el mayor de los 3 números.`)
// }else if(num1 == num2 && num1 == num3){
//     alert('Los tres números que ingresaste son iguales')
// }else {
//     alert('Intenta de nuevo, ingresa sólo valores numéricos')
// }



// let num1 = Number(prompt("Ingresa un número (1/3)"));
// let num2 = Number(prompt("Ingresa otro número (2/3)"));
// let num3 = Number(prompt("Ingresa un número más (3/3)"));

// if (num1 > num2 && num1 > num3){
//     alert(num1, + ' es el mayor de los tres números')
// }
//     else if (num2 > num1 && num2 > num3){
//         alert(num2 + ' es el yor de los tres números')
//     }
//     else if (num3 > num1 && num3 > num2){
//         alert(num3, + ' es el mayor de los tres números')
//     }
//     //no funciona esto 👇🏽
//     else if (num1 === num2 && num1 === num3){
//         alert("Los tres números son iguales")
//     }
//     else {
//         alert("Hubo un error, intenta de nuevo")
//     }


// ------- RETO 5
// Crea una aplicación web con JavaScript que reciba 
// tres números digitados por el usuario, mediante prompts, 
// y muestre en pantalla, mediante un alert, la suma de los tres números.
// ¿Cómo verifico mediante condicionales que un valor existe?

// console.log('---------Reto 5---------');

let numUsuario1 = Number(prompt('Ingresa un número 1/3'))
let numUsuario2 = Number(prompt('Ingresa otro número 1/3'))
let numUsuario3 = Number(prompt('Ingresa un número más 1/3'))

let suma =  numUsuario1 + numUsuario2 + numUsuario3

alert(`La suma de los números que ingresaste es igual a: ${suma}`)










// const numero1 = Number(prompt('Ingresa un primer número','#'))
// const numero2 = Number(prompt('Ingresa un segundo número','#'))
// const numero3 = Number(prompt('Ingresa un tercer número','#'))

// if (!numero2 || !numero2 || !numero3) {
//     alert(`Debes ingresar valores numéricos`)
// }else{   
//     alert(`La suma de los 3 números que ingresaste es: ${numero1 + numero2 + numero3}`);

// }







//RESPUESTA DE PEDRO:
// const numero1 = Number(prompt('Ingresa un primer número', '#'));
// const numero2 = Number(prompt('Ingresa un segundo número', '#'));
// const numero3 = Number(prompt('Ingresa un tercer número', '#'));

// if (!numero1 || !numero2 || !numero3) {
//   alert(`Debes ingresar valores númericos`);
// } else {
//   alert(`La suma de los tres números que ingresaste es: ${numero1 + numero2 + numero3}`);
// }
