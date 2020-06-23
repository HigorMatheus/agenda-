// inportando o Knex 
const Knex = require('knex')('../../knexfile');
// const Knexfile =require

// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');

//criando coneção com banco de dados 
const connection = Knex({
    client: 'sqlite3',
    connection:{
      filename: path.resolve(__dirname,'src','database','database.sqlite')
    },
});

// exportando conection
module.exports = connection;


// Migrations = historico de alteraçoes do banco de dados 