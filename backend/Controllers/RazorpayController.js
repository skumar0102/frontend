import Razorpay from "razorpay";
import dotenv from 'dotenv';
import Order from "../Models/Order.js";

async function createorder(req, res) {
  try {
    let { amount } = req.body;
    var instance = new Razorpay({
      key_id:process.env.RAZORPAY_ID_KEY ,
      key_secret: process.env.RAZORPAY_SECRET_KEY,

        });

        let order = await instance.orders.create({
            amount: amount*100,
            currency:"INR",
            receipt:"receipt#1"
        })

        let result = await Order.create(order);
        res.status(201).send({success:true,Order_details:order,Result:result});



        // res.status(201).send(order);
  } catch (error) {

      res.status(400).send(error.message);  
  }
}


async function fetchorder(req,res){
  try {
    var instance = new Razorpay({
      key_id:process.env.RAZORPAY_ID_KEY ,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });
    

   let result = await instance.orders.all();
   res.status(200).send({result});
    
  } catch (error) {
    res.status(400).send(error.message);  
    
  }
}


async function orderById(req,res){
  try {
    var instance = new Razorpay({
      key_id:process.env.RAZORPAY_ID_KEY ,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });
    let result = await instance.orders.fetch(req.body.orderId);
   res.status(200).send({result});  
  } catch (error) {
    res.status(400).send(error.message);      
  }
}

async function updateOrder(req,res){
  try {
    var instance = new Razorpay({
      key_id:process.env.RAZORPAY_ID_KEY ,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    let result = await instance.orders.edit(req.body.orderId);
   res.status(200).send({result});  

  } catch (error) {
    res.status(400).send(error.message);      
  }
}

async function fetchPayment(req,res){
  try {
    var instance = new Razorpay({
      key_id:process.env.RAZORPAY_ID_KEY ,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    let result = await instance.orders.fetchPayments(req.body.orderId)

  } catch (error) {
    res.status(400).send(error.message);      
  }
}

export {createorder,fetchorder,orderById,updateOrder,fetchPayment}