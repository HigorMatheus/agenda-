const connection = require('../database/connection');


const ProductController={

    // listando products
    async index(req,res){
        const {user_id}= req.query;

        const query = connection('products');
        if(user_id){
            query
            .where({user_id})
            .join('users','users.id','=','products.user_id')
            .select('products.*','users.name')
        }

        const results = await query;

        return res.json(results)
    },
     // criando um product 
     async create( req,res){
        // console.log(req.body)
        const{
          name,
          imagem,
          descricao,
          valor,
          user_id,
        } = req.body;
        await connection('products').insert({
            name,
            imagem,
            descricao,
            valor,
            user_id,
        });
        return res.json(res.body);
      },
}

module.exports = ProductController;