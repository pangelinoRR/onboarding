const passport = require("passport");
const User = require("../models/User");
const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");

/**
 * Options for the JWT authentication strategy.
 */
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const initialize = (app) => {
  /**
   * Defines the JWT Strategy, which consists in
   * trying to get a User from the database given a
   * certain ID, coming from the JWT payload.
   * If it finds that User, then it means the User is
   * successfully authenticated.
   */
  const strategy = new JWTStrategy(options, async (payload, done) => {
    try {
      const user = await User.findOne({ _id: payload.sub });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, null);
    }
  });

  /**
   * Registers the defined strategy in passport.
   */
  passport.use(strategy);

  /**
   * Initializes Passport for every request.
   */
  app.use(passport.initialize());
};

module.exports = initialize;
