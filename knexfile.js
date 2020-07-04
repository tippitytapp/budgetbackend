// Update with your config settings.
// import environment
require('dotenv').config()
const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'budget',
      user: 'postgres',
      password: 'marctapp'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};
