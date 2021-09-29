const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const dominio = 'google.com'

const server = http.createServer((request, response) => {

    if (request.url === "/"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hola Mundo');
        console.log(
          `La ruta de la petición es: ${request.url} con el método ${request.method}`
        );
    } else if (request.url === "/jacqueline") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Jacqueline');
        console.log(
          `La ruta de la petición es: ${request.url} con el método ${request.method}`
        );
    }  else if (request.url === "/urls") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Google.com, Facebook.com');
        console.log(
          `La ruta de la petición es: ${request.url} con el método ${request.method}`
        );
    }   else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('404 NOT FOUND');
        console.log(
          `La ruta de la petición es: ${request.url} con el método ${request.method}`
        );
    }
});

server.listen(port, hostname, () => {

  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});

// CÓMO HARÍAS PARA MOSTRAR TU NOMBRE EN LA RUTA /tu-nombre
// Ejemplo: /pedrito -> Hola soy pedrito!
 
// CÓMO HARÍAS PARA MOSTRAR DOMINIOS EN LA RUTA /urls
// Ejemplo: /urls -> google.com, facebook.com

// CÓMO HARÍAS PARA MOSTRAR UN ERROR 404 SI LA RUTA NO ESTÁ DEFINIDA
// Ejemplo: /pedrito -> Hola soy pedrito!