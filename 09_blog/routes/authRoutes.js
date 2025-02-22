import express from 'express';
import { login, loginForm, logout } from '../controllers/authController.js';



const router = express.Router();


router.get("/login",loginForm)
router.post("/login",login)
router.get("/logout",logout)


export default router;


