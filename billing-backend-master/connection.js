//establish a connection between server and mongodb using mongoose with local database
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(`${process.env.CLOUD}`);
        console.log("Connected to mongodb...");
    } catch (error) {
        console.log("Error connecting to mongodb", error);
    }
}

connection();