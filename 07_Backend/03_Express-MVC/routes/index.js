const express = require('express');
const router = express.Router(); 
const userRoutes = require('./UsersRoutes');

// ENDPOINTS
router.get('/', (req, res) => {
    res.status(200).send('Hola mundo!')
});

router.use(userRoutes)

module.exports = router