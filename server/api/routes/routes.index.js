const passport = require('passport');
const authRouter = require('./auth/auth.router');
const teamLeadRouter = require('./teamlead/teamlead.router');
const studentRouter = require('./students/student.router');
const unitRouter = require('./unit/unit.router');
const sprintRouter = require('./sprint/sprint.router');
const moduleRouter = require('./module/module.router');
const attendanceRouter = require('./attendance/attendance.router');
const authorization = require('../auth/authorization');

module.exports = server => {
  server.use('/api/auth', authRouter);
  server.use('/api/team', authorization, teamLeadRouter);
  server.use('/api/student', authorization, studentRouter);
  server.use('/api/unit', authorization, unitRouter);
  server.use('/api/sprint', authorization, sprintRouter);
  server.use('/api/module', authorization, moduleRouter);
  server.use('/api/attendance', authorization, attendanceRouter);
};
