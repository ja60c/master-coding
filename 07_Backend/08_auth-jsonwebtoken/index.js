//  MODULES
const express = require('express');
const app = express();
const PORT = 8080;
const jwt = require('jsonwebtoken')

// MIDDLEWARES
app.use(express.json());

const books = []

// ENDPOINTS
app.get('/', (req, res) =>{
    res.status(200).send({ message: 'Hola mundo! 🍊✨' })
});

app.get('/books',(req, res) => {
    res.status(200).send({ message: 'Aqui estan tus libros', books});
})

app.post('/books'(req, res) => {
    res.status(200).send({ message: 'Libro creado', books })
})

// LOGIN
app.post('/login', (req, res) =>{
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Ingresar email y password' });
    }

    const payload = {
        email, password
    };

    const token = jwt.sign(payload, 'shhhecreto');

    return res.status(200).send({ message: 'Bienvenido!!', token})

})

// LISTENER
app.listen(PORT, () => console.log(`Servidor corriendo: http://localhost:${PORT}`))