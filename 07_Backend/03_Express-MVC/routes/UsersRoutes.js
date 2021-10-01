const express = require('express');
const router = express();

// CRUD USUARIOS
// Create - POST
router.post('/api/v1/users', (req, res) => {
    // Lógica de create
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).send({ message: 'Ingresar correo y contraseña'});
    }

    const user = {
        id: Math.floor(Math.random() * 100),
        ...req.body
    }
    res.status(201).send({ message: `usuario creado con el id: ${user.id}!`})
})

// Read - GET
router.get('/users', getAllUsers)
})

router.get('/api/v1/users/:id', (req, res) => {
    // Lógica de read one
    const id = req.params.id;
    res
        .status(200)
        .send({ mensaje: `Este es tu usuario con el id: ${id}!`})
})

// Update - PUT/PATCH
router.put('/api/v1/users/:id', (req, res) => {
    // Lógica de update
    const { id } = req.params;
    res
        .status(200)
        .send({ mensaje: `Actualizado el usuario con el id: ${id}!`})
})

router.patch('/api/v1/users/:id', (req, res) => {
    // Lógica de partial update
    const { id } = req.params;
    res
        .status(200)
        .send({ mensaje: `Actualizado parcialmente el usuario con el id: ${id}!`})
})

// Delete - DELETE
router.delete('/api/v1/users/:id', (req, res) => {
    // Lógica de delete
    const { id } = req.params;
    res
        .status(204)
        .send()
})

router.use('/api/v1/', userRoutes)

module.exports = router; 