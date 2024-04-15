const passport = require("passport");

/**
 * Exports middleware to apply in routes.
 *
 * "jwt": Authentication middleware with JWT.
 */
module.exports = {
  jwt: () => passport.authenticate("jwt", { session: false }),
};
