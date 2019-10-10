const authRouter = require('./auth/auth.router');

module.exports = server => {
  server.use('/api/auth', authRouter);
};
