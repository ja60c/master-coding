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

// FUNCION CALLBACK

const funcionCallback = () => {
  const createAuthor = (name, last_name, nacionalidad, biography, gender, age, is_alive) => {
    if(!name || !last_name || !nacionalidad || !biography || !gender || !age || !is_alive) throw new Error('Debes ingresar todos los parámetros');
    const jsonSend = { name, last_name, nacionalidad, biography, gender, age, is_alive }
    request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
      console.log('Creando autor...');
      if(res.statusCode === 201){
        console.log(JSON.parse(body));
        updateAuthor(JSON.parse(body).id, 'Jac', 'Ramírez', 'USA', 'Hola, soy JAc', 'F', 27);
      } else console.log(res.statusCode, err, JSON.parse(body));
    });
  }
  
    const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {

      if(!id || !name || !last_name || !nacionalidad || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');
      const jsonSend = { name, last_name, nacionalidad, biography, gender, age }
      request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
        console.log('Actualizando autor...');
        if(res.statusCode === 200){
          console.log(JSON.parse(body));
          readOneAuthor(JSON.parse(body).id);
        } else console.log(res.statusCode, err, JSON.parse(body));
      });
    }
    
    const readOneAuthor = (id) => {
      if(!id) throw new Error('Debes ingresar un id')
      request.get(`${URL_BASE}${id}`, (err, res, body) => {
        console.log('Leyendo autor...');
        if(res.statusCode === 200){
          console.log(JSON.parse(body));
          deleteAuthor(JSON.parse(body).id);
        } else console.log(res.statusCode, err, JSON.parse(body));
      })
    }
    
    const deleteAuthor = (id) => {
      if(!id) throw new Error('Debes ingresar un id')
      request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
        console.log('Borrando autor...');
        if(res.statusCode === 204) {
          console.log(`El id ${id} fue eliminado correctamente`);
        } else console.log(res.statusCode, err, body);
      });
    }

  console.log('Empezando ciclo:');
  createAuthor('Jacqueline', 'Callejas', 'MX', 'Cool kid', 'F', 26, true);
}

funcionCallback();