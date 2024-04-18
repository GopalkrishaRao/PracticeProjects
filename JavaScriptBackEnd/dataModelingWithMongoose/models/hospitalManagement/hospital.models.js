import mongoose from "mongoose";

// create schema
const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specilizedIn:[
        {
            type:String,
        }
    ],
        
    },{timestamps:true}
);

// export 
export const Hospital = mongoose.model("Hospital", hospitalSchema);
