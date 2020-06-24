const express = require('express');
const UserController = require('./controllers/UserController');

//configurando rotas 
const routes = express.Router();

// criando uma rota 
// routes.get('/',(rec,res)=>{
//   res.json('tudo certo c');
// });

// route utilizanso controller
routes.get('/' , UserController.index);

routes.post('/user' , UserController.post);

// exportando routes
module.exports = routes;