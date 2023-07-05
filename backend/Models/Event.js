import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
    title : {type:String},
    description : {type:String},
    startdate : {type:Date},
    enddate : {type:Date},
},{timestamps:true})


export default new mongoose.model("Events",EventSchema);