import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const dbconnection = async() =>{
    try {
        const con = await mongoose.connect(process.env.MongoDb)
        console.log(`MongoDb Connect`)
    } catch (error) {
        console.log(error)        
    }
}
export default dbconnection