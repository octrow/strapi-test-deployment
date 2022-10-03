module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-70.railway.app'),
      port: env.int('DATABASE_PORT', 7477),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'ch047CrvDxBbGVFAzsx7'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
