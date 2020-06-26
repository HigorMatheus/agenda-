const express = require('express');
const connection = require('../database/connection');


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
    async create(req,res){
      // console.log(req.body)
      const{
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      
      } = req.body;
      
      // const name = req.body.name;
      // const telephone = req.body.telephone;
      // const email = req.body.email;
      // const senha = req.body.senha;
      // const confirma_senha = req.body.confirma_senha;

      //aweit 
      await connection('users').insert({
        name,
        telephone,
        email,
        senha,
        confirma_senha,
      });
      // Returns [1] in "mysql", "sqlite", "oracle"; [] in "postgresql" unless the 'returning' parameter is set.
      //knex('books').insert({title: 'Slaughterhouse Five'})

      // return res.json(req.json());
    }
}

module.exports = UserController;