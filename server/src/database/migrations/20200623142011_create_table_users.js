

exports.up = function(knex) {
  //CRIAR UMA TABELA 
  return knex.schema.createTable('users',function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('telephone').notNullable();
    table.string('email ').notNullable();
    table.string('senha ').notNullable();
    table.string('confirma_senha').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  // VOLTAR ATRAS (DELETAR A TABELA)
  return Knex.schema.dropTable('users');
};
