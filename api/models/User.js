const mongoose = require("mongoose");

/**
 * Defines the User schema.
 */
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  hash: String,
  salt: String,
});

/**
 * Creates the User model blueprint with
 * the defined schema.
 */
const User = mongoose.model("User", UserSchema);

module.exports = User;
