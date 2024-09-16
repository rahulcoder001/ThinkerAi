
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a Username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please Provide a email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Provide a password"],
    }
},
{timestamps:true,});

const  User=mongoose.models.User || mongoose.model("User",userSchema);

export default User;
