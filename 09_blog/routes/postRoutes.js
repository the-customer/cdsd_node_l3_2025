import express from 'express';
import {listPosts,showPost} from '../controllers/PostController.js';


const router = express.Router();




router.get('/', listPosts);
router.get('/:slug', showPost);


export default router;