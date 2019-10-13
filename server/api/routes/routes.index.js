const passport = require('passport');
const authRouter = require('./auth/auth.router');
const teamLeadRouter = require('./teamlead/teamlead.router');
const studentRouter = require('./students/student.router');
const unitRouter = require('./unit/unit.router');
const sprintRouter = require('./sprint/sprint.router');
const moduleRouter = require('./module/module.router');
const attendanceRouter = require('./attendance/attendance.router');

module.exports = server => {
  server.use('/api/auth', authRouter);
  server.use(
    '/api/team',
    passport.authenticate('jwt', { session: false }),
    teamLeadRouter
  );
  server.use(
    '/api/student',
    passport.authenticate('jwt', { session: false }),
    studentRouter
  );
  server.use(
    '/api/unit',
    passport.authenticate('jwt', { session: false }),
    unitRouter
  );
  server.use(
    '/api/sprint',
    passport.authenticate('jwt', { session: false }),
    sprintRouter
  );
  server.use(
    '/api/module',
    passport.authenticate('jwt', { session: false }),
    moduleRouter
  );
  server.use(
    '/api/attendance',
    passport.authenticate('jwt', { session: false }),
    attendanceRouter
  );
};
