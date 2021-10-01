// MODULES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes')
const 

// MIDDLEWARES
app.use(express.json()); // Para procesar json 
app.use(express.urlencoded({ extended: true })); // Para procesar documentos, imagenes, videos, etc.

// ENDPOINTS
app.use('/api/v1',routes);

// LISTENER
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));