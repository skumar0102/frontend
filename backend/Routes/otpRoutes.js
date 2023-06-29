import express from 'express';
import {OTP} from '../Controllers/OtpController.js';

const router = express.Router();

router.get("/otp",OTP);


export default router;