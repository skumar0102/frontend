import express from 'express';
import { Login,logout,verify } from '../Controllers/authController.js';

const router = express.Router();

router.post("/login",Login);
router.get("/logout",logout);
router.get("/verify",verify);

export default router;