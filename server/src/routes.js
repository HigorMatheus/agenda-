const express = require('express');
const UserController = require('./controllers/UserController');

//configurando rotas 
const routes = express.Router();


// route utilizanso controller
routes.get('/' , (req,res)=>{
    res.json({produtos:'tela de produtos disponiveis '})
});

// router de cadastro de usuario
routes.post('/user' , UserController.create);
// router para visualizar os usuarios 
routes.get('/user' , UserController.index);
// router para editar um  usuario
routes.put('/user/:id' , UserController.update);

// exportando routes
module.exports = routes;