import mongoose from "mongoose";

async function connectDB(){
    try {
        let result = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connect to MongoDB");
    } catch (error) {
        console.log(error.message);
    }
}


export default connectDB;