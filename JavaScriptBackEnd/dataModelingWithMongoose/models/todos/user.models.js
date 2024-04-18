import mongoose from "mongoose";

// create schema
const userScema = new mongoose.Schema(
    {
        usename: {
            type: String,
            requied: true,
            unique:true,
            lowercase:true
        },
        email: {
            type: String,
            requied: true,
            unique:true,
            lowercase:true
        },
        password:{
            type: String,
            requied: true,
        }
        
    },{timestamps:true}
);

// export 
export const User = mongoose.model("User", userScema);
