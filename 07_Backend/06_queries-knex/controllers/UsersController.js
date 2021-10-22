const createUser = (req, res) => {
    const newUserId = Math.floor(Math.random() * 1000);
    return res
    .status(200)
    .send({ message: 'Hola desde el server POST!', newUserId });
} 

const getAllUsers = (req, res) => {
    const users = [
        { email: 'jcr@gmail.com', password: '123' }, 
        { email: 'jajar@gmail.com', password: 'jaja123' }
    ];
    return res
    .status(200)
    .send({ message: 'Hola desde el server GET!', users} );
}

module.exports = { createUser, getAllUsers };