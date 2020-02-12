const express = require('express'); 
const routes = express.Router();
const ContactController = require('./controllers/ContactController');

routes.get('/contacts', ContactController.index);
routes.post('/contacts', ContactController.store);
routes.get('/contacts/:id', ContactController.show);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.delete);

module.exports = routes;