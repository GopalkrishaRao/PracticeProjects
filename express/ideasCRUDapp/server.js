const express = require('express');

const app = express();

app.use(express.json())

app.use(middleWare);

function middleWare(req, res, next){
    console.log("This is a middle ware");
    next();
}


require('./routes/idea.routes')(app);


app.listen(3000, ()=>{
    console.log("epress app");
})