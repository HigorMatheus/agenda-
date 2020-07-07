
exports.up = function(knex) {
    //CRIAR UMA TABELA 
    return knex.schema.createTable('tokens',function(table){
      table.increments('id').primary();
      table.string('user_id').references('users.id')
      table.string('token');
    });
  };
  
  exports.down = function(knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)
    return Knex.schema.dropTable('tokens');
  };