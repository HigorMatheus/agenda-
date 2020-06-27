// const express = require('express');
const connection = require('../database/connection');


const UserController = {
    // visualizar todos os uduarios 
    async index (req,res){
      connection('users').then((results)=>{
        return res.json(results);
      });
    },
    // criando um usuario 
    async create( req,res, next){

      // console.log(req.body)
      const{
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      } = req.body;

      await connection('users').insert({
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      });
  
      return res.json(res.body);
    
    },
    
    //fazendo uma alteração de um usuario
    async update(req,res){
      const{
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      } = req.body;
      const{id} = req.params

      await connection('users').update({
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      }).where({id})
      return res.json(res.body)
    }
}

module.exports = UserController;