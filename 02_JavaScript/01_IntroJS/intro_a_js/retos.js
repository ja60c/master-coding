console.log("Hola!");

//1.- Pon en la consola usando console.log() todos los tipos de valores que puedas. trata de colectar tantos como sea posible: por ejemplo: console.log(typeof "Luis")
console.log(undefined);
console.log(null);
let comparacion = 6>5
console.log(typeof comparacion);
console.log(typeof 2321);
console.log(typeof "hola");

//2.- Si ves este tipo de código typeof value === "date" va funcionar? justifica tu respuesta
// No funciona porque: 
// 1. value es una variable NO definida
// 2. en todo caso serpia un booleano false en el que value(si fuera un numero) no es exactamente igual a "date"(string)

//3.- El tipo de valor de una de las primitivas está "mal" por una razón histórica que ya es muy tarde para corregir, sabes cuál es? 
console.log(typeof null, 'debería salir null, no object') 
/*
-Undefined (indefinido), usado para valores que no existen de manera no intencional
-Null (nulo), usado para valores que no existen intencionalmente
-Booleans (true y false / falso y verdadero), usado para operaciones lógicas
-Numbers (-100, 3.14, y otros), usados para cálculos matemáticos. 
-Strings ("hola", "abracadabra", y otros), usados para texto.
-Symbols (no muy comunes), usados para esconder valores de implementación
-BigInts (no muy comunes y nuevos), para guardar valores muy grandes
*/

//4.- Sabemos que typeof solo puede darnos una serie de valores predefinidos, hay algo interesante que decir de typeof typeof(value)
console.log(typeof typeof (value)) // Lo reconoce como texto

//5.- completa las líneas faltantes marcadas con TODO 

// estas líneas no cambian
let menor = 45
//edita a partir de aquí 👇
menor = 0

// TODO
const num = 1
const numString = "1"
const x = undefined

//TODO
const changed = 6
//o agregar otra línea que diga "changed = 6"

//TODO 
const pow = 27

// termina de editar ✋🛑
// estas líneas no cambian
// expresión en consola  // debería evaluar a 
console.log(changed===6) // -> true 
console.log(num===numString) // -> false 
console.log(typeof x === "undefined") // -> true 
console.log(menor < 45) // -> true
console.log(pow === 27) // -> true


