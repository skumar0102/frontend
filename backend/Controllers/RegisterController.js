import Register from "../Models/Register.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transport from "../Config/nodemailerConfig.js";


async function createUser(req,res){
    try {
        let {first_name,last_name,email,password} = req.body;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password,salt);

        let token = jwt.sign({
            first_name,last_name,email,password,expireIn:60
        },process.env.JWT_SECRET_KEY);

        let result = await Register.create({first_name,last_name,email,password:hash});
        res.status(201).send({success:true,result : result,token:token})
        

        const mailData = {
            from : process.env.MAILTRAP_USERNAME,
            to : req.body.email,
            subject : "IDS-Software Solution Registration Successfully Done",
            html : `
            <h1>Your Registration Successfully Done ! Please check your details below : </h1>
            <br/>
            <h2>Yours Details : </h2>
            <br/>
            <h3>
            First Name : ${first_name}<br/>
            Last Name : ${last_name}<br/>
            Email : ${email}<br/>
            Password : ${password}<br/>
            
            </h3>
            `,
        };

        
        await transport.sendMail(mailData);
    
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


export {createUser}