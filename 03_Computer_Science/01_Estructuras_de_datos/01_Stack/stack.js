console.log('Hola, desde Stack o Pilas!! 📚');

//STACK O PILAS
// Una pila (stack e inglés) es una lista ordenada o estructura lineal

const pila = [];
console.log('Stack:', pila);

// Apilar/agregar elementos (PUSH)
console.log(pila.push('El Principito'));
console.log(pila.push('Rayuela'))
console.log(pila.push('Historias de famas y de cronopios'))
// console.log('Stack:', pila);

//Desapilar/remover elementos (POP)
console.log(pila.pop()); // 'Historias de famas y de cronopios'
console.log(pila.pop()); // 'Rayuela'
console.log(pila.pop()); // 'El principito'

// IMPLEMENTACIÓN DE UNA PILA
class Stack{
    constructor(){
        this.collection = [];
        this.counter = 0;
    }
    push(nuevoElemento){
    this.collection.push(nuevoElemento);
    this.counter = this.counter + 1
    return this.counter    
    }

    pop(){
    const elementoDesapilado = this.collection.pop()
    this.counter = this.counter - 1
    return elementoDesapilado;
    }
    
    length(){ //largo de la fila
    return this.counter;
    }

    peek(){
    return this.collection[this.counter-1]    
    }
    isEmpty(){
        if(this.length() === 0) return true
        return false
    }
}
//Creando un objeto clase Stack(pila)
const pilaAlumnos =new Stack();
console.log(pilaAlumnos);

//Apilando elementos a mi stack pilaAlumns con PUSH 
console.log(pilaAlumnos.push('Bruno'));
console.log(pilaAlumnos.push('Alejandra Torres'));
console.log(pilaAlumnos.push('Ana Reyes'));

//Desapilando elementos a mi stack pilaAlumns con POP 
console.log(pilaAlumnos.pop());

//Viendo el tamaño de nuestra pila con LENGTH
// console.log(pilaAlumnos.collection.length); // Mala práctica
console.log(pilaAlumnos.length()); 
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos);

//Viendo el último elemento de nuestra pila con PEEK()
console.log(pilaAlumnos.peek());
console.log(pilaAlumnos.push('Dan Orduña'));
console.log(pilaAlumnos.peek());

// Verificando si nuestra pila está vacía con isEmpty()
console.log(pilaAlumnos.isEmpty());
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos.pop());
console.log(pilaAlumnos.isEmpty());

const arreglo = []
console.log(arreglo);
console.log(a);