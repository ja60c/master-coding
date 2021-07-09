console.log('💛💙💚¡RETOS!🧡💜💚');

// RETO 1 PLATILLOS
// Crea un arreglo que contenga los siguientes platillos:
// 1) Enchiladas
// 2) Taco
// 3) Tamal
// 4) Pozole
// 5) Barbacoa
// 6) Guacamole
//
// 1. Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
// const platillos = [
//     'Enchiladas',
//     'Taco',
//     'Tamal',
//     'Pozole',
//     'Barbacoa',
//     'Guacamole'
// ]
// console.log(platillos);

// for (let i = 0; i < platillos.length; i++){
//     console.log(i + ' ' + platillos[i]);
// }


// 2. Mediante un ciclo FOR y condicional IF, muestra sólo el Pozole y la Barbacoa
// for (let i = 0; i < platillos.length; i++) {
//     if (i === 3 || i === 4){
//         console.log(i + ' ' + platillos[i]);
//     }
// }


// 3. Mediante un ciclo FOR y condicional IF, muestra sólo los elementos impares
// for (let i = 0; i < platillos.length; i++) {
//     if (i % 2 === 1){
//         console.log(i + ' ' + platillos[i] + ' es IMPAR');
//     } else{
//         console.log(i + ' ' + platillos[i] + ' es PAR');
//     }
// }


// 4. Mediante únicamente un ciclo FOR, muestra los elementos que sean pares
// for (let i = 0; i < platillos.length; i += 2) {
//    console.log(i + ' ' + platillos[i] + ' es PAR');
// }



//RETO 2 FIZZBUZZ
// Mostrar en consola los números del 1 al 100
// Si el numero es divisible entre 3 imprimir Fizz
// Si el numero es divisible entre 5 imprimir Buzz
// Si el numero es divisible entre 3 y 5 imprimir FizzBuzz
// (Recuerda el uso del operador módulo %)
//---- 👍 -----
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
//----- 🚫 -----
// 15 fizz
// 15 buzz
// 15 fizzbuzz

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + ' FizzBuzz');
//     } else if (i % 3 === 0){
//         console.log(i + ' Fizz');
//     } else if (i % 5 === 0){
//         console.log(i + ' Buzz');
//     } else {
//         console.log(i);
//     }
// }