const crypto = require("crypto");

/**
 * Generates a new hashed password.
 */
const generate = (password) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return { salt, hash };
};

/**
 * Validates an incoming password against a hashed one.
 */
const validate = (password, hash, salt) => {
  return (
    hash ===
    crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex")
  );
};

module.exports = {
  generate,
  validate,
};
