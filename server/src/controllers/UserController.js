// importando conexão com banco de dados 
const connection = require('../database/connection');
// utilizamos para criptografar senha 
const bcrypt = require('bcryptjs')

//inportando function de token 
const generateToken = require('../config/generateToken');

const UserController = {

    // visualizar todos os usuarios 
    async index (req,res){
 
        connection.select( 'id','name','email','telephone').table('users').then((results)=>{
          return res.json(results)
        })

    },

    // criando um usuario 
    async create( req,res, next ){
        try {
            // console.log(req.body)
          name= req.body.name;
          telephone = req.body.telephone;
          email= req.body.email;
          senha = req.body.senha;
          confirma_senha= req.body.confirma_senha;
          
          // buscando os email no banco de dados 
        const user = await connection.table('users').where({email});
        //informado que o email não esta cadastrado 
        if( user ){
          return  res.status(401).json({mensagem: 'Usuario ja cadastrado'})
        }

          bcrypt.genSalt(10, (error, salt)=>{
              bcrypt.hash(senha,salt, async (error,hash)=>{
                if(error){
                  req.json('erro ao salvar usuario')
                  res.redirect("/")
                }
              // const user istanciando user que esta sendo criado 
              const user =  await connection.table('users').insert( {
                  name,
                  telephone,
                  email,
                  senha: hash,
                  confirma_senha,
                } );
                //informando dados para o front end 
                const data = {
                  id: user[0].id,
                  name : req.body.name,
                  telephone: req.body.telephone,
                  email: req.body.email,
                  //informando o token para autorizaçao do usuario 
                  token : generateToken({ id: user.id})
                }
                //status 201 criado ok 
                return res.status(201).json(data);
              });
            });
        } catch (error) {
          next(error)
        }
    },

    // authentcation user
    async auth(req, res, next){
      // try {
        // recebendo parametros do formulario
        const{ email, senha}= await req.body;
        // buscando os email no banco de dados 
        const user = await connection.table('users').where({email});
        //informado que o email não esta cadastrado 
        if(!user || (user && user.length == 0)){
          return  res.status(401).json({mensagem: 'Email nao cadastrado'})
        }
        //verificando se a senha esta correta 
        const isSenha = await bcrypt.compare( senha, user[0].senha);
        //informando que a senha esta incorreta 
        if(!isSenha){
          return res.status(401).json({mensagem: 'senha incorreta '})
        }

        const data = {
          user: user[0].id,
          name: user[0].name,
          telephone: user[0].telephone,
          email: user[0].email,
          token : generateToken({ id: user.id})
        }
        return res.status(200).json(data);
  },


    // alterando um usuario
    async update(req,res){
      const{ name, telephone, email, senha } = req.body;
      const{id} = req.params

      await connection('users').update({
        name,
        telephone,
        email,
        senha,
      }).where({id})
      return res.json(res.body)
    },
    
    //deletando um usuario 
    async destroy(req,res){
      // selecionando um usuario 
      
      const {id} = req.params
      // delerando um usuario
      await connection('users').where({id}).del()

      return res.json({mensagem: "usuario deletado com sucesso"})
    }
}

module.exports = UserController;