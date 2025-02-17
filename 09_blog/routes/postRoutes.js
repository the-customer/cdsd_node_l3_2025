const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');



router.get('/', PostController.listPosts);
router.get('/:id', PostController.showPost);

module.exports = router;

