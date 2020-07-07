const express = require('express');
const UserController = require('./Controllers/UserController');

//configurando rotas 
const routes = express.Router();

// router de cadastro de usuario
routes.post('/user' , UserController.create);
// router para login 
routes.post('/login', UserController.auth);
// router para visualizar os usuarios 
routes.get('/user' , UserController.index);
// router para editar um  usuario
routes.put('/user/:id' , UserController.update);
// router para deletar um  usuario
routes.delete('/user/:id' , UserController.destroy);


// exportando routes
module.exports = routes;