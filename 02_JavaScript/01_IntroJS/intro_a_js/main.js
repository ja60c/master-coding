//1.- Pon en la consola usando console.log() todos los tipos de valores que puedas. trata de colectar tantos como sea posible: por ejemplo: console.log(typeof "Luis")

console.log('Ejercicio 1')

console.log(typeof "Luis") //string
console.log(typeof "cinco") //string
console.log(typeof 77) //number
console.log(typeof true)  //boolean
console.log(typeof false) //boolean
console.log(typeof undefined) //indefinido
console.log(typeof BigInt)
console.log(typeof null)

console.log('estos no me salieron')
//estos no entiendo qué son 
console.log(5*4)

console.log(typeof 5*4)
// No me sale porque: TYPEOF sólo puede dar como resultado uno de los 9 valores primitivos y ninguno más, nunca podría dar como resultado "date".

console.log(5>4)



//2.- Si ves este tipo de código typeof value === "date" va funcionar? justifica tu respuesta

console.log('Ejercicio 2')


// No funcionaría, porque en sentido estricto, "value" y "date" no son, ni equivalen lo mismo. 
// Podría pasar que value fuera igual a "date", pero estrictamente seguirían siendo distintos.
// Ejemplo:

const value = "date"
console.log(typeof value === "date") //Da como resultado False.

// TYPEOF sólo puede dar como resultado uno de los 9 valores primitivos y ninguno más, nunca podría dar como resultado "date".


//3.- El tipo de valor de una de las primitivas está "mal" por una razón histórica que ya es muy tarde para corregir, sabes cuál es? 

/*

 -Undefined (indefinido), usado para valores que no existen de manera no intencional
-Null (nulo), usado para valores que no existen intencionalmente
-Booleans (true y false / falso y verdadero), usado para operaciones lógicas
-Numbers (-100, 3.14, y otros), usados para cálculos matemáticos. 
-Strings ("hola", "abracadabra", y otros), usados para texto.
-Symbols (no muy comunes), usados para esconder valores de implementación
-BigInts (no muy comunes y nuevos), para guardar valores muy grandes
*/

console.log('Ejercicio 3')

console.log(typeof null, 'debería salir null, no object') 



//4.- Sabemos que typeof solo puede darnos una serie de valores predefinidos, hay algo interesante que decir de typeof typeof(value)

console.log('Ejercicio 4')

console.log(typeof typeof (value)) 
// Que lo reconoce como texto?? 

console.log('Ejercicio 5')


//5.- completa las líneas faltantes marcadas con TODO 

// estas líneas no cambian

let menor = 45


//edita a partir de aquí 👇

menor = 44

// TODO

// const num = undefined
const num = undefined
const numString = null
const x = num

//TODO

const changed = 6

//o agregar otra línea que diga "changed = 6"

//TODO 

const pow = 3**3

// termina de editar ✋🛑


// estas líneas no cambian


// expresión en consola  // debería evaluar a 
console.log(changed===6) // -> true 
console.log(num===numString) // -> false 
console.log(typeof x === "undefined") // -> true 
console.log(menor < 45) // -> true
console.log(pow === 27) // -> true


