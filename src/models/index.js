import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


try {
    console.log(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
        console.log("Connected to the mongoDB");
} catch(error) {
    console.log("mongoose connection error",error);
}

export default mongoose