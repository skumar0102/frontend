import Razorpay from "razorpay";
import Order from "../Models/Order.js";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

async function createorder(req, res) {
  try {  
    //MongoDb Database

    let result = await Order.create(req.body);
    let newResult,order;
      if(result._id){
      order = await instance.orders.create({
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt#1",
    });
      if(order){
        let updateResult = await Order.updateOne({_id:result._id},{...order});
        if(updateResult.modifiedCount){
          newResult = await Order.findById(result._id);
        }
      }
      }

      
    
    res
      .status(201)
      .send({ success: true,Order:order, Result: newResult });

    // res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function fetchorder(req, res) {
  try {
    let result = await instance.orders.all({ count: 100 });
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function orderById(req, res) {
  try {
    let result = await instance.orders.fetch(req.body.orderId);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateOrder(req, res) {
  try {
    let result = await instance.orders.edit(req.body.orderId);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function fetchPayment(req, res) {
  try {
    let result = await instance.orders.fetchPayments(req.body.orderId);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function fetchAllPayments(req,res){
  try {
    let result = await instance.payments.all({count:100});
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createorder, fetchorder, orderById, updateOrder, fetchPayment,fetchAllPayments };
