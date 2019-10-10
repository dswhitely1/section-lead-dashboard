const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('../config/passport');

module.exports = server => {
  server.use(helmet());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cors());
  server.use(passport.initialize());
  passportConfig(passport);
  server.use(morgan('dev'));
};
