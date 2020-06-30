
exports.up = function(knex) {
    //CRIAR UMA TABELA 
    return knex.schema.createTable('products',function(table){
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('imagem').notNullable();
      table.string('descricao').notNullable();
      table.string('valor').notNullable();
      table.integer('user_id')
        //referenciando o id da tabela usuario 
        .references('users.id')
        .notNullable()
        //quando deletar um usuario tbem deletar os produtos deste usuario
        .onDelete('CASCADE')
      ;
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)
    return Knex.schema.dropTable('products');
  };