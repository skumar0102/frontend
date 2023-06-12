import express from 'express';
import {createorder,fetchorder,orderById,updateOrder,fetchPayment} from '../Controllers/RazorpayController.js';


const router = express.Router();

router.post("/",createorder);
router.get("/orders",fetchorder);
router.get("/order/:id",orderById);
router.post("/order/:id",updateOrder);
router.get("/",fetchPayment);



export default router;