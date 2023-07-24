const ideas = require ('../models/idea.model');


// Search idea
exports.fetchAllIdeas = (req, res)=>{
    res.status(200).send(ideas)
}

let idCount=1;


// Create idea

exports.createIdea = (req, res)=>{
// Read the request body

const idea =req.body

// Generate the next Idea id
idea.id = idCount++
// save it in the list of existing idea
ideas[idCount]= idea;
// Return the response
 res.status(201).send(ideas[idCount])
}


// Update idea

// delete idea