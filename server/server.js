const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const logger = require('morgan')
require('./models/user')
require('./services/passport');


const app = express();

// Parse requests of content-type: application/json
app.use(express.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    // cookie last for 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // cookieKey is a random string of letters can be anything
    // put in an array if multiple keys are desired and cookieSession will randomly pick one
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// authRoutes file returns a function
// the (app) immediately invokes said function that was just required in
require('./routes/authRoutes')(app);
require('./routes/locationRoutes')(app);
require('./routes/unitRoutes')(app)
require('./routes/userRoutes')(app)

// Morgan logger
app.use(logger('dev'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))