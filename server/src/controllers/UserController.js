// importando conexão com banco de dados 
const connection = require('../database/connection');
// utilizamos para criptografar senha 
const bcrypt = require('bcryptjs')

const generateAuthToken = require('jsonwebtoken')

const UserController = {

    // visualizar todos os usuarios 
    async index (req,res){
 
        connection.select( 'id','name','email','telephone').table('users').then((results)=>{
          return res.json(results)
        })

    },

    // criando um usuario 
    async create( req,res){
      // console.log(req.body)
      name= req.body.name;
      telephone = req.body.telephone;
      email= req.body.email;
      senha = req.body.senha;
      confirma_senha= req.body.confirma_senha;

      bcrypt.genSalt(10, (erro, salt)=>{
          bcrypt.hash(senha,salt, async (erro,hash)=>{
            if(erro){
              req.json('erro ao salvar usuario')
              res.redirect("/")
            }
             await connection.table('users').insert( {
              name,
              telephone,
              email,
              senha: hash,
              confirma_senha,
            } );
            return res.json( req.body );
          });
        });
    },

    // authentcation user
    async auth(req, res, next){
      // try {
        // recebendo parametros do formulario
        const{ email, senha}= await req.body;
        //verificando se existe o email no banco de dados 
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
        
        //inportando function para gerar JsonWebToken
        // const token = generateAuthToken(user[0])
        // const checkUser = await connection.table('tokens').where({user_id: user[0].id});

        // if (checkUser && checkUser.length > 0) {
        //   await connection.table('tokens').where({user_id: user[0].id}).update({token});
        // } else {
        //   await connection.table('tokens').insert({user_id: user[0].id, token});
        // }
        const data = {
          name: user[0].name,
          telephone: user[0].telephone,
          email: user[0].email,
          // token
        }

        return res.status(200).json(data);
      // } catch (error) {
      //   // return res.status(500).json({ message: `${JSON.stringify(error)}` });
      // }
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

 // criprografando 
                // const secret = senha;
                // const hash = crypto.createHmac('sha256', secret)
                // // .update('I love cupcakes')
                // .digest('hex');


//  await connection.table('users').whereExists(function() {
    //     this.select('email').from().where( email).then(user=>{
    //       return console.log(user)
    //     });
        
    //   })
      // try {
      //     if ( await connection.findOne({email})) return res.status(400).send({error: 'Usiario já existe'})
      //       const usuario = await connection.table('users').create({ name, telephone, email, senha: hash, confirma_senha, })
      //   usuario.senha = undefined;
      //   return res.send({ Sucesso:' Usuário cadastrado com sucesso!'})
      // } catch (err) {
      //   console.log(err)
      //   return res.status(400).send({Erro: 'Erro ao cadastra usuario '})
      // }

          // await await connection.select('email').table('users').then(mail =>{
          //     var maill = mail.find()
          //     // maill.forEach( user =>{
          //         var gmail = mail.email
          //         if ( email != gmail)  {
          //            console.log( gmail,email, {mensagem: " cadastrado com sussesso"})
          //         } else {
          //            console.log( gmail,email,{ mensagem: "usuario ja cadastrado "})
          //         }
          //     // })
          // });