import express from 'express';

const app=express();

// app.get('/', (req,res)=>{
//     res.send("Server is ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res)=>{
    const jokes=[
        {
            id:1,
            title: "A Joke",
            content: "This is a Joke"
        },
        {
            id:2,
            title: "Another Joke",
            content: "This is second Joke"
        },
        {
            id:3,
            title: "Thidrd Joke",
            content: "This is third Joke"
        },
        {
            id:4,
            title: "Fourth Joke",
            content: "This is fourth Joke"
        },
        {
            id:5,
            title: "Fifth Joke",
            content: "This is fifth Joke"
        },

    ];
    res.send(jokes)
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
    }
);