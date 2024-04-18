import mongoose from "mongoose";

// create schema
const medicalRecordScema = new mongoose.Schema({
    
        
    },{timestamps:true}
);

// export 
export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordScema);
