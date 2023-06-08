import express from 'express';
import {paymentLink} from '../Controllers/RazorpayController.js';


const router = express.Router();

router.post("/",paymentLink);



export default router;