import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        maxlength:50
    },
    img:{
        type:String
    },
    like:{
        type:Array,
        default:[]
    }
},
    { timestamps: true }
)

export default mongoose.model("Posts", PostSchema)