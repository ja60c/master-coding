console.log('Hola desde retos! 🏁');

let amigos  = ["pedro","maria","joan","pili"];

// 1- queremos que escriba 
// "mis amigos son maria y joan. rellena los huecos."
console.log('Mis amigxs son '+ amigos[1] + ' y ' + amigos[2] + '.');
document.write('<br/>' + '1. Mis amigxs son '+ amigos[1] + ' y ' + amigos[2] + '.' + '<br/>');

// 2- ¿dónde está el fallo?
let enemigosIncorrecto = ["scipion" + "scorpio" + "black"]; 
// en que los elementos de un arreglo se separan x comas
// el modo correcto debería ser así:
const enemigos = ["scipion", "scorpio", "black"]; 

// 3- escribe en el documento web 
// "scorpio es peor que black" de modo que 
// scorpio esté en negrita y la letra sea de color rojo.
console.log(enemigos[1] + ' es peor que ' + enemigos[2] + ' 😡')
document.write(`3. <b style='color:red;font-weight:bold;'> ${enemigos[1]}` + "<b style='color:black;font-weight:normal;'> es peor que " + `<b style='color:black; font-weight:normal' > ${enemigos[2]}` + ' 😡 <br/>')

// 4- escribe una instrucción que devuelva 
// la longitud del array amigos sea cual sea el número de datos almacenados en su interior.
console.log('tengo ' + amigos.length + 'amigxs! 😀💜')
document.write('4. tengo ' + amigos.length + ' amigxs! 😀💜')

// 5- "aitana" es también tu amiga. 
// Escribe una instrucción que la añada al final de la lista amigos 
amigos.push('aitana')
console.log(amigos)
document.write('</br>5. ahora ' + `<b style='font-weight:bold'> ${amigos[4]}` +" <b style='font-weight:normal'>  es también mi amiga! 👩‍❤️‍👩")

// 6 - "pedro" ha cambiado de nombre. 
// ahora se llama "nacho". actualiza con una instrucción tu lista de amigos
// amigos[0]='nacho'
amigos.splice(0, 1, 'nacho')
console.log(amigos)
document.write("</br>6. ahora pedro se llama " + amigos[0])

// 7 - "tor" es ahora tu enemigo. 
// añádelo con una instruccion al final de tu lista de enemigos.
enemigos.push("tor")
console.log(enemigos)
document.write('</br>5. ahora ' + `<b style='font-weight:bold'> ${enemigos[3]}` +" <b style='font-weight:normal'>  es también mi enemigo! 👿")