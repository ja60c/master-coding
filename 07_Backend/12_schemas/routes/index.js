const express = require('express');
const router = express.Router();
const PostsRoutes = require('./PostsRoutes');

router.use(PostsRoutes);

module.exports = router;