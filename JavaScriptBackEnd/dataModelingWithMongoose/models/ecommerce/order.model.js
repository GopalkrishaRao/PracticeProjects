import mongoose from 'mongoose';

const orderItemSchem =new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true
    }
})

const productSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type:[orderItemSchem]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING", "CANCELLED", "DELIVERED"],
        default:"PENDING"
    }

},{timestamps:true});

export const Order = mongoose.model("Order", productSchema);