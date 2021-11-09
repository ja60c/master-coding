const { UsersModel } = require('../models')

// Hacer login -> POST /login
app.post('/login', (req, res) => {
// Desestructuramos email y password del body
const { email, password } = req.body;

// Si email o password no existen retornamos con un mensaje de error
if (!email || !password) {
    return res.status(400).send({ message: 'Ingresar email y password' });
}

// Buscamos el usuario en la base de datos con su email
const user = db['users'].find(user => user.email === email);

// Si el usuario no existe retornamos con un mensaje de error
if (!user) {
    return res.status(404).send({ message: 'El usuario no existe' });
}

// Si los passwords no coinciden retornamos con un mensaje de error
if (user.password !== password) {
    return res.status(400).send({ message: 'Password incorrecto' });
}

// En caso que todas las validaciones hayan sido satisfactorias, generamos una cookie con el id del usuario
req.session.userID = user.userID;

return res
    .status(200)
    .send({ message: 'Hola desde login!', cookies: req.session });
});

// Hacer logout -> POST /logout
app.post('/logout', (req, res) => {
// Para eliminar cookies le asignamos el valor null al objeto session
req.session = null;

return res
    .status(200)
    .send({ message: 'Hola desde logout!', cookies: req.session });
});

// Traer tweets -> GET /tweets
app.get('/tweets', (req, res) => {
return res
    .status(200)
    .send({ message: 'Aquí están tus tweets', tweets: db['tweets'] });
});

// Crear un tweet -> POST /tweets
app.post('/tweets', (req, res) => {
// Desestructuramos la cookie userID del objeto session de la petición
const userID = req.session.userID;

// Verificamos que la cookie de la petición sea válida, si no lo es, retornamos con un mensaje de error
if (!userID) {
    return res
    .status(400)
    .send({ message: 'Debes haber iniciado sesión para crear un tweet' });
}

// Buscamos el usuario en la base de datos con su id
const user = db['users'].find(user => user.userID === userID);

// Si el usuario no existe retornamos con un mensaje de error
if (!user) {
    return res.status(404).send({ message: 'El usuario no existe' });
}

// Una vez que ya verificamos la validez de la cookie del usuario, desestructuramos el content del body de la petición
const { content } = req.body;

// Si content no existe, retornamos con un mensaje de error
if (!content) {
    return res.status(400).send({ message: 'Ingresar content' });
}

// En caso que todas las validaciones hayan sido satisfactorias, creamos un objeto tweet
const tweet = {
    tweetID: Math.floor(Math.random() * 1000), // id del tweet
    content: content, // nombre del tweet
    userID: userID, // el id del usuario que creó el tweet
    createdAt: new Date() // la fecha de creación del tweet
};

// Ingresamos el nuevo tweet en la base de datos
db['tweets'].push(tweet);

return res
    .status(200)
    .send({ message: 'Tweet creado satisfactoriamente!', tweet });
});

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    destroyUser
  };