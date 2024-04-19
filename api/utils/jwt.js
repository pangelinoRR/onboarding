const jwt = require("jsonwebtoken");

/**
 * Issues a new JWT token.
 */
const issue = (user) => {
  const payload = {
    sub: user?._id,
    iat: new Date().getTime() / 1000,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "2m",
  });

  return token;
};

module.exports = {
  issue,
};
