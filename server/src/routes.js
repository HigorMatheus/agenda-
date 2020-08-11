const express = require('express');
const UserController = require('./Controllers/UserController');
const auth = require('./Middleware/auth');
const ProductsController = require('./Controllers/ProductController');


//configurando rotas 
const routes = express.Router();
// router de cadastro de usuario
routes.post('/user' , UserController.create);
// router para login 
routes.post('/login', UserController.auth);
// router para visualizar os usuarios 
routes.get('/user' ,auth, UserController.index);
// router para editar um  usuario
routes.put('/user/:id' ,auth, UserController.update);
// router para deletar um  usuario
routes.delete('/user/:id' ,auth, UserController.destroy);

// // router de cadastro de usuario
routes.post('/product' ,auth, ProductsController.create);
// // router para visualizar os usuarios 
routes.get('/product' , ProductsController.index);
// // router para editar um  usuario
routes.put('/Products/:id' ,auth, ProductsController.update);
// // router para deletar um  usuario
routes.delete('/Products/:id' ,auth, ProductsController.destroy);

// exportando routes
module.exports = routes;