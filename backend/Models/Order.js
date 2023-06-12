import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    id: {type:String},
    entity:{type:String},
    amount:{type:String},
    amount_paid:{type:String},
    amount_due:{type:String},
    currency:{type:String},
    receipt:{type:String},
    offer_id:{type:String},
    status:{type:String},
    attempts:{type:String},
    notes:{type:Array},
    created_at:{type:String},
});

export default new mongoose.model("Orders",OrderSchema);
