const connection = require('../database/connection');


const ProductController={

    // listando products
    async index(req,res){
        // const {user_id}= req.query;

        // const query = connection('products');
        // if(user_id){
        //     query
        //     .where({user_id})
        //     .join('users','users.id','=','products.user_id')
        //     .select('products.*','users.name')
        // }

        const results = await connection.table('products');

        return res.json(results)
    },
     // criando um product 
     async create( req,res){
        console.log( req.body  )
        const{
          name,
          imagem,
          descricao,
          valor,
          user_id
        } = req.body;
        await connection('products').insert({
            name,
            imagem,
            descricao,
            valor,
            user_id,
        });
        return res.json(req.body);
      },
          // alterando um usuario
    async update(req,res){
        const{ 
            name,
            imagem,
            descricao,
            valor,
        } = req.body;
        const{id} = req.params
  
        await connection('users').update({
            name,
            imagem,
            descricao,
            valor,
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

module.exports = ProductController;