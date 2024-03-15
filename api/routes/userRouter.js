import express from "express"
import { DeleteUser, FollowUser, UnFollowUser, UpdateUser, getUser } from "../Controller/userController.js"
const UserRouter = express.Router()

// Update User
UserRouter.put("/:id",UpdateUser)
UserRouter.delete("/:id",DeleteUser)
UserRouter.get("/",getUser)
UserRouter.put("/:id/follow",FollowUser)
UserRouter.put("/:id/unfollow",UnFollowUser)

export {UserRouter}