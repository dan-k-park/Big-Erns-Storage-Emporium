const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const { User } = require('../models')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({
    where: { id: id }
  })
    .then(user => {
      done(null, user)
    })
})

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    // if request goes through a proxy e.g. heroku proxy then trust it
    proxy: true,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({
      where: { googleId: profile.id }
    })
      .then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      })
  }
)
)