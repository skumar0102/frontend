import express from 'express';
import { Login,logout } from '../Controllers/authController.js';

const router = express.Router();

router.post("/login",Login);
router.get("/logout",logout);

export default router;