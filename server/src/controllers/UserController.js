// const express = require('express');
const connection = require('../database/connection');

// utilizamos para criptografar senha 
const crypto = require('crypto')

const ProductController = require('./ProductController');

const UserController = {
    // visualizar todos os uduarios 
    async index (req,res){
      connection('users').then((results)=>{
     
        return res.json(results);
      });
    },

    // criando um usuario 
    async create( req,res){
      // console.log(req.body)
    
      name= req.body.name;
      telephone = req.body.telephone;
      email= req.body.email;
      senha = req.body.senha;
      confirma_senha= req.body.confirma_senha;

      const secret = senha;
      const hash = crypto.createHmac('sha256', secret)
      .update('I love cupcakes')
      .digest('hex');

      await connection('users').insert( {
        name,
        telephone,
        email,
        senha: hash,
        confirma_senha,
      } )
      return res.json(res.body)
    },
    
    // alterando um usuario
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
    },
    
    //deletando um usuario 
    async destroy(req,res){
      const {id} = req.params

      await connection('users').where({id}).del()
      return res.json({mensagem: "usuario deletado com sucesso"})
    }
}

module.exports = UserController;