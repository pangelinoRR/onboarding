const User = require("../models/User");

/**
 * Handler for the details route for User.
 */
const details = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    /**
     * Exclude "salt" and "hash" from the response.
     */
    const { salt, hash, ...result } = user._doc;

    res
      .status(200)
      .send({ message: "User fetched successfully", data: { user: result } });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching the details for the User", error });
  }
};

module.exports = {
  details,
};
