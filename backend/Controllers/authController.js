import Register from "../Models/Register.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


async function Login(req,res){
    try {
        let result = await Register.findOne({'email':req.body.email});
        if(!result) return res.status(404).send("User not found");

        let authResult = await bcrypt.compare(req.body.password,result.password);
        if(!authResult) return res.status(401).send('Incorrect password');

        let token = jwt.sign({
            first_name : result.first_name,
            last_name : result.last_name,
            email : result.email,
            expiresIn :60
        },
        process.env.JWT_SECRET_KEY,
        )        
        res.status(200).send({success:true, token,result});


    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function verify(req,res){
    try {
        let token = await req.headers.token;
        let email = req.body.email;
        let decodedInfo = jwt.verify(token,process.env.JWT_SECRET_KEY);
           if(email != decodedInfo.email) return res.status(400).send("User not found");
        
        res.status(200).send("Your account has been verified");

    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function logout(req,res){
    try {
        console.log("Hello my logout page");
        res.status(200).send("User Logout");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export {Login,logout,verify}