import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
    Title : {type:String},
    Description : {type:String},
    Startdate : {type:Date},
    Enddate : {type:Date},
},{timestamps:true})


export default new mongoose.model("Events",EventSchema);