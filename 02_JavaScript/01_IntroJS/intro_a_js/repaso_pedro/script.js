//HolaMundo en JavaScript
console.log('Hola Mundo! 👋🏽🌎🤖');


//VARIABLES
//Para decalarar variables puedo usar la palabra reservada var seguida del nombre de la variable
var variable;

//Para asignarle un valor a esa variable se puede usar el nombre de la variable seguido del valor que se le asignará

variable = 123;
console.log(variable);


//Otras forma de declarar variables con las palabras reservadas: var, let y const
//La diferencia es el SCOPT o CONTEXTO:
//var -> contexto global
//let -> contexto local y puede cambiar su valor
//const -> contecto local y no puede cambiar su valor

var variableVar = 'Soy una variable var'; 
console.log(variableVar);
variableVar = 'Soy OTRA variable var';
console.log(variableVar);

let variableLet = 'Soy una variable let';
console.log(variableLet);
variableLet = 'Soy OTRA variable let';
console.log(variableLet);

// const variableConst = 'Soy una variable const'
// console.log(variableConsts);
// const variableConst = 'Soy OTRA variable const'
// console.log(variableConst); 

//marca error ya que no permite reasignar valor a una variable const
promppt('Hola')
alert('Hola')

//SCOPE/CONTEXTO
//Un contexto se puede definir por objetos o por funciones. 
//Se define entre dos llaves {}
//Existe el local y al global
{
  var variableVarGlobal ='Soy una variable global  dentro de un SCOPE' 
  console.log(variableVarGlobal); 
}
console.log(variableVarGlobal); 

{
  let variableLetLocal = 'Soy una variable let local dentro de un SCOPE';
  const variableConstLocal = 'Soy una variable const local dentro de un SCOPE';
  console.log(variableLetLocal);
  console.log(variableConstLocal);
}
// console.log(variableLetLocal);
// console.log(variableConstLocal); 
//En estas marca error porque fueron declaradas en un contexto local.


//TIPOS DE DATOS

//tipo number
let numero = 1234231;
console.log(numero)
console.log(typeof numero)

//tipo string (cadenas de caracteres)
let string = 'Esto es una cadena';
console.log(string)
console.log(typeof string)

//tipo booleano true/false
let booleano = true; 
console.log(booleano);
console.log(typeof booleano)

//listas o arrays de eelmentos y se declaran con corchetes [] 
//un arreglo es una lista de ciertos elementos, pueden ser de tipo numero, cadena, etc.
let arreglo = [12312, 'Holahola',false, ['otro arreglo anidado', 12312]] 
let arregloVacio = [];
console.log(arreglo);
console.log(arreglo[1]) 
//De esta forma se accede a una propiedad en específico, donde 0 equivale a la primera, 
//es decir a la que puse como 12312
console.log(typeof arreglo)
console.log(arreglo.length); //esto me va a decir cuántas propiedades tiene mi arreglo
// marca 4 porque es el tamaño de ese arreglo

//Objetos, colecciones de propiedades, se declaran con llaves {}
let objeto = { propiedad: 'valor' };
let objetoVacio = {}
let objetoAlumno = {
  nombre: 'Abby',
  apellido: 'Litman',
  programa: 'master en code',
  generacion: 7,
  estaInscrito: true
} 
console.log(objetoAlumno);
console.log(objetoAlumno.nombre) //a diferencia de los arrgelos, aquí se accede por la propiedad y no por su posición
console.log(objetoAlumno.generacion)
console.log(typeof objeto);
console.log(objeto);
console.log(objetoVacio);
console.log(objeto.length); //marca undefined por que en efecto, es un objeto

console.log(typeof objetoAlumno.nombre)


//OPERADORES ARTIMÉTICOS
//suma +
let suma = 10 + 10;
console.log(suma) //sería lo mismo hacer console.log(10+10) 

//resta -
let resta = 30 - 15
console.log(resta) //o usar el poerador artimetico directo en la consola

//multiplicacion *
let multiplicacion = 8 * 8;
console.log(multiplicacion);

//division /
let division = 50 / 10;
console.log(division);

// módulo o residuo %
let residuo = 20 % 3; 
console.log(residuo); //sale 2 porque es el residuo de dividir 20/3  
console.log(15 % 4); //se aplica para encontrar números impares

// Concatenación (unir cadenas de caracteres con otras cadenas o variables)
let nombre = 'Pedro Antonio'
let apellido = 'González Martínez'
let nombreCompleto = nombre + ' ' + apellido; 
//esto se concatenará todo pegado, para dejar un espacio entre uno y otro puedo poner otra cadena que sea simplemente un espacio
console.log(nombreCompleto); 

// OUTPUT
//Mensaje a consola:
console.log('Esto es un output que se muestra en consola') 
console.warn('Esto es un input de tipo warn en consola')
console.error('Esto es un input de tipo error en consola')
//esos son impresiones en la consola, pero si quisiera hacer un anuncio puedo hacer uso de...

//Mensaje a navegador:
alert('Hola este es un mensaje tpo alert que se muestra en el navegador')

//INPUTS
prompt('Esto es una solicitud de entrada de tpo prompt');
let promptNombre = prompt('Escribe aquí tu nombre')
console.log(promptNombre);
alert(promptNombre);

//para especificar cómo debes escribir la fehca puedes usar un 
//Segundo argumento
//este se muestra como referencia por default
let promptNacimiento = prompt('Escribe aquí tu fecha de nacimiento', 'DD/MM/AA')
console.log(promptNacimiento);

//creando un output con el uso de plantillas de JS ``, $ y {}
//El uso de "plantillas de JS" con acentos invertidos permiten concatenar de forma directa cadenas con variables/javascript usando la sintaxs ${javascript}
alert(`Hola, ${promptNombre}, naciste en la fecha: ${promptNacimiento}`) //el uso de $, `` y {} se les llama plantillas

