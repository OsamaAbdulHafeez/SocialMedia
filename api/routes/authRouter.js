import express from 'express'
import mongoose from 'mongoose'
import UserSchema from '../models/usermodel.js'
import { Login, Register } from '../Controller/authController.js'
const authRouter = express.Router()

// REGISTER
authRouter.post("/register",Register)
authRouter.post("/login",Login)

export {authRouter}
