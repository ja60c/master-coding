console.log('Hola desde retos! 👋');

// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
// Salida: ['Manzana','Cebolla','Apio','Naranja']

// mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)

const pilaFrutas = [];
const numero = 4;
console.log(pilaFrutas, numero);
console.log(pila.push('manzana'));
// console.log(pila.push('cebolla'))
// console.log(pila.push('apio'))

function miFuncion(pilaFrutas, numero){
    for ( let i=0; i<num; i++) {
        pilanueva.push = pilaVieja[i];     
        console.log(pilaFrutas.push('manzana'));
    }
}

// FUNCION CON ARREGLO COMO PARÁMETRO
const miFuncionPilasArreglo = (pila, numero) => {
    if(pila.length() !== numero){
        pila.pop()
    } else {
        return pila;
    }
}
const pilaFrutas = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
console.log(pilaFrutasArreglo);
console.log('Iniciando funcion con arreglo como pila');
console.log(miFuncionPilasArreglo(pilaFrutasArrglo, 4));
console.log('Terminó función');
console.log((pilaFrutasArrego));

// FUNCION CON OBJETO STACK COMO PARÁMETRO
const miFuncionPilasObjetoStack = (pila, numero) => {
    if(pila.length() !== numero){
        pila.pop()
        miFuncionObjetoStack = (pila, numero)
    } return pila;
}
const pilaClaseStack = new Stack();


const pil


//para ejecutar: 👇


// 2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

// PSEUDOCÓDIGO
    // INICIO PROCESO REEMPLAZAR
    //     RECIBIR PARÁMETROS pila Stack, nuevo number, viejo number 

    //     SI último elemento de la pila es diferente de != viejo, entonces:
    //         lo sacamos con pila.pop()
    //         REEMPLAZAR(pila, nuevo, viejo)
    //     SI NO entonces:
    //         Sacamos viejo con pila.pop() y lo reemplazo por nuevo con pila.push(nuevo)
    // FIN PROCESO REEMPLAZAR  


// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, 
// pasando por varios pueblos. 
// Una vez en el pueblo destino, 
// el conductor debe regresar a casa por el mismo camino. 
// Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

// PSEUDOCÓDIGO
//// INICIO PROCESO RECORRIDO 
////    RECIBIR PILA STACK (PUEBLOS A VISITAR)
////       SI pila.length() !=0, entonces,
////           RECORRIDO(pila)
////           RETORNAMOS pila.pop() 
////    IMPRIMIR DE REGRESO
                 
