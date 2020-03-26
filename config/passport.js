const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

const db = require('../models');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(jwtOptions, (async (payload, done) => {
  try {
    const account = await db.Account.findByPk(payload.id);
    if (account) {
      done(null, account);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
})));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
},
(async (email, password, done) => {
  try {
    const account = await db.Account.findOne({ where: { email } });
    if (!account || !bcrypt.compareSync(password, account.password)) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, account);
  } catch (error) {
    done(error);
  }
})));
