const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const db = require('../../data/dbConfig');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETS_OR_KEY || 'testing';
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      db('users')
        .where('id', jwtPayload.id)
        .then(user => {
          console.log(user);
          if (user !== []) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
