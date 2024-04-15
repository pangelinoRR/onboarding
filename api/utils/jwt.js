const jwt = require("jsonwebtoken");

/**
 * Issues a new JWT token.
 */
const issue = (user) => {
  const payload = {
    sub: user?._id,
    iat: Date.now(),
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d", // Expires in 1 day
  });

  return token;
};

module.exports = {
  issue,
};
