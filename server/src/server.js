//inportando express 
const express = require('express');

// iniciando uma api
const app = express();

// importando as rotas da api 
 app.use('/',require('./routes'));

 //iformando a porta que a api vai funcionar 
app.listen(3001);