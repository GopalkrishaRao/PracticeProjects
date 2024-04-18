const express =require ('express');
const app = express();
require('dotenv').config();
const port =4000;
app.get("/", (req, res)=>{
    res.send("Hello word")
});

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${port}`);
});