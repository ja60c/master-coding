console.log('Hola desde app! 👋');

// CÓDIGO SÍNCRONO/SECUENCIAL
// Un proceso que espera al anterior a ser ejecutado

console.log(1);
console.log(2);
console.log(3);

// CÓDIGO ASÍNCRONO
// Nos permite correr procesos de manera simultánea 
// sin que interrumpa los otros, 
// y la respuesta se procesa hasta habaer sido recibida, 
// evitando la detención innecesaria de los procesos

console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);

// NOTA:
// JS le da preferencia a los procesos síncronos
// y a los asíncronos los manda a la pila de ejecucíon "CALL STACk", 
// la cual permite que se ejecuten las tareas de fma adecuadad y sin interrupciones


// CALLSTACK

// const  terceraFuncion = () => {
//     segundaFuncion();
//     console.log('Saludos desde terceraFunción 3️⃣❗');
// }

// const  segundaFuncion = () => {
//     terceraFuncion();
//     console.log('Saludos desde segundaFunción 2️⃣❗');
// }

// const  primeraFuncion = () => {
//     segundaFuncion();
//     console.log('Saludos desde primeraFunción 2️⃣❗');
// }

// primeraFuncion();

// EVENT LOOP / BUCLE DE EVENTOS

const  terceraFuncion = () => {
    setTimeout(() => console.log('Saludos desde terceraFuncion 3️⃣❗'), 3000)
}

const  segundaFuncion = () => {
    terceraFuncion();
    console.log('Saludos desde segundaFunción 2️⃣❗');
}

const  primeraFuncion = () => {
    segundaFuncion();
    console.log('Saludos desde primeraFunción 2️⃣❗');
}

primeraFuncion();

// CALLBACK
// Función que se pasa como parámetro/argumento de otra función

// Función incial /función de orden superior
const mostrarDosMensajes = (funcion1, funcion2) => {
    funcion1();
    funcion2();
}

// funciones callback
const yoSoyElCallback1 = () => {
    console.log('Hola desde el callback 1! 🖐1️⃣');
}    
const yoSoyElCallback2 = () => {
    console.log('Hola desde el callback 2! 🖐2️⃣');    
}

mostrarDosMensajes(yoSoyElCallback1, yoSoyElCallback2)
console.log(mostrarDosMensajes);

// ejemplo callback saludar 

const saudarUsuario = (nombreUsuario, callback) => {
    callback(nombreUsuario)
}
const callbackBienvenida = (nombreUsuario) => {
    console.log('Bienvenidx,' + nombreUsuario);
}
const callbackDespedida = (nombreUsuario) => {
    console.log('Adiós,' + nombreUsuario);
}

saludarUsuario('Eyra', callbackBienvenida);
saludarUsuario('Eyra', callbackDespedida);
