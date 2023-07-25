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

exports.updateIdea=(req, res)=>{
// Read the id passed in the path
const ideaId=req.params.id;

// if idea present: update else return error
if(ideas[ideaId]){
    
    ideas[ideaId]=  req.body;
    res.status(200).send(ideas[ideaId]);
}else{
    res.status(400).send(
        {
            message: 'idea Id  passed is not correct'
        }
    )
}
};

// delete idea


exports.deleteIdea = (req, res)=>{
    // Check if present-yes delete, no return error
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message: "Successfully deleted"
        })
    }else{
        res.status(400).send({
            message: "Wrong Idea Id"
        })
    }
}