module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-69.railway.app'),
      port: env.int('DATABASE_PORT', 7687),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'WRC9J5jmvRXMcIY3YitT'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
