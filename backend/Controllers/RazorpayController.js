import Razorpay from "razorpay";
import dotenv from 'dotenv';


async function paymentLink(req, res) {
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


        res.status(201).send(order);
  } catch (error) {

      res.status(400).send(error.message);  
  }
}

export {paymentLink}