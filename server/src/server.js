//inportando express 
const express = require('express');
const bodyParser = require('body-parser');
// iniciando uma api
 const app = express();

app.use(bodyParser.json());

// importando as rotas da api 
 app.use('/',require('./routes'));

 //iformando a porta que a api vai funcionar 
app.listen(3001);