console.log('Hola desde script! 🖐🏽');

// OJETO LITERAL
const objetoLiteral = {
// PROPIEDADES valores  atributos que describen al objeto
    propiedad: 'valor',
    propBooleana: true,
// MÉTODOS: funciones que se alojan en el objeto con las que puedo interactur con nuestro objeto
    miMetodo: () => 'Saludos desde el método miMetodo ()'
}
console.log(objetoLiteral);
console.log(objetoLiteral.propiedad);
console.log(objetoLiteral.propBooleana);
console.log(objetoLiteral.miMetodo);
console.log(objetoLiteral.miMetodo());

// EJEMPLO:
const persona = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    edad: 27,
    comer: () => 'Estoy comiendo mmMmmMMm... 🌮',
    dormir: () => 'zZzzZZZzZZ... 😴' ,
    bailar: () => 'wujuUu 💃'
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.comer());
console.log(persona.dormir());
console.log(persona.bailar());

// // TODO EN JAVASCRIPT ES UN OBJETO!! 
const texto = 'Hola soy un texto';
console.log(texto);
console.log(texto._proto_);

// CLASES
// Son los "moldes", o "plantillas" de un objeto que comparte atributos y métodos
// Las clases ueron agregadas a JS desde ECMASript6
// SINTAXIS PARA DECLARAR UNA CLASE
class MiClase {
    // Método constructor es el que me permite indicar las pripdades de esta clase
    constructor(propiedad1, propiedad2){
    // La palabra this  sirve para que el argumento declarado sea parte del objeto en sí mismo, si no fuera así, sólo sería un dato sin refencia     
        this.propiedad1 = propiedad1;
        this.propiedad2 = propiedad2;
    } 
    miMetodo1(){
       return 'Saludos desde miMetodo 1()';
    }
    miMetodo2(){
       return 'Saludos desde miMetodo 2()';
    }
} 

const objeto1 = new MiClase('Soy la propiedad 1 de OBJETO1', 'Soy la propiedad 2 de OBJETO1')
console.log(objeto1);
console.log(objeto1.propiedad1);
console.log(objeto1.propiedad2);
console.log(objeto1.miMetodo1());
console.log(objeto1.miMetodo2());

const objeto2 = new MiClase('Soy la propiedad 1 de OBJETO2', 'Soy la propiedad 2 de OBJETO2')
console.log(objeto2);
console.log(objeto2.propiedad1);
console.log(objeto2.propiedad2);
console.log(objeto2.miMetodo1());
console.log(objeto2.miMetodo2());

// EJEMPLO CARRO
class Carro {
    constructor(nombre, color, marca, modelo, ruedas, motor){
      this.nombre = nombre;
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.ruedas = ruedas;
      this.motor = motor;
      this.mecanica = true;
    }
    arranca(){
      return `Soy un ${this.nombre} y estoy arrancando!!! 🏎💨`;
    }
    frena(){
      return `Soy un ${this.nombre} y estoy frenandoooo!!! 🏎🛑`;
    }
    dobla(){
      return `Soy un ${this.nombre} y estoy doblando!!! 🏎🛑`;
    }
    // GETTERS
    getNombre(){
      return this.nombre;
    }
    getMarca(){
      return this.marca;
    }
    // SETTERS
    setNombre(nuevoNombre){
      this.nombre = nuevoNombre;
      return this.nombre;
    }
    setColor(nuevoColor){
      this.color = nuevoColor;
      return this.color;
    }
  }
  const ferrari = new Carro('Enzo', 'rojo', 'Ferrari', 2021, 4, 'V8');
  console.log(ferrari);
  console.log(ferrari.mecanica);
  console.log(ferrari.arranca());
  console.log(ferrari.frena());
  console.log(ferrari.dobla());
  console.log(ferrari.getNombre());
  console.log(ferrari.setColor('azul'));
  console.log(ferrari);
  const porsche = new Carro('Boxster', 'verde', 'Porsche', 2019, 4, 'V4');
  console.log(porsche);
  console.log(porsche.arranca());
  console.log(porsche.frena());
  console.log(porsche.dobla());



