console.log('Hola desde retos! 👋');
// EJERCICIO
// Con el API: https://goodreads-devf-aaron.herokuapp.com/docs
// Ejecutar desde una sola función el siguiente ciclo de vida de un autor:
// - Crear un autor
// - Modificar ese autor
// - Obtener autor
// - Borrar autor
const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
  if(!name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los parámetros');
  const jsonSend = { name, last_name, nacionalidad, biography, gender, age }
  request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
    console.log('Creando autor...');
    if(res.statusCode === 201){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  });
}
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);

// Update - PUT/PATCH
// PUT - Para actualizar todo el objeto:
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
    if(!id || !name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');
    const jsonSend = { name, last_name, nacionalidad, biography, gender, age }
    request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
      console.log('Actualizando autor...');
      if(res.statusCode === 200){
        console.log(JSON.parse(body));
      } else console.log(res.statusCode, err, JSON.parse(body));
    });
  }
  // updateAuthor(13751, 'Pedritito', 'González', 'USA', 'Chavito cool', 'M', 10);

// Read - GET
// Para leer un solo autor:
const readOneAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.get(`${URL_BASE}${id}`, (err, res, body) => {
    console.log('Leyendo autor...');
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err, JSON.parse(body));
  })
}
// readOneAuthor(13751);

// Delete - DELETE
const deleteAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
    console.log('Borrando autor...');
    if(res.statusCode === 204) {
      console.log(`El id ${id} fue eliminado correctamente`);
    } else console.log(res.statusCode, err, body);
  });
}
// deleteAuthor(13751);



const funcionCallback = (createAuthor, updateAuthor, readOneAuthor, deleteAuthor) => {
    createAuthor('Jac', 'Callejas', 'MX', 'prueba para callback', 'F', 25);
    updateAuthor(13751, 'Jacqueline', 'Ramírez', 'USA', 'Update', 'F', 26);
    readOneAuthor(13751);
    deleteAuthor(13751);
}

funcionCallback();

//   // Funciones callback
//   const yoSoyElCallback1 = () => {
//     console.log('Hola desde el callback 1! 👋1️⃣');
//   }
  
//   const yoSoyElCallback2 = () => {
//     console.log('Hola desde el callback 2! 👋2️⃣');
//   }
  
//   mostrarDosMensajes(yoSoyElCallback1, yoSoyElCallback2)
//   console.log('Hola después de mostrar mensaje!');


// ----------------------------------------------> ejercicio de Lib

// const mostrarDosMensajes = (createAuthor, updateAuthor, readOneAuthor, deleteAuthor) => {
//     createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);
//     updateAuthor(13751, 'Pedritito', 'González', 'USA', 'Chavito cool', 'M', 10);
//     readOneAuthor(13751);
//     deleteAuthor(13751);
//   }
  
//   // Funciones callback
//   const yoSoyElCallback1 = () => {
//     console.log('Función crear autor');
//   }
  
//   const yoSoyElCallback2 = () => {
//     console.log('Función actualizar autor');
//   }
  
//   const yoSoyElCallback3 = () => {
//     console.log('Función leer autor');
//   }
  
//   const yoSoyElCallback4 = () => {
//     console.log('Función eliminar autor');
//   }
  
//   mostrarDosMensajes(yoSoyElCallback1, yoSoyElCallback2, yoSoyElCallback3, yoSoyElCallback4)
//   console.log('Hola');
  
//   // Ejemplo callback saludar
  
//   const saludarUsuario = (nombreUsuario, callback) => {
//     callback(nombreUsuario)
//   }
  
//   const callbackBienvenida = (nombreUsuario) => {
//     console.log('Bienvenidx, ' + nombreUsuario);
//   }
  
//   const callbackDespedida = (nombreUsuario) => {
//     console.log('Adiós, ' + nombreUsuario);
  