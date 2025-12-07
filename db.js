const mongoose = require('mongoose');

export const connectDb = async ()=> {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongo DB connected successfully');
}