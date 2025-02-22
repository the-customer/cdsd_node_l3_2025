import express from 'express';
import { addCommentAction,addResponseAction } from '../controllers/CommentController.js';


const router = express.Router();



router.post('/:id/response', addResponseAction);
router.post('/:slug', addCommentAction);


export default router;


