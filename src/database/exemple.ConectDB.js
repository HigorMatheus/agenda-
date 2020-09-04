// inportando o Knex 
const Knex = require('knex');
// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');

//criando coneção com banco de dados 
const DataBase = Knex({
   // client: 'sqlite3',
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite3'),
  // },
  // useNullAsDefault: true,
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
// exportando conection
module.exports = DataBase;

// Migrations = historico de alteraçoes do banco de dados 