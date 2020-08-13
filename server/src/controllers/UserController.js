// importando conexão com banco de dados 
const connection = require('../database/connection');
// utilizamos para criptografar password 
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
        // try {
            // console.log(req.body)
          name= req.body.name;
          telephone = req.body.telephone;
          email= req.body.email;
          password = req.body.password;
          confirma_password= req.body.confirma_password;
          

          bcrypt.genSalt(10, (error, salt)=>{
              bcrypt.hash( password ,salt, async (error,hash)=>{
                if(error){
                  req.json('erro ao salvar usuario')
                  res.redirect("/")
                }
              // const user istanciando user que esta sendo criado 
              const user =  await connection.table('users').insert( {
                  name,
                  telephone,
                  email,
                  password: hash,
                  confirma_password,
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
                return res.status(201).json({data});
              });
            });
        // } catch (error) {
        //   next(error)
        // }
    },

    // authentcation user
    async auth(req, res, next){
    //  return  res.json({ola })
        // recebendo parametros do formulario
        const{ email, password}= await req.body;
        // buscando os email no banco de dados 
        const user = await connection.table('users').where({email});
        //informado que o email não esta cadastrado 
        if(!user || (user && user.length == 0)){
          return  res.status(401).json({mensagem: 'Email nao cadastrado'})
        }
        //verificando se a password esta correta 
        const ispassword = await bcrypt.compare( password, user[0].password);
        //informando que a password esta incorreta 
        if(!ispassword){
          return res.status(401).json({mensagem: 'password incorreta '})
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
      const{ name, telephone, email, password } = req.body;
      const{id} = req.params

      await connection('users').update({
        name,
        telephone,
        email,
        password,
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