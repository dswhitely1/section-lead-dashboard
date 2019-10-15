module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.MYDBHOST,
      database: 'dashboard',
      user: process.env.MYDBUSER,
      password: process.env.MYDBPASSWORD,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullasDefault: true,
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullasDefault: true,
  },
};
