import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import connectDB from "./DB/ConnectDB.js";
import web from './routes/web.js';
import cors from 'cors';

const app = express();
app.use(cors())
const PORT = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL 


//Databse connection

connectDB(process.env.DATABASE_URL);


//json middle ware

app.use(express.json());

//loading router
app.use('/api', web)


app.listen(PORT, ()=>{
    console.log(`server running at http://127.0.0.1:${PORT}`)
})