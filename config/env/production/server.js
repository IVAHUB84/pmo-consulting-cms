// config/env/production/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('', 'https://your-app.onrender.com'), // замените позже
  proxy: true,
  app: {
    keys: env.array('APP_KEYS').split(','),
  },
});