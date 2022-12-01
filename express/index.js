const express = require ("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello word")
});

app.get ('/insta', (req, res)=>{
    const insta = {
        name : "GK Rao",
        followres: "5000",
        folowing: "500",
    };
    res.status(200).json({insta});

    }
)

app.listen(port, ()=>{
    console.log(`app is runnign in port ${port}`);
});
