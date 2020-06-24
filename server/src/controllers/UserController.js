const express = require('express');
const Knex = require('knex');


const UserController = {
    // const index = (rec,res){
    //   res.json('name: higor')
    // }
    // routes.get('/perfil',function(rex,res){
    //   res.json('name: higor ')
    // });
    async index(req,res) {
      res.json('name: higor Matheus');  
    },
    async post(req,res){
      // const{
      //   name,
      //   telephone,
      //   email,
      //   senha,
      //   confirma_senha,
      
      // } = request.body;
      
      const name = req.body.name;
      const telephone = req.body.telephone;
      const email = req.body.email;
      const senha = req.body.senha;
      const confirma_senha = req.body.confirma_senha;

      //aweit 
      Knex('users').insert({
        name: name,
        telephone: telephone,
        email: email,
        senha: senha,
        confirma_senha: confirma_senha,
      });
      // Returns [1] in "mysql", "sqlite", "oracle"; [] in "postgresql" unless the 'returning' parameter is set.
      //knex('books').insert({title: 'Slaughterhouse Five'})

      return res.json(req.json());
    }
}

module.exports = UserController;