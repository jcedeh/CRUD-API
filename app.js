import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


//const connectDb = require('./db');


const PORT = 3000;
dotenv.config();

const app = express();

//include middlewares to use
app.use(express.json());
app.use(morgan('dev'));

//implement route
app.use('/api', userRoutes);



async function connectDb() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongo DB connected successfully');
}







app.listen(PORT, ()=>{
    connectDb();
    console.log(`server listening on port ${PORT}`)
})