const axios = require('axios');
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// RETO 1
// Agrega un endpoint '/api' que responda a una petici贸n de tipo GET con un c贸digo de estado 200 y el siguiente json:
//             { 'mensaje':'hola mundo' }

  app.get('/api', (req, res) => {
    res.status(200).send({ message: 'hola mundo, desde retos! 馃憢' }); 
  });

// RETO 2
// Agrega un endpoint '/api/suma' que responda a una petici贸n de tipo GET con la suma de dos n煤meros que reciba mediante las querys num1 y num2. El servidor debe responder con un c贸digo de estado 200 y un json como el siguiente:
//             { 'resultado': 7 }

app.get('/api/suma', (req, res) => {
    console.log(req.query);
    const {num1, num2} = req.query;
    res.status(200).send({ resultado: Number(num1) + Number(num2) }); 
  });

// RETO 3
// Agrega un endpoint '/api/usuario' que responda a una petici贸n de tipo GET con el nombre que sea recibido a trav茅s de params. El servidor debe responder con un c贸digo de estado 200 y un json como este:
//             { 'usuario': 'Edwin' }

app.get('/api/usuario/:usuario', (req, res) => {
    console.log(req.params);
    res.status(200).send(req.params); 
  });
                                   
// RETO 4
// Agrega un endpoint '/api/swapi' que responda a una petici贸n de tipo GET 
// con el personaje solicitado de https://swapi.dev/. 
// El cliente debe mandar el n煤mero de personaje mediante params. 
// La respuesta del servidor debe lucir algo as铆
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
//              } }

app.get('/api/swapi/:id/', (req, res) => {

  axios
  .get(`https://swapi.dev/api/people/${req.params.id}`) 
  .then(response => {
      if(response.status === 200) {
        res.status(200).send({ personaje: response.data }); 
      }
  })
  .catch(error => console.log(error));
});

// RETO 5
// Agrega un endpoint '/api/body que responda a una petici贸n de tipo PUT con el body que el cliente env铆e al hacer la petici贸n. Ejemplo: cliente env铆a un body desde postman o insomnia que luce como este:
//             { "nombre": "Maui", "ocupacion": "Sensei" }

app.put('/api/body', (req, res) => {
    console.log(req.body);
    const { nombre, ocupacion } = req.body;
    res.status(200).send(req.body); 
  });
//
// Entonces, el servidor debe responder con un objeto id茅ntico al que env铆a el cliente, junto con un status de respuesta 200.

// RETO 6
// Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, a trav茅s de una petici贸n POST que responda con el status 200

app.post('/api/suma', (req, res) => {
    console.log(req.body);
    res.status(200).send({ resultado: Number(req.body.num1) + Number(req.body.num2) }); 
  });

// RETO 7
// Crea un endpoint para una petici贸n de tipo DELETE donde env铆es un ID (un n煤mero cualquiera) a trav茅s de params.
// Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje 鈥渟e ha eliminado el objeto con ID 3鈥?, 
// de lo contrario, si env铆an cualquier otro n煤mero como ID, responde con un status 404 y el mensaje 鈥淣o se encontr贸 el objeto 
// ...con el ID especificado鈥?.

app.del('/api/:id', (req, res) => {
    if (req.params.id === '3'){
        res.status(200).send({ message: 'se ha eliminado el objeto con ID 3' }); 
    } else {
        res.status(404).send({ message: 'No se encontr贸 el objeto con el ID especificado' }); 
    }
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });