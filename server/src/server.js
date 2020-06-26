//inportando express 
const express = require('express');
//inportando bory-parser
// const bodyParser = require('body-parser');
// iniciando uma api
 const app = express()
 

 // para receber e emviar informaçoes em Json
// app.use(bodyParser.json());
// entender inpormacoes atravez de url
// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())
// importando as rotas da api 
 app.use('/',require('./routes'));
// require('./controllers/UserController')(app);

 //iformando a porta que a api vai funcionar 
app.listen(3001);