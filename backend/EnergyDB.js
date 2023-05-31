import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./DB/ConnectDB.js";
import EnergyModel from "./models/Energy.js";


// exporting json data 
import Energy from './jsondata.json' assert { type: "json" };

const start = async()=>{
    try {
        // connecting to database
        await connectDB(process.env.DATABASE_URL);
        // Pushing json data into the model
        await EnergyModel.create(Energy);
        console.log("success");

    } catch (error) {
        console.log(error)
    }
}  

start();