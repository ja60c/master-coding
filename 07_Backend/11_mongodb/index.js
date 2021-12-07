const db = require('./db');

const CatModel = db.model('CatModel', { name: String });

const zildjian = new CatModel({ name: 'Zildjian' });
zildjian.save().then(() => console.log('meow soy Zildjian'));

// CREATE
CatModel.create({ name: 'Zildjian2' }).then(newCat => 
    console.log('meow soy Zildjian2', newCat)
);

// GET ALL
CatModel.find().then(cats => console.log('MIS GATOS:', cats));

// GET ONE 
CatModel.findOne({ name: 'Salem' }).then(foundCat => console.log('Gato encontrado por propiedad', foundCat));
CatModel.findById('61a98a9ec448bc94d8c0c6f6').then(foundCat => console.log('Gato encontrado por ID', foundCat));

// UPDATE 
CatModel.findByIdAndUpdate
('61a98a9ec448bc94d8c0c6f6', 
{ name: 'Don Gato' }, 
{ new: true }
).then(updatedCat => console.log('Gato actualzado', updatedCat));

// DELETE
CatModel.findByIdAndDelete('61a98a9ec448bc94d8c0c6f6').then(() => 
console.log('Gato borrado')
);
