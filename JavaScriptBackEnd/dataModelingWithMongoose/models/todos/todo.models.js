import mongoose from "mongoose";

// create schema
const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        requied:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    // adding reference
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//Arrya of sub todos
}, {timestamps:true});


export const Todo = mongoose.model("Todo", todoSchema);