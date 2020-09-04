const authConfig = require('./auth.json');
const jwt = require('jsonwebtoken');
 // gerando um JsonWebToken para Authenticação
 function generateToken( params){
    return jwt.sign( params, authConfig.secret,{
      // exprirando em um dia 
      expiresIn: 86400,
    })
  }

  module.exports = generateToken;