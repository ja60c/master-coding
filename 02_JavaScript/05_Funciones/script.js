console.log('Hola desde script.js! 🖐🏽');

//FUNCIONES
// Las funciones son un conjunto de instrucciones qe podemos mandar a llamar cuando sean requeridas, en determinado momento de nuestro código
// Sintaxis básica:
// function miFuncion(){
//     códio a ejecutar
// }

// Sintaxis de funcion con parametros:
// function funcionConParametos(param1, param2, ..., paramN){
    // codigo a ejecutar de la funcion
    // podemos aceder a param1, param2, ..., paramN
//} (entre 3 y 5  parametros máximos)

// para mandar a llamar la funcion, tenemos que 
// miFuncion();
// miFuncionConParametros('param1', 123, true);

function saludar(){
    console.log('Hola desde la función saludar! 🖐🏽⚒');
}
//para mandarla llamar:
saludar()

//a los parametros les puedo dar el nombre que quiera, pero los parametros NO SON VARIABLES, son ARGUMENTOS, por eso no es necesario declararlos previamente
function saludarAlumno(alumno){
    console.log('Hola, ' + alumno + ' desde la función saludar! 🖐🏽👩🏽‍🎓⚒');
}
saludarAlumno('July')
saludarAlumno('Alejandrina')
saludarAlumno('Raúl')
saludarAlumno('Max')

//esas son funcions tradicionales, pero tambien existen las:

//ARROW FUNCTIONS / FUNCIONES FLECHA    son un poco más simples, y se reducen a una línea
// Sintaxis básica: () => {tarea}
// Como buena práctica se sugiere declararlas como const
// Las funciones flecha hacen la declaración de funciones más "elehantes" ya que se pueden declarar en una sola línea y evitar caracteres como ; y/o {}

// funcion tradicional:
function funcionTradicional(){
    console.log('Hola desde funcion tradicional 🖐');
}

// funcion flecha:
const funcionFlecha = () => console.log('Hola desde funcion flecha 🏹');

funcionTradicional()
funcionFlecha()

// Función flecha con parámetros:
const funcionFlechaConParametros = (param1, param2, param3) => {
 console.log('Hola desde funcion flecha con parámetros! 🏹')
 console.log(param1, param2, param3);
}
funcionFlechaConParametros('Este es el param1', 45534, {nombre:'parametro3'})

//EJEMPLO EJECUTA CONSOLE DIRECTAMENTE: crear una funcion que reciba como parametros 2 números e imprima en consola la suma de los mismos
//esta IMPRIME en consola, no retorna
//con una función tradicional:
function sumaDosNumeros(num1, num2){
    console.log(num1 + num2);
}
sumaDosNumeros(5,8) //se imprime 13

// con una función flecha: nos deja quitarle las llaves y ponerlas en una sóla línea
const sumaDosNumerosFlecha = (num1, num2) => console.log(num1 +num2);

sumaDosNumerosFlecha(50, 60)

//EJEMPLO CON RETURN
// Se utiliza la palabra reservada return para indicar dónde finaliza nuestra función y/o qué es lo que nos debe retornar
// Todo lo que se ponga desés del return NO se va a ejecutalr
// En las funciones flecha si la declaración queda en una sola línea, el return queda implícito, es decir que no se necesita escribirlo

console.log('Ejemplo con return-----------');

//con una función tradicional:
function sumaDos(num1, num2){
    return num1 + num2 
}
sumaDos(100, 50) // esto no imprime en consola, pq la funcion solo retorna la suma, no la imprime en consola 
console.log(sumaDos(100, 50));
let suma = sumaDos(100, 50);
console.log(suma);


//con una función flecha:
const sumaDosReturnFlecha = (num1, num2) => num1 + num2

sumaDosReturnFlecha(10, 50);
console.log(sumaDosReturnFlecha(10, 50));
let sumaFlecha = sumaDosReturnFlecha(10, 50);
console.log(sumaFlecha);

// Mandar a llamr una funcion, dentro de otra, de manera simple, gracias a la sintaxis de funciones flecha
console.log('------funcion dentro de otra');
const imprimirEnConsola = (valor) => console.log(valor);
imprimirEnConsola(sumaDosReturnFlecha(10, 30));