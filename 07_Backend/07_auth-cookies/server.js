// MODULES
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');

// SIMULAMOS UNA BASE DE DATOS
const db = {
    // Simulamos una colección 'tweets'
    tweets: [],
  
    // Simulamos una colección 'users'
    users: [
      { userID: 1, email: 'usuario1@correo.com', password: 'p4ssw0rd123' },
      { userID: 2, email: 'usuario2@correo.com', password: 'p4ssw0rd123' }
    ]
  };
  
  // MIDDLEWARES
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(helmet());
  // Usamos middleware de cookie-session
  // Más información: http://expressjs.com/en/resources/middleware/cookie-session.html
  app.use(
    cookieSession({
      name: 'session',
      keys: ['Hola', 'Master', 'Code', 'G7'],
  
      // Cookie Options
      maxAge: 10 * 60 * 1000 // Se recomienda entre 10-15 min de duración para evitar vulnerabilidades
    })
  );
  
  // ENDPOINTS
  // Inicio/Home/Raíz -> GET /
  app.get('/', (req, res) => {
    // Para crear o actualizar una cookie accedemos al objeto req.session Ej: req.session.miCookie = 'miNuevaCookie'
  
    // Ejemplo cookie contador de vistas:
    req.session.views = (req.session.views || 0) + 1;
  
    return res
      .status(200)
      .send({ message: 'Hola mundo! 👋', cookies: req.session });
  });

  module.exports = app;