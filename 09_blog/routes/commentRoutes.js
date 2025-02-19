import express from 'express';
import { addCommentAction } from '../controllers/CommentController.js';


const router = express.Router();



router.post('/:slug', addCommentAction);


export default router;


