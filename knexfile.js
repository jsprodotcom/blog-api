// Update with your config settings.

module.exports = {

    test: {
        client: 'sqlite3',
        connection: { filename: './dev.sqlite3' },        
        migrations: { tableName: 'knex_migrations' },
        seeds: { directory: './seeds' },
        debug: false,
        useNullAsDefault: true
    },

  development: {
    client: 'postgresql',
    connection: {
      database: 'pgfun',
      user:     'postgres',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
