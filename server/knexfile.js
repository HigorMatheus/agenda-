// Update with your config settings.

// path utilizamos para lidar com caminhos dentro do nodeJS
const path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // determinando o nome e a localizaçao do arquivo de DB
      // filename: './src/database/database.sqlite3'
      // determinando o nome e a localizaçao do arquivo de DB para rodar em qualquer sistema
      filename: path.resolve(__dirname, 'src', 'database','database.sqlite3')
    },

    migrations: {
      tableName: 'knex_migrations',
      //informando onde as migrations serão criadas 
      directory: `${__dirname}/src/database/migrations`
    },
    //fazer o sqlite entender o padrão de informaçoes 
    // useNullAsDefault : true,
    useNullAsDefault: true
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
