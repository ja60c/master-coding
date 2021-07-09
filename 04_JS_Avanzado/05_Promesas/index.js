console.log('Hola desde index.js! 👋');

// CALLBACK HELL
// Cuando muchas fucniones son llamadas una tras otra 
// de tal manera que es muy tardada la respuesta y no sabemos qué sucede. 
// Se crea un efecto "callback hell"

// const = primeraFuncion = ( => {
//     segundaFuncion = () => {
//         terceraFuncion = () => {
//             cuartaFuncion = () => {
//                 quintaFuncion = () => {

//                 }
//             }
//         }
//     }
// }

// PROMESAS
// Representa un valor que puede estar disponible <<ahora>>, <<en el futuro>> o <<nunca>>.

const nuevaPromesa = new Promise((resolve, reject) => {
    const numeroAleatorio = (Math.random()*10);
    const numeroAleatorioRedondeado = Math.ceil(numeroAleatorio)
    if (numeroAleatorioRedondeado >= 5) {
        resolve(numeroAleatorioRedondeado)
    } else {
        reject(console.log(`Promesa rechazada, el número: ${numeroAleatorioRedondeado} es menor que `));
    }   
})

const miNumeroAleatorio = nuevaPromesa;
console.log(miNumeroAleatorio);
miNumeroAleatorio.then(respuesta => console.log(respuesta)).catch(error => console.log(error));