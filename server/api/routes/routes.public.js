const publicRouter = require('express').Router();
const authRouter = require('./auth/auth.router');

publicRouter.post('/api/auth', authRouter);
module.exports = publicRouter;
