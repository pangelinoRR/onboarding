const User = require("../models/User");
const hashing = require("../utils/hash");
const jwt = require("../utils/jwt");

/**
 * Handler for the login route.
 */
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    /**
     * No user found with the email provided in the body.
     */
    if (!user) {
      res.status(401).json({ message: "No user found." });
    }

    /**
     * Checks if the password is the same as the one that is hashed.
     */
    const isPasswordValid = hashing.validate(
      req.body.password,
      user.hash,
      user.salt
    );

    /**
     * Passwords do not match.
     * Return Unauthorized response.
     */
    if (!isPasswordValid) {
      res
        .status(401)
        .json({ message: "Credentials do not match. Wrong password." });
    }

    /**
     * User is found and the passwords match.
     * Successfully respond, sending a new token.
     */
    return res.status(200).json({
      message: "Login successful",
      data: {
        user,
        token: jwt.issue(user),
      },
    });
  } catch (error) {
    return res.json({
      message: "Error during login.",
      error,
    });
  }
};

/**
 * Handler for the register route.
 */
const register = async (req, res) => {
  const { hash, salt } = hashing.generate(req.body.password);

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    hash,
    salt,
  });

  try {
    /**
     * Create a new user in the database.
     */
    const result = await user.save();

    /**
     * Respond with the user data and a new token.
     */
    return res.status(201).json({
      message: "User created successfully",
      data: {
        user: result,
        token: jwt.issue(result),
      },
    });
  } catch (error) {
    return res.json({ message: "Could not register the user.", error });
  }
};

module.exports = {
  login,
  register,
};
