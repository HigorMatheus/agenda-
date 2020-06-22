const express = require('express');

//configurando rotas 
const routes = express.Router();

// criando uma rota 
routes.get('/',(rec,res)=>{
  res.json('tudo certo c');
});


// exportando routes
module.exports = routes;