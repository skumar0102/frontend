import express from 'express';
import {createorder,fetchorder,orderById,updateOrder,fetchPayment,fetchAllPayments} from '../Controllers/RazorpayController.js';


const router = express.Router();

router.post("/",createorder);
router.get("/orders",fetchorder);
router.get("/order/:id",orderById);
router.post("/order/:id",updateOrder);
router.get("/",fetchPayment);
router.get("/all",fetchAllPayments);




export default router;