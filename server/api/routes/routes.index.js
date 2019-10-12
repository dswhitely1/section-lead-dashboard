const passport = require('passport');
const authRouter = require('./auth/auth.router');
const teamLeadRouter = require('./teamlead/teamlead.router');
const studentRouter = require('./students/student.router');

module.exports = server => {
  server.use('/api/auth', authRouter);
  server.use(
    '/api/team',
    // passport.authenticate('jwt', { session: false }),
    teamLeadRouter
  );
  server.use(
    '/api/student',
    // passport.authenticate('jwt', { session: false }),
    studentRouter
  );
};
