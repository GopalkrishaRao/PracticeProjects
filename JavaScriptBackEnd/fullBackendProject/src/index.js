/*
 require('dotenv').config({path:'./env'});
 
or its aslo written as 

 also change 
"dev": "nodemon src/index.js" to 

in package.json
*/

import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})


import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    try {
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is running at port: ${process.env.PORT}`);
        })
    } catch (error) {
        app.on("errrror", (error)=>{
            console.log("ERR", error);
            throw error;
        })
    }
    
    })
.catch((err)=>{
    console.log("Mogo db connection failed !!!", err);
})

// One of the way to connect the db 
//Second approch is in ./db/index.js


/* 

import express from "express";
const app = express();

// connect od db
// start with semicolon better practice

;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    //    check if db fail to connect with epxress
    app.on("errrror", (error)=>{
        console.log("ERR", error);
        throw error;
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
    } catch(error){
        console.log("ERROR", error);
        throw error;
    }
})();



*/
