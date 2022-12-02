const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const db = require("../models");

const cookieExtractor = (req) => {
  let token;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

//authorization
passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "projectm",
    },
    (payload, done) => {
      db.User.findById({ _id: payload.sub }, (err, user) => {
        console.log(" JWT:", { _id: payload.sub, err: err, user: user });
        if (err) return done(err, false);
        if (user) return done(null, user, { message: "fail" });
        else return done(null, done);
      });
    }
  )
);

//authenticating using username and password
passport.use(
  new localStrategy((username, password, done) => {
    console.log("outside:", { username: username, password: password });

    db.User.findOne({ username }, (err, user) => {
      console.log("inside", { username: username, err: err, user: user });
      if (err) return done(err);
      if (!user) return done(null, false); //no user exists
      //validate password credentials
      user.comparePassword(password, done);
    });
  })
);
