import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Connection/DBConn.js';
import registerRoutes from './Routes/registerRoutes.js';
import authController from './Routes/authRoutes.js';
import razorpayRoutes from './Routes/razorpayRoutes.js';
import cors from 'cors';

dotenv.config();

// DB Connection
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 1400

app.use("/register",registerRoutes);
app.use("/auth",authController);
app.use("/payment",razorpayRoutes);


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))