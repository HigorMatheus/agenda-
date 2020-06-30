const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

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
// router para deletar um  usuario
routes.delete('/user/:id' , UserController.destroy);

// router de cadastro de ptoduct
routes.post('/product' , ProductController.create);
// // router para visualizar os ptoducts 
routes.get('/product' , ProductController.index);
// // router para editar um  ptoduct
// routes.put('/product/:id' , ProductController.update);
// // router para deletar um  ptoduct
// routes.delete('/product/:id' , ProductController.destroy);

// exportando routes
module.exports = routes;