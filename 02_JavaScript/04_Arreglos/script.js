console.log('Hola desde script.js 🖐🏽');


//ARREGLOS
//Se declaran con corchetes y cada elemento es considerad una posición del arreglo

//sintaxis básica:
// let arreglo = [pos0, pos1, pos2, ..., posN]
//arreglo vacío:
let arregloVacio = []; //corchetes sin nada dentro
//tamaño del arreglo
// arreglo.length
//posición:         0       1        2       3
let colores = ['negro', 'rojo', 'rosa', 'verde']

//Acceder e imprimir a cada valor del arreglo:
console.log(colores[0]); //negro
console.log(colores[1]); //rojo
console.log(colores[3]); //verde
console.log(colores[4]); //undefined (porque no la he nombrado), no es un error


//MÉTODOS
//sirven para manipular, modificar y trabajar en general con los arreglos

//PUSH
//para agregar más elementos a nuesstro arreglo
//arreglo.push(elementoNuevo)
colores.push('blanco');
colores.push('azul');
console.log(colores) //aquí ya agregó el "blanco al arreglo colores"
console.log(colores[4]); //Y ahora la posición undefined está definida
console.log(colores[5]);

//POP
//elminar el último elemento del arreglo
//arreglo.pop ()
colores.pop();
console.log(colores); //aquí ya no sale el 'azul'
colores.pop();
console.log(colores); //aquí borra el blanco también

//SPLICE
//permite eliminar un elemento intermedio o valores especificos del arreglo
//arreglo.sploce(arg1, arg2, arg3) (argumento1, arg2, arg3)
// arg1 -> en qué posición quieres empezar
// arg2 -> cuantos valores quieres remover
// arg3 -> elemento que se desea sustituit (opcional, no s)iempre es necesario)
colores.splice(2, 1); //elimina UN ELEMENTO A PARTR DE LA POsición indicada
console.log(colores); //en este caso se eliminó el rosa
//con el tercer argumento nos permite remplazar los elementos
colores.splice(1, 1, 'Amarillo') //si agregamos un 3er argumento con splice, nos permitirá sustituir algún valor
console.log(colores); 

//REVERSE
//ordenar los elementos de la cadena al revés
//arreglo.reverse()
colores.reverse();
console.log(colores); //ahora tengo: verde, amarillo, verde (es decir, ordenados al revés)

//CADENAS ()
let nombre = 'Pedro Gonzalez';
console.log(nombre);
console.log(nombre[0]); //imprime la letra P
console.log(nombre[1]); //imprime la letra e
console.log(nombre[2]); //imprime la letra d
console.log(nombre[3]); //imprime la letra r
console.log(nombre[4]); //imprime la letra o

//SPLIT
//como separar valores de una cadena
//arreglo.split(arg)
console.log(nombre.split('')); //imprime los elementos como una cadena
console.log(nombre.split(' ')); //separa los elementos respetando los espacios

//----------METODOS FUNCIONALES (métodos avanzados)-----------
//no solo reciben argumentos posicionales sino, una funcion que nos permite aplicar determinadas tareas a dicho arreglo

let colaboradores = [
    {nombre: 'Abby' , sueldo: '12000'},
    {nombre: 'Fernanda' , sueldo: '40000'},
    {nombre: 'Gabriela' , sueldo: '60000'},
    {nombre: 'Jacqueline' , sueldo: '30000'}
]

//Iterar areglo con un cliclo FOR
for (let i = 0; i < colaboradores.length; i++){
    colaboradores[i]
    console.log(i);
}

//FOREACH
//arreglo.forEach(elemento -> tarea) // 1.el primer elemento de la funcion (argumento) 2. lo que se hará
//arreglo.forEach(elementoActual, posición, arreglo completo) ->
//normalmente el nombre del arreglo va en plurar y cada uno de los elementos en singular
colaboradores.forEach(colaborador => console.log(colaborador)); //esto se manda como una función y se formula en una misma línea
//👆🏽 Dice: por cada elemento de este arreglo le vas a aplicar... 
colaboradores.forEach((elementoActual, posición, arregloCompleto) => {
    console.log(elementoActual);
    console.log(posición);
    console.log(arregloCompleto);
})

//MAP
//Permite crear un nuevo arrreglo a partir de otro arreglo
let colaboradoresFelices = colaboradores.map(colaborador => {
    return {nombre: colaborador.nombre, sueldo: Number(colaborador.sueldo) + 10000} 
})
//SPREAD SYNTAX ...objeto (trae todas las propiedades que encuentre de cada uno de los elementos de ese arreglo)
// let colaboradoresFelices = colaboradores.map(colaborador => {
//     return {...colaborador, sueldo: (colaborador.sueldo + 10000)} //fred sintax (trae todas las propiedades que encuentre de cada uno de los elementos de ese arreglo)
// })

console.log('Colaboradores 🙋🏽‍♀️', colaboradores);
console.log('Colaboradores felices 😀', colaboradoresFelices);

colaboradores.map((elementoActual, posición, arregloCompleto) =>{
    console.log(elementoActual);
    console.log(posición);
    console.log(arregloCompleto);
})

// FILTER
// Permite crear un areglo a partir de elemtnos de otro arreglo poero que cumplan determinada condición, es decir, filtra los elementos del arreglo
let directivos =  colaboradores.filter(colaborador => {
    return colaborador.sueldo >= 30000
})
console.log('colaboradores directivos 👩🏽', directivos);

let operativos = colaboradores.filter(colaborador =>{
    return colaborador.sueldo <= 12000
})
console.log('Coaboradores operativos', operativos);