
exports.up = function(knex) {
  //CRIAR UMA TABELA 
  return knex.schema.createTable('users',function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('telephone').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('confirma_password').notNullable();
  });
};

exports.down = function(knex) {
  // VOLTAR ATRAS (DELETAR A TABELA)
  return Knex.schema.dropTable('users');
};