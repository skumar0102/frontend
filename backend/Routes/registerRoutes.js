import express from 'express';
import {createUser} from '../Controllers/RegisterController.js';


const router = express.Router();

router.post("/",createUser);



export default router;