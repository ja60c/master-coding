console.log('Hola desde queue.js 👋');

// COLAS 
// Una cola (también llamada fila) es una estructura lineal 

// IMPLEMENTACIÓN BÁSICA CON UN ARREGLO
const cola = []
console.log(cola);

// Encolar/formar/agregar elementos a la cola
console.log(cola.push('July Longas'));
console.log(cola.push('Jacqueline Callejas'));
console.log(cola.push('Alejandrina'));
console.log(cola)

// Para sacar elementos de la cola se usa SHIFT
console.log(cola.shift()); // Nos regresas el primer arreglo de la cola, de tal manera que e primero en haber entrado será el primero en salir.
console.log(cola.shift()); // Nos regresas el primer arreglo de la cola, de tal manera que e primero en haber entrado será el primero en salir.
console.log(cola.shift()); // Nos regresas el primer arreglo de la cola, de tal manera que e primero en haber entrado será el primero en salir.
console.log(cola)

// IMPLEMENTACIÓN DE UNA COLA USANDO CLASES
class Queue {
    constructor(){
        this.collection = [];
        this.counter = 0;
    }
    enqueue(nuevoElemento){ // enqueue (encolar, agregar elementos a la fila)
    this.collection.push(nuevoElemento);
    this.counter++;
    return this.counter;
    }

    dequeue(){
    const elementoDesencolado = this.collection.shift();
    this.counter--;
    return elementoDesencolado;
    }

    front(){
        if(this.length() === 0) return null;
        return this.collection[0];
    }
    
    back(){
        if(this.length() === 0) return null;
        return this.collection[this.counter-1]
    }
    isEmpty(){
        if(this.length() === 0) return true
        return false
    }    
    length(){ //largo de la fila
        return this.counter;
    }

}

const colaAlumnos = new Queue();
console.log(colaAlumnos);

console.log(colaAlumnos.enqueue('July Longas'));
console.log(colaAlumnos.enqueue('Jacqueline Callejas'));
console.log(colaAlumnos.enqueue('Alejandrina'));
console.log(colaAlumnos);

console.log(colaAlumnos.dequeue());
console.log(colaAlumnos.dequeue());
console.log(colaAlumnos.dequeue());
console.log(colaAlumnos);


// EJEMPLO BANCO
const filaBanco = new Queue();

filaBanco.enqueue('Alejandra Torres')
filaBanco.enqueue('Abby Litman')
filaBanco.enqueue('Miguel Leal')
filaBanco.enqueue('JC de la Peña')

// Intervalo para atender a los clientes del banco

setInterval(()=> {
    if(!filaBanco.isEmpty()){
        console.log('Atendiendo a', filaBanco.dequeue());
        console.log('Quedan por atender:', filaBanco.length());
        console.log('Siguiente en la fila:', filaBanco.front());
    
    } else {
        console.log('Fila vacía, pase por su turno');
    }
}, 3000)