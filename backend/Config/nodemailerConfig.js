import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 587,
    auth : {
        user : process.env.MAILTRAP_USERNAME,
        pass : process.env.MAILTRAP_PASSWORD
    },
    secure : false,
    logger : true
})


export default transport;