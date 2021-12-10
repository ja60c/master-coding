const express = require('express');
const router = express();
const { PostsController } = require('../controllers')


// CRUD POSTS

// Create - POST
router.post('/posts', PostsController.createPost);

// Read All - GET
router.get('/posts', PostsController.findAllPosts)

// Read One - GET
router.get('/posts/:id', PostsController.findPost)

// Update - PUT
router.put('/posts/:id', PostsController.updatePost)

// Delete - DELETE (borrado lógico)
router.delete('/posts/:id', PostsController.deletePost)
  
// Destroy - DELETE (borrado físico)
router.delete('/posts/:id/destroy', PostsController.destroyPost)

module.exports = router;