import mongoose from 'mongoose';


const RegisterSchema = new mongoose.Schema({
    first_name : {type:String},
    last_name : {type:String},
    email : {type:String},
    password : {type:String},
    role:{type:String,default:'User'}
},{timestamps:true})


export default new mongoose.model("Registration",RegisterSchema);