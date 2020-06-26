// inportando o Knex 
const Knex = require('knex');
// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');

//criando coneção com banco de dados 
const connection = Knex({
    client: 'sqlite3',
    connection:{
      filename: path.resolve(__dirname,'database.sqlite3')
    },
    // useNullAsDefault : true
    useNullAsDefault: true
});
// exportando conection
module.exports = connection;

// Migrations = historico de alteraçoes do banco de dados 