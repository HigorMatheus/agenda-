const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')

module.exports = (req,res,next) => {
  //recebendo o token do user
  const authHeader = req.headers.authorization;

  // verificando se tem autorização 
  if(!authHeader)
  return res.status(401).send({ error: 'ToKen nao informado'});

  // dividindo em partes
  const parts = authHeader.split(' ');

  // verificando se sao 2 partes 
  if(!(parts.length === 2))
  return res.status(401).send({ error: 'Token error'});

  const [ scheme , token ] = parts;

  // // verificando se tem a paravra Bearer no scheme
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token erro de formatação '});

    //verificando se o token e compartivel com nossa arplicação 
    jwt.verify( token, authConfig.secret, (err, decoded) =>{
      if (err) return res.status(401).send({ error: 'Token invalido'});

      // repasando autorizaçao
      req.userId = decoded.id

      // autoridado
      return next()
    })
}