import express from 'express';
import { adminDashbord, deletePost,editPostForm,updatePost } from '../controllers/PostController.js';
import { deleteComment } from '../controllers/CommentController.js';


const router = express.Router();



router.get("/",adminDashbord);
router.post("/posts/delete/:id",deletePost);
router.get("/comments/delete/:id",deleteComment);
//
router.get("/posts/edit/:id",editPostForm);
router.post("/posts/edit/:id",updatePost);


export default router;


