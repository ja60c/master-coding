// Update with your config settings.

module.exports = {

// MODO DESARROLLO:
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: '5qLja60c'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

// STAGING o MODO DE MONTAJE contiene los datos más parecidos o casi idénticos al modo de producción
  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: '5qLja60c'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

// MODO PRODUCCIÓN: contiene los datos reales de tu negocio
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: '5qLja60c'
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
