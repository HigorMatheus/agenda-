//importando express 
const express = require('express');

//importando body-parser
const bodyParser = require('body-parser');

//inportando rotas
const routes =require('./routes');

// cros serva para autorizar outros servicos a utilizar a api 
const cros = require('cors')

// iniciando uma api
const app = express();

// autorizando 
app.use(cros());

// para receber e emviar informaçoes em Json 
app.use(bodyParser.json());

// para entender os parametros por  url
app.use(bodyParser.urlencoded({ extended: false}));

// utilizando as rotas da api 
app.use(routes);


// notFund 
app.use(( req,res,next)=>{
 const error = new Error('Not Found')
 error.status = 404 
 next(error)
})
// informando erros en nossa api 
app.use((error, req,res,next)=>{
    // informando se existe um status de  erro se nao existir erro de servidor
    res.status(error.status || 500)
    //informando o erro para o Front end 
    res.json( {  error: error.menssage })
})

// iformando a porta que a api vai funcionar 
app.listen(3001);