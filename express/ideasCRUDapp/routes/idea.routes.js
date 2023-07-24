const ideaController = require('../controllers/idea.controller');

module.exports = (app)=>{
    app.get('/ideaApp/v1/ideas', ideaController.fetchAllIdeas);

    //Post idea
    app.post('/ideaApp/v1/ideas', ideaController.createIdea);
}