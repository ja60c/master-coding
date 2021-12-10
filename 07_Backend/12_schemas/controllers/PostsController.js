const { PostsModel } = require('../models');

// Create - POST
const createPost = (req, res) => {
    const { body } = req;
  
    const validBody = body.title && body.author && body.content && body.category;
    if (!validBody) {
        return res.status(400).send({
        message: 'Debes agregar un body con title, author, content y category'
        });
    }

    PostsModel.create(body)
        .then(newPost =>
        res.status(201).send({ message: 'Post publicado!', post: newPost })
        )
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al crear post', error: error.message })
        );
};
  
// Read All - GET
const findAllPosts = (req, res) => {
    PostsModel.find()
        .then(posts => res.status(201).send({ message: 'Aquí los posts!', posts }))
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al traer posts', error: error.message })
        );
};

// Read One - GET
const findPost = (req, res) => {
    const { id } = req.params;

    PostsModel.findById(id)
        .then(post => res.status(201).send({ message: 'Aquí el post!', post }))
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al traer post', error: error.message })
        );
};

// Update - PUT
const updatePost = (req, res) => {
    const { body } = req;
    const { id } = req.params;

    PostsModel.findByIdAndUpdate(id, body, { new: true })
        .then(post =>
        res.status(201).send({ message: 'Aquí el post actualizado!', post })
        )
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al actualizar post', error: error.message })
        );
};

// Delete - DELETE (borrado lógico)
const deletePost = (req, res) => {
    const { id } = req.params;

    PostsModel.findByIdAndUpdate(id, { isActive: false })
        .then(() => res.status(204).send())
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al eliminar post', error: error.message })
        );
};
  
// Destroy - DELETE (borrado físico)
const destroyPost = (req, res) => {
    const { id } = req.params;

    PostsModel.findByIdAndDelete(id)
        .then(() => res.status(204).send())
        .catch(error =>
        res
            .status(400)
            .send({ message: 'Error al eliminar post', error: error.message })
        );
};

module.exports = {
    createPost,
    findAllPosts,
    findPost,
    updatePost,
    deletePost,
    destroyPost
};

