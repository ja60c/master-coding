console.log('Hola desde script! 🖐🏽');

// DOM: DOCUMENT OBJECT MODEL
// Hace referencia a todo el HTML como un ojeto en sí mismo al que podemos acceder para crear, agregar, modificar, remover o alterar de cualquier forma desde JS
// 
console.log(document); //imprime todo el html desde donde fue creado el JS 
//permite acceder a ese documento como un gran objeto que contiene todo nuestra página(!= sitio :0 jaja)

//  MANIPULANDO EL DOM
// para maniparlo primero tenemos qe mandar a llamar loes elemtnos que queremos utilzar desde JS
// Podemos hacer usoo de diferentes m´todos, ya sea para llamar por etiqueta, x calse, x selector o x ID


// MÉTODOS DE INTERACCION CON EL DOM    
// Para manpular el DOM, primero tenemos que mandar llamar a los elementos quue queremos utilizar desde 

// Traer elementos x id -> document.getElementById

const titulo = document.getElementById('titulo')
const subtitulo = document.getElementById('subtitulo')
const entrada = document.getElementById('entrada')
const boton = document.getElementById('boton')
const respuesta = document.getElementById('respuesta')

// Podemos imprimir en consola las variables que almacenan los objetos del DOM para validad que las llamamos adecuadamente
console.log(titulo, subtitulo, entrada, boton, respuesta);

// Podemos cambiar propiedades de los elementos de HTML com su txto interor (innerHTML)
// titulo.innerHTML = 'Soy un nuevo innerHTML del título cambiado desde JS 🤯'
// subtitulo.innerHTML = 'Soy el subtitulo cambiado desde JS 🐱‍👤'

// Podemos cambiar estilos:
// titulo.style.color = 'red';
// titulo.style.fontSize = '40px';
// titulo.style.fontFamily = 'sans-serif';


// Podemos acceder al valor que se escribe dentro de un input
// console.log(entrada.value);
// entrada.value = 'Hola'
// entrada.placeholder = 'Hola'
respuesta.innerHTML = entrada.value


//  MANEJAR EVENTOS
// Podemos escuchar todos los eventos que suceden en nuestro sitio desde un scroll, un mouseover, mouseout, un click, etc.

const funcionCambiar = () => {
    console.log('click!');
    titulo.innerHTML = 'Soy un nuevo innerHTML del título cambiado desde JS 🤯'
    subtitulo.innerHTML = 'Soy el subtitulo cambiado desde JS 🐱‍👤'

    titulo.style.color = 'red';
    titulo.style.fontSize = '40px';
    titulo.style.fontFamily = 'sans-serif';

}

boton.addEventListener('click', funcionCambiar);
boton.addEventListener('mouseover', () => console.log('mouseover'))