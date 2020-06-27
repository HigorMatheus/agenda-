//inportando express 
const express = require('express');

//inportando rotas
const routes =require('./routes');

// iniciando uma api
const app = express()

// para receber e emviar informaçoes em Json
app.use(express.json())

// utilizando as rotas da api 
app.use('/',routes);



 //iformando a porta que a api vai funcionar 
app.listen(3001);