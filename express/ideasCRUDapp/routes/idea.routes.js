const ideaController = require('../controllers/idea.controller');

module.exports = (app)=>{
    app.get('/ideaApp/v1/ideas', ideaController.fetchAllIdeas);

    //Post idea
    app.post('/ideaApp/v1/ideas', ideaController.createIdea);

    // Update idea
    app.put('/ideaApp/v1/ideas/:id', ideaController.updateIdea)

    //  delte idea
    app.delete('/ideaApp/v1/ideas/:id', ideaController.deleteIdea)

}