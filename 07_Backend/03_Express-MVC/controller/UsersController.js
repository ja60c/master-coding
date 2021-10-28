function createUser(req, res){
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).send({ message: 'Ingresar correo y contraseña'});
    }

    const user = {
        id: Math.floor(Math.random() * 100),
        ...req.body
    }
    res.status(201).send({ message: `usuario creado con el id: ${user.id}!`})
}

function getAllUsers(req, res){
    
}

function getOneUser(req, res){
    
}

function updateUser(req, res){
    
}

function partialUpdateUser(req, res){
    
}

function deleteUser(req, res){
    
}