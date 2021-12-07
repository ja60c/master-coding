const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://ja60c:m0ng0@cluster0.n6und.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.log('Error conectando', err.message));

module.exports = mongoose;