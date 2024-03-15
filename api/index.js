import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors'
import multer, { diskStorage } from 'multer'

import dbconnection from "./dbconnection.js";
import { UserRouter } from "./routes/userRouter.js";
import { authRouter } from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";
const app = express();
dotenv.config()
dbconnection()

// MiddeleWare
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

app.get('/', (req, res) => {
    res.send("welcome to home page")
})
app.get('/users', (req, res) => {
    res.send("welcome to user page")
})


app.use("/api/user", UserRouter)
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"public/images")
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    }
})
const upload = multer({storage});
app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
        return res.status(200).json("File Uploaded Successfully")
    } catch (error) {
        console.log(error)
    }
})





app.listen(8800, () => {
    console.log("Backend server is running")
})